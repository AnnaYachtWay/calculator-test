'use client';

import type { ButtonProps } from '@mui/material';
import { Button, CircularProgress } from '@mui/material';

import useBoolean from '../../../hooks/use-boolean';
import { normalizeFiles } from '../../../utils/files';

const defaultAccept =
  'image/jpeg, image/png, image/svg+xml, image/heif, image/heic';

interface Props extends Omit<ButtonProps, 'onChange'> {
  accept?: string;
  multiple?: boolean;
  onChange?(filesFormData: FormData, files: File[]): void | Promise<void>;
}

const UploadButton: React.FC<Props> = ({
  accept = defaultAccept,
  children,
  multiple,
  onChange,
  ...props
}) => {
  const filesProcessing = useBoolean();

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = async ({
    target,
  }) => {
    filesProcessing.setTrue();

    const { files } = target;

    if (!files) return;

    const formData = new FormData();
    const filesArray = Array.from(files);

    const mappedFiles = await normalizeFiles(filesArray);

    mappedFiles.forEach((file) => {
      formData.append('files', file);
    });

    await onChange?.(formData, mappedFiles);

    filesProcessing.setFalse();
    // eslint-disable-next-line no-param-reassign
    target.value = '';
  };

  return (
    <Button {...(props as Record<string, unknown>)} component="label">
      {filesProcessing.value ? <CircularProgress size={24} /> : children}
      <input
        hidden
        accept={accept}
        type="file"
        multiple={multiple}
        onChange={handleChange}
      />
    </Button>
  );
};

export { UploadButton };
