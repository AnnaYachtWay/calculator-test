import type React from 'react';
import { useCallback } from 'react';

interface Props {
  element: React.RefObject<HTMLElement>;
  text: string;
}

const SkipContentButton: React.FC<Props> = ({ element, text }) => {
  const skipContentAction = useCallback(
    (key: React.KeyboardEvent) => {
      if (key.code === 'Enter' || key.code === 'Space') {
        key.preventDefault();

        element.current?.focus();
      }
    },
    [element],
  );

  return (
    <a
      href={`#${element.current?.id}`}
      tabIndex={0}
      className="fixed left-[100px] top-1 z-[999] !h-0 w-[100px] overflow-hidden focus:!h-auto"
      onKeyDown={skipContentAction}
      rel="nofollow"
    >
      {text}
    </a>
  );
};

export { SkipContentButton };
