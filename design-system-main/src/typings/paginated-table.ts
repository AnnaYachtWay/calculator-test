import type { TableRowProps } from '@mui/material';
import type React from 'react';

export const sortOrderEnum = {
  ASC: 'ASC',
  DESC: 'DESC',
} as const;

export type SortOrderEnum = (typeof sortOrderEnum)[keyof typeof sortOrderEnum];

export type Column<T = string> = {
  label: React.ReactNode;
  className?: string;
} & (
  | {
      id: string;
      sortable?: false;
    }
  | {
      id: T;
      sortable: true;
    }
);

export type Row = TableRowProps & {
  data: Record<string, React.ReactNode>;
};
