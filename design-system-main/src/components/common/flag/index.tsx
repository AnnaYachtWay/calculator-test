import { twMerge } from 'tailwind-merge';

import type { IsoCountryCodes } from '../../../typings/iso-country-codes';

interface Props {
  className?: string;
  country: IsoCountryCodes;
}

const Flag: React.FC<Props> = ({ country, className }) => (
  <span className={twMerge(`fi fi-${country.toLowerCase()}`, className)} />
);

export default Flag;
