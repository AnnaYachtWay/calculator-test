'use client';

import type { MenuProps } from '@mui/material';
import { Box, Divider, Menu, MenuItem, Typography } from '@mui/material';
import React, { useState } from 'react';
import { twMerge } from 'tailwind-merge';

import useBoolean from '../../../hooks/use-boolean';
import { toKebabCase } from '../../../utils/string-format';
import { type SpriteIconNames, SpriteIcon } from '../sprite-icon';

export const DIVIDER = 'divider';

export interface TextSelectOption<V = string, L = string> {
  icon?: SpriteIconNames;
  label: L;
  value: V;
}

export interface TextSelectProps<V, L> {
  className?: string;
  disabled?: boolean;
  id: string;
  initialSelected?: TextSelectOption<V, L>;
  label?: string | React.ReactNode;
  menuProps?: Omit<MenuProps, 'open'>;
  options: TextSelectOption<V, L>[];
  formatLabel?(label: L): string | React.ReactNode;
  formatSelectedLabel?(
    option: TextSelectOption<V, L>,
  ): string | React.ReactNode;
  onChange?(value: V): void;
}

const TextSelect = <
  V extends string | number,
  L extends string | number | React.ReactNode = string,
>({
  label,
  className,
  options,
  id,
  initialSelected,
  disabled,
  formatLabel = (l) => l,
  formatSelectedLabel,
  onChange,
  menuProps,
}: TextSelectProps<V, L>) => {
  const anchorElRef = React.useRef<HTMLButtonElement>(null);
  const { value: open, toggle } = useBoolean(false);
  const [selected, setSelected] = useState<TextSelectOption<V, L> | null>(
    initialSelected ?? options?.[0] ?? null,
  );

  const handleChange = (option: TextSelectOption<V, L>) => {
    setSelected(option);
    onChange?.(option.value);
    toggle();
  };

  const buttonId = `${id}-button`;

  const selectedFormattedLabel =
    selected?.label &&
    (formatSelectedLabel
      ? formatSelectedLabel(selected)
      : formatLabel(selected?.label));

  const selectedLabel =
    (selected?.label && selectedFormattedLabel) ?? selected?.value;

  return (
    <Box>
      <button
        aria-haspopup="true"
        id={buttonId}
        type="button"
        onClick={toggle}
        className={twMerge(
          'm-0 flex cursor-pointer items-center gap-1 border-0 bg-transparent p-0 outline-none',
          disabled && 'cursor-not-allowed text-primary-black-40',
          className,
        )}
        disabled={disabled}
        data-testid={buttonId}
      >
        {label && (
          <Typography
            variant="button2"
            component="span"
            className="text-nowrap text-primary-gray-80"
          >
            {`${label}:`}
          </Typography>
        )}
        <Typography
          ref={anchorElRef}
          className="flex items-center gap-1 text-nowrap"
          variant="button2"
          component="span"
        >
          {selectedLabel}
          <SpriteIcon
            name="chevron_down_outline"
            className={twMerge(
              'h-4 w-4 transition-transform',
              open && 'rotate-180 transform',
            )}
          />
        </Typography>
      </button>
      <Menu
        id={id}
        anchorEl={anchorElRef.current}
        open={open}
        onClose={toggle}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        MenuListProps={{
          'aria-labelledby': buttonId,
        }}
        {...menuProps}
      >
        <div className="py-3">
          {options.map((option) => {
            if (option.value === DIVIDER) return <Divider key={option.value} />;

            return (
              <MenuItem
                key={option.value}
                onClick={() => handleChange(option)}
                data-testid={toKebabCase(`${option.value}-button`)}
              >
                {option.icon && (
                  <SpriteIcon
                    name={option.icon}
                    className="size-6 text-primary-accent"
                  />
                )}
                <Typography variant="body1-medium">
                  {formatLabel(option.label) ?? option.value}
                </Typography>
              </MenuItem>
            );
          })}
        </div>
      </Menu>
    </Box>
  );
};

export { TextSelect };
