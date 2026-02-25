import type { GradientNames } from '../../components/common/sprite-icon';

const gradientFileName = 'gradients.svg';

const gradientMapping: Record<GradientNames, string> = {
  accent: 'a',
  accent_animate: 'b',
  gold: 'c',
};

export const getGradientUrl = (gradient: GradientNames) =>
  `url(#${gradientFileName.replace(/\./g, '_')}__${gradientMapping[gradient]})`;
