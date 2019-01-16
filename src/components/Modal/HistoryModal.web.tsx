import * as React from 'react';

import { HistoryModalProps } from './HistoryModal';
import ModalBase from './ModalBase';

class HistoryModal extends React.PureComponent<HistoryModalProps> {
  public static defaultProps = {
    hash: '#modal-open',
  };

  public initialHref: string | null = null;

  public componentDidMount = () => {
    this.initialHref = window.location.href;

    /**
     * For back button, if use clicks back button it should be interpreted as a close request.
     */
    window.addEventListener('hashchange', this.handleHashChange, false);
  };

  public componentDidUpdate = (prevProps: HistoryModalProps) => {
    const { visible } = this.props;

    if (visible && visible !== prevProps.visible && !this.isHistoryActive()) {
      this.pushHistory();
    }
  };

  public componentWillUnmount() {
    window.removeEventListener('hashchange', this.handleHashChange, false);
  }

  public handleHashChange = () => {
    const { onRequestClose } = this.props;

    if (onRequestClose) {
      onRequestClose();
    }
  };

  /**
   * Relay the callback and also clean up the hash state
   */
  public handleRequestClose = () => {
    const { onRequestClose } = this.props;

    if (onRequestClose) {
      onRequestClose();
    }

    history.replaceState(null, '', this.initialHref);
  };

  public pushHistory = () => {
    const { hash } = this.props;

    if (hash) {
      history.pushState(null, '', this.initialHref + hash);
    }
  };

  public isHistoryActive = () => {
    const { hash } = this.props;

    return hash === window.location.hash;
  };

  public render() {
    const { hash, ...modalProps } = this.props;

    return (
      <ModalBase {...modalProps} onRequestClose={this.handleRequestClose} />
    );
  }
}

export default ({ useHistory = false, ...props }: HistoryModalProps) => {
  if (useHistory) return <HistoryModal {...props} />;

  return <ModalBase {...props} />;
};
