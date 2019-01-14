import * as React from 'react';
import {
  TouchableHighlight,
  TouchableHighlightProps,
  View,
} from 'react-native';

import { Theme, withTheme } from '../../theme';
import { SelectListSize } from '../../theme/component-variables/selectListVariables';
import { SelectListStyles } from '../../theme/style-getters/getSelectListStyles';
import { Checkbox } from '../Checkbox';
import { Text } from '../Typography';

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
  /**
   * Inline styles for components
   */
  dangerouslySetInlineStyle?: Partial<SelectListStyles>;
}

const SelectListItemBase = (props: SelectListItemProps) => {
  const {
    dangerouslySetInlineStyle,
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
  } = theme.getSelectListStyles(size, isDisabled, isSelected);

  return (
    <TouchableHighlight
      disabled={isDisabled}
      onPress={() => onSelect(value, index, isSelected)}
      underlayColor={focusBackgroundColor}
      style={{
        ...containerStyle,
        ...(dangerouslySetInlineStyle &&
          dangerouslySetInlineStyle.containerStyle),
      }}
      {...touchableHighlightProps}
    >
      <View
        style={{
          ...wrapperStyle,
          ...(dangerouslySetInlineStyle &&
            dangerouslySetInlineStyle.wrapperStyle),
        }}
      >
        <Text
          dangerouslySetInlineStyle={{
            textStyle: {
              ...textStyle,
              ...(dangerouslySetInlineStyle &&
                dangerouslySetInlineStyle.textStyle),
            },
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
