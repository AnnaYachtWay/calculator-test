import type {
  SortDirection,
  TableBodyProps,
  TableFooterProps,
  TableHeadProps,
} from '@mui/material';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Box,
  CircularProgress,
  Typography,
  TableFooter,
} from '@mui/material';
import type React from 'react';
import { useCallback, useMemo } from 'react';
import { twMerge } from 'tailwind-merge';

import themeConstants from '../../../theme/constants';
import type {
  Column,
  Row,
  SortOrderEnum,
} from '../../../typings/paginated-table';
import { sortOrderEnum } from '../../../typings/paginated-table';
import { SpriteIcon } from '../sprite-icon';
import { StyledPagination } from '../styled-pagination';

export interface PaginatedTableProps<T extends Row> {
  bodyProps?: TableBodyProps;
  className?: string;
  columns: Column[];
  emptyState?: React.ReactNode;
  footer?: React.ReactNode;
  footerProps?: TableFooterProps;
  headProps?: TableHeadProps;
  isLoading?: boolean;
  page?: number;
  pageCount?: number;
  rows: T[];
  sortBy?: string;
  sortOrder?: SortOrderEnum;
  onPageChange?(newPage: number): void;
  onSortChange?(
    columnId: string | undefined,
    order: SortOrderEnum | undefined,
  ): void;
}

export const PaginatedTable = <T extends Row>({
  columns,
  rows,
  page,
  pageCount,
  sortBy,
  sortOrder,
  onPageChange,
  onSortChange,
  className,
  isLoading,
  emptyState,
  footer,
  headProps,
  bodyProps,
  footerProps,
}: PaginatedTableProps<T>) => {
  const handleChangePage = useCallback(
    (_event: unknown, newPage: number) => {
      onPageChange?.(newPage);
    },
    [onPageChange],
  );

  const handleSort = useCallback(
    (columnId: string) => {
      if (!onSortChange) return;

      let newOrder: SortOrderEnum | undefined;
      let newColumnId: string | undefined = columnId;

      if (sortBy !== columnId) {
        // First click on a new column: start with ASC
        newOrder = sortOrderEnum.ASC;
      } else if (sortOrder === 'ASC') {
        // Second click: switch to DESC
        newOrder = sortOrderEnum.DESC;
      } else if (sortOrder === 'DESC') {
        // Third click: reset to no sort
        newOrder = undefined;
        newColumnId = undefined;
      }

      onPageChange?.(1);
      onSortChange(newColumnId, newOrder);
    },
    [onPageChange, onSortChange, sortBy, sortOrder],
  );

  const tableHeaders = useMemo(
    () =>
      columns.map((column) => (
        <TableCell
          key={column.id}
          className={twMerge(
            'border border-solid border-primary-gray-20 px-4 py-2.5 text-sm font-medium text-primary-gray',
            column.className,
          )}
          sortDirection={
            sortBy === column.id
              ? (sortOrder?.toLowerCase() as SortDirection)
              : false
          }
        >
          {column.sortable ? (
            <Box
              className="flex cursor-pointer items-center gap-1"
              onClick={() => handleSort(column.id)}
            >
              {column.label}
              <Box className="flex flex-col">
                <SpriteIcon
                  name="dropdown_up"
                  className={twMerge(
                    '-mb-1 h-3 w-3',
                    sortBy === column.id &&
                      sortOrder === 'ASC' &&
                      'text-primary-accent',
                  )}
                />
                <SpriteIcon
                  name="dropdown_down"
                  className={twMerge(
                    'h-3 w-3',
                    sortBy === column.id &&
                      sortOrder === 'DESC' &&
                      'text-primary-accent',
                  )}
                />
              </Box>
            </Box>
          ) : (
            column.label
          )}
        </TableCell>
      )),
    [columns, sortBy, sortOrder, handleSort],
  );

  const tableRows = useMemo(
    () =>
      rows.map((row, rowIndex) => {
        const { data, ...rest } = row;

        return (
          // eslint-disable-next-line react/no-array-index-key
          <TableRow key={rowIndex} {...rest}>
            {columns.map((column) => {
              const cellContent = data[column.id];

              return (
                <TableCell
                  key={column.id}
                  className={twMerge(
                    'border border-solid border-primary-gray-20 px-4 py-2.5 text-xs',
                    column.className,
                  )}
                >
                  {typeof cellContent === 'string' ? (
                    <Typography
                      variant="body3"
                      className="text-nowrap text-primary-black"
                    >
                      {cellContent}
                    </Typography>
                  ) : (
                    cellContent
                  )}
                </TableCell>
              );
            })}
          </TableRow>
        );
      }),
    [columns, rows],
  );

  const emptyStateContent = useMemo(() => {
    if (pageCount || tableRows.length || !emptyState) {
      return null;
    }

    if (emptyState) {
      return (
        <TableRow>
          <TableCell colSpan={columns.length} className="border-0 p-0">
            {emptyState}
          </TableCell>
        </TableRow>
      );
    }

    return null;
  }, [pageCount, tableRows.length, emptyState, columns.length]);

  const footerContent = useMemo(() => {
    if (emptyStateContent) {
      return null;
    }

    if (footer) {
      return (
        <TableRow>
          <TableCell colSpan={columns.length} className="border-0 p-0">
            {footer}
          </TableCell>
        </TableRow>
      );
    }

    if (!pageCount || pageCount <= 1) {
      return null;
    }

    return (
      <TableRow>
        <TableCell colSpan={columns.length} className="border-0 p-0">
          <Box className="flex justify-end p-4">
            <StyledPagination
              count={pageCount}
              page={page}
              onChange={handleChangePage}
              hidePrevButton={page === 1}
              hideNextButton={page === pageCount}
            />
          </Box>
        </TableCell>
      </TableRow>
    );
  }, [
    pageCount,
    page,
    handleChangePage,
    columns.length,
    emptyStateContent,
    footer,
  ]);

  return (
    <Paper className={className}>
      <TableContainer
        sx={{
          borderRadius: 2,
          border: 1,
          borderColor: themeConstants.colors.primary.gray[20],
          overflow: 'hidden',
          position: 'relative',
        }}
      >
        {isLoading && (
          <Box className="absolute z-50 flex h-full w-full items-center justify-center p-10 backdrop-blur-sm">
            <CircularProgress />
          </Box>
        )}
        <Table
          sx={{
            borderCollapse: 'collapse',
            borderStyle: 'hidden',
          }}
          className="min-h-28"
        >
          <TableHead {...headProps}>
            <TableRow>{tableHeaders}</TableRow>
          </TableHead>
          <TableBody {...bodyProps}>
            {tableRows}
            {emptyStateContent}
          </TableBody>
          <TableFooter {...footerProps}>{footerContent}</TableFooter>
        </Table>
      </TableContainer>
    </Paper>
  );
};
