import { TextStyle } from 'react-native';

import { ITextVariables } from '../component-variables/textVariables';
import {
  FontFamily,
  IFontFamilies,
  ITextColors,
  TextColor,
  TextSize,
} from '../ThemeInterface';

export type GetTextStyles = (
  size: TextSize,
  color: TextColor,
  fontFamily: FontFamily,
  isInline?: boolean,
) => {
  textStyle: TextStyle;
};

export const getFontFamily = (fontFamilies: IFontFamilies) => (
  fontFamily: FontFamily,
) => fontFamilies[fontFamily];
export const getTextColor = (textColors: ITextColors) => (
  textColor: TextColor,
) => textColors[textColor];

export const getTextStyle = (textVariables: ITextVariables): GetTextStyles => (
  size,
  color,
  fontFamily,
  isInline = false,
) => {
  return {
    textStyle: {
      color: getTextColor(textVariables.color)(color),
      fontFamily: getFontFamily(textVariables.fontFamily)(fontFamily),
      ...(isInline
        ? {
            alignSelf: 'flex-start',
            flexDirection: 'row',
          }
        : {}),
      ...textVariables.size[size],
    },
  };
};
