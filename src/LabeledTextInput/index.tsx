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
            "block w-full rounded-lg border-[2.5px] border-solid px-[0.6rem] py-[0.4rem] text-base",
            "transition-[border-color,outline-color,outline-width] duration-150",
            "bg-ds-gray-600 text-ds-white light:bg-ds-mist light:text-ds-ink",
            error
              ? "border-ds-danger"
              : "border-ds-gray-600 light:border-ds-gray-300",
            "placeholder:text-ds-gray-300 placeholder:opacity-60 light:placeholder:text-ds-gray-900",
            "focus-visible:border-ds-rich-blue light:focus-visible:border-ds-rich-blue",
            "disabled:cursor-not-allowed disabled:border-ds-gray-600 disabled:bg-ds-gray-600 disabled:opacity-60",
            "light:disabled:border-ds-gray-300 light:disabled:bg-ds-gray-300",
          )}
        />
      )}
    </LabeledInput>
  );
};

export default LabeledTextInput;
