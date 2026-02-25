'use client';

import type { BoxProps } from '@mui/material';
import { Box, Typography } from '@mui/material';
import NextLink from 'next/link';
import React from 'react';
import { twMerge } from 'tailwind-merge';

import Logo from '../../../../assets/logo.svg';
import useIsMobile from '../../../../hooks/use-is-mobile';
import { IconButton } from '../../icon-button';

export type ModalSizeOptions = 'regular' | 'big' | 'small' | 'tiny';

interface Props {
  additionalHeaderContent?: React.ReactNode;
  bodyProps?: BoxProps<React.ElementType>;
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  containerRef?: React.RefObject<HTMLDivElement>;
  contentClassName?: string;
  footer?: React.ReactNode;
  headerTitle?: React.ReactNode;
  isMobileFullScreen?: boolean;
  size?: ModalSizeOptions;
  withHeader?: boolean;
  withLogo?: boolean;
  onClose?(): void;
  onCloseWithIcon?(): void;
}

const ResponsiveModalBody: React.ForwardRefRenderFunction<
  React.ForwardedRef<HTMLDivElement>,
  Props
> = (
  {
    onClose,
    onCloseWithIcon,
    footer,
    withHeader = true,
    children,
    className,
    contentClassName,
    withLogo,
    headerTitle: title,
    isMobileFullScreen,
    size = 'regular',
    bodyProps,
    containerRef,
    additionalHeaderContent,
    containerClassName,
  },
  ref,
) => {
  const isMobile = useIsMobile();

  const header = withHeader && (
    <Box
      className={twMerge(
        'absolute left-0 right-0 top-5 flex w-full items-center justify-between px-5',
        !!title &&
          'top-0 h-16 border-0 border-b-2 border-solid border-primary-black-4 p-4 pb-3',
      )}
    >
      {withLogo && (
        <NextLink href="/" className="h-fit text-primary-black">
          <Logo className="h-7 w-40" />
        </NextLink>
      )}
      {!!title && !withLogo && (
        <Typography variant={isMobile ? 'h3' : 'h5'} className="pl-4">
          {title}
        </Typography>
      )}
      {(!!onClose || !!onCloseWithIcon) && (
        <IconButton
          onClick={() => {
            return onCloseWithIcon ? onCloseWithIcon?.() : onClose?.();
          }}
          className="ml-auto shrink-0 justify-self-end bg-inherit hover:bg-inherit"
          data-testid="close-button"
          icon="cross_outline"
        />
      )}
    </Box>
  );

  const body = (
    <Box
      {...(bodyProps as BoxProps)}
      className={twMerge(
        'relative flex flex-col',
        'max-h-[calc(100%-(1.25rem*2))] max-w-[calc(100%-24px)] max-md:w-full max-md:max-w-full',
        'mx-auto border-none outline-none',
        'top-1/2 -translate-y-1/2 max-md:top-full max-md:-translate-y-full',
        'rounded-md bg-primary-white max-md:rounded-b-none',
        withHeader && 'pt-16',
        footer && 'pb-20',
        isMobileFullScreen &&
          'max-md:h-full max-md:max-h-[100%] max-md:rounded-[0]',
        size === 'regular' && 'w-[50rem]',
        size === 'big' && 'w-[65rem]',
        size === 'small' && 'w-[38.5rem]',
        size === 'tiny' && 'w-[33.75rem]',
        className,
      )}
      ref={ref}
      tabIndex={-1}
    >
      {header}
      <Box
        className={twMerge(
          'flex w-full flex-1 flex-col overflow-auto',
          containerClassName,
        )}
        ref={containerRef}
      >
        {additionalHeaderContent}
        <Box
          className={twMerge(
            'px-16 pb-16',
            'max-md:px-10 max-sm:px-6',
            (size === 'small' || size === 'tiny') && 'px-8',
            contentClassName,
          )}
        >
          {children}
        </Box>
      </Box>
      {footer}
    </Box>
  );

  return body;
};

const WrappedResponsiveModalBody = React.memo(
  React.forwardRef(ResponsiveModalBody),
);

export { WrappedResponsiveModalBody as ResponsiveModalBody };
