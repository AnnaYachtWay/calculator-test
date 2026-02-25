'use client';

import type { Control, FieldValues, Path } from 'react-hook-form';
import { Controller } from 'react-hook-form';

import { TextSelect, type TextSelectProps } from '../text-select';

type Props<C extends FieldValues, V, L> = TextSelectProps<V, L> & {
  control: Control<C>;
  name: Path<C>;
  id: string;
};

const FormTextSelect = <
  C extends FieldValues,
  V extends string | number,
  L extends string | number | React.ReactNode = string,
>({
  control,
  name,
  id,
  ...rest
}: Props<C, V, L>) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <TextSelect
          id={id}
          {...field}
          {...rest}
          onChange={(value) => {
            rest.onChange?.(value);
            field.onChange(value);
          }}
        />
      )}
    />
  );
};

export { FormTextSelect };
