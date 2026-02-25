'use client';

import { keyframes } from '@emotion/react';
import { Box } from '@mui/material';

const bounce = keyframes`
  0% { transform: scale(1); opacity: 0.3; }
  50% { transform: scale(1.5); opacity: 1; }
  100% { transform: scale(1); opacity: 0.3; }
`;

const Dot = ({ delay, size }: { delay: string; size?: number }) => (
  <Box
    component="span"
    className="mx-1 inline-block rounded-full bg-primary-black"
    sx={{
      animation: `${bounce} 1.4s infinite`,
      animationDelay: delay,
      height: size || '8px',
      width: size || '8px',
    }}
  />
);

type Props = {
  size?: number;
};

const RunningDots = ({ size }: Props) => (
  <Box display="flex" alignItems="center">
    <Dot delay="0s" size={size} />
    <Dot delay="0.2s" size={size} />
    <Dot delay="0.4s" size={size} />
  </Box>
);

export { RunningDots };
