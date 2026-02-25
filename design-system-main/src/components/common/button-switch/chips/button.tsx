import { Box, Button as MuiButton } from '@mui/material';
import { twMerge } from 'tailwind-merge';

import { SpriteIcon } from '../../sprite-icon';
import { Tooltip } from '../../tooltip';
import type { ChipProps } from '../constants';

const Button: React.FC<ChipProps> = ({
  title,
  isActive,
  withPlusIcon,
  buttonClassName,
  disabled,
  noIcon,
  tooltip,
}) => {
  return (
    <>
      <MuiButton
        variant="outlined"
        className={twMerge(
          'pointer-events-none relative flex items-center justify-center disabled:pointer-events-auto',
          isActive && !disabled && 'text-primary-accent',
          disabled &&
            'border-primary-black-4 bg-primary-gray-4 text-primary-black-60',
          buttonClassName,
        )}
        disableRipple
        fullWidth
        endIcon={
          withPlusIcon && (
            <SpriteIcon
              name="plus_outline"
              className={twMerge(
                'size-3 text-primary-accent transition-all',
                isActive && 'size-4 rotate-45',
              )}
            />
          )
        }
      >
        <Box className="flex items-center gap-2">
          {disabled && !noIcon && <SpriteIcon name="lock_close_outline" />}
          {title}
        </Box>
      </MuiButton>
      {tooltip && (
        <Box className="absolute bottom-0 right-4 top-0 flex items-center">
          <Tooltip placement="top-start" title={tooltip} />
        </Box>
      )}
    </>
  );
};

export { Button };
