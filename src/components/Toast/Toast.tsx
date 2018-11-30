// Animation taken from https://medium.com/@norbajunior/react-native-facebook-and-instagram-like-top-bar-notifications-with-animated-api-43c48d0443dd
import * as React from 'react';
import { Animated, Easing } from 'react-native';

import { IntentType } from '../../constants/Intent';
import { ITheme, withTheme } from '../../theme';
import { Box } from '../Layout';
import { Text } from '../Typography';

export type ToastId = string;

export interface IToastSettings {
  id?: ToastId;
  title?: string;
  description?: string;
  duration?: number;
  /* custom component, will take precedence over title and description */
  component?: React.ReactNode;
  /* will override */
  intent?: IntentType;
}

export interface IToast extends IToastSettings {
  id: ToastId;
  onRemove: () => void;
}

export interface IToastProps extends IToast {
  theme: ITheme;
}

export interface IToastState {
  offset: Animated.Value;
}

class ToastWithoutTheme extends React.Component<IToastProps, IToastState> {
  public closeTimer: number | null = null;

  constructor(props: IToastProps) {
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
          <Box {...toastStyle}>
            <Text
              dangerouslySetInlineStyle={{ __style: textStyle }}
              size="large"
            >
              {title}
            </Text>
            <Text dangerouslySetInlineStyle={{ __style: textStyle }}>
              {description}
            </Text>
          </Box>
        )}
      </Animated.View>
    );
  }
}

export const Toast = withTheme(ToastWithoutTheme);
export default Toast;
