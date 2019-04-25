import createFocusTrap, { FocusTrap } from 'focus-trap';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { useElement, useFreezeBody } from '../Helpers';
import { ModalBaseProps } from './ModalBase';

// Temporary usage until it is integrated
// https://github.com/necolas/react-native-web/issues/1020

export const ModalBase = (props: ModalBaseProps): React.ReactPortal | null => {
  const {
    children,
    transparent,
    visible,
    isBackgroundScrollable = false,
    onRequestClose,
  } = props;
  let isUnmounting = false;
  const targetElement = useElement('modal');
  const elementRef = React.useRef<HTMLDivElement>(null);
  const focusTrapRef = React.useRef<FocusTrap>(null);

  useFreezeBody({ isFrozen: !!(!isBackgroundScrollable && visible) });

  React.useEffect(() => {
    const deactivateFocus = () => {
      if (focusTrapRef.current) {
        focusTrapRef.current.deactivate();
        // @ts-ignore
        focusTrapRef.current = null;
      }
    };

    const activateFocus = () => {
      if (elementRef.current && !focusTrapRef.current) {
        // @ts-ignore
        focusTrapRef.current = createFocusTrap(elementRef.current, {
          initialFocus: elementRef.current,
          onDeactivate: () => {
            if (onRequestClose && visible && !isUnmounting) {
              onRequestClose();
            }
          },
        });

        focusTrapRef.current.activate();
      }
    };

    if (visible) activateFocus();
    else deactivateFocus();

    return () => {
      isUnmounting = true;
      deactivateFocus();
    };
  }, [visible]);

  if (!visible) return null;

  return ReactDOM.createPortal(
    <div
      tabIndex={-1}
      ref={elementRef}
      style={{
        backgroundColor: transparent ? 'transparent' : 'white',
        bottom: 0,
        left: 0,
        position: isBackgroundScrollable ? 'absolute' : 'fixed',
        right: 0,
        top: 0,
        zIndex: 1000,
      }}
    >
      {children}
    </div>,
    targetElement,
  );
};
