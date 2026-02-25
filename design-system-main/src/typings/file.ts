export type FileResponseDto = {
  id: string;
  type: string;
  url: string;
  originalUrl: string;
  mediumCompressedUrl?: string;
  highCompressedUrl?: string;
  ultraCompressedUrl?: string;
  listingCardCompressedUrl?: string;
  fileName?: string;
  originalSize?: number;
  createdAt: string;
};
