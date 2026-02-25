import type { ButtonProps } from '@mui/material';
import { Button } from '@mui/material';
import type { LinkProps } from 'next/link';
import NextLink from 'next/link';

export interface YachtwayLinkProps
  extends
    Omit<ButtonProps, 'href'>,
    Omit<
      LinkProps,
      'onMouseEnter' | 'onTouchStart' | 'onClick' | 'legacyBehavior'
    > {}

const ButtonLink: React.FC<YachtwayLinkProps> = ({
  children,
  as,
  href,
  locale,
  passHref = true,
  prefetch,
  replace,
  scroll,
  shallow,
  disabled,
  ...rest
}) => {
  if (disabled) {
    return (
      <Button variant="text" disabled disableRipple {...rest}>
        {children}
      </Button>
    );
  }

  return (
    <NextLink
      as={as}
      href={href}
      locale={locale}
      passHref={passHref}
      prefetch={prefetch}
      replace={replace}
      scroll={scroll}
      shallow={shallow}
    >
      {}
      <Button variant="text" {...rest} disableRipple>
        {children}
      </Button>
    </NextLink>
  );
};

export { ButtonLink };
