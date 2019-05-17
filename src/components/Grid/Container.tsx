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
import { LayoutContext } from './LayoutContext';

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
  const { maxWidth: containerWidth } = React.useContext(LayoutContext);
  const theme = useTheme();

  const { outerWrapperStyle, innerWrapperStyle } = mergeStyles(
    getContainerStyles,
    getStyles,
  )({ maxWidth, containerWidth }, theme);

  return (
    <View style={outerWrapperStyle}>
      <View style={innerWrapperStyle}>{children}</View>
    </View>
  );
};
