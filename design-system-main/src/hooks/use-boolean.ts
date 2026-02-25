import { useCallback, useMemo, useState } from 'react';

import type { UseBooleanOutput } from '../typings';

function useBoolean(defaultValue?: boolean): UseBooleanOutput {
  const [value, setValue] = useState(!!defaultValue);

  const setTrue = useCallback(() => setValue(true), []);
  const setFalse = useCallback(() => setValue(false), []);
  const toggle = useCallback(() => setValue((x) => !x), []);

  return useMemo(
    () => ({ value, setValue, setTrue, setFalse, toggle }),
    [setFalse, setTrue, toggle, value],
  );
}

export default useBoolean;
