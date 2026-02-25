import type { Option } from '../../typings';

import currencies from './currencies';
import { type CurrencyCode } from './types';

export { currencies };

export const currencyList = Object.values(currencies);

export const currencyOptions = currencyList.map(({ code }) => ({
  value: code,
  label: code,
})) as Option<CurrencyCode>[];

export const DEFAULT_CURRENCY: CurrencyCode = 'USD';
