import React, { useId, type FC } from "react";

import "./index.scss";
import clsx from "clsx";

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
  const generatedId = useId();
  const fieldId = id ?? generatedId;
  const errorId = error ? `${fieldId}__error` : undefined;
  const helpId = help ? `${fieldId}__help` : undefined;

  const describedById =
    [errorId, helpId].filter(Boolean).join(" ") || undefined;

  return (
    <div className="labeled-text-input">
      <label htmlFor={fieldId}>{label}</label>
      <input
        {...props}
        id={fieldId}
        type="text"
        aria-invalid={!!error}
        aria-errormessage={errorId}
        aria-describedby={describedById}
        defaultValue={defaultValue}
        className={clsx(error && "labeled-text-input__input--error")}
      />
      {error && (
        <p id={errorId} role="alert" className="labeled-text-input__error">
          {error}
        </p>
      )}

      {help && (
        <p id={helpId} className="labeled-text-input__help">
          {help}
        </p>
      )}
    </div>
  );
};

export default LabeledTextInput;
