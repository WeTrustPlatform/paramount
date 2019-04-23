import * as React from 'react';
import { View } from 'react-native';
import { animated, useTrail } from 'react-spring/native';

const AnimatedView = animated(View);

export interface LoadingDotsProps {
  color?: string;
  size?: number;
}

const items = ['1', '2', '3'];

export const LoadingDots = (props: LoadingDotsProps) => {
  const { size = 10, color = '#aaa' } = props;

  const trail = useTrail(items.length, {
    config: { duration: 800 },
    from: { opacity: 0 },
    reset: true,
    to: async next => {
      while (true) {
        // tslint:disable-next-line
        await next({ opacity: 1 });
        // tslint:disable-next-line
        await next({ opacity: 0 });
      }
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
          key={items[index]}
          // @ts-ignore
          style={{
            backgroundColor: color,
            borderRadius: '50%',
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
