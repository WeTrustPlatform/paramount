import * as React from 'react';
import { LayoutChangeEvent } from 'react-native';
import { Toggle } from 'react-powerplug';

import { Measurements, RefMeasure } from '../Helpers';

export interface PopoverControllerRenderProps {
  openPopover: () => void;
  closePopover: () => void;
  isPopoverVisible: boolean;
  setTarget: React.RefObject<any>;
  onTargetLayout: (e: LayoutChangeEvent) => void;
  targetMeasurements: Measurements;
}

export interface PopoverControllerProps {
  children: (props: PopoverControllerRenderProps) => React.ReactNode;
}

export const PopoverController = (props: PopoverControllerProps) => {
  const { children } = props;

  return (
    <Toggle>
      {({ set, on }) => (
        <RefMeasure>
          {({ forwardRef, measurements, onLayout, measure }) => {
            return children({
              closePopover: () => set(false),
              isPopoverVisible: on,
              onTargetLayout: onLayout,
              openPopover: () => {
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

export default PopoverController;
