import * as React from 'react';
import { View } from 'react-native';

import { Text } from '../Typography';
import { ITEM_HEIGHT } from './WheelPicker.constants';

export interface WheelPickerOption<TValue extends any> {
  label: string;
  value: TValue;
}

export interface WheelPickerItemProps<TValue extends any> {
  option: WheelPickerOption<TValue>;
}

const WheelPickerItemBase = <TValue extends any>(
  props: WheelPickerItemProps<TValue>,
) => {
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
