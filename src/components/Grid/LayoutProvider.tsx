import deepmerge from 'deepmerge';
import * as React from 'react';
import { Dimensions } from 'react-native';

import {
  DESC_ORDER_LAYOUT_SIZES,
  LayoutContext,
  LayoutInterface,
} from './LayoutContext';

export interface LayoutProviderProps {
  children: React.ReactNode;
  value?: Partial<LayoutInterface>;
}

export const getCurrentSize = (layout: LayoutInterface) => {
  const { breakpoints } = layout;
  const windowScaledSize = Dimensions.get('window');

  const currentSize = DESC_ORDER_LAYOUT_SIZES.find(layoutSize => {
    if (layoutSize === 'xsmall') {
      return windowScaledSize.width < breakpoints.small;
    }

    const width = breakpoints[layoutSize];
    if (windowScaledSize.width >= width) return true;

    return false;
  });

  return currentSize || 'xsmall';
};

export const LayoutProvider = (props: LayoutProviderProps) => {
  const { children, value } = props;
  const layoutContext = React.useContext(LayoutContext);
  const layout = value ? deepmerge(layoutContext, value) : layoutContext;

  const [currentSize, setCurrentSize] = React.useState(getCurrentSize(layout));

  const handleDimensionsChange = React.useCallback(() => {
    setCurrentSize(getCurrentSize(layout));
  }, []);

  React.useLayoutEffect(() => {
    Dimensions.addEventListener('change', handleDimensionsChange);

    return () =>
      Dimensions.removeEventListener('change', handleDimensionsChange);
  }, []);

  return (
    <LayoutContext.Provider value={{ ...layout, currentSize }}>
      {children}
    </LayoutContext.Provider>
  );
};
