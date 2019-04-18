import * as React from 'react';
import { Dimensions } from 'react-native';

export type ResponsiveRenderPropType = (
  props: ResponsiveChildrenProps,
) => React.ReactNode;

export interface ResponsiveChildrenProps {
  matches: boolean;
}

export interface ResponsiveProps {
  children: React.ReactNode | ResponsiveRenderPropType;
  minWidth?: number;
  maxWidth?: number;
}

export const isWindowAboveMinWidth = (minWidth: number) => {
  const scaledSize = Dimensions.get('window');

  return scaledSize.width > minWidth;
};

export const isWindowBelowMaxWidth = (maxWidth: number) => {
  const scaledSize = Dimensions.get('window');

  return scaledSize.width < maxWidth;
};

export const Responsive = (props: ResponsiveProps) => {
  const { children, minWidth, maxWidth } = props;

  let isAboveMinWidth = true;
  let isBelowMaxWidth = true;

  if (minWidth) {
    isAboveMinWidth = isWindowAboveMinWidth(minWidth);
  }

  if (maxWidth) {
    isBelowMaxWidth = isWindowBelowMaxWidth(maxWidth);
  }

  const isRenderProp = typeof children === 'function';
  const matches = isAboveMinWidth && isBelowMaxWidth;

  // @ts-ignore
  return isRenderProp ? children({ matches }) : matches ? children : null;
};
