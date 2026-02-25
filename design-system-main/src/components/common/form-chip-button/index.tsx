'use client';

import type { CheckboxProps } from '@mui/material';
import { Checkbox } from '@mui/material';
import type { ChangeEvent } from 'react';
import type { Control, FieldValues, Path } from 'react-hook-form';
import { Controller } from 'react-hook-form';
import { twMerge } from 'tailwind-merge';

import { Button } from '../form-chips/chips/button';

type Props<C extends FieldValues> = CheckboxProps & {
  control: Control<C>;
  name: Path<C>;
  label: string;
};

const FormChipButton = <C extends FieldValues>({
  control,
  name,
  label,
  className,
}: Props<C>) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <div className={className}>
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <label
            htmlFor={field.name}
            className={twMerge(
              'block w-full cursor-pointer',
              field.value &&
                '[&>button]:ring-2 [&>button]:ring-primary-accent-20 ' +
                  '[&>button]:border-primary-accent [&>button]:bg-primary-accent-4',
            )}
          >
            <Checkbox
              className="hidden"
              checked={field.value}
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                field.onChange(e.target.checked);
              }}
              id={field.name}
            />
            <Button
              title={label}
              isActive={field.value}
              className={twMerge(
                field.value && 'border-1',
                'pointer-events-none',
              )}
            />
          </label>
        </div>
      )}
    />
  );
};

export { FormChipButton };
