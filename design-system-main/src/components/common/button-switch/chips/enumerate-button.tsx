import { Button } from '@mui/material';
import { twMerge } from 'tailwind-merge';

import { SpriteIcon } from '../../sprite-icon';
import type { ChipProps } from '../constants';

const EnumerateButton: React.FC<ChipProps> = ({
  title,
  isActive,
  buttonClassName,
}) => {
  return (
    <Button
      variant="outlined"
      className={twMerge(
        'pointer-events-none flex w-full gap-1',
        isActive && 'border-primary-black bg-primary-black text-primary-white',
        buttonClassName,
      )}
    >
      {title}
      <SpriteIcon
        name={isActive ? 'cross_outline' : 'plus_outline'}
        className={twMerge('h-4 w-4', isActive && 'fill-primary-white')}
      />
    </Button>
  );
};

export { EnumerateButton };
