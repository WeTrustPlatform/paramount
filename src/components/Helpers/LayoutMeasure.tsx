import * as React from 'react';
import { findNodeHandle, UIManager, View, ViewProps } from 'react-native';

export interface LayoutMeasureProps extends ViewProps {
  onMeasure?: (props: LayoutMeasurements) => void;
}

export interface LayoutMeasurements {
  height: number;
  pageX: number;
  pageY: number;
  width: number;
  x: number;
  y: number;
}

class LayoutMeasure extends React.Component<
  LayoutMeasureProps,
  LayoutMeasurements
> {
  private container: React.RefObject<View>;

  constructor(props: LayoutMeasureProps) {
    super(props);
    this.container = React.createRef();
  }

  public render() {
    const { onMeasure = () => null, ...viewProps } = this.props;

    return (
      <View
        ref={this.container}
        onLayout={e => {
          UIManager.measure(
            findNodeHandle(this.container.current)!,
            (x, y, width, height, pageX, pageY) =>
              onMeasure({
                ...e.nativeEvent.layout,
                pageX,
                pageY,
              }),
          );
        }}
        {...viewProps}
      />
    );
  }
}

export default LayoutMeasure;
