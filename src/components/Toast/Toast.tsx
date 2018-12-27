import * as React from 'react';
import { Animated, View } from 'react-native';

import { Intent } from '../../constants/Intent';
import { Theme, withTheme } from '../../theme';
import { Text } from '../Typography';

// Animation taken from https://medium.com/@norbajunior/react-native-facebook-and-instagram-like-top-bar-notifications-with-animated-api-43c48d0443dd
export type ToastId = string;

export interface ToastSettings {
  id?: ToastId;
  title?: string;
  description?: string;
  offset?: number;
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
  value: Animated.Value;
}

const DEFAULT_VALUE = 500;

class ToastBase extends React.Component<ToastProps, ToastState> {
  public closeTimer: number | null = null;

  constructor(props: ToastProps) {
    super(props);

    this.state = {
      value: new Animated.Value(-DEFAULT_VALUE),
    };
  }

  public componentDidMount() {
    const { onRemove, offset = 100 } = this.props;
    const { value } = this.state;

    Animated.sequence([
      Animated.spring(value, {
        bounciness: 12,
        speed: 25,
        toValue: offset,
      }),
      Animated.spring(value, {
        bounciness: 12,
        speed: 25,
        toValue: -DEFAULT_VALUE,
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
          transform: [{ translateY: this.state.value }],
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
