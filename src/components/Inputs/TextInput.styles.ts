import { TextStyle, ViewStyle } from 'react-native';

import { Theme } from '../../theme/Theme';
import { isControlSize } from '../../utils/isControlSize';
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
) => Partial<TextInputStyles>;

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

  const {
    borderRadius,
    height,
    paddingLeft,
    paddingRight,
    textSize,
  } = isControlSize(size)
    ? {
        borderRadius: theme.controlBorderRadius[size],
        height: theme.controlHeights[size],
        paddingLeft: theme.controlPaddings[size],
        paddingRight: theme.controlPaddings[size],
        textSize: theme.textSizes[size],
      }
    : {
        borderRadius: theme.controlBorderRadius.medium,
        height: size,
        paddingLeft: theme.controlPaddings.medium,
        paddingRight: theme.controlPaddings.medium,
        textSize: theme.textSizes.medium,
      };

  return {
    containerStyle: {
      position: 'relative',
    },
    inputStyle: {
      backgroundColor: theme.colors.background.content,
      borderColor: theme.colors.border.default,
      borderRadius,
      borderWidth: 1,
      color: theme.colors.text.default,
      height,
      paddingLeft,
      paddingRight,
      width: '100%',
      ...textSize,
      ...(isDisabled
        ? { backgroundColor: theme.colors.background.greyDark }
        : {}),
      ...(isInvalid ? { borderColor: theme.colors.border.danger } : {}),
      ...(numberOfLines
        ? {
            height: numberOfLines * height,
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
