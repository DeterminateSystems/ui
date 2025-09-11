import React, { type FC } from "react";

import "./index.scss";
import clsx from "clsx";
import LabeledInput from "../LabeledInput";

export type RadioOptionProps = {
  value: string;
  children: React.ReactNode;
};

export type LabeledRadioInputProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "type"
> & {
  name: string;
  selected?: string;
  options: RadioOptionProps[];
  label: React.ReactNode;
  error?: React.ReactNode;
  help?: React.ReactNode;
};

const LabeledRadioInput: FC<LabeledRadioInputProps> = ({
  id,
  label,
  selected,
  options,
  error,
  help,
  ...props
}: LabeledRadioInputProps) => {
  return (
    <LabeledInput label={label} error={error} help={help} id={id}>
      {({ fieldId, errorId, describedById = "" }) => (
        <fieldset className="labeled-radio-input">
          {options.map(({ value, children }) => {
            return (
              <div key={value} className="labeled-radio-input__row">
                <input
                  {...props}
                  id={`${fieldId}-${value}`}
                  defaultChecked={selected == value}
                  value={value}
                  type="radio"
                  aria-invalid={!!error}
                  aria-errormessage={errorId}
                  aria-describedby={`${fieldId}-${value}-description ${describedById}`}
                  className={clsx(error && "labeled-radio-input--error")}
                />

                <label
                  className="labeled-radio-input__label"
                  htmlFor={`${fieldId}-${value}`}
                  id={`${fieldId}-${value}-description`}
                >
                  {children}
                </label>
              </div>
            );
          })}
        </fieldset>
      )}
    </LabeledInput>
  );
};

export default LabeledRadioInput;
