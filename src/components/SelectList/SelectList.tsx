import * as React from 'react';
import { FlatList } from 'react-native';

import { useTheme } from '../../theme';
import { SelectListItem, SelectListItemProps } from './SelectListItem';

export type Value<TIsMulti extends boolean> = TIsMulti extends true
  ? string[]
  : string;

export interface SelectListOption {
  value: string;
  label: string;
}

export interface SelectListProps<TIsMulti extends boolean> {
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
  value: Value<TIsMulti>;

  /**
   * Called when a select list item is pressed
   */
  onValueChange: (
    itemValue: Value<TIsMulti>,
    itemIndex: number,
  ) => void | undefined;

  /**
   * `SelectListItem` components
   */
  options: SelectListOption[];

  /**
   * Use `ref` prop instead for using `FlatList` methods
   */
  innerRef?: React.Ref<FlatList<SelectListItemProps>>;
}

const getIsMulti = (value: string | string[]): value is string[] =>
  Array.isArray(value);

export const SelectList = <TIsMulti extends boolean>(
  props: SelectListProps<TIsMulti>,
) => {
  const { value, onValueChange, options, innerRef } = props;
  const theme = useTheme();
  const isMulti = getIsMulti(value);

  const handleOnPress = React.useCallback(
    (itemValue: string, itemIndex: number, isSelected: boolean) => {
      if (isMulti && Array.isArray(value)) {
        if (isSelected) {
          onValueChange(
            value.filter(val => val !== itemValue) as Value<TIsMulti>,
            itemIndex,
          );
        } else {
          onValueChange(value.concat(itemValue) as Value<TIsMulti>, itemIndex);
        }
      } else {
        onValueChange(itemValue as Value<TIsMulti>, itemIndex);
      }
    },
    [value, onValueChange],
  );

  return (
    <FlatList
      ref={innerRef}
      keyExtractor={item => item.value}
      getItemLayout={(_, index) => ({
        index,
        length: theme.controlHeights.medium,
        offset: theme.controlHeights.medium * index,
      })}
      data={options}
      renderItem={({ item, index }) => {
        const isSelected =
          isMulti && Array.isArray(value)
            ? value.some(selVal => selVal === item.value)
            : value === item.value;

        return (
          <SelectListItem
            value={item.value}
            label={item.label}
            index={index}
            isSelected={isSelected}
            onPress={handleOnPress}
          />
        );
      }}
    />
  );
};

export const SelectListWithRef = React.forwardRef(
  <TIsMulti extends boolean>(
    props: SelectListProps<TIsMulti>,
    ref: React.Ref<FlatList<SelectListItemProps>>,
  ) => {
    return <SelectList<TIsMulti> {...props} innerRef={ref} />;
  },
);
