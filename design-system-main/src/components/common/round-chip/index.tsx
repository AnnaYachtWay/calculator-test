import { Box } from '@mui/material';
import { twMerge } from 'tailwind-merge';

import { type SpriteIconNames, SpriteIcon } from '../sprite-icon';

interface Props {
  className?: string;
  icon: SpriteIconNames;
  iconClassName?: string;
}

const RoundChip: React.FC<Props> = ({ icon, className, iconClassName }) => (
  <Box
    className={twMerge(
      'flex size-8 items-center justify-center rounded-full bg-primary-white-40 shadow-plus-button-card',
      'border-1 border-solid border-white',
      className,
    )}
  >
    <SpriteIcon
      name={icon}
      className={twMerge('size-4 text-primary-accent', iconClassName)}
    />
  </Box>
);

export { RoundChip };
