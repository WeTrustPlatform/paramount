import React from 'react';
import { Platform, View } from 'react-native';
import { animated, useTransition } from 'react-spring/native.cjs';

import { springDefaultConfig } from '../../constants/Animation';

import { Toast, ToastId, ToastInstance, ToastSettings } from './Toast';

export interface ToastContextValue {
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

const defaultToastContext: ToastContextValue = {
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

const AnimatedView = animated(View);

export type ToastPosition = 'top' | 'bottom';

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
      return { toasts: [...state.toasts, action.payload.toast] };
    case ActionType.REMOVE_TOAST:
      return {
        toasts: state.toasts.filter(toast => toast.id !== action.payload.id),
      };
    default:
      throw new Error();
  }
};

const getTransitionConfig = (offset: number, position: ToastPosition) => {
  if (position === 'top') {
    return {
      config: springDefaultConfig,

      enter: { translateY: offset },
      from: { translateY: -500 },
      leave: { translateY: -500 },
    };
  }

  return {
    config: springDefaultConfig,

    enter: { translateY: -offset },
    from: { translateY: 500 },
    leave: { translateY: 500 },
  };
};

const OFFSET = 16;
const POSITION = 'top';

export interface ToastProviderProps {
  children?: React.ReactNode;
}

export const ToastProvider = (props: ToastProviderProps) => {
  const { children } = props;
  const idCounterRef = React.useRef(0);
  // Use reducer because we want access previous value of state
  const [state, dispatch] = React.useReducer(reducer, initialState);

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

  const notify = React.useCallback(
    (toastSettings: ToastSettings) => {
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

      dispatch({
        type: ActionType.ADD_TOAST,
        payload: { toast: toastInstance },
      });

      return toastInstance;
    },
    [state.toasts],
  );

  const transitions = useTransition(
    state.toasts,
    toast => toast.id,
    getTransitionConfig(OFFSET, POSITION),
  );

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
      <View
        // @ts-ignore: Compat with web
        style={{
          left: 32,
          marginBottom: 0,
          marginLeft: 'auto',
          marginRight: 'auto',
          marginTop: 0,
          maxWidth: 560,
          // @ts-ignore: Compat with web
          position: Platform.OS === 'web' ? 'fixed' : 'absolute',
          right: 32,
          top: 0,
          zIndex: 100,
        }}
      >
        {transitions.map(({ item, props: transitionStyle, key }) => (
          <AnimatedView
            key={key}
            // @ts-ignore
            style={{
              position: 'absolute',
              width: '100%',
              transform: [{ translateY: transitionStyle.translateY }],
            }}
          >
            <Toast {...item} />
          </AnimatedView>
        ))}
      </View>
    </ToastContext.Provider>
  );
};
