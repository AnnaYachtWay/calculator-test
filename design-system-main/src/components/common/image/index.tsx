import type { ImageProps as NextImageProps, StaticImageData } from 'next/image';
import NextImage from 'next/image';

import fallbackImage from '../../../assets/placeholder.jpg';
import { isStaticImageData } from '../../../utils/files';

export interface ImageProps extends Omit<
  NextImageProps,
  'blurDataURL' | 'src'
> {
  blurDataURL?: string | null;
  fallback?: StaticImageData;
  src?: string | StaticImageData | null;
}

const Image: React.FC<ImageProps> = ({
  alt,
  src,
  fallback,
  placeholder,
  blurDataURL,
  ...props
}) => {
  const placeholderValue: NextImageProps['placeholder'] =
    placeholder ||
    (blurDataURL ||
    (!src && (!fallback || fallback.blurDataURL)) ||
    (src && isStaticImageData(src) && src.blurDataURL)
      ? 'blur'
      : undefined);

  return (
    <NextImage
      {...props}
      alt={alt}
      src={src || fallback || fallbackImage}
      placeholder={placeholderValue}
      blurDataURL={blurDataURL ?? undefined}
    />
  );
};

export { Image };
