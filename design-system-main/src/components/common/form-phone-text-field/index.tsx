'use client';

import {
  type Control,
  type FieldValues,
  type Path,
  Controller,
} from 'react-hook-form';

import { PhoneTextField, type PhoneTextFieldProps } from '../phone-text-field';

interface Props<C extends FieldValues> extends PhoneTextFieldProps {
  control: Control<C>;
  'data-testid'?: string;
  name: Path<C>;
}

const FormPhoneTextField = <C extends FieldValues>({
  name,
  control,
  ...props
}: Props<C>) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => <PhoneTextField {...field} {...props} />}
    />
  );
};

export { FormPhoneTextField };
