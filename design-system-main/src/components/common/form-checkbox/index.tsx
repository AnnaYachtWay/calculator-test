'use client';

import type { CheckboxProps } from '@mui/material';
import { Checkbox, Typography } from '@mui/material';
import type { Control, FieldValues, Path } from 'react-hook-form';
import { Controller } from 'react-hook-form';
import { twMerge } from 'tailwind-merge';

import { Tooltip } from '../tooltip';

type Props<C extends FieldValues> = CheckboxProps & {
  control: Control<C>;
  name: Path<C>;
  label?: React.ReactNode;
  subtitle?: React.ReactNode;
  tooltip?: React.ReactNode;
};

const FormCheckbox = <C extends FieldValues>({
  control,
  name,
  label,
  className,
  subtitle,
  tooltip,
  ...rest
}: Props<C>) => {
  return (
    // eslint-disable-next-line jsx-a11y/label-has-associated-control
    <label className={twMerge('inline-block w-full cursor-pointer', className)}>
      <div className="flex items-center gap-2">
        <Controller
          control={control}
          name={name}
          render={({ field }) => (
            <Checkbox
              className="p-0"
              checked={field.value}
              onChange={(e) => field.onChange(e.target.checked)}
              disabled={field.disabled}
              onBlur={field.onBlur}
              {...rest}
            />
          )}
        />
        <Typography variant="body1" className="ml-1 font-medium">
          {label}
        </Typography>
        {tooltip && <Tooltip title={tooltip} />}
      </div>
      {subtitle && (
        <Typography variant="body2" className="ml-8">
          {subtitle}
        </Typography>
      )}
    </label>
  );
};

export { FormCheckbox };
