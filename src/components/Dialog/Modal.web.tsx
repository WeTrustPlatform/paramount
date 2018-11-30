// Temporary usage until it is integrated
// https://github.com/necolas/react-native-web/issues/1020
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ModalProps } from 'react-native';

class Modal extends React.Component<ModalProps> {
  public el: HTMLDivElement;
  public modalRoot: HTMLBodyElement;

  constructor(props: ModalProps) {
    super(props);
    this.el = document.createElement('div');
    this.modalRoot = document.getElementsByTagName('body')[0];
  }

  public componentDidMount() {
    this.modalRoot.appendChild(this.el);
  }

  public componentWillUnmount() {
    this.modalRoot.removeChild(this.el);
  }

  public render() {
    const { transparent, visible } = this.props;

    if (!visible) return null;

    return ReactDOM.createPortal(
      <div
        style={{
          backgroundColor: transparent ? 'transparent' : 'white',
          bottom: 0,
          left: 0,
          position: 'fixed',
          right: 0,
          top: 0,
        }}
      >
        {this.props.children}
      </div>,
      this.el,
    );
  }
}

export default Modal;
