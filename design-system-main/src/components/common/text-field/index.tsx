'use client';

import type { TextFieldProps } from '@mui/material';
import {
  CircularProgress,
  IconButton,
  InputAdornment,
  TextField as MuiTextField,
  Tooltip,
} from '@mui/material';
import type { InputBaseProps } from '@mui/material/InputBase';
import React, { useMemo } from 'react';
import { twMerge } from 'tailwind-merge';

import useBoolean from '../../../hooks/use-boolean';
import type { MeasurementUnit } from '../../../typings/measurement-unit';
import { ErrorHelperText } from '../error-helper-text';
import { InputTooltip, type TooltipPlacement } from '../input-tooltip';
import { SpriteIcon, type SpriteIconNames } from '../sprite-icon';

export type YachtwayFieldProps = TextFieldProps & {
  tooltip?: React.ReactNode;
  tooltipPlacement?: TooltipPlacement;
  unitIcon?: MeasurementUnit;
  unitTitle?: string;
  withCharLimit?: boolean;
  isLoading?: boolean;
  'data-testid'?: string;
  endAdornment?: React.ReactNode;
};

const TextField: React.ForwardRefRenderFunction<
  HTMLInputElement,
  YachtwayFieldProps
> = (
  {
    tooltip,
    InputProps,
    type,
    helperText,
    error,
    tooltipPlacement,
    unitIcon,
    unitTitle,
    withCharLimit,
    isLoading,
    'data-testid': dataTestId,
    endAdornment: customEndAdornment,
    ...rest
  },
  ref,
) => {
  const passwordToggle = useBoolean();

  const customType = useMemo(() => {
    if (type === 'password') {
      return passwordToggle.value ? 'text' : 'password';
    }

    return type;
  }, [passwordToggle.value, type]);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    event.preventDefault();
  };

  const endAdornment = useMemo(() => {
    if (customEndAdornment) return customEndAdornment;

    if (isLoading) {
      return (
        <InputAdornment position="end">
          <CircularProgress
            size={20}
            className="[&>svg]:!text-primary-accent"
          />
        </InputAdornment>
      );
    }

    if (type === 'password') {
      return (
        <InputAdornment position="end">
          <IconButton
            aria-label="toggle password visibility"
            onClick={passwordToggle.toggle}
            onMouseDown={handleMouseDownPassword}
            tabIndex={-1}
          >
            <SpriteIcon
              name={passwordToggle.value ? 'eye_off_outline' : 'eye_outline'}
            />
          </IconButton>
        </InputAdornment>
      );
    }

    if (unitIcon) {
      return (
        <InputAdornment position="end">
          <Tooltip placement="top" title={unitTitle} arrow>
            {/* Need this div, because mui's Tooltip does not register svg element hover events */}
            <div className="flex items-center justify-center">
              <SpriteIcon
                name={
                  unitIcon === 'generic'
                    ? 'arrow_up_down_short_outline'
                    : (unitIcon
                        .toLowerCase()
                        .concat('_outline') as SpriteIconNames)
                }
                className="h-5 w-5"
              />
            </div>
          </Tooltip>
        </InputAdornment>
      );
    }

    if (tooltip) {
      return (
        <InputTooltip
          tooltip={tooltip}
          placement={tooltipPlacement || 'top-end'}
        />
      );
    }

    return undefined;
  }, [
    isLoading,
    passwordToggle.toggle,
    passwordToggle.value,
    tooltip,
    tooltipPlacement,
    type,
    unitIcon,
    customEndAdornment,
    unitTitle,
  ]);

  const newInputProps = useMemo(() => {
    const InputCustomProps = {
      'data-testid': dataTestId,
      ...(InputProps as InputBaseProps),
    };

    return endAdornment
      ? {
          endAdornment,
          ...(InputCustomProps || {}),
        }
      : InputCustomProps;
  }, [InputProps, dataTestId, endAdornment]);

  return (
    <MuiTextField
      {...rest}
      inputRef={ref}
      type={customType}
      InputProps={newInputProps}
      error={error}
      className={twMerge(withCharLimit && '[&>div]:pb-8', rest.className)}
      helperText={
        error && helperText ? (
          <ErrorHelperText>{helperText}</ErrorHelperText>
        ) : (
          helperText
        )
      }
    />
  );
};

const WrappedTextField = React.memo(React.forwardRef(TextField));

export { WrappedTextField as TextField };
