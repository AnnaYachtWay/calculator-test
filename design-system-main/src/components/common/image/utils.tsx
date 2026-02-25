import type { FileResponseDto } from '../../../typings/file';

export const getImageUrl = (image?: FileResponseDto | null) => {
  if (!image) {
    return null;
  }

  return {
    highCompressedUrl:
      image.highCompressedUrl || image.mediumCompressedUrl || image.originalUrl,
    mediumCompressedUrl: image.mediumCompressedUrl || image.originalUrl,
    originalUrl: image.originalUrl,
  };
};
