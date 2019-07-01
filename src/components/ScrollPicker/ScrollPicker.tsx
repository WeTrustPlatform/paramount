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
import { ITEM_HEIGHT } from './ScrollPicker.constants';
import {
  GetScrollPickerStyles,
  getScrollPickerStyles,
  ScrollPickerStyles,
} from './ScrollPicker.styles';
import {
  getOptionFromOptions,
  makeOptionsWithClones,
} from './ScrollPicker.utils';
import { ScrollPickerItem, ScrollPickerOption } from './ScrollPickerItem';

export interface ScrollPickerProps {
  /**
   * List of options to show.
   */
  options: ScrollPickerOption[];

  /**
   * Initial value of the picker.
   *
   * *This is not a controlled component*; you don't need to update the
   * value during dragging.
   */
  initialValue?: string;

  /**
   * Callback continuously called while the user is dragging the slider.
   */
  onValueChange?: (value: string) => void;

  /**
   * Callback to get element styles.
   */
  getStyles?: ReplaceReturnType<
    GetScrollPickerStyles,
    DeepPartial<ScrollPickerStyles>
  >;
}

export const ScrollPicker = (props: ScrollPickerProps) => {
  const {
    options,
    onValueChange = () => {
      return;
    },
    getStyles,
  } = props;
  const optionsWithClones = makeOptionsWithClones(options);
  const listRef = React.useRef<FlatList<ScrollPickerOption>>(null);
  const theme = useTheme();
  const listHeight = options.length * ITEM_HEIGHT + ITEM_HEIGHT;
  const getOption = React.useMemo(() => getOptionFromOptions(options), [
    options,
  ]);

  const {
    bottomOverlayStyle,
    containerStyle,
    listContainerStyle,
    upperOverlayStyle,
  } = mergeStyles(
    getScrollPickerStyles,
    getStyles,
    theme.components.getScrollPickerStyles,
  )(props, theme);

  const handleScrollLoop = React.useCallback(
    (event: NativeScrollEvent) => {
      if (!listRef.current) return;

      const scrollPosition = event.contentOffset.y;

      if (scrollPosition > listHeight) {
        listRef.current.scrollToOffset({
          animated: false,
          offset: ITEM_HEIGHT,
        });
      } else if (scrollPosition < ITEM_HEIGHT) {
        listRef.current.scrollToOffset({ offset: listHeight, animated: false });
      }
    },
    [listHeight],
  );

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
        renderItem={({ item }) => <ScrollPickerItem option={item} />}
        scrollEventThrottle={16}
        onScroll={({ nativeEvent }) => handleScrollLoop(nativeEvent)}
        showsHorizontalScrollIndicator={false}
        onScrollEndDrag={handleScrollEndDrag}
      />
      <View pointerEvents="none" style={upperOverlayStyle} />
      <View pointerEvents="none" style={bottomOverlayStyle} />
    </View>
  );
};
