import type { SpriteIconNames } from '../sprite-icon';

export type ChipType = 'categoryCard' | 'selectCard' | 'button';

export interface ChipProps {
  className?: string;
  icon?: SpriteIconNames;
  isActive: boolean;
  title: string;
}
