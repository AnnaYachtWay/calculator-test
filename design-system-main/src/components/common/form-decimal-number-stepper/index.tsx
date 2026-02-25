'use client';

import type { Control, FieldValues, Path } from 'react-hook-form';
import { Controller } from 'react-hook-form';

import type { DecimalNumberStepperProps } from '../decimal-number-stepper';
import { DecimalNumberStepper } from '../decimal-number-stepper';

export type Props<C extends FieldValues> = Omit<
  DecimalNumberStepperProps,
  'onChange'
> & {
  control: Control<C>;
  name: Path<C>;
  inputClassName?: string;
  onChange?(value: number): void;
};

const FormDecimalNumberStepper = <C extends FieldValues>({
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
        <DecimalNumberStepper
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

FormDecimalNumberStepper.displayName = 'FormDecimalNumberStepper';

export { FormDecimalNumberStepper };
