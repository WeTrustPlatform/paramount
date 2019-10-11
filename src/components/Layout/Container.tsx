import dlv from 'dlv';
import React from 'react';
import { View, ViewProps, ViewStyle } from 'react-native';

import { useTheme } from '../../theme';
import { getStyle, OverrideStyle, Style } from '../../utils/Overrides';
import {
  ContainerSize,
  ContainerSizes,
  DESC_ORDER_SCREEN_SIZES,
  ScreenSize,
  useLayout,
} from './LayoutContext';

export interface ContainerProps extends Omit<ViewProps, 'style'> {
  /** Children node */
  children?: React.ReactNode;

  /**
   * When true, it will not contain the width and occupy fully the parent container
   * @default false
   */
  fluid?: boolean;

  /**
   * The size of the container. It will override the internal responsive mechanism, and will force the
   * containment of a particular screen size
   */
  size?: ContainerSize;

  /**
   * Style callback or ViewStyle object
   */
  style?: Style<ContainerProps, ViewStyle>;
}

export type ContainerOverride = OverrideStyle<ContainerProps, ViewStyle>;

/**
 * On screens with size lg and above, caps maximum width of the content
 */
export const Container = (props: ContainerProps) => {
  const { children, size, fluid = false, style, ...viewProps } = props;
  const theme = useTheme();
  const { gutterWidth, containerSizes, currentScreenSize } = useLayout();

  return (
    <View
      style={[
        {
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
        getStyle(props, style),
        getStyle(props, dlv(theme, 'overrides.Container.style')),
      ]}
      {...viewProps}
    >
      {children}
    </View>
  );
};

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
