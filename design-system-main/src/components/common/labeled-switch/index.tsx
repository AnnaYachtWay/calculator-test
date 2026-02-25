import { Box } from '@mui/material';
import { useEffect, useRef, useState } from 'react';
import { twMerge } from 'tailwind-merge';

import SwitchOption from './SwitchOption';

export interface ToggleOption<T> {
  label: React.ReactNode;
  value: T;
}

export interface LabeledSwitchProps<T extends string> {
  onChange?: (value: T) => void;
  onToggle?: () => void;
  options: [ToggleOption<T>, ToggleOption<T>];
  value: T;
}

const PADDING_X = 7;
const BUBBLE_EXTRA_PADDING = 3;

const LabeledSwitch = <T extends string>({
  options,
  value,
  onChange,
  onToggle,
}: LabeledSwitchProps<T>) => {
  const isFirstActive = value === options[0].value;

  const containerRef = useRef<HTMLDivElement>(null);
  const firstRef = useRef<HTMLDivElement>(null);
  const secondRef = useRef<HTMLDivElement>(null);

  const [bubbleStyle, setBubbleStyle] = useState({ width: 0, left: 0 });

  useEffect(() => {
    const activeRef = isFirstActive ? firstRef : secondRef;
    const container = containerRef.current;
    const active = activeRef.current;

    if (container && active) {
      const containerRect = container.getBoundingClientRect();
      const activeRect = active.getBoundingClientRect();
      const left = activeRect.left - containerRect.left - PADDING_X;

      setBubbleStyle({
        width: activeRect.width + BUBBLE_EXTRA_PADDING,
        left,
      });
    }
  }, [isFirstActive, value]);

  const handleClick = () => {
    if (onToggle) {
      onToggle();
    } else if (onChange) {
      onChange(isFirstActive ? options[1].value : options[0].value);
    }
  };

  return (
    <Box
      ref={containerRef}
      className={twMerge(
        'relative inline-flex h-[34px] w-min cursor-pointer items-center rounded-full',
        'border border-solid border-n-gray-100 bg-n-gray-50 px-1',
        'transition-colors duration-200',
      )}
      onClick={handleClick}
    >
      <Box
        className={twMerge(
          'absolute bottom-[3px] top-[3px] rounded-full bg-primary-black transition-all duration-300',
        )}
        style={{
          width: bubbleStyle.width,
          transform: `translateX(${bubbleStyle.left}px)`,
        }}
      />
      <SwitchOption
        innerRef={firstRef}
        isActive={isFirstActive}
        label={options[0].label}
      />
      <SwitchOption
        innerRef={secondRef}
        isActive={!isFirstActive}
        label={options[1].label}
      />
    </Box>
  );
};

export { LabeledSwitch };
