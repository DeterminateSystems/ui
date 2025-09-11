import React, { useId, type FC } from "react";

import "./index.scss";

export interface LabeledInputRenderProps {
  controlId: string;
  labelId: string;
  errorId: string | undefined;
  describedById: string | undefined;
}

export interface LabeledInputProps {
  id?: string;
  label: React.ReactNode;
  error?: React.ReactNode;
  help?: React.ReactNode;
  children: (props: LabeledInputRenderProps) => React.ReactNode;
}

const LabeledInput: FC<LabeledInputProps> = ({
  id,
  label,
  error,
  help,
  children,
}) => {
  const generatedId = useId();
  const baseId = id ?? generatedId;
  const labelId = `${baseId}__label`;
  const controlId = `${baseId}__control`;
  const errorId = error ? `${baseId}__error` : undefined;
  const helpId = help ? `${baseId}__help` : undefined;

  const describedById =
    [errorId, helpId].filter(Boolean).join(" ") || undefined;

  return (
    <div className="labeled-input">
      <label id={labelId} htmlFor={controlId}>
        {label}
      </label>

      {children({ labelId, controlId, errorId, describedById })}

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
