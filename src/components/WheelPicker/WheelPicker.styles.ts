import { Platform, ViewStyle } from 'react-native';

import { Theme } from '../../theme/Theme';
import { WheelPickerProps } from './WheelPicker';
import { ITEM_HEIGHT, SCROLL_PICKER_HEIGHT } from './WheelPicker.constants';

export interface WheelPickerStyles {
  containerStyle: ViewStyle;
  listContainerStyle: Omit<ViewStyle, 'transform'>;
  upperOverlayStyle: ViewStyle;
  bottomOverlayStyle: ViewStyle;
}

export type GetWheelPickerStyles = (
  props: WheelPickerProps,
  theme: Theme,
) => WheelPickerStyles;

export const getWheelPickerStyles: GetWheelPickerStyles = (props, theme) => {
  return {
    bottomOverlayStyle: {
      backgroundColor: 'rgba(255, 255, 255, 0.7)',
      borderColor: theme.colors.border.default,
      borderStyle: 'solid',
      borderTopWidth: 1,
      height: ITEM_HEIGHT,
      position: 'absolute',
      top: ITEM_HEIGHT * 2,
      width: '100%',
    },
    containerStyle: {
      flex: 1,
      height: SCROLL_PICKER_HEIGHT,
    },
    listContainerStyle:
      Platform.OS === 'web'
        ? {
            height: SCROLL_PICKER_HEIGHT,
            overflowY: 'scroll' as const,
            scrollSnapType: 'y mandatory',
            width: '100%',
          }
        : {},
    upperOverlayStyle: {
      backgroundColor: 'rgba(255, 255, 255, 0.7)',
      borderBottomWidth: 1,
      borderColor: theme.colors.border.default,
      borderStyle: 'solid',
      height: ITEM_HEIGHT,
      position: 'absolute',
      top: 0,
      width: '100%',
    },
  };
};
