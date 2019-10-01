import dlv from 'dlv';
import * as React from 'react';
import { View, ViewProps } from 'react-native';

import { useTheme } from '../../theme';
import { getOverrides, Override } from '../../utils/overrides';
import {
  ContainerSize,
  ContainerSizes,
  DESC_ORDER_SCREEN_SIZES,
  ScreenSize,
  useLayout,
} from './LayoutContext';

export interface ContainerProps {
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
   * Overrides
   */
  override?: ContainerOverride;
}

export type ContainerOverride = Override<ContainerProps, RootProps>;

/**
 * On screens with size lg and above, caps maximum width of the content
 */
export const Container = (props: ContainerProps) => {
  const { children, size, fluid = false, override } = props;
  const theme = useTheme();
  const [Root, rootProps] = getOverrides(
    StyledRoot,
    props,
    dlv(theme, 'overrides.Container'),
    override,
  );

  return (
    <Root size={size} fluid={fluid} {...rootProps}>
      {children}
    </Root>
  );
};

interface RootProps extends ViewProps {
  children?: React.ReactNode;
  fluid: boolean;
  size?: ContainerSize;
}

const StyledRoot = (props: RootProps) => {
  const { size, fluid, children, style, ...viewProps } = props;
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
        style,
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
