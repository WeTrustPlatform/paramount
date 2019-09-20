import { ViewStyle } from 'react-native';

import { Theme } from '../../theme/Theme';
import { isControlSize } from '../../utils/isControlSize';
import { PickerButtonWrapperProps } from './PickerButtonWrapper';

export interface PickerButtonStyles {
  containerStyle: ViewStyle;
  rightContainerStyle: ViewStyle;
  pickerStyle: ViewStyle;
  itemStyle: any;
}

export type GetPickerButtonStyles = (
  props: PickerButtonWrapperProps,
  theme: Theme,
) => PickerButtonStyles;

export const getPickerButtonStyles: GetPickerButtonStyles = (
  { size = 'medium' },
  theme,
) => {
  const controlSizeStyles = isControlSize(size)
    ? {
        small: {
          borderRadius: theme.controlBorderRadius.small,
          height: theme.controlHeights.small,
          paddingLeft: theme.controlPaddings.small,
          paddingRight: 40,
        },

        medium: {
          borderRadius: theme.controlBorderRadius.medium,
          height: theme.controlHeights.medium,
          paddingLeft: theme.controlPaddings.medium,
          paddingRight: 40,
        },

        large: {
          borderRadius: theme.controlBorderRadius.large,
          height: theme.controlHeights.large,
          paddingLeft: theme.controlPaddings.large,
          paddingRight: 40,
        },
      }[size]
    : {
        borderRadius: theme.controlBorderRadius.medium,
        height: size,
        paddingLeft: theme.controlPaddings.medium,
        paddingRight: 40,
      };

  const textSizeStyles = isControlSize(size)
    ? theme.textSizes[size]
    : theme.textSizes.medium;

  return {
    containerStyle: {
      backgroundColor: theme.colors.background.content,
      position: 'relative',
    },
    itemStyle: {
      ...textSizeStyles,
    },
    pickerStyle: {
      appearance: 'none',
      backgroundColor: 'transparent',
      borderColor: theme.colors.border.default,
      borderWidth: 1,
      color: theme.colors.text.default,
      width: '100%',
      ...textSizeStyles,
      ...controlSizeStyles,
    },
    rightContainerStyle: {
      alignItems: 'center',
      display: 'flex',
      height: '100%',
      justifyContent: 'center',
      paddingHorizontal: 8,
      position: 'absolute',
      right: 0,
      zIndex: -1,
    },
  };
};
