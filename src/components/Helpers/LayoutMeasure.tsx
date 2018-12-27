import * as React from 'react';
import { findNodeHandle, UIManager, View, ViewProps } from 'react-native';

export type RenderPropType = (props: LayoutMeasurements) => React.ReactNode;

export interface LayoutMeasureProps extends ViewProps {
  onMeasure?: (props: LayoutMeasurements) => void;
  children: React.ReactNode | RenderPropType;
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

    this.state = {
      height: 0,
      pageX: 0,
      pageY: 0,
      width: 0,
      x: 0,
      y: 0,
    };
  }

  public render() {
    const { onMeasure = () => null, children, ...viewProps } = this.props;

    const isRenderProp = typeof children === 'function';

    return (
      <View
        ref={this.container}
        onLayout={e => {
          // Use the value from here, isntead of inside UIManager.measure callback
          // Async behavior will nullify nativeEvent
          const layout = e.nativeEvent.layout;

          UIManager.measure(
            findNodeHandle(this.container.current)!,
            (x, y, width, height, pageX, pageY) => {
              const layoutMeasurements = {
                ...layout,
                pageX,
                pageY,
              };

              onMeasure(layoutMeasurements);

              if (isRenderProp) {
                this.setState(() => layoutMeasurements);
              }
            },
          );
        }}
        // @ts-ignore
        children={isRenderProp ? children(this.state) : children}
        {...viewProps}
      />
    );
  }
}

export default LayoutMeasure;
