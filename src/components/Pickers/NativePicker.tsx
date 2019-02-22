import * as React from 'react';
import { Picker as RNPicker, PickerProps as RNPickerProps } from 'react-native';

import { ThemeContext } from '../../theme';
import { mergeStyles } from '../../utils/mergeStyles';
import { GetPickerButtonStylesProp } from './PickerButton';
import { getPickerButtonStyles, PickerButtonSize } from './PickerButton.styles';
import PickerButtonWrapper from './PickerButtonWrapper';

export interface NativePickerProps extends RNPickerProps {
  size?: PickerButtonSize;
  innerRef?: React.Ref<RNPicker>;
  rightIcon?: React.ReactNode;
  /**
   * Inline styles for components
   */
  getStyles?: GetPickerButtonStylesProp;
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

  const { pickerStyle, itemStyle } = mergeStyles(
    getPickerButtonStyles,
    getStyles,
  )({ size }, theme);

  return (
    <PickerButtonWrapper getStyles={getStyles}>
      <RNPicker
        ref={innerRef}
        itemStyle={itemStyle}
        style={pickerStyle}
        {...pickerProps}
      />
    </PickerButtonWrapper>
  );
};

export const NativePicker = React.forwardRef<RNPicker, RNPickerProps>(
  (props, ref) => {
    return <NativePickerBase {...props} innerRef={ref} />;
  },
);

export default NativePicker;
