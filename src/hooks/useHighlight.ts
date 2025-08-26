import { createHighlighterCoreSync } from "@shikijs/core";
import { createJavaScriptRegexEngine } from "@shikijs/engine-javascript";
import langShell from "@shikijs/langs/shellscript";
import langTerraform from "@shikijs/langs/terraform";
import langYaml from "@shikijs/langs/yaml";
import langNix from "@shikijs/langs/nix";
import themeGitHubDark from "@shikijs/themes/github-dark";
import themeGitHubLight from "@shikijs/themes/github-light";
import { useMemo } from "react";

/**
 * Languages understood by the UI system's highlighter. The `text` option prevents highlighting.
 */
export const highlightLanguages = [
  "nix",
  "shell",
  "terraform",
  "text",
  "yaml",
] as const;
export type HighlightLanguage = (typeof highlightLanguages)[number];

// Lazily instantiate the Shiki renderer to avoid paying (some) startp costs
let shiki: ReturnType<typeof createHighlighterCoreSync>;
function getShiki() {
  return (shiki ??= createHighlighterCoreSync({
    themes: [themeGitHubLight, themeGitHubDark],
    langs: [langNix, langShell, langTerraform, langYaml],
    engine: createJavaScriptRegexEngine(),
  }));
}

/**
 * Hook to highlight code. The rendered HTML is memoized to avoid excessive re-computing of the syntax highlighting for various documents.
 *
 * @param language The language to highlight. `'text'` turns highlighting off.
 * @param code The code to highlight.
 *
 * @returns Safe-to-inject HTML representing highlighting.
 */
function useHighlight(language: HighlightLanguage, code: string): string {
  return useMemo(() => {
    const html = getShiki().codeToHtml(code, {
      lang: language,
      themes: {
        light: "github-light",
        dark: "github-dark",
      },
      defaultColor: false,
      structure: "inline",
    });

    return html;
  }, [language, code]);
}

export default useHighlight;
