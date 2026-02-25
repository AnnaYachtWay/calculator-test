'use client';

import { Box, FormHelperText, Typography, styled } from '@mui/material';
import type React from 'react';
import { useLayoutEffect, useRef } from 'react';
import PhoneInput, { type PhoneInputProps } from 'react-phone-input-2';
import { twMerge } from 'tailwind-merge';

import { ErrorHelperText } from '../error-helper-text';

const StyledPhoneInput: React.FC<PhoneInputProps> = styled(PhoneInput)(
  ({ theme }) => ({
    fontFamily: 'inherit !important',
    fontSize: 'inherit !important',

    '.form-control': {
      fontFamily: 'inherit',
      fontSize: 16,
      background: 'transparent !important',
      width: '100% !important',
      border: 'none !important',
      boxShadow: 'none !important',
      borderRadius: '4px !important',

      '&:placeholder': {
        color: theme.colors.primary.black[60],
      },

      '&:-webkit-autofill': {
        color: theme.colors.primary.black.DEFAULT,
        WebkitTextFillColor: theme.colors.primary.black.DEFAULT,
        boxShadow: 'none',
        WebkitBoxShadow: 'none',
      },
      '&:autofill': {
        color: theme.colors.primary.black.DEFAULT,
        textFillColor: theme.colors.primary.black.DEFAULT,
        boxShadow: 'none',
        backgroundColor: 'transparent',
      },

      [theme.breakpoints.down('xl')]: {
        fontSize: '14px !important',
      },
    },

    '.country-list': {
      fontFamily: 'inherit',
      fontSize: 13,
    },

    '.country': {
      display: 'flex',
      padding: '0.5rem 1rem 0.5rem 46px !important',

      '&:hover': {
        color: theme.colors.primary.accent.DEFAULT,
        backgroundColor: theme.colors.primary.gray[4],
      },
    },

    '.flag-dropdown': {
      paddingBottom: '5px !important',
    },

    '.selected-flag': {
      paddingLeft: '4px !important',
    },
  }),
);

export interface PhoneTextFieldProps extends Omit<
  PhoneInputProps,
  'onChange' | 'specialLabel'
> {
  'data-testid'?: string;
  endAdornment?: React.ReactNode;
  errorMessage?: string;
  inputClassName?: string;
  label?: string;
  startAdornment?: string;
  onChange?(value: string): void;
}

const PhoneTextField: React.FC<PhoneTextFieldProps> = ({
  endAdornment,
  errorMessage,
  value,
  onChange,
  inputClassName,
  startAdornment,
  label,
  'data-testid': dataTestId,
  ...props
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (startAdornment && containerRef.current) {
      const phoneInputContainer = containerRef.current
        .firstChild as HTMLDivElement;

      phoneInputContainer.dataset.contentBefore = startAdornment;
    }
  }, [startAdornment]);

  return (
    <Box className="-mt-2 flex w-full flex-col">
      <fieldset
        className={twMerge(
          'rounded border-[1px] border-solid border-primary-gray-20 py-0 pl-2 pr-0 hover:border-primary-gray',
          errorMessage && 'border-error',
        )}
      >
        <legend className="text-xs text-primary-black-60">{label}</legend>
        <Typography
          ref={containerRef}
          component="div"
          className={twMerge('relative', errorMessage && 'border-error')}
          data-testid={dataTestId || 'phone-field-wrapper'}
        >
          <StyledPhoneInput
            value={value}
            onChange={(a1, a2, a3, formattedValue) =>
              onChange?.(formattedValue)
            }
            containerClass={twMerge(
              startAdornment &&
                'flex before:ml-1.5 before:pb-[5px] before:min-w-fit before:content-[attr(data-content-before)] ' +
                  'before:flex before:items-center',
              startAdornment && 'before:ml-[53px]',
            )}
            inputClass={twMerge(
              '!pr-4 !pb-3 !pt-[5px] !pl-[54px]',
              startAdornment && '!pl-[5px]',
              endAdornment && '!pr-12',
              inputClassName,
            )}
            buttonStyle={{ display: 'block' }}
            {...props}
            specialLabel=""
            country="us"
            countryCodeEditable={false}
            disableCountryGuess
          />
          {endAdornment && (
            <Box className="absolute right-[14px] top-2/4 flex -translate-y-2/4 items-center pb-[7px]">
              {endAdornment}
            </Box>
          )}
        </Typography>
      </fieldset>
      {errorMessage && (
        <FormHelperText error={!!errorMessage}>
          <ErrorHelperText>{errorMessage}</ErrorHelperText>
        </FormHelperText>
      )}
    </Box>
  );
};

export { PhoneTextField };
