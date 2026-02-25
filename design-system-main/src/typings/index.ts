import type { SpriteIconNames } from '../components/common/sprite-icon';

export type SlugType = number | string;

export interface MenuItemProps {
  className?: string;
  disabled?: boolean;
  icon?: React.ReactNode;
  label?: string;
  onClick?(e?: React.MouseEvent<HTMLLIElement>): void;
}

export interface NestedMenuItems extends MenuItemProps {
  nested?: NestedMenuItems[];
}

export interface TextDescription {
  description: string;
  title: string;
}

export enum PaidFeature {
  Broker = 'brokers',
  Brand = 'brands',
  ListingImage = 'listing-images',
  ModelImage = 'model-images',
}

export type RequiredKeys<T, K extends keyof T> = T & Required<Pick<T, K>>;

export type ExtendFields<T, E> = {
  [P in keyof T]: T[P] | E;
};

export type Option<V = string, L = string> = {
  label: L;
  value: V;
};

export type OptionWithIcon<V = string, L = string> = Option<V, L> & {
  icon?: SpriteIconNames;
};

export enum LoggerContexts {
  UserAuth = 'user-auth',
  ServerStatic = 'server-static',
}

export type UseBooleanOutput = {
  setValue: React.Dispatch<React.SetStateAction<boolean>>;
  value: boolean;
  setFalse(): void;
  setTrue(): void;
  toggle(): void;
};
