import * as React from 'react';
import {
  Picker as RNPicker,
  PickerProps as RNPickerProps,
  View,
} from 'react-native';
import { DeepPartial } from 'ts-essentials';

import { Icon } from '../../icons';
import { ThemeContext } from '../../theme';
import { mergeStyles, ReplaceReturnType } from '../../utils/mergeStyles';
import {
  GetNativePickerStyles,
  getNativePickerStyles,
  NativePickerSize,
  NativePickerStyles,
} from './NativePicker.styles';

export interface NativePickerProps extends RNPickerProps {
  size?: NativePickerSize;
  innerRef?: React.Ref<RNPicker>;
  rightIcon?: React.ReactNode;
  /**
   * Inline styles for components
   */
  getStyles?: ReplaceReturnType<
    GetNativePickerStyles,
    DeepPartial<NativePickerStyles>
  >;
}

const NativePickerBase = (props: NativePickerProps) => {
  const {
    size = 'medium',
    getStyles,
    innerRef,
    rightIcon,
    ...pickerProps
  } = props;
  const theme = React.useContext(ThemeContext);

  const {
    containerStyle,
    rightContainerStyle,
    pickerStyle,
    itemStyle,
  } = mergeStyles(getNativePickerStyles, getStyles)({ size }, theme);

  return (
    <View style={containerStyle}>
      <RNPicker
        ref={innerRef}
        itemStyle={itemStyle}
        style={pickerStyle}
        {...pickerProps}
      />
      <View style={rightContainerStyle}>
        {rightIcon || (
          <Icon
            name="chevron-down"
            size={32}
            color={theme.colors.text.default}
          />
        )}
      </View>
    </View>
  );
};

export const NativePicker = React.forwardRef<RNPicker, RNPickerProps>(
  (props, ref) => {
    return <NativePickerBase {...props} innerRef={ref} />;
  },
);

export default NativePicker;
