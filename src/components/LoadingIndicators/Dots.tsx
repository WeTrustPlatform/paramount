import * as React from 'react';
import { View } from 'react-native';
import { animated, useTrail } from 'react-spring/native.cjs';

import { useForceUpdate } from '../../hooks';
import { useTheme } from '../../theme';

const AnimatedView = animated(View);

export interface DotsProps {
  color?: string;
  size?: number;
}

export const Dots = (props: DotsProps) => {
  const theme = useTheme();
  const { size = 10, color = theme.colors.text.primary } = props;
  const forceUpdate = useForceUpdate();

  const trail = useTrail(3, {
    config: { duration: 800 },
    from: { opacity: 0 },
    onRest: forceUpdate,
    reset: true,
    to: async next => {
      // tslint:disable-next-line
      await next({ opacity: 1 });
      // tslint:disable-next-line
      await next({ opacity: 0 });
    },
  });

  return (
    <View
      style={{
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
      }}
    >
      {trail.map((style, index) => (
        <AnimatedView
          key={index}
          // @ts-ignore
          style={{
            backgroundColor: color,
            borderRadius: 999,
            height: size,
            marginLeft: 3,
            marginRight: 3,
            opacity: style.opacity,
            width: size,
          }}
        />
      ))}
    </View>
  );
};
