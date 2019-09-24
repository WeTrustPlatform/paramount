import * as React from 'react';
import {
  AccessibilityProps,
  GestureResponderEvent,
  TouchableOpacity,
} from 'react-native';

import { ControlSize, useTheme } from '../../theme';
import { mergeStyles } from '../../utils/mergeStyles';
import { Text } from '../Typography';
import {
  GetPickerButtonStyles,
  getPickerButtonStyles,
} from './PickerButton.styles';
import { PickerButtonWrapper } from './PickerButtonWrapper';

export interface PickerButtonProps extends AccessibilityProps {
  title?: string | null;
  onPress?: (event: GestureResponderEvent) => void;
  size?: ControlSize | number;
  getStyles?: GetPickerButtonStyles;
}

export const PickerButton = (props: PickerButtonProps) => {
  const {
    getStyles,
    onPress,
    size = 'medium',
    title,
    ...accessibilityProps
  } = props;
  const theme = useTheme();

  const { pickerStyle, itemStyle } = mergeStyles(
    getPickerButtonStyles,
    getStyles,
    theme.components.getPickerButtonStyles,
  )({ size }, theme);

  return (
    <PickerButtonWrapper>
      <TouchableOpacity
        style={[{ justifyContent: 'center' }, pickerStyle]}
        onPress={onPress}
        {...accessibilityProps}
      >
        <Text style={itemStyle}>{title}</Text>
      </TouchableOpacity>
    </PickerButtonWrapper>
  );
};
