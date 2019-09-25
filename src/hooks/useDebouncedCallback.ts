import React from 'react';

export const useDebouncedCallback = <T extends (...args: any[]) => void>(
  callback: T,
  delay: number,
  deps: readonly any[],
): T => {
  const timeout = React.useRef<number | null>(null);

  return React.useCallback(
    // @ts-ignore
    (...args) => {
      if (timeout.current) clearTimeout(timeout.current);

      // @ts-ignore
      timeout.current = setTimeout(() => callback(...args), delay);
    },
    [callback, delay, ...deps],
  );
};
