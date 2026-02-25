import type { Dayjs } from 'dayjs';
import dayjs from 'dayjs';

export const formatDate = (
  date: Date | string | number,
  template = 'MMM D, hh:mm A',
) => dayjs(date).format(template);

export const formatDateLocale = (date?: string | Dayjs) =>
  dayjs(date).format('L');

const getDayFormatter = (format: string) => (day: number) => {
  return dayjs().day(day).format(format);
};

const formatDaysOfWeek = (daysOfWeek: number[], dayFormat = 'ddd') => {
  const getDayName = getDayFormatter(dayFormat);

  const days = [...daysOfWeek].sort((a, b) => (a > b ? 1 : -1));

  const ranges = [];
  let start = days[0];
  let end = days[0];

  for (let i = 1; i < days.length; i += 1) {
    if (days[i] === end + 1) {
      end = days[i];
    } else {
      ranges.push({ start, end });
      start = days[i];
      end = days[i];
    }
  }

  ranges.push({ start, end });

  const formattedRanges = ranges.map((range) => {
    if (range.start === range.end) {
      return getDayName(range.start);
    }

    if (range.end === range.start + 1) {
      return `${getDayName(range.start)}, ${getDayName(range.end)}`;
    }

    return `${getDayName(range.start)}-${getDayName(range.end)}`;
  });

  return formattedRanges.join(', ');
};

export default formatDaysOfWeek;
