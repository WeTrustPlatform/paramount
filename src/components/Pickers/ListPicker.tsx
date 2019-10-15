import dlv from 'dlv';
import React from 'react';
import { ViewProps, View } from 'react-native';

import { useTheme } from '../../theme';
import { getOverrides, WithOverrides } from '../../utils/Overrides';
import { OptionalString } from '../../utils/types';
import { Box } from '../Box';
import { Checkbox } from '../Checkbox';
import { ListItem, ListItemOverrides } from '../ListItem';

import {
  PickerItem,
  PickerItemProps,
  usePicker,
  UsePickerProps,
} from './usePicker';

export interface ListPickerItem<TValue extends any> extends PickerItem<TValue> {
  label: string;
  description?: OptionalString;
  isDisabled?: boolean;
}

export interface ListPickerOverrides<TValue extends any> {
  Root: RootProps;
  ListPickerItem: ListPickerItemProps<TValue>;
}

interface ListPickerBaseProps<
  TValue extends any,
  TPickerItem extends PickerItem<TValue>,
  TIsMulti extends boolean = false
>
  extends UsePickerProps<
    TValue,
    TPickerItem & ListPickerItem<TValue>,
    TIsMulti
  > {}

export interface ListPickerProps<
  TValue extends any,
  TPickerItem extends PickerItem<TValue>,
  TIsMulti extends boolean = false
>
  extends WithOverrides<
    ListPickerBaseProps<TValue, TPickerItem, TIsMulti>,
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

  const { items, handleSelect } = usePicker({
    value,
    onValueChange,
    data,
    isMulti,
    keyExtractor,
  });

  const [Root, rootProps] = getOverrides(
    StyledRoot,
    props,
    {},
    dlv(theme, 'overrides.ListPicker.List'),
    overrides.Root,
  );

  return (
    <Root {...rootProps}>
      {items.map(item => {
        const { key, isSelected, index, value, label, description } = item;

        const [ListPickerItemR, listPickerItemProps] = getOverrides(
          StyledListPickerItem,
          props,
          {
            key,
            isSelected,
            index,
            value,
            label,
            description,
            onPress: () =>
              handleSelect(item.value, item.index, item.isSelected),
          },
          dlv(theme, 'overrides.ListPicker.ListPickerItem'),
          overrides.ListPickerItem,
        );

        return <ListPickerItemR key={key} {...listPickerItemProps} />;
      })}
    </Root>
  );
};

interface RootProps extends ViewProps {
  children?: React.ReactNode;
}

const StyledRoot = (props: RootProps) => {
  const { children, style, ...viewProps } = props;

  return (
    <View style={[{}, style]} {...viewProps}>
      {children}
    </View>
  );
};

interface ListPickerItemBaseProps<TValue extends any> extends PickerItemProps {
  onPress: (value: TValue, index: number, isSelected: boolean) => void;
  value: TValue;
  label: string;
  description?: OptionalString;
  isDisabled?: boolean;
}

export interface ListPickerItemProps<TValue extends any>
  extends WithOverrides<ListPickerItemBaseProps<TValue>, ListItemOverrides> {}

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
    overrides = {},
    isDisabled,
  } = props;

  const Action = () => (
    <Box justifyContent="center" alignItems="center">
      <Checkbox
        onValueChange={() => onPress(value, index, isSelected)}
        shape="circle"
        value={isSelected}
        isDisabled={isDisabled}
      />
    </Box>
  );

  const [ListItemR, listItemRProps] = getOverrides(ListItem, props, {
    onPress: () => onPress(value, index, isSelected),
    title: label,
    description,
    isDisabled,
    overrides: {
      ...overrides,
      Touchable: {
        style: {
          paddingRight: 8,
        },
        ...overrides.Touchable,
      },
      Action: {
        component: Action,
        ...overrides.Action,
      },
    },
  });

  return <ListItemR {...listItemRProps} />;
};
