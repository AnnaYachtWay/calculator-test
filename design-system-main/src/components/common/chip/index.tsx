import { Box, type BoxProps } from '@mui/material';
import React from 'react';
import { twMerge } from 'tailwind-merge';

const Chip = React.forwardRef<HTMLDivElement, BoxProps>(
  ({ children, className, ...rest }, ref) => {
    return (
      <Box
        ref={ref}
        className={twMerge(
          'flex items-center gap-2 rounded-full bg-primary-white px-4 py-2',
          className,
        )}
        {...rest}
      >
        {children}
      </Box>
    );
  },
);

Chip.displayName = 'Chip';

export { Chip };
