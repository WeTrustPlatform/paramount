import * as React from 'react';

import { HistoryModalProps } from './HistoryModal';
import { ModalBase } from './ModalBase';

let modalId = 0;

/**
 * There are 3 ways a user may close the modal on the browser
 * 1. Back button press
 * 2. Escape key
 * 3. Manually closed from within the modal (e.g. Close button)
 * Each of them should properly restore the page user was at
 */
class HistoryModalBase extends React.PureComponent<HistoryModalProps> {
  public modalId = ++modalId;

  public componentDidUpdate = (previousProps: HistoryModalProps) => {
    const { visible } = this.props;

    if (previousProps.visible !== visible) {
      if (visible) {
        this.updateBrowserHistory();
      } else {
        this.handleManuallyClosed();
      }
    }
  };

  public componentWillUnmount = () => {
    this.clearBrowserState();
  };

  public updateBrowserHistory = () => {
    // Ensure history state does not already contain our modal name to avoid double-pushing
    if (
      !history.state ||
      !history.state.modal ||
      !history.state.modal[this.modalId]
    ) {
      // Push to history so that the page is not lost on browser back button press
      history.pushState(
        {
          ...history.state,
          modal: {
            ...(history.state && history.state.modal),
            [this.modalId]: true,
          },
        },
        '',
      );
    }

    // Listen for back button presses
    window.addEventListener('popstate', this.handlePopstate, false);
  };

  /** Back button press */
  public handlePopstate = (event: PopStateEvent) => {
    const { visible, onRequestClose } = this.props;
    // Close the modal if the history state no longer contains our modal name
    if (
      (!event.state ||
        !event.state.modal ||
        !event.state.modal[this.modalId]) &&
      onRequestClose
    ) {
      this.clearBrowserState();
      onRequestClose();
    }

    // When the browser back button is pressed and uppy is now the latest entry in the history but the modal is closed, fix the history by removing the uppy history entry
    // This occurs when another entry is added into the history state while the modal is open, and then the modal gets manually closed
    // Solves PR #575 (https://github.com/transloadit/uppy/pull/575)
    if (
      !visible &&
      event.state &&
      event.state.modal &&
      event.state.modal[this.modalId]
    ) {
      history.go(-1);
    }
  };

  /** Escape key */
  public handleEscapeKey = () => {
    const { onRequestClose } = this.props;

    if (
      (history.state ||
        history.state.modal ||
        history.state.modal[this.modalId]) &&
      onRequestClose
    ) {
      /** Clear state, so that when a falsy `visible` prop gets passed, it can check whether the state still exists in `handleManuallyClosed` */
      this.clearBrowserState();
      onRequestClose();
      history.go(-1);
    }
  };

  /** Manual */
  public handleManuallyClosed = () => {
    if (
      history.state &&
      history.state.modal &&
      history.state.modal[this.modalId]
    ) {
      this.clearBrowserState();
      history.go(-1);
    }
  };

  public clearBrowserState = () => {
    history.replaceState(
      {
        ...history.state,
        modal: {
          ...(history.state && history.state.modal),
          [this.modalId]: false,
        },
      },
      '',
    );

    window.removeEventListener('popstate', this.handlePopstate, false);
  };

  public render() {
    const { ...modalProps } = this.props;

    return <ModalBase {...modalProps} onRequestClose={this.handleEscapeKey} />;
  }
}

export const HistoryModal = ({
  useHistory = false,
  ...props
}: HistoryModalProps) => {
  if (useHistory) return <HistoryModalBase {...props} />;

  return <ModalBase {...props} />;
};
