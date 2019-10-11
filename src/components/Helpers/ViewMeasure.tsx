import React from 'react';
import { View, ViewProps } from 'react-native';

import { Measurements, useMeasure } from '../../hooks/useMeasure';

export type ViewMeasureRenderProp = (props: Measurements) => JSX.Element;

export interface ViewMeasureProps extends ViewProps {
  onMeasure?: (props: Measurements) => void;
  children?: React.ReactNode | ViewMeasureRenderProp;
}

/**
 * Wraps content in a `View` with which the measurements are calculated
 */

export const ViewMeasure = (props: ViewMeasureProps) => {
  const { onMeasure, children, ...viewProps } = props;
  const isRenderProp = typeof children === 'function';
  const ref = React.useRef<View>(null);
  const { measurements, onLayout } = useMeasure({ onMeasure, ref });

  return (
    <View ref={ref} onLayout={onLayout} {...viewProps}>
      {/*
      //
      // @ts-ignore */}
      {isRenderProp ? children(measurements) : children}
    </View>
  );
};
