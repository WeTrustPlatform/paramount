import * as React from 'react';
import { Animated, View } from 'react-native';

export interface LoadingDotsProps {
  numberOfDots: number;
  duration: number;
  minOpacity: number;
  color: string;
  size: number;
}

/**
 * Ported from https://github.com/adorableio/react-native-animated-ellipsis
 */
export class LoadingDots extends React.Component<LoadingDotsProps> {
  public static defaultProps = {
    color: '#aaa',
    duration: 300,
    minOpacity: 0,
    numberOfDots: 3,
    size: 10,
  };

  public animationState: {
    dotOpacities: any[];
    shouldAnimate: boolean;
    targetOpacity: number;
  };

  constructor(props: LoadingDotsProps) {
    super(props);

    this.animationState = {
      dotOpacities: this.initializeDots(),
      shouldAnimate: true,
      targetOpacity: 1,
    };
  }

  public initializeDots() {
    const opacities = [];

    for (let i = 0; i < this.props.numberOfDots; i++) {
      const dot = new Animated.Value(this.props.minOpacity);
      opacities.push(dot);
    }

    return opacities;
  }

  public componentDidMount() {
    this.animateDots.bind(this)(0);
  }

  public componentWillUnmount() {
    this.animationState.shouldAnimate = false;
  }

  public animateDots(whichDot: number) {
    if (!this.animationState.shouldAnimate) return;

    // Swap fade direction when we hit end of list
    if (whichDot >= this.animationState.dotOpacities.length) {
      whichDot = 0;
      const min = this.props.minOpacity;
      this.animationState.targetOpacity =
        this.animationState.targetOpacity === min ? 1 : min;
    }

    const nextDot = whichDot + 1;

    Animated.timing(this.animationState.dotOpacities[whichDot], {
      duration: this.props.duration,
      toValue: this.animationState.targetOpacity,
    }).start(this.animateDots.bind(this, nextDot));
  }

  public render() {
    const { size, color } = this.props;

    const dots = this.animationState.dotOpacities.map((o, i) => (
      <Animated.View
        key={i}
        style={{
          backgroundColor: color,
          borderRadius: '50%',
          height: size,
          marginLeft: 3,
          marginRight: 3,
          opacity: o,
          width: size,
        }}
      />
    ));

    return (
      <View
        style={{
          alignItems: 'center',
          flexDirection: 'row',
          justifyContent: 'center',
        }}
      >
        {dots}
      </View>
    );
  }
}
