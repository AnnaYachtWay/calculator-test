import { Box, Typography } from '@mui/material';
import type React from 'react';
import { twMerge } from 'tailwind-merge';

import { SpriteIcon } from '../sprite-icon';

interface Props {
  className?: string;
  iconClassName?: string;
  iconContainerClassName?: string;
  items: string[];
}

const List: React.FC<Props> = ({
  className,
  items,
  iconClassName,
  iconContainerClassName,
}) => (
  <Box className={twMerge('flex w-full text-primary-black-60', className)}>
    <ul className="m-0 flex list-none flex-col gap-2 p-0">
      {items.map((item) => (
        <li key={item}>
          <Typography variant="body2" className="flex gap-1">
            <Box
              className={twMerge('size-5', iconContainerClassName)}
              component="span"
            >
              <SpriteIcon name="play_solid" className={iconClassName} />
            </Box>
            {item}
          </Typography>
        </li>
      ))}
    </ul>
  </Box>
);

export { List };
