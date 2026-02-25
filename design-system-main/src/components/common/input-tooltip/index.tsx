import { InputAdornment } from '@mui/material';
import type React from 'react';

import { Tooltip } from '../tooltip';

export type TooltipPlacement =
  | 'top'
  | 'right'
  | 'bottom'
  | 'left'
  | 'bottom-end'
  | 'bottom-start'
  | 'left-end'
  | 'left-start'
  | 'right-end'
  | 'right-start'
  | 'top-end'
  | 'top-start';

interface Props {
  placement?: TooltipPlacement;
  tooltip: React.ReactNode;
}

const InputTooltip: React.FC<Props> = ({ tooltip, placement }) => (
  <InputAdornment position="start" className="px-1">
    <Tooltip
      title={tooltip}
      placement={placement}
      arrow={
        !placement || ['top', 'left', 'right', 'bottom'].includes(placement)
      }
    />
  </InputAdornment>
);

export { InputTooltip };
