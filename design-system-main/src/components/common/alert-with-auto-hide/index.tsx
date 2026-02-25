'use client';

import type { AlertProps } from '@mui/material';
import { Alert } from '@mui/material';
import type { SyntheticEvent } from 'react';
import { useCallback, useEffect } from 'react';

import useBoolean from '../../../hooks/use-boolean';

interface Props extends AlertProps {
  hideDelay?: number;
}

const AlertWithAutoHide: React.FC<Props> = ({ hideDelay = 10000, ...rest }) => {
  const isShown = useBoolean(true);

  useEffect(() => {
    if (!hideDelay) return undefined;

    const timeout = setTimeout(() => {
      isShown.setFalse();
    }, hideDelay);

    return () => {
      clearTimeout(timeout);
    };
  }, [hideDelay, isShown]);

  const onClose = useCallback(
    (e: SyntheticEvent<Element, Event>) => {
      isShown.setFalse();

      rest.onClose?.(e);
    },
    [isShown, rest],
  );

  if (!isShown.value) return null;

  return <Alert onClose={onClose} {...rest} />;
};

export { AlertWithAutoHide };
