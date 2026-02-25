import type { Theme } from '@mui/material';

import themeConstants from './constants';
import getLandingTypography from './typography/get-landing-typography';
import getNewTypography from './typography/get-new-typography';
import getTypography from './typography/get-typography';

const getAllTypography = (theme: Theme) => {
  return {
    ...theme.typography,
    fontFamily: themeConstants.fontFamily.figtree.join(','),
    ...getTypography(theme),
    ...getLandingTypography(theme),
    ...getNewTypography(theme),
  };
};

export default getAllTypography;
