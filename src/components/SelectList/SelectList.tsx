import * as React from 'react';

import { Theme, withTheme } from '../../theme';
import { SelectListItemBaseProps } from './SelectListItem';

export interface SelectListProps {
  children: Array<React.ReactElement<SelectListItemBaseProps>>;
  selectedValue: string | string[];
  isMulti?: boolean;
  theme: Theme;
  onValueChange: (
    itemValue: string | string[],
    itemIndex: number,
  ) => void | undefined;
}

const SelectListBase = (props: SelectListProps): any => {
  const { selectedValue, onValueChange, isMulti, children } = props;

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

  return React.Children.map(children, (selectListItem, index) => {
    if (!React.isValidElement(selectListItem)) {
      return selectListItem;
    }

    const isSelected =
      isMulti && Array.isArray(selectedValue)
        ? selectedValue.some(selVal => selVal === selectListItem.props.value)
        : selectedValue === selectListItem.props.value;

    return React.cloneElement(selectListItem, {
      index,
      isSelected,
      onSelect: handleOnPress,
    });
  });
};

export const SelectList = withTheme(SelectListBase);
export default SelectList;
