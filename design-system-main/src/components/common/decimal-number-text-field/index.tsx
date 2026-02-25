'use client';

import type { InputBaseComponentProps, TextFieldProps } from '@mui/material';
import React from 'react';
import type { NumberFormatValues } from 'react-number-format';

import { NumericTextField } from '../numeric-text-field';
import { TextField } from '../text-field';

export interface DecimalNumberTextFieldProps extends Omit<
  TextFieldProps,
  'onChange' | 'variant' | 'ref'
> {
  decimalScale?: number;
  disabled?: boolean;
  endAdornment?: React.ReactNode;
  error?: boolean;
  helperText?: string;
  inputClassName?: string;
  label?: React.ReactNode;
  max?: number;
  onChange?: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  startAdornment?: React.ReactNode;
}

const DEFAULT_DECIMAL_SCALE = 2;

const DecimalNumberTextField: React.FC<DecimalNumberTextFieldProps> =
  React.forwardRef<HTMLInputElement, DecimalNumberTextFieldProps>(
    (
      {
        max,
        onChange,
        error,
        label,
        decimalScale,
        helperText,
        value,
        disabled,
        startAdornment,
        endAdornment,
        inputClassName,
        ...rest
      },
      ref,
    ) => {
      return (
        <TextField
          ref={ref}
          value={value || ''}
          onChange={onChange}
          label={label}
          error={error}
          helperText={helperText}
          inputProps={{
            thousandSeparator: ',',
            allowNegative: false,
            decimalScale: decimalScale || DEFAULT_DECIMAL_SCALE,
            valueIsNumericString: true,
            isAllowed: (values: NumberFormatValues) => {
              const { floatValue } = values;

              return floatValue && max ? floatValue <= max : true;
            },
            className: inputClassName,
          }}
          data-testid="fixed-amount-input"
          InputProps={{
            startAdornment,
            endAdornment,
            inputComponent:
              NumericTextField as unknown as React.ElementType<InputBaseComponentProps>,
          }}
          disabled={disabled}
          fullWidth
          {...rest}
        />
      );
    },
  );

DecimalNumberTextField.displayName = 'DecimalNumberTextField';

export { DecimalNumberTextField };
