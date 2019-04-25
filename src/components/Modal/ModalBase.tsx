import * as React from 'react';
import { Modal, ModalProps } from 'react-native';

export interface ModalBaseProps extends ModalProps {
  /** (Web) Whether should scroll when user initiates non-touch scroll (mouse wheel, keyboard down/up) */
  isBackgroundScrollable?: boolean;
  children?: React.ReactNode;
}

export const ModalBase = (props: ModalBaseProps) => <Modal {...props} />;
