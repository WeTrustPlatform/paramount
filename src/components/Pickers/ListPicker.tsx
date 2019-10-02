import dlv from 'dlv';
import * as React from 'react';
import { FlatList, FlatListProps } from 'react-native';

import { useTheme } from '../../theme';
import { getOverrides, Override, WithOverrides } from '../../utils/overrides';
import { OptionalString } from '../../utils/types';
import { Box } from '../Box';
import { Checkbox } from '../Checkbox';
import { ListItem, ListItemProps } from '../ListItem';
import {
  PickerItem,
  PickerItemProps,
  usePicker,
  UsePickerProps,
} from './usePicker';

export interface ListPickerItem<TValue extends any> extends PickerItem<TValue> {
  label: string;
  description?: OptionalString;
}

export interface ListPickerOverrides<TValue extends any> {
  List: ListProps<TValue>;
  ListPickerItem: ListPickerItemProps<TValue>;
}

export interface ListPickerProps<
  TValue extends any,
  TPickerItem extends PickerItem<TValue>,
  TIsMulti extends boolean = false
>
  extends WithOverrides<
    UsePickerProps<TValue, TPickerItem & ListPickerItem<TValue>, TIsMulti>,
    ListPickerOverrides<TValue>
  > {}

export const ListPicker = <
  TValue extends any,
  TPickerItem extends PickerItem<TValue>,
  TIsMulti extends boolean = false
>(
  props: ListPickerProps<TValue, TPickerItem, TIsMulti>,
) => {
  const {
    data = [],
    value,
    onValueChange = () => {
      return;
    },
    keyExtractor,
    isMulti,
    overrides = {},
  } = props;
  const theme = useTheme();

  const [ListPickerItemR, listPickerItemProps] = getOverrides(
    StyledListPickerItem,
    props,
    dlv(theme, 'overrides.ListPicker.ListPickerItem'),
    overrides.ListPickerItem,
  );
  const [List, listProps] = getOverrides(
    StyledList,
    props,
    dlv(theme, 'overrides.ListPicker.List'),
    overrides.List,
  );

  const { items, handleSelect } = usePicker({
    value,
    onValueChange,
    data,
    isMulti,
    keyExtractor,
  });

  return (
    <List
      getItemLayout={(_, index) => ({
        index,
        length: theme.controlHeights.medium,
        offset: theme.controlHeights.medium * index,
      })}
      data={items}
      renderItem={({ item }) => {
        return (
          <ListPickerItemR
            onPress={() =>
              handleSelect(item.value, item.index, item.isSelected)
            }
            {...item}
            {...listPickerItemProps}
          />
        );
      }}
      {...listProps}
    />
  );
};

interface ListProps<TValue extends any>
  extends FlatListProps<ListPickerItem<TValue> & PickerItemProps> {}

const StyledList = <TValue extends any>(props: ListProps<TValue>) => {
  return <FlatList {...props} />;
};

interface ListPickerItemProps<TValue extends any> {
  index: number;
  isSelected: boolean;
  onPress: (value: TValue, index: number, isSelected: boolean) => void;
  value: TValue;
  label: string;
  description?: OptionalString;
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
