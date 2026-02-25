import {
  Box,
  type InputBaseComponentProps,
  type TextFieldProps,
} from '@mui/material';
import { useCallback, useMemo } from 'react';
import { twMerge } from 'tailwind-merge';

import { type CurrencyCode, currencyOptions } from '../../../utils/currency';
import { formatNumber } from '../../../utils/number-format';
import { NumericTextField } from '../numeric-text-field';
import { TextField } from '../text-field';
import { TextSelect } from '../text-select';
import { Tooltip } from '../tooltip';

interface Props extends Omit<TextFieldProps, 'onChange' | 'variant' | 'ref'> {
  allowDecimals?: boolean;
  currency: CurrencyCode;
  disableCurrencySelect?: boolean;
  hideCurrencySelect?: boolean;
  max?: number;
  min?: number;
  step?: number;
  tooltip?: string;
  onChange?(value: number | ''): void;
  onCurrencyChange?(currency: CurrencyCode): void;
}

const DEFAULT_DECIMAL_SCALE = 2;

const PriceInput: React.FC<Props> = ({
  max,
  min = 0,
  onChange,
  onCurrencyChange,
  currency,
  className,
  allowDecimals = false,
  disableCurrencySelect = false,
  hideCurrencySelect = false,
  tooltip,
  ...rest
}) => {
  const handleChange = useCallback(
    (
      e:
        | React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
        | string
        | number,
    ) => {
      const value =
        typeof e === 'string' || typeof e === 'number' ? e : e.target.value;

      const numberValue = Number(String(value).replaceAll(',', ''));

      if (Number.isNaN(value)) return;

      if (value === '') {
        onChange?.(value);

        return;
      }

      if (numberValue < min) return;

      if (max && numberValue > max) return;

      onChange?.(numberValue);
    },
    [max, min, onChange],
  );

  const initialCurrency = useMemo(
    () => currencyOptions.find((option) => option.value === currency),
    [currency],
  );

  const endAdornment = useMemo(() => {
    if (hideCurrencySelect && !tooltip) return undefined;

    return (
      <Box className="flex items-center gap-2">
        {tooltip && <Tooltip title={tooltip} />}
        {!hideCurrencySelect && (
          <TextSelect
            id={`${rest.id}-currency-select`}
            onChange={onCurrencyChange}
            options={currencyOptions}
            initialSelected={initialCurrency}
            className="rounded bg-primary-gray-4 px-2"
            disabled={disableCurrencySelect}
          />
        )}
      </Box>
    );
  }, [
    disableCurrencySelect,
    hideCurrencySelect,
    initialCurrency,
    onCurrencyChange,
    rest.id,
    tooltip,
  ]);

  return (
    <TextField
      variant="outlined"
      {...rest}
      value={
        rest.value
          ? formatNumber(Number(rest.value), {
              maximumFractionDigits: 2,
            })
          : ''
      }
      onChange={handleChange}
      className={twMerge('input-number-hide-arrows', className)}
      inputMode="decimal"
      InputProps={{
        ...rest.InputProps,
        endAdornment,
        inputComponent: allowDecimals
          ? (NumericTextField as unknown as React.ElementType<InputBaseComponentProps>)
          : undefined,
      }}
      inputProps={
        allowDecimals
          ? {
              thousandSeparator: ',',
              allowNegative: false,
              decimalScale: DEFAULT_DECIMAL_SCALE,
              valueIsNumericString: true,
              ...rest.inputProps,
            }
          : rest.inputProps
      }
    />
  );
};

export { PriceInput };
