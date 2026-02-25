import type { RadioGroupProps } from '@mui/material';
import { Box, FormHelperText, Radio, RadioGroup } from '@mui/material';
import { twMerge } from 'tailwind-merge';

import type { Option } from '../../../typings';
import { ErrorHelperText } from '../error-helper-text';

import { Button } from './chips/button';
import { EnumerateButton } from './chips/enumerate-button';
import type { ChipType } from './constants';

export type ButtonSwitchOption<
  V = string | number | boolean,
  L = React.ReactNode,
> = Option<V, L> & {
  disabled?: boolean;
  tooltip?: string;
};

const notSelectedClassname =
  '[&>button]:border-primary-gray-20 [&:hover>button]:border-primary-gray';

const getChip = (chip: ChipType) =>
  ({
    button: Button,
    enumerateButton: EnumerateButton,
  })[chip];

const labelStyles = 'block w-full min-w-[90px] relative';

export interface ButtonSwitchProps<
  V = string | number | boolean,
  L = string | number | React.ReactElement,
> extends RadioGroupProps {
  buttonClassName?: string;
  buttonWrapperClassName?: string;
  chipType?: ChipType;
  className?: string;
  disabled?: boolean;
  error?: string | React.ReactNode;
  id: string;
  labelClassName?: string;
  options: ButtonSwitchOption<V, L>[];
  value: string | number;
  withPlusIcon?: boolean;
  onRadioClick?(value: V): void;
}

const ButtonSwitch: React.FC<ButtonSwitchProps> = <
  V extends string | number | boolean,
  L extends string | number | React.ReactElement,
>({
  options,
  value,
  onChange,
  onRadioClick,
  chipType = 'button',
  className,
  withPlusIcon,
  disabled,
  error,
  buttonClassName,
  buttonWrapperClassName,
  ...rest
}: ButtonSwitchProps<V, L>) => {
  const Chip = getChip(chipType);

  const mappedOptions = options.map((option) => {
    const labelId = `${rest.id}_${option.value}`;

    const isActive = value?.toString() === option.value.toString();

    const activeClassname = twMerge(
      '[&>button]:ring-2 [&>button]:ring-primary-accent-20',
      '[&>button]:bg-primary-accent-4 [&>button]:border-primary-accent',
    );

    const labelHoverEffects = !isActive
      ? notSelectedClassname
      : activeClassname;

    const labelClassName = twMerge(
      labelStyles,
      !option.disabled && labelHoverEffects,
      !option.disabled && 'cursor-pointer',
      buttonWrapperClassName,
    );

    return (
      // eslint-disable-next-line jsx-a11y/label-has-associated-control
      <label
        key={String(option.value)}
        htmlFor={labelId}
        className={labelClassName}
      >
        <Radio
          className="hidden"
          id={labelId}
          value={option.value}
          onClick={() => onRadioClick?.(option.value)}
          disabled={disabled || option.disabled}
        />
        <Chip
          title={option.label}
          isActive={isActive}
          withPlusIcon={withPlusIcon}
          buttonClassName={twMerge(
            buttonClassName,
            '!focus:outline-none !focus:ring-8 !focus:ring-primary-gray-20',

            (!isActive || option.disabled) &&
              'focus:ring-2 focus:ring-primary-gray-20 focus:border-primary-gray',
            isActive &&
              'focus:outline-2 focus:outline focus:outline-primary-accent-40 focus:outline-offset-2',
          )}
          tooltip={option.tooltip}
          disabled={option.disabled || (disabled && !isActive)}
          noIcon={disabled && !option.disabled}
        />
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
          'grid grid-cols-[repeat(auto-fit,_minmax(250px,_1fr))] items-center gap-4',
          className,
        )}
      >
        {mappedOptions}
      </RadioGroup>

      {error && (
        <FormHelperText error className="flex items-center">
          <ErrorHelperText>{error}</ErrorHelperText>
        </FormHelperText>
      )}
    </Box>
  );
};

export { ButtonSwitch };
