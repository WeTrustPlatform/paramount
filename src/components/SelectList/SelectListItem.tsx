import * as React from 'react';
import { FiCheck } from 'react-icons/fi';
import { TouchableHighlight, View } from 'react-native';

import { ITheme, withTheme } from '../../theme';
import { SelectListSize } from '../../theme/component-variables/selectListVariables';
import { Box } from '../Layout';
import { Text } from '../Typography';

export interface ISelectListItemProps {
  theme: ITheme;
  size?: SelectListSize;
  isDisabled?: boolean;
  onPress?: (value: string, index: number, isSelected: boolean) => void;
  testID?: string;
  label: string;
  isSelected?: boolean;
  index?: number;
  value: string;
}

const SelectListItemWithoutTheme = (props: ISelectListItemProps) => {
  const {
    index = 0,
    isDisabled = false,
    isSelected = false,
    label,
    onPress = () => null,
    size = 'medium',
    testID,
    theme,
    value,
  } = props;

  const {
    containerStyle,
    textStyle,
    focusBackgroundColor,
  } = theme.getSelectListStyles(size, isDisabled, isSelected);

  return (
    <TouchableHighlight
      disabled={isDisabled}
      onPress={() => onPress(value, index, isSelected)}
      underlayColor={focusBackgroundColor}
      style={[containerStyle]}
      testID={testID}
    >
      <View>
        <Text {...textStyle}>{label}</Text>
        {isSelected && (
          <Box position="absolute" right={0} marginRight={4}>
            <FiCheck
              size={22}
              color={theme.themeVariables.colors.text.success}
            />
          </Box>
        )}
      </View>
    </TouchableHighlight>
  );
};

export const SelectListItem = withTheme(SelectListItemWithoutTheme);
export default SelectListItem;
