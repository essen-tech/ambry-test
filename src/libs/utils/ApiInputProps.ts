import { InputProps } from "~views/shared/components";
import { ValidatorProps } from "~libs/validators";

export interface ApiInputProps {
  toEmail: string;
  name: string;
  email: string;
  message: string;
  terms: boolean;
}

// export const validateItem = (item: ApiInputProps, setError: boolean) => {
//   if (item.validator) {
//     const validationResult = item.validator.func(item, item.validator.options);
//     if (setError) {
//       item.error = validationResult.error;
//     }
//     return validationResult.valid;
//   }
//   return true;
// };

// export const validateItems = (items: ApiInputProps, setError: boolean) => {
//   let valid = true;
//   items.some((item) => {
//     if (!validateItem(item, setError)) {
//       valid = false;
//       if (!setError) {
//         return true;
//       }
//     }
//     return false;
//   });
//   return valid;
// };
