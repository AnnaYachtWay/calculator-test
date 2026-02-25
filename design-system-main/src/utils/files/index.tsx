import type { StaticImageData } from 'next/image';

import type { FileResponseDto } from '../../typings/file';

const HEIF_IMAGE_TYPES = ['image/heif', 'image/heic'];

export function isStaticImageData(image: unknown): image is StaticImageData {
  return typeof image === 'object' && image != null && 'src' in image;
}

export function isFileResponseDto(file: unknown): file is FileResponseDto {
  return typeof file === 'object' && file != null && 'url' in file;
}

export const isHeifImage = (file: File) => HEIF_IMAGE_TYPES.includes(file.type);

export const convertHeifImage = async (
  file: File,
  toType: string = 'image/png',
) => {
  if (!isHeifImage(file)) {
    return file;
  }

  const blob = await import('heic2any').then(({ default: heic2any }) =>
    heic2any({
      blob: file,
      toType,
    }),
  );

  return new File(
    Array.isArray(blob) ? blob : [blob],
    `${file.name.split('.').slice(0, -1).join('.')}.${toType.split('/')[1]}`,
    { type: toType },
  );
};

export const normalizeFiles = async (files: File[]) =>
  Promise.all(
    files.map((file) => {
      if (isHeifImage(file)) {
        return convertHeifImage(file);
      }

      return file;
    }),
  );

export const getImageDimensions = (
  file?: string,
): Promise<{
  w: number;
  h: number;
}> => {
  return new Promise((resolved) => {
    const image = new Image();

    image.onload = () => {
      resolved({ w: image.width, h: image.height });
    };
    image.src = file || '';
  });
};
