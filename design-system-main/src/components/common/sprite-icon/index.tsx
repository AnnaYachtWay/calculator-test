import { twMerge } from 'tailwind-merge';

import { getGradientUrl } from '../../../utils/icon';

import type { GradientTypes, SpriteIconTypes } from './types';

const spriteUrl = new URL(
  '../../../assets/sprites/common.svg?url',
  import.meta.url,
).href;

export type SpriteIconNames = keyof typeof SpriteIconTypes;
export type GradientNames = keyof typeof GradientTypes;

export type SpriteIconProps = React.SVGAttributes<SVGSVGElement> & {
  gradient?: GradientNames;
  name: SpriteIconNames;
};

const SpriteIcon: React.FC<SpriteIconProps> = ({
  className,
  gradient,
  name,
  ...props
}) => {
  return (
    <svg
      {...props}
      className={twMerge('h-5 w-5 stroke-none', className)}
      fill={gradient ? getGradientUrl(gradient) : 'currentColor'} // enable changing icon color with tailwind
    >
      <use xlinkHref={`${spriteUrl}#icon-${name}`} />
    </svg>
  );
};

export { SpriteIcon };
