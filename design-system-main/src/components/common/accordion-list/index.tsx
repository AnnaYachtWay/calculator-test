'use client';

import { Box, styled } from '@mui/material';
import { useLayoutEffect, useMemo, useRef, useState } from 'react';
import { twMerge } from 'tailwind-merge';

import { Accordion, type AccordionProps } from '../accordion';

const lineClasses =
  'before:content-[""] before:absolute before:top-1/2 before:-translate-y-1/2 ' +
  'before:left-0 before:w-[20px] before:h-0.5 before:translate-x-[-18px] before:bg-primary-gray-20';

const StyledMuiAccordion = styled(Accordion)(() => ({
  '.MuiAccordion-root': {
    background: 'none',
  },

  '.MuiAccordionSummary-expandIconWrapper': {
    display: 'none',
  },
}));

interface Props extends Omit<AccordionProps, 'children'> {
  items?: React.ReactNode[];
  listClassName?: string;
}

const AccordionList: React.FC<Props> = ({
  items,
  className,
  detailsClassName,
  listClassName,
  ...props
}) => {
  const itemsWrapperRef = useRef<HTMLDivElement>(null);
  const [lastElementHeight, setLastElementHeight] = useState(0);

  useLayoutEffect(() => {
    const currentElement = itemsWrapperRef.current;

    if (currentElement && currentElement.lastElementChild) {
      setLastElementHeight(currentElement.lastElementChild.clientHeight / 2);
    }
  }, []);

  const mappedItems = useMemo(
    () =>
      items?.map((item, index) => (
        <Box
          // eslint-disable-next-line react/no-array-index-key
          key={index}
          component="li"
          className={twMerge(
            'relative h-fit w-full',
            index < (items?.length || 0) - 1 && lineClasses,
          )}
        >
          {item}
        </Box>
      )),
    [items],
  );

  return (
    <StyledMuiAccordion
      className={twMerge('before:!bg-none', className)}
      detailsClassName={twMerge('flex', detailsClassName)}
      {...props}
    >
      <Box
        className="w-5 rounded-bl border-0 border-b-2 border-l-2 border-solid border-primary-gray-20 max-sm:hidden"
        style={{ marginBottom: lastElementHeight }}
      />
      <Box
        ref={itemsWrapperRef}
        component="ul"
        className={twMerge(
          'm-0 flex w-full list-none flex-col gap-3 p-0 sm:gap-6',
          listClassName,
        )}
      >
        {mappedItems}
      </Box>
    </StyledMuiAccordion>
  );
};

export { AccordionList };
