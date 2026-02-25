'use client';

import type { TextFieldProps } from '@mui/material';
import { Box, IconButton, InputAdornment, TextField } from '@mui/material';
import { useCallback, useMemo, useState } from 'react';
import { twMerge } from 'tailwind-merge';

import { useDebounceCallback } from '../../../hooks/use-debounce-callback';
import { SpriteIcon } from '../sprite-icon';

const INPUT_DELAY = 600;

type Props = TextFieldProps & {
  initialValue?: string | null;
  isLight?: boolean;
  onClear?(): void;
};

const SearchInput: React.FC<Props> = ({
  InputProps,
  onChange,
  onClear,
  className,
  initialValue,
  isLight,
  size,
  ...rest
}) => {
  const [inputValue, setInputValue] = useState(initialValue || '');

  const debouncedHandleInputChange = useDebounceCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => onChange && onChange(event),
    INPUT_DELAY,
  );

  const handleInputChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setInputValue(event.target.value);
      debouncedHandleInputChange(event);
    },
    [debouncedHandleInputChange],
  );

  const handleInputClear = useCallback(() => {
    setInputValue('');
    onClear?.();
  }, [setInputValue, onClear]);

  const endAdornment = useMemo(
    () => (
      <InputAdornment position="end">
        <IconButton
          aria-label="clear search"
          onClick={handleInputClear}
          className="p-0"
        >
          {inputValue && (
            <SpriteIcon
              name="cross_outline"
              className={twMerge('size-[26px]', size === 'small' && 'size-6')}
            />
          )}
        </IconButton>
      </InputAdornment>
    ),
    [handleInputClear, size, inputValue],
  );

  const newInputProps = useMemo(
    () => ({
      ...(InputProps || {}),
      startAdornment: (
        <SpriteIcon
          name="search_outline"
          className={twMerge('size-9', isLight && 'fill-primary-white')}
        />
      ),
      ...(endAdornment
        ? {
            endAdornment,
          }
        : {}),
      className: `[&>input]:p-[12px_4px] text-[14px] h-10 ${
        isLight ? ' [&>input::placeholder]:text-white' : ''
      }`,
    }),
    [InputProps, endAdornment, isLight],
  );

  return (
    <Box
      className={twMerge(
        'flex w-full min-w-60 items-center px-4 py-2',
        className,
      )}
    >
      <TextField
        fullWidth
        {...rest}
        value={inputValue}
        onChange={handleInputChange}
        size={size}
        variant="outlined"
        className={twMerge(
          isLight &&
            'rounded-md border border-solid border-primary-white-20 bg-primary-black-20',
        )}
        InputProps={newInputProps}
      />
    </Box>
  );
};

export { SearchInput };
