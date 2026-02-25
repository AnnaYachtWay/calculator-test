import type { AutocompleteProps, TextFieldProps } from '@mui/material';
import type React from 'react';

import type { TooltipPlacement } from '../components/common/input-tooltip';

import type { Option } from './index';

export type { Option };

export type SelectAdditionalProps<V = string | number, L = React.ReactNode> = {
  options?: Option<V, L>[];
  tooltip?: React.ReactNode;
  counter?: boolean;
  tooltipPlacement?: TooltipPlacement;
  maxItems?: number;
  noSort?: boolean;
};

export type YachtwaySelectProps<
  V = string | number,
  L = React.ReactNode,
> = TextFieldProps & SelectAdditionalProps<V, L>;

export type YachtwaySelectAutocompleteProps<
  V = string | number,
  L = React.ReactNode,
> = SelectAdditionalProps<V, L> &
  Omit<
    AutocompleteProps<Option<V, L>, boolean, boolean, boolean>,
    'options' | 'renderInput'
  > & {
    fieldProps?: Omit<TextFieldProps, 'ref'> & {
      ref?: React.RefObject<HTMLInputElement>;
    };
  };
