import * as React from 'react';
import {
  AccessibilityProps,
  GestureResponderEvent,
  TouchableHighlight,
  View,
} from 'react-native';
import { DeepPartial } from 'ts-essentials';

import { Icon } from '../../icons';
import { ControlSize, useTheme } from '../../theme';
import { mergeStyles, ReplaceReturnType } from '../../utils/mergeStyles';
import { Text } from '../Typography';
import {
  CheckboxStyles,
  GetCheckboxStyles,
  getCheckboxStyles,
} from './Checkbox.styles';

export type CheckboxShape = 'circle' | 'square';
export type CheckboxLabelPosition = 'left' | 'right';

export interface CheckboxProps extends AccessibilityProps {
  isChecked?: boolean;
  isDisabled?: boolean;
  /** Sometimes we just want the display of the checkbox  */
  isInteractive?: boolean;
  /** @default square */
  shape?: CheckboxShape;
  onChange?: (e: GestureResponderEvent) => void | undefined;
  getStyles?: ReplaceReturnType<GetCheckboxStyles, DeepPartial<CheckboxStyles>>;
  testID?: string;
  checkColor?: string;
  label?: string;
  size?: ControlSize;
  labelPosition?: 'left' | 'right';
}

export const Checkbox = (props: CheckboxProps) => {
  const {
    isChecked = false,
    isDisabled = false,
    isInteractive = true,
    onChange = () => null,
    shape = 'square',
    labelPosition = 'right',
    size = 'medium',
    label,
    checkColor,
    getStyles,
    testID,
    ...accessibilityProps
  } = props;

  const theme = useTheme();

  const {
    touchableStyle,
    outerWrapperStyle,
    checkboxStyle,
    textStyle,
    iconColor,
    checkboxFocusBackgroundColor,
  } = mergeStyles(getCheckboxStyles, getStyles)(
    {
      checkColor,
      hasLabel: !!label,
      isChecked,
      isDisabled,
      labelPosition,
      shape,
      size,
    },
    theme,
  );

  return (
    <TouchableHighlight
      accessible={isInteractive}
      style={touchableStyle}
      underlayColor={checkboxFocusBackgroundColor}
      {...(isInteractive
        ? {
            disabled: isDisabled,
            onPress: onChange,
          }
        : {
            disabled: true,
          })}
      testID={testID}
      {...accessibilityProps}
    >
      <View style={outerWrapperStyle}>
        {labelPosition === 'left' && (
          <Text size={size} getStyles={() => ({ textStyle })}>
            {label}
          </Text>
        )}

        <View style={checkboxStyle}>
          {isChecked ? <Icon name="check" size={20} color={iconColor} /> : null}
        </View>

        {labelPosition === 'right' && (
          <Text size={size} getStyles={() => ({ textStyle })}>
            {label}
          </Text>
        )}
      </View>
    </TouchableHighlight>
  );
};
