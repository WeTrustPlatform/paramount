import dlv from 'dlv';
import * as React from 'react';
import { FlatList } from 'react-native';

import { useTheme } from '../../theme';
import { getOverrides, WithOverrides } from '../../utils/overrides';
import {
  ArrowProps,
  ITEM_HEIGHT,
  ListWrapperProps,
  OverlayProps,
  RootProps,
  StyledArrowDown,
  StyledArrowUp,
  StyledBottomOverlay,
  StyledListWrapper,
  StyledRoot,
  StyledUpperOverlay,
  StyledWheelPickerItem,
  useWheelPicker,
  WheelPickerItemProps,
  WheelPickerOption,
} from './WheelPickerCommon';

export interface WheelPicker<TValue extends any> {
  selectValue: (value: TValue) => void;
}

interface WheelPickerBaseProps<TValue extends any> {
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
}

export interface WheelPickerOverrides<TValue extends any> {
  Root: RootProps;
  ArrowUp: ArrowProps;
  ArrowDown: ArrowProps;
  ListWrapper: ListWrapperProps;
  UpperOverlay: OverlayProps;
  BottomOverlay: OverlayProps;
  Item: WheelPickerItemProps<TValue>;
}

export interface WheelPickerProps<TValue extends any>
  extends WithOverrides<
    WheelPickerBaseProps<TValue>,
    WheelPickerOverrides<TValue>
  > {}

export const WheelPicker = React.forwardRef(
  <TValue extends any>(
    props: WheelPickerProps<TValue>,
    ref: React.Ref<WheelPicker<TValue>>,
  ) => {
    const { options = [], onValueChange, value, overrides = {} } = props;
    const theme = useTheme();
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

    const [Root, rootProps] = getOverrides(
      StyledRoot,
      props,
      dlv(theme, 'overrides.WheelPicker.Root'),
      overrides.Root,
    );
    const [ArrowUp, arrowUpProps] = getOverrides(
      StyledArrowUp,
      props,
      dlv(theme, 'overrides.WheelPicker.ArrowUp'),
      overrides.ArrowUp,
    );
    const [ArrowDown, arrowDownProps] = getOverrides(
      StyledArrowDown,
      props,
      dlv(theme, 'overrides.WheelPicker.ArrowDown'),
      overrides.ArrowDown,
    );
    const [UpperOverlay, upperOverlayProps] = getOverrides(
      StyledUpperOverlay,
      props,
      dlv(theme, 'overrides.WheelPicker.UpperOverlay'),
      overrides.UpperOverlay,
    );
    const [BottomOverlay, bottomOverlayProps] = getOverrides(
      StyledBottomOverlay,
      props,
      dlv(theme, 'overrides.WheelPicker.BottomOverlay'),
      overrides.BottomOverlay,
    );
    const [ListWrapper, listWrapperProps] = getOverrides(
      StyledListWrapper,
      props,
      dlv(theme, 'overrides.WheelPicker.ListWrapper'),
      overrides.ListWrapper,
    );
    const [Item, itemProps] = getOverrides(
      StyledWheelPickerItem,
      props,
      dlv(theme, 'overrides.WheelPicker.Item'),
      overrides.Item,
    );

    return (
      <Root {...rootProps}>
        <ArrowUp onPress={handlePressUp} {...arrowUpProps} />
        <ListWrapper {...listWrapperProps}>
          <FlatList
            // @ts-ignore FIX
            ref={listRef}
            data={optionsWithClones}
            getItemLayout={(item, index) => ({
              index,
              length: ITEM_HEIGHT,
              offset: ITEM_HEIGHT * index,
            })}
            initialScrollIndex={initialScrollIndex < 0 ? 0 : initialScrollIndex}
            keyExtractor={item => `${item.value}`}
            renderItem={({ item }) => <Item option={item} {...itemProps} />}
            showsHorizontalScrollIndicator={false}
            onScrollEndDrag={event =>
              handleEndDrag(event.nativeEvent.contentOffset.y)
            }
          />
          <UpperOverlay pointerEvents="none" {...upperOverlayProps} />
          <BottomOverlay pointerEvents="none" {...bottomOverlayProps} />
        </ListWrapper>
        <ArrowDown onPress={handlePressDown} {...arrowDownProps} />
      </Root>
    );
  },
) as <TValue extends any>(props: WheelPickerProps<TValue>) => JSX.Element;
