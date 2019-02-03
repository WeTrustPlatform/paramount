import createFocusTrap, { FocusTrap } from 'focus-trap';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { ModalBaseProps } from './ModalBase';

// Temporary usage until it is integrated
// https://github.com/necolas/react-native-web/issues/1020

class ModalBase extends React.PureComponent<ModalBaseProps> {
  public el: HTMLDivElement | null;
  public modalRoot: HTMLBodyElement | null;
  public focusTrap: FocusTrap | null;
  /** Solves the scenario where it is unmounting, we should deactivate focus but not trigger `onRequestClose()` */
  public isUnmounting: boolean = false;
  public content: React.RefObject<HTMLDivElement> = React.createRef<
    HTMLDivElement
  >();

  constructor(props: ModalBaseProps) {
    super(props);
    this.el = null;
    this.modalRoot = null;
    this.focusTrap = null;
  }

  public componentDidMount() {
    this.el = document.createElement('div');
    this.modalRoot = document.getElementsByTagName('body')[0];
    this.modalRoot.appendChild(this.el);
    this.forceUpdate();
  }

  public componentDidUpdate() {
    const { visible, isBackgroundScrollable = false } = this.props;

    if (visible) {
      this.activateFocus();
      if (!isBackgroundScrollable) {
        this.freezeBody();
      }
    } else {
      this.deactivateFocus();
      if (!isBackgroundScrollable) {
        this.unfreezeBody();
      }
    }
  }

  public componentWillUnmount() {
    if (this.modalRoot && this.el) {
      this.modalRoot.removeChild(this.el);
    }

    this.isUnmounting = true;
    this.deactivateFocus();
  }

  public freezeBody = () => {
    document.body.style.overflow = 'hidden';
    document.body.style.height = '100vh';
  };

  public unfreezeBody = () => {
    document.body.style.overflow = '';
    document.body.style.height = '';
  };

  public activateFocus = () => {
    const { onRequestClose } = this.props;

    if (this.content.current && !this.focusTrap) {
      this.focusTrap = createFocusTrap(this.content.current, {
        initialFocus: this.content.current,
        onDeactivate: () => {
          if (onRequestClose && this.props.visible && !this.isUnmounting) {
            onRequestClose();
          }
        },
      });

      this.focusTrap.activate();
    }
  };

  public deactivateFocus = () => {
    if (this.focusTrap) {
      this.focusTrap.deactivate();
      this.focusTrap = null;
    }
  };

  public render(): React.ReactPortal | null {
    const { transparent, visible, isBackgroundScrollable = false } = this.props;

    if (!visible || !this.el) return null;

    return ReactDOM.createPortal(
      <div
        tabIndex={-1}
        ref={this.content}
        style={{
          backgroundColor: transparent ? 'transparent' : 'white',
          bottom: 0,
          left: 0,
          overflow: 'auto',
          position: isBackgroundScrollable ? 'absolute' : 'fixed',
          right: 0,
          top: 0,
          zIndex: 1000,
        }}
      >
        {this.props.children}
      </div>,
      this.el,
    );
  }
}

export default ModalBase;
