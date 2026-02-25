'use client';

import type { PointerEvent } from 'react';
import type React from 'react';
import { useRef, useState } from 'react';

import { SpriteIcon } from '../sprite-icon';

interface Props {
  handlerWidth?: number;
  onChange: (checked: boolean) => void;
  sliderWidth?: number;
  title: string;
}

const SliderButton: React.FC<Props> = ({
  onChange,
  sliderWidth = 300,
  handlerWidth = 100,
  title,
}) => {
  const switchRef = useRef<HTMLDivElement>(null);

  const [Xpos, setPos] = useState(0);
  const [isPointerDown, setIsPointerDown] = useState(false);
  const [isDragging, setIsDragging] = useState(false);

  const handlerWidthWithPaddings = handlerWidth + 4;

  const handleChecked = (newChecked: boolean) => {
    if (newChecked) {
      setPos(sliderWidth - handlerWidthWithPaddings);
    } else {
      setPos(0);
    }

    onChange(newChecked);
  };

  const startDrag = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsPointerDown(true);
  };

  const onMouseUp = (e: PointerEvent<HTMLDivElement>) => {
    setIsPointerDown(false);

    if (switchRef.current && isDragging) {
      const mouseRelativePos =
        e.clientX - switchRef.current.getBoundingClientRect().left;

      setIsDragging(false);

      if (mouseRelativePos >= sliderWidth / 2) {
        handleChecked(true);
      } else {
        handleChecked(false);
      }
    }
  };

  const onPointerMove = (e: PointerEvent<HTMLDivElement>) => {
    if (isPointerDown && !isDragging) {
      setIsDragging(true);
    }

    if (switchRef.current && isDragging) {
      const halfHandle = 50;
      const newPos =
        e.clientX - switchRef.current.getBoundingClientRect().left - halfHandle;

      if (newPos < 0) {
        setPos(0);
      } else if (newPos > sliderWidth - handlerWidthWithPaddings) {
        setPos(sliderWidth - handlerWidthWithPaddings);
      } else {
        setPos(newPos);
      }
    }
  };

  const onPointerLeave = () => {
    if (isDragging && isPointerDown) {
      handleChecked(false);
      setIsDragging(false);
      setIsPointerDown(false);
    }
  };

  return (
    <div
      className="relative flex h-[52px] touch-none justify-end rounded-full bg-primary-white-20"
      style={{
        width: sliderWidth,
      }}
      ref={switchRef}
      onPointerDown={startDrag}
      onPointerUp={onMouseUp}
      onPointerMove={onPointerMove}
      onPointerLeave={onPointerLeave}
    >
      <div
        id="dragswitch-handle"
        className="absolute left-1 top-1 flex h-[44px] items-center rounded-full bg-primary-white px-[14px] py-[16px]"
        style={{
          transform: `translateX(${Xpos}px)`,
          WebkitTransition: isDragging ? undefined : 'transform .2s',
          MozTransition: isDragging ? undefined : 'transform .2s',
          transition: isDragging ? undefined : 'transform .2s',
        }}
      >
        {title}
      </div>
      <div className="mr-4 flex items-center self-center justify-self-end">
        <SpriteIcon
          name="chevron_right_outline"
          className="size-2 fill-primary-white-60"
        />
        <SpriteIcon
          name="chevron_right_outline"
          className="-ml-1 size-4 fill-primary-white-60"
        />
        <SpriteIcon
          name="chevron_right_outline"
          className="-ml-3 size-7 fill-primary-white"
        />
      </div>
    </div>
  );
};

export { SliderButton };
