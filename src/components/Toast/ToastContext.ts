import * as React from 'react';

import { IToastSettings } from './Toast';

export interface IToastContext {
  danger: (toastSettings: IToastSettings) => void;
  notify: (toastSettings: IToastSettings) => void;
  success: (toastSettings: IToastSettings) => void;
  warning: (toastSettings: IToastSettings) => void;
}

const defaultToastContext: IToastContext = {
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
