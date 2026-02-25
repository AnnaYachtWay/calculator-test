'use client';

import type { ReactElement } from 'react';
import type { Control, FieldValues, Path } from 'react-hook-form';
import { Controller } from 'react-hook-form';

import { ButtonSwitch, type ButtonSwitchProps } from '../button-switch';

type Props<C extends FieldValues, V, L> = Omit<
  ButtonSwitchProps<V, L>,
  'value'
> & {
  control: Control<C>;
  name: Path<C>;
};

const FormButtonSwitch = <
  C extends FieldValues,
  V extends string | number | boolean = string | number | boolean,
  L extends string | number | ReactElement = string | number | ReactElement,
>({
  control,
  name,
  ...rest
}: Props<C, V, L>) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => <ButtonSwitch {...field} {...rest} />}
    />
  );
};

export { FormButtonSwitch };
