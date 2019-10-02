import deepMerge from 'deepmerge';
import React from 'react';
import { TextStyle, ViewStyle } from 'react-native';

import {
  AlertOverrides,
  AvatarOverrides,
  BadgeOverrides,
  ButtonOverrides,
  CheckboxOverrides,
  CollapsibleOverrides,
  ColumnOverride,
  ContainerOverride,
  CounterOverrides,
  DialogOverrides,
  DividerOverride,
  DrawerOverrides,
  FormFieldOverrides,
  HeadingOverride,
  LabelOverrides,
  Layout,
  LayoutProvider,
  ListItemOverrides,
  ListPicker,
  ListPickerOverrides,
  NativePickerOverrides,
  OverlayOverride,
  PickerOverrides,
  PopoverOverrides,
  PositionerOverrides,
  ProgressBarOverrides,
  RatingOverrides,
  RowOverride,
  SliderOverrides,
  SwitchOverrides,
  TextInputOverrides,
  TextOverride,
  ToastProvider,
  WheelPickerOverrides,
} from '../components';
import { Overrides } from '../utils/overrides';
import { DeepPartial } from '../utils/types';
import { defaultTheme } from './defaultTheme';

export interface TextSizes {
  xsmall: TextStyle;
  small: TextStyle;
  medium: TextStyle;
  large: TextStyle;
}
export type TextSize = keyof TextSizes | number;

export interface HeadingSizes {
  xxxlarge: TextStyle;
  xxlarge: TextStyle;
  xlarge: TextStyle;
  large: TextStyle;
  medium: TextStyle;
  small: TextStyle;

  [size: string]: TextStyle | undefined;
}

export type HeadingSize = keyof HeadingSizes | number;

export interface ParagraphSizes {
  small: TextStyle;
  medium: TextStyle;
  large: TextStyle;

  [size: string]: TextStyle | undefined;
}

export type ParagraphSize = keyof ParagraphSizes | number;

export interface FontFamilies {
  heading: string;
  mono: string;
  text: string;
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

export interface TextColors {
  muted: string;
  default: string;

  link: string;
  white: string;
  selected: string;

  primary: string;
  secondary: string;

  danger: string;
  info: string;
  success: string;
  warning: string;
}

export type TextColor = keyof TextColors | string;

export interface ButtonColors {
  danger: string;
  default: string;
  disabled: string;
  primary: string;
  secondary: string;
}

export interface ButtonColorsWithText extends ButtonColors {
  dangerText: string;
  defaultText: string;
  disabledText: string;
  primaryText: string;
  secondaryText: string;
}

export type ButtonColor = keyof ButtonColors | string;

export interface BorderColors {
  danger: string;
  default: string;
  info: string;
  primary: string;
  secondary: string;
  success: string;
  warning: string;
}

export type BorderColor = keyof BorderColors | string;

export interface BackgroundColors {
  content: string;
  base: string;

  greyLight: string;
  greyDefault: string;
  greyDark: string;

  primaryLight: string;
  primaryDefault: string;
  primaryDark: string;

  secondaryLight: string;
  secondaryDefault: string;
  secondaryDark: string;

  dangerLight: string;
  dangerDefault: string;
  dangerDark: string;

  infoLight: string;
  infoDefault: string;
  infoDark: string;

  successLight: string;
  successDefault: string;
  successDark: string;

  warningLight: string;
  warningDefault: string;
  warningDark: string;
}

export type BackgroundColor = keyof BackgroundColors | string;

export interface Colors {
  background: BackgroundColors;
  border: BorderColors;
  button: ButtonColorsWithText;
  text: TextColors;
}

export type Elevations = ViewStyle[];
export type Elevation = ViewStyle;

export interface ControlSizes {
  small: number;
  medium: number;
  large: number;
}

export type ControlSize = keyof ControlSizes;

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

export interface ContainerShapes {
  circle: ViewStyle;
  pill: ViewStyle;
  rounded: ViewStyle;
  roundedBottom: ViewStyle;
  roundedLeft: ViewStyle;
  roundedRight: ViewStyle;
  roundedTop: ViewStyle;
  square: ViewStyle;
}

export type ContainerShape = keyof ContainerShapes;

export interface Theme {
  // Colors
  colors: Colors;
  fills: Fills;

  // Layout
  layout: Layout;

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

  // Containers
  containerShapes: ContainerShapes;

  overrides?: DeepPartial<ThemeOverrides>;
}

export interface ThemeOverrides {
  Alert: Overrides<any, AlertOverrides>;
  Avatar: Overrides<any, AvatarOverrides>;
  Badge: Overrides<any, BadgeOverrides>;
  Button: Overrides<any, ButtonOverrides>;
  Checkbox: Overrides<any, CheckboxOverrides>;
  Collapsible: Overrides<any, CollapsibleOverrides>;
  Column: Overrides<any, ColumnOverride>;
  Container: Overrides<any, ContainerOverride>;
  Counter: Overrides<any, CounterOverrides>;
  Dialog: Overrides<any, DialogOverrides>;
  Divider: Overrides<any, DividerOverride>;
  Drawer: Overrides<any, DrawerOverrides>;
  FormField: Overrides<any, FormFieldOverrides>;
  Heading: Overrides<any, HeadingOverride>;
  Label: Overrides<any, LabelOverrides>;
  ListItem: Overrides<any, ListItemOverrides>;
  ListPicker: Overrides<any, ListPickerOverrides<any>>;
  NativePicker: Overrides<any, NativePickerOverrides>;
  Overlay: Overrides<any, OverlayOverride>;
  Popover: Overrides<any, PopoverOverrides>;
  Positioner: Overrides<any, PositionerOverrides>;
  ProgressBar: Overrides<any, ProgressBarOverrides>;
  Rating: Overrides<any, RatingOverrides>;
  Row: Overrides<any, RowOverride>;
  Slider: Overrides<any, SliderOverrides>;
  Switch: Overrides<any, SwitchOverrides>;
  Picker: Overrides<any, PickerOverrides<any, any>>;
  Text: Overrides<any, TextOverride>;
  TextInput: Overrides<any, TextInputOverrides>;
  WheelPicker: Overrides<any, WheelPickerOverrides<any>>;
}

export const ThemeContext = React.createContext(defaultTheme);

export interface ThemeProviderProps {
  children?: React.ReactNode;
  value?: DeepPartial<Theme>;
}

export const ThemeProvider = (props: ThemeProviderProps) => {
  const { children, value } = props;

  const theme = value
    ? (deepMerge(defaultTheme, value) as Theme)
    : defaultTheme;

  return (
    <ThemeContext.Provider value={theme}>
      <LayoutProvider value={theme.layout}>
        <ToastProvider>{children}</ToastProvider>
      </LayoutProvider>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  return React.useContext(ThemeContext);
};
