import * as React from 'react';
import { findNodeHandle, UIManager, View, ViewProps } from 'react-native';
import { Measurements } from './Measurements';

export type RenderPropType = (props: Measurements) => React.ReactNode;

export interface ViewMeasureProps extends ViewProps {
  onMeasure?: (props: Measurements) => void;
  children: React.ReactNode | RenderPropType;
}

/**
 * Wraps content in a `View` with which the measurements are calculated
 */
class ViewMeasure extends React.Component<ViewMeasureProps, Measurements> {
  private container: React.RefObject<View>;

  constructor(props: ViewMeasureProps) {
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
              const viewMeasurements = {
                ...layout,
                pageX,
                pageY,
              };
              onMeasure(viewMeasurements);

              if (isRenderProp) {
                this.setState(() => viewMeasurements);
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

export default ViewMeasure;
