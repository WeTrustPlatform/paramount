import { ViewStyle } from 'react-native';

import { Theme } from '../../theme/Theme';
import { SliderProps } from './Slider';

export interface SliderStyles {
  containerStyle: ViewStyle;
  selectedTrackStyle: ViewStyle;
  thumbStyle: ViewStyle;
  unselectedTrackStyle: ViewStyle;
}

export type GetSliderStyles = (
  props: SliderProps,
  theme: Theme,
) => SliderStyles;

export const getSliderStyles: GetSliderStyles = (props, theme) => {
  const { size = 'medium' } = props;

  const controlSize = theme.controlHeights[size];

  return {
    containerStyle: { height: controlSize, justifyContent: 'center' },
    selectedTrackStyle: {
      backgroundColor: theme.colors.background.primaryDefault,
      borderRadius: 8,
      height: 8,
      position: 'absolute',
      width: '100%',
    },
    thumbStyle: {
      backgroundColor: theme.colors.background.content,
      borderColor: theme.colors.border.primary,
      borderRadius: 999,
      borderWidth: 3,
      height: controlSize,
      position: 'absolute',
      width: controlSize,
      zIndex: 1,
    },
    unselectedTrackStyle: {
      backgroundColor: theme.colors.background.greyDark,
      borderRadius: 8,
      height: 8,
      position: 'absolute',
      width: '100%',
    },
  };
};
