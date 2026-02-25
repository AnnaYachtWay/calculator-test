'use client';

import type { MenuProps } from '@mui/material';
import { Menu, MenuItem, Tooltip } from '@mui/material';
import type { MouseEvent } from 'react';
import { useCallback, useMemo, useState } from 'react';
import { twMerge } from 'tailwind-merge';

import useUpdateEffect from '../../../hooks/use-update-effect';
import type { MenuItemProps } from '../../../typings';
import { Button, type YachtwayButtonProps } from '../button';

interface MenuItemPropsWithTooltip extends MenuItemProps {
  tooltip?: string;
}

interface Props extends Omit<YachtwayButtonProps, 'onClick'> {
  items: MenuItemPropsWithTooltip[];
  menuProps?: Omit<MenuProps, 'open'>;
  onOpenChange?(open: boolean): void;
}

const ButtonWithDropdown: React.FC<Props> = ({
  items,
  menuProps,
  id,
  onOpenChange,
  ...rest
}) => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

  const [width, setWidth] = useState(0);

  useUpdateEffect(() => {
    onOpenChange?.(!!anchorEl);

    if (anchorEl) {
      setWidth(anchorEl.getBoundingClientRect().width);
    }
  }, [anchorEl]);

  const handleMenuButtonClick = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setAnchorEl(e.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleMenuItemClick = useCallback(
    (e: MouseEvent<HTMLLIElement>, item: MenuItemProps) => {
      e.stopPropagation();
      e.preventDefault();

      item.onClick?.(e);
      handleMenuClose();
    },
    [],
  );

  const menuItems = useMemo(
    () =>
      items.map((item) => (
        <Tooltip key={item.label} title={item.tooltip}>
          <MenuItem
            className={item.className}
            disabled={item.disabled}
            onClick={(e) =>
              !item.disabled ? handleMenuItemClick(e, item) : undefined
            }
          >
            {item.icon}
            {item.label}
          </MenuItem>
        </Tooltip>
      )),
    [handleMenuItemClick, items],
  );

  return (
    <>
      <Button
        id={id}
        data-testid="dropdown-button"
        {...rest}
        onClick={handleMenuButtonClick}
      />
      <Menu
        id={id ? `${id}-menu` : `${new Date().getTime()}-menu`}
        open={!!anchorEl}
        onClose={(e: MouseEvent<HTMLLIElement>) => {
          e.stopPropagation();
          e.preventDefault();
          handleMenuClose();
        }}
        className={twMerge(
          '[&_ul]:!max-h-[440px] [&_ul_li]:!pointer-events-auto',
          menuProps?.className,
        )}
        MenuListProps={{ ...(id && { 'aria-labelledby': id }) }}
        anchorEl={anchorEl}
        slotProps={{
          paper: {
            ...menuProps?.PaperProps,
            style: {
              minWidth: width,
              ...menuProps?.PaperProps?.style,
            },
          },
        }}
        {...menuProps}
      >
        {menuItems}
      </Menu>
    </>
  );
};

export { ButtonWithDropdown };
