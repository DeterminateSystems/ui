import React, { useId, type FC } from "react";

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
    <div className="ui:grid ui:gap-pad-lg">
      <label
        id={labelId}
        htmlFor={controlId}
        className="ui:block ui:text-base ui:leading-6 ui:font-medium ui:text-white ui:light:text-gray-dark"
      >
        {label}
      </label>

      {children({ labelId, controlId, errorId, describedById })}

      {error && (
        <p id={errorId} role="alert" className="ui:text-base ui:text-danger">
          {error}
        </p>
      )}

      {help && (
        <p
          id={helpId}
          className="ui:text-sm ui:text-white ui:light:text-gray-light"
        >
          {help}
        </p>
      )}
    </div>
  );
};

export default LabeledInput;
