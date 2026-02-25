import CircularProgress from '@mui/material/CircularProgress';
import { twMerge } from 'tailwind-merge';

import { type SpriteIconNames, SpriteIcon } from '../sprite-icon';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon: SpriteIconNames;
  iconClassName?: string;
  isLoading?: boolean;
  size?: 'small' | 'medium' | 'big';
  variant?: 'light' | 'on-dark';
}

const IconButton: React.FC<Props> = ({
  icon,
  iconClassName,
  size = 'small',
  variant = 'light',
  isLoading,
  ...rest
}) => {
  return (
    <button
      type="button"
      {...rest}
      className={twMerge(
        'm-0 flex h-6 w-6 items-center justify-center rounded-sm p-0',
        'border-none bg-primary-white-80 outline-none',
        'cursor-pointer hover:bg-primary-white-60',
        size === 'big' && 'size-10',
        variant === 'on-dark' && 'bg-primary-white-20 text-primary-white',
        rest.disabled && 'cursor-default opacity-50',
        rest.className,
      )}
    >
      {isLoading ? (
        <CircularProgress size={16} className="opacity-25" />
      ) : (
        <SpriteIcon
          name={icon}
          className={twMerge(
            'h-4 w-4',
            size === 'medium' && 'h-5 w-5',
            size === 'big' && 'h-6 w-6',
            iconClassName,
          )}
        />
      )}
    </button>
  );
};

export { IconButton };
