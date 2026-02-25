'use client';

import type { ButtonProps } from '@mui/material';
import type React from 'react';
import { createContext, useContext, useEffect } from 'react';

import type { SpriteIconNames } from '../../sprite-icon';

export type CustomButtonProps = ButtonProps & {
  label?: React.ReactNode;
  icon?: SpriteIconNames | null;
  tooltip?: React.ReactNode;
};

export type CustomButtonPropsWithLoading = CustomButtonProps & {
  isLoading?: boolean;
};

export interface ModalControls {
  cancel?: CustomButtonProps;
  className?: string;
  confirm?: CustomButtonPropsWithLoading;
}

type ControlsSetter = (prev: ModalControls) => ModalControls;

export interface ModalFooterContextProps {
  controls: ModalControls;
  setControls: (controlsSetter: ControlsSetter) => void;
}

export const ModalFooterContext = createContext<ModalFooterContextProps>({
  controls: {
    cancel: undefined,
    className: undefined,
    confirm: undefined,
  },
  setControls: () => undefined,
});

export const useModalFooterContext = () => {
  const { controls, setControls } = useContext(ModalFooterContext);

  // reset controls on unmount
  useEffect(() => {
    return () => {
      setControls(() => ({
        cancel: undefined,
        className: undefined,
        confirm: undefined,
      }));
    };
  }, [setControls]);

  return { controls, setControls } as ModalFooterContextProps;
};
