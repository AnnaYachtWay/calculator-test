import { twMerge } from 'tailwind-merge';

import { SpriteIcon } from '../sprite-icon';

interface Props {
  children: React.ReactNode;
  className?: string;
  iconClassName?: string;
}

const ErrorHelperText: React.FC<Props> = ({
  children,
  iconClassName,
  className,
}) => {
  return (
    <span className={twMerge('flex items-center', className)}>
      <SpriteIcon
        name="information_outline"
        className={twMerge('mr-1 h-[20px] flex-shrink-0 sm:h-6', iconClassName)}
      />
      {children}
    </span>
  );
};

export { ErrorHelperText };
