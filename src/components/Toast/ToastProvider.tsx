import * as React from 'react';
import { View } from 'react-native';
import { DeepPartial } from 'ts-essentials';

import { useTheme } from '../../theme';
import { mergeStyles, ReplaceReturnType } from '../../utils/mergeStyles';
import { Toast, ToastId, ToastInstance, ToastSettings } from './Toast';
import { GetToastStyles, getToastStyles, ToastStyles } from './Toast.styles';
import { ToastContext } from './ToastContext';

export interface ToastProviderProps {
  children?: React.ReactNode;
  getStyles?: ReplaceReturnType<GetToastStyles, DeepPartial<ToastStyles>>;
}

const hasCustomId = (toastSettings: ToastSettings) => !!toastSettings.id;

interface ToastProviderState {
  toasts: ToastInstance[];
}

const initialState: ToastProviderState = {
  toasts: [],
};

enum ActionType {
  ADD_TOAST = 'ADD_TOAST',
  REMOVE_TOAST = 'REMOVE_TOAST',
}

type Action =
  | { type: ActionType.ADD_TOAST; payload: { toast: ToastInstance } }
  | { type: ActionType.REMOVE_TOAST; payload: { id: ToastId } };

const reducer = (state: ToastProviderState, action: Action) => {
  switch (action.type) {
    case ActionType.ADD_TOAST:
      return { toasts: [...state.toasts.slice(1), action.payload.toast] };
    case ActionType.REMOVE_TOAST:
      return {
        toasts: state.toasts.filter(toast => toast.id !== action.payload.id),
      };
    default:
      throw new Error();
  }
};

export const ToastProvider = (props: ToastProviderProps) => {
  const { children, getStyles } = props;
  const idCounterRef = React.useRef(0);
  // Use reducer because we want access previous value of state
  const [state, dispatch] = React.useReducer(reducer, initialState);
  const [currentToast] = state.toasts;

  const theme = useTheme();

  const { containerStyle } = mergeStyles(getToastStyles, getStyles)(
    { intent: 'info' },
    theme,
  );

  const createToastInstance = (toastSettings: ToastSettings): ToastInstance => {
    const uniqueId = ++idCounterRef.current;
    const id = hasCustomId(toastSettings)
      ? `${toastSettings.id}-${uniqueId}`
      : `${uniqueId}`;

    return {
      id,
      onRemove: () =>
        dispatch({ type: ActionType.REMOVE_TOAST, payload: { id } }),
      ...toastSettings,
    };
  };

  const notify = React.useCallback((toastSettings: ToastSettings) => {
    const toastInstance = createToastInstance(toastSettings);

    // If there's a custom toast ID passed, close existing toasts with the same custom ID
    if (hasCustomId(toastSettings)) {
      for (const toast of state.toasts) {
        // Since unique ID is still appended to a custom ID, skip the unique ID and check only prefix
        if (String(toast.id).startsWith(String(toastSettings.id))) {
          dispatch({
            payload: { id: toast.id },
            type: ActionType.REMOVE_TOAST,
          });
        }
      }
    }

    dispatch({ type: ActionType.ADD_TOAST, payload: { toast: toastInstance } });

    return toastInstance;
  }, []);

  return (
    <ToastContext.Provider
      value={{
        danger: (toastSettings: ToastSettings) =>
          notify({ ...toastSettings, intent: 'danger' }),
        notify: (toastSettings: ToastSettings) => notify({ ...toastSettings }),
        success: (toastSettings: ToastSettings) =>
          notify({ ...toastSettings, intent: 'success' }),
        warning: (toastSettings: ToastSettings) =>
          notify({ ...toastSettings, intent: 'warning' }),

        removeToast: (id: ToastId) =>
          dispatch({ type: ActionType.REMOVE_TOAST, payload: { id } }),
      }}
    >
      {children}
      <View style={containerStyle}>
        {currentToast && <Toast key={currentToast.id} {...currentToast} />}
      </View>
    </ToastContext.Provider>
  );
};
