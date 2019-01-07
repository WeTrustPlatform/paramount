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

export interface RefMeasureChildrenProps {
  measurements: Measurements;
  forwardRef: React.RefObject<any>;
  onLayout: (e: LayoutChangeEvent) => void;
  measure: (layout?: LayoutRectangle) => void;
}
export type RefMeasureRenderPropType = (
  props: RefMeasureChildrenProps,
) => React.ReactNode;

export interface RefMeasureProps {
  onMeasure?: (props: Measurements) => void;
  children: RefMeasureRenderPropType;
}

/**
 * A render prop to measure given node by passing `onLayout` and `ref` handlers. This differs from `ViewMeasure` in that it does not create any node in the tree
 */
class RefMeasure extends React.Component<RefMeasureProps, Measurements> {
  public container: React.RefObject<any>;

  constructor(props: RefMeasureProps) {
    super(props);
    this.container = React.createRef();

    this.state = {
      height: 0,
      pageX: 0,
      pageY: 0,
      width: 0,
      x: 0,
      y: 0,
    };
  }

  public handleLayout = (e: LayoutChangeEvent) => {
    // Use the value from here, isntead of inside UIManager.measure callback
    // Async behavior will nullify nativeEvent
    const layout = e.nativeEvent.layout;
    this.handleMeasure(layout);
  };

  public handleMeasure = (layout?: LayoutRectangle) => {
    const { onMeasure } = this.props;

    UIManager.measure(
      findNodeHandle(this.container.current)!,
      (x, y, width, height, pageX, pageY) => {
        const nodeMeasurements = {
          ...this.state,
          ...layout,
          pageX,
          pageY,
        };

        this.setState(() => nodeMeasurements);

        if (onMeasure) {
          onMeasure(nodeMeasurements);
        }
      },
    );
  };

  public render() {
    const { children } = this.props;
    const measurements = this.state;

    return children({
      forwardRef: this.container,
      measure: this.handleMeasure,
      measurements,
      onLayout: this.handleLayout,
    });
  }
}

export default RefMeasure;
