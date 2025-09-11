import React, { useId, type FC } from "react";

import "./index.scss";

export interface LabeledInputRenderProps {
  fieldId: string;
  errorId: string | undefined;
  describedById: string | undefined;
}

export type LabeledInputProps = {
  id?: string;
  label: React.ReactNode;
  error?: React.ReactNode;
  help?: React.ReactNode;
  children: (props: LabeledInputRenderProps) => React.ReactNode;
};

const LabeledInput: FC<LabeledInputProps> = ({
  id,
  label,
  error,
  help,
  children,
}) => {
  const generatedId = useId();
  const fieldId = id ?? generatedId;
  const errorId = error ? `${fieldId}__error` : undefined;
  const helpId = help ? `${fieldId}__help` : undefined;

  const describedById =
    [errorId, helpId].filter(Boolean).join(" ") || undefined;

  return (
    <div className="labeled-input">
      <label htmlFor={fieldId}>{label}</label>

      {children({ fieldId, errorId, describedById })}

      {error && (
        <p id={errorId} role="alert" className="labeled-input__error">
          {error}
        </p>
      )}

      {help && (
        <p id={helpId} className="labeled-input__help">
          {help}
        </p>
      )}
    </div>
  );
};

export default LabeledInput;
