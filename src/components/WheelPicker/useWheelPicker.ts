import * as React from 'react';

import { useDebouncedCallback } from '../../hooks/useDebouncedCallback';
import { WheelPicker } from './WheelPicker';
import { ITEM_HEIGHT } from './WheelPicker.constants';
import { WheelPickerOption } from './WheelPickerItem';

const DEBOUNCE_TIME = 300;

export const makePaddedOptions = <TValue extends any>(
  options: WheelPickerOption<TValue>[],
) => {
  return [
    { value: 'emptyStart', label: '' },
    ...options,
    { value: 'emptyEnd', label: '' },
  ];
};

export const getOptionFromOptions = <TValue extends any>(
  options: WheelPickerOption<TValue>[],
) => (scrollPosition: number) => {
  const index = Math.round(scrollPosition / ITEM_HEIGHT);

  const finalIndex = Math.abs(
    index >= options.length ? options.length - index : index,
  );

  return options[finalIndex];
};

export interface ScrollContainer {
  scrollTo: (params: { animated?: boolean; offset: number }) => void;
}

export interface UseWheelPickerProps<TValue extends any> {
  /**
   * List of options to show.
   */
  options: WheelPickerOption<TValue>[];

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
    options,
    onValueChange = () => {
      return;
    },
    value: initialValue = options[0].value,
    scrollContainer,
    ref,
  } = props;
  const optionsWithClones = makePaddedOptions(options);
  const [value, setValue] = React.useState<TValue>(initialValue);
  const getOption = React.useMemo(() => getOptionFromOptions(options), [
    options,
  ]);

  const scrollToValue = React.useCallback(
    (toValue: TValue, animated = true) => {
      if (!scrollContainer) return;

      const index = optionsWithClones.findIndex(o => o.value === toValue);

      scrollContainer.scrollTo({
        animated,
        offset: index * ITEM_HEIGHT - ITEM_HEIGHT,
      });
    },
    [scrollContainer, options],
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
    [scrollContainer, options, handleChange],
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
    [scrollContainer, options, handleChange],
  );

  React.useImperativeHandle(
    ref,
    () => ({
      selectValue: (newValue: TValue) => scrollToValue(newValue),
    }),
    [scrollContainer, options],
  );

  const handlePressUp = React.useCallback(() => {
    if (!scrollContainer) return;
    const currentIndex = options.findIndex(o => o.value === value);

    if (currentIndex <= 0) return;
    scrollToValue(options[currentIndex - 1].value);
  }, [scrollContainer, value]);

  const handlePressDown = React.useCallback(() => {
    if (!scrollContainer) return;

    const currentIndex = options.findIndex(o => o.value === value);

    if (currentIndex >= options.length - 1) return;
    scrollToValue(options[currentIndex + 1].value);
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
