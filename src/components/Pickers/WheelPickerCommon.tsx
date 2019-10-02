import * as React from 'react';
import {
  TouchableOpacity,
  TouchableOpacityProps,
  View,
  ViewProps,
} from 'react-native';

import { useDebouncedCallback } from '../../hooks/useDebouncedCallback';
import { useTheme } from '../../theme';
import { Icon } from '../Icon';
import { Text } from '../Typography';
import { WheelPicker } from './WheelPicker';

export const ITEM_HEIGHT = 40;
export const ITEM_COUNT = 3;
export const SCROLL_PICKER_HEIGHT = ITEM_HEIGHT * ITEM_COUNT;

const DEBOUNCE_TIME = 300;

export const makePaddedOptions = <TValue extends any>(
  data: WheelPickerOption<TValue>[],
) => {
  return [
    { value: 'emptyStart', label: '' },
    ...data,
    { value: 'emptyEnd', label: '' },
  ] as WheelPickerOption<TValue>[];
};

export const getOptionFromOptions = <TValue extends any>(
  data: WheelPickerOption<TValue>[],
) => (scrollPosition: number) => {
  const index = Math.round(scrollPosition / ITEM_HEIGHT);

  const finalIndex = Math.abs(
    index >= data.length ? data.length - index : index,
  );

  return data[finalIndex];
};

export interface ScrollContainer {
  scrollTo: (params: { animated?: boolean; offset: number }) => void;
}

export interface UseWheelPickerProps<TValue extends any> {
  /**
   * List of data to show.
   */
  data: WheelPickerOption<TValue>[];

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
   * Scroll container
   */
  scrollContainer: ScrollContainer | null;

  /**
   * Methods of the WheelPicker
   */
  ref: React.Ref<WheelPicker<TValue>>;
}

export const useWheelPicker = <TValue extends any>(
  props: UseWheelPickerProps<TValue>,
) => {
  const {
    data,
    onValueChange = () => {
      return;
    },
    value: initialValue = data[0].value,
    scrollContainer,
    ref,
  } = props;
  const optionsWithClones = makePaddedOptions(data);
  const [value, setValue] = React.useState<TValue>(initialValue);
  const getOption = React.useMemo(() => getOptionFromOptions(data), [data]);

  const scrollToValue = React.useCallback(
    (toValue: TValue, animated = true) => {
      if (!scrollContainer) return;

      const index = optionsWithClones.findIndex(o => o.value === toValue);

      scrollContainer.scrollTo({
        animated,
        offset: index * ITEM_HEIGHT - ITEM_HEIGHT,
      });
    },
    [scrollContainer, data],
  );

  const handleChange = React.useCallback(
    (newValue: TValue) => {
      if (newValue !== value) {
        onValueChange(newValue);
        setValue(newValue);
      }
    },
    [onValueChange, value],
  );

  const handleScroll = useDebouncedCallback(
    (offset: number) => {
      if (!scrollContainer) return;

      const selectedOption = getOption(offset);

      handleChange(selectedOption.value);
    },
    DEBOUNCE_TIME,
    [scrollContainer, data, handleChange],
  );

  const handleEndDrag = React.useCallback(
    (offset: number) => {
      if (!scrollContainer) return;

      const scrollPosition = Math.round(offset / ITEM_HEIGHT) * ITEM_HEIGHT;

      scrollContainer.scrollTo({
        offset: scrollPosition,
      });

      const selectedOption = getOption(scrollPosition);

      handleChange(selectedOption.value);
    },
    [scrollContainer, data, handleChange],
  );

  React.useImperativeHandle(
    ref,
    () => ({
      selectValue: (newValue: TValue) => scrollToValue(newValue),
    }),
    [scrollContainer, data],
  );

  const handlePressUp = React.useCallback(() => {
    if (!scrollContainer) return;
    const currentIndex = data.findIndex(o => o.value === value);

    if (currentIndex <= 0) return;
    scrollToValue(data[currentIndex - 1].value);
  }, [scrollContainer, value]);

  const handlePressDown = React.useCallback(() => {
    if (!scrollContainer) return;

    const currentIndex = data.findIndex(o => o.value === value);

    if (currentIndex >= data.length - 1) return;
    scrollToValue(data[currentIndex + 1].value);
  }, [scrollContainer, value]);

  return {
    handleEndDrag,
    handlePressDown,
    handlePressUp,
    handleScroll,
    optionsWithClones,
    scrollToValue,
  };
};

