'use client';

import { animate } from 'framer-motion';
import { useEffect, useRef } from 'react';

interface Props {
  duration?: number;
  from?: number;
  to: number;
}

const CountUp: React.FC<Props> = ({ from = 0, to, duration = 1.5 }) => {
  const nodeRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const node = nodeRef.current;

    if (!node) {
      return undefined;
    }

    const controls = animate(from, to, {
      duration,
      onUpdate(value) {
        node.textContent = value.toFixed(0);
      },
    });

    return () => controls.stop();
  }, [duration, from, to]);

  return <span ref={nodeRef} />;
};

export { CountUp };
