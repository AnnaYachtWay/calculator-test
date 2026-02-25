import { Breadcrumbs as MuiBreadcrumbs, Typography } from '@mui/material';
import Link from 'next/link';
import { useCallback } from 'react';
import { twMerge } from 'tailwind-merge';

import { SpriteIcon } from '../sprite-icon';

export interface BreadcrumbLink {
  href?: string;
  label: string;
}

interface Props {
  isBlack?: boolean;
  links: BreadcrumbLink[];
}

const Breadcrumbs: React.FC<Props> = ({ links, isBlack }) => {
  const { length } = links;

  const getLabel = useCallback(
    (text: string, index: number) => (
      <Typography
        key={text}
        variant="body1"
        className={twMerge(
          'cursor-pointer text-primary-white-80 transition-colors hover:text-primary-white',
          isBlack && 'text-primary-black-80 hover:text-primary-black',
          isBlack && index === length - 1 && 'text-primary-black',
          !isBlack && index === length - 1 && 'text-primary-white',
        )}
      >
        {text}
      </Typography>
    ),
    [isBlack, length],
  );

  return (
    <MuiBreadcrumbs
      separator={
        <SpriteIcon
          name="chevron_right_outline"
          className={isBlack ? 'text-primary-black' : 'text-primary-white'}
        />
      }
    >
      {links.map((link, index) =>
        link.href ? (
          <Link key={link.label} href={link.href} className="no-underline">
            {getLabel(link.label, index)}
          </Link>
        ) : (
          getLabel(link.label, index)
        ),
      )}
    </MuiBreadcrumbs>
  );
};

export { Breadcrumbs };
