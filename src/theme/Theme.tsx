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
  ListItemOverrides,
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
  WheelPickerOverrides,
  SpacingOverride,
} from '../components';
import { Overrides } from '../utils/Overrides';
import { DeepPartial } from '../utils/types';

export interface Theme {
  // Colors
  colors: Colors;
  fills: Fills;

  // Layout
  layout: Layout;
  spacing: SpacingSizes;

  // Typography
  fontFamilies: FontFamilies;
  fontWeights: FontWeights;

  headingSizes: HeadingSizes;
  paragraphSizes: ParagraphSizes;
  textSizes: TextSizes;

  // Elevations
  elevations: Elevations;

  // Controls - Buttons, Pickers, Inputs etc.
  controlPaddings: ControlSizes;
  controlHeights: ControlSizes;
  controlBorderRadius: ControlSizes;

  // Containers
  containerShapes: ContainerShapes;

  overrides?: DeepPartial<ThemeOverrides>;
}

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

export interface Layout {
  breakpoints: Breakpoints;
  gridColumnCount: ColumnCount;
  gutterWidth: number;
  containerSizes: ContainerSizes;
}

export interface TextSizes {
  xsmall: TextStyle;
  small: TextStyle;
  medium: TextStyle;
  large: TextStyle;
}
export type TextSize = keyof TextSizes;

export interface HeadingSizes {
  xxxlarge: TextStyle;
  xxlarge: TextStyle;
  xlarge: TextStyle;
  large: TextStyle;
  medium: TextStyle;
  small: TextStyle;

  [size: string]: TextStyle | undefined;
}

export type HeadingSize = keyof HeadingSizes;

export interface ParagraphSizes {
  small: TextStyle;
  medium: TextStyle;
  large: TextStyle;

  [size: string]: TextStyle | undefined;
}

export type ParagraphSize = keyof ParagraphSizes;

export interface SpacingSizes {
  xxxlarge: number;
  xxlarge: number;
  xlarge: number;
  large: number;
  medium: number;
  small: number;
  xsmall: number;
}

export type SpacingSize = keyof SpacingSizes;

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

export interface ThemeOverrides {
  Alert: Overrides<any, AlertOverrides>;
  Avatar: Overrides<any, AvatarOverrides>;
  Badge: Overrides<any, BadgeOverrides>;
  Button: Overrides<any, ButtonOverrides>;
  Checkbox: Overrides<any, CheckboxOverrides>;
  Collapsible: Overrides<any, CollapsibleOverrides>;
  Column: ColumnOverride;
  Container: ContainerOverride;
  Counter: Overrides<any, CounterOverrides>;
  Dialog: Overrides<any, DialogOverrides>;
  Divider: DividerOverride;
  Drawer: Overrides<any, DrawerOverrides>;
  FormField: Overrides<any, FormFieldOverrides>;
  Heading: HeadingOverride;
  Label: Overrides<any, LabelOverrides>;
  ListItem: Overrides<any, ListItemOverrides>;
  ListPicker: Overrides<any, ListPickerOverrides<any>>;
  NativePicker: Overrides<any, NativePickerOverrides>;
  Overlay: OverlayOverride;
  Popover: Overrides<any, PopoverOverrides>;
  Positioner: Overrides<any, PositionerOverrides>;
  ProgressBar: Overrides<any, ProgressBarOverrides>;
  Rating: Overrides<any, RatingOverrides>;
  Row: RowOverride;
  Slider: Overrides<any, SliderOverrides>;
  Spacing: SpacingOverride;
  Switch: Overrides<any, SwitchOverrides>;
  Picker: Overrides<any, PickerOverrides<any, any, any>>;
  Text: TextOverride;
  TextInput: Overrides<any, TextInputOverrides>;
  WheelPicker: Overrides<any, WheelPickerOverrides<any>>;
}
