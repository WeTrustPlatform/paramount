import React from 'react';

export interface ToggleRenderProps {
  on: boolean;
  toggle: () => void;
  set: (on: boolean) => void;
}

export interface ToggleProps {
  initial?: boolean;
  children: (props: ToggleRenderProps) => JSX.Element;
}

export const Toggle = (props: ToggleProps) => {
  const { children, initial = false } = props;
  const [isOn, setIsOn] = React.useState(initial);

  const handleToggle = React.useCallback(() => {
    setIsOn(!isOn);
  }, [isOn]);

  const handleSet = React.useCallback((on: boolean) => {
    setIsOn(on);
  }, []);

  return children({ on: isOn, toggle: handleToggle, set: handleSet });
};
