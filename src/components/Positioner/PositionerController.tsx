import * as React from 'react';
import { LayoutChangeEvent } from 'react-native';

import { Measurements, RefMeasure } from '../Helpers';

export interface PositionerControllerRenderProps {
  openPositioner: () => void;
  closePositioner: () => void;
  isPositionerVisible: boolean;
  setTarget: React.RefObject<any>;
  onTargetLayout: (e: LayoutChangeEvent) => void;
  targetMeasurements: Measurements;
}

export interface PositionerControllerProps {
  children: (props: PositionerControllerRenderProps) => React.ReactNode;
}

export const PositionerController = (props: PositionerControllerProps) => {
  const [isPositionerVisible, setIsPositionerVisible] = React.useState(false);
  const { children } = props;

  return (
    <RefMeasure>
      {({ forwardRef, measurements, onLayout, measure }) => {
        return children({
          closePositioner: () => setIsPositionerVisible(false),
          isPositionerVisible,
          onTargetLayout: onLayout,
          openPositioner: () => {
            measure();
            setIsPositionerVisible(true);
          },
          setTarget: forwardRef,
          targetMeasurements: measurements,
        });
      }}
    </RefMeasure>
  );
};
