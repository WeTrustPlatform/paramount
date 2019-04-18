import * as React from 'react';
import { View } from 'react-native';

import { Icon } from '../../icons';
import { useTheme } from '../../theme';
import { mergeStyles } from '../../utils/mergeStyles';
import { GetPickerButtonStylesProp } from './PickerButton';
import { getPickerButtonStyles, PickerButtonSize } from './PickerButton.styles';

export interface PickerButtonWrapperProps {
  getStyles?: GetPickerButtonStylesProp;
  size?: PickerButtonSize;
  children: React.ReactNode;
}

export const PickerButtonWrapper = (props: PickerButtonWrapperProps) => {
  const { getStyles, children, size = 'medium' } = props;
  const theme = useTheme();

  const { containerStyle, rightContainerStyle } = mergeStyles(
    getPickerButtonStyles,
    getStyles,
  )({ size }, theme);

  return (
    <View style={containerStyle}>
      {children}
      <View style={rightContainerStyle}>
        <Icon name="chevron-down" size={32} color={theme.colors.text.default} />
      </View>
    </View>
  );
};
