import { ViewStyle } from 'react-native';

import { CheckboxVariables } from '../component-variables/checkboxVariables';

export type GetCheckboxStyles = (
  isChecked: boolean,
  isDisabled: boolean,
) => {
  checkboxStyle: ViewStyle;
  checkboxFocusBackgroundColor?: string;
};

export const getCheckboxStyles = (
  checkboxVariables: CheckboxVariables,
): GetCheckboxStyles => (isChecked, isDisabled) => {
  return {
    checkboxFocusBackgroundColor: isChecked
      ? checkboxVariables.checkedFocus.backgroundColor
      : checkboxVariables.uncheckedFocus.backgroundColor,
    checkboxStyle: {
      ...checkboxVariables.base,
      ...(isChecked ? checkboxVariables.checked : {}),
      ...(isDisabled ? checkboxVariables.disabled : {}),
    },
  };
};
