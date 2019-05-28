import { ViewStyle } from 'react-native';

import { Theme } from '../../theme/ThemeInterface';

export interface ContainerStylesProps {
  maxWidth: number;
  containerWidth: number;
}
export type GetContainerStyles = (
  progressStylesProps: ContainerStylesProps,
  theme: Theme,
) => ContainerStyles;

export interface ContainerStyles {
  outerWrapperStyle: ViewStyle;
  innerWrapperStyle: ViewStyle;
}

export const getContainerStyles: GetContainerStyles = (
  { maxWidth, containerWidth },
  theme,
) => {
  return {
    innerWrapperStyle: {
      height: '100%',
      maxWidth: maxWidth || containerWidth,
      width: '100%',
    },
    outerWrapperStyle: {
      flexDirection: 'row',
      height: '100%',
      justifyContent: 'center',
      width: '100%',
    },
  };
};
