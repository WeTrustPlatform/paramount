import * as React from 'react';
import { View, ViewProps } from 'react-native';

import RefMeasure, { Measurements } from './RefMeasure';

export type RenderPropType = (props: Measurements) => React.ReactNode;

export interface ViewMeasureProps extends ViewProps {
  onMeasure?: (props: Measurements) => void;
  children: React.ReactNode | RenderPropType;
}

/**
 * Wraps content in a `View` with which the measurements are calculated
 */

const ViewMeasure = (props: ViewMeasureProps) => {
  const { onMeasure, children } = props;
  const isRenderProp = typeof children === 'function';

  return (
    <RefMeasure>
      {({ forwardRef, onLayout, measurements }) => {
        if (onMeasure) {
          onMeasure(measurements);
        }

        return (
          <View
            ref={forwardRef}
            onLayout={onLayout}
            // @ts-ignore
            children={isRenderProp ? children(measurements) : children}
          />
        );
      }}
    </RefMeasure>
  );
};

export default ViewMeasure;
