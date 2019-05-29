import * as React from 'react';
import {
  AccessibilityProps,
  GestureResponderEvent,
  TouchableHighlight,
  View,
} from 'react-native';
import { DeepPartial } from 'ts-essentials';

import { ControlSize, useTheme } from '../../theme';
import { mergeStyles, ReplaceReturnType } from '../../utils/mergeStyles';
import { Icon } from '../Icon';
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
  /** @default square */
  shape?: CheckboxShape;
  onChange?: (e: GestureResponderEvent) => void | undefined;
  getStyles?: ReplaceReturnType<GetCheckboxStyles, DeepPartial<CheckboxStyles>>;
  testID?: string;
  size?: ControlSize;
}

export const Checkbox = (props: CheckboxProps) => {
  const {
    isChecked = false,
    isDisabled = false,
    isInteractive = true,
    onChange = () => null,
    shape = 'square',
    size = 'medium',
    getStyles,
    testID,
    ...accessibilityProps
  } = props;

  const theme = useTheme();

  const {
    touchableStyle,
    checkboxStyle,
    checkColor,
    checkboxFocusBackgroundColor,
  } = mergeStyles(getCheckboxStyles, getStyles)(
    {
      isChecked,
      isDisabled,
      shape,
      size,
    },
    theme,
  );

  return (
    <TouchableHighlight
      accessible={isInteractive}
      style={touchableStyle}
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
      <View style={checkboxStyle}>
        {isChecked ? <Icon name="check" size={20} color={checkColor} /> : null}
      </View>
    </TouchableHighlight>
  );
};
