import * as React from 'react';
import { FlatList, FlatListProps } from 'react-native';

import { useTheme } from '../../theme';
import { getOverrides, Override, WithOverrides } from '../../utils/overrides';
import { Box } from '../Box';
import { Checkbox } from '../Checkbox';
import { ListItem, ListItemProps } from '../ListItem';

type Value<TIsMulti extends boolean, TValue extends any> = TIsMulti extends true
  ? TValue[]
  : TValue;

export interface ListPickerOption<TValue extends any> {
  value: TValue;
  label: string;
  description?: string;
}

interface ListPickerBaseProps<TIsMulti extends boolean, TValue extends any> {
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
   * List of options
   */
  options?: Array<ListPickerOption<TValue>>;
}

const isMulti = <TValue extends any>(
  value: TValue | TValue[],
): value is TValue[] => Array.isArray(value);

export interface ListPickerOverrides<TValue extends any> {
  List: ListProps<TValue>;
  ListPickerItem: ListPickerItemProps<TValue>;
}

export interface ListPickerProps<TIsMulti extends boolean, TValue extends any>
  extends WithOverrides<
    ListPickerBaseProps<TIsMulti, TValue>,
    ListPickerOverrides<TValue>
  > {}

export const ListPicker = <TIsMulti extends boolean, TValue extends any>(
  props: ListPickerProps<TIsMulti, TValue>,
) => {
  const { value, onValueChange, options = [], overrides = {} } = props;
  const theme = useTheme();
  const [ListPickerItem, listPickerItemProps] = getOverrides(
    StyledListPickerItem,
    props,
    overrides.ListPickerItem,
  );
  const [List, listProps] = getOverrides(StyledList, props, overrides.List);

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
    <List
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
            {...listPickerItemProps}
          />
        );
      }}
      {...listProps}
    />
  );
};

interface ListProps<TValue extends any>
  extends FlatListProps<ListPickerOption<TValue>> {}

const StyledList = <TValue extends any>(props: ListProps<TValue>) => {
  return <FlatList {...props} />;
};

interface ListPickerItemProps<TValue extends any> {
  index?: number;
  isSelected?: boolean;
  onPress?: (value: TValue, index: number, isSelected: boolean) => void;
  value: TValue;
  label: string;
  description?: string;
  override?: Override<ListPickerItemProps<TValue>, ListItemProps>;
}

const StyledListPickerItem = <TValue extends any = any>(
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
    override,
  } = props;

  const [ListItemR, listItemRProps] = getOverrides(ListItem, props, override);

  return (
    <ListItemR
      onPress={() => onPress(value, index, isSelected)}
      title={label}
      description={isSelected && description}
      overrides={{
        Action: {
          component: () => (
            <Box
              justifyContent="center"
              position="absolute"
              right={0}
              alignItems="center"
              alignSelf="center"
            >
              <Checkbox
                onValueChange={() => onPress(value, index, isSelected)}
                shape="circle"
                value={isSelected}
              />
            </Box>
          ),
        },
      }}
      {...listItemRProps}
    />
  );
};
