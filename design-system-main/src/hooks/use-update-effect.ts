import type { DependencyList, EffectCallback } from 'react';
import { useEffect } from 'react';

import useIsFirstRender from './use-is-first-render';

function useUpdateEffect(effect: EffectCallback, deps?: DependencyList) {
  const isFirst = useIsFirstRender();

  useEffect(() => {
    if (!isFirst) {
      return effect();
    }

    return undefined;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}

export default useUpdateEffect;
