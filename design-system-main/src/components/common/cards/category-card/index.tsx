'use client';

import { Box, Tooltip, Typography } from '@mui/material';
import { useEffect, useRef, useState } from 'react';
import { twMerge } from 'tailwind-merge';

import { toKebabCase } from '../../../../utils/string-format';
import type { SpriteIconNames } from '../../sprite-icon';
import { SpriteIcon } from '../../sprite-icon';

interface Props {
  className?: string;
  icon?: SpriteIconNames;
  iconClassName?: string;
  isActive?: boolean;
  title: string;
  titleClassName?: string;
  titleVariant?: 'subtitle1' | 'body2';
  withBorder?: boolean;
  onClick?(): void;
}

const CategoryCard: React.FC<Props> = ({
  icon,
  title,
  className,
  isActive,
  onClick,
  withBorder = true,
  iconClassName,
  titleClassName,
  titleVariant,
}) => {
  const textRef = useRef<HTMLDivElement>(null);
  const [isOverflown, setIsOverflown] = useState(false);

  useEffect(() => {
    const element = textRef.current;
    const compare = element
      ? element.offsetWidth < element.scrollWidth ||
        element.offsetHeight < element.scrollHeight
      : false;

    setIsOverflown(compare);
  }, []);

  return (
    <Tooltip title={isOverflown ? title : ''}>
      <span>
        <button
          type="button"
          onClick={onClick}
          className={twMerge(
            'm-0 flex h-[72px] min-w-[7.5rem] flex-col gap-1 bg-primary-white p-3 outline-none',
            'relative w-full rounded border border-solid border-primary-gray-20 text-primary-black',
            isActive &&
              'border-primary-accent bg-primary-accent-4 ring-2 ring-primary-accent-20',
            isActive &&
              'focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-primary-accent-40',
            onClick && 'cursor-pointer duration-300 hover:border-primary-black',
            onClick &&
              'focus:border-primary-gray focus:ring-2 focus:ring-primary-gray-20',
            !withBorder && 'border-none',
            className,
          )}
          data-testid={toKebabCase(`${title}-button`)}
        >
          {isActive && (
            <Box className="absolute right-1 top-1">
              <SpriteIcon
                name="checkmark_outline"
                className="size-5 text-primary-white"
                gradient="accent"
              />
            </Box>
          )}
          {icon && (
            <SpriteIcon
              name={icon}
              className={twMerge(
                'size-6',
                isActive && 'text-primary-accent',
                iconClassName,
              )}
            />
          )}
          <Box className="flex w-full flex-1 items-center">
            <Typography
              variant={titleVariant || 'body2'}
              className={twMerge(
                'inline-block max-w-full truncate pb-1 text-start',
                isActive && 'text-primary-accent',
                titleClassName,
              )}
              ref={textRef}
            >
              {title}
            </Typography>
          </Box>
        </button>
      </span>
    </Tooltip>
  );
};

export { CategoryCard };
