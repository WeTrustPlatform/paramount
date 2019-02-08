import * as React from 'react';

import ModalBase, { ModalBaseProps } from './ModalBase';

export interface HistoryModalProps extends ModalBaseProps {
  /** (Web) In order to mimic similar behavior to Android's back button to close the modal on mobile web, HistoryModal will use hash or query string to determine whether it is opened or not. @default false */
  useHistory?: boolean;
}

export default (props: HistoryModalProps) => {
  return <ModalBase {...props} />;
};
