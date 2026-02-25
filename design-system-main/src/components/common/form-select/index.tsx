'use client';

import type { Control, FieldValues, Path } from 'react-hook-form';
import { Controller } from 'react-hook-form';

import type { YachtwaySelectProps } from '../../../typings/yachtway-select';
import { Select } from '../select';

type Props<C extends FieldValues, V, L> = YachtwaySelectProps<V, L> & {
  control: Control<C>;
  name: Path<C>;
};

const FormSelect = <
  C extends FieldValues,
  V extends string | number = string | number,
  L extends React.ReactNode = React.ReactNode,
>({
  control,
  name,
  ...rest
}: Props<C, V, L>) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => {
        const onChipDelete = (value: string | number) => {
          field.onChange(
            field.value.filter((v: string | number) => v !== value),
          );
        };

        // Select is a forwardRef component, but we don't need the ref here
        return (
          <Select {...field} {...rest} onDelete={onChipDelete} ref={() => {}} />
        );
      }}
    />
  );
};

export { FormSelect };
