import type { CircularProgressProps } from '@mui/material';
import { Box, CircularProgress } from '@mui/material';
import type React from 'react';
import { twMerge } from 'tailwind-merge';

interface LoaderProps extends CircularProgressProps {
  className?: string;
}

const Loader: React.FC<LoaderProps> = ({ className, ...props }) => {
  return (
    <Box
      className={twMerge(
        'flex h-full w-full items-center justify-center',
        className,
      )}
    >
      <CircularProgress {...props} />
    </Box>
  );
};

export default Loader;
