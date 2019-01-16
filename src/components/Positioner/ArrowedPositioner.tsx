import * as React from 'react';

import { withTheme } from '../../theme';
import { Positioner, PositionerProps } from '../Positioner';
import {
  getFullWidthPositionerArrow,
  getPositionerArrow,
} from './getPositionerArrow';

const ArrowedPositionedBase = (props: PositionerProps) => {
  const { content, isFullWidth, theme } = props;

  return (
    <Positioner
      {...props}
      content={({ position, targetMeasurements }) => {
        const getPositionerArrowParams = {
          position,
          targetMeasurements,
          theme,
        };
        const arrow = isFullWidth
          ? getFullWidthPositionerArrow(getPositionerArrowParams)
          : getPositionerArrow(getPositionerArrowParams);
        return (
          <>
            {content}
            {arrow}
          </>
        );
      }}
    />
  );
};

export const ArrowedPositioned = withTheme(ArrowedPositionedBase);
