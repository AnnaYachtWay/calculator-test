'use client';

import {
  Box,
  ClickAwayListener,
  Paper,
  Popper,
  TextField,
  Typography,
} from '@mui/material';
import dayjs from 'dayjs';
import { useCallback, useId, useMemo, useState } from 'react';
import { twMerge } from 'tailwind-merge';

import useIsMobile from '../../../hooks/use-is-mobile';
import formatDaysOfWeek from '../../../utils/format-days-of-week';
import { SpriteIcon } from '../sprite-icon';

const daysCount = 7;
const days = Array.from({ length: daysCount }, (_, i) => i);

interface DayCheckboxProps {
  checked?: boolean;
  day: number;
  onChange?(checked: boolean): void;
}

const DayCheckbox: React.FC<DayCheckboxProps> = ({
  checked,
  day,
  onChange,
}) => {
  const id = useId();
  const isMobile = useIsMobile();

  return (
    <label
      htmlFor={id}
      className={twMerge(
        'min-w-fit cursor-pointer rounded px-1 py-3 text-center',
        !isMobile && 'hover:bg-primary-accent-4 hover:text-primary-accent',
        checked && 'bg-primary-accent-4 text-primary-accent',
      )}
    >
      <input
        type="checkbox"
        id={id}
        className="hidden"
        checked={checked}
        onChange={(e) => onChange?.(e.target.checked)}
      />
      <Typography variant="caption" component="span">
        {dayjs().day(day).format('ddd')}
      </Typography>
    </label>
  );
};

interface Props {
  className?: string;
  error?: boolean;
  helperText?: React.ReactNode;
  initialValue?: number[];
  label?: string;
  onChange?(days: number[]): void;
}

const DaysRangeInput: React.FC<Props> = ({
  className,
  error,
  helperText,
  initialValue = [],
  onChange,
  label,
}) => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const [checkedDays, setCheckedDays] = useState<number[]>(initialValue);

  const inputValue = useMemo(() => {
    if (checkedDays.length === 0) return '';

    return formatDaysOfWeek(checkedDays, 'dddd');
  }, [checkedDays]);

  const handleInputClick = useCallback(
    (event: React.MouseEvent<HTMLElement>) => {
      setAnchorEl(anchorEl ? null : event.currentTarget);
    },
    [anchorEl],
  );

  const handleClose = useCallback(() => {
    setAnchorEl(null);
    onChange?.(checkedDays);
  }, [checkedDays, onChange]);

  const handleInputClear = useCallback(() => {
    setCheckedDays([]);
    onChange?.([]);
  }, [onChange]);

  const daysButtons = useMemo(() => {
    return days.map((day) => (
      <DayCheckbox
        key={day}
        day={day}
        checked={checkedDays.includes(day)}
        onChange={(state) => {
          setCheckedDays((prev) => {
            if (state) {
              return [...prev, day];
            }

            return prev.filter((d) => d !== day);
          });
        }}
      />
    ));
  }, [checkedDays]);

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
            <SpriteIcon name="calendar_outline" />
          ),
        }}
        InputLabelProps={{ shrink: !!inputValue }}
        onClick={handleInputClick}
        error={error}
        helperText={helperText}
      />
      <Popper
        className="z-10 min-w-full"
        open={!!anchorEl}
        anchorEl={anchorEl}
        placement="bottom-start"
        disablePortal
      >
        <ClickAwayListener onClickAway={handleClose}>
          <Paper
            className={twMerge(
              'mt-[6px] flex h-full max-h-[18.5rem] w-full gap-2 p-3 [&>*]:flex-1',
              'z-10 overflow-hidden bg-primary-white',
            )}
          >
            {daysButtons}
          </Paper>
        </ClickAwayListener>
      </Popper>
    </Box>
  );
};

export { DaysRangeInput };
