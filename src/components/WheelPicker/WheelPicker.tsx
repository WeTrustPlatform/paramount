import * as React from 'react';
import { FlatList, TouchableOpacity, View } from 'react-native';

import { useTheme } from '../../theme';
import { mergeStyles } from '../../utils/mergeStyles';
import { Icon } from '../Icon';
import { useWheelPicker } from './useWheelPicker';
import { ITEM_HEIGHT } from './WheelPicker.constants';
import {
  GetWheelPickerStyles,
  getWheelPickerStyles,
} from './WheelPicker.styles';
import { WheelPickerItem, WheelPickerOption } from './WheelPickerItem';

export interface WheelPicker<TValue extends any> {
  selectValue: (value: TValue) => void;
}

export interface WheelPickerProps<TValue extends any> {
  /**
   * List of options to show.
   */
  options?: Array<WheelPickerOption<TValue>>;

  /**
   * Initial value of the picker.
   *
   * *This is not a controlled component*; you don't need to update the
   * value during dragging.
   */
  value?: TValue;

  /**
   * Callback continuously called while the user is dragging the slider.
   */
  onValueChange?: (value: TValue) => void;

  /**
   * Callback to get element styles.
   */
  getStyles?: GetWheelPickerStyles;
}

export const WheelPicker = React.forwardRef(
  <TValue extends any>(
    props: WheelPickerProps<TValue>,
    ref: React.Ref<WheelPicker<TValue>>,
  ) => {
    const { options = [], onValueChange, value, getStyles } = props;
    const listRef = React.useRef<FlatList<WheelPickerOption<TValue>>>(null);

    const {
      optionsWithClones,
      handlePressDown,
      handlePressUp,
      handleEndDrag,
    } = useWheelPicker({
      onValueChange,
      options,
      ref,
      scrollContainer: {
        scrollTo: params =>
          listRef.current && listRef.current.scrollToOffset(params),
      },
      value,
    });

    const initialScrollIndex = options.findIndex(o => o.value === value);
    const theme = useTheme();

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

    return (
      <View style={containerStyle}>
        <TouchableOpacity style={arrowWrapperStyle} onPress={handlePressUp}>
          <Icon color="link" size="large" name="chevron-up" />
        </TouchableOpacity>
        <View style={wheelContainerStyle}>
          <FlatList
            // @ts-ignore FIX
            ref={listRef}
            data={optionsWithClones}
            style={listContainerStyle}
            getItemLayout={(item, index) => ({
              index,
              length: ITEM_HEIGHT,
              offset: ITEM_HEIGHT * index,
            })}
            initialScrollIndex={initialScrollIndex < 0 ? 0 : initialScrollIndex}
            keyExtractor={item => `${item.value}`}
            renderItem={({ item }) => <WheelPickerItem option={item} />}
            showsHorizontalScrollIndicator={false}
            onScrollEndDrag={event =>
              handleEndDrag(event.nativeEvent.contentOffset.y)
            }
          />
          <View pointerEvents="none" style={upperOverlayStyle} />
          <View pointerEvents="none" style={bottomOverlayStyle} />
        </View>
        <TouchableOpacity style={arrowWrapperStyle} onPress={handlePressDown}>
          <Icon color="link" size="large" name="chevron-down" />
        </TouchableOpacity>
      </View>
    );
  },
) as <TValue extends any>(props: WheelPickerProps<TValue>) => JSX.Element;
