import * as React from 'react';

import ModalBase, { ModalBaseProps } from './ModalBase';

export interface HistoryModalProps extends ModalBaseProps {
  /** (Web) In order to mimic similar behavior to Android's back button to close the modal on mobile web, HistoryModal will use hash or query string to determine whether it is opened or not. @default false */
  useHistory?: boolean;
  /** (Web) Only works when `useHistory` is true. Hash string to append to location */
  hash?: string | null;
  /** (Web) Only works when `useHistory` is true. Same as hash, but using query string. Query string will take precedence over hash @default null */
}

export default ModalBase;
