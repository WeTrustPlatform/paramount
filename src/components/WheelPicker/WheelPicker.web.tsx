import * as React from 'react';
import { TouchableOpacity, View } from 'react-native';

import { useTheme } from '../../theme';
import { mergeStyles } from '../../utils/mergeStyles';
import { Icon } from '../Icon';
import { useWheelPicker } from './useWheelPicker';
import { WheelPicker as WheelPickerRef, WheelPickerProps } from './WheelPicker';
import { getWheelPickerStyles } from './WheelPicker.styles';
import { WheelPickerItem } from './WheelPickerItem';

export const WheelPicker = React.forwardRef(
  <TValue extends any>(
    props: WheelPickerProps<TValue>,
    ref: React.Ref<WheelPickerRef<TValue>>,
  ) => {
    const {
      value,
      options = [],
      onValueChange = () => {
        return;
      },
      getStyles,
    } = props;

    const theme = useTheme();
    const listRef = React.useRef<HTMLDivElement>(null);

    const {
      optionsWithClones,
      handlePressDown,
      handlePressUp,
      handleScroll,
      scrollToValue,
    } = useWheelPicker({
      onValueChange,
      options,
      ref,
      scrollContainer: {
        scrollTo: ({ animated, offset }) =>
          listRef.current &&
          listRef.current.scrollTo({
            behavior: animated ? 'smooth' : 'auto',
            top: offset,
          }),
      },
      value,
    });

    const {
      arrowWrapperStyle,
      bottomOverlayStyle,
      containerStyle,
      wheelContainerStyle,
      listContainerStyle,
      upperOverlayStyle,
    } = mergeStyles(
      getWheelPickerStyles,
      getStyles,
      theme.components.getWheelPickerStyles,
    )(props, theme);

    React.useLayoutEffect(() => {
      setTimeout(() => {
        if (listRef.current && value) scrollToValue(value, false);
      }, 50);
    }, [value]);

    return (
      <View style={containerStyle}>
        <TouchableOpacity style={arrowWrapperStyle} onPress={handlePressUp}>
          <Icon color="link" size="large" name="chevron-up" />
        </TouchableOpacity>
        <View style={wheelContainerStyle}>
          <div
            ref={listRef}
            onScroll={event => handleScroll(event.currentTarget.scrollTop)}
            style={listContainerStyle}
          >
            {optionsWithClones.map(option => (
              <WheelPickerItem key={`${option.value}`} option={option} />
            ))}
          </div>
          <View pointerEvents="none" style={upperOverlayStyle} />
          <View pointerEvents="none" style={bottomOverlayStyle} />
        </View>
        <TouchableOpacity style={arrowWrapperStyle} onPress={handlePressDown}>
          <Icon color="link" size="large" name="chevron-down" />
        </TouchableOpacity>
      </View>
    );
  },
);
