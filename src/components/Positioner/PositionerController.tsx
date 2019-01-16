import * as React from 'react';
import { LayoutChangeEvent } from 'react-native';
import { Toggle } from 'react-powerplug';

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
  const { children } = props;

  return (
    <Toggle>
      {({ set, on }) => (
        <RefMeasure>
          {({ forwardRef, measurements, onLayout, measure }) => {
            return children({
              closePositioner: () => set(false),
              isPositionerVisible: on,
              onTargetLayout: onLayout,
              openPositioner: () => {
                measure();
                set(true);
              },
              setTarget: forwardRef,
              targetMeasurements: measurements,
            });
          }}
        </RefMeasure>
      )}
    </Toggle>
  );
};

export default PositionerController;
