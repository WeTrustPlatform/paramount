import * as React from 'react';
import { View } from 'react-native';

import { useTheme } from '../../theme';
import { mergeStyles } from '../../utils/mergeStyles';
import { GetContainerStyles, getContainerStyles } from './Container.styles';
import { ContainerSize, useLayout } from './LayoutContext';

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

  /** Callback to get element styles. */
  getStyles?: GetContainerStyles;
}

/**
 * On screens with size lg and above, caps maximum width of the content
 */
export const Container = (props: ContainerProps) => {
  const { children, getStyles, size, fluid = false } = props;
  const layout = useLayout();
  const theme = useTheme();

  const { containerStyle } = mergeStyles(
    getContainerStyles,
    getStyles,
    theme.components.getContainerStyles,
  )({ size, fluid, ...layout }, theme);

  return <View style={containerStyle}>{children}</View>;
};
