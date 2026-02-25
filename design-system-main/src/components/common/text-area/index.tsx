import type { TextareaAutosizeProps } from '@mui/material';
import {
  FormControl,
  FormHelperText,
  InputLabel,
  TextareaAutosize,
} from '@mui/material';
import type React from 'react';
import { twMerge } from 'tailwind-merge';

import { SpriteIcon } from '../sprite-icon';

interface Props extends TextareaAutosizeProps {
  helperText?: string;
  label?: string;
}

const TextArea: React.FC<Props> = ({
  id,
  className,
  disabled,
  helperText,
  label,
  ...rest
}) => {
  const inputLabelId = label && id ? `${id}-label` : undefined;
  const helperTextId = helperText && id ? `${id}-helper-text` : undefined;

  return (
    <FormControl>
      {label != null && label !== '' && (
        <InputLabel
          htmlFor={id}
          id={inputLabelId}
          className="!static !transform-none"
        >
          {label}
        </InputLabel>
      )}
      <TextareaAutosize
        {...rest}
        data-testid="textarea"
        id={id}
        className={twMerge(
          'px-4 py-3',
          'font-figtree text-base text-primary-black',
          'placeholder:text-primary-black-60',
          '[&:not(:disabled)]:hover:placeholder:text-primary-black-80',
          'focus:placeholder:text-primary-black-80',
          'rounded-sm border border-primary-gray-20',
          'focus:border-primary-gray [&:not(:disabled)]:hover:border-primary-gray-60',
          'outline-none transition-colors',
          disabled && 'resize-none',
          className,
        )}
        aria-describedby={helperText ? helperTextId : undefined}
        disabled={disabled}
      />
      {helperText && (
        <FormHelperText id={helperTextId} className="flex items-center">
          <SpriteIcon name="information_outline" className="pr-1" />{' '}
          {helperText}
        </FormHelperText>
      )}
    </FormControl>
  );
};

export { TextArea };
