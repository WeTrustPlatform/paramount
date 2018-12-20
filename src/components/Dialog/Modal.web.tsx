// Temporary usage until it is integrated
// https://github.com/necolas/react-native-web/issues/1020
// @ts-ignore: FIX: Fix typing of this module
import FocusTrap from 'focus-trap-react';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { ModalProps } from './Modal';

const ESC_KEY = 27;

class Modal extends React.PureComponent<ModalProps> {
  public el: HTMLDivElement;
  public modalRoot: HTMLBodyElement;
  public content: React.RefObject<HTMLDivElement> = React.createRef();

  constructor(props: ModalProps) {
    super(props);
    this.el = document.createElement('div');
    this.modalRoot = document.getElementsByTagName('body')[0];
  }

  public componentDidMount() {
    // TODO: find a better solution
    // Currently, when the body height is shorter than the content that is scrollable
    // it will jump scroll to top when the modal is opened.
    // This hack keeps the body height the same length as the content
    document.body.style.position = 'relative';
    document.body.style.height = 'initial';
    document.body.style.minHeight = 'initial';

    this.modalRoot.appendChild(this.el);
  }

  public componentDidUpdate() {
    const { visible, isScrollable = false } = this.props;
    if (visible && !isScrollable) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
  }

  public componentWillUnmount() {
    this.modalRoot.removeChild(this.el);
  }

  public handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    const { onDismiss } = this.props;

    if (event.keyCode === ESC_KEY && onDismiss) {
      event.stopPropagation();
      onDismiss();
    }
  };

  public render() {
    const { transparent, visible, isScrollable = false } = this.props;

    if (!visible) return null;

    return ReactDOM.createPortal(
      <FocusTrap>
        <div
          ref={this.content}
          onKeyDown={this.handleKeyDown}
          style={{
            backgroundColor: transparent ? 'transparent' : 'white',
            bottom: 0,
            left: 0,
            position: isScrollable ? 'absolute' : 'fixed',
            right: 0,
            top: 0,
            zIndex: 1000,
          }}
        >
          {this.props.children}
        </div>
      </FocusTrap>,
      this.el,
    );
  }
}

export default Modal;
