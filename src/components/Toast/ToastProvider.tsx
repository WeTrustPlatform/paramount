import * as React from 'react';
import { View } from 'react-native';
import { DeepPartial } from 'ts-essentials';

import { Theme, withTheme } from '../../theme';
import { mergeStyles, ReplaceReturnType } from '../../utils/mergeStyles';
import { Toast, ToastId, ToastInstance, ToastSettings } from './Toast';
import { GetToastStyles, getToastStyles, ToastStyles } from './Toast.styles';
import { ToastContext } from './ToastContext';

export interface ToastProviderProps {
  children?: React.ReactNode;
  theme: Theme;
  getStyles?: ReplaceReturnType<GetToastStyles, DeepPartial<ToastStyles>>;
}

export interface ToastProviderState {
  toasts: ToastInstance[];
}

const hasCustomId = (toastSettings: ToastSettings) => !!toastSettings.id;

class ToastProviderBase extends React.Component<
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
        // Immediately remove the current toast
        toasts: [...previousState.toasts.slice(1), toastInstance],
      };
    });

    return toastInstance;
  };

  public createToastInstance = (
    toastSettings: ToastSettings,
  ): ToastInstance => {
    const uniqueId = ++ToastProviderBase.idCounter;
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
    const { children, theme, getStyles } = this.props;
    const { toasts } = this.state;
    const [currentToast] = toasts;

    // Intent does not matter here
    // Consider using a different style getter for toast provider
    const { containerStyle } = mergeStyles(getToastStyles, getStyles)(
      { intent: 'info' },
      theme,
    );

    return (
      <ToastContext.Provider
        value={{
          danger: (toastSettings: ToastSettings) =>
            this.notify({ ...toastSettings, intent: 'danger' }),
          notify: (toastSettings: ToastSettings) =>
            this.notify({ ...toastSettings }),
          removeToast: (id: ToastId) => this.removeToast(id),
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
      </ToastContext.Provider>
    );
  }
}

export const ToastProvider = withTheme(ToastProviderBase);
