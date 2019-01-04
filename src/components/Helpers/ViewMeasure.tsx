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
  const { onMeasure, children, ...viewProps } = props;
  const isRenderProp = typeof children === 'function';

  return (
    <RefMeasure onMeasure={onMeasure}>
      {({ forwardRef, onLayout, measurements }) => {
        return (
          <View
            ref={forwardRef}
            onLayout={onLayout}
            // @ts-ignore
            children={isRenderProp ? children(measurements) : children}
            {...viewProps}
          />
        );
      }}
    </RefMeasure>
  );
};

export default ViewMeasure;
