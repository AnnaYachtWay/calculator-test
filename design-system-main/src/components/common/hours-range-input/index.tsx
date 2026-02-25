'use client';

import {
  Box,
  ClickAwayListener,
  Paper,
  Popper,
  TextField,
} from '@mui/material';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { twMerge } from 'tailwind-merge';

import { SpriteIcon } from '../sprite-icon';

import type { HoursRange } from './utils';
import { formatHour, getColumn, getHoursRange } from './utils';

interface Props {
  className?: string;
  error?: boolean;
  helperText?: React.ReactNode;
  /**
   * `'start-end'` in 24h format
   * @example '9:00-17:00'
   */
  initialValue?: string | null;
  label?: string;
  /**
   * @param hoursRange - `'start-end'` in 24h format
   */
  onChange?(hoursRange: string | null): void;
}

const HoursRangeInput: React.FC<Props> = ({
  className,
  error,
  helperText,
  initialValue,
  label,
  onChange,
}) => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const [hoursRange, setHoursRange] = useState<HoursRange>(
    getHoursRange(initialValue),
  );

  const inputValue = useMemo(
    () =>
      hoursRange.start || hoursRange.end
        ? `${formatHour(hoursRange.start)} - ${formatHour(hoursRange.end)}`
        : '',
    [hoursRange.end, hoursRange.start],
  );

  const handleInputClick = useCallback(
    (event: React.MouseEvent<HTMLElement>) => {
      setAnchorEl(anchorEl ? null : event.currentTarget);
    },
    [anchorEl],
  );

  const handleClose = useCallback(() => {
    if (!(hoursRange.start && hoursRange.end)) {
      setHoursRange({ start: null, end: null });
    }

    setAnchorEl(null);
  }, [hoursRange]);

  useEffect(() => {
    if (hoursRange.start && hoursRange.end) {
      onChange?.(`${hoursRange.start}-${hoursRange.end}`);
    }
  }, [hoursRange, onChange]);

  const handleColumnChange = (column: 'start' | 'end') => (hour: string) => {
    setHoursRange({ ...hoursRange, [column]: hour });
  };

  const handleInputClear = useCallback(() => {
    setHoursRange({ start: null, end: null });
    onChange?.(null);
  }, [onChange]);

  return (
    <Box className={twMerge('relative', className)}>
      <TextField
        label={label}
        value={inputValue}
        fullWidth
        InputProps={{
          readOnly: true,
          endAdornment: inputValue ? (
            <SpriteIcon
              name="cross_outline"
              className="cursor-pointer"
              onClick={handleInputClear}
            />
          ) : (
            <SpriteIcon name="stopwatch_outline" />
          ),
        }}
        InputLabelProps={{ shrink: !!inputValue }}
        onClick={handleInputClick}
        error={error}
        helperText={helperText}
      />
      <Popper
        className="z-20 min-w-full"
        open={!!anchorEl}
        anchorEl={anchorEl}
        placement="bottom-start"
        disablePortal
      >
        <ClickAwayListener onClickAway={handleClose}>
          {/* eslint-disable-next-line max-len */}
          <Paper className="z-10 mt-[6px] flex h-full max-h-[18.5rem] w-full overflow-hidden bg-primary-white pt-2 [&>*]:flex-1">
            {getColumn('Start', hoursRange.start, handleColumnChange('start'))}
            {getColumn('End', hoursRange.end, handleColumnChange('end'))}
          </Paper>
        </ClickAwayListener>
      </Popper>
    </Box>
  );
};

export { HoursRangeInput };
