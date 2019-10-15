import React from 'react';
import { Dimensions } from 'react-native';

import { Layout, ScreenSize, useTheme } from '../../theme';

import { LayoutDebugger } from './Debugger';

export interface GetResponsiveValueParam<
  TXsmallValue = any,
  TSmallValue = any,
  TMediumValue = any,
  TLargeValue = any,
  TXlargeValue = any
> {
  xsmall?: TXlargeValue;
  small?: TXsmallValue;
  medium?: TSmallValue;
  large?: TMediumValue;
  xlarge?: TLargeValue;
}

export type GetResponsiveValue = <
  TXsmallValue = any,
  TSmallValue = any,
  TMediumValue = any,
  TLargeValue = any,
  TXlargeValue = any
>(
  values: GetResponsiveValueParam<
    TXsmallValue,
    TSmallValue,
    TMediumValue,
    TLargeValue,
    TXlargeValue
  >,
) =>
  | TXlargeValue
  | TLargeValue
  | TMediumValue
  | TSmallValue
  | TXsmallValue
  | undefined;

export interface LayoutContextValue {
  currentScreenSize: ScreenSize;
  getResponsiveValue: GetResponsiveValue;
}

export const ASC_ORDER_SCREEN_SIZES: ScreenSize[] = [
  'xsmall',
  'small',
  'medium',
  'large',
  'xlarge',
];

export const DESC_ORDER_SCREEN_SIZES: ScreenSize[] = ASC_ORDER_SCREEN_SIZES.slice(
  0,
).reverse();

export const LayoutContext = React.createContext<LayoutContextValue>({
  currentScreenSize: 'small',
  getResponsiveValue: values =>
    values.xsmall ||
    values.small ||
    values.medium ||
    values.large ||
    values.xlarge ||
    undefined,
});

export const useLayout = () => {
  return React.useContext(LayoutContext);
};

export interface LayoutProviderProps {
  debug?: boolean;
  children: React.ReactNode;
}

export const LayoutProvider = (props: LayoutProviderProps) => {
  const { children, debug = false } = props;
  const theme = useTheme();

  const [currentScreenSize, setCurrentScreenSize] = React.useState(
    getCurrentScreenSize(theme.layout),
  );

  const handleDimensionsChange = React.useCallback(() => {
    setCurrentScreenSize(getCurrentScreenSize(theme.layout));
  }, [theme.layout]);

  React.useLayoutEffect(() => {
    Dimensions.addEventListener('change', handleDimensionsChange);

    return () =>
      Dimensions.removeEventListener('change', handleDimensionsChange);
  }, [handleDimensionsChange]);

  return (
    <LayoutContext.Provider
      value={{
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
