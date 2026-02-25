/* eslint-disable @typescript-eslint/consistent-type-imports */
declare module '*.svg?url' {
  const content: import('next/dist/shared/lib/image-external').StaticImageData;
  export default content;
}

declare module '*.svg' {
  const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  export default content;
}

declare module '*.jpg' {
  const content: import('next/dist/shared/lib/image-external').StaticImageData;
  export default content;
}

declare module '*.png' {
  const content: import('next/dist/shared/lib/image-external').StaticImageData;
  export default content;
}
