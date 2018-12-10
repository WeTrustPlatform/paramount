import * as React from 'react';
import { FiCheck } from 'react-icons/fi';
import {
  GestureResponderEvent,
  TouchableHighlight,
  TouchableHighlightProps,
  View,
} from 'react-native';

import { ITheme, withTheme } from '../../theme';

export interface ICheckboxProps {
  theme: ITheme;
  isChecked?: boolean;
  isDisabled?: boolean;
  checkedIcon?: React.ReactNode;
  onChange?: (e: GestureResponderEvent) => void | undefined;
}

const CheckboxBase = (props: ICheckboxProps & TouchableHighlightProps) => {
  const {
    isChecked = false,
    isDisabled = false,
    checkedIcon,
    onChange = () => null,
    theme,
    ...touchableHighlightProps
  } = props;

  const {
    checkboxStyle,
    checkboxFocusBackgroundColor,
  } = theme.getCheckboxStyles(isChecked, isDisabled);

  return (
    <TouchableHighlight
      accessible
      style={checkboxStyle}
      underlayColor={checkboxFocusBackgroundColor}
      onPress={onChange}
      disabled={isDisabled}
      {...touchableHighlightProps}
    >
      <View
        style={{
          alignItems: 'center',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        {isChecked
          ? checkedIcon || (
              <FiCheck
                size={20}
                color={theme.themeVariables.colors.text.plain}
              />
            )
          : null}
      </View>
    </TouchableHighlight>
  );
};

export const Checkbox = withTheme(CheckboxBase);
export default Checkbox;
