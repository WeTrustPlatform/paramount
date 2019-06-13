import React from 'react';

export interface CounterStateRenderProps {
  count: number;
  decrement: () => void;
  decrementBy: (count: number) => void;
  increment: () => void;
  incrementBy: (count: number) => void;
  set: (count: number) => void;
}

export interface CounterStateProps {
  initial?: number;
  children: (props: CounterStateRenderProps) => React.ReactNode;
}

export const CounterState = (props: CounterStateProps) => {
  const { children, initial = 0 } = props;
  const [count, setCount] = React.useState(initial);

  const handleIncrementBy = React.useCallback(
    value => {
      setCount(count + value);
    },
    [count],
  );

  const handleDecrementBy = React.useCallback(
    value => {
      setCount(count - value);
    },
    [count],
  );

  const handleIncrement = React.useCallback(() => {
    setCount(count + 1);
  }, [count]);

  const handleDecrement = React.useCallback(() => {
    setCount(count - 1);
  }, [count]);

  const handleSet = React.useCallback(
    value => {
      setCount(value);
    },
    [count],
  );

  return children({
    count,
    decrement: handleDecrement,
    decrementBy: handleDecrementBy,
    increment: handleIncrement,
    incrementBy: handleIncrementBy,
    set: handleSet,
  });
};
