'use client';

import type { Control, FieldValues, Path } from 'react-hook-form';
import { Controller } from 'react-hook-form';

import {
  DecimalNumberTextField,
  type DecimalNumberTextFieldProps,
} from '../decimal-number-text-field';

export type Props<C extends FieldValues> = Omit<
  DecimalNumberTextFieldProps,
  'onChange'
> & {
  control: Control<C>;
  name: Path<C>;
  inputClassName?: string;
  onChange?(value: number): void;
};

const FormDecimalNumberTextField = <C extends FieldValues>({
  control,
  name,
  onChange,
  ...rest
}: Props<C>) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <DecimalNumberTextField
          {...field}
          {...rest}
          value={field.value}
          onChange={(e) => {
            const { value } = e.target;

            const sanitizedValue = value === '' ? 0 : Number(value);

            if (onChange) {
              onChange(sanitizedValue);

              return;
            }

            field.onChange(sanitizedValue);
          }}
        />
      )}
    />
  );
};

FormDecimalNumberTextField.displayName = 'FormDecimalNumberTextField';

export { FormDecimalNumberTextField };
