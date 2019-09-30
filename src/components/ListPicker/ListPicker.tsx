import * as React from 'react';
import { FlatList } from 'react-native';

import { useTheme } from '../../theme';
import { Checkbox } from '../Checkbox';
import { ListItem } from '../ListItem';

export interface ListPickerItemProps<TValue extends any> {
  /**
   * Injected by ListPicker. Index of the item on the list.
   * @default 0
   */
  index?: number;

  /**
   * Injected by ListPicker. When true, it will be marked as checked
   * @default false
   */
  isSelected?: boolean;

  /**
   * Injected by ListPicker. Called when pressed select list item
   */
  onPress?: (value: TValue, index: number, isSelected: boolean) => void;

  /**
   * Value of the select list item
   */
  value: TValue;

  /**
   * Label of the select list item
   */
  label: string;

  /**
   * Description of the field
   */
  description?: string;
}

export const ListPickerItem = <TValue extends any = any>(
  props: ListPickerItemProps<TValue>,
) => {
  const {
    index = 0,
    isSelected = false,
    label,
    onPress = () => {
      return;
    },
    value,
    description,
  } = props;

  return (
    <ListItem
      onPress={() => onPress(value, index, isSelected)}
      title={label}
      description={isSelected && description}
      rightNode={
        <Checkbox isInteractive={false} shape="circle" value={isSelected} />
      }
    />
  );
};

type Value<TIsMulti extends boolean, TValue extends any> = TIsMulti extends true
  ? TValue[]
  : TValue;

export interface ListPickerOption<TValue extends any> {
  value: TValue;
  label: string;
  description?: string;
}

export interface ListPickerProps<TIsMulti extends boolean, TValue extends any> {
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
  value: Value<TIsMulti, TValue>;

  /**
   * Called when a select list item is pressed
   */
  onValueChange: (value: Value<TIsMulti, TValue>, index: number) => void;

  /**
   * `ListPickerItem` components
   */
  options?: Array<ListPickerOption<TValue>>;

  /**
   * Use `ref` prop instead for using `FlatList` methods
   */
  innerRef?: React.Ref<FlatList<ListPickerItemProps<TValue>>>;
}

const isMulti = <TValue extends any>(
  value: TValue | TValue[],
): value is TValue[] => Array.isArray(value);

export const ListPicker = <TIsMulti extends boolean, TValue extends any>(
  props: ListPickerProps<TIsMulti, TValue>,
) => {
  const { value, onValueChange, options = [], innerRef } = props;
  const theme = useTheme();

  const handleOnPress = React.useCallback(
    (itemValue: TValue, itemIndex: number, isSelected: boolean) => {
      if (isMulti(value)) {
        if (isSelected) {
          onValueChange(
            // @ts-ignore: TODO: make this work
            value.filter(val => val !== itemValue) as Value<TIsMulti, TValue>,
            itemIndex,
          );
        } else {
          onValueChange(
            value.concat(itemValue) as Value<TIsMulti, TValue>,
            itemIndex,
          );
        }
      } else {
        onValueChange(itemValue as Value<TIsMulti, TValue>, itemIndex);
      }
    },
    [value, onValueChange],
  );

  return (
    <FlatList
      ref={innerRef}
      keyExtractor={item => `${item.value}`}
      getItemLayout={(_, index) => ({
        index,
        length: theme.controlHeights.medium,
        offset: theme.controlHeights.medium * index,
      })}
      data={options}
      renderItem={({ item, index }) => {
        const isSelected = isMulti(value)
          ? //
            // @ts-ignore: TODO: make this work
            value.some(selVal => selVal === item.value)
          : value === item.value;

        return (
          <ListPickerItem
            value={item.value}
            label={item.label}
            description={item.description}
            index={index}
            isSelected={isSelected}
            onPress={handleOnPress}
          />
        );
      }}
    />
  );
};

export const ListPickerWithRef = React.forwardRef(
  <TIsMulti extends boolean, TValue extends any>(
    props: ListPickerProps<TIsMulti, TValue>,
    ref: React.Ref<FlatList<ListPickerItemProps<TValue>>>,
  ) => {
    return <ListPicker<TIsMulti, TValue> {...props} innerRef={ref} />;
  },
);
