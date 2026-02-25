'use client';

import type { BoxProps, ModalProps as MuiModalProps } from '@mui/material';
import { Box, Modal as MuiModal } from '@mui/material';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { twMerge } from 'tailwind-merge';

import { ModalFooter } from './footer';
import {
  type CustomButtonProps,
  type CustomButtonPropsWithLoading,
  type ModalControls,
  ModalFooterContext,
} from './modal-footer-context';
import {
  ResponsiveModalBody,
  type ModalSizeOptions,
} from './responsive-modal-body';

interface ModalProps {
  open: boolean;
  onClose?(): void;
}

interface Props
  extends Omit<MuiModalProps, 'onClose' | 'children'>, ModalProps {
  additionalHeaderContent?: React.ReactNode;
  bodyProps?: BoxProps<React.ElementType>;
  cancelProps?: CustomButtonProps;
  children: React.ReactNode;
  closeOnRouteChange?: boolean;
  confirmProps?: CustomButtonPropsWithLoading;
  containerClassName?: string;
  containerRef?: React.RefObject<HTMLDivElement>;
  contentClassName?: string;
  footer?: React.ReactNode;
  footerClassName?: string;
  headerTitle?: React.ReactNode;
  isMobileFullScreen?: boolean;
  size?: ModalSizeOptions;
  withAutoFooter?: boolean;
  withFooterContainer?: boolean;
  withHeader?: boolean;
  withLogo?: boolean;
  onCloseWithIcon?(): void;
}

const Modal: React.FC<Props> = ({
  bodyProps,
  children,
  closeOnRouteChange,
  confirmProps,
  cancelProps,
  contentClassName,
  footerClassName,
  className,
  footer,
  open,
  size,
  withLogo,
  headerTitle,
  isMobileFullScreen,
  onClose,
  onCloseWithIcon,
  withAutoFooter,
  withHeader = true,
  withFooterContainer = false,
  containerRef,
  additionalHeaderContent,
  containerClassName,
  ...props
}) => {
  const { events } = useRouter();

  useEffect(() => {
    if (!closeOnRouteChange || !onClose) return undefined;

    events.on('routeChangeStart', onClose);

    return () => {
      events.off('routeChangeStart', onClose);
    };
  }, [onClose, events, closeOnRouteChange]);

  const footerContainer = withFooterContainer ? (
    <Box className="absolute bottom-0 left-0 right-0 h-20 shadow-top">
      {footer}
    </Box>
  ) : null;

  // default values should be undefined to avoid triggering the footer when context is not used
  // setting these here explicitly to illustrate that
  const [controls, setControls] = React.useState<ModalControls>({
    cancel: undefined,
    className: undefined,
    confirm: undefined,
  });

  const modalControlsContextData = React.useMemo(
    () => ({
      controls,
      setControls,
    }),
    [controls, setControls],
  );

  const currentFooter = withAutoFooter ? (
    <ModalFooter
      confirm={{ ...confirmProps, ...controls.confirm }}
      cancel={{ ...cancelProps, ...controls.cancel }}
      className={twMerge(controls.className, footerClassName)}
    />
  ) : (
    footerContainer || footer
  );

  return (
    <ModalFooterContext.Provider value={modalControlsContextData}>
      <MuiModal {...props} open={open} onClose={onClose}>
        <ResponsiveModalBody
          additionalHeaderContent={additionalHeaderContent}
          containerRef={containerRef}
          className={className}
          footer={currentFooter}
          onClose={onClose}
          size={size}
          withLogo={withLogo}
          headerTitle={headerTitle}
          isMobileFullScreen={isMobileFullScreen}
          contentClassName={contentClassName}
          bodyProps={bodyProps}
          withHeader={withHeader}
          onCloseWithIcon={onCloseWithIcon}
          containerClassName={containerClassName}
        >
          {children}
        </ResponsiveModalBody>
      </MuiModal>
    </ModalFooterContext.Provider>
  );
};

export default Modal;
