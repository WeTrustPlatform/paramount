import * as React from 'react';
import { Animated } from 'react-native';
import { Omit } from 'ts-essentials';

import { Theme, withTheme } from '../../theme';
import { Alert, AlertProps } from '../Alert';

// Animation taken from https://medium.com/@norbajunior/react-native-facebook-and-instagram-like-top-bar-notifications-with-animated-api-43c48d0443dd
export type ToastId = string;

export interface ToastSettings extends Omit<AlertProps, 'onClose'> {
  id?: ToastId;
  offset?: number;
  /* duration for how long the toast should stay active */
  duration?: number;
  /* custom component, will override every other setting */
  component?: React.ReactNode;
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
    const { onRemove, duration = 3000, offset = 16 } = this.props;
    const { value } = this.state;

    Animated.sequence([
      Animated.spring(value, {
        bounciness: 8,
        speed: 25,
        toValue: offset,
      }),
      Animated.delay(duration),
      Animated.spring(value, {
        bounciness: 8,
        speed: 25,
        toValue: -DEFAULT_VALUE,
      }),
    ]).start(() => onRemove());
  }

  public render() {
    const {
      component,
      offset,
      duration,
      id,
      onRemove,
      ...toastSettings
    } = this.props;

    return (
      <Animated.View
        style={{
          transform: [{ translateY: this.state.value }],
        }}
      >
        {component || <Alert {...toastSettings} onClose={onRemove} />}
      </Animated.View>
    );
  }
}

export const Toast = withTheme(ToastBase);
