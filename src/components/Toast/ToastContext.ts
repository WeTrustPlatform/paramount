import * as React from 'react';

import { ToastSettings } from './Toast';

export interface ToastContext {
  danger: (toastSettings: ToastSettings) => void;
  notify: (toastSettings: ToastSettings) => void;
  success: (toastSettings: ToastSettings) => void;
  warning: (toastSettings: ToastSettings) => void;
}

const defaultToastContext: ToastContext = {
  danger: () => null,
  notify: () => null,
  success: () => null,
  warning: () => null,
};

const {
  Provider: ToastProvider,
  Consumer: ToastConsumer,
} = React.createContext(defaultToastContext);

export { ToastProvider, ToastConsumer };
