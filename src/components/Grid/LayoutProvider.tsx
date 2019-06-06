import deepmerge from 'deepmerge';
import * as React from 'react';
import { Dimensions } from 'react-native';

import {
  DESC_ORDER_SCREEN_SIZES,
  GetResponsiveValueParam,
  LayoutContext,
  LayoutInterface,
  ScreenSize,
} from './LayoutContext';

export interface LayoutProviderProps {
  children: React.ReactNode;
  value?: Partial<LayoutInterface>;
}

export const getCurrentScreenSize = (layout: LayoutInterface) => {
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
    if (currentScreenSizeIndex >= index) return false;

    return !!values[screenSize];
  });

  return nearestSize ? values[nearestSize] : null;
};

export const LayoutProvider = (props: LayoutProviderProps) => {
  const { children, value } = props;
  const layoutContext = React.useContext(LayoutContext);
  const layout = value ? deepmerge(layoutContext, value) : layoutContext;

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
    </LayoutContext.Provider>
  );
};
