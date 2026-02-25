'use client';

import React from 'react';
import type { PatternFormatProps } from 'react-number-format';
import { PatternFormat } from 'react-number-format';

interface PatternTextFieldProps extends PatternFormatProps {
  name: string;
  onChange: (event: { target: { name: string; value: string } }) => void;
}

const PatternTextField = React.forwardRef<
  HTMLInputElement,
  PatternTextFieldProps
>(({ name, onChange, ...other }, ref) => {
  return (
    <PatternFormat
      {...other}
      getInputRef={ref}
      onValueChange={(values) => {
        onChange?.({
          target: {
            name,
            value: values.value,
          },
        });
      }}
    />
  );
});

PatternTextField.displayName = 'PatternTextField';

export { PatternTextField };
