import * as React from 'react';

import { ToastId, ToastInstance, ToastSettings } from './Toast';

export interface ToastContext {
  danger: (toastSettings: ToastSettings) => ToastInstance;
  notify: (toastSettings: ToastSettings) => ToastInstance;
  success: (toastSettings: ToastSettings) => ToastInstance;
  warning: (toastSettings: ToastSettings) => ToastInstance;
  removeToast: (id: ToastId) => void;
}

const defaultToastInstance: ToastInstance = {
  id: '1',
  onRemove: () => null,
};

const defaultToastContext: ToastContext = {
  danger: () => defaultToastInstance,
  notify: () => defaultToastInstance,
  removeToast: id => {
    return;
  },
  success: () => defaultToastInstance,
  warning: () => defaultToastInstance,
};

export const ToastContext = React.createContext(defaultToastContext);

export const useToast = () => {
  return React.useContext(ToastContext);
};
