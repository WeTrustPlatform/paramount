import * as React from 'react';
import { View, ViewStyle } from 'react-native';

import { Theme, withTheme } from '../../theme';

export const BASE_BORDER_RADII = 4;

export type Shape =
  | 'circle'
  | 'pill'
  | 'rounded'
  | 'roundedBottom'
  | 'roundedLeft'
  | 'roundedRight'
  | 'roundedTop'
  | 'square';

export interface BoxProps extends ViewStyle {
  style?: ViewStyle;
  theme: Theme;
  children?: React.ReactNode;

  elevation?: 0 | 1 | 2 | 3 | 4 | 5 | 6;

  shape?: Shape;
}

export const shapeMapping: {
  [shape: string]: ViewStyle;
} = {
  circle: {
    borderRadius: 999,
  },
  pill: {
    borderRadius: 999,
  },
  rounded: {
    borderRadius: BASE_BORDER_RADII,
  },
  roundedBottom: {
    borderBottomLeftRadius: BASE_BORDER_RADII,
    borderBottomRightRadius: BASE_BORDER_RADII,
  },
  roundedLeft: {
    borderBottomLeftRadius: BASE_BORDER_RADII,
    borderTopLeftRadius: BASE_BORDER_RADII,
  },
  roundedRight: {
    borderBottomRightRadius: BASE_BORDER_RADII,
    borderTopRightRadius: BASE_BORDER_RADII,
  },
  roundedTop: {
    borderTopLeftRadius: BASE_BORDER_RADII,
    borderTopRightRadius: BASE_BORDER_RADII,
  },
  square: {
    borderRadius: 0,
  },
};

const propToFn = {
  elevation: (elevation: 0 | 1 | 2 | 3 | 4, theme: Theme) => {
    return theme.elevations[elevation];
  },
  shape: (shape: Shape) => shapeMapping[shape],
};

const Box = ({ theme, ...props }: BoxProps) => {
  const { children, style: propStyle, ...viewStyles } = props;
  const transformedStyles = [];
  const pureStyles = {};

  for (const prop in viewStyles) {
    if (prop) {
      // @ts-ignore
      const styleFn = propToFn[prop];

      if (styleFn) {
        // @ts-ignore
        const style = styleFn(viewStyles[prop], theme);

        transformedStyles.push(style);
      } else {
        // @ts-ignore
        pureStyles[prop] = viewStyles[prop];
      }
    }
  }

  return (
    <View style={[pureStyles, transformedStyles, propStyle]}>{children}</View>
  );
};

export default withTheme(Box);
