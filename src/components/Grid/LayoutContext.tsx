import * as React from 'react';

export interface Breakpoints {
  small: number;
  medium: number;
  large: number;
  xlarge: number;
}

export interface FullBreakpoints extends Breakpoints {
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

export type Breakpoint = keyof Breakpoints;
export type FullBreakpoint = keyof FullBreakpoints;

export interface LayoutInterface {
  breakpoints: Breakpoints;
  maxWidth: number;
  currentBreakpoint: FullBreakpoint;
  gridColumnCount: number;
  gutterWidth: number;
}

export const defaultLayout: LayoutInterface = {
  breakpoints: {
    small: 480,

    medium: 720,

    large: 960,

    xlarge: 1280,
  },
  currentBreakpoint: 'small',
  gridColumnCount: 12,
  gutterWidth: 15,
  maxWidth: 1440,
};

export const ASC_ORDER_BREAKPOINTS: Array<keyof FullBreakpoints> = [
  'xsmall',
  'small',
  'medium',
  'large',
  'xlarge',
];

export const DESC_ORDER_BREAKPOINTS: Array<
  keyof FullBreakpoints
> = ASC_ORDER_BREAKPOINTS.slice(0).reverse();

export const LayoutContext = React.createContext(defaultLayout);
