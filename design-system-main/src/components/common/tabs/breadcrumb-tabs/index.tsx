'use client';

import type { TypographyProps } from '@mui/material';
import { Box, Typography } from '@mui/material';
import type React from 'react';
import { useEffect, useMemo, useRef, Fragment } from 'react';
import { twMerge } from 'tailwind-merge';

import { toKebabCase } from '../../../../utils/string-format';
import type { Tab } from '../typings';

interface Props<K extends string> {
  activeTabKey?: K | null;
  className?: string;
  delimiter?: string;
  isListingMobile?: boolean;
  onTabClick: ((key: K) => void) | React.Dispatch<React.SetStateAction<K>>;
  scrollGap?: number;
  scrollOnChange?: boolean;
  tabs: Array<Tab<K>>;
  typographyProps?: TypographyProps;
}

const BreadcrumbTabs = <K extends string = string>({
  activeTabKey,
  tabs,
  onTabClick,
  delimiter,
  className,
  typographyProps,
  isListingMobile,
  scrollOnChange,
  scrollGap,
}: Props<K>) => {
  const activeTabClassName = isListingMobile
    ? 'text-primary-accent'
    : 'text-primary-black';

  const parentRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (activeTabKey && scrollOnChange) {
      const offsetLeft = document?.getElementById(activeTabKey)?.offsetLeft;

      if (offsetLeft) {
        parentRef?.current?.scrollTo({
          // 150 padding to leave from the left side when scrolling
          left: offsetLeft - (scrollGap || 150),
          behavior: 'smooth',
        });
      }
    }
  }, [activeTabKey, scrollOnChange, scrollGap]);

  const mappedTabs = useMemo(
    () =>
      tabs.map((tab, index) => {
        const isActiveTab = tab.key === activeTabKey;

        return (
          <Fragment key={tab.key}>
            <button
              onClick={() => onTabClick(tab.key)}
              type="button"
              className={twMerge(
                'm-0 border-none bg-transparent p-0 outline-none',
                isListingMobile &&
                  isActiveTab &&
                  'border-0 border-b-2 border-solid border-primary-accent',
              )}
              id={tab.key}
              data-testid={toKebabCase(`${tab.label}-button`)}
            >
              <Typography
                variant="h3"
                className={twMerge(
                  'cursor-pointer whitespace-nowrap text-nowrap transition-all',
                  isListingMobile && 'text-[1.145rem] uppercase',
                  !isActiveTab && 'hover:text-primary-black-80',
                  isActiveTab ? activeTabClassName : 'text-primary-gray-80',
                )}
                {...typographyProps}
              >
                {tab.label}
              </Typography>
            </button>
            {index !== tabs.length - 1 && (
              <Typography
                variant="h3"
                component="span"
                className="text-primary-black-20"
                {...typographyProps}
              >
                {delimiter || '/'}
              </Typography>
            )}
          </Fragment>
        );
      }),
    [
      activeTabKey,
      delimiter,
      onTabClick,
      tabs,
      typographyProps,
      activeTabClassName,
      isListingMobile,
    ],
  );

  return (
    <Box
      className={twMerge(
        'no-scrollbar flex items-center gap-2 overflow-x-auto overflow-y-hidden lg:gap-6',
        className,
      )}
      ref={parentRef}
    >
      {mappedTabs}
    </Box>
  );
};

export { BreadcrumbTabs };
