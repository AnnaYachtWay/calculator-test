import { Typography } from '@mui/material';
import type React from 'react';
import { twMerge } from 'tailwind-merge';

import { Button, type YachtwayButtonProps } from '../../button';
import { SpriteIcon, type SpriteIconNames } from '../../sprite-icon';

export interface ButtonCardProps extends YachtwayButtonProps {
  icon: SpriteIconNames;
  title: string;
}

const ButtonCard: React.FC<ButtonCardProps> = ({
  isLoading,
  icon,
  title,
  disabled,
  ...props
}) => {
  const content = (
    <div className="flex flex-col items-center gap-1.5">
      {icon && (
        <SpriteIcon
          name={icon}
          className={twMerge(
            'size-5 fill-primary-accent',
            disabled && 'fill-primary-black-60',
          )}
        />
      )}
      <Typography
        variant="button2"
        className={twMerge(
          'overflow-hidden text-ellipsis whitespace-nowrap text-primary-accent',
          disabled && 'text-primary-black-60',
        )}
      >
        {title}
      </Typography>
    </div>
  );

  return (
    <Button
      {...props}
      className={twMerge(
        'bg-accent-bg-6 px-2 py-2.5 outline-1 outline-primary-accent hover:bg-accent-bg-6 hover:outline',
        'disabled:bg-primary-gray-4',
        props.className,
      )}
      isLoading={isLoading}
      disabled={disabled || isLoading}
    >
      {content}
    </Button>
  );
};

export { ButtonCard };
