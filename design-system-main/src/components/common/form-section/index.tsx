import type { TypographyProps } from '@mui/material';
import { Box, Typography } from '@mui/material';
import { twMerge } from 'tailwind-merge';

import {
  SpriteIcon,
  type GradientNames,
  type SpriteIconNames,
} from '../sprite-icon';
import { Tooltip } from '../tooltip';

interface Props {
  actions?: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
  description?: string;
  icon?: SpriteIconNames;
  iconClassName?: string;
  iconGradient?: GradientNames;
  required?: boolean;
  title?: React.ReactNode;
  titleVariant?: TypographyProps['variant'];
  tooltip?: React.ReactNode;
  onTitleClick?(): unknown;
}

const FormSection: React.FC<Props> = ({
  title,
  children,
  className,
  description,
  icon,
  iconClassName,
  iconGradient,
  required,
  actions,
  tooltip,
  titleVariant,
  onTitleClick,
}) => {
  const showActions = title || actions;

  const titleBar = (
    <>
      {title && (
        <Box
          className={twMerge(
            'flex items-center justify-start gap-1.5',
            onTitleClick && 'cursor-pointer',
          )}
          onClick={onTitleClick}
          role={onTitleClick && 'button'}
        >
          {icon && (
            <SpriteIcon
              name={icon as SpriteIconNames}
              className={twMerge('h-6 w-6', iconClassName)}
              gradient={iconGradient}
            />
          )}
          <Typography variant={titleVariant || 'text-md'} component="h3">
            {`${title}${required ? '*' : ''}`}
          </Typography>
          {!!tooltip && <Tooltip title={tooltip} placement="top-start" />}
        </Box>
      )}
      {actions && <Box className="ml-auto flex gap-3">{actions}</Box>}
    </>
  );

  return (
    <Box className={className}>
      {showActions && (
        <Box
          className={twMerge(
            'mb-2 flex w-full items-center gap-3',
            !description && 'mb-4',
          )}
        >
          {titleBar}
        </Box>
      )}
      {description && (
        <Typography
          variant="text-sm"
          className="mb-4 ml-[30px] block text-primary-gray"
        >
          {description}
        </Typography>
      )}
      {children}
    </Box>
  );
};

export { FormSection };
