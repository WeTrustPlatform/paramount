import { Picker as RNPicker, PickerItemProps } from 'react-native';

// tslint:disable-next-line
export interface NativePickerItemProps extends PickerItemProps {}

export const NativePickerItem = RNPicker.Item;
