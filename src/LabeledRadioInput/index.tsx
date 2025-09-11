import React, { type FC } from "react";

import "./index.scss";
import LabeledInput from "../LabeledInput";

export type RadioOptionProps = {
  value: string;
  children: React.ReactNode;
};

export type LabeledRadioInputProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "type" | "value" | "checked" | "defaultChecked"
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
}) => {
  return (
    <LabeledInput label={label} error={error} help={help} id={id}>
      {({ labelId, controlId, errorId, describedById = "" }) => (
        <fieldset
          className="labeled-radio-input"
          aria-labelledby={labelId}
          aria-invalid={!!error}
          aria-errormessage={errorId}
          aria-describedby={describedById}
        >
          {options.map(({ value, children }) => {
            return (
              <div key={value} className="labeled-radio-input__row">
                <input
                  id={`${controlId}-${value}`}
                  defaultChecked={selected === value}
                  value={value}
                  type="radio"
                  {...props}
                />

                <label
                  className="labeled-radio-input__label"
                  htmlFor={`${controlId}-${value}`}
                  id={`${controlId}-${value}-description`}
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
