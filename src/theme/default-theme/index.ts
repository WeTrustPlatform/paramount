import { Theme } from '../ThemeInterface';
import {
  controlBorderRadius,
  controlHeights,
  controlPaddings,
} from './controls';
import { colors, elevations, fills } from './foundational-styles';
import {
  fontFamilies,
  fontWeights,
  headingSizes,
  paragraphSizes,
  textSizes,
} from './typography';

export const defaultTheme: Theme = {
  colors,
  fills,

  fontFamilies,
  fontWeights,

  headingSizes,
  paragraphSizes,
  textSizes,

  elevations,

  controlBorderRadius,
  controlHeights,
  controlPaddings,
};
