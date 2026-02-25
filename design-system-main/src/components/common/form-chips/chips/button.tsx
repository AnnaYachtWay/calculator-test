import { Button as MuiButton } from '@mui/material';
import { twMerge } from 'tailwind-merge';

import type { ChipProps } from '../constants';

const Button: React.FC<ChipProps> = ({ title, isActive, className }) => {
  return (
    <MuiButton
      variant="outlined"
      className={twMerge(
        'border-[1px] border-solid border-primary-gray-20 bg-transparent',
        isActive &&
          'border-primary-accent bg-primary-accent-4 text-primary-accent ring-2 ring-primary-accent-20',
        className,
      )}
      fullWidth
    >
      {title}
    </MuiButton>
  );
};

export { Button };
