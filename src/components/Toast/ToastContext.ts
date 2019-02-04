import * as React from 'react';

import { ToastInstance, ToastSettings } from './Toast';

export interface ToastContext {
  danger: (toastSettings: ToastSettings) => ToastInstance;
  notify: (toastSettings: ToastSettings) => ToastInstance;
  success: (toastSettings: ToastSettings) => ToastInstance;
  warning: (toastSettings: ToastSettings) => ToastInstance;
}

const defaultToastInstance: ToastInstance = {
  id: '1',
  onRemove: () => null,
};

const defaultToastContext: ToastContext = {
  danger: () => defaultToastInstance,
  notify: () => defaultToastInstance,
  success: () => defaultToastInstance,
  warning: () => defaultToastInstance,
};

export const ToastContext = React.createContext(defaultToastContext);
