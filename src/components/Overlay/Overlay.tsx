import dlv from 'dlv';
import React from 'react';
import {
  TouchableWithoutFeedback,
  View,
  ViewProps,
  ViewStyle,
} from 'react-native';

import { useTheme } from '../../theme';
import { getStyle, OverrideStyle, Style } from '../../utils/Overrides';

type OverlayColor = 'dark' | 'light';

export interface OverlayProps extends Omit<ViewProps, 'style'> {
  onPress?: () => void;

  /**
   * @default "dark"
   */
  color?: OverlayColor;

  /**
   * Style callback or ViewStyle object
   */
  style?: Style<OverlayProps, ViewStyle>;
}

export type OverlayOverride = OverrideStyle<OverlayProps, ViewStyle>;

export const Overlay = (props: OverlayProps) => {
  const {
    onPress = () => {
      return;
    },
    color = 'dark',
    style,
    ...viewProps
  } = props;
  const theme = useTheme();

  return (
    <TouchableWithoutFeedback
      onPress={event => {
        event.preventDefault();
        onPress();
      }}
    >
      <View
        style={[
          {
            backgroundColor:
              color === 'dark' ? 'rgba(0,0,0,0.3)' : 'rgba(255,255,255,0.3)',
            bottom: 0,
            height: '100%',
            left: 0,
            position: 'absolute',
            right: 0,
            top: 0,
            width: '100%',
          },
          getStyle(props, style),
          getStyle(props, dlv(theme, 'overrides.Overlay.style')),
        ]}
        {...viewProps}
      />
    </TouchableWithoutFeedback>
  );
};
