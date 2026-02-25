import { Pagination, styled } from '@mui/material';

import themeConstants from '../../../theme/constants';

const StyledPagination = styled(Pagination)(() => ({
  '& .MuiPaginationItem-root': {
    border: `1px solid ${themeConstants.colors.primary.gray[20]}`,
  },
  '& .MuiPaginationItem-ellipsis': {
    border: 'none',
  },
  '& .MuiPaginationItem-previousNext': {
    border: 'none',
    marginLeft: 1,
  },
  '& .Mui-selected': {
    backgroundColor: `${themeConstants.colors.primary.megablack.DEFAULT} !important`,
    color: `${themeConstants.colors.primary.white.DEFAULT} !important`,
    '&:hover': {
      backgroundColor: themeConstants.colors.primary.accent[80],
    },
  },
  '& .MuiPaginationItem-root:hover': {
    backgroundColor: themeConstants.colors.primary.white.DEFAULT,
  },
}));

export { StyledPagination };
