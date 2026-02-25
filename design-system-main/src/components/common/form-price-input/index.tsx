'use client';

import type { Control, FieldValues, Path } from 'react-hook-form';
import { Controller } from 'react-hook-form';

import { PriceInput } from '../price-input';

type PriceInputProps = React.ComponentProps<typeof PriceInput>;

interface FormPriceInputProps<C extends FieldValues> extends Omit<
  PriceInputProps,
  'value' | 'onChange'
> {
  control: Control<C>;
  name: Path<C>;
}

const FormPriceInput = <C extends FieldValues>({
  control,
  name,
  error,
  helperText,
  onBlur,
  ...rest
}: FormPriceInputProps<C>) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState }) => (
        <PriceInput
          {...rest}
          value={field.value}
          onChange={(value) => {
            field.onChange(value === '' ? value : Number(value));
          }}
          onBlur={(e) => {
            field.onBlur();
            onBlur?.(e);
          }}
          error={error ?? !!fieldState.error}
          helperText={helperText ?? fieldState.error?.message}
        />
      )}
    />
  );
};

export { FormPriceInput, type FormPriceInputProps };
