import { ViewStyle } from 'react-native';

import { Theme } from '../../theme/Theme';
import { isControlSize } from '../../utils/isControlSize';
import { CheckboxProps } from './Checkbox';

export interface CheckboxStyles {
  touchableStyle: ViewStyle;
  checkboxStyle: ViewStyle;
  checkColor: string;
}

export type GetCheckboxStyles = (
  props: CheckboxProps,
  theme: Theme,
) => Partial<CheckboxStyles>;

export const getCheckboxStyles: GetCheckboxStyles = (
  { value, isDisabled, shape = 'rounded', size = 'medium' },
  theme,
) => {
  const sizeValue = isControlSize(size)
    ? theme.controlHeights[size] - 16
    : size;

  return {
    checkColor: theme.colors.text.white,

    checkboxStyle: {
      alignItems: 'center',
      backgroundColor: theme.colors.background.content,
      borderColor: theme.colors.border.default,
      borderWidth: 1,
      height: sizeValue,
      justifyContent: 'center',
      width: sizeValue,
      ...(value
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
      ...theme.containerShapes[shape],
    },

    touchableStyle: theme.containerShapes[shape],
  };
};
