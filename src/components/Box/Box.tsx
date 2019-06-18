import * as React from 'react';
import { View, ViewStyle } from 'react-native';

import { BackgroundColor, ContainerShape, Theme, useTheme } from '../../theme';

export interface BoxProps extends ViewStyle {
  children?: React.ReactNode;

  shape?: ContainerShape;
  backgroundColor?: BackgroundColor;
}

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
  elevation: (elevation: 0 | 1 | 2 | 3 | 4, theme: Theme) =>
    theme.elevations[elevation],
  shape: (shape: ContainerShape, theme: Theme) => theme.containerShapes[shape],
};

export const Box = (props: BoxProps) => {
  const { children, testID, ...viewStyles } = props;
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
    <View testID={testID} style={[pureStyles, transformedStyles]}>
      {children}
    </View>
  );
};
