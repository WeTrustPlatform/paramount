import * as React from 'react';

import { Checkbox } from '../Checkbox';
import { ListItem, ListItemProps } from '../ListItem';

export interface SelectListItemProps extends Omit<ListItemProps, 'onPress'> {
  /**
   * Injected by SelectList. Index of the item on the list.
   * @default 0
   */
  index?: number;

  /**
   * Injected by SelectList. When true, it will be marked as checked
   * @default false
   */
  isSelected?: boolean;

  /**
   * Injected by SelectList. Called when pressed select list item
   */
  onPress?: (value: string, index: number, isSelected: boolean) => void;

  /**
   * Value of the select list item
   */
  value: string;

  /**
   * Label of the select list item
   */
  label: string;
}

export const SelectListItem = (props: SelectListItemProps) => {
  const {
    index = 0,
    isSelected = false,
    label,
    onPress = () => {
      return;
    },
    size = 'medium',
    value,
    ...listItemProps
  } = props;

  return (
    <ListItem
      onPress={() => {
        onPress(value, index, isSelected);
      }}
      title={label}
      rightIcon={
        <Checkbox isInteractive={false} shape="circle" value={isSelected} />
      }
      {...listItemProps}
    />
  );
};
