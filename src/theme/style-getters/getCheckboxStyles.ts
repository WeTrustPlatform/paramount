import { ViewStyle } from 'react-native';

import { CheckboxShape } from '../../components/Checkbox/Checkbox';
import { CheckboxVariables } from '../component-variables/checkboxVariables';

export type GetCheckboxStyles = (
  isChecked: boolean,
  isDisabled: boolean,
  shape: CheckboxShape,
) => {
  checkboxStyle: ViewStyle;
  checkboxFocusBackgroundColor?: string;
};

export const getCheckboxStyles = (
  checkboxVariables: CheckboxVariables,
): GetCheckboxStyles => (isChecked, isDisabled, shape) => {
  return {
    checkboxFocusBackgroundColor: isChecked
      ? checkboxVariables.checkedFocus.backgroundColor
      : checkboxVariables.uncheckedFocus.backgroundColor,
    checkboxStyle: {
      ...checkboxVariables.base,
      ...(isChecked ? checkboxVariables.checked : {}),
      ...(isDisabled ? checkboxVariables.disabled : {}),
      ...checkboxVariables.shape[shape],
    },
  };
};
