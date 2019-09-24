import * as React from 'react';

export interface Breakpoints {
  small: number;
  medium: number;
  large: number;
  xlarge: number;
}

export interface ScreenSizes extends Breakpoints {
  xsmall: number;
}

export type ColumnCount =
  | 0
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12
  | 13
  | 14
  | 15
  | 16
  | 17
  | 18
  | 19
  | 20
  | 21
  | 22
  | 23
  | 24;

export interface ContainerSizes {
  small: number;
  medium: number;
  large: number;
  xlarge: number;
}

export type Breakpoint = keyof Breakpoints;
export type ContainerSize = keyof ContainerSizes;
export type ScreenSize = keyof ScreenSizes;

export interface GetResponsiveValueParam<
  TXsmallValue = any,
  TSmallValue = any,
  TMediumValue = any,
  TLargeValue = any,
  TXlargeValue = any
> {
  xsmall?: TXlargeValue;
  small?: TXsmallValue;
  medium?: TSmallValue;
  large?: TMediumValue;
  xlarge?: TLargeValue;
}

export type GetResponsiveValue = <
  TXsmallValue = any,
  TSmallValue = any,
  TMediumValue = any,
  TLargeValue = any,
  TXlargeValue = any
>(
  values: GetResponsiveValueParam<
    TXsmallValue,
    TSmallValue,
    TMediumValue,
    TLargeValue,
    TXlargeValue
  >,
) =>
  | TXlargeValue
  | TLargeValue
  | TMediumValue
  | TSmallValue
  | TXsmallValue
  | undefined;

export interface Layout {
  breakpoints: Breakpoints;
  gridColumnCount: ColumnCount;
  gutterWidth: number;
  containerSizes: ContainerSizes;
}

export interface LayoutContext extends Layout {
  currentScreenSize: ScreenSize;
  getResponsiveValue: GetResponsiveValue;
}

export const defaultLayout: LayoutContext = {
  breakpoints: {
    small: 480,

    medium: 768,

    large: 992,

    xlarge: 1200,
  },
  containerSizes: {
    small: 540,

    medium: 720,

    large: 960,

    xlarge: 1140,
  },
  currentScreenSize: 'small',
  getResponsiveValue: values =>
    values.xsmall ||
    values.small ||
    values.medium ||
    values.large ||
    values.xlarge ||
    undefined,
  gridColumnCount: 12,
  gutterWidth: 30,
};

export const ASC_ORDER_SCREEN_SIZES: Array<keyof ScreenSizes> = [
  'xsmall',
  'small',
  'medium',
  'large',
  'xlarge',
];

export const DESC_ORDER_SCREEN_SIZES: Array<
  keyof ScreenSizes
> = ASC_ORDER_SCREEN_SIZES.slice(0).reverse();

export const LayoutContext = React.createContext(defaultLayout);

export const useLayout = () => {
  return React.useContext(LayoutContext);
};
