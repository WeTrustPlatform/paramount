import { TextStyle, ViewStyle } from 'react-native';

import { Theme } from '../../theme/Theme';
import { FormFieldProps } from './FormField';

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
  props: FormFieldProps,
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
