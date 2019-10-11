import deepMerge from 'deepmerge';
import React from 'react';
import { Dimensions } from 'react-native';

import { LayoutDebugger } from './Debugger';
import {
  defaultLayout,
  DESC_ORDER_SCREEN_SIZES,
  GetResponsiveValueParam,
  Layout,
  LayoutContext,
  ScreenSize,
} from './LayoutContext';

export interface LayoutProviderProps {
  debug?: boolean;
  children: React.ReactNode;
  value?: Partial<Layout>;
}

export const LayoutProvider = (props: LayoutProviderProps) => {
  const { children, value, debug = false } = props;

  const layout = value ? deepMerge(defaultLayout, value) : defaultLayout;

  const [currentScreenSize, setCurrentScreenSize] = React.useState(
    getCurrentScreenSize(layout),
  );

  const handleDimensionsChange = React.useCallback(() => {
    setCurrentScreenSize(getCurrentScreenSize(layout));
  }, []);

  React.useLayoutEffect(() => {
    Dimensions.addEventListener('change', handleDimensionsChange);

    return () =>
      Dimensions.removeEventListener('change', handleDimensionsChange);
  }, []);

  return (
    <LayoutContext.Provider
      value={{
        ...layout,
        currentScreenSize,
        getResponsiveValue: values =>
          deriveResponsiveValue(values, currentScreenSize),
      }}
    >
      {children}
      {debug && <LayoutDebugger />}
    </LayoutContext.Provider>
  );
};

export const getCurrentScreenSize = (layout: Layout) => {
  const { breakpoints } = layout;
  const windowScaledSize = Dimensions.get('window');

  const currentScreenSize = DESC_ORDER_SCREEN_SIZES.find(screenSize => {
    if (screenSize === 'xsmall') {
      return windowScaledSize.width < breakpoints.small;
    }

    const width = breakpoints[screenSize];
    if (windowScaledSize.width >= width) return true;

    return false;
  });

  return currentScreenSize || 'xsmall';
};

const deriveResponsiveValue = (
  values: GetResponsiveValueParam,
  currentScreenSize: ScreenSize,
) => {
  const currentScreenSizeIndex = DESC_ORDER_SCREEN_SIZES.indexOf(
    currentScreenSize,
  );

  const nearestSize = DESC_ORDER_SCREEN_SIZES.find((screenSize, index) => {
    if (currentScreenSizeIndex > index) return false;

    return values[screenSize] !== undefined && values[screenSize] !== null;
  });

  return nearestSize ? values[nearestSize] : undefined;
};
