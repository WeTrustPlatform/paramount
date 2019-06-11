import * as React from 'react';
import { View } from 'react-native';
import { DeepPartial } from 'ts-essentials';

import { useTheme } from '../../theme';
import { mergeStyles, ReplaceReturnType } from '../../utils/mergeStyles';
import {
  ContainerStyles,
  GetContainerStyles,
  getContainerStyles,
} from './Container.styles';
import { useLayout } from './LayoutContext';

export interface ContainerProps {
  children: React.ReactNode;
  maxWidth?: number;
  getStyles?: ReplaceReturnType<
    GetContainerStyles,
    DeepPartial<ContainerStyles>
  >;
}

/**
 * On screens with size lg and above, caps maximum width of the content
 */
export const Container = (props: ContainerProps) => {
  const { children, getStyles, maxWidth } = props;
  const { maxWidth: containerWidth, gutterWidth } = useLayout();
  const theme = useTheme();

  const { containerStyle } = mergeStyles(
    getContainerStyles,
    getStyles,
    theme.components.getContainerStyles,
  )({ maxWidth, containerWidth, gutterWidth }, theme);

  return <View style={containerStyle}>{children}</View>;
};
