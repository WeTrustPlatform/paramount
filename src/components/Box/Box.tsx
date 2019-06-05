import * as React from 'react';
import { View, ViewStyle } from 'react-native';

import { BackgroundColor, Theme, useTheme } from '../../theme';

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
  backgroundColor: (color: BackgroundColor, theme: Theme) => {
    // @ts-ignore
    if (theme.colors.background[color]) {
      // @ts-ignore
      return { backgroundColor: theme.colors.background[color] };
    }
    return {
      backgroundColor: color,
    };
  },
  elevation: (elevation: 0 | 1 | 2 | 3 | 4, theme: Theme) => {
    return theme.elevations[elevation];
  },
  shape: (shape: Shape) => shapeMapping[shape],
};

export const Box = (props: BoxProps) => {
  const { children, style: propStyle, testID, ...viewStyles } = props;
  const theme = useTheme();
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
    <View testID={testID} style={[pureStyles, transformedStyles, propStyle]}>
      {children}
    </View>
  );
};
