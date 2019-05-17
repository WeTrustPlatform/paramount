import * as React from 'react';
import {
  findNodeHandle,
  LayoutChangeEvent,
  LayoutRectangle,
  UIManager,
} from 'react-native';

export interface Measurements {
  height: number;
  pageX: number;
  pageY: number;
  width: number;
  x: number;
  y: number;
}
export interface UseMeasureProps {
  onMeasure?: (props: Measurements) => void;
}

export const initialMeasurements = {
  height: 0,
  pageX: 0,
  pageY: 0,
  width: 0,
  x: 0,
  y: 0,
};

/**
 * A render prop to measure given node by passing `onLayout` and `ref` handlers. This differs from `ViewMeasure` in that it does not create any node in the tree
 */
export const useMeasure = (props: UseMeasureProps = {}) => {
  const forwardRef = React.createRef<any>();
  const { onMeasure } = props;
  const [measurements, setMeasurements] = React.useState(initialMeasurements);

  const handleLayout = (e: LayoutChangeEvent) => {
    // Use the value from here, isntead of inside UIManager.measure callback
    // Async behavior will nullify nativeEvent
    const layout = e.nativeEvent.layout;
    handleMeasure(layout);
  };

  const handleMeasure = (layout?: LayoutRectangle) => {
    UIManager.measure(
      // @ts-ignore
      findNodeHandle(forwardRef.current)!,
      (x, y, width, height, pageX, pageY) => {
        const newMeasurements = {
          ...measurements,
          ...layout,
          pageX,
          pageY,
        };

        setMeasurements(newMeasurements);

        if (onMeasure) {
          onMeasure(newMeasurements);
        }
      },
    );
  };

  return {
    forwardRef,
    measurements,
    onLayout: handleLayout,
    onMeasure: handleMeasure,
  };
};
