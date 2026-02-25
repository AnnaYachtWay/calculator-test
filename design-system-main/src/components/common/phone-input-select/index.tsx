'use client';

import {
  Box,
  Button,
  Card,
  CircularProgress,
  ClickAwayListener,
  List,
  ListItem,
  Typography,
} from '@mui/material';
import type React from 'react';
import { useCallback, useMemo } from 'react';
import { twMerge } from 'tailwind-merge';

import useBoolean from '../../../hooks/use-boolean';
import { PhoneTextField, type PhoneTextFieldProps } from '../phone-text-field';
import { SpriteIcon } from '../sprite-icon';

export interface OptionSelect<
  T = string | number,
  S = string | number,
  V = string | number,
> {
  subTitle?: S;
  title: T;
  value: V;
}

export interface PhoneInputSelectProps<T, S, V> extends Omit<
  PhoneTextFieldProps,
  'ref'
> {
  error?: boolean;
  isFetching?: boolean;
  listErrorState?: React.ReactNode;
  options: OptionSelect<T, S, V>[];
  selectedValue?: V | null;
  onSelect(value: OptionSelect<T, S, V> | null): void;
}

const PhoneInputSelect = <
  T extends string | number,
  S extends string | number,
  V extends string | number,
>({
  isFetching,
  options,
  selectedValue,
  onSelect,
  listErrorState,
  error,
  ...props
}: PhoneInputSelectProps<T, S, V>) => {
  const activeInputToggle = useBoolean(false);

  const handleSelect = useCallback(
    (value: OptionSelect<T, S, V>) => {
      onSelect(selectedValue !== value.value ? value : null);
      activeInputToggle.setFalse();
    },
    [onSelect, selectedValue, activeInputToggle],
  );

  const endAdornment = (
    <SpriteIcon
      name="chevron_down_outline"
      className={twMerge(
        'h-4 w-4 transition-transform',
        activeInputToggle.value && 'rotate-180 transform',
      )}
    />
  );

  const mappedOptions = useMemo(
    () =>
      options.map((option) => (
        <ListItem key={option.value} className="p-0">
          <Button className="w-full" onClick={() => handleSelect(option)}>
            <Card className="flex w-full items-center justify-between rounded-none px-4 py-2 !shadow-none">
              <Box className="flex flex-col items-start gap-1">
                <Typography variant="body1-medium">{option.title}</Typography>
                {option?.subTitle && (
                  <Typography variant="body2" className="text-primary-black-60">
                    {option.subTitle}
                  </Typography>
                )}
              </Box>
            </Card>
          </Button>
        </ListItem>
      )),

    [options, handleSelect],
  );

  const showOptions =
    activeInputToggle.value && (!!mappedOptions.length || listErrorState);

  return (
    <ClickAwayListener onClickAway={activeInputToggle.setFalse}>
      <Box className="relative flex flex-col">
        <PhoneTextField
          {...props}
          endAdornment={
            props.endAdornment ? (
              <Box className="flex items-center gap-2">
                {props.endAdornment}
                {endAdornment}
              </Box>
            ) : (
              endAdornment
            )
          }
          onFocus={activeInputToggle.setTrue}
        />
        {showOptions && (
          <List className="absolute top-full z-10 w-full rounded bg-primary-white p-0 py-1 shadow-card">
            {error ? listErrorState : mappedOptions}
            {isFetching && (
              <Box className="flex items-center justify-center py-1">
                <CircularProgress size={32} />
              </Box>
            )}
          </List>
        )}
      </Box>
    </ClickAwayListener>
  );
};

export { PhoneInputSelect };
