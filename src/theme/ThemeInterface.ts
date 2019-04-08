import { TextStyle, ViewStyle } from 'react-native';

export interface TextSizes {
  small: TextStyle;
  medium: TextStyle;
  large: TextStyle;
}
export type TextSize = keyof TextSizes | number;

export interface HeadingSizes {
  xxxlarge: TextStyle; // h1
  xxlarge: TextStyle; // h2
  xlarge: TextStyle; // h3
  large: TextStyle; // h4
  medium: TextStyle; // h5
  small: TextStyle; // h6
}
export type HeadingSize = keyof HeadingSizes | number;

export interface ParagraphSizes {
  small: TextStyle;
  medium: TextStyle;
  large: TextStyle;
}
export type ParagraphSize = keyof ParagraphSizes | number;

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

export type FontWeight = keyof FontWeights | RNFontWeight;

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
  dark: string;
  default: string;
  muted: string;
  plain: string;
  selected: string;

  // Brand colors
  primary: string;
  secondary: string;

  // Intent.
  danger: string;
  info: string;
  success: string;
  warning: string;
}

export type TextColor = keyof PresetTextColors | string;

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
