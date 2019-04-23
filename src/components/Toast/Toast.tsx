import * as React from 'react';
import { View } from 'react-native';
import { animated, useSpring } from 'react-spring/native';
import { Omit } from 'ts-essentials';

import { Alert, AlertProps } from '../Alert';

const AnimatedView = animated(View);

export type ToastId = string;

export interface ToastSettings extends Omit<AlertProps, 'onClose'> {
  id?: ToastId;
  offset?: number;
  /* duration for how long the toast should stay active */
  duration?: number;
  /* custom component, will override every other setting */
  component?: React.ReactNode;
}

export interface ToastInstance extends ToastSettings {
  id: ToastId;
  onRemove: () => void;
}

// tslint:disable-next-line
export interface ToastProps extends ToastInstance {}

export const Toast = (props: ToastProps) => {
  const {
    component,
    id,
    onRemove,
    duration = 3000,
    offset = 16,
    ...toastSettings
  } = props;

  const style = useSpring({
    from: { translateY: -500 },
    onRest: () => onRemove(),
    to: async next => {
      // tslint:disable-next-line
      await next({ translateY: 10 });
      // tslint:disable-next-line
      await next({ translateY: -500, delay: duration });
    },
  });

  return (
    // @ts-ignore
    <AnimatedView style={{ transform: [{ translateY: style.translateY }] }}>
      {component || <Alert {...toastSettings} onClose={onRemove} />}
    </AnimatedView>
  );
};
