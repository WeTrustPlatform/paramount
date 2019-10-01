import * as React from 'react';

import { getOverrides } from '../../utils/overrides';
import { WheelPicker as WheelPickerRef, WheelPickerProps } from './WheelPicker';
import {
  SCROLL_PICKER_HEIGHT,
  StyledArrowDown,
  StyledArrowUp,
  StyledBottomOverlay,
  StyledListWrapper,
  StyledRoot,
  StyledUpperOverlay,
  StyledWheelPickerItem,
  useWheelPicker,
} from './WheelPickerCommon';

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
      overrides = {},
    } = props;

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

    React.useLayoutEffect(() => {
      setTimeout(() => {
        if (listRef.current && value) scrollToValue(value, false);
      }, 50);
    }, [value]);

    const [Root, rootProps] = getOverrides(StyledRoot, props, overrides.Root);
    const [ArrowUp, arrowUpProps] = getOverrides(
      StyledArrowUp,
      props,
      overrides.ArrowUp,
    );
    const [ArrowDown, arrowDownProps] = getOverrides(
      StyledArrowDown,
      props,
      overrides.ArrowDown,
    );
    const [UpperOverlay, upperOverlayProps] = getOverrides(
      StyledUpperOverlay,
      props,
      overrides.UpperOverlay,
    );
    const [BottomOverlay, bottomOverlayProps] = getOverrides(
      StyledBottomOverlay,
      props,
      overrides.BottomOverlay,
    );
    const [ListWrapper, listWrapperProps] = getOverrides(
      StyledListWrapper,
      props,
      overrides.ListWrapper,
    );
    const [Item, itemProps] = getOverrides(
      StyledWheelPickerItem,
      props,
      overrides.Item,
    );

    return (
      <Root {...rootProps}>
        <ArrowUp onPress={handlePressUp} {...arrowUpProps} />
        <ListWrapper {...listWrapperProps}>
          <div
            ref={listRef}
            onScroll={event => handleScroll(event.currentTarget.scrollTop)}
            style={{
              height: SCROLL_PICKER_HEIGHT,
              overflowY: 'scroll' as const,
              scrollSnapType: 'y mandatory',
              width: '100%',
            }}
          >
            {optionsWithClones.map(option => (
              <Item key={`${option.value}`} option={option} {...itemProps} />
            ))}
          </div>
          <UpperOverlay pointerEvents="none" {...upperOverlayProps} />
          <BottomOverlay pointerEvents="none" {...bottomOverlayProps} />
        </ListWrapper>
        <ArrowDown onPress={handlePressDown} {...arrowDownProps} />
      </Root>
    );
  },
);
