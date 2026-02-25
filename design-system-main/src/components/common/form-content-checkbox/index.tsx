'use client';

import type { CheckboxProps } from '@mui/material';
import { Box, Checkbox } from '@mui/material';
import type { ChangeEvent, ReactNode } from 'react';
import type { Control, FieldValues, Path } from 'react-hook-form';
import { Controller } from 'react-hook-form';
import { twMerge } from 'tailwind-merge';

import { ErrorHelperText } from '../error-helper-text';

type Props<C extends FieldValues> = CheckboxProps & {
  control: Control<C>;
  name: Path<C>;
  children?: ReactNode;
  containerClassName?: string;
  error?: boolean;
  helperText?: string;
};

const FormContentCheckbox = <C extends FieldValues>({
  control,
  name,
  children,
  className,
  containerClassName,
  error,
  helperText,
  ...rest
}: Props<C>) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <Box>
          <Box
            key={name + field.value}
            component="label"
            className={twMerge(
              'flex w-full cursor-pointer items-center justify-between gap-3',
              containerClassName,
            )}
          >
            {children}
            <Checkbox
              checked={rest.checked || field.value}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                field.onChange(e.target.checked)
              }
              className={twMerge('size-5', className)}
              {...rest}
            />
          </Box>
          {error && (
            <ErrorHelperText className="basis-full text-sm text-error">
              {helperText}
            </ErrorHelperText>
          )}
        </Box>
      )}
    />
  );
};

export { FormContentCheckbox };
