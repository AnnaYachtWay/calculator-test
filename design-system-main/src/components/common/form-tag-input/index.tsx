'use client';

import { Box, IconButton, TextField, Typography } from '@mui/material';
import type { KeyboardEvent } from 'react';
import { useState } from 'react';
import type { Control, FieldErrors, FieldValues, Path } from 'react-hook-form';
import { Controller } from 'react-hook-form';
import { twMerge } from 'tailwind-merge';

import { SpriteIcon } from '../sprite-icon';

interface TagInputProps<T extends FieldValues> {
  control: Control<T>;
  disabled?: boolean;
  enablePlainTextInput?: boolean;
  errors?: FieldErrors<T>;
  name: Path<T>;
  placeholder?: string;
  showStartIcon?: boolean;
  startIcon?: React.ReactNode;
  tagTriggerKeys?: string[];
}

const TagInput = <T extends FieldValues>({
  control,
  name,
  placeholder,
  disabled = false,
  errors,
  enablePlainTextInput = false,
  startIcon,
  showStartIcon = true,
  tagTriggerKeys = [],
}: TagInputProps<T>) => {
  const [inputValue, setInputValue] = useState<string>();

  const handleKeyDown = (
    event: KeyboardEvent<HTMLDivElement>,
    value: string,
    onChange: (value: string[]) => void,
    currentTags: string[],
  ) => {
    if (
      (event.key === 'Enter' || tagTriggerKeys?.includes(event.key)) &&
      value.trim()
    ) {
      event.preventDefault();

      const newTag = value.trim();

      if (!currentTags.includes(newTag)) {
        onChange([...currentTags, ...newTag.split(',').map((e) => e.trim())]);
      } else if (!Array.isArray(currentTags)) {
        onChange(newTag.split(',').map((e) => e.trim()));
      }

      setInputValue('');
    }
  };

  const handleDelete = (
    tagToDelete: string,
    onChange: (value: string[]) => void,
    currentTags: string[],
  ) => {
    onChange(currentTags.filter((tag) => tag !== tagToDelete));
  };

  const handleDeleteAndUpdate = (
    tagToDelete: string,
    onChange: (value: string[]) => void,
    currentTags: string[],
  ) => {
    setInputValue(tagToDelete);
    onChange(currentTags.filter((tag) => tag !== tagToDelete));
  };

  const handleInput = (
    onChange: (value: string[] | string) => void,
    currentValue: string | string[],
    newValue: string,
  ) => {
    setInputValue(newValue);

    if (
      enablePlainTextInput &&
      ((Array.isArray(currentValue) && currentValue.length === 0) ||
        typeof currentValue === 'string')
    ) {
      onChange(newValue);
    }
  };

  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, value = [], ref } }) => (
        <Box className="relative">
          <Box
            className={twMerge(
              'flex flex-wrap items-center gap-2 rounded-sm border border-solid border-primary-black-20 px-4 py-3',
              name && errors?.[name] && 'border-error',
            )}
          >
            {showStartIcon &&
              (startIcon || <SpriteIcon name="search_outline" />)}
            {Array.isArray(value) &&
              value.map((tag: string) => (
                <Box
                  key={tag}
                  className="flex cursor-pointer items-center gap-1 rounded-md bg-primary-gray-4 px-2 py-1"
                  onClick={() => handleDeleteAndUpdate(tag, onChange, value)}
                >
                  <Typography variant="body2">{tag}</Typography>
                  <IconButton
                    className="!h-5 !w-5 p-0"
                    onClick={() => handleDelete(tag, onChange, value)}
                    disabled={disabled}
                  >
                    <SpriteIcon name="cross_outline" />
                  </IconButton>
                </Box>
              ))}
            <TextField
              inputRef={ref}
              placeholder={placeholder}
              disabled={disabled}
              value={inputValue}
              onChange={(e) => {
                handleInput(onChange, value, e.target.value);
              }}
              onKeyDown={(e) =>
                handleKeyDown(
                  e,
                  (e.target as HTMLInputElement).value,
                  onChange,
                  value,
                )
              }
              variant="filled"
              InputProps={{
                disableUnderline: true,
              }}
              className="flex-1 !bg-transparent !font-figtree !text-sm"
              sx={{
                '& .MuiInputBase-root': {
                  padding: 0,
                  height: 'auto',
                  background: 'transparent !important',
                },
                '& .MuiInputBase-input': {
                  padding: 0,
                },
              }}
            />
          </Box>
          <Typography className="absolute bottom-full right-0 -z-10 font-figtree text-sm text-error">
            {(name && errors?.[name]?.message?.toString()) ||
              (errors?.[name] as unknown as FieldErrors<T>[])?.map((e) =>
                e.message?.toString(),
              )}
          </Typography>
        </Box>
      )}
    />
  );
};

export { TagInput };
