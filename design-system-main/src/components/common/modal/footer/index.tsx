import { Box, CircularProgress, Tooltip } from '@mui/material';
import { twMerge } from 'tailwind-merge';

import { Button } from '../../button';
import { SpriteIcon } from '../../sprite-icon';
import type { ModalControls } from '../modal-footer-context';

const ModalFooter: React.FC<ModalControls> = ({
  className,
  cancel: {
    label: cancelLabel,
    icon: cancelIcon,
    tooltip: cancelTooltip,
    ...cancel
  } = {},
  confirm: {
    label: confirmLabel,
    icon: confirmIcon,
    tooltip: confirmTooltip,
    isLoading: confirmIsLoading,
    ...confirm
  } = {},
}) => {
  return (
    <Box
      className={twMerge(
        'absolute bottom-0 left-0 right-0 z-50 flex items-center',
        'h-20 w-full px-8 shadow-top transition-transform duration-300 ease-in-out',
        !cancel && 'justify-end',
        cancel && 'justify-between',
        className,
      )}
    >
      <Tooltip title={cancelTooltip}>
        <Button
          type="button"
          variant="outlined"
          className={twMerge(cancelIcon && 'flex gap-1')}
          data-testid="back-button"
          {...cancel}
        >
          <>
            {cancel.children || cancelLabel}
            {cancelIcon && <SpriteIcon name={cancelIcon} />}
          </>
        </Button>
      </Tooltip>
      <Tooltip title={confirmTooltip}>
        <Button
          type="button"
          variant="contained"
          className="flex gap-1"
          data-testid="next-button"
          {...confirm}
        >
          {confirm.children || (
            <>
              {confirmLabel}
              {confirmIcon !== null && !confirmIsLoading && (
                <SpriteIcon name={confirmIcon || 'arrow_right_outline'} />
              )}
              {confirmIsLoading && (
                <CircularProgress className="ml-1" size={16} />
              )}
            </>
          )}
        </Button>
      </Tooltip>
    </Box>
  );
};

export { ModalFooter };
