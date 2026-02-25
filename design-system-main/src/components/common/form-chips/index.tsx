'use client';

import { type CheckboxProps, Box, Checkbox } from '@mui/material';
import { useCallback, useMemo } from 'react';
import {
  type FieldValues,
  type Path,
  type PathValue,
  type UseFormSetValue,
} from 'react-hook-form';
import { twMerge } from 'tailwind-merge';

import { CategoryCard } from '../cards/category-card';
import { SelectCard } from '../cards/select-card';
import type { SpriteIconNames } from '../sprite-icon';

import { Button } from './chips/button';
import type { ChipType } from './constants';

export interface ChipOption<V = string | number, L = string> {
  icon?: SpriteIconNames;
  label: L;
  value: V;
}

const getChip = (chip: ChipType) =>
  ({
    categoryCard: CategoryCard,
    selectCard: SelectCard,
    button: Button,
  })[chip];

export interface FormChipsProps<
  C extends FieldValues = FieldValues,
  V = string | number,
  L = string,
  S extends boolean = false,
> extends Omit<CheckboxProps, 'form'> {
  chipClassName?: string;
  chipType?: ChipType;
  className?: string;
  id: string;
  name: Path<C>;
  options: ChipOption<V, L>[];
  setValue: UseFormSetValue<C>;
  singleSelect?: S;
  values: S extends true ? V : V[];
}

const FormChips = <
  C extends FieldValues,
  V extends string | number,
  L extends string,
  S extends boolean = false,
>({
  id,
  options,
  className,
  chipClassName,
  chipType = 'categoryCard',
  name,
  values,
  setValue,
  singleSelect = false as S,
}: FormChipsProps<C, V, L, S>) => {
  const onChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = event.currentTarget;

      if (singleSelect) {
        const typedValue = typeof values === 'number' ? Number(value) : value;

        setValue(name, typedValue as PathValue<C, typeof name>);
      } else {
        const array = [...(values as V[])];
        const arrayIndex = array.indexOf(value as V);

        if (arrayIndex > -1) {
          array.splice(arrayIndex, 1);
          setValue(name, array as PathValue<C, typeof name>);
        } else {
          array.push(value as V);
          setValue(name, array as PathValue<C, typeof name>);
        }
      }
    },
    [name, setValue, values, singleSelect],
  );

  const Chip = getChip(chipType);

  const mappedOptions = useMemo(
    () =>
      options.map((option) => {
        const labelId = `${id}_${option.value}`;

        const isActive = singleSelect
          ? values.toString() === option.value.toString()
          : (values as V[])?.some(
              (field) => field.toString() === option.value.toString(),
            );

        return (
          // eslint-disable-next-line jsx-a11y/label-has-associated-control
          <label
            key={option.value}
            htmlFor={labelId}
            className={twMerge('block w-full cursor-pointer')}
          >
            <Checkbox
              id={labelId}
              className="hidden"
              value={option.value}
              onChange={onChange}
            />
            <Chip
              className={twMerge('pointer-events-none', chipClassName)}
              title={option.label}
              icon={option.icon}
              isActive={isActive}
            />
          </label>
        );
      }),
    [options, id, singleSelect, values, onChange, Chip, chipClassName],
  );

  return <Box className={className}>{mappedOptions}</Box>;
};

export { FormChips };
