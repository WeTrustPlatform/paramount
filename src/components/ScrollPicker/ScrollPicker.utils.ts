import { ITEM_COUNT, ITEM_HEIGHT } from './ScrollPicker.constants';
import { ScrollPickerOption } from './ScrollPickerItem';

const cloneValue = (value: string) => `${value}_CLONE`;

export const makeOptionsWithClones = (options: ScrollPickerOption[]) => {
  const firstClones = options
    .slice(0, ITEM_COUNT)
    .map(o => ({ ...o, value: cloneValue(o.value) }));
  const lastClones = options
    .slice(options.length - 2)
    .map(o => ({ ...o, value: cloneValue(o.value) }));

  return [...lastClones, ...options, ...firstClones];
};

export const getOptionFromOptions = (options: ScrollPickerOption[]) => (
  scrollPosition: number,
) => {
  const index = Math.round(scrollPosition / ITEM_HEIGHT);

  const finalIndex = Math.abs(
    index >= options.length ? options.length - index : index,
  );

  return options[finalIndex];
};
