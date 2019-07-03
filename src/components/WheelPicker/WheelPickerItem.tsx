import * as React from 'react';
import { View } from 'react-native';

import { Text } from '../Typography';
import { ITEM_HEIGHT } from './WheelPicker.constants';

export interface WheelPickerOption {
  label: string;
  value: string;
}

export interface WheelPickerItemProps {
  option: WheelPickerOption;
}

const WheelPickerItemBase = (props: WheelPickerItemProps) => {
  const { option } = props;
  const { label } = option;

  return (
    <View
      style={{
        alignItems: 'center',
        height: ITEM_HEIGHT,
        justifyContent: 'center',
        paddingHorizontal: 4,
        // @ts-ignore
        scrollSnapAlign: 'start',
      }}
    >
      <Text align="center">{label}</Text>
    </View>
  );
};

export const WheelPickerItem = React.memo(WheelPickerItemBase);
