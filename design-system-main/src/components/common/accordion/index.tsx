import {
  type AccordionProps as MuiAccordionProps,
  Accordion as MuiAccordion,
  AccordionDetails,
  AccordionSummary,
} from '@mui/material';
import type React from 'react';
import { twMerge } from 'tailwind-merge';

import { SpriteIcon } from '../sprite-icon';

export interface AccordionProps extends MuiAccordionProps {
  children: NonNullable<React.ReactNode>;
  className?: string;
  detailsClassName?: string;
  expandIcon?: React.ReactNode;
  noIconRotation?: boolean;
  summary: React.ReactNode;
  summaryClassName?: string;
}

const Accordion: React.FC<AccordionProps> = ({
  summary,
  children,
  summaryClassName,
  detailsClassName,
  className,
  expandIcon,
  noIconRotation,
  ...props
}) => (
  <MuiAccordion className={twMerge('m-0', className)} {...props}>
    <AccordionSummary
      className={twMerge('!min-h-fit p-0', summaryClassName)}
      expandIcon={expandIcon || <SpriteIcon name="chevron_down_outline" />}
      sx={{
        '&.Mui-focusVisible': {
          backgroundColor: 'transparent',
        },
        ...(noIconRotation
          ? {
              '& .MuiAccordionSummary-expandIconWrapper': {
                transform: 'none !important',
              },
            }
          : {}),
      }}
    >
      {summary}
    </AccordionSummary>
    {children && (
      <AccordionDetails className={twMerge('p-0', detailsClassName)}>
        {children}
      </AccordionDetails>
    )}
  </MuiAccordion>
);

export { Accordion };
