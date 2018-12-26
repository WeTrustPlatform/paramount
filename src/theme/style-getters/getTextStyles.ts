import { TextStyle } from 'react-native';

import { TextVariables } from '../component-variables/textVariables';
import {
  FontFamilies,
  FontFamily,
  TextColor,
  TextColors,
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

export const getFontFamily = (fontFamilies: FontFamilies) => (
  fontFamily: FontFamily,
) => fontFamilies[fontFamily];
export const getTextColor = (textColors: TextColors) => (
  textColor: TextColor,
) => textColors[textColor];

export const getTextStyle = (textVariables: TextVariables): GetTextStyles => (
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
