import type { SpriteIconNames } from '../../components/common/sprite-icon';

export type CurrencyCode = 'USD' | 'EUR' | 'GBP' | 'CHF' | 'CAD' | 'AUD';

export type Currency = {
  code: CurrencyCode;
  symbol: string;
  icon: SpriteIconNames;
};
