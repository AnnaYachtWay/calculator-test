'use client';

import Autocomplete from '@mui/material/Autocomplete';
import React, { useImperativeHandle, useRef } from 'react';

import useBoolean from '../../../hooks/use-boolean';
import type { YachtwaySelectAutocompleteProps } from '../../../typings/yachtway-select';
import { TextField } from '../text-field';

const SelectAutocomplete = <V extends string | number, L extends string>(
  {
    options,
    tooltip,
    fieldProps,
    ...rest
  }: YachtwaySelectAutocompleteProps<V, L>,
  ref: React.ForwardedRef<HTMLInputElement>,
) => {
  const {
    value: open,
    setFalse: closeDropdown,
    setTrue: openDropdown,
  } = useBoolean();

  const inputRef = useRef<HTMLInputElement>(null);

  useImperativeHandle(ref, () => inputRef.current as HTMLInputElement);

  if (!options) return null;

  return (
    <Autocomplete
      {...rest}
      options={options}
      getOptionLabel={(option) =>
        typeof option === 'string' ? option : option.label
      }
      renderInput={(params) => {
        // Workaround for MUI bug
        if (rest.autoComplete === false) {
          return (
            <form autoComplete="DISABLE-AUTOCOMPLETE">
              <TextField
                {...params}
                {...fieldProps}
                InputProps={{ ...params.InputProps, ...fieldProps?.InputProps }}
                ref={inputRef}
                tooltip={tooltip}
                onChange={(event) => {
                  const newValue = event.target.value;
                  const existingState = options.find(
                    (option) => option.value === newValue,
                  );

                  // only force close dropdown when input is updated but is not on focus
                  if (document.activeElement !== inputRef.current) {
                    // if the state from autofill is valid, set the value
                    if (existingState) {
                      fieldProps?.onChange?.(event);
                    }

                    closeDropdown();
                  }
                }}
              />
            </form>
          );
        }

        return (
          <TextField
            {...params}
            {...fieldProps}
            InputProps={{ ...params.InputProps, ...fieldProps?.InputProps }}
            ref={inputRef}
            tooltip={tooltip}
          />
        );
      }}
      open={open}
      onOpen={openDropdown}
      onClose={closeDropdown}
    />
  );
};

const WrappedSelectAutocomplete = React.memo(
  React.forwardRef(SelectAutocomplete),
) as <V extends string | number, L extends string>(
  props: YachtwaySelectAutocompleteProps<V, L> & {
    ref?: React.ForwardedRef<HTMLInputElement>;
  },
) => React.JSX.Element | null;

export { WrappedSelectAutocomplete as SelectAutocomplete };
