import * as React from 'react';
import { View, ViewProps } from 'react-native';

import { Measurements, useMeasure } from './useMeasure';

export type ViewMeasureRenderPropType = (
  props: Measurements,
) => React.ReactNode;

export interface ViewMeasureProps extends ViewProps {
  onMeasure?: (props: Measurements) => void;
  children: React.ReactNode | ViewMeasureRenderPropType;
}

/**
 * Wraps content in a `View` with which the measurements are calculated
 */

export const ViewMeasure = (props: ViewMeasureProps) => {
  const { onMeasure, children, ...viewProps } = props;
  const isRenderProp = typeof children === 'function';
  const { forwardRef, onLayout } = useMeasure({ onMeasure });

  return (
    <View
      ref={forwardRef}
      onLayout={onLayout}
      // @ts-ignore
      children={isRenderProp ? children(measurements) : children}
      {...viewProps}
    />
  );
};
