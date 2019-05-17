import * as React from 'react';
import { Polygon, Svg } from 'react-native-svg';

import { useTheme } from '../../theme';

export interface StarProps {
  size?: number;
  isFilled?: boolean;
  color?: string;
}

export const Star = (props: StarProps) => {
  const { size = 24, color, isFilled = false } = props;
  const theme = useTheme();

  const coercedSize = String(size);

  const finalColor = color || theme.fills.subtle.yellow.backgroundColor;

  return (
    <Svg
      width={coercedSize}
      height={coercedSize}
      viewBox={`0 0 24 24`}
      fill={isFilled ? finalColor : 'none'}
      stroke={finalColor}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <Polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </Svg>
  );
};
