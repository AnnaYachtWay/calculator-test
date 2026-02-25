'use client';

import {
  Box,
  type InputBaseComponentProps,
  type TextFieldProps,
  Typography,
} from '@mui/material';
import React, { useCallback } from 'react';
import type { NumberFormatValues } from 'react-number-format';
import { twMerge } from 'tailwind-merge';

import { IconButton } from '../icon-button';
import { NumericTextField } from '../numeric-text-field';
import { TextField } from '../text-field';

export interface DecimalNumberStepperProps extends Omit<
  TextFieldProps,
  'onChange' | 'variant' | 'ref'
> {
  decimalScale?: number;
  disabled?: boolean;
  emptyPlaceholder?: string;
  inputClassName?: string;
  max?: number;
  onChange?: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  startAdornment?: React.ReactNode;
  step?: number;
}

const DEFAULT_DECIMAL_SCALE = 2;
const DEFAULT_STEP = 1;

export const DecimalNumberStepper = React.forwardRef<
  HTMLInputElement,
  DecimalNumberStepperProps
>(
  (
    {
      value,
      onChange,
      max = Number.POSITIVE_INFINITY,
      step = DEFAULT_STEP,
      decimalScale = DEFAULT_DECIMAL_SCALE,
      disabled,
      inputClassName,
      startAdornment,
      emptyPlaceholder,
      ...rest
    },
    ref,
  ) => {
    const numericValue = Number(value) || 0;

    const handleStep = useCallback(
      (delta: number) => {
        if (!onChange) return;

        const next = Math.max(
          0,
          Math.min(numericValue + delta, max ?? Infinity),
        );

        onChange({
          target: { value: next.toFixed(decimalScale) },
        } as React.ChangeEvent<HTMLInputElement>);
      },
      [numericValue, onChange, max, decimalScale],
    );

    const handleDecrease = () => handleStep(-step);
    const handleIncrease = () => handleStep(step);

    const minusDisabled = numericValue <= 0;
    const plusDisabled = numericValue >= max;
    const showNone = numericValue === 0 && !!emptyPlaceholder;

    const commonBtn =
      'h-[44px] rounded-none border-0 border-l border-solid border-primary-gray-20';

    return (
      <Box className="relative">
        <TextField
          ref={ref}
          value={showNone ? '' : (value ?? '')}
          onChange={onChange}
          InputLabelProps={{
            shrink: value === 0 || value === '0' || !!value,
          }}
          inputProps={{
            thousandSeparator: ',',
            allowNegative: false,
            decimalScale,
            valueIsNumericString: true,
            isAllowed: ({ floatValue }: NumberFormatValues) =>
              (floatValue ?? 0) <= max,
            className: twMerge('text-sm', inputClassName),
          }}
          InputProps={{
            startAdornment,
            endAdornment: (
              <>
                <IconButton
                  size="medium"
                  icon="minus_outline"
                  onClick={handleDecrease}
                  disabled={disabled || minusDisabled}
                  iconClassName={
                    disabled || minusDisabled
                      ? '!text-primary-gray'
                      : '!text-primary-accent'
                  }
                  className={twMerge(
                    commonBtn,
                    'w-[52px] min-w-[52px] max-w-[52px] px-3',
                  )}
                />
                <IconButton
                  size="medium"
                  icon="plus_outline"
                  onClick={handleIncrease}
                  disabled={disabled || plusDisabled}
                  iconClassName={
                    disabled || plusDisabled
                      ? '!text-primary-gray'
                      : '!text-primary-accent'
                  }
                  className={twMerge(
                    commonBtn,
                    'w-[44px] min-w-[44px] max-w-[44px] pl-3 pr-1',
                  )}
                />
              </>
            ),
            inputComponent:
              NumericTextField as unknown as React.ElementType<InputBaseComponentProps>,
          }}
          disabled={disabled}
          fullWidth
          {...rest}
        />
        {showNone && (
          <Typography
            variant="text-sm"
            aria-hidden
            className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2"
          >
            {emptyPlaceholder}
          </Typography>
        )}
      </Box>
    );
  },
);

DecimalNumberStepper.displayName = 'DecimalNumberStepper';
