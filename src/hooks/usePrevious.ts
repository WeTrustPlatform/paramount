import * as React from 'react';

export const usePrevious = <TValue = any>(value: TValue) => {
  const ref = React.useRef<TValue>(value);

  React.useEffect(() => {
    ref.current = value;
  }, [value]);

  return ref.current;
};
