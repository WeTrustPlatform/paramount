import React from 'react';
import { Modal as RNModal, ModalProps as RNModalProps } from 'react-native';

export interface ModalProps extends RNModalProps {
  /** (Web only) In order to mimic similar behavior to Android's back button to close the modal on mobile web, HistoryModal will use hash or query string to determine whether it is opened or not. @default false */
  useHistory?: boolean;
  /**
   * (Web) Whether should scroll when user initiates scroll (mouse wheel, keyboard down/up)
   * Paramount's body scroll lock may not work in some browsers.
   * You should consider using https://github.com/willmcpo/body-scroll-lock instead
   */
  shouldLockBodyScroll?: boolean;
  children?: React.ReactNode;
}

export const Modal = (props: ModalProps) => <RNModal {...props} />;
