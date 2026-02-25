import { currencies, DEFAULT_CURRENCY } from './constants';
import { type CurrencyCode } from './types';

const CurrencyHelpers = {
  getByCode: (code?: CurrencyCode) =>
    currencies[code?.toUpperCase() as CurrencyCode] ??
    currencies[DEFAULT_CURRENCY],

  getSymbol: (code: CurrencyCode) => CurrencyHelpers.getByCode(code).symbol,

  getIcon: (code: CurrencyCode) => CurrencyHelpers.getByCode(code).icon,
};

export default CurrencyHelpers;
