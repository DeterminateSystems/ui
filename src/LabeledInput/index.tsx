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
    <div className="grid gap-[0.6rem]">
      <label
        id={labelId}
        htmlFor={controlId}
        className="block text-base leading-6 font-medium text-ds-white light:text-ds-gray-900"
      >
        {label}
      </label>

      {children({ labelId, controlId, errorId, describedById })}

      {error && (
        <p id={errorId} role="alert" className="text-base text-ds-danger">
          {error}
        </p>
      )}

      {help && (
        <p
          id={helpId}
          className="text-xs leading-normal text-ds-white light:text-ds-gray-600"
        >
          {help}
        </p>
      )}
    </div>
  );
};

export default LabeledInput;
