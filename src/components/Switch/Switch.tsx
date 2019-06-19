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
  isSwitchedOn?: boolean;
  isDisabled?: boolean;
  onChange?: (event: GestureResponderEvent) => void;
  onIcon?: React.ReactNode;
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
  } = mergeStyles(getSwitchStyles, getStyles, theme.components.getSwitchStyles)(
    {},
    theme,
  );

  const { backgroundColor, circleColor, circlePosition } = useSpring({
    config: springDefaultConfig,

    backgroundColor: isSwitchedOn ? backgroundColorOn : backgroundColorOff,
    circleColor: isSwitchedOn ? circleColorOn : circleColorOff,
    circlePosition: isSwitchedOn
      ? containerStyle.width - (circleStyle.width + containerStyle.padding * 2)
      : 0,
  });

  return (
    <TouchableOpacity
      onPress={onChange}
      activeOpacity={1}
      style={{
        alignSelf: 'flex-start',
        flexDirection: 'row',
        flexWrap: 'wrap',
      }}
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
