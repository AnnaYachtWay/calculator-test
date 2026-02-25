import { Box, Typography } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import type { Dayjs } from 'dayjs';
import dayjs from 'dayjs';
import type React from 'react';
import type { ReactDatePickerCustomHeaderProps } from 'react-datepicker';

import { SpriteIcon } from '../sprite-icon';

export interface RenderCalendarContainerProps {
  children: React.ReactNode;
}

type RenderCustomerHeaderProps = ReactDatePickerCustomHeaderProps & {
  isOneMonth?: boolean;
};

export const renderCustomHeader = ({
  customHeaderCount,
  monthDate,
  decreaseMonth,
  increaseMonth,
  isOneMonth,
}: RenderCustomerHeaderProps) => {
  const caption = dayjs(monthDate).format('MMMM YYYY');

  return (
    <Box className="flex items-center justify-between py-[10px]">
      {!customHeaderCount ? (
        <IconButton className="p-0" onClick={decreaseMonth} disableRipple>
          <SpriteIcon
            name="chevron_left_outline"
            className="text-primary-dark w-6"
          />
        </IconButton>
      ) : (
        <span />
      )}
      <Typography variant="text-lg" className="flex-1">
        {caption}
      </Typography>
      {isOneMonth || customHeaderCount ? (
        <IconButton className="p-0" onClick={increaseMonth} disableRipple>
          <SpriteIcon
            name="chevron_right_outline"
            className="text-primary-dark w-6"
          />
        </IconButton>
      ) : (
        <span />
      )}
    </Box>
  );
};

export const renderCustomDay = (day: number) => {
  return (
    <Typography
      component="div"
      variant="body3"
      className="grid h-8 w-8 place-items-center justify-self-center rounded-full"
    >
      {day}
    </Typography>
  );
};

export enum CalendarPreset {
  ThisWeek = 'this-week',
  ThisMonth = 'this-month',
  ThisQuarter = 'this-quarter',
  ThisYear = 'this-year',
  LastWeek = 'last-week',
  LastMonth = 'last-month',
  LastQuarter = 'last-quarter',
  LastYear = 'last-year',
  Custom = 'custom',
}

export const getRangeByPreset = (
  preset = CalendarPreset.ThisMonth,
): {
  start: dayjs.Dayjs | null;
  end: dayjs.Dayjs | null;
} => {
  const today = dayjs().startOf('day');

  switch (preset) {
    case CalendarPreset.ThisWeek:
      return {
        start: dayjs().startOf('week'),
        end: today,
      };
    case CalendarPreset.ThisMonth:
      return {
        start: dayjs().startOf('month'),
        end: today,
      };
    case CalendarPreset.ThisQuarter: {
      // Get the current quarter's start month (0, 3, 6, or 9)
      const currentQuarterStartMonth = Math.floor(dayjs().month() / 3) * 3;

      return {
        start: dayjs().month(currentQuarterStartMonth).startOf('month'),
        end: today,
      };
    }

    case CalendarPreset.ThisYear:
      return {
        start: dayjs().startOf('year'), // Fixed: was subtract(1, 'year')
        end: today,
      };
    case CalendarPreset.LastWeek:
      return {
        start: dayjs().subtract(1, 'week').startOf('week'),
        end: dayjs().subtract(1, 'week').endOf('week'),
      };
    case CalendarPreset.LastMonth:
      return {
        start: dayjs().subtract(1, 'month').startOf('month'),
        end: dayjs().subtract(1, 'month').endOf('month'),
      };
    case CalendarPreset.LastQuarter: {
      // Get the previous quarter's start and end months
      const currentMonth = dayjs().month();
      const currentQuarterStart = Math.floor(currentMonth / 3) * 3;
      const lastQuarterStart =
        currentQuarterStart === 0 ? 9 : currentQuarterStart - 3;
      const lastQuarterEnd = lastQuarterStart + 2;

      // Handle year rollover for Q4 -> Q1
      const lastQuarterYear =
        currentQuarterStart === 0 ? dayjs().year() - 1 : dayjs().year();

      return {
        start: dayjs()
          .year(lastQuarterYear)
          .month(lastQuarterStart)
          .startOf('month'),
        end: dayjs().year(lastQuarterYear).month(lastQuarterEnd).endOf('month'),
      };
    }

    case CalendarPreset.LastYear:
      return {
        start: dayjs().subtract(1, 'year').startOf('year'),
        end: dayjs().subtract(1, 'year').endOf('year'),
      };
    case CalendarPreset.Custom:
      return {
        start: null,
        end: null,
      };

    default:
      return {
        start: null,
        end: null,
      };
  }
};

export const getPresetByRange = (
  start: dayjs.Dayjs | null,
  end: dayjs.Dayjs | null,
) => {
  if (!start || !end) {
    return CalendarPreset.Custom;
  }

  const hasMatch = Object.values(CalendarPreset)
    .filter((preset) => preset !== CalendarPreset.Custom)
    .find((preset) => {
      const { start: startDate, end: endDate } = getRangeByPreset(preset);

      return (
        startDate &&
        endDate &&
        start.isSame(startDate, 'day') &&
        end.isSame(endDate, 'day')
      );
    });

  return hasMatch ?? CalendarPreset.Custom;
};

export enum Timeframe {
  DAILY = 'daily',
  WEEKLY = 'weekly',
  MONTHLY = 'monthly',
  YEARLY = 'yearly',
}

export interface TimeframeThresholds {
  daily: number;
  monthly: number;
  weekly: number;
}

const DEFAULT_THRESHOLDS: TimeframeThresholds = {
  daily: 14, // Up to 2 weeks: show daily
  weekly: 90, // Up to 3 months: show weekly
  monthly: 730, // Up to 2 years: show monthly
  // Above 2 years: show yearly
};

/**
 * Determines the appropriate timeframe based on the date range.
 * @param range - Object containing startDate and endDate as Dayjs objects
 * @param thresholds - Optional custom thresholds for timeframe determination
 * @returns The appropriate timeframe enum value
 */
export const getTimeframeFromRange = (
  range: { startDate: Dayjs | null; endDate: Dayjs | null },
  thresholds: TimeframeThresholds = DEFAULT_THRESHOLDS,
): Timeframe => {
  if (!range.startDate || !range.endDate) {
    return Timeframe.DAILY;
  }

  const daysDifference = range.endDate.diff(range.startDate, 'days');

  if (daysDifference <= thresholds.daily) {
    return Timeframe.DAILY;
  }

  if (daysDifference <= thresholds.weekly) {
    return Timeframe.WEEKLY;
  }

  if (daysDifference <= thresholds.monthly) {
    return Timeframe.MONTHLY;
  }

  return Timeframe.YEARLY;
};

export const defaultDateRange = {
  startDate: getRangeByPreset().start?.format('YYYY-MM-DD') ?? null,
  endDate: getRangeByPreset().end?.format('YYYY-MM-DD') ?? null,
};
