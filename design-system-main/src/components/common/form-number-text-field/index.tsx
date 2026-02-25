'use client';

import type { Control, FieldValues, Path } from 'react-hook-form';
import { Controller } from 'react-hook-form';

import {
  NumberTextField,
  type NumberTextFieldProps,
} from '../number-text-field';

interface Props<C extends FieldValues> extends NumberTextFieldProps {
  control: Control<C>;
  name: Path<C>;
}

const FormNumberTextField = <C extends FieldValues>({
  control,
  name,
  ...rest
}: Props<C>) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => <NumberTextField {...field} {...rest} />}
    />
  );
};

export { FormNumberTextField };
