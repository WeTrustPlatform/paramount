import * as React from 'react';

import { Checkbox } from '../Checkbox';
import { ListItem } from '../ListItem';

export interface SelectListItemProps {
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

  /**
   * Description of the field
   */
  description?: string;
}

export const SelectListItem = (props: SelectListItemProps) => {
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
