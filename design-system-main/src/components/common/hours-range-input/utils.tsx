import { Box, MenuList, MenuItem, Typography } from '@mui/material';
import dayjs from 'dayjs';

export type HoursRange = {
  start: string | null;
  end: string | null;
};

export const getHoursRange = (hoursRange?: string | null): HoursRange => {
  if (!hoursRange) return { start: null, end: null };

  const [start, end] = hoursRange.split('-');

  return {
    start: start || null,
    end: end || null,
  };
};

const getHours = () => {
  return Array.from({ length: 24 }, (_, i) => `${i}:00`);
};

export const formatHour = (hour: string | null) => {
  if (!hour) return '';

  const [h, m] = hour.split(':');

  return dayjs().hour(+h).minute(+m).format('LT');
};

export const getColumn = (
  title: string,
  selectedHour: string | null,
  selectHour: (hour: string) => void,
) => {
  return (
    <Box key={title} className="flex flex-col">
      <Typography variant="caption" className="px-4 py-1 text-primary-gray-80">
        {title}
      </Typography>
      <MenuList className="mr-1 overflow-auto py-0">
        {getHours().map((hour) => (
          <MenuItem
            key={hour}
            selected={selectedHour === hour}
            onClick={() => selectHour(hour)}
          >
            {formatHour(hour)}
          </MenuItem>
        ))}
      </MenuList>
    </Box>
  );
};
