import { type FC } from "react";

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
      className="grid place-items-center rounded-lg border border-solid border-ds-line-dark bg-ds-slate text-ds-white light:border-ds-line-light light:bg-ds-mist light:text-ds-ink"
      style={{
        width: width ?? "100%",
        height,
      }}
    >
      {label}
    </div>
  );
};
