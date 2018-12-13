import { IAlertVariables } from './component-variables/alertVariables';
import { IAvatarVariables } from './component-variables/avatarVariables';
import { IBadgeVariables } from './component-variables/badgeVariables';
import { IButtonVariables } from './component-variables/buttonVariables';
import { ICheckboxVariables } from './component-variables/checkboxVariables';
import { ICounterVariables } from './component-variables/counterVariables';
import { IDialogVariables } from './component-variables/dialogVariables';
import { IDividerVariables } from './component-variables/dividerVariables';
import { IHeadingVariables } from './component-variables/headingVariables';
import { IParagraphVariables } from './component-variables/paragraphVariables';
import { IPickerVariables } from './component-variables/pickerVariables';
import { IProgressVariables } from './component-variables/progressVariables';
import { ISelectListVariables } from './component-variables/selectListVariables';
import { ISwitchVariables } from './component-variables/switchVariables';
import { ITextInputVariables } from './component-variables/textInputVariables';
import { ITextVariables } from './component-variables/textVariables';
import { IToastVariables } from './component-variables/toastVariables';
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
import { GetProgressStyles } from './style-getters/getProgressStyles';
import { GetSelectListStyles } from './style-getters/getSelectListStyles';
import { GetSwitchStyles } from './style-getters/getSwitchStyles';
import { GetTextInputStyles } from './style-getters/getTextInputStyles';
import { GetTextStyles } from './style-getters/getTextStyles';
import { GetToastStyles } from './style-getters/getToastStyles';

export interface ITextSizes {
  small: number;
  medium: number;
  large: number;
}

export type TextSize = keyof ITextSizes;

export interface IHeadingSizes {
  xxxlarge: number; // h1
  xxlarge: number; // h2
  xlarge: number; // h3
  large: number; // h4
  medium: number; // h5
  small: number; // h6
}
export type HeadingSize = keyof IHeadingSizes;

export interface IParagraphSizes {
  small: number;
  medium: number;
  large: number;
}
export type ParagraphSize = keyof IParagraphSizes;

export interface IFontFamilies {
  heading: string;
  mono: string;
  text: string;
}
export type FontFamily = keyof IFontFamilies;

export interface IIntentColors {
  danger: string;
  info: string;
  success: string;
  warning: string;
}

export interface IBrandColors {
  primary: string;
  secondary?: string;
}

export interface IBackgroundColorVariations {
  default: string;
  /* Focus/Active on colored background */
  focus: string;
  /* Focus/Active on light background */
  focusLight: string;
}

export interface ITextColors {
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
  | keyof ITextColors
  | keyof IIntentColors
  | keyof IBrandColors;

export interface IIconColor {
  default: string;
  disabled: string;
  muted: string;
  selected: string;
}

export interface IBorderColor {
  default: string;
  muted: string;

  primary: string;
  secondary: string;

  danger: string;
  info: string;
  success: string;
  warning: string;
}

export interface IBackgroundColor {
  overlay: string;
  plain: string;
  disabled: string;
  tint1: string;
  tint2: string;

  primary: IBackgroundColorVariations;
  secondary: IBackgroundColorVariations;

  danger: IBackgroundColorVariations;
  info: IBackgroundColorVariations;
  success: IBackgroundColorVariations;
  warning: IBackgroundColorVariations;
}

export interface IColors {
  background: IBackgroundColor;
  border: IBorderColor;
  text: ITextColors;
}

export type Elevations = string[];
export type Elevation = number;

export interface IControlSizes {
  small: number;
  medium: number;
  large: number;
}

export interface IFillColor {
  backgroundColor: string;
  color: string;
}

export interface IFillColors {
  neutral: IFillColor;
  blue: IFillColor;
  red: IFillColor;
  orange: IFillColor;
  yellow: IFillColor;
  green: IFillColor;
  teal: IFillColor;
  purple: IFillColor;
}

export type FillColor = keyof IFillColors;

export interface IFills {
  subtle: IFillColors;
  solid: IFillColors;
}
export interface IThemeVariables {
  colors: IColors;
  fills: IFills;

  // Typography
  fontFamilies: IFontFamilies;

  headingSizes: IHeadingSizes;
  paragraphSizes: IParagraphSizes;
  textSizes: ITextSizes;

  // Elevations
  elevations: Elevations;

  // Controls - Buttons, Controls etc.
  controlPaddings: IControlSizes;
  controlHeights: IControlSizes;
  controlBorderRadius: IControlSizes;
}

export interface IComponentVariables {
  alert: IAlertVariables;
  avatar: IAvatarVariables;
  badge: IBadgeVariables;
  button: IButtonVariables;
  checkbox: ICheckboxVariables;
  counter: ICounterVariables;
  dialog: IDialogVariables;
  divider: IDividerVariables;
  heading: IHeadingVariables;
  paragraph: IParagraphVariables;
  picker: IPickerVariables;
  progress: IProgressVariables;
  selectList: ISelectListVariables;
  switch: ISwitchVariables;
  text: ITextVariables;
  textInput: ITextInputVariables;
  toast: IToastVariables;
}

export interface IStyleGetters {
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
}

/**
 * 3-tier theming system
 * Tier 1: Theme variables - Those are variables that define overall look of the design system. These high level variables should be enough to provide basic style changes such as color, font sizes, control paddings/heights etc.
 * Tier 2: Component variables - Those are variables applied to individual components. They inherit some variables from tier-1 theme variables but can be overriden specifically for each component. These variables usually provide styling for different component states, look etc.
 * Tier 3: Style getters - These are functions that return style for components. This allows for complete control over how a component looks. They inherit variables from component variables. Think of those as actual classes
 */
export interface ITheme extends IStyleGetters {
  themeVariables: IThemeVariables;
  componentVariables: IComponentVariables;
}
