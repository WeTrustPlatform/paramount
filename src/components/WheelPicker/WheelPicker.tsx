import * as React from 'react';
import {
  FlatList,
  NativeScrollEvent,
  NativeSyntheticEvent,
  View,
} from 'react-native';
import { DeepPartial } from 'ts-essentials';

import { useTheme } from '../../theme';
import { mergeStyles, ReplaceReturnType } from '../../utils/mergeStyles';
import { ITEM_HEIGHT } from './WheelPicker.constants';
import {
  GetWheelPickerStyles,
  getWheelPickerStyles,
  WheelPickerStyles,
} from './WheelPicker.styles';
import { getOptionFromOptions, makePaddedOptions } from './WheelPicker.utils';
import { WheelPickerItem, WheelPickerOption } from './WheelPickerItem';

export interface WheelPicker {
  selectValue: (value: string) => void;
}

export interface WheelPickerProps {
  /**
   * List of options to show.
   */
  options: WheelPickerOption[];

  /**
   * Initial value of the picker.
   *
   * *This is not a controlled component*; you don't need to update the
   * value during dragging.
   */
  value?: string;

  /**
   * Callback continuously called while the user is dragging the slider.
   */
  onValueChange?: (value: string) => void;

  /**
   * Callback to get element styles.
   */
  getStyles?: ReplaceReturnType<
    GetWheelPickerStyles,
    DeepPartial<WheelPickerStyles>
  >;
}

const WheelPickerBase = (
  props: WheelPickerProps,
  ref: React.Ref<WheelPicker>,
) => {
  const {
    options,
    onValueChange = () => {
      return;
    },
    value: initialValue,
    getStyles,
  } = props;
  const optionsWithClones = makePaddedOptions(options);
  const listRef = React.useRef<FlatList<WheelPickerOption>>(null);
  const theme = useTheme();
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

      listRef.current.scrollToOffset({
        animated: smooth,
        offset: index * ITEM_HEIGHT - ITEM_HEIGHT,
      });
    },
    [listRef, options],
  );

  React.useEffect(() => {
    if (initialValue) scrollToValue(initialValue, false);
  }, [listRef]);

  const handleScrollEndDrag = React.useCallback(
    (event: NativeSyntheticEvent<NativeScrollEvent>) => {
      if (!listRef.current) return;

      const scrollPosition =
        Math.round(event.nativeEvent.contentOffset.y / ITEM_HEIGHT) *
        ITEM_HEIGHT;

      listRef.current.scrollToOffset({
        offset: scrollPosition,
      });

      const option = getOption(scrollPosition);

      onValueChange(option.value);
    },
    [],
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
      <FlatList
        ref={listRef}
        data={optionsWithClones}
        style={listContainerStyle}
        getItemLayout={(item, index) => ({
          index,
          length: ITEM_HEIGHT,
          offset: ITEM_HEIGHT * index,
        })}
        initialScrollIndex={1}
        keyExtractor={item => item.value}
        renderItem={({ item }) => <WheelPickerItem option={item} />}
        showsHorizontalScrollIndicator={false}
        onScrollEndDrag={handleScrollEndDrag}
      />
      <View pointerEvents="none" style={upperOverlayStyle} />
      <View pointerEvents="none" style={bottomOverlayStyle} />
    </View>
  );
};

export const WheelPicker = React.forwardRef(WheelPickerBase);
