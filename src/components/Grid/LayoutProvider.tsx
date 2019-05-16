import * as merge from 'deepmerge';
import * as React from 'react';
import { Dimensions } from 'react-native';

import {
  Breakpoint,
  DESC_ORDER_BREAKPOINTS,
  LayoutContext,
  LayoutInterface,
} from './LayoutContext';

export interface LayoutProviderProps {
  children: React.ReactNode;
  layout?: Partial<LayoutInterface>;
}

export const getCurrentBreakpoint = (layout: LayoutInterface) => {
  const { breakpoints } = layout;
  const windowScaledSize = Dimensions.get('window');

  const currentBreakpoint = DESC_ORDER_BREAKPOINTS.find(breakpoint => {
    if (breakpoint === 'xsmall' && windowScaledSize.width < breakpoints.small) {
      return true;
    }

    const width = breakpoints[breakpoint as Breakpoint];
    if (windowScaledSize.width >= width) return true;

    return false;
  });

  return currentBreakpoint || 'xsmall';
};

export const LayoutProvider = (props: LayoutProviderProps) => {
  const { children, layout: layoutProps } = props;
  const layoutContext = React.useContext(LayoutContext);
  const layout = layoutProps
    ? merge(layoutContext, layoutProps)
    : layoutContext;

  const [currentBreakpoint, setCurrentBreakPoint] = React.useState(
    getCurrentBreakpoint(layout),
  );

  const handleDimensionsChange = React.useCallback(() => {
    setCurrentBreakPoint(getCurrentBreakpoint(layout));
  }, []);

  React.useLayoutEffect(() => {
    Dimensions.addEventListener('change', handleDimensionsChange);

    return () =>
      Dimensions.removeEventListener('change', handleDimensionsChange);
  }, []);

  return (
    <LayoutContext.Provider value={{ ...layout, currentBreakpoint }}>
      {children}
    </LayoutContext.Provider>
  );
};
