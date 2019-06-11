import { TextStyle } from 'react-native';

import { ControlSize, Theme } from '../../theme/Theme';

export interface TextInputStyles {
  inputStyle: TextStyle;
  focusedStyle: TextStyle;
  placeholderTextColor: string;
}

export interface TextInputStylesProps {
  size: ControlSize;
  isDisabled: boolean;
  isInvalid: boolean;
  numberOfLines?: number;
}

export type GetTextInputStyles = (
  textInputStylesProps: TextInputStylesProps,
  theme: Theme,
) => TextInputStyles;

export const getTextInputStyles: GetTextInputStyles = (
  { size, isDisabled, isInvalid, numberOfLines },
  theme,
) => {
  const controlHeight = theme.controlHeights[size];

  return {
    focusedStyle: {},
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
    },
    placeholderTextColor: theme.colors.text.muted,
  };
};
