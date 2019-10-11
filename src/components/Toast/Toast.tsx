import React from 'react';

import { Alert, AlertProps } from '../Alert';

export type ToastId = string;

export interface ToastSettings extends AlertProps {
  /**
   * Duration for how long the toast should stay active.
   * @default 3000
   */
  duration?: number;

  /**
   * Assign an id to the toast so you can remove it later.
   */
  id?: ToastId;
}

export interface ToastInstance extends ToastSettings {
  /**
   * (Ignore) Assign an id to the toast so you can remove it later.
   */
  id: ToastId;

  /**
   * (Ignore) Callback invoked when the duration is up.
   */
  onRemove: () => void;
}

// tslint:disable-next-line
export interface ToastProps extends ToastInstance {}

export const Toast = (props: ToastProps) => {
  const { id, onRemove, duration = 3000, ...toastSettings } = props;

  React.useEffect(() => {
    const timer = setTimeout(() => onRemove(), duration);
    return () => clearTimeout(timer);
  }, []);

  return <Alert {...toastSettings} />;
};
