// add more tokens as needed (we currently have only this one)
export enum ErrorToken {
  HULL_NUMBER_ALREADY_EXISTS = 'LISTING_WITH_THIS_HULL_NUMBER_ALREADY_EXISTS',
}

export type ValidationError = {
  property: string;
  children: ValidationError[];
  constraints: Record<string, string>;
};

export type ErrorWithValidationDetails = {
  statusCode: number;
  message: string;
  errors: ValidationError[];
};

export type ErrorWithDetails = {
  statusCode: number;
  message: string;
  details?: {
    token?: ErrorToken | string;
  };
};

export interface GeneralCatchError<T extends Record<string, unknown>> {
  data?: T;
  status: number;
}
