import * as React from 'react';

import { WheelPicker } from './WheelPicker';
import { ITEM_HEIGHT } from './WheelPicker.constants';
import { WheelPickerOption } from './WheelPickerItem';

export const makePaddedOptions = (options: WheelPickerOption[]) => {
  return [
    { value: 'emptyStart', label: '' },
    ...options,
    { value: 'emptyEnd', label: '' },
  ];
};

export const getOptionFromOptions = (options: WheelPickerOption[]) => (
  scrollPosition: number,
) => {
  const index = Math.round(scrollPosition / ITEM_HEIGHT);

  const finalIndex = Math.abs(
    index >= options.length ? options.length - index : index,
  );

  return options[finalIndex];
};

export interface ScrollContainer {
  scrollTo: (params: { animated?: boolean; offset: number }) => void;
}

export interface UseWheelPickerProps {
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
   * Scroll container
   */
  scrollContainer: ScrollContainer | null;

  /**
   * Methods of the WheelPicker
   */
  ref: React.Ref<WheelPicker>;
}

export const useWheelPicker = (props: UseWheelPickerProps) => {
  const {
    options,
    onValueChange = () => {
      return;
    },
    value: initialValue,
    scrollContainer,
    ref,
  } = props;
  const optionsWithClones = makePaddedOptions(options);
  const [currentValue, setCurrentValue] = React.useState(initialValue);
  const getOption = React.useMemo(() => getOptionFromOptions(options), [
    options,
  ]);
  const initialScrollIndex = options.findIndex(
    o => o.value === (initialValue || options[0].value),
  );

  const scrollToValue = React.useCallback(
    (toValue: string, animated = true) => {
      if (!scrollContainer) return;

      const index = optionsWithClones.findIndex(o => o.value === toValue);

      scrollContainer.scrollTo({
        animated,
        offset: index * ITEM_HEIGHT - ITEM_HEIGHT,
      });

      setCurrentValue(toValue);
    },
    [scrollContainer, options],
  );

  React.useLayoutEffect(() => {
    if (initialValue) {
      scrollToValue(initialValue, false);
    } else {
      scrollToValue(options[0].value, false);
    }
  }, [options]);

  const handleScroll = React.useCallback(
    (offset: number) => {
      if (!scrollContainer) return;

      const selectedOption = getOption(offset);

      onValueChange(selectedOption.value);
      setCurrentValue(selectedOption.value);
    },
    [scrollContainer, options],
  );

  const handleEndDrag = React.useCallback(
    (offset: number) => {
      if (!scrollContainer) return;

      const scrollPosition = Math.round(offset / ITEM_HEIGHT) * ITEM_HEIGHT;

      scrollContainer.scrollTo({
        offset: scrollPosition,
      });

      const selectedOption = getOption(scrollPosition);

      onValueChange(selectedOption.value);
      setCurrentValue(selectedOption.value);
    },
    [scrollContainer, options],
  );

  React.useImperativeHandle(
    ref,
    () => ({
      selectValue: (value: string) => scrollToValue(value),
    }),
    [scrollContainer, options],
  );

  const handlePressUp = React.useCallback(() => {
    if (!scrollContainer) return;
    const currentIndex = options.findIndex(o => o.value === currentValue);

    if (currentIndex <= 0) return;
    scrollToValue(options[currentIndex - 1].value);
  }, [scrollContainer, currentValue]);

  const handlePressDown = React.useCallback(() => {
    if (!scrollContainer) return;

    const currentIndex = options.findIndex(o => o.value === currentValue);

    if (currentIndex >= options.length - 1) return;
    scrollToValue(options[currentIndex + 1].value);
  }, [scrollContainer, currentValue]);

  return {
    handleEndDrag,
    handlePressDown,
    handlePressUp,
    handleScroll,
    initialScrollIndex,
    optionsWithClones,
    scrollToValue,
  };
};
