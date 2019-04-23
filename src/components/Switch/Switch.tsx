import * as React from 'react';
import {
  AccessibilityProps,
  GestureResponderEvent,
  TouchableOpacity,
  View,
} from 'react-native';
import { animated, useSpring } from 'react-spring/native';
import { DeepPartial } from 'ts-essentials';

import { Icon } from '../../icons';
import { useTheme } from '../../theme';
import { mergeStyles, ReplaceReturnType } from '../../utils/mergeStyles';
import {
  GetSwitchStyles,
  getSwitchStyles,
  SwitchStyles,
} from './Switch.styles';

const AnimatedView = animated(View);

export interface SwitchProps extends AccessibilityProps {
  isSwitchedOn?: boolean;
  isDisabled?: boolean;
  onChange?: (event: GestureResponderEvent) => void;
  onIcon?: React.ReactNode;
  offIcon?: React.ReactNode;
  testID?: string;
  /**
   * Inline styles for components
   */
  getStyles?: ReplaceReturnType<GetSwitchStyles, DeepPartial<SwitchStyles>>;
}

export const Switch = (props: SwitchProps) => {
  const {
    onIcon,
    offIcon,
    onChange,
    isSwitchedOn,
    getStyles,
    testID,
    ...accessibilityProps
  } = props;
  const theme = useTheme();
  const {
    circleStyle,
    containerStyle,
    backgroundColorOff,
    backgroundColorOn,
    circleColorOff,
    circleColorOn,
  } = mergeStyles(getSwitchStyles, getStyles)(theme);

  const { backgroundColor, circleColor, circlePosition } = useSpring({
    backgroundColor: isSwitchedOn ? backgroundColorOn : backgroundColorOff,
    circleColor: isSwitchedOn ? circleColorOn : circleColorOff,
    circlePosition: isSwitchedOn
      ? containerStyle.width - (circleStyle.width + containerStyle.padding * 2)
      : 0,
  });

  return (
    <TouchableOpacity
      accessible
      accessibilityLabel="switch"
      onPress={onChange}
      activeOpacity={1}
      style={{
        alignSelf: 'flex-start',
        flexDirection: 'row',
        flexWrap: 'wrap',
      }}
      testID={testID}
      {...accessibilityProps}
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
          {isSwitchedOn
            ? onIcon || (
                <Icon
                  name="check"
                  size={20}
                  color={theme.colors.text.primary}
                />
              )
            : offIcon || (
                <Icon name="x" size={20} color={theme.colors.text.default} />
              )}
        </AnimatedView>
      </AnimatedView>
    </TouchableOpacity>
  );
};
