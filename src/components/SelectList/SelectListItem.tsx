import * as React from 'react';
import {
  TouchableHighlight,
  TouchableHighlightProps,
  View,
} from 'react-native';
import { DeepPartial } from 'ts-essentials';

import { Theme, withTheme } from '../../theme';
import { mergeStyles, ReplaceReturnType } from '../../utils/mergeStyles';
import { Checkbox } from '../Checkbox';
import { Text } from '../Typography';
import { getTextStyles } from '../Typography/Text.styles';
import {
  GetSelectListStyles,
  getSelectListStyles,
  SelectListSize,
  SelectListStyles,
} from './SelectList.styles';

export interface SelectListItemBaseProps {
  index?: number;
  isSelected?: boolean;
  onSelect?: (value: string, index: number, isSelected: boolean) => void;
  value: string;
}

export interface SelectListItemProps
  extends SelectListItemBaseProps,
    TouchableHighlightProps {
  theme: Theme;
  size?: SelectListSize;
  isDisabled?: boolean;
  label: string;
  getStyles?: ReplaceReturnType<
    GetSelectListStyles,
    DeepPartial<SelectListStyles>
  >;
}

const SelectListItemBase = (props: SelectListItemProps) => {
  const {
    getStyles,
    index = 0,
    isDisabled = false,
    isSelected = false,
    label,
    onSelect = () => null,
    size = 'medium',
    theme,
    value,
    ...touchableHighlightProps
  } = props;

  const {
    containerStyle,
    textStyle,
    focusBackgroundColor,
    wrapperStyle,
  } = mergeStyles(getSelectListStyles, getStyles)(
    { size, isDisabled, isSelected },
    theme,
  );

  return (
    <TouchableHighlight
      disabled={isDisabled}
      onPress={() => onSelect(value, index, isSelected)}
      underlayColor={focusBackgroundColor}
      style={containerStyle}
      {...touchableHighlightProps}
    >
      <View style={wrapperStyle}>
        <Text
          getStyles={(...params) => {
            const { textStyle: defaultTextStyle } = getTextStyles(...params);
            return {
              textStyle: {
                ...defaultTextStyle,
                ...textStyle,
              },
            };
          }}
        >
          {label}
        </Text>
        <Checkbox isInteractive={false} shape="circle" isChecked={isSelected} />
      </View>
    </TouchableHighlight>
  );
};

export const SelectListItem = withTheme(SelectListItemBase);
export default SelectListItem;
