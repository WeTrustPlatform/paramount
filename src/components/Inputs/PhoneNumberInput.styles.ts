import { TextStyle, ViewStyle } from 'react-native';

import { Theme } from '../../theme/ThemeInterface';

export interface PhoneNumberInputSizes {
  small: TextStyle;
  medium: TextStyle;
  large: TextStyle;
}

export type PhoneNumberInputSize = keyof PhoneNumberInputSizes;

export interface PhoneNumberInputStyles {
  containerStyle: ViewStyle;
}

export interface PhoneNumberInputStylesProps {
  size: PhoneNumberInputSize;
}

export type GetPhoneNumberInputStyles = (
  textInputStylesProps: PhoneNumberInputStylesProps,
  theme: Theme,
) => PhoneNumberInputStyles;

export const getPhoneNumberInputStyles: GetPhoneNumberInputStyles = (
  { size },
  theme,
) => {
  return {
    containerStyle: {
      flexDirection: 'row',
    },
  };
};
