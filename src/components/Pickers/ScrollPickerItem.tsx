import * as React from 'react';
import { View } from 'react-native';

import { Text } from '../Typography';
import { ITEM_HEIGHT } from './ScrollPicker.constants';

export interface ScrollPickerOption {
  label: string;
  value: string;
}

export interface ScrollPickerItemProps {
  option: ScrollPickerOption;
}

const ScrollPickerItemBase = (props: ScrollPickerItemProps) => {
  const { option } = props;
  const { label } = option;

  return (
    <View
      style={{
        alignItems: 'center',
        height: ITEM_HEIGHT,
        justifyContent: 'center',
        paddingHorizontal: 4,
        scrollSnapAlign: 'start',
      }}
    >
      <Text align="center">{label}</Text>
    </View>
  );
};

export const ScrollPickerItem = React.memo(ScrollPickerItemBase);
