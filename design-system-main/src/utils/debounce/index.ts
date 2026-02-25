export type DebouncedFn<T extends (...args: unknown[]) => unknown> = ((
  ...args: Parameters<T>
) => ReturnType<T> | undefined) & {
  cancel: () => void;
  flush: () => ReturnType<T> | undefined;
  isPending: () => boolean;
};

/**
 * Debounce implementation matching lodash _.debounce behavior.
 * Supports leading, trailing, and maxWait options.
 */
function debounce<T extends (...args: unknown[]) => unknown>(
  func: T,
  wait: number,
  options?: { leading?: boolean; trailing?: boolean; maxWait?: number },
): DebouncedFn<T> {
  let lastArgs: Parameters<T> | null = null;
  let lastThis: unknown = null;
  let result: ReturnType<T> | undefined;
  let timerId: ReturnType<typeof setTimeout> | null = null;
  let lastCallTime: number | undefined;
  let lastInvokeTime = 0;

  const leading = options?.leading === true;
  const trailing = options?.trailing !== false;
  const maxWait = options?.maxWait;
  const maxing = maxWait !== undefined;

  function invokeFunc(time: number): ReturnType<T> | undefined {
    const args = lastArgs!;
    const thisArg = lastThis;

    lastArgs = null;
    lastThis = null;
    lastInvokeTime = time;
    result = func.apply(thisArg, args) as ReturnType<T>;

    return result;
  }

  function startTimer(pendingFunc: () => void, waitTime: number) {
    return setTimeout(pendingFunc, waitTime);
  }

  function cancelTimer() {
    if (timerId !== null) {
      clearTimeout(timerId);
      timerId = null;
    }
  }

  function remainingWait(time: number): number {
    const timeSinceLastCall = time - (lastCallTime ?? 0);
    const timeSinceLastInvoke = time - lastInvokeTime;
    const timeWaiting = wait - timeSinceLastCall;

    return maxing
      ? Math.min(timeWaiting, maxWait - timeSinceLastInvoke)
      : timeWaiting;
  }

  function shouldInvoke(time: number): boolean {
    const timeSinceLastCall = time - (lastCallTime ?? 0);
    const timeSinceLastInvoke = time - lastInvokeTime;

    return (
      lastCallTime === undefined ||
      timeSinceLastCall >= wait ||
      timeSinceLastCall < 0 ||
      (maxing && timeSinceLastInvoke >= maxWait)
    );
  }

  function trailingEdge(time: number): ReturnType<T> | undefined {
    timerId = null;

    if (trailing && lastArgs) {
      return invokeFunc(time);
    }

    lastArgs = null;
    lastThis = null;

    return result;
  }

  function timerExpired(): void {
    const time = Date.now();

    if (shouldInvoke(time)) {
      trailingEdge(time);

      return;
    }

    timerId = startTimer(timerExpired, remainingWait(time));
  }

  function leadingEdge(time: number): ReturnType<T> | undefined {
    lastInvokeTime = time;
    timerId = startTimer(timerExpired, wait);

    return leading ? invokeFunc(time) : result;
  }

  function debounced(
    this: unknown,
    ...args: Parameters<T>
  ): ReturnType<T> | undefined {
    const time = Date.now();
    const isInvoking = shouldInvoke(time);

    lastArgs = args;
    // Preserve invocation context for lodash-compatible debounce (required for func.apply(thisArg, args))
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    lastThis = this;
    lastCallTime = time;

    if (isInvoking) {
      if (timerId === null) {
        return leadingEdge(lastCallTime);
      }

      if (maxing) {
        // Handle invocations in a tight loop (maxWait scenario)
        cancelTimer();
        timerId = startTimer(timerExpired, wait);

        return invokeFunc(lastCallTime);
      }
    }

    if (timerId === null) {
      timerId = startTimer(timerExpired, wait);
    }

    return result;
  }

  debounced.cancel = (): void => {
    cancelTimer();
    lastInvokeTime = 0;
    lastArgs = null;
    lastThis = null;
    lastCallTime = undefined;
  };

  debounced.flush = (): ReturnType<T> | undefined => {
    if (timerId === null) {
      return result;
    }

    cancelTimer();

    return trailingEdge(Date.now());
  };

  debounced.isPending = (): boolean => timerId !== null;

  return debounced as DebouncedFn<T>;
}

export default debounce;
