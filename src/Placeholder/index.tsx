import { type FC } from "react";

import "./index.scss";

/**
 * Private component used to render placeholders in storybook and documentation examples
 * From: https://github.com/primer/react/blob/e1268ff35acf48561adef9e55f8add39f69924eb/packages/react/src/Placeholder.tsx
 * */
export const Placeholder: FC<
  React.PropsWithChildren<{
    id?: string | undefined;
    width?: number | string;
    height: number | string;
    label?: string;
  }>
> = ({ width, height, id, label }) => {
  return (
    <div
      id={id}
      className="placeholder"
      style={{
        width: width ?? "100%",
        height,
      }}
    >
      {label}
    </div>
  );
};
