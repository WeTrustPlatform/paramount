import * as React from 'react';

import { ITheme, withTheme } from '../../theme';
import Box, { IBoxProps } from './Box';

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

const DEFAULT_GRID_POINT_MULTIPLIER = 8;

export interface IGridBoxProps {
  theme: ITheme;

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
  marginX?: GridScale;
  marginY?: GridScale;

  padding?: GridScale;
  paddingBottom?: GridScale;
  paddingEnd?: GridScale;
  paddingHorizontal?: GridScale;
  paddingLeft?: GridScale;
  paddingRight?: GridScale;
  paddingStart?: GridScale;
  paddingTop?: GridScale;
  paddingVertical?: GridScale;
  paddingX?: GridScale;
  paddingY?: GridScale;
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
  marginX: true,
  marginY: true,

  padding: true,
  paddingBottom: true,
  paddingEnd: true,
  paddingHorizontal: true,
  paddingLeft: true,
  paddingRight: true,
  paddingStart: true,
  paddingTop: true,
  paddingVertical: true,
  paddingX: true,
  paddingY: true,
};

const GridBox = (props: IBoxProps & IGridBoxProps) => {
  const marshalledProps = { ...props };

  for (const prop in props) {
    // @ts-ignore
    if (hasGrid[prop]) {
      // @ts-ignore
      marshalledProps[prop] =
        // @ts-ignore
        props[prop] *
        (props.gridPointMultiplier || DEFAULT_GRID_POINT_MULTIPLIER);
    }
  }

  return <Box {...marshalledProps} />;
};

export default withTheme(GridBox);
