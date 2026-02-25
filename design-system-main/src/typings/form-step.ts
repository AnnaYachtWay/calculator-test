export interface FormStepProps<T> {
  initialValues?: T | null;
  isLoading?: boolean;
  onNextClick?(): void;
  onPreviousClick?(): void;
  onValuesChange?(values: T): void;
}

export type FormStepComponent<
  T = Record<string, unknown>,
  A = Record<string, unknown>,
> = React.FC<
  FormStepProps<T> & {
    additionalProps?: A;
  }
>;

export interface AuthFormStepComponentProps<T, A = object> {
  additionalProps?: A;
  initialValues: T;
  isLoading?: boolean;
  navigateToStep?(step?: number): void;
  onNextClick(): void;
  onPreviousClick(): void;
  onValuesChange(values: T): void;
}

export type AuthFormStepComponent<
  T = Record<string, unknown>,
  A = object,
> = React.FC<AuthFormStepComponentProps<T, A>>;
