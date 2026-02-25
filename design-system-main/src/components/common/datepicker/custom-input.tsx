'use client';

import {
  Box,
  Button,
  CircularProgress,
  FormHelperText,
  Typography,
} from '@mui/material';
import dayjs from 'dayjs';
import React from 'react';
import { twMerge } from 'tailwind-merge';

import type useBoolean from '../../../hooks/use-boolean';
import type { ButtonSwitchOption } from '../button-switch';
import { SpriteIcon } from '../sprite-icon';

import { CalendarPreset } from './utils';

const formatCustomDate = 'D MMM YYYY';

export interface CustomInputProps {
  calendarPreset: CalendarPreset | null;
  className?: string;
  disableInput?: boolean;
  disableOnOpen?: boolean;
  endDate: dayjs.Dayjs | null;
  error?: string;
  getCalendarPresets?: () => ButtonSwitchOption<CalendarPreset, string>[];
  isLoading?: boolean;
  labels?: {
    selectDate?: string;
  };
  // this is nasty but it's the only way to ignore outside clicks
  // for multiple component input
  selected?: Date | null;
  showDatepickerProps: ReturnType<typeof useBoolean>;
  startDate: dayjs.Dayjs | null;
  customButtonCaption?(
    startDate: dayjs.Dayjs | null,
    endDate: dayjs.Dayjs | null,
  ): string | undefined;
}

const CustomCalendarInput = React.forwardRef<
  HTMLButtonElement,
  CustomInputProps
>(
  (
    {
      startDate,
      endDate,
      calendarPreset,
      selected,
      showDatepickerProps,
      error,
      isLoading,
      disableInput,
      customButtonCaption,
      className,
      getCalendarPresets,
      labels,
      disableOnOpen,
    },
    ref,
  ) => {
    const buttonCaption = (() => {
      if (calendarPreset !== CalendarPreset.Custom && getCalendarPresets) {
        return getCalendarPresets().find(
          (preset) => preset.value === calendarPreset,
        )?.label;
      }

      if (
        calendarPreset === CalendarPreset.Custom &&
        (!startDate || !endDate)
      ) {
        return labels?.selectDate || 'Select date';
      }

      if (calendarPreset === CalendarPreset.Custom && startDate && endDate) {
        const startDateLabel = dayjs(startDate).format(formatCustomDate);
        const endDateLabel = dayjs(endDate).format(formatCustomDate);

        return `${startDateLabel} - ${endDateLabel}`;
      }

      return '';
    })();

    const caption =
      customButtonCaption?.(selected ? dayjs(selected) : startDate, endDate) ??
      buttonCaption;

    return (
      <Box>
        <Button
          ref={ref}
          className={twMerge(
            'button-reset rounded-4 h-10 w-full border border-solid border-primary-black-4 bg-primary-gray-4 p-3',
            error && 'border-red-500',
            className,
          )}
          variant="text"
          disabled={
            isLoading ||
            disableInput ||
            (disableOnOpen && showDatepickerProps.value)
          }
          startIcon={
            <SpriteIcon name="calendar_outline" className="text-black" />
          }
          onClick={() => {
            if (!showDatepickerProps.value) {
              showDatepickerProps.setTrue();
            }
          }}
        >
          <Typography className="mr-2.5 text-nowrap text-primary-black-80">
            {caption}
          </Typography>

          {!isLoading ? (
            <SpriteIcon
              name="chevron_down_outline"
              className={twMerge(
                'ml-auto justify-self-end text-black transition-transform duration-300',
                showDatepickerProps.value && '-rotate-180',
              )}
            />
          ) : (
            <CircularProgress size={24} />
          )}
        </Button>
        {error && <FormHelperText error={!!error}>{error}</FormHelperText>}
      </Box>
    );
  },
);

CustomCalendarInput.displayName = 'CustomCalendarInput';

export { CustomCalendarInput };
