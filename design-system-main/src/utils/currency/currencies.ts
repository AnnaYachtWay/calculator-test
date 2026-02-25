import type { Currency, CurrencyCode } from './types';

const currencies: Record<CurrencyCode, Currency> = {
  USD: {
    code: 'USD',
    symbol: '$',
    icon: 'dollar_outline',
  },
  EUR: {
    code: 'EUR',
    symbol: '€',
    icon: 'currency_euro_outline',
  },
  GBP: {
    code: 'GBP',
    symbol: '£',
    icon: 'currency_pound_outline',
  },
  CHF: {
    code: 'CHF',
    symbol: '₣',
    icon: 'currency_franc_outline',
  },
  CAD: {
    code: 'CAD',
    symbol: 'CA$',
    icon: 'currency_dollar_canadian_outline',
  },
  AUD: {
    code: 'AUD',
    symbol: 'A$',
    icon: 'dollar_australian_outline',
  },
};

export default currencies;
