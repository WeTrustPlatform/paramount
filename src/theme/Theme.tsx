import deepMerge from 'deepmerge';
import React from 'react';
import { TextStyle, ViewStyle } from 'react-native';
import { DeepPartial } from 'ts-essentials';

import { Layout, LayoutProvider, ToastProvider } from '../components';
import { GetAlertStyles } from '../components/Alert/Alert.styles';
import { GetAvatarStyles } from '../components/Avatar/Avatar.styles';
import { GetBadgeStyles } from '../components/Badge/Badge.styles';
import { GetButtonStyles } from '../components/Button/Button.styles';
import { GetCheckboxStyles } from '../components/Checkbox/Checkbox.styles';
import { GetCollapsibleStyles } from '../components/Collapsible/Collapsible.styles';
import { GetCounterStyles } from '../components/Counter/Counter.styles';
import { GetDialogStyles } from '../components/Dialog/Dialog.styles';
import { GetDividerStyles } from '../components/Divider/Divider.styles';
import { GetDrawerStyles } from '../components/Drawer/Drawer.styles';
import { GetFormFieldStyles } from '../components/Form/FormField.styles';
import { GetTextInputStyles } from '../components/Inputs/TextInput.styles';
import { GetColumnStyles } from '../components/Layout/Column.styles';
import { GetContainerStyles } from '../components/Layout/Container.styles';
import { GetRowStyles } from '../components/Layout/Row.styles';
import { GetListItemStyles } from '../components/ListItem/ListItem.styles';
import { GetOverlayStyles } from '../components/Overlay/Overlay.styles';
import { GetPickerButtonStyles } from '../components/Pickers/PickerButton.styles';
import { GetPopoverStyles } from '../components/Popover/Popover.styles';
import { GetPositionerStyles } from '../components/Positioner/Positioner.styles';
import { GetProgressBarStyles } from '../components/ProgressBar/ProgressBar.styles';
import { GetRatingStyles } from '../components/Rating/Rating.styles';
import { GetSliderStyles } from '../components/Slider/Slider.styles';
import { GetSwitchStyles } from '../components/Switch/Switch.styles';
import { GetTabStyles } from '../components/Tabs/Tab.styles';
import { GetTabsStyles } from '../components/Tabs/Tabs.styles';
import { GetHeadingStyles } from '../components/Typography/Heading.styles';
import { GetLabelStyles } from '../components/Typography/Label.styles';
import { GetParagraphStyles } from '../components/Typography/Paragraph.styles';
import { GetTextStyles } from '../components/Typography/Text.styles';
import { GetWheelPickerStyles } from '../components/WheelPicker/WheelPicker.styles';
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
  overlay: string;

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

  components: Partial<{
    getAlertStyles: GetAlertStyles;
    getAvatarStyles: GetAvatarStyles;
    getBadgeStyles: GetBadgeStyles;
    getButtonStyles: GetButtonStyles;
    getCheckboxStyles: GetCheckboxStyles;
    getCollapsibleStyles: GetCollapsibleStyles;
    getCounterStyles: GetCounterStyles;
    getDialogStyles: GetDialogStyles;
    getDividerStyles: GetDividerStyles;
    getDrawerStyles: GetDrawerStyles;
    getFormFieldStyles: GetFormFieldStyles;
    getColumnStyles: GetColumnStyles;
    getContainerStyles: GetContainerStyles;
    getRowStyles: GetRowStyles;
    getTextInputStyles: GetTextInputStyles;
    getLabelStyles: GetLabelStyles;
    getListItemStyles: GetListItemStyles;
    getOverlayStyles: GetOverlayStyles;
    getPickerButtonStyles: GetPickerButtonStyles;
    getPopoverStyles: GetPopoverStyles;
    getPositionerStyles: GetPositionerStyles;
    getProgressBarStyles: GetProgressBarStyles;
    getRatingStyles: GetRatingStyles;
    getWheelPickerStyles: GetWheelPickerStyles;
    getSliderStyles: GetSliderStyles;
    getSwitchStyles: GetSwitchStyles;
    getTabStyles: GetTabStyles;
    getTabsStyles: GetTabsStyles;
    getHeadingStyles: GetHeadingStyles;
    getTextStyles: GetTextStyles;
    getParagraphStyles: GetParagraphStyles;
  }>;
}

export const ThemeContext = React.createContext(defaultTheme);

export interface ThemeProviderProps {
  children?: React.ReactNode;
  value?: DeepPartial<Theme>;
}

const createTheme = (theme?: DeepPartial<Theme>): Theme => {
  // @ts-ignore
  return theme ? deepMerge(defaultTheme, theme) : defaultTheme;
};

export const ThemeProvider = (props: ThemeProviderProps) => {
  const { children, value = defaultTheme } = props;

  const theme = createTheme(value);

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
