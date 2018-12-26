import * as React from 'react';
import {
  GestureResponderEvent,
  TouchableHighlight,
  TouchableHighlightProps,
  View,
} from 'react-native';

import { Icon } from '../../icons';
import { Theme, withTheme } from '../../theme';

export interface CheckboxProps {
  theme: Theme;
  isChecked?: boolean;
  isDisabled?: boolean;
  checkedIcon?: React.ReactNode;
  onChange?: (e: GestureResponderEvent) => void | undefined;
}

const CheckboxBase = (props: CheckboxProps & TouchableHighlightProps) => {
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
              <Icon
                name="check"
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
