import { TextStyle } from 'react-native';

import {
  BorderColor,
  BorderColors,
  ControlSize,
  Theme,
} from '../../theme/Theme';
import { DividerProps } from './Divider';

export interface DividerStyles {
  dividerStyle: TextStyle;
}

export type DividerPosition = 'horizontal' | 'vertical';

export type GetDividerStyles = (
  props: DividerProps,
  theme: Theme,
) => DividerStyles;

export const getDividerColor = (borderColors: BorderColors) => (
  borderColor: BorderColor,
) => {
  // @ts-ignore
  const presetColor = borderColors[borderColor] as string | undefined;

  return presetColor || borderColor;
};

const dividerScale: { [size in ControlSize]: number } = {
  large: 3,
  medium: 2,
  small: 1,
};

export const getDividerStyles: GetDividerStyles = (
  { size = 'small', color, position = 'horizontal' },
  theme,
) => {
  const backgroundColor = getDividerColor(theme.colors.border)(
    color || theme.colors.border.default,
  );

  const dividerSize = dividerScale[size];

  const styleMap = {
    horizontal: {
      backgroundColor,
      height: dividerSize,
      width: '100%',
    },
    vertical: {
      backgroundColor,
      height: '100%',
      width: dividerSize,
    },
  };

  return {
    dividerStyle: position ? styleMap[position] : styleMap.horizontal,
  };
};
