import { Box, Typography } from '@mui/material';
import type React from 'react';
import { twMerge } from 'tailwind-merge';

interface Props {
  className?: string;
  count: number;
  max: number;
}

const Counter: React.FC<Props> = ({ className, count, max }) => {
  return (
    <Box
      className={twMerge(
        'rounded-full bg-primary-accent-4 px-2 py-0.5',
        className,
      )}
    >
      <Typography variant="body2">
        <span className="text-primary-accent">{count}/</span>
        <span className="text-primary-accent-60">{max}</span>
      </Typography>
    </Box>
  );
};

export { Counter };
