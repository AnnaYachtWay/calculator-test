import { Box, MenuItem, TextField } from '@mui/material';
import React, { useCallback, useMemo } from 'react';

import type { YachtwaySelectProps } from '../../../typings/yachtway-select';
import { Counter } from '../counter';
import { ErrorHelperText } from '../error-helper-text';
import { InputTooltip } from '../input-tooltip';

import { Chip } from './chip';

interface AdditionalProps {
  onDelete?(v: string | number): void;
}

const SelectInner = <V extends string | number, L extends React.ReactNode>(
  {
    options,
    tooltip,
    counter,
    tooltipPlacement,
    InputProps,
    value = '',
    error,
    helperText,
    onDelete,
    maxItems,
    noSort,
    ...rest
  }: YachtwaySelectProps<V, L> & AdditionalProps,
  ref: React.ForwardedRef<HTMLInputElement>,
) => {
  const newInputProps = useMemo(
    () => ({
      endAdornment: (
        <div className="pointer-events-none absolute right-8">
          {counter && maxItems && (
            <Counter count={(value as string[]).length || 0} max={maxItems} />
          )}
          {tooltip && (
            <InputTooltip
              tooltip={tooltip}
              placement={tooltipPlacement || 'top-end'}
            />
          )}
        </div>
      ),
      ...(InputProps || {}),
    }),
    [InputProps, counter, maxItems, tooltip, tooltipPlacement, value],
  );

  const renderChips = useCallback(
    (val: unknown) => (
      <Box className="flex gap-1">
        {(val as string[] | null)?.map((v) => {
          const chipValue = options?.find((option) => option.value === v)
            ?.label as string | undefined;

          return (
            <Chip
              key={v}
              value={chipValue ?? v}
              onDelete={() => onDelete?.(v)}
            />
          );
        })}
      </Box>
    ),
    [options, onDelete],
  );

  const newSelectProps = useMemo(
    () => ({
      ...(rest.SelectProps || {}),
      ...(rest.SelectProps?.multiple ? { renderValue: renderChips } : {}),
    }),
    [renderChips, rest.SelectProps],
  );

  const handleChange = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
  ) => {
    if (!Array.isArray(e.target.value)) {
      rest.onChange?.(e);

      return;
    }

    if (maxItems && e.target.value.length > maxItems) {
      return;
    }

    rest.onChange?.(e);
  };

  const sortedOptions = useMemo(() => {
    if (noSort) return options;

    return typeof options?.[0]?.label === 'string'
      ? options?.sort((a, b) => String(a.label).localeCompare(String(b.label)))
      : options;
  }, [noSort, options]);

  return (
    <TextField
      {...rest}
      onChange={handleChange}
      select
      inputRef={ref}
      value={value}
      InputProps={newInputProps}
      error={error}
      SelectProps={newSelectProps}
      helperText={
        error && helperText ? (
          <ErrorHelperText>{helperText}</ErrorHelperText>
        ) : (
          helperText
        )
      }
    >
      {sortedOptions?.map((option) => (
        <MenuItem key={option.value} value={option.value}>
          {option.label ?? option.value}
        </MenuItem>
      ))}
    </TextField>
  );
};

const Select = React.forwardRef(SelectInner) as <
  V extends string | number = string | number,
  L extends React.ReactNode = React.ReactNode,
>(
  props: YachtwaySelectProps<V, L> &
    AdditionalProps & {
      ref?: React.ForwardedRef<HTMLInputElement>;
    },
) => ReturnType<typeof SelectInner>;

export { Select };
