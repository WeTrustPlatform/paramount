import createFocusTrap, { FocusTrap } from 'focus-trap';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { animated, useSpring } from 'react-spring/web.cjs';

import { springDefaultConfig } from '../../constants/Animation';
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
    animationType = 'none',
  } = props;
  let isUnmounting = false;
  const targetElement = useElement('modal');
  const [isInView, setIsInView] = React.useState(visible);
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

    if (visible) {
      activateFocus();
      setIsInView(true);
    } else {
      deactivateFocus();
    }

    return () => {
      isUnmounting = true;
      deactivateFocus();
    };
  }, [visible]);

  const { opacity, y } = useSpring({
    onRest: () => {
      if (!visible) setIsInView(false);
    },

    config: springDefaultConfig,

    opacity: animationType === 'fade' ? (visible ? 1 : 0) : 1,
    y: animationType === 'slide' ? (visible ? 0 : 100) : 0,
  });

  return ReactDOM.createPortal(
    <animated.div
      tabIndex={-1}
      ref={elementRef}
      // @ts-ignore
      style={{
        backgroundColor: transparent ? 'transparent' : 'white',
        bottom: 0,
        display: isInView ? 'flex' : 'none',
        flexDirection: 'column',
        left: 0,
        opacity,
        position: isBackgroundScrollable ? 'absolute' : 'fixed',
        right: 0,
        top: 0,
        transform: y.interpolate(v => `translateY(${v}%)`),
        zIndex: 1000,
      }}
    >
      {visible ? children : null}
    </animated.div>,
    targetElement,
  );
};
