import type { ButtonProps, CircularProgressProps } from '@mui/material';
import { CircularProgress, Button as MuiButton } from '@mui/material';
import type React from 'react';
import { twMerge } from 'tailwind-merge';

export interface YachtwayButtonProps extends ButtonProps {
  isLoading?: boolean;
  spinnerProps?: CircularProgressProps;
  target?: string;
  withEllipsis?: boolean;
}

const Button: React.FC<YachtwayButtonProps> = ({
  isLoading,
  children,
  spinnerProps,
  target,
  withEllipsis,
  ...props
}) => {
  const content = withEllipsis ? (
    <div
      className={twMerge(
        'button-inner inline-flex max-w-full items-center justify-center',
        !!props.endIcon && 'max-w-[calc(100%_-_28px)]',
      )}
    >
      <div className="min-w-0 overflow-hidden text-ellipsis whitespace-nowrap">
        {children}
      </div>
    </div>
  ) : (
    children
  );

  return (
    <MuiButton
      {...(target ? { target } : {})}
      {...props}
      className={twMerge('group/muibutton', props.className)}
      disabled={props.disabled || isLoading}
      endIcon={
        isLoading ? (
          <CircularProgress
            {...spinnerProps}
            className={twMerge(
              spinnerProps?.className,
              '!h-5 !w-5 group-disabled/muibutton:opacity-20',
            )}
          />
        ) : (
          props?.endIcon
        )
      }
    >
      {content}
    </MuiButton>
  );
};

export { Button };
