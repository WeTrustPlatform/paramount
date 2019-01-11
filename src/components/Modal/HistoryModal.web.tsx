import {
  createBrowserHistory,
  History,
  Location,
  UnregisterCallback,
} from 'history';
import * as React from 'react';

import { HistoryModalProps } from './HistoryModal';
import ModalBase from './ModalBase';

export interface HistoryModalState {
  isVisible: boolean;
}

class HistoryModal extends React.PureComponent<
  HistoryModalProps,
  HistoryModalState
> {
  public static defaultProps = {
    hash: 'mo',
    useHistory: false,
  };

  public unlisten: UnregisterCallback | null = null;
  public history: History | null = null;
  public state = {
    isVisible: false,
  };

  public componentDidMount = () => {
    const { onRequestClose, useHistory } = this.props;

    if (!useHistory) return;

    this.history = createBrowserHistory();

    /**
     * For back button, if use clicks back button it should be interpreted as a close request
     */
    this.unlisten = this.history.listen(location => {
      if (!this.isHistoryActive(location)) {
        this.setState(() => ({ isVisible: false }));
        if (onRequestClose) {
          onRequestClose();
        }
      }
    });
  };

  public componentDidUpdate = (prevProps: HistoryModalProps) => {
    const { visible, useHistory } = this.props;

    if (!useHistory) return;

    if (
      visible &&
      visible !== prevProps.visible &&
      this.history &&
      !this.isHistoryActive(this.history.location)
    ) {
      this.activateHistory();
    }
  };

  public componentWillUnmount() {
    if (this.unlisten) {
      this.unlisten();
    }
  }

  public handleRequestClose = () => {
    const { onRequestClose } = this.props;

    if (onRequestClose) {
      onRequestClose();
    }

    if (this.history) {
      this.history.replace({ hash: '' });
    }
  };

  public activateHistory = () => {
    const { hash, qs } = this.props;
    if (!this.history) return;

    if (qs && qs !== null) {
      this.history.push({ search: qs });
    } else if (hash && hash !== null) {
      this.history.push({ hash });
    }

    this.setState(() => ({ isVisible: true }));
  };

  public isHistoryActive = (location: Location) => {
    const { hash, qs } = this.props;

    if (qs && qs !== null) {
      return location.search.includes(qs);
    }

    return hash === location.hash.substring(1);
  };

  public render() {
    const {
      hash,
      qs,
      useHistory,
      visible,
      onRequestClose,
      ...modalProps
    } = this.props;
    const { isVisible } = this.state;

    return (
      <ModalBase
        {...modalProps}
        // If Modal uses history, use local state and handlers, otherwise forward modal props
        onRequestClose={useHistory ? this.handleRequestClose : onRequestClose}
        visible={useHistory ? isVisible : visible}
      />
    );
  }
}

export default HistoryModal;
