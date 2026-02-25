export const formatCurrency = (
  number?: number | null,
  options?: Intl.NumberFormatOptions,
) => {
  const numberToFormat = number ?? 0;

  const formatOptions = {
    minimumFractionDigits: 0,
    ...options,
    style: 'currency',
  };

  if (!formatOptions.currency) formatOptions.currency = 'USD';

  return new Intl.NumberFormat('en-US', {
    ...formatOptions,
    style: 'currency',
  }).format(numberToFormat);
};

export const formatNumber = (
  number: number,
  options?: Intl.NumberFormatOptions,
) => {
  return new Intl.NumberFormat('en-US', {
    ...options,
    style: 'decimal',
  }).format(number);
};

/**
 * Converts to the fraction between min and max
 *
 * @example
 * convertNumbers(20, 0, 40)
 * return 50
 *
 * @example
 * convertNumbers(40, 0, 40)
 * return 100
 *
 * @param {number} value - current value
 * @param {number} min - min converts value
 * @param {number} max - max converts value
 *
 * @returns {number}
 */
export const convertToFraction = (value: number, min: number, max: number) =>
  ((value - min) / (max - min)) * 100;
