import * as React from 'react';
import { FlatList, NativeScrollEvent, View } from 'react-native';

import { ITEM_HEIGHT, SCROLL_PICKER_HEIGHT } from './ScrollPicker.constants';
import { ScrollPickerItem, ScrollPickerOption } from './ScrollPickerItem';

export interface ScrollPickerProps {
  options: ScrollPickerOption[];
  shouldLoop?: boolean;

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

  onScrollStart?: (value: string) => void;

  onScrollEnd?: (value: string) => void;
}

export const ScrollPicker = (props: ScrollPickerProps) => {
  const { options } = props;
  const listRef = React.useRef<FlatList<ScrollPickerOption>>(null);
  const listHeight = 280 + 200;

  React.useEffect(() => {
    if (listRef.current) {
      listRef.current.scrollToOffset({ offset: 1, animated: false });
    }
  }, [listRef]);

  const handleScrollLoop = React.useCallback((event: NativeScrollEvent) => {
    if (!listRef.current) return;

    const scrollPosition = event.contentOffset.y;

    if (scrollPosition >= listHeight) {
      listRef.current.scrollToOffset({ offset: 1, animated: false });
    } else if (scrollPosition <= 0) {
      listRef.current.scrollToOffset({ offset: listHeight, animated: false });
    }
  }, []);

  return (
    <View style={{ height: SCROLL_PICKER_HEIGHT }}>
      <FlatList
        ref={listRef}
        data={options}
        getItemLayout={(item, index) => ({
          index,
          length: ITEM_HEIGHT,
          offset: ITEM_HEIGHT * index,
        })}
        keyExtractor={item => item.value}
        renderItem={({ item }) => <ScrollPickerItem option={item} />}
        scrollEventThrottle={16}
        onScroll={({ nativeEvent }) => handleScrollLoop(nativeEvent)}
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={console.log}
      />
    </View>
  );
};
