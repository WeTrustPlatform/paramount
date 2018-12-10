import * as React from 'react';
import { FiCheck } from 'react-icons/fi';
import {
  TextStyle,
  TouchableHighlight,
  TouchableHighlightProps,
  View,
  ViewStyle,
} from 'react-native';

import { ITheme, withTheme } from '../../theme';
import { SelectListSize } from '../../theme/component-variables/selectListVariables';
import { Box } from '../Layout';
import { Text } from '../Typography';

export interface ISelectListItemProps extends TouchableHighlightProps {
  theme: ITheme;
  size?: SelectListSize;
  isDisabled?: boolean;
  onSelect?: (value: string, index: number, isSelected: boolean) => void;
  testID?: string;
  label: string;
  isSelected?: boolean;
  index?: number;
  value: string;
  checkedIcon?: React.ReactNode;
  /**
   * Inline styles for components
   */
  dangerouslySetInlineStyle?: {
    containerStyle?: ViewStyle;
    wrapperStyle?: ViewStyle;
    textStyle?: TextStyle;
  };
}

const SelectListItemBase = (props: ISelectListItemProps) => {
  const {
    checkedIcon,
    dangerouslySetInlineStyle,
    index = 0,
    isDisabled = false,
    isSelected = false,
    label,
    onSelect = () => null,
    size = 'medium',
    testID,
    theme,
    value,
    ...touchableHighlightProps
  } = props;

  const {
    containerStyle,
    textStyle,
    focusBackgroundColor,
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
      testID={testID}
      {...touchableHighlightProps}
    >
      <View
        style={{
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
        {isSelected && (
          <Box position="absolute" right={0} marginRight={4}>
            {checkedIcon || (
              <FiCheck
                size={22}
                color={theme.themeVariables.colors.text.success}
              />
            )}
          </Box>
        )}
      </View>
    </TouchableHighlight>
  );
};

export const SelectListItem = withTheme(SelectListItemBase);
export default SelectListItem;
