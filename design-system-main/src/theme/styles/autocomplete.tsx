/* eslint-disable @typescript-eslint/no-unused-vars */
import ExpandMoreRoundedIcon from '@mui/icons-material/ExpandMoreRounded';
import type { Components, Theme } from '@mui/material';

export const getAutocompleteStyles = (
  theme: Theme,
): Components['MuiAutocomplete'] => ({
  styleOverrides: {
    root: {
      '& .MuiOutlinedInput-root': {
        padding: 'unset',

        '& .MuiAutocomplete-input': {
          padding: '12px 16px',
        },
      },
      '& .MuiAutocomplete-endAdornment': {
        top: '50%',
        transform: 'translateY(-50%)',
      },
    },
  },
  defaultProps: {
    popupIcon: <ExpandMoreRoundedIcon />,
  },
});
