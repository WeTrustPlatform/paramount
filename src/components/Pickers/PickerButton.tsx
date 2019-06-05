import * as React from 'react';
import {
  AccessibilityProps,
  GestureResponderEvent,
  TouchableOpacity,
} from 'react-native';
import { DeepPartial } from 'ts-essentials';

import { ControlSize, useTheme } from '../../theme';
import { mergeStyles, ReplaceReturnType } from '../../utils/mergeStyles';
import { Text } from '../Typography';
import {
  GetPickerButtonStyles,
  getPickerButtonStyles,
  PickerButtonStyles,
} from './PickerButton.styles';
import { PickerButtonWrapper } from './PickerButtonWrapper';

export type PickerButtonGetStylesProp = ReplaceReturnType<
  GetPickerButtonStyles,
  DeepPartial<PickerButtonStyles>
>;

export interface PickerButtonProps extends AccessibilityProps {
  title?: string | null;
  onPress?: (event: GestureResponderEvent) => void;
  size?: ControlSize;
  getStyles?: PickerButtonGetStylesProp;
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
