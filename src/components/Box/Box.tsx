import React from 'react';
import { View, ViewStyle } from 'react-native';

import {
  BackgroundColor,
  ContainerShape,
  SpacingSize,
  Theme,
  useTheme,
} from '../../theme';
import { getSpacing } from '../Spacing';

export interface BoxProps extends ViewStyle {
  children?: React.ReactNode;
  testID?: string;

  shape?: ContainerShape;
  backgroundColor?: BackgroundColor;

  space?: SpacingSize | number;
  spaceBottom?: SpacingSize | number;
  spaceEnd?: SpacingSize | number;
  spaceHorizontal?: SpacingSize | number;
  spaceLeft?: SpacingSize | number;
  spaceRight?: SpacingSize | number;
  spaceStart?: SpacingSize | number;
  spaceTop?: SpacingSize | number;
  spaceVertical?: SpacingSize | number;
}

type BoxProp = keyof Omit<Omit<BoxProps, 'children'>, 'testID'>;

const propToFn: Partial<
  {
    [key in BoxProp]: (
      prop: NonNullable<BoxProps[key]>,
      theme: Theme,
    ) => ViewStyle;
  }
> = {
  backgroundColor: (color: BackgroundColor | string, theme: Theme) => {
    // @ts-ignore
    if (theme.colors.background[color]) {
      // @ts-ignore
      return { backgroundColor: theme.colors.background[color] };
    }

    return { backgroundColor: color };
  },
  elevation: (elevation: number, theme: Theme) => theme.elevations[elevation],

  shape: (shape: ContainerShape, theme: Theme) => theme.containerShapes[shape],

  space: (size: SpacingSize | number, theme: Theme) => ({
    padding: getSpacing(size, theme),
  }),
  spaceBottom: (size: SpacingSize | number, theme: Theme) => ({
    paddingBottom: getSpacing(size, theme),
  }),
  spaceEnd: (size: SpacingSize | number, theme: Theme) => ({
    paddingEnd: getSpacing(size, theme),
  }),
  spaceHorizontal: (size: SpacingSize | number, theme: Theme) => ({
    paddingHorizontal: getSpacing(size, theme),
  }),
  spaceLeft: (size: SpacingSize | number, theme: Theme) => ({
    paddingLeft: getSpacing(size, theme),
  }),
  spaceRight: (size: SpacingSize | number, theme: Theme) => ({
    paddingRight: getSpacing(size, theme),
  }),
  spaceStart: (size: SpacingSize | number, theme: Theme) => ({
    paddingStart: getSpacing(size, theme),
  }),
  spaceTop: (size: SpacingSize | number, theme: Theme) => ({
    paddingTop: getSpacing(size, theme),
  }),
  spaceVertical: (size: SpacingSize | number, theme: Theme) => ({
    paddingVertical: getSpacing(size, theme),
  }),
};

export const Box = (props: BoxProps) => {
  const { children, testID, ...viewStyles } = props;
  const theme = useTheme();
  const transformedStyles = [];
  const pureStyles: ViewStyle = {};

  for (const prop in viewStyles) {
    if (prop) {
      const styleFn = propToFn[prop as BoxProp];

      if (styleFn) {
        // @ts-ignore
        const style = styleFn(viewStyles[prop as BoxProp], theme);

        transformedStyles.push(style);
      } else {
        // @ts-ignore
        pureStyles[prop as keyof ViewStyle] = viewStyles[prop as BoxProp];
      }
    }
  }

  return (
    <View testID={testID} style={[pureStyles, transformedStyles]}>
      {children}
    </View>
  );
};
