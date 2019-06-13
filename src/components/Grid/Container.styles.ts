import { ViewStyle } from 'react-native';

import { Theme } from '../../theme/Theme';

export interface ContainerStylesProps {
  maxWidth?: number;
  containerWidth: number;
  gutterWidth: number;
}
export type GetContainerStyles = (
  progressStylesProps: ContainerStylesProps,
  theme: Theme,
) => ContainerStyles;

export interface ContainerStyles {
  containerStyle: ViewStyle;
}

export const getContainerStyles: GetContainerStyles = (
  { maxWidth, containerWidth, gutterWidth },
  theme,
) => {
  return {
    containerStyle: {
      marginLeft: 'auto',
      marginRight: 'auto',
      maxWidth: maxWidth || containerWidth,
      paddingLeft: gutterWidth / 2,
      paddingRight: gutterWidth / 2,
      width: '100%',
    },
  };
};
