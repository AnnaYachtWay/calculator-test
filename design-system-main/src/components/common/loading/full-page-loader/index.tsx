import { Box } from '@mui/material';
import { twMerge } from 'tailwind-merge';

import Logo from '../../../../assets/loaderlogo.svg';
import { getGradientUrl } from '../../../../utils/icon';

interface Props {
  isHidden?: boolean;
}

const FullPageLoader: React.FC<Props> = ({ isHidden = false }) => {
  return (
    <Box
      className={twMerge(
        'fixed left-0 top-0 z-[999] flex h-screen w-screen items-center justify-center',
        'bg-primary-white transition-opacity duration-500',
        isHidden ? 'pointer-events-none opacity-0' : 'opacity-100',
      )}
    >
      <Logo fill={getGradientUrl('accent_animate')} />
    </Box>
  );
};

export default FullPageLoader;
