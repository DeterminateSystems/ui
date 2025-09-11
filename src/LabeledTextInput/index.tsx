import React, { type FC } from "react";

import "./index.scss";
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
            "labeled-text-input",
            error && "labeled-text-input--error",
          )}
        />
      )}
    </LabeledInput>
  );
};

export default LabeledTextInput;
