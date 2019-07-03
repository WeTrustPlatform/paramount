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
