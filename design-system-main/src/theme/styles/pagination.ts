/* eslint-disable @typescript-eslint/no-unused-vars */
import type { Theme, Components } from '@mui/material';

import themeConstants from '../constants';

export const getPaginationStyles = (
  theme: Theme,
): Components['MuiPagination'] => ({
  styleOverrides: {
    outlined: {
      '& .MuiPaginationItem-root': {
        margin: '0 4px',
        color: themeConstants.colors.primary.black.DEFAULT,
        borderColor: themeConstants.colors.primary.gray[20],
      },
      '& .MuiPaginationItem-root.Mui-selected': {
        backgroundColor: themeConstants.colors.primary.black.DEFAULT,
        color: themeConstants.colors.primary.white.DEFAULT,
      },
      '& .MuiPaginationItem-previousNext': {
        border: 'none',
      },
      '@media (max-width: 425px)': {
        '& .MuiPaginationItem-root': {
          margin: '0 3px',
        },
        '& .MuiPagination-ul': {
          '& li:first-child .MuiPaginationItem-root': {
            marginLeft: 0,
          },
          '& li:last-child .MuiPaginationItem-root': {
            marginRight: 0,
          },
        },
      },
    },
  },
});
