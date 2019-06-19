import { ViewStyle } from 'react-native';

import { Theme } from '../../theme/Theme';
import {
  ContainerSize,
  ContainerSizes,
  DESC_ORDER_SCREEN_SIZES,
  ScreenSize,
} from './LayoutContext';

export interface ContainerStylesProps {
  currentScreenSize: ScreenSize;
  size?: ContainerSize;
  containerSizes: ContainerSizes;
  gutterWidth: number;
  fluid: boolean;
}

export type GetContainerStyles = (
  progressStylesProps: ContainerStylesProps,
  theme: Theme,
) => ContainerStyles;

export interface ContainerStyles {
  containerStyle: ViewStyle;
}

const getMaxWidth = (
  containerSizes: ContainerSizes,
  currentScreenSize: ScreenSize,
) => {
  const currentScreenSizeIndex = DESC_ORDER_SCREEN_SIZES.indexOf(
    currentScreenSize,
  );

  const nearestSize = DESC_ORDER_SCREEN_SIZES.find((screenSize, index) => {
    if (screenSize === 'xsmall') return false;
    if (currentScreenSizeIndex > index) return false;

    return !!containerSizes[screenSize];
  });

  if (nearestSize === 'xsmall') return undefined;

  return nearestSize ? containerSizes[nearestSize] : undefined;
};

export const getContainerStyles: GetContainerStyles = (
  { size, currentScreenSize, containerSizes, gutterWidth, fluid },
  theme,
) => {
  return {
    containerStyle: {
      marginLeft: 'auto',
      marginRight: 'auto',
      maxWidth: fluid
        ? '100%'
        : size
        ? containerSizes[size]
        : getMaxWidth(containerSizes, currentScreenSize),
      paddingLeft: gutterWidth / 2,
      paddingRight: gutterWidth / 2,
      width: '100%',
    },
  };
};
