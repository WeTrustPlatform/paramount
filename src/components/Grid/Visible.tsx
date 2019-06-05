import * as React from 'react';

import {
  ASC_ORDER_LAYOUT_SIZES,
  LayoutContext,
  LayoutSize,
} from './LayoutContext';

export interface VisibleConfig {
  xsmallUp?: boolean;
  xsmall?: boolean;
  xsmallDown?: boolean;
  smallUp?: boolean;
  small?: boolean;
  smallDown?: boolean;
  mediumUp?: boolean;
  medium?: boolean;
  mediumDown?: boolean;
  largeUp?: boolean;
  large?: boolean;
  largeDown?: boolean;
  xlargeUp?: boolean;
  xlarge?: boolean;
  xlargeDown?: boolean;
}

export interface VisibleProps extends VisibleConfig {
  children: React.ReactElement;
}

export const splitConfig = (config: VisibleConfig) => {
  const {
    xsmallUp,
    xsmall,
    xsmallDown,
    smallUp,
    small,
    smallDown,
    mediumUp,
    medium,
    mediumDown,
    largeUp,
    large,
    largeDown,
    xlargeUp,
    xlarge,
    xlargeDown,
  } = config;

  return {
    downs: [xsmallDown, smallDown, mediumDown, largeDown, xlargeDown],
    exacts: [xsmall, small, medium, large, xlarge],
    ups: [xsmallUp, smallUp, mediumUp, largeUp, xlargeUp],
  };
};

const isVisible = (config: VisibleConfig, currentSize: LayoutSize) => {
  const { downs, ups, exacts } = splitConfig(config);

  const currentSizeIndex = ASC_ORDER_LAYOUT_SIZES.indexOf(currentSize);
  const isVisibleDown =
    downs.filter((val, index) => index >= currentSizeIndex && !!val).length > 0;

  const isVisibleUp =
    ups.filter((val, index) => index <= currentSizeIndex && !!val).length > 0;

  const isVisibleExact = !!exacts.find(
    (val, index) => index === currentSizeIndex && !!val,
  );

  return isVisibleDown || isVisibleUp || isVisibleExact;
};

export const Visible = (props: VisibleProps) => {
  const { children, ...config } = props;
  const { currentSize } = React.useContext(LayoutContext);

  if (isVisible(config, currentSize)) return children;

  return null;
};
