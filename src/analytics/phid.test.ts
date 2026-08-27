import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

import { attachPhid, withPhid } from "./phid";

const SITE = "https://determinate.systems/";

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
