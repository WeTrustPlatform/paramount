import { ViewStyle } from 'react-native';

import { AlertVariables } from './component-variables/alertVariables';
import { AvatarVariables } from './component-variables/avatarVariables';
import { BadgeVariables } from './component-variables/badgeVariables';
import { ButtonVariables } from './component-variables/buttonVariables';
import { CheckboxVariables } from './component-variables/checkboxVariables';
import { CounterVariables } from './component-variables/counterVariables';
import { DialogVariables } from './component-variables/dialogVariables';
import { DividerVariables } from './component-variables/dividerVariables';
import { HeadingVariables } from './component-variables/headingVariables';
import { ParagraphVariables } from './component-variables/paragraphVariables';
import { PickerVariables } from './component-variables/pickerVariables';
import { PopoverVariables } from './component-variables/popoverVariables';
import { ProgressVariables } from './component-variables/progressVariables';
import { SelectListVariables } from './component-variables/selectListVariables';
import { SwitchVariables } from './component-variables/switchVariables';
import { TextInputVariables } from './component-variables/textInputVariables';
import { TextVariables } from './component-variables/textVariables';
import { ToastVariables } from './component-variables/toastVariables';
import { GetAlertStyles } from './style-getters/getAlertStyles';
import { GetAvatarStyles } from './style-getters/getAvatarStyles';
import { GetBadgeStyles } from './style-getters/getBadgeStyles';
import { GetButtonStyles } from './style-getters/getButtonStyles';
import { GetCheckboxStyles } from './style-getters/getCheckboxStyles';
import { GetCounterStyles } from './style-getters/getCounterStyles';
import { GetDialogStyles } from './style-getters/getDialogStyles';
import { GetDividerStyles } from './style-getters/getDividerStyles';
import { GetHeadingStyle } from './style-getters/getHeadingStyle';
import { GetParagraphStyles } from './style-getters/getParagraphStyles';
import { GetPickerStyles } from './style-getters/getPickerStyles';
import { GetPopoverStyles } from './style-getters/getPopoverStyles';
import { GetProgressStyles } from './style-getters/getProgressStyles';
import { GetSelectListStyles } from './style-getters/getSelectListStyles';
import { GetSwitchStyles } from './style-getters/getSwitchStyles';
import { GetTextInputStyles } from './style-getters/getTextInputStyles';
import { GetTextStyles } from './style-getters/getTextStyles';
import { GetToastStyles } from './style-getters/getToastStyles';

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

export interface TextColors {
  dark: string;
  default: string;
  muted: string;
  plain: string;
  selected: string;

  primary: string;
  secondary: string;

  danger: string;
  info: string;
  success: string;
  warning: string;
}

export type TextColor =
  | keyof TextColors
  | keyof IntentColors
  | keyof BrandColors;

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
  text: TextColors;
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
export interface ThemeVariables {
  colors: Colors;
  fills: Fills;

  // Typography
  fontFamilies: FontFamilies;

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

export interface ComponentVariables {
  alert: AlertVariables;
  avatar: AvatarVariables;
  badge: BadgeVariables;
  button: ButtonVariables;
  checkbox: CheckboxVariables;
  counter: CounterVariables;
  dialog: DialogVariables;
  divider: DividerVariables;
  heading: HeadingVariables;
  paragraph: ParagraphVariables;
  picker: PickerVariables;
  progress: ProgressVariables;
  selectList: SelectListVariables;
  switch: SwitchVariables;
  text: TextVariables;
  textInput: TextInputVariables;
  toast: ToastVariables;
  popover: PopoverVariables;
}

export interface StyleGetters {
  getAlertStyles: GetAlertStyles;
  getAvatarStyles: GetAvatarStyles;
  getBadgeStyles: GetBadgeStyles;
  getButtonStyles: GetButtonStyles;
  getCheckboxStyles: GetCheckboxStyles;
  getCounterStyles: GetCounterStyles;
  getDialogStyles: GetDialogStyles;
  getDividerStyles: GetDividerStyles;
  getHeadingStyles: GetHeadingStyle;
  getParagraphStyles: GetParagraphStyles;
  getPickerStyles: GetPickerStyles;
  getProgressStyles: GetProgressStyles;
  getSelectListStyles: GetSelectListStyles;
  getSwitchStyles: GetSwitchStyles;
  getTextInputStyles: GetTextInputStyles;
  getTextStyles: GetTextStyles;
  getToastStyles: GetToastStyles;
  getPopoverStyles: GetPopoverStyles;
}

/**
 * 3-tier theming system
 * Tier 1: Theme variables - Those are variables that define overall look of the design system. These high level variables should be enough to provide basic style changes such as color, font sizes, control paddings/heights etc.
 * Tier 2: Component variables - Those are variables applied to individual components. They inherit some variables from tier-1 theme variables but can be overriden specifically for each component. These variables usually provide styling for different component states, look etc.
 * Tier 3: Style getters - These are functions that return style for components. This allows for complete control over how a component looks. They inherit variables from component variables. Think of those as actual classes
 */
export interface Theme extends StyleGetters {
  themeVariables: ThemeVariables;
  componentVariables: ComponentVariables;
}
