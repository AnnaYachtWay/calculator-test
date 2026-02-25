import { twMerge } from 'tailwind-merge';

import { type SpriteIconNames, SpriteIcon } from '../sprite-icon';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  active?: boolean;
  customIcon?: React.ReactNode;
  icons?: {
    active: SpriteIconNames;
    inactive: SpriteIconNames;
  };
}

const RoundIconButton: React.FC<Props> = ({
  active,
  icons,
  customIcon,
  ...rest
}) => {
  const icon: SpriteIconNames = icons ? icons.inactive : 'star_outline';
  const activeIcon: SpriteIconNames = icons ? icons.active : 'star_solid';

  return (
    <button
      {...rest}
      type="button"
      className={twMerge(
        'm-0 flex h-14 w-14 items-center justify-center p-0 backdrop-blur transition-all',
        'cursor-pointer rounded-full border-0 bg-primary-black-40 outline-none hover:bg-primary-black-40',
        active && 'bg-primary-white',
      )}
    >
      {customIcon || (
        <SpriteIcon
          name={!active ? icon : activeIcon}
          className={twMerge(
            'h-7 w-7 text-primary-white transition-all',
            active && 'text-primary-black',
          )}
        />
      )}
    </button>
  );
};

export { RoundIconButton };
