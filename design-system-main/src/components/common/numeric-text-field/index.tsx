import React from 'react';
import type { NumericFormatProps } from 'react-number-format';
import { NumericFormat } from 'react-number-format';

interface NumericTextFieldProps extends NumericFormatProps {
  name: string;
  onChange: (event: { target: { name: string; value: string } }) => void;
}

const NumericTextField = React.forwardRef<
  HTMLInputElement,
  NumericTextFieldProps
>(({ name, onChange, ...other }, ref) => {
  return (
    <NumericFormat
      {...other}
      getInputRef={ref}
      onValueChange={(values, sourceInfo) => {
        if (sourceInfo.source === 'event') {
          onChange?.({
            target: {
              name,
              value: String(values.floatValue || ''),
            },
          });
        }
      }}
    />
  );
});

NumericTextField.displayName = 'NumericTextField';

export { NumericTextField };
