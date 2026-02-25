import { Typography } from '@mui/material';

import { toKebabCase } from '../../../utils/string-format';
import { SpriteIcon } from '../sprite-icon';

interface Props {
  value: string;
  onDelete(event: React.MouseEvent<HTMLButtonElement>): void;
}

const Chip: React.FC<Props> = ({ value, onDelete }) => (
  <button
    onMouseDown={(e) => e.stopPropagation()}
    type="button"
    className="m-0 flex cursor-pointer items-center gap-2 rounded border-none bg-primary-gray-4 p-1 px-2 outline-none"
    onClick={onDelete}
    data-testid={toKebabCase(`${value}-button`)}
  >
    <Typography
      variant="body2"
      className="max-w-[100px] overflow-hidden text-ellipsis whitespace-nowrap"
    >
      {value}
    </Typography>
    <SpriteIcon name="cross_outline" className="h-4 w-4 cursor-pointer" />
  </button>
);
export { Chip };
