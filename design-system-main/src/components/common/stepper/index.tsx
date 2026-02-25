import type { StepperProps } from '@mui/material';
import {
  Step,
  StepLabel,
  Stepper as MuiStepper,
  StepConnector,
  Typography,
} from '@mui/material';
import type React from 'react';
import { useMemo } from 'react';
import { twMerge } from 'tailwind-merge';

import { SpriteIcon } from '../sprite-icon';

export type StepperStep = {
  value: string;
  label: string;
};

type Props = Omit<StepperProps, 'activeStep' | 'variant'> & {
  steps: StepperStep[];
  activeStepValue: string;
  className?: string;
  variant?: 'dark' | 'light';
};

const Stepper: React.FC<Props> = ({
  steps,
  activeStepValue,
  className,
  variant = 'dark',
  orientation,
  ...props
}) => {
  const isDark = variant === 'dark';
  const isVertical = orientation === 'vertical';

  const activeStepIndex = useMemo(
    () => steps.findIndex((step) => step.value === activeStepValue) || 0,
    [activeStepValue, steps],
  );

  const completedIcon = (
    <div
      className={twMerge(
        'flex size-4 items-center justify-center rounded-full bg-primary-white',
        isDark && 'bg-accent-gradient',
      )}
    >
      <SpriteIcon
        name="checkmark_outline"
        className={twMerge(
          'size-3 fill-primary-black',
          isDark && 'fill-primary-white',
        )}
      />
    </div>
  );

  const activeIcon = (
    <div
      className={twMerge(
        'flex size-4 rounded-full bg-accent-gradient outline outline-4 outline-offset-2 outline-primary-accent-20',
        !isDark &&
          'border-2 border-solid border-primary-white bg-transparent outline outline-[3px] ' +
            'outline-offset-0 outline-primary-gray-80',
      )}
    />
  );

  const notCompletedIcon = (
    <div
      className={twMerge(
        'flex size-4 rounded-full bg-primary-gray-40',
        isDark && 'bg-primary-black-20',
      )}
    />
  );

  return (
    <MuiStepper
      activeStep={activeStepIndex}
      className={twMerge(
        'w-full [&_.Mui-completed_.MuiStepConnector-line]:border-primary-white-60 ' +
          '[&_.MuiStepConnector-line]:border-primary-gray-20',
        isDark &&
          '[&_.Mui-completed_.MuiStepConnector-line]:border-primary-black ' +
            '[&_.MuiStepConnector-line]:border-primary-black-4',
        className,
      )}
      orientation={orientation}
      connector={
        <StepConnector
          classes={{
            root: twMerge(isVertical && 'ml-2.5'),
            line: isVertical ? 'border-l-4 min-h-9' : 'border-t-8',
          }}
        />
      }
      sx={{
        '& .MuiStep-root:last-child .MuiStepLabel-labelContainer': {
          right: 0,
        },
      }}
      {...props}
    >
      {steps.map((step, index) => {
        const isCompleted =
          index < activeStepIndex || activeStepIndex === steps.length - 1;
        const isActive = index === activeStepIndex;
        const isNotCompleted = index > activeStepIndex;

        return (
          <Step
            key={step.value}
            completed={index < activeStepIndex + 1}
            className="p-0"
          >
            <StepLabel
              StepIconProps={{
                icon:
                  (isCompleted && completedIcon) ||
                  (isActive && activeIcon) ||
                  notCompletedIcon,
              }}
              className="relative p-0"
              classes={{
                labelContainer: !isVertical
                  ? 'absolute top-[30px] whitespace-nowrap w-fit'
                  : 'ml-6',
                iconContainer: 'p-1',
              }}
            >
              <Typography
                variant="body1"
                className={twMerge(
                  'font-medium',
                  isDark ? '!text-primary-black' : '!text-primary-white',
                  isNotCompleted && isDark && '!text-primary-black-60',
                  isNotCompleted && !isDark && '!text-primary-white-40',
                )}
              >
                {step.label}
              </Typography>
            </StepLabel>
          </Step>
        );
      })}
    </MuiStepper>
  );
};

export { Stepper };
