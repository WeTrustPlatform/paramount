import * as React from 'react';
import { View } from 'react-native';

import { ControlSize, useTheme } from '../../theme';
import { mergeStyles } from '../../utils/mergeStyles';
import { Icon } from '../Icon';
import { PickerButtonGetStylesProp } from './PickerButton';
import { getPickerButtonStyles } from './PickerButton.styles';

export interface PickerButtonWrapperProps {
  /**
   * The size of the picker.
   * @default "medium"
   */
  size?: ControlSize | number;

  /**
   * Callback to get element styles.
   */
  getStyles?: PickerButtonGetStylesProp;

  /**
   * Content of the wrapper
   */
  children?: React.ReactNode;
}

export const PickerButtonWrapper = (props: PickerButtonWrapperProps) => {
  const { getStyles, children } = props;
  const theme = useTheme();

  const { containerStyle, rightContainerStyle } = mergeStyles(
    getPickerButtonStyles,
    getStyles,
    theme.components.getPickerButtonStyles,
  )(props, theme);

  return (
    <View style={containerStyle}>
      {children}
      <View style={rightContainerStyle}>
        <Icon
          name="chevron-down"
          size="large"
          color={theme.colors.text.default}
        />
      </View>
    </View>
  );
};
