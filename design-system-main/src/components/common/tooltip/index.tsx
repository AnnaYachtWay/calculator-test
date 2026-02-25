import type { TooltipProps } from '@mui/material';
import { Box, Tooltip as MuiTooltip } from '@mui/material';
import type React from 'react';
import { twMerge } from 'tailwind-merge';

const Tooltip: React.FC<Omit<TooltipProps, 'children'>> = ({
  className,
  ...props
}) => {
  return (
    <MuiTooltip {...props} className={twMerge('cursor-help', className)}>
      <Box
        className={twMerge(
          'flex h-5 w-5 items-center justify-center text-sm',
          'rounded-full bg-primary-gray-4 text-primary-black-60',
        )}
      >
        ?
      </Box>
    </MuiTooltip>
  );
};

export { Tooltip };
