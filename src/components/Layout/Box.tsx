import * as React from 'react';
import { View, ViewStyle } from 'react-native';

import { Theme, withTheme } from '../../theme';

export const BASE_BORDER_RADI = 4;

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
  theme: Theme;
  children?: React.ReactNode;

  elevation?: 0 | 1 | 2 | 3 | 4 | 5 | 6;

  marginX?: number | string;
  marginY?: number | string;
  paddingX?: number | string;
  paddingY?: number | string;

  shape?: Shape;
}

const shapeMap = {
  circle: {
    borderRadius: '50%',
  },
  pill: {
    borderRadius: '999px',
  },
  rounded: {
    borderRadius: `${BASE_BORDER_RADI}px`,
  },
  roundedBottom: {
    borderRadius: `0 0 ${BASE_BORDER_RADI}px ${BASE_BORDER_RADI}px`,
  },
  roundedLeft: {
    borderRadius: `${BASE_BORDER_RADI}px 0 0 ${BASE_BORDER_RADI}px`,
  },
  roundedRight: {
    borderRadius: `0 ${BASE_BORDER_RADI}px ${BASE_BORDER_RADI}px 0`,
  },
  roundedTop: {
    borderRadius: `${BASE_BORDER_RADI}px ${BASE_BORDER_RADI}px 0 0`,
  },
  square: {
    borderRadius: '0',
  },
};

const propToFn = {
  elevation: (elevation: 0 | 1 | 2 | 3 | 4, theme: Theme) => {
    return theme.themeVariables.elevations[elevation];
  },
  marginX: (marginX: number) => ({
    marginLeft: marginX,
    marginRight: marginX,
  }),
  marginY: (marginY: number) => ({
    marginBottom: marginY,
    marginTop: marginY,
  }),
  paddingX: (paddingX: number) => ({
    paddingLeft: paddingX,
    paddingRight: paddingX,
  }),
  paddingY: (paddingY: number) => ({
    paddingBottom: paddingY,
    paddingTop: paddingY,
  }),
  shape: (shape: Shape) => shapeMap[shape],
};

const Box = ({ theme, ...props }: BoxProps) => {
  const { children, ...viewStyles } = props;
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

  return <View style={[pureStyles, transformedStyles]}>{children}</View>;
};

export default withTheme(Box);
