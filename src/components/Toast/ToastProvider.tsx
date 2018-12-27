import * as React from 'react';
import { View } from 'react-native';

import { Theme, withTheme } from '../../theme';
import Toast, { ToastId, ToastInstance, ToastSettings } from './Toast';
import { ToastProvider as ToastContectProvider } from './ToastContext';

export interface ToastProviderProps {
  children?: React.ReactNode;
  theme: Theme;
}

export interface ToastProviderState {
  toasts: ToastInstance[];
}

const hasCustomId = (toastSettings: ToastSettings) => !!toastSettings.id;

export class ToastProvider extends React.Component<
  ToastProviderProps,
  ToastProviderState
> {
  public static idCounter: number = 0;

  constructor(props: ToastProviderProps) {
    super(props);

    this.state = {
      toasts: [],
    };
  }

  public removeToast = (id: ToastId) => {
    this.setState(previousState => {
      return {
        toasts: previousState.toasts.filter(toast => toast.id !== id),
      };
    });
  };

  public notify = (toastSettings: ToastSettings) => {
    const toastInstance = this.createToastInstance(toastSettings);

    // If there's a custom toast D passed, close existing toasts with the same custom D
    if (hasCustomId(toastSettings)) {
      for (const toast of this.state.toasts) {
        // Since unique D is still appended to a custom D, skip the unique D and check only prefix
        if (String(toast.id).startsWith(String(toastSettings.id))) {
          this.removeToast(toast.id);
        }
      }
    }

    this.setState(previousState => {
      return {
        toasts: [...previousState.toasts, toastInstance],
      };
    });
  };

  public createToastInstance = (
    toastSettings: ToastSettings,
  ): ToastInstance => {
    const uniqueId = ++ToastProvider.idCounter;
    const id = hasCustomId(toastSettings)
      ? `${toastSettings.id}-${uniqueId}`
      : `${uniqueId}`;

    return {
      id,
      onRemove: () => this.removeToast(id),
      ...toastSettings,
    };
  };

  public render() {
    const { children, theme } = this.props;
    const { toasts } = this.state;
    const [currentToast] = toasts;

    // Intent does not matter here
    // Consider using a different style getter for toast provider
    const { containerStyle } = theme.getToastStyles('info');

    return (
      <ToastContectProvider
        value={{
          danger: (toastSettings: ToastSettings) =>
            this.notify({ ...toastSettings, intent: 'danger' }),
          notify: (toastSettings: ToastSettings) =>
            this.notify({ ...toastSettings }),
          success: (toastSettings: ToastSettings) =>
            this.notify({ ...toastSettings, intent: 'success' }),
          warning: (toastSettings: ToastSettings) =>
            this.notify({ ...toastSettings, intent: 'warning' }),
        }}
      >
        {children}
        <View style={containerStyle}>
          {currentToast && <Toast key={currentToast.id} {...currentToast} />}
        </View>
      </ToastContectProvider>
    );
  }
}

export default withTheme(ToastProvider);
