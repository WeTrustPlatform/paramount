import * as React from 'react';

import { ITheme, withTheme } from '../../theme';
import { ISelectListItemProps } from './SelectListItem';

export interface ISelectListProps {
  children: Array<React.ReactElement<ISelectListItemProps>>;
  selectedValue: string | string[];
  isMulti?: boolean;
  theme: ITheme;
  onValueChange: (itemValue: string | string[], itemIndex: number) => void;
}

const SelectListBase = (props: ISelectListProps): any => {
  const { selectedValue, onValueChange, isMulti, children } = props;

  const handleOnPress = (
    itemValue: string,
    itemIndex: number,
    isSelected: boolean,
  ) => {
    if (isMulti && Array.isArray(selectedValue)) {
      if (isSelected) {
        onValueChange(
          selectedValue.filter(val => val === itemValue),
          itemIndex,
        );
      } else {
        onValueChange(selectedValue.concat(itemValue), itemIndex);
      }
    } else {
      onValueChange(itemValue, itemIndex);
    }
  };

  return React.Children.map(children, (child, index) => {
    if (!React.isValidElement(child)) {
      return child;
    }

    // @ts-ignore
    const selectListItem = child as React.ReactElement<ISelectListItemProps>;

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
