import { twMerge } from 'tailwind-merge';

import { SpriteIcon } from '../sprite-icon';

const buttonClasses = twMerge(
  '[&:disabled>svg]:text-primary-gray-40 m-0 bg-transparent border-none p-0',
  'hover:transform hover:scale-110 transition-transform cursor-pointer',
);

interface Props {
  from?: number;
  step?: number;
  to?: number;
  value: number;
  onChange(value: number): void;
}

const CounterInput: React.FC<Props> = ({
  onChange,
  value,
  from,
  to,
  step = 1,
}) => {
  const onAdd = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.stopPropagation();
    onChange(value + step);
  };

  const onSubtract = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.stopPropagation();
    onChange(value - step);
  };

  return (
    <div className="flex items-center gap-4">
      <button
        className={buttonClasses}
        onClick={onSubtract}
        disabled={from != null && value - step < from}
        type="button"
        data-testid="minus-button"
      >
        <SpriteIcon name="minus_outline" className="h-5 w-5" />
      </button>
      <div
        className={twMerge(
          'flex items-center justify-center text-center',
          'h-9 w-fit min-w-[2rem] bg-primary-gray-4 px-[0.25rem]',
        )}
      >
        {value}
      </div>
      <button
        className={buttonClasses}
        onClick={onAdd}
        disabled={to != null && value + step >= to}
        type="button"
        data-testid="plus-button"
      >
        <SpriteIcon name="plus_outline" className="h-4 w-4" />
      </button>
    </div>
  );
};

export { CounterInput };
