import dlv from 'dlv';
import React from 'react';
import { View, ViewProps } from 'react-native';

import { useTheme } from '../../theme';
import { getOverrides, WithOverrides } from '../../utils/Overrides';
import { Button } from '../Button';
import {
  PickerItem,
  PickerItemProps,
  usePicker,
  UsePickerProps,
} from './usePicker';

export interface PickerOverrides<
  TValue extends any,
  TItem extends PickerItem<TValue>,
  TItemProps extends ItemProps<TValue, TItem & PickerItemProps>
> {
  Root: RootProps;
  Item: TItemProps;
}

export interface ItemProps<
  TValue extends any,
  TItem extends PickerItem<TValue> & PickerItemProps
> {
  item: TItem;
  onSelect?: () => void;
}

export interface PickerProps<
  TValue extends any,
  TItem extends PickerItem<TValue>,
  TItemProps extends ItemProps<TValue, TItem & PickerItemProps>,
  TIsMulti extends boolean = false
>
  extends WithOverrides<
    UsePickerProps<TValue, TItem, TIsMulti>,
    PickerOverrides<TValue, TItem, TItemProps>
  > {}

export const Picker = <
  TValue extends any,
  TItem extends PickerItem<TValue>,
  TItemProps extends ItemProps<TValue, TItem & PickerItemProps>,
  TIsMulti extends boolean = false
>(
  props: PickerProps<TValue, TItem, TItemProps, TIsMulti>,
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

  const [Root, rootProps] = getOverrides(
    StyledRoot,
    props,
    dlv(theme, 'overrides.Picker.Root'),
    overrides.Root,
  );
  const [Item, itemProps] = getOverrides(
    StyledItem,
    props,
    dlv(theme, 'overrides.Picker.Item'),
    overrides.Item,
  );

  const { items, handleSelect } = usePicker({
    value,
    onValueChange,
    data,
    isMulti,
    keyExtractor,
  });

  return (
    <Root {...rootProps}>
      {items.map(item => (
        <Item
          key={item.key}
          onSelect={() => handleSelect(item.value, item.index, item.isSelected)}
          item={item}
          {...itemProps}
        />
      ))}
    </Root>
  );
};

interface RootProps extends ViewProps {
  children?: React.ReactNode;
}

const StyledRoot = (props: RootProps) => {
  const { children, style, ...viewProps } = props;
  const theme = useTheme();

  return (
    <View
      style={[
        {
          borderRadius: theme.controlBorderRadius.medium,
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'flex-start',
        },
        style,
      ]}
      {...viewProps}
    >
      {children}
    </View>
  );
};

export const StyledItem = <
  TValue extends any,
  TItem extends PickerItem<TValue>,
  TItemProps extends ItemProps<TValue, TItem & PickerItemProps>
>(
  props: TItemProps,
) => {
  const { item, onSelect } = props;
  const { isSelected, value } = item;
  const theme = useTheme();

  return (
    <Button
      color={isSelected ? 'primary' : 'default'}
      overrides={{
        Touchable: {
          style: {
            backgroundColor: isSelected ? 'white' : 'transparent',
            paddingLeft: 0,
            paddingRight: 0,
          },
        },
        Title: {
          style: {
            color: isSelected
              ? theme.colors.text.primary
              : theme.colors.text.muted,
          },
        },
      }}
      title={typeof value === 'string' ? value : 'Invalid value'}
      onPress={onSelect}
    />
  );
};
