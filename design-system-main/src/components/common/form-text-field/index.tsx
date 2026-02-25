'use client';

import type { InputBaseComponentProps } from '@mui/material';
import type { Control, FieldValues, Path } from 'react-hook-form';
import { Controller } from 'react-hook-form';

import { NumericTextField } from '../numeric-text-field';
import { PatternTextField } from '../pattern-text-field';
import { TextField, type YachtwayFieldProps } from '../text-field';

type Props<C extends FieldValues> = YachtwayFieldProps & {
  control: Control<C>;
  name: Path<C>;
  mask?: string | RegExp | NumberConstructor;
  withCharLimit?: boolean;
  type?: 'text' | 'number' | 'password' | 'email' | 'numeric' | 'pattern';
};

const numberInputProps = {
  pattern: '[0-9]*',
};

const FormTextField = <C extends FieldValues>({
  control,
  name,
  mask,
  InputProps,
  inputProps,
  InputLabelProps,
  withCharLimit,
  type,
  ...rest
}: Props<C>) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <TextField
          withCharLimit={withCharLimit}
          {...field}
          {...rest}
          type={type}
          onChange={
            rest.onChange ||
            (mask === Number || type === 'number'
              ? (e) => {
                  const { value } = e.target;

                  field.onChange(value === '' ? value : Number(value));
                }
              : field.onChange)
          }
          value={
            !!mask && field.value?.toString()
              ? field.value.toString()
              : field.value
          }
          ref={field.ref}
          inputProps={{
            ...(inputProps || {}),
            ...(mask === Number ? numberInputProps : {}),
          }}
          InputLabelProps={{
            ...(InputLabelProps || {}),
            shrink: InputLabelProps?.shrink || !!field.value,
          }}
          InputProps={{
            ...(InputProps || {}),

            inputProps: {
              ...(inputProps || {}),
            },
            ...(type === 'numeric'
              ? {
                  inputComponent:
                    NumericTextField as unknown as React.ElementType<InputBaseComponentProps>,
                }
              : {}),
            ...(type === 'pattern'
              ? {
                  inputComponent:
                    PatternTextField as unknown as React.ElementType<InputBaseComponentProps>,
                }
              : {}),
          }}
        />
      )}
    />
  );
};

export { FormTextField };
