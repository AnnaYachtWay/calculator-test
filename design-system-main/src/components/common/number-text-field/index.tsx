'use client';

import type { TextFieldProps } from '@mui/material';
import { Box, useMediaQuery } from '@mui/material';
import type React from 'react';
import { useCallback } from 'react';
import { twMerge } from 'tailwind-merge';

import { theme } from '../../../theme';
import { SpriteIcon } from '../sprite-icon';
import { TextField } from '../text-field';

const buttonClassName =
  'w-3 h-3 p-0 m-0 border-none rounded-sm outline-none bg-primary-black [&_svg]:!text-primary-white cursor-pointer';

export interface NumberTextFieldProps extends Omit<
  TextFieldProps,
  'onChange' | 'variant' | 'ref'
> {
  hideArrows?: boolean;
  max?: number;
  min?: number;
  step?: number;
  onChange?(value: number | ''): void;
}

const NumberTextField: React.FC<NumberTextFieldProps> = ({
  max,
  min = 0,
  step = 1,
  onChange,
  className,
  hideArrows,
  ...rest
}) => {
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleChange = useCallback(
    (
      e:
        | React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
        | string
        | number,
    ) => {
      const value =
        typeof e === 'string' || typeof e === 'number' ? e : e.target.value;

      const numberValue = Number(value);

      if (value === '') {
        onChange?.(value);

        return;
      }

      if (numberValue < min) return;

      if (max != null && numberValue > max) return;

      onChange?.(numberValue);
    },
    [max, min, onChange],
  );

  const endAdornment = (
    <Box className="flex h-full flex-col justify-center gap-[1px]">
      <button
        className={twMerge(
          buttonClassName,
          max != null &&
            Number(rest.value) >= max &&
            'bg-transparent [&_svg]:!text-primary-gray',
        )}
        type="button"
        onClick={() => handleChange(Number(rest.value) + step)}
        data-testid="increase-value-button"
      >
        <SpriteIcon name="chevron_up_outline" className="h-3 w-3" />
      </button>
      <button
        className={twMerge(
          buttonClassName,
          Number(rest.value) <= min &&
            'bg-transparent [&_svg]:!text-primary-gray',
        )}
        type="button"
        onClick={() => handleChange(Number(rest.value) - step)}
        data-testid="decrease-value-button"
      >
        <SpriteIcon name="chevron_down_outline" className="h-3 w-3" />
      </button>
    </Box>
  );

  return (
    <TextField
      variant="outlined"
      {...rest}
      value={rest.value?.toString() || ''}
      onChange={handleChange}
      type="number"
      className={twMerge('input-number-hide-arrows', className)}
      InputProps={{
        ...rest.InputProps,
        ...(!isMobile && !hideArrows && { endAdornment }),
      }}
    />
  );
};

export { NumberTextField };
