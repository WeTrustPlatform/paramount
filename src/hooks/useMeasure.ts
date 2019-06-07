import * as React from 'react';
import {
  Dimensions,
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
  ref: React.MutableRefObject<any>;
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
export const useMeasure = (props: UseMeasureProps) => {
  const { onMeasure, ref } = props;
  const [measurements, setMeasurements] = React.useState(initialMeasurements);

  const handleMeasure = React.useCallback(
    (layout?: LayoutRectangle) => {
      const handle = findNodeHandle(ref.current);
      const prevMeasurements = measurements;

      if (handle) {
        UIManager.measure(handle, (x, y, width, height, pageX, pageY) => {
          const newMeasurements = {
            ...prevMeasurements,
            ...layout,
            pageX,
            pageY,
          };

          setMeasurements(newMeasurements);

          if (onMeasure) onMeasure(newMeasurements);
        });
      }
    },
    [measurements],
  );

  const handleLayout = React.useCallback(
    (e: LayoutChangeEvent) => {
      // Use the value from here, isntead of inside UIManager.measure callback
      // Async behavior will nullify nativeEvent
      const layout = e.nativeEvent.layout;
      handleMeasure(layout);
    },
    [handleMeasure, measurements],
  );

  const handleResize = React.useCallback(() => {
    handleMeasure();
  }, [handleMeasure, measurements]);

  React.useEffect(() => {
    Dimensions.addEventListener('change', handleResize);

    return () => Dimensions.removeEventListener('change', handleResize);
  }, [measurements]);

  return {
    measurements,
    onLayout: handleLayout,
    onMeasure: handleMeasure,
  };
};
