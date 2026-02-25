'use client';

import type { TypographyProps } from '@mui/material';
import { Typography } from '@mui/material';
import { twMerge } from 'tailwind-merge';

import { toKebabCase } from '../../../../utils/string-format';
import type { SpriteIconNames, SpriteIconProps } from '../../sprite-icon';
import { SpriteIcon } from '../../sprite-icon';

type Size = 'large' | 'medium' | 'small' | 'extraSmall';

export interface SelectCardProps {
  className?: string;
  icon?: SpriteIconNames;
  iconProps?: SpriteIconProps;
  isActive?: boolean;
  isDisabled?: boolean;
  size?: Size;
  title: string;
  titleProps?: TypographyProps;
  onClick?(): void;
}

const titleVariantBySize: Record<Size, TypographyProps['variant']> = {
  large: 'text-xl',
  medium: 'text-lg',
  small: 'text-md',
  extraSmall: 'text-sm',
};

const iconSizeBySize: Record<Size, number> = {
  large: 28,
  medium: 24,
  small: 20,
  extraSmall: 16,
};

const buttonHeightBySize: Record<Size, number> = {
  large: 56,
  medium: 48,
  small: 40,
  extraSmall: 36,
};

const SelectCard: React.FC<SelectCardProps> = ({
  icon,
  iconProps,
  title,
  className,
  isActive,
  isDisabled,
  onClick,
  titleProps,
  size = 'small',
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={twMerge(
        'button-reset rounded-sm border border-solid border-n-gray-50 bg-n-base-white px-5',
        'cursor-pointer hover:border-n-gray-100 hover:bg-n-gray-25',
        isActive &&
          'border-n-brand-700 bg-n-brand-50 hover:border-n-brand-700 hover:bg-n-brand-50',
        isDisabled && 'cursor-not-allowed border-n-gray-100 bg-n-gray-25',
        `min-h-[${buttonHeightBySize[size]}px]`,
        className,
      )}
      data-testid={toKebabCase(`${title}-select-card`)}
    >
      {icon && (
        <SpriteIcon
          name={icon}
          className={twMerge(
            `size-[${iconSizeBySize[size]}px]`,
            isActive && 'text-primary-accent',
            iconProps?.className,
          )}
          {...iconProps}
        />
      )}
      <Typography
        component="p"
        variant={titleVariantBySize[size]}
        className={twMerge(
          'text-n-gray-800',
          isDisabled && 'text-n-gray-300',
          isActive && 'text-n-brand-700',
          titleProps?.className,
        )}
        {...titleProps}
      >
        {title}
      </Typography>
    </button>
  );
};
export { SelectCard };
