import * as React from 'react';
import { Modal, ModalProps } from 'react-native';

export interface ModalBaseProps extends ModalProps {
  /**
   * (Web) Whether should scroll when user initiates scroll (mouse wheel, keyboard down/up)
   * Paramount's body scroll lock may not work in some browsers.
   * You should consider using https://github.com/willmcpo/body-scroll-lock instead
   */
  shouldLockBodyScroll?: boolean;
  children?: React.ReactNode;
}

export const ModalBase = (props: ModalBaseProps) => <Modal {...props} />;
