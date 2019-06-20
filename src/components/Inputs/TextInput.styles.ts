import { TextStyle, ViewStyle } from 'react-native';

import { Theme } from '../../theme/Theme';
import { TextInputProps } from './TextInput';

export interface TextInputStyles {
  inputStyle: TextStyle;
  placeholderTextColor: string;
  containerStyle: ViewStyle;
  leftContainerStyle: ViewStyle;
  rightContainerStyle: ViewStyle;
}

export type GetTextInputStyles = (
  props: TextInputProps,
  theme: Theme,
) => TextInputStyles;

export const getTextInputStyles: GetTextInputStyles = (
  {
    size = 'medium',
    isClearable = false,
    isDisabled = false,
    isInvalid = false,
    numberOfLines,
    leftIcon,
    rightIcon,
  },
  theme,
) => {
  const hasLeftIcon = !!leftIcon;
  const hasRightIcon = !!(rightIcon || isClearable);
  const controlHeight = theme.controlHeights[size];

  return {
    containerStyle: {
      position: 'relative',
    },
    inputStyle: {
      backgroundColor: theme.colors.background.content,
      borderColor: theme.colors.border.default,
      borderRadius: theme.controlBorderRadius[size],
      borderWidth: 1,
      color: theme.colors.text.default,
      height: theme.controlHeights[size],
      paddingLeft: theme.controlPaddings[size],
      paddingRight: theme.controlPaddings[size],
      width: '100%',
      ...theme.textSizes[size],
      ...(isDisabled
        ? { backgroundColor: theme.colors.background.greyDark }
        : {}),
      ...(isInvalid ? { borderColor: theme.colors.border.danger } : {}),
      ...(numberOfLines
        ? {
            height: numberOfLines * controlHeight,
            paddingVertical: 16,
          }
        : {}),
      ...(hasLeftIcon && { paddingLeft: 40 }),
      ...(hasRightIcon && { paddingRight: 40 }),
    },
    leftContainerStyle: {
      alignItems: 'center',
      display: 'flex',
      height: '100%',
      justifyContent: 'center',
      left: 0,
      paddingHorizontal: 8,
      position: 'absolute',
      zIndex: 1,
    },
    placeholderTextColor: theme.colors.text.muted,
    rightContainerStyle: {
      alignItems: 'center',
      display: 'flex',
      height: '100%',
      justifyContent: 'center',
      paddingHorizontal: 8,
      position: 'absolute',
      right: 0,
      zIndex: 1,
    },
  };
};