export interface RootProps extends ViewProps {
  children?: React.ReactNode;
}

export const StyledRoot = (props: RootProps) => {
  const { children, style, ...viewProps } = props;

  return (
    <View
      style={[{ alignItems: 'center', flex: 1, width: '100%' }, style]}
      {...viewProps}
    >
      {children}
    </View>
  );
};

export interface ListWrapperProps extends ViewProps {
  children?: React.ReactNode;
}

export const StyledListWrapper = (props: ListWrapperProps) => {
  const { children, style, ...viewProps } = props;

  return (
    <View
      style={[{ flex: 1, height: SCROLL_PICKER_HEIGHT, width: '100%' }, style]}
      {...viewProps}
    >
      {children}
    </View>
  );
};

export interface OverlayProps extends ViewProps {
  children?: React.ReactNode;
}

export const StyledBottomOverlay = (props: OverlayProps) => {
  const { children, style, ...viewProps } = props;
  const theme = useTheme();

  return (
    <View
      style={[
        {
          backgroundColor: 'rgba(255, 255, 255, 0.7)',
          borderColor: theme.colors.border.default,
          borderStyle: 'solid',
          borderTopWidth: 1,
          height: ITEM_HEIGHT,
          position: 'absolute',
          top: ITEM_HEIGHT * 2,
          width: '100%',
        },
        style,
      ]}
      {...viewProps}
    >
      {children}
    </View>
  );
};

export const StyledUpperOverlay = (props: OverlayProps) => {
  const { children, style, ...viewProps } = props;
  const theme = useTheme();

  return (
    <View
      style={[
        {
          backgroundColor: 'rgba(255, 255, 255, 0.7)',
          borderBottomWidth: 1,
          borderColor: theme.colors.border.default,
          borderStyle: 'solid',
          height: ITEM_HEIGHT,
          position: 'absolute',
          top: 0,
          width: '100%',
        },
        style,
      ]}
      {...viewProps}
    >
      {children}
    </View>
  );
};

// tslint:disable-next-line
export interface ArrowProps extends TouchableOpacityProps {}

const Arrow = (props: ArrowProps & { direction: 'up' | 'down' }) => {
  const { direction, ...touchableProps } = props;

  return (
    <TouchableOpacity
      style={[
        {
          alignItems: 'center',
          height: 48,
          justifyContent: 'center',
          width: 48,
        },
      ]}
      {...touchableProps}
    >
      <Icon
        color="link"
        size="large"
        name={direction === 'up' ? 'chevron-up' : 'chevron-down'}
      />
    </TouchableOpacity>
  );
};

export const StyledArrowUp = (props: ArrowProps) => (
  <Arrow {...props} direction="up" />
);
export const StyledArrowDown = (props: ArrowProps) => (
  <Arrow {...props} direction="down" />
);

export interface WheelPickerOption<TValue extends any> {
  label: string;
  value: TValue;
}

export interface WheelPickerItemProps<TValue extends any> {
  option: WheelPickerOption<TValue>;
}

export const StyledWheelPickerItem = <TValue extends any>(
  props: WheelPickerItemProps<TValue>,
) => {
  const { option } = props;
  const { label } = option;

  return (
    <View
      style={{
        alignItems: 'center',
        height: ITEM_HEIGHT,
        justifyContent: 'center',
        paddingHorizontal: 4,
        // @ts-ignore
        scrollSnapAlign: 'start',
      }}
    >
      <Text align="center">{label}</Text>
    </View>
  );
};
