import * as React from 'react';
import { View } from 'react-native';

import { ITheme, withTheme } from '../../theme';
import Toast, { IToast, IToastSettings, ToastId } from './Toast';
import { ToastProvider as ToastContectProvider } from './ToastContext';

export interface IToastProviderProps {
  children?: React.ReactNode;
  theme: ITheme;
}

export interface IToastProviderState {
  toasts: IToast[];
}

const hasCustomId = (toastSettings: IToastSettings) => !!toastSettings.id;

export class ToastProvider extends React.Component<
  IToastProviderProps,
  IToastProviderState
> {
  public static idCounter: number = 0;

  constructor(props: IToastProviderProps) {
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

  public notify = (toastSettings: IToastSettings) => {
    const toastInstance = this.createToastInstance(toastSettings);

    // If there's a custom toast ID passed, close existing toasts with the same custom ID
    if (hasCustomId(toastSettings)) {
      for (const toast of this.state.toasts) {
        // Since unique ID is still appended to a custom ID, skip the unique ID and check only prefix
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

  public createToastInstance = (toastSettings: IToastSettings): IToast => {
    const uniqueId = ++ToastProvider.idCounter;
    const id = hasCustomId(toastSettings)
      ? `${toastSettings.id}-${uniqueId}`
      : `${uniqueId}`;

    return {
      component: toastSettings.component,
      description: toastSettings.description,
      duration: toastSettings.duration || 1000,
      id,
      intent: toastSettings.intent,
      onRemove: () => this.removeToast(id),
      title: toastSettings.title,
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
          danger: (toastSettings: IToastSettings) =>
            this.notify({ ...toastSettings, intent: 'danger' }),
          notify: (toastSettings: IToastSettings) =>
            this.notify({ ...toastSettings }),
          success: (toastSettings: IToastSettings) =>
            this.notify({ ...toastSettings, intent: 'success' }),
          warning: (toastSettings: IToastSettings) =>
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
