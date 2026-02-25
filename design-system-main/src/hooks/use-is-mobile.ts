import type { Theme } from '@mui/material';
import { useMediaQuery } from '@mui/material';

const useIsMobile = () => {
  const isMobileScreen = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down('sm'),
  );

  const isLandscapeTouchSmallHeight = useMediaQuery(
    '(orientation: landscape) and (pointer: coarse) and (max-height: 600px)',
  );

  return isMobileScreen || isLandscapeTouchSmallHeight;
};

export default useIsMobile;
