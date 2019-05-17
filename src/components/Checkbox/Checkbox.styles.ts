import { TextStyle, ViewStyle } from 'react-native';

import { ControlSize, Theme } from '../../theme/ThemeInterface';
import { CheckboxLabelPosition, CheckboxShape } from './Checkbox';

export interface ShapeStyle {
  circle: ViewStyle;
  square: ViewStyle;
}

export interface CheckboxVariables {
  disabled: ViewStyle;
  checked: ViewStyle;
  checkedFocus: ViewStyle;
  uncheckedFocus: ViewStyle;
  shape: ShapeStyle;
}

export interface CheckboxStylesProps {
  isChecked: boolean;
  isDisabled: boolean;
  shape: CheckboxShape;
  labelPosition: CheckboxLabelPosition;
  hasLabel: boolean;
  checkColor: string;
  size: ControlSize;
}

export interface CheckboxStyles {
  touchableStyle: ViewStyle;
  outerWrapperStyle: ViewStyle;
  checkboxStyle: ViewStyle;
  textStyle: TextStyle;
  iconColor: string;
  checkboxFocusBackgroundColor: string;
}

export type GetCheckboxStyles = (
  checkboxStylesProps: CheckboxStylesProps,
  theme: Theme,
) => CheckboxStyles;

export const getCheckboxStyles: GetCheckboxStyles = (
  { isChecked, isDisabled, shape, hasLabel, labelPosition, checkColor, size },
  theme,
) => {
  const sizeValue = theme.controlHeights[size];

  return {
    checkboxFocusBackgroundColor: isChecked
      ? theme.colors.background.primaryDark
      : theme.colors.background.greyLight,

    checkboxStyle: {
      alignItems: 'center',
      backgroundColor: theme.colors.background.content,
      borderColor: theme.colors.border.default,
      borderWidth: 1,
      height: sizeValue,
      justifyContent: 'center',
      width: sizeValue,
      ...(hasLabel
        ? labelPosition === 'right'
          ? { marginRight: 8 }
          : { marginLeft: 8 }
        : {}),
      ...(isChecked
        ? {
            backgroundColor: theme.colors.background.primaryDefault,
            borderColor: 'transparent',
          }
        : {}),
      ...(isDisabled
        ? {
            backgroundColor: theme.colors.background.greyDark,
            borderColor: theme.colors.border.default,
          }
        : {}),
      ...{
        circle: {
          borderRadius: 999,
        },
        square: {
          borderRadius: theme.controlBorderRadius.small,
        },
      }[shape],
    },
    iconColor: checkColor || theme.colors.text.white,

    outerWrapperStyle: {
      alignItems: 'center',
      flexDirection: 'row',
    },
    textStyle: {},
    touchableStyle: {},
  };
};
