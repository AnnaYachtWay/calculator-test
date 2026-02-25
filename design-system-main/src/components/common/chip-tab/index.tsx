import { Typography, Tooltip } from '@mui/material';
import type React from 'react';
import { twMerge } from 'tailwind-merge';

import { SpriteIcon, type SpriteIconNames } from '../sprite-icon';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  active?: boolean;
  className?: string;
  description?: string;
  icon?: SpriteIconNames;
  isMobile?: boolean;
  label: React.ReactNode;
  labelVariant?: 'button2' | 'body2';
  size?: 'small' | 'medium' | 'large';
  theme?: 'light' | 'dark';
}

const ChipTab: React.FC<Props> = ({
  active,
  className,
  icon,
  isMobile,
  label,
  size = 'large',
  theme = 'light',
  disabled,
  description,
  labelVariant,
  ...props
}) => {
  const isLarge = size === 'large';
  const isMedium = size === 'medium';
  const isSmall = size === 'small';

  const isLight = theme === 'light';

  const smallClassNames = 'p-[10px] pr-3';
  const mediumClassName = 'px-1.5 py-1 gap-1';

  const defaultClassName = [
    'p-2 pr-3 min-h-[2.875rem] max-sm:min-h-[2.5rem] border-2',
    !icon && 'pl-3',
    active && 'ring',
    isLight && [
      active &&
        'border-primary-accent bg-primary-accent-4 text-primary-accent border-[1px] ring-primary-accent-20',
      disabled
        ? 'text-primary-gray-80 bg-primary-gray-4'
        : 'active:border-primary-gray-80',
      !active &&
        !disabled &&
        'hover:border-primary-gray-80 border-primary-gray-4',
    ],
    !isLight && [
      'border-primary-white-20 text-primary-white bg-primary-white-4',
      active &&
        'border-primary-white-20 bg-primary-white text-primary-black ring-primary-white-20 border-[1px]',
      !disabled &&
        !active &&
        'active:bg-primary-white-20 hover:bg-primary-white-20',
    ],
  ];

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (!disabled && props.onClick) props.onClick(e);
  };

  return (
    <Tooltip
      title={description}
      placement={isMobile ? 'bottom' : 'right-end'}
      disableInteractive
      slotProps={{
        popper: {
          modifiers: [
            {
              name: 'offset',
              options: {
                offset: [-24, -24],
              },
            },
          ],
        },
      }}
    >
      <button
        {...props}
        type="button"
        className={twMerge(
          'button-reset flex items-center gap-2 text-nowrap backdrop-blur-md transition-all',
          'rounded-full border border-solid border-primary-gray-20',
          defaultClassName,
          isSmall && smallClassNames,
          isMedium && mediumClassName,
          className,
        )}
        onClick={handleClick}
      >
        {icon && (
          <SpriteIcon
            name={icon}
            className={twMerge('size-5', isLarge && 'size-7 max-sm:size-5')}
          />
        )}
        <Typography variant={labelVariant || isSmall ? 'body2' : 'caption'}>
          {label}
        </Typography>
      </button>
    </Tooltip>
  );
};

export { ChipTab };
