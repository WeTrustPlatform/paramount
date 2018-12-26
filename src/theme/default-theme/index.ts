import { ThemeVariables } from '../ThemeInterface';
import {
  controlBorderRadius,
  controlHeights,
  controlPaddings,
} from './controls';
import { colors, elevations, fills } from './foundational-styles';
import {
  fontFamilies,
  headingSizes,
  paragraphSizes,
  textSizes,
} from './typography';

export const defaultThemeVariables: ThemeVariables = {
  colors,
  fills,

  fontFamilies,

  headingSizes,
  paragraphSizes,
  textSizes,

  elevations,

  controlBorderRadius,
  controlHeights,
  controlPaddings,
};
