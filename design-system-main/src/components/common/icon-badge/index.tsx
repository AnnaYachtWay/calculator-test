import type { BoxProps } from '@mui/material';
import { Box } from '@mui/material';
import { twMerge } from 'tailwind-merge';

import { type SpriteIconNames, SpriteIcon } from '../sprite-icon';

interface Props extends BoxProps {
  disabled?: boolean;
  icon: SpriteIconNames;
  onClick?: () => void;
  rotate?: boolean;
}

const IconBadge: React.FC<Props> = ({
  icon,
  disabled,
  onClick,
  rotate,
  ...rest
}) => {
  return (
    <Box
      {...rest}
      className={twMerge(
        'flex flex-shrink-0 items-center justify-center border border-solid border-primary-white-40',
        'pointer-events-none size-8 rounded-full bg-primary-white text-2xl shadow-plus-button-card',
        disabled && 'bg-primary-gray-6',
      )}
      onClick={onClick}
    >
      <SpriteIcon
        name={icon || 'plus_outline'}
        fontSize={8}
        className={twMerge(
          'text-primary-accent transition-all duration-300',
          rotate && 'rotate-45 transform',
        )}
      />
    </Box>
  );
};

export { IconBadge };
