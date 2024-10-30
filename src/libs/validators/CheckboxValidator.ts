import { ValidatorFuncProps, ValidatorOptionProps } from "./ValidatorProps";
import { tx } from "~libs/i18n";

export interface ICheckboxValidatorOptions extends ValidatorOptionProps {
  errorName: string;
  value: boolean;
}

export const CheckboxValidator: ValidatorFuncProps = (
  inputValue: boolean,
  { errorName }: ICheckboxValidatorOptions
) => {
  const normBoolValue = inputValue;

  let valid = true;
  let error: string;

  if (!normBoolValue) {
    valid = false;
    error = tx("validators.missing", {
      name: errorName,
    });
  }

  return { valid, error };
};
