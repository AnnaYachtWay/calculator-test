import type { ReactElement } from 'react';

export type ChipType = 'button' | 'enumerateButton';

export interface ChipProps {
  buttonClassName?: string;
  disabled?: boolean;
  isActive: boolean;
  noIcon?: boolean;
  title: string | number | ReactElement;
  tooltip?: string;
  withPlusIcon?: boolean;
}
