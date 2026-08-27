import { describe, expect, it } from "vitest";

import {
  externalLinkAttrs,
  isExternal,
  isSiblingHost,
  isSiblingProperty,
} from "./siblings";

const SITE = "https://determinate.systems/";

describe("isSiblingHost", () => {
  it("accepts the Determinate properties", () => {
    for (const host of [
      "determinate.systems",
      "docs.determinate.systems",
      "security.determinate.systems",
      "install.determinate.systems",
      "flakehub.com",
      "zero-to-nix.com",
    ]) {
      expect(isSiblingHost(host), host).toBe(true);
    }
  });

  it("rejects third-party subdomains and everyone else", () => {
    for (const host of [
      "status.determinate.systems",
      "trust.determinate.systems",
      "github.com",
      "notdeterminate.systems",
      "flakehub.com.evil.example",
    ]) {
      expect(isSiblingHost(host), host).toBe(false);
    }
  });
});

describe("isSiblingProperty", () => {
  it("is true for another property and false for the site itself", () => {
    expect(isSiblingProperty("https://flakehub.com/flake/x", SITE)).toBe(true);
    expect(isSiblingProperty("https://docs.determinate.systems/", SITE)).toBe(
      true,
    );
    expect(isSiblingProperty("https://determinate.systems/blog", SITE)).toBe(
      false,
    );
    expect(isSiblingProperty("/blog", SITE)).toBe(false);
  });

  it("is false for non-siblings and unparsable hrefs", () => {
    expect(isSiblingProperty("https://github.com/", SITE)).toBe(false);
    expect(isSiblingProperty("https://status.determinate.systems/", SITE)).toBe(
      false,
    );
    expect(isSiblingProperty("mailto:hello@determinate.systems", SITE)).toBe(
      false,
    );
    expect(isSiblingProperty("http://[bad", SITE)).toBe(false);
  });

  it("is false outside a browser when no base is given", () => {
    expect(isSiblingProperty("https://flakehub.com/")).toBe(false);
  });
});

describe("isExternal", () => {
  it("is true only for http(s) links to another origin", () => {
    expect(isExternal("https://flakehub.com/", SITE)).toBe(true);
    expect(isExternal("https://github.com/", SITE)).toBe(true);
    expect(isExternal("https://determinate.systems/blog", SITE)).toBe(false);
    expect(isExternal("/blog", SITE)).toBe(false);
    expect(isExternal("mailto:hello@determinate.systems", SITE)).toBe(false);
  });
});

describe("externalLinkAttrs", () => {
  it("opens external links in a new tab, keeping the referrer for siblings", () => {
    expect(externalLinkAttrs("/blog", SITE)).toEqual({
      external: false,
      target: undefined,
      rel: undefined,
      phid: false,
    });
    expect(externalLinkAttrs("https://flakehub.com/", SITE)).toEqual({
      external: true,
      target: "_blank",
      rel: "noopener",
      phid: true,
    });
    expect(externalLinkAttrs("https://github.com/", SITE)).toEqual({
      external: true,
      target: "_blank",
      rel: "noopener noreferrer",
      phid: false,
    });
  });
});
