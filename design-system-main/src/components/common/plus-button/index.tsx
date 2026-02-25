'use client';

import type { UniqueIdentifier } from '@dnd-kit/core';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { Box, Typography } from '@mui/material';
import { motion, useAnimation } from 'framer-motion';
import type React from 'react';
import { useEffect } from 'react';
import { twMerge } from 'tailwind-merge';

import { SpriteIcon, type SpriteIconNames } from '../sprite-icon';

interface Props {
  actions?: React.ReactNode;
  className?: string;
  'data-testid'?: string;
  disabled?: boolean;
  gray?: boolean;
  icon?: SpriteIconNames;
  id?: UniqueIdentifier | null;
  isBeingDragged?: boolean;
  isDragMode?: boolean;
  isDragOverlay?: boolean;
  isOptional?: boolean;
  isSelected?: boolean;
  onClick?: React.MouseEventHandler;
  onIconClick?: React.MouseEventHandler | void;
  optionalLabel?: string;
  rightActions?: React.ReactNode;
  rotatePlus?: boolean;
  showMainIcon?: boolean;
  subtitle?: string;
  subtitleClassName?: string;
  title: string;
  titleClassName?: string;
  wiggle?: boolean;
}

const PlusButton: React.FC<Props> = ({
  className,
  onClick,
  disabled,
  subtitle,
  subtitleClassName,
  title,
  titleClassName,
  actions,
  icon,
  isOptional,
  optionalLabel,
  isSelected,
  rotatePlus = false,
  isDragMode = false,
  showMainIcon = true,
  onIconClick,
  'data-testid': dataTestId,
  rightActions,
  gray,
  id,
  isBeingDragged,
  isDragOverlay,
  wiggle = false,
}) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: id || 'plus-btn' });

  const controls = useAnimation();

  useEffect(() => {
    if (wiggle) {
      const wiggleArray = Math.random() > 0.5 ? [-0.7, 0.7] : [0.7, -0.7];

      controls.start({
        rotate: wiggleArray,
        transition: { duration: 1.5, repeat: Infinity, repeatType: 'mirror' },
      });
    } else {
      controls.stop();
      controls.set({ rotate: 0 });
    }
  }, [wiggle, controls]);

  const handleIconClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onIconClick?.(e);
  };

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  if (isBeingDragged) {
    return (
      <div
        data-testid={dataTestId}
        style={style}
        ref={setNodeRef}
        {...attributes}
        {...listeners}
        className="h-[5.875rem] rounded border-2 border-dashed border-primary-gray-40 bg-primary-gray-4"
      />
    );
  }

  return (
    <Box
      style={style}
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      className={twMerge('relative w-full', isDragOverlay && 'w-fit')}
    >
      {isDragMode && (
        <Box
          className={twMerge(
            'absolute left-0 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2',
            'flex h-8 w-6 items-center justify-center rounded bg-primary-white shadow-card',
          )}
        >
          <SpriteIcon name="drag_solid" className="h-4 w-4" />
        </Box>
      )}
      <motion.button
        animate={controls}
        type="button"
        onClick={onClick}
        disabled={disabled}
        data-testid={dataTestId || 'plus-btn'}
        className={twMerge(
          'relative flex h-full w-full items-center gap-5 pb-5 pl-5 pr-5 pt-4 max-md:pb-5 max-md:pl-5 max-md:pr-5',
          'min-h-[5.85rem] cursor-pointer',
          'w-full rounded-lg border border-solid border-primary-white-40 bg-primary-white-40',
          isSelected && 'border border-solid border-primary-accent',
          isDragMode && 'cursor-grab bg-primary-gray-4',
          !disabled && !gray && 'hover:shadow-sm',
          disabled && 'cursor-progress bg-primary-gray-4',
          gray && 'bg-primary-gray-4',
          !gray && 'shadow-button',
          isDragOverlay &&
            'min-h-[4rem] w-fit bg-primary-gray-6-opaque pb-3 pt-3 outline outline-2 outline-primary-accent-40',
          className,
        )}
      >
        {showMainIcon && (
          <Box
            className={twMerge(
              'flex flex-shrink-0 items-center justify-center border-transparent',
              'pointer-events-none size-10 rounded-full bg-primary-white text-2xl shadow-lg',
              disabled && 'bg-primary-gray-4',
            )}
            onClick={handleIconClick}
          >
            <SpriteIcon
              name={icon || 'plus_outline'}
              className={twMerge(
                'h-4 w-4 text-primary-accent transition-all duration-300',
                rotatePlus && 'rotate-45 transform',
              )}
            />
          </Box>
        )}
        <Box className="flex w-full justify-between gap-6">
          <Box className="flex w-full flex-col items-start justify-center">
            <Box className="flex items-baseline gap-1">
              <Typography
                variant="subtitle1"
                className={twMerge('text-left', titleClassName)}
              >
                {title}
              </Typography>
              {isOptional && (
                <Typography variant="body1" className="text-left">
                  {isOptional && `(${optionalLabel})`}
                </Typography>
              )}
            </Box>
            {subtitle && (
              <Typography
                variant="body1"
                className={twMerge(
                  '-mt-1 text-left text-primary-black-60',
                  subtitleClassName,
                )}
              >
                {subtitle}
              </Typography>
            )}
          </Box>
          {actions && <Box className="flex items-center gap-3">{actions}</Box>}
        </Box>
        {rightActions && (
          <Box className="absolute right-3 top-3 flex items-center justify-end gap-2">
            {rightActions}
          </Box>
        )}
      </motion.button>
    </Box>
  );
};

export { PlusButton };
