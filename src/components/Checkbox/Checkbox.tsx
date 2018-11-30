import * as React from 'react';
import { FiCheck } from 'react-icons/fi';
import { GestureResponderEvent, TouchableHighlight, View } from 'react-native';

import { ITheme, withTheme } from '../../theme';

export interface ICheckboxProps {
  theme: ITheme;
  isChecked?: boolean;
  isDisabled?: boolean;
  checkedIcon?: React.ReactNode;
  testID?: string;
  onChange?: (e: GestureResponderEvent) => void | undefined;
}

const CheckboxWithoutTheme = (props: ICheckboxProps) => {
  const { theme } = props;
  const {
    isChecked = false,
    isDisabled = false,
    checkedIcon = (
      <FiCheck size={20} color={theme.themeVariables.colors.text.plain} />
    ),
    testID,
    onChange = () => null,
  } = props;

  const {
    checkboxStyle,
    checkboxFocusBackgroundColor,
  } = theme.getCheckboxStyles(isChecked, isDisabled);

  return (
    <TouchableHighlight
      style={checkboxStyle}
      underlayColor={checkboxFocusBackgroundColor}
      onPress={onChange}
      testID={testID}
      disabled={isDisabled}
    >
      <View
        style={{
          alignItems: 'center',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        {isChecked && checkedIcon}
      </View>
    </TouchableHighlight>
  );
};

export const Checkbox = withTheme(CheckboxWithoutTheme);
export default Checkbox;
