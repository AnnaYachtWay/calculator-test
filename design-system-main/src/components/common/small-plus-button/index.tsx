import { Box, Typography } from '@mui/material';
import type React from 'react';
import { twMerge } from 'tailwind-merge';

import { type SpriteIconNames, SpriteIcon } from '../sprite-icon';

interface Props extends Omit<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  'children'
> {
  'data-testid'?: string;
  icon?: SpriteIconNames;
  subtitle: string;
  title: string;
}

const SmallPlusButton: React.FC<Props> = ({
  title,
  subtitle,
  className,
  icon,
  ...rest
}) => {
  return (
    <button
      type="button"
      {...rest}
      className={twMerge(
        'flex w-full items-center gap-3 rounded border-none bg-primary-gray-4 p-3',
        'cursor-pointer duration-200 ease-in-out',
        rest.disabled && 'cursor-not-allowed opacity-[70%]',
        className,
      )}
    >
      <SpriteIcon
        className="h-7 w-7 text-primary-accent"
        name={icon || 'plus_outline'}
      />
      <Box className="flex flex-col items-start">
        <Typography variant="body1">{title}</Typography>
        <Typography variant="body2" className="text-primary-black-60">
          {subtitle}
        </Typography>
      </Box>
    </button>
  );
};

export { SmallPlusButton };
