import * as React from 'react';
import {
  AccessibilityProps,
  GestureResponderEvent,
  TouchableHighlight,
  View,
} from 'react-native';
import { DeepPartial } from 'ts-essentials';

import { Icon } from '../../icons';
import { useTheme } from '../../theme';
import { mergeStyles, ReplaceReturnType } from '../../utils/mergeStyles';
import {
  CheckboxStyles,
  GetCheckboxStyles,
  getCheckboxStyles,
} from './Checkbox.styles';

export type CheckboxShape = 'circle' | 'square';

export interface CheckboxProps extends AccessibilityProps {
  isChecked?: boolean;
  isDisabled?: boolean;
  /** Sometimes we just want the display of the checkbox  */
  isInteractive?: boolean;
  checkedIcon?: React.ReactNode;
  /** @default square */
  shape?: CheckboxShape;
  onChange?: (e: GestureResponderEvent) => void | undefined;
  getStyles?: ReplaceReturnType<GetCheckboxStyles, DeepPartial<CheckboxStyles>>;
  testID?: string;
}

export const Checkbox = (props: CheckboxProps) => {
  const {
    isChecked = false,
    isDisabled = false,
    isInteractive = true,
    checkedIcon,
    onChange = () => null,
    shape = 'square',
    getStyles,
    testID,
    ...accessibilityProps
  } = props;

  const theme = useTheme();

  const { checkboxStyle, checkboxFocusBackgroundColor } = mergeStyles(
    getCheckboxStyles,
    getStyles,
  )({ isChecked, isDisabled, shape }, theme);

  return (
    <TouchableHighlight
      accessible
      style={checkboxStyle}
      underlayColor={checkboxFocusBackgroundColor}
      {...(isInteractive
        ? {
            disabled: isDisabled,
            onPress: onChange,
          }
        : {
            disabled: true,
          })}
      testID={testID}
      {...accessibilityProps}
    >
      <View
        style={{
          alignItems: 'center',
          display: 'flex',
          height: '100%',
          justifyContent: 'center',
        }}
      >
        {isChecked
          ? checkedIcon || (
              <Icon name="check" size={20} color={theme.colors.text.white} />
            )
          : null}
      </View>
    </TouchableHighlight>
  );
};
