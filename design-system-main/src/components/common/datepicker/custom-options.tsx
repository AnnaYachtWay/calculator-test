import {
  Box,
  Radio,
  RadioGroup,
  Typography,
  type RadioGroupProps,
} from '@mui/material';
import type { ReactElement } from 'react';
import { twMerge } from 'tailwind-merge';

import type { Option } from '../../../typings';

export interface Props<
  V = string | number,
  L = string | number,
> extends RadioGroupProps {
  className?: string;
  disabled?: boolean;
  id: string;
  options: Option<V, L>[];
  value: string | number;
  onRadioClick?(value: V): void;
}

const CustomCalendarOptions = <
  V extends string | number | boolean,
  L extends string | number | ReactElement,
>({
  options,
  value,
  onChange,
  onRadioClick,
  className,
  disabled,
  ...rest
}: Props<V, L>) => {
  const mappedOptions = options.map((option) => {
    const labelId = `${rest.id}_${option.value}`;

    const isActive = value?.toString() === option.value.toString();

    return (
      <label key={String(option.value)} htmlFor={labelId}>
        <Radio
          className="hidden"
          id={labelId}
          value={option.value}
          onClick={() => onRadioClick?.(option.value)}
          disabled={disabled}
        />
        <Box
          className={twMerge(
            'flex cursor-pointer items-center px-6 py-3 hover:bg-primary-gray-4',
            isActive && 'bg-primary-gray-4',
          )}
        >
          <Typography
            variant="body1"
            className={twMerge(
              'text-primary-gray',
              isActive && 'font-medium text-black',
            )}
          >
            {option.label}
          </Typography>
        </Box>
      </label>
    );
  });

  return (
    <Box className="w-full gap-3">
      <RadioGroup
        {...rest}
        onChange={onChange}
        value={value}
        className={twMerge(
          'grid grid-cols-[repeat(auto-fit,_minmax(180px,_1fr))] items-center',
          className,
        )}
      >
        {mappedOptions}
      </RadioGroup>
    </Box>
  );
};

export { CustomCalendarOptions };
