import createFocusTrap, { FocusTrap } from 'focus-trap';
import React from 'react';
import ReactDOM from 'react-dom';
import { animated, useSpring } from 'react-spring/web.cjs';

import { springDefaultConfig } from '../../constants/Animation';
import { useElement, useLockBodyScroll } from '../../hooks';

import { ModalProps } from './Modal';

export const Modal = ({ useHistory = false, ...props }: ModalProps) => {
  if (useHistory) return <HistoryModal {...props} />;

  return <ModalBase {...props} />;
};

let modalId = 0;

/**
 * There are 3 ways a user may close the modal on the browser
 * 1. Back button press
 * 2. Escape key
 * 3. Manually closed from within the modal (e.g. Close button)
 * Each of them should properly restore the page user was at
 */
class HistoryModal extends React.Component<ModalProps> {
  public modalId = ++modalId;

  public componentDidUpdate = (previousProps: ModalProps) => {
    const { visible } = this.props;

    if (previousProps.visible !== visible) {
      if (visible) {
        this.updateBrowserHistory();
      } else {
        this.handleManuallyClosed();
      }
    }
  };

  public componentWillUnmount = () => {
    this.clearBrowserState();
  };

  public updateBrowserHistory = () => {
    // Ensure history state does not already contain our modal name to avoid double-pushing
    if (
      !history.state ||
      !history.state.modal ||
      !history.state.modal[this.modalId]
    ) {
      // Push to history so that the page is not lost on browser back button press
      history.pushState(
        {
          ...history.state,
          modal: {
            ...(history.state && history.state.modal),
            [this.modalId]: true,
          },
        },
        '',
      );
    }

    // Listen for back button presses
    window.addEventListener('popstate', this.handlePopstate, false);
  };

  /** Back button press */
  public handlePopstate = (event: PopStateEvent) => {
    const { visible, onRequestClose } = this.props;
    // Close the modal if the history state no longer contains our modal name
    if (
      (!event.state ||
        !event.state.modal ||
        !event.state.modal[this.modalId]) &&
      onRequestClose
    ) {
      this.clearBrowserState();
      onRequestClose();
    }

    // When the browser back button is pressed and uppy is now the latest entry in the history but the modal is closed, fix the history by removing the uppy history entry
    // This occurs when another entry is added into the history state while the modal is open, and then the modal gets manually closed
    // Solves PR #575 (https://github.com/transloadit/uppy/pull/575)
    if (
      !visible &&
      event.state &&
      event.state.modal &&
      event.state.modal[this.modalId]
    ) {
      history.go(-1);
    }
  };

  /** Escape key */
  public handleEscapeKey = () => {
    const { onRequestClose } = this.props;

    if (
      (history.state ||
        history.state.modal ||
        history.state.modal[this.modalId]) &&
      onRequestClose
    ) {
      /** Clear state, so that when a falsy `visible` prop gets passed, it can check whether the state still exists in `handleManuallyClosed` */
      this.clearBrowserState();
      onRequestClose();
      history.go(-1);
    }
  };

  /** Manual */
  public handleManuallyClosed = () => {
    if (
      history.state &&
      history.state.modal &&
      history.state.modal[this.modalId]
    ) {
      this.clearBrowserState();
      history.go(-1);
    }
  };

  public clearBrowserState = () => {
    history.replaceState(
      {
        ...history.state,
        modal: {
          ...(history.state && history.state.modal),
          [this.modalId]: false,
        },
      },
      '',
    );

    window.removeEventListener('popstate', this.handlePopstate, false);
  };

  public render() {
    const { ...modalProps } = this.props;

    return <ModalBase {...modalProps} onRequestClose={this.handleEscapeKey} />;
  }
}

// Temporary usage until it is integrated
// https://github.com/necolas/react-native-web/issues/1020

// eslint-disable-next-line
const ModalBase = (props: ModalProps): React.ReactPortal | null => {
  const {
    children,
    transparent,
    visible,
    shouldLockBodyScroll = true,
    onRequestClose,
    animationType = 'none',
  } = props;
  const isUnmountingRef = React.useRef(false);
  const targetElement = useElement();
  const [isInView, setIsInView] = React.useState(visible);
  const elementRef = React.useRef<HTMLDivElement>(null);
  const focusTrapRef = React.useRef<FocusTrap>(null);

  useLockBodyScroll({ isLocked: !!(shouldLockBodyScroll && visible) });

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
            if (onRequestClose && visible && !isUnmountingRef.current) {
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
      isUnmountingRef.current = true;
      deactivateFocus();
    };
  }, [onRequestClose, visible]);

  const { opacity, y } = useSpring({
    onRest: () => !visible && isInView && setIsInView(false),

    config: springDefaultConfig,

    opacity: animationType === 'fade' ? (visible ? 1 : 0) : 1,
    y: animationType === 'slide' ? (visible ? 0 : 100) : 0,
  });

  // It will not work if targetElement is falsy so we exit early
  // This may happen e.g. during SSR
  if (!targetElement) return null;

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
        position: shouldLockBodyScroll ? 'fixed' : 'absolute',
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
