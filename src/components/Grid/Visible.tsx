import * as React from 'react';

import {
  ASC_ORDER_BREAKPOINTS,
  FullBreakpoint,
  LayoutContext,
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
    visibleDowns: [xsmallDown, smallDown, mediumDown, largeDown, xlargeDown],
    visibleExacts: [xsmall, small, medium, large, xlarge],
    visibleUps: [xsmallUp, smallUp, mediumUp, largeUp, xlargeUp],
  };
};

const isVisible = (
  config: VisibleConfig,
  currentBreakpoint: FullBreakpoint,
) => {
  const { visibleDowns, visibleUps, visibleExacts } = splitConfig(config);

  const currentBreakpointIndex = ASC_ORDER_BREAKPOINTS.indexOf(
    currentBreakpoint,
  );
  const isVisibleDown =
    visibleDowns.filter(
      (val, index) => index >= currentBreakpointIndex && !!val,
    ).length > 0;

  const isVisibleUp =
    visibleUps.filter((val, index) => index <= currentBreakpointIndex && !!val)
      .length > 0;

  const isVisibleExact = !!visibleExacts.find(
    (val, index) => index === currentBreakpointIndex && !!val,
  );

  return isVisibleDown || isVisibleUp || isVisibleExact;
};

export const Visible = (props: VisibleProps) => {
  const { children, ...config } = props;
  const { currentBreakpoint } = React.useContext(LayoutContext);

  if (isVisible(config, currentBreakpoint)) return children;

  return null;
};
