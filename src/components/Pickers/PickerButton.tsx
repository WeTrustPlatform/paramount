import * as React from 'react';
import {
  AccessibilityProps,
  GestureResponderEvent,
  TouchableOpacity,
} from 'react-native';
import { DeepPartial } from 'ts-essentials';

import { ThemeContext } from '../../theme';
import { mergeStyles, ReplaceReturnType } from '../../utils/mergeStyles';
import { Text } from '../Typography';
import {
  GetPickerButtonStyles,
  getPickerButtonStyles,
  PickerButtonSize,
} from './PickerButton.styles';
import PickerButtonWrapper from './PickerButtonWrapper';

export type GetPickerButtonStylesProp = ReplaceReturnType<
  GetPickerButtonStyles,
  DeepPartial<PickerButtonStyles>
>;

export interface PickerButtonStyles extends AccessibilityProps {
  title?: string | null;
  onPress?: (event: GestureResponderEvent) => void;
  size?: PickerButtonSize;
  getStyles?: GetPickerButtonStylesProp;
}

const PickerButtonBase = (props: PickerButtonStyles) => {
  const {
    getStyles,
    onPress,
    size = 'medium',
    title,
    ...accessibilityProps
  } = props;
  const theme = React.useContext(ThemeContext);

  const { pickerStyle, itemStyle } = mergeStyles(
    getPickerButtonStyles,
    getStyles,
  )({ size }, theme);

  return (
    <PickerButtonWrapper getStyles={getStyles}>
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

export const PickerButton = PickerButtonBase;

export default PickerButton;
