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
    hash: '#modal-open',
  };
  public initialHref: string | null = null;

  public state = {
    isVisible: false,
  };

  public componentDidMount = () => {
    this.initialHref = window.location.href;

    /**
     * For back button, if use clicks back button it should be interpreted as a close request.
     */
    window.addEventListener('hashchange', this.handleHashChange, false);
  };

  public componentDidUpdate = (prevProps: HistoryModalProps) => {
    const { visible } = this.props;

    if (
      visible &&
      visible !== prevProps.visible &&
      history &&
      !this.isHistoryActive()
    ) {
      this.activateHistory();
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

    this.setState(() => ({ isVisible: false }));
  };

  public handleRequestClose = () => {
    const { onRequestClose } = this.props;

    if (onRequestClose) {
      onRequestClose();
    }

    history.replaceState(null, '', this.initialHref);
    this.setState(() => ({ isVisible: false }));
  };

  public activateHistory = () => {
    const { hash } = this.props;

    this.setState(() => ({ isVisible: true }));
    if (hash && hash !== null) {
      history.pushState(null, '', this.initialHref + hash);
    }
  };

  public isHistoryActive = () => {
    const { hash } = this.props;

    return hash === window.location.hash.substring(1);
  };

  public render() {
    const { hash, ...modalProps } = this.props;
    const { isVisible } = this.state;

    return (
      <ModalBase
        {...modalProps}
        onRequestClose={this.handleRequestClose}
        visible={isVisible}
      />
    );
  }
}

export default ({ useHistory, ...props }: HistoryModalProps) => {
  if (useHistory) return <HistoryModal {...props} />;

  return <ModalBase {...props} />;
};
