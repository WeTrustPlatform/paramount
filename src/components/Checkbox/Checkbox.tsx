import * as React from 'react';
import { GestureResponderEvent, TouchableOpacity, View } from 'react-native';
import { DeepPartial } from 'ts-essentials';

import { ContainerShape, ControlSize, useTheme } from '../../theme';
import { mergeStyles, ReplaceReturnType } from '../../utils/mergeStyles';
import { Icon } from '../Icon';
import {
  CheckboxStyles,
  GetCheckboxStyles,
  getCheckboxStyles,
} from './Checkbox.styles';

export interface CheckboxProps {
  /**
   * The size of the checkbox.
   * @default "medium"
   */
  size?: ControlSize;

  /**
   * When true, will display as checked.
   * @default false
   */
  value: boolean;

  /**
   * When true, the checkbox is disabled.
   * @default false
   */
  isDisabled?: boolean;

  /**
   * When true, checkbox will be interactive.
   * @default true
   */
  isInteractive?: boolean;

  /** Label for screen readers */
  accessibilityLabel?: string;

  /**
   * Shape of the checkbox.
   * @default "rounded"
   */
  shape?: ContainerShape;

  /**
   * Called when checkbox is pressed.
   */
  onPress?: (e: GestureResponderEvent) => void;

  /** Callback to get element styles. */
  getStyles?: ReplaceReturnType<GetCheckboxStyles, DeepPartial<CheckboxStyles>>;

  /** Used to locate this view in end-to-end tests. */
  testID?: string;
}

export const Checkbox = (props: CheckboxProps) => {
  const {
    value = false,
    isDisabled = false,
    isInteractive = true,
    onPress,
    getStyles,
    testID,
    accessibilityLabel,
  } = props;

  const theme = useTheme();

  const { touchableStyle, checkboxStyle, checkColor } = mergeStyles(
    getCheckboxStyles,
    getStyles,
    theme.components.getCheckboxStyles,
  )(props, theme);

  return (
    <TouchableOpacity
      accessible={isInteractive}
      style={touchableStyle}
      disabled={isDisabled || !isInteractive}
      testID={testID}
      onPress={onPress}
      accessibilityLabel={accessibilityLabel}
    >
      <View style={checkboxStyle}>
        {value ? <Icon name="check" size={20} color={checkColor} /> : null}
      </View>
    </TouchableOpacity>
  );
};
