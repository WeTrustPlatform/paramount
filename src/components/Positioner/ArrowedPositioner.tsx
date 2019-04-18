import * as React from 'react';

import { useTheme } from '../../theme';
import { Positioner, PositionerProps } from '../Positioner';
import {
  getFullWidthPositionerArrow,
  getPositionerArrow,
} from './getPositionerArrow';

export const ArrowedPositioned = (props: PositionerProps) => {
  const { content, isFullWidth } = props;
  const theme = useTheme();

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
