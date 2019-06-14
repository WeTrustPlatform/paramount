import React from 'react';

const reducer = (state: boolean, action: null): boolean => !state;

export const useForceUpdate = () => {
  const [, dispatch] = React.useReducer(reducer, true);

  // Turn dispatch(required_parameter) into dispatch().
  return React.useCallback(() => {
    dispatch(null);
  }, [dispatch]);
};
