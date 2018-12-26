import * as React from 'react';
import { Animated, Easing, View } from 'react-native';

import { Intent } from '../../constants/Intent';
import { Theme, withTheme } from '../../theme';
import { Text } from '../Typography';

// Animation taken from https://medium.com/@norbajunior/react-native-facebook-and-instagram-like-top-bar-notifications-with-animated-api-43c48d0443dd
export type ToastId = string;

export interface ToastSettings {
  id?: ToastId;
  title?: string;
  description?: string;
  duration?: number;
  /* custom component, will take precedence over title and description */
  component?: React.ReactNode;
  /* will override */
  intent?: Intent;
}

export interface ToastInstance extends ToastSettings {
  id: ToastId;
  onRemove: () => void;
}

export interface ToastProps extends ToastInstance {
  theme: Theme;
}

export interface ToastState {
  offset: Animated.Value;
}

class ToastBase extends React.Component<ToastProps, ToastState> {
  public closeTimer: number | null = null;

  constructor(props: ToastProps) {
    super(props);

    this.state = { offset: new Animated.Value(-100) };
  }

  public componentDidMount() {
    const { onRemove, duration } = this.props;
    const { offset } = this.state;

    Animated.sequence([
      Animated.spring(offset, {
        tension: -5,
        toValue: 0,
      }),
      Animated.timing(offset, {
        duration,
        easing: Easing.ease,
        toValue: -100,
      }),
    ]).start(() => onRemove());
  }

  public render() {
    const {
      theme,
      component,
      title,
      description,
      intent = 'info',
    } = this.props;

    const { toastStyle, textStyle } = theme.getToastStyles(intent);

    return (
      <Animated.View
        style={{
          transform: [{ translateY: this.state.offset }],
        }}
      >
        {component || (
          <View style={toastStyle}>
            <Text dangerouslySetInlineStyle={{ textStyle }} size="large">
              {title}
            </Text>
            <Text dangerouslySetInlineStyle={{ textStyle }}>{description}</Text>
          </View>
        )}
      </Animated.View>
    );
  }
}

export const Toast = withTheme(ToastBase);
export default Toast;
