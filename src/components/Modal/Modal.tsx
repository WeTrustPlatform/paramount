import * as React from 'react';
import { Modal as RNModal, ModalProps as RNModalProps } from 'react-native';

export interface ModalProps extends RNModalProps {
  /** For Web Desktop, whether should scroll when user initiates non-touch scroll (mouse, keyboard) */
  isBackgroundScrollable?: boolean;
}

const Modal = (props: ModalProps) => <RNModal {...props} />;

export default Modal;
