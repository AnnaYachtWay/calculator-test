'use client';

import type { SwitchProps } from '@mui/material';
import { Switch } from '@mui/material';
import type { Control, FieldValues, Path } from 'react-hook-form';
import { Controller } from 'react-hook-form';

interface Props<C extends FieldValues> extends SwitchProps {
  control: Control<C>;
  name: Path<C>;
  reverseValue?: boolean;
}

const FormSwitch = <C extends FieldValues>({
  control,
  name,
  reverseValue,
  ...rest
}: Props<C>) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <Switch
          {...field}
          {...rest}
          checked={reverseValue ? !field.value : field.value}
          onChange={(e) => {
            field.onChange(reverseValue ? !e.target.checked : e.target.checked);
          }}
        />
      )}
    />
  );
};

export { FormSwitch };
