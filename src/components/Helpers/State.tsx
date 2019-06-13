import React from 'react';

export interface StateRenderProps<TState = any> {
  state: TState;
  setState: (state: TState) => void;
}

export interface StateProps<TState = any> {
  initial?: TState;
  children: (props: StateRenderProps) => JSX.Element;
}

export const State = (props: StateProps) => {
  const { children, initial = false } = props;
  const [state, setState] = React.useState(initial);

  const handleState = React.useCallback(newState => {
    setState(newState);
  }, []);

  return children({ state, setState: handleState });
};
