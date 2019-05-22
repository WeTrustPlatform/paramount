import { ViewStyle } from 'react-native';

import { Theme } from '../../theme/ThemeInterface';

export interface SliderStylesProps {
  size: number;
}

export interface SliderStyles {
  containerStyle: ViewStyle;
  selectedTrackStyle: ViewStyle;
  thumbStyle: ViewStyle;
  unselectedTrackStyle: ViewStyle;
}

export type GetSliderStyles = (
  props: SliderStylesProps,
  theme: Theme,
) => SliderStyles;

export const getSliderStyles: GetSliderStyles = (props, theme) => {
  const { size } = props;

  return {
    containerStyle: { height: size, justifyContent: 'center' },
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
      height: size,
      position: 'absolute',
      width: size,
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
