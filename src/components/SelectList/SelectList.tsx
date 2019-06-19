import * as React from 'react';
import { FlatList } from 'react-native';

import { useTheme } from '../../theme';
import { SelectListItemProps } from './SelectListItem';

export interface SelectListProps {
  /**
   * Select item or items.
   * For single-select use single string.
   * For multi-select use string array
   */
  value: string | string[];

  /**
   * Called when a select list item is pressed
   */
  onValueChange: (
    itemValue: string | string[],
    itemIndex: number,
  ) => void | undefined;

  /**
   * `SelectListItem` components
   */
  children:
    | Array<React.ReactElement<SelectListItemProps>>
    | React.ReactElement<SelectListItemProps>;

  /**
   * Use `ref` prop instead for using `FlatList` methods
   */
  innerRef?: React.Ref<FlatList<SelectListItemProps>>;
}

const getIsMulti = (value: string | string[]): value is string[] =>
  Array.isArray(value);

const SelectListBase = (props: SelectListProps): any => {
  const { value, onValueChange, children, innerRef } = props;
  const theme = useTheme();
  const isMulti = getIsMulti(value);

  const handleOnPress = React.useCallback(
    (itemValue: string, itemIndex: number, isSelected: boolean) => {
      if (isMulti && Array.isArray(value)) {
        if (isSelected) {
          onValueChange(value.filter(val => val !== itemValue), itemIndex);
        } else {
          onValueChange(value.concat(itemValue), itemIndex);
        }
      } else {
        onValueChange(itemValue, itemIndex);
      }
    },
    [value, onValueChange],
  );

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
          isMulti && Array.isArray(value)
            ? value.some(selVal => selVal === item.value)
            : value === item.value;

        return React.cloneElement(selectListItem, {
          index,
          isSelected,
          onPress: handleOnPress,
        });
      }}
    />
  );
};

export const SelectList = React.forwardRef<
  FlatList<SelectListItemProps>,
  SelectListProps
>((props, ref) => {
  return <SelectListBase {...props} innerRef={ref} />;
});
