import { Box } from '@mui/material';
import type React from 'react';
import { twMerge } from 'tailwind-merge';

const SwitchOption = ({
  label,
  isActive,
  innerRef,
}: {
  label: React.ReactNode;
  isActive: boolean;
  innerRef: React.RefObject<HTMLDivElement | null>;
}) => (
  <Box
    ref={innerRef}
    className={twMerge(
      'z-10 flex px-2 text-xs font-medium transition-colors duration-300 [&>svg]:!transition-colors',
      isActive
        ? '!text-white [&>svg]:!text-white'
        : '!text-n-gray-700 [&>svg]:!text-n-gray-700',
    )}
  >
    {label}
  </Box>
);

export default SwitchOption;
