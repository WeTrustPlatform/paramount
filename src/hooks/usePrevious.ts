import * as React from 'react';

export const usePrevious = <TValue = any>(value: TValue) => {
  const ref = React.useRef<TValue>();

  React.useEffect(() => {
    ref.current = value;
  });

  return ref.current;
};
