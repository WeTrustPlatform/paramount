import * as React from 'react';

import { Theme, withTheme } from '../../theme';
import Box, { BoxProps } from './Box';

export type GridScale =
  | 0
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12
  | 13
  | 14
  | 15
  | 16
  | 17
  | 18;

const DEFAULT_GRD_POINT_MULTPLIER = 8;

export interface SpacingProps extends BoxProps {
  theme: Theme;

  gridPointMultiplier?: number;
  height?: GridScale;

  margin?: GridScale;
  marginBottom?: GridScale;
  marginEnd?: GridScale;
  marginHorizontal?: GridScale;
  marginLeft?: GridScale;
  marginRight?: GridScale;
  marginStart?: GridScale;
  marginTop?: GridScale;
  marginVertical?: GridScale;

  padding?: GridScale;
  paddingBottom?: GridScale;
  paddingEnd?: GridScale;
  paddingHorizontal?: GridScale;
  paddingLeft?: GridScale;
  paddingRight?: GridScale;
  paddingStart?: GridScale;
  paddingTop?: GridScale;
  paddingVertical?: GridScale;
}

const hasGrid = {
  height: true,

  margin: true,
  marginBottom: true,
  marginEnd: true,
  marginHorizontal: true,
  marginLeft: true,
  marginRight: true,
  marginStart: true,
  marginTop: true,
  marginVertical: true,

  padding: true,
  paddingBottom: true,
  paddingEnd: true,
  paddingHorizontal: true,
  paddingLeft: true,
  paddingRight: true,
  paddingStart: true,
  paddingTop: true,
  paddingVertical: true,
};

const Spacing = (props: SpacingProps) => {
  const marshalledProps = { ...props };

  for (const prop in props) {
    // @ts-ignore
    if (hasGrid[prop]) {
      // @ts-ignore
      marshalledProps[prop] =
        // @ts-ignore
        props[prop] *
        (props.gridPointMultiplier || DEFAULT_GRD_POINT_MULTPLIER);
    }
  }

  return <Box {...marshalledProps} />;
};

export default withTheme(Spacing);
