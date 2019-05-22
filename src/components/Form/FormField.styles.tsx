import { TextStyle, ViewStyle } from 'react-native';

import { Theme } from '../../theme/ThemeInterface';
import { FormFieldLabelPosition } from './FormField';

export interface FormFieldStylesProps {
  labelPosition?: FormFieldLabelPosition;
}

export interface FormFieldStyles {
  containerStyles: ViewStyle;
  descriptionTextStyle: TextStyle;
  errorTextStyle: TextStyle;
  errorWrapperStyle: ViewStyle;
  labelTextStyle: TextStyle;
  labelWrapperStyle: ViewStyle;
  wrapperStyle: ViewStyle;
}

export type GetFormFieldStyles = (
  FormFieldStylesProps: FormFieldStylesProps,
  theme: Theme,
) => FormFieldStyles;

export const getFormFieldStyles: GetFormFieldStyles = (
  { labelPosition },
  theme,
) => {
  let labelWrapperStyle: ViewStyle = {};
  let wrapperStyle: ViewStyle = {};

  switch (labelPosition) {
    case 'left':
      labelWrapperStyle = { paddingRight: 8 };
      wrapperStyle = { flexDirection: 'row', alignItems: 'center' };
      break;
    case 'right':
      labelWrapperStyle = { paddingLeft: 8 };
      wrapperStyle = { flexDirection: 'row', alignItems: 'center' };
      break;
    default:
      labelWrapperStyle = { paddingBottom: 4 };
      wrapperStyle = { paddingBottom: 4 };
      break;
  }

  return {
    containerStyles: {},
    descriptionTextStyle: { paddingBottom: 4 },
    errorTextStyle: {},
    errorWrapperStyle: {},
    labelTextStyle: {},
    labelWrapperStyle,
    wrapperStyle,
  };
};
