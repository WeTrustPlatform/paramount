import * as React from 'react';
import { Omit } from 'ts-essentials';

import { Alert, AlertProps } from '../Alert';

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

  React.useEffect(() => {
    const timer = setTimeout(() => onRemove(), duration);
    return () => clearTimeout(timer);
  }, []);

  return <>{component || <Alert {...toastSettings} onClose={onRemove} />}</>;
};
