import React from 'react';

import { ScreenSize } from '../../theme';

import { ASC_ORDER_SCREEN_SIZES, useLayout } from './LayoutProvider';

export interface VisibleConfig {
  /**
   * When true, render children only when the screen size is xsmall
   */
  xsmall?: boolean;

  /**
   * When true, render children only when the screen size is small
   */
  small?: boolean;

  /**
   * When true, render children only when the screen size is medium
   */
  medium?: boolean;

  /**
   * When true, render children only when the screen size is large
   */
  large?: boolean;

  /**
   * When true, render children only when the screen size is xlarge
   */
  xlarge?: boolean;
}

export interface VisibleProps extends VisibleConfig {
  children?: React.ReactNode;
}

const combineConfig = (config: VisibleConfig) => {
  const { xsmall, small, medium, large, xlarge } = config;

  return [xsmall, small, medium, large, xlarge];
};

const isVisible = (config: VisibleConfig, currentScreenSize: ScreenSize) => {
  const visibles = combineConfig(config);
  const currentScreenSizeIndex = ASC_ORDER_SCREEN_SIZES.indexOf(
    currentScreenSize,
  );

  return !!visibles.find(
    (val, index) => index === currentScreenSizeIndex && !!val,
  );
};

export const Visible = (props: VisibleProps) => {
  const { children, ...config } = props;
  const { currentScreenSize } = useLayout();

  if (isVisible(config, currentScreenSize)) return <>{children}</>;

  return <></>;
};
