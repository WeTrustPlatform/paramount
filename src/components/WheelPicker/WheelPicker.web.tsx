import * as React from 'react';
import { View } from 'react-native';

import { useTheme } from '../../theme';
import { mergeStyles } from '../../utils/mergeStyles';
import { WheelPicker as WheelPickerRef, WheelPickerProps } from './WheelPicker';
import { ITEM_HEIGHT } from './WheelPicker.constants';
import { getWheelPickerStyles } from './WheelPicker.styles';
import { getOptionFromOptions, makePaddedOptions } from './WheelPicker.utils';
import { WheelPickerItem } from './WheelPickerItem';

const WheelPickerBase = (
  props: WheelPickerProps,
  ref: React.Ref<WheelPickerRef>,
) => {
  const {
    value: initialValue,
    options,
    onValueChange = () => {
      return;
    },
    getStyles,
  } = props;
  const optionsWithClones = makePaddedOptions(options);
  const theme = useTheme();

  const listRef = React.useRef<HTMLDivElement>(null);
  const getOption = React.useMemo(() => getOptionFromOptions(options), [
    options,
  ]);

  const {
    bottomOverlayStyle,
    containerStyle,
    listContainerStyle,
    upperOverlayStyle,
  } = mergeStyles(
    getWheelPickerStyles,
    getStyles,
    theme.components.getWheelPickerStyles,
  )(props, theme);

  const scrollToValue = React.useCallback(
    (value: string, smooth = true) => {
      if (!listRef.current) return;

      const index = optionsWithClones.findIndex(o => o.value === value);

      listRef.current.scrollTo({
        behavior: smooth ? 'smooth' : 'auto',
        top: index * ITEM_HEIGHT - ITEM_HEIGHT,
      });
    },
    [listRef, options],
  );

  React.useEffect(() => {
    if (initialValue) scrollToValue(initialValue, false);
  }, [options]);

  const handleScroll = React.useCallback(
    (event: React.UIEvent<HTMLDivElement>) => {
      if (!listRef.current) return;

      const selectedOption = getOption(event.currentTarget.scrollTop);

      onValueChange(selectedOption.value);
    },
    [listRef, options],
  );

  React.useImperativeHandle(
    ref,
    () => ({
      selectValue: (value: string) => scrollToValue(value),
    }),
    [listRef, options],
  );

  return (
    <View style={containerStyle}>
      <div ref={listRef} onScroll={handleScroll} style={listContainerStyle}>
        {optionsWithClones.map(option => (
          <WheelPickerItem key={option.value} option={option} />
        ))}
      </div>
      <View pointerEvents="none" style={upperOverlayStyle} />
      <View pointerEvents="none" style={bottomOverlayStyle} />
    </View>
  );
};

export const WheelPicker = React.forwardRef(WheelPickerBase);
