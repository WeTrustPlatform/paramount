import * as React from 'react';

import { Checkbox } from '../Checkbox';
import { ListItem, ListItemProps } from '../ListItem';

export interface SelectListItemBaseProps {
  index?: number;
  isSelected?: boolean;
  onSelect?: (value: string, index: number, isSelected: boolean) => void;
  value: string;
  label: string;
}

export interface SelectListItemProps
  extends SelectListItemBaseProps,
    ListItemProps {
  isDisabled?: boolean;
}

const SelectListItemBase = (props: SelectListItemProps) => {
  const {
    index = 0,
    isDisabled = false,
    isSelected = false,
    label,
    onSelect = () => null,
    size = 'medium',
    value,
    ...listItemProps
  } = props;

  return (
    <ListItem
      onPress={e => {
        e.preventDefault();
        onSelect(value, index, isSelected);
      }}
      title={label}
      rightIcon={
        <Checkbox isInteractive={false} shape="circle" isChecked={isSelected} />
      }
      {...listItemProps}
    />
  );
};

export const SelectListItem = React.memo(SelectListItemBase);
