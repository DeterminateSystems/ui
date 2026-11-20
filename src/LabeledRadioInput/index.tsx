import React, { type FC } from "react";

import clsx from "clsx";
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
  className,
  ...props
}) => {
  return (
    <LabeledInput label={label} error={error} help={help} id={id}>
      {({ labelId, controlId, errorId, describedById = "" }) => (
        <fieldset
          className="ui:flex ui:flex-col ui:gap-2"
          aria-labelledby={labelId}
          aria-invalid={!!error}
          aria-errormessage={errorId}
          aria-describedby={describedById}
        >
          {options.map(({ value, children }) => {
            return (
              <div key={value} className="ui:flex ui:items-start ui:gap-3">
                <input
                  id={`${controlId}-${value}`}
                  defaultChecked={selected === value}
                  value={value}
                  type="radio"
                  {...props}
                  className={clsx("ui:mt-1", className)}
                />

                <label
                  className="ui:block ui:text-sm ui:leading-5 ui:font-medium ui:text-white ui:light:text-gray-dark"
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
