import * as React from 'react';

import { Theme, withTheme } from '../../theme';
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
  theme: Theme;
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
    theme,
    value,
    ...listItemProps
  } = props;

  return (
    <ListItem
      onPress={() => onSelect(value, index, isSelected)}
      label={label}
      rightIcon={
        <Checkbox isInteractive={false} shape="circle" isChecked={isSelected} />
      }
      {...listItemProps}
    />
  );
};

export const SelectListItem = withTheme(SelectListItemBase);
export default SelectListItem;
