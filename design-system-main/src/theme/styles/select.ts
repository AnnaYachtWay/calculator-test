import ExpandMoreRoundedIcon from '@mui/icons-material/ExpandMoreRounded';
import type { Components, Theme } from '@mui/material';

import { getInputStyles } from './input';

export const getSelectStyles = (theme: Theme): Components['MuiSelect'] => ({
  defaultProps: {
    IconComponent: ExpandMoreRoundedIcon,
  },
  styleOverrides: {
    select: {
      height: '1.4375em',
    },
    outlined: (props) => ({
      padding: '12px 16px',
      ...(
        getInputStyles(theme)?.styleOverrides?.root as (
          props: unknown,
        ) => Record<string, unknown>
      )(props),
    }),
  },
});
