import * as React from 'react';

type Value<
  TValue extends any,
  TIsMulti extends boolean = false
> = TIsMulti extends true ? TValue[] : TValue;

export interface PickerItem<TValue extends any> {
  value: TValue;
  key?: string;
}

export interface PickerItemProps {
  key: string;
  isSelected: boolean;
  index: number;
}

export interface UsePickerProps<
  TValue extends any,
  TPickerItem extends PickerItem<TValue>,
  TIsMulti extends boolean = false
> {
  /**
   * Set whether it should allow multiple selections. You should specify the value to get proper type-checking.
   * @default false
   */
  isMulti?: TIsMulti;

  /**
   * Select item or items.
   * For single-select use single string.
   * For multi-select use string array
   *
   * *This is a controlled component*; Value will reflect selected items
   */
  value?: Value<TValue, TIsMulti> | null;

  /**
   * Called when a select list item is pressed
   */
  onValueChange?: (value: Value<TValue, TIsMulti>, index: number) => void;

  /**
   * List of data
   */
  data?: Array<TPickerItem>;

  /**
   * Used to extract a unique key for a given item at the specified index.
   * Key is used for caching and as the react key to track item re-ordering.
   * The default extractor checks item.key, then falls back to using the index, like React does.
   */
  keyExtractor?: (item: TPickerItem) => string;
}

const isMulti = <TValue extends any>(
  value: TValue | TValue[],
): value is TValue[] => Array.isArray(value);

export const usePicker = <
  TValue extends any,
  TPickerItem extends PickerItem<TValue>,
  TIsMulti extends boolean = false
>(
  props: UsePickerProps<TValue, TPickerItem, TIsMulti>,
) => {
  const {
    value,
    onValueChange = () => {
      return;
    },
    data = [],
    keyExtractor,
  } = props;

  const handleSelect = React.useCallback(
    (itemValue: TValue, itemIndex: number, isSelected: boolean) => {
      if (isMulti(value)) {
        if (isSelected) {
          onValueChange(
            // @ts-ignore: TODO: make this work
            value.filter(val => val !== itemValue) as Value<TValue, TIsMulti>,
            itemIndex,
          );
        } else {
          onValueChange(
            value.concat(itemValue) as Value<TValue, TIsMulti>,
            itemIndex,
          );
        }
      } else {
        onValueChange(itemValue as Value<TValue, TIsMulti>, itemIndex);
      }
    },
    [value, onValueChange],
  );

  const items = data.map((item, index) => {
    const isSelected = (isMulti(value)
      ? //
        // @ts-ignore: TODO: make this work
        value.some(selVal => selVal === item.value)
      : value === item.value) as boolean;

    return {
      ...item,
      key: keyExtractor ? keyExtractor(item) : item.key || `${index}`,
      index,
      isSelected,
    };
  }) as (TPickerItem & PickerItemProps)[];

  return {
    handleSelect,
    items,
  };
};
