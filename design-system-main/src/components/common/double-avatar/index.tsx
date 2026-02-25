import { Box } from '@mui/material';
import type React from 'react';
import { twMerge } from 'tailwind-merge';

import { Image, type ImageProps } from '../image';

export type AvatarInfo = {
  url?: string;
  name: string;
};

interface DoubleAvatarProps {
  bottomImageProps?: Partial<ImageProps>;
  bottomUser: AvatarInfo;
  className?: string;
  topImageProps?: Partial<ImageProps>;
  topUser: AvatarInfo;
}

const DoubleAvatar: React.FC<DoubleAvatarProps> = ({
  topUser,
  bottomUser,
  topImageProps,
  bottomImageProps,
  className,
}) => {
  return (
    <Box className={twMerge('relative', className)}>
      <Image
        src={topUser.url}
        alt={topUser.name}
        width={20}
        height={20}
        {...topImageProps}
        className={twMerge(
          'absolute left-0 top-0 z-0 object-cover',
          topImageProps?.className,
        )}
      />
      <Image
        src={bottomUser.url}
        alt={bottomUser.name}
        width={20}
        height={20}
        {...bottomImageProps}
        className={twMerge(
          'absolute bottom-0 right-0 z-10 object-cover',
          bottomImageProps?.className,
        )}
      />
    </Box>
  );
};

export { DoubleAvatar };
