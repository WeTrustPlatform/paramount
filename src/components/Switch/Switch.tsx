import * as React from 'react';
import { GestureResponderEvent, TouchableOpacity, View } from 'react-native';
import { animated, useSpring } from 'react-spring/native.cjs';
import { DeepPartial } from 'ts-essentials';

import { springDefaultConfig } from '../../constants/Animation';
import { useTheme } from '../../theme';
import { mergeStyles, ReplaceReturnType } from '../../utils/mergeStyles';
import { Icon } from '../Icon';
import {
  GetSwitchStyles,
  getSwitchStyles,
  SwitchStyles,
} from './Switch.styles';

const AnimatedView = animated(View);

export interface SwitchProps {
  /**
   * When true, will display as switched on.
   * @default false
   */
  value?: boolean;

  /**
   * When true, the switch is disabled.
   * @default false
   */
  isDisabled?: boolean;

  /**
   * Called when checkbox is pressed.
   */
  onPress?: (event: GestureResponderEvent) => void;

  /**
   * Replace the icon when switch is on
   */
  onIcon?: React.ReactNode;

  /**
   * Replace the icon when switch is off
   */
  offIcon?: React.ReactNode;

  /** Label for screen readers */
  accessibilityLabel?: string;

  /** Hint for screen readers */
  accessibilityHint?: string;

  /**
   * When true, indicates that the view is an accessibility element.
   * @default true
   */
  accessible?: boolean;

  /** Used to locate this view in end-to-end tests. */
  testID?: string;

  /** Callback to get element styles. */
  getStyles?: ReplaceReturnType<GetSwitchStyles, DeepPartial<SwitchStyles>>;
}

export const Switch = (props: SwitchProps) => {
  const {
    onIcon,
    offIcon,
    onPress,
    value = false,
    isDisabled = false,
    getStyles,
    testID,
    accessibilityHint,
    accessibilityLabel,
    accessible = true,
  } = props;
  const theme = useTheme();
  const {
    circleStyle,
    containerStyle,
    backgroundColorOff,
    backgroundColorOn,
    circleColorOff,
    circleColorOn,
    touchableStyle,
  } = mergeStyles(getSwitchStyles, getStyles, theme.components.getSwitchStyles)(
    props,
    theme,
  );

  const { backgroundColor, circleColor, circlePosition } = useSpring({
    config: springDefaultConfig,

    backgroundColor: value ? backgroundColorOn : backgroundColorOff,
    circleColor: value ? circleColorOn : circleColorOff,
    circlePosition: value
      ? containerStyle.width - (circleStyle.width + containerStyle.padding * 2)
      : 0,
  });

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={1}
      style={touchableStyle}
      disabled={isDisabled}
      testID={testID}
      accessibilityHint={accessibilityHint}
      accessibilityLabel={accessibilityLabel}
      accessible={accessible}
    >
      {/*
      // @ts-ignore */}
      <AnimatedView style={[containerStyle, { backgroundColor }]}>
        <AnimatedView
          // @ts-ignore
          style={[
            circleStyle,
            { backgroundColor: circleColor },
            { transform: [{ translateX: circlePosition }] },
          ]}
        >
          {value
            ? onIcon || (
                <Icon
                  name="check"
                  size="xsmall"
                  color={
                    isDisabled
                      ? theme.colors.text.white
                      : theme.colors.text.primary
                  }
                />
              )
            : offIcon || (
                <Icon
                  name="x"
                  size="xsmall"
                  color={
                    isDisabled
                      ? theme.colors.text.white
                      : theme.colors.text.default
                  }
                />
              )}
        </AnimatedView>
      </AnimatedView>
    </TouchableOpacity>
  );
};
