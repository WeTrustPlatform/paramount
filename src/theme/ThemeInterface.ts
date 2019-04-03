import { ViewStyle } from 'react-native';

export interface TextSizes {
  small: number;
  medium: number;
  large: number;
}

export type TextSize = keyof TextSizes;

export interface HeadingSizes {
  xxxlarge: number; // h1
  xxlarge: number; // h2
  xlarge: number; // h3
  large: number; // h4
  medium: number; // h5
  small: number; // h6
}
export type HeadingSize = keyof HeadingSizes;

export interface ParagraphSizes {
  small: number;
  medium: number;
  large: number;
}
export type ParagraphSize = keyof ParagraphSizes;

export interface FontFamilies {
  heading?: string;
  mono?: string;
  text?: string;
}
export type FontFamily = keyof FontFamilies;

export type RNFontWeight =
  | 'normal'
  | 'bold'
  | '100'
  | '200'
  | '300'
  | '400'
  | '500'
  | '600'
  | '700'
  | '800'
  | '900';

export interface FontWeights {
  light?: RNFontWeight;
  normal?: RNFontWeight;
  bold?: RNFontWeight;
}
export type FontWeight = keyof FontWeights;

export interface IntentColors {
  danger: string;
  info: string;
  success: string;
  warning: string;
}

export interface BrandColors {
  primary: string;
  secondary?: string;
}

export interface BackgroundColorVariations {
  default: string;
  /* Focus/Active on colored background */
  focus: string;
  /* Focus/Active on light background */
  focusLight: string;
}

export interface PresetTextColors {
  [color: string]: string;
}

export type TextColor = string;

export interface IconColor {
  default: string;
  disabled: string;
  muted: string;
  selected: string;
}

export interface BorderColor {
  default: string;
  muted: string;

  primary: string;
  secondary: string;

  danger: string;
  info: string;
  success: string;
  warning: string;
}

export interface BackgroundColor {
  overlay: string;
  plain: string;
  disabled: string;
  tint1: string;
  tint2: string;

  primary: BackgroundColorVariations;
  secondary: BackgroundColorVariations;

  danger: BackgroundColorVariations;
  info: BackgroundColorVariations;
  success: BackgroundColorVariations;
  warning: BackgroundColorVariations;
}

export interface Colors {
  background: BackgroundColor;
  border: BorderColor;
  text: PresetTextColors;
}

export type Elevations = ViewStyle[];
export type Elevation = ViewStyle;

export interface ControlSizes {
  small: number;
  medium: number;
  large: number;
}

export interface FillColorProps {
  backgroundColor: string;
  color: string;
}

export interface FillColors {
  neutral: FillColorProps;
  blue: FillColorProps;
  red: FillColorProps;
  orange: FillColorProps;
  yellow: FillColorProps;
  green: FillColorProps;
  teal: FillColorProps;
  purple: FillColorProps;
}

export type FillColor = keyof FillColors;

export interface Fills {
  subtle: FillColors;
  solid: FillColors;
}

export interface Theme {
  colors: Colors;
  fills: Fills;

  // Typography
  fontFamilies: FontFamilies;
  fontWeights: FontWeights;

  headingSizes: HeadingSizes;
  paragraphSizes: ParagraphSizes;
  textSizes: TextSizes;

  // Elevations
  elevations: Elevations;

  // Controls - Buttons, Controls etc.
  controlPaddings: ControlSizes;
  controlHeights: ControlSizes;
  controlBorderRadius: ControlSizes;
}
