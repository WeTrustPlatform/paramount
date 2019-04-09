import { format } from 'date-fns';
import * as React from 'react';
import { TouchableHighlight, View } from 'react-native';

import { ThemeContext } from '../../../theme';
import { Text } from '../../Typography';
import { DEFAULT_MONTH_DAY_HEIGHT } from './constants';

export interface MonthDayBaseProps {
  onSelect?: (date: Date) => void;
}

export interface MonthDayProps extends MonthDayBaseProps {
  date: Date;
  isSelected: boolean;
  isSelectionStart: boolean;
  isSelectionEnd: boolean;
}

const MonthDay = (props: MonthDayProps) => {
  const {
    isSelected,
    isSelectionStart,
    isSelectionEnd,
    date,
    onSelect = () => null,
  } = props;
  const theme = React.useContext(ThemeContext);

  return (
    <TouchableHighlight
      style={{
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        paddingVertical: 4,
        width: '100%',
      }}
      underlayColor="transparent"
      onPress={() => onSelect(date)}
    >
      <View
        style={{
          alignItems: 'center',
          backgroundColor:
            isSelected && !isSelectionStart && !isSelectionEnd
              ? theme.colors.background.primaryDark
              : 'transparent',
          flex: 1,
          flexDirection: 'row',
          height: DEFAULT_MONTH_DAY_HEIGHT - 4,
          justifyContent: 'center',
          position: 'relative',
        }}
      >
        {isSelectionStart && !isSelectionEnd && (
          <View
            style={{
              backgroundColor: theme.colors.background.primaryDark,
              height: '100%',
              position: 'absolute',
              right: 0,
              width: '50%',
            }}
          />
        )}
        {isSelectionEnd && !isSelectionStart && (
          <View
            style={{
              backgroundColor: theme.colors.background.primaryDark,
              height: '100%',
              left: 0,
              position: 'absolute',
              width: '50%',
            }}
          />
        )}
        <View
          style={{
            alignItems: 'center',
            backgroundColor: isSelected
              ? theme.colors.background.primaryDark
              : 'transparent',
            borderRadius: 999,
            flexDirection: 'row',
            height: DEFAULT_MONTH_DAY_HEIGHT - 4,
            justifyContent: 'center',
            width: DEFAULT_MONTH_DAY_HEIGHT - 4,
          }}
        >
          <Text color={isSelected ? 'plain' : 'default'}>
            {format(date, 'D')}
          </Text>
        </View>
      </View>
    </TouchableHighlight>
  );
};

export default MonthDay;
