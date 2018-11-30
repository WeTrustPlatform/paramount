import { ViewStyle } from 'react-native';

import { ICheckboxVariables } from '../component-variables/checkboxVariables';

export type GetCheckboxStyles = (
  isChecked: boolean,
  isDisabled: boolean,
) => {
  checkboxStyle: ViewStyle;
  checkboxFocusBackgroundColor?: string;
};

export const getCheckboxStyles = (
  checkboxVariables: ICheckboxVariables,
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
