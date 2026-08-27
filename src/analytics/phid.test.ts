import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

import { adoptPhid, attachPhid, withPhid } from "./phid";

const SITE = "https://determinate.systems/";

// A stand-in for posthog-js: `enabled` plays the part of "loaded and opted
// in", and `capture` fires the listeners `on("eventCaptured")` registered.
const fake = vi.hoisted(() => {
  const listeners = new Set<() => void>();
  return {
    enabled: false,
    listeners,
    alias: vi.fn(),
    on: vi.fn((_event: string, cb: () => void) => {
      listeners.add(cb);
      return () => listeners.delete(cb);
    }),
    capture: () => {
      for (const cb of [...listeners]) cb();
    },
  };
});

vi.mock("./posthog", () => ({
  analyticsEnabled: () => fake.enabled,
  posthog: { alias: fake.alias, on: fake.on },
}));

describe("withPhid", () => {
  it("adds the id to links to a sibling and nothing else", () => {
    expect(withPhid("https://flakehub.com/flake/x?y=1", "abc", SITE)).toBe(
      "https://flakehub.com/flake/x?y=1&phid=abc",
    );
    expect(withPhid("https://github.com/", "abc", SITE)).toBe(
      "https://github.com/",
    );
    expect(withPhid("/blog", "abc", SITE)).toBe("/blog");
  });

  it("leaves the href alone without an id", () => {
    expect(withPhid("https://flakehub.com/", undefined, SITE)).toBe(
      "https://flakehub.com/",
    );
  });
});

describe("attachPhid", () => {
  beforeEach(() => {
    vi.useFakeTimers();
    vi.stubGlobal("window", {
      location: { href: "https://determinate.systems/blog" },
    });
  });

  afterEach(() => {
    vi.unstubAllGlobals();
    vi.useRealTimers();
  });

  it("sets the id for the navigation, then restores the href", () => {
    const link = { href: "https://flakehub.com/" } as HTMLAnchorElement;
    attachPhid(link, "abc");
    expect(link.href).toBe("https://flakehub.com/?phid=abc");
    vi.runAllTimers();
    expect(link.href).toBe("https://flakehub.com/");
  });

  it("does nothing for other links or without an id", () => {
    const other = { href: "https://github.com/" } as HTMLAnchorElement;
    attachPhid(other, "abc");
    expect(other.href).toBe("https://github.com/");

    const sibling = { href: "https://flakehub.com/" } as HTMLAnchorElement;
    attachPhid(sibling, undefined);
    expect(sibling.href).toBe("https://flakehub.com/");
  });
});

describe("adoptPhid", () => {
  beforeEach(() => {
    fake.enabled = false;
    fake.listeners.clear();
    fake.alias.mockClear();
  });

  it("aliases once even though aliasing captures an event itself", () => {
    // posthog.alias captures $create_alias, which fires eventCaptured
    // synchronously, re-entering the flush.
    fake.alias.mockImplementation(() => fake.capture());
    try {
      adoptPhid("abc");
      fake.enabled = true;
      fake.capture();
      expect(fake.alias).toHaveBeenCalledTimes(1);
      expect(fake.listeners.size).toBe(0);
    } finally {
      fake.alias.mockReset();
    }
  });

  it("aliases right away when analytics are enabled", () => {
    fake.enabled = true;
    adoptPhid("abc");
    expect(fake.alias).toHaveBeenCalledWith("abc");
    expect(fake.listeners.size).toBe(0);
  });

  it("holds the id until consent, then aliases it once", () => {
    adoptPhid("abc");
    expect(fake.alias).not.toHaveBeenCalled();

    // Still pending: events fired while opted out don't flush it.
    fake.capture();
    expect(fake.alias).not.toHaveBeenCalled();

    fake.enabled = true;
    fake.capture();
    expect(fake.alias).toHaveBeenCalledTimes(1);
    expect(fake.alias).toHaveBeenCalledWith("abc");

    fake.capture();
    expect(fake.alias).toHaveBeenCalledTimes(1);
    expect(fake.listeners.size).toBe(0);
  });
});
