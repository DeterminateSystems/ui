import { type FC } from "react";

import "./index.scss";

import useHighlight from "../hooks/useHighlight";
import clsx from "clsx";
import type { HighlightLanguage } from "../shared";

export interface HighlightProps {
  /**
   * The language of this code snippet. Using `language="text"` will turn highlighting off.
   */
  language: HighlightLanguage;

  /**
   * The code to be highlighted and rendered.
   */
  code: string;

  /**
   * Whether or not to display the code as a block or inline element.
   */
  inline?: boolean;
}

/**
 * A `<Highlight />` component renders a highlighted
 * `<pre><code>...</code></pre>` snippet. This is useful for composing in other
 * composite components, but it's more likely you want the `<CodeBlock />`
 * component, which handles (optional) copying to clipboard and downloading.
 */
const Highlight: FC<HighlightProps> = ({ language, code, inline = false }) => {
  const html = useHighlight(language, code);

  return (
    <pre
      className={clsx("highlight", inline && "highlight--inline")}
      data-language={language}
    >
      <code dangerouslySetInnerHTML={{ __html: html }} />
    </pre>
  );
};

export default Highlight;
