import React, { type FC } from "react";

import clsx from "clsx";
import LabeledInput from "../LabeledInput";

export type LabeledTextInputProps = Omit<
  React.ComponentPropsWithRef<"input">,
  "type" | "className"
> & {
  name: string;
  label: React.ReactNode;
  error?: React.ReactNode;
  help?: React.ReactNode;
};

const LabeledTextInput: FC<LabeledTextInputProps> = ({
  id,
  label,
  error,
  help,
  defaultValue,
  ...props
}) => {
  return (
    <LabeledInput label={label} error={error} help={help} id={id}>
      {({ labelId, controlId, errorId, describedById }) => (
        <input
          {...props}
          id={controlId}
          type="text"
          aria-labelledby={labelId}
          aria-invalid={!!error}
          aria-errormessage={errorId}
          aria-describedby={describedById}
          defaultValue={defaultValue}
          className={clsx(
            "ui:block ui:w-full ui:rounded-base ui:border-[2.5px] ui:border-solid ui:px-pad-lg ui:py-pad-base ui:text-base",
            "ui:transition-[border-color,outline-color,outline-width] ui:duration-150",
            "ui:bg-gray-light ui:text-white ui:light:bg-light ui:light:text-black",
            error
              ? "ui:border-danger"
              : "ui:border-gray-light ui:light:border-gray-very-light",
            "ui:placeholder:text-gray-very-light ui:placeholder:opacity-60 ui:light:placeholder:text-gray-dark",
            "ui:focus-visible:border-rich-blue ui:light:focus-visible:border-rich-blue",
            "ui:disabled:cursor-not-allowed ui:disabled:border-gray-light ui:disabled:bg-gray-light ui:disabled:opacity-60",
            "ui:light:disabled:border-gray-very-light ui:light:disabled:bg-gray-very-light",
          )}
        />
      )}
    </LabeledInput>
  );
};

export default LabeledTextInput;
