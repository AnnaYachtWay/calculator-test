type UpperLowerString<T> = T extends string
  ? Lowercase<T> | Uppercase<T> | T
  : never;

export default UpperLowerString;
