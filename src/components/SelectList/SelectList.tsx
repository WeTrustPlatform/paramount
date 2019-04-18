import * as React from 'react';
import { FlatList, FlatListProps } from 'react-native';
import { Omit } from 'ts-essentials';

import { useTheme } from '../../theme';
import { SelectListItemBaseProps } from './SelectListItem';

export interface SelectListProps
  extends Omit<
    Omit<FlatListProps<SelectListItemBaseProps>, 'data'>,
    'renderItem'
  > {
  children: Array<React.ReactElement<SelectListItemBaseProps>>;
  selectedValue: string | string[];
  innerRef?: React.Ref<FlatList<SelectListItemBaseProps>>;
  isMulti?: boolean;
  onValueChange: (
    itemValue: string | string[],
    itemIndex: number,
  ) => void | undefined;
}

const SelectListBase = (props: SelectListProps): any => {
  const {
    selectedValue,
    onValueChange,
    isMulti,
    children,
    innerRef,
    ...flatListProps
  } = props;
  const theme = useTheme();

  const handleOnPress = (
    itemValue: string,
    itemIndex: number,
    isSelected: boolean,
  ) => {
    if (isMulti && Array.isArray(selectedValue)) {
      if (isSelected) {
        onValueChange(
          selectedValue.filter(val => val !== itemValue),
          itemIndex,
        );
      } else {
        onValueChange(selectedValue.concat(itemValue), itemIndex);
      }
    } else {
      onValueChange(itemValue, itemIndex);
    }
  };

  const childrenArray = React.Children.toArray(children);
  const data = childrenArray.map(child => child.props);

  return (
    <FlatList
      ref={innerRef}
      keyExtractor={item => item.value}
      getItemLayout={(_, index) => ({
        index,
        length: theme.controlHeights.medium,
        offset: theme.controlHeights.medium * index,
      })}
      data={data}
      renderItem={({ item, index }) => {
        const selectListItem = childrenArray[index];

        const isSelected =
          isMulti && Array.isArray(selectedValue)
            ? selectedValue.some(selVal => selVal === item.value)
            : selectedValue === item.value;

        return React.cloneElement(selectListItem, {
          index,
          isSelected,
          onSelect: handleOnPress,
        });
      }}
      {...flatListProps}
    />
  );
};

export const SelectList = React.forwardRef<
  FlatList<SelectListItemBaseProps>,
  SelectListProps
>((props, ref) => {
  return <SelectListBase {...props} innerRef={ref} />;
});
