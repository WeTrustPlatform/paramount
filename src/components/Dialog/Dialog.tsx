import * as React from 'react';
import { View } from 'react-native';

import { Theme, withTheme } from '../../theme';
import { Modal } from '../Modal';
import { Overlay } from '../Overlay';
import { GetDialogStyles, getDialogStyles } from './Dialog.styles';

// TODO: Import from react-native when react-native-web implementation is ready

export interface DialogProps {
  children: React.ReactNode;
  theme: Theme;
  /** To show dialog or not */
  isVisible?: boolean;
  /** Called when clicking on overlay or pressing Esc */
  onClose?: () => void;
  /** In ConfirmDialog, you can pass null to render nothing. If it is undefined, it will use default value */
  header?: React.ReactNode;
  /** In ConfirmDialog, you can pass null to render nothing. If it is undefined, it will use default value */
  footer?: React.ReactNode;
  /**
   * Inline styles for components
   */
  getStyles?: GetDialogStyles;
}

const DialogBase = (props: DialogProps) => {
  const {
    children,
    footer,
    header,
    isVisible,
    onClose = () => null,
    theme,
    getStyles = getDialogStyles,
  } = props;

  const { modalContainerStyle, containerStyle, bodyStyle } = getStyles(theme);

  return (
    <Modal visible={isVisible} transparent onRequestClose={onClose}>
      <View style={modalContainerStyle}>
        <View style={containerStyle}>
          {header}
          <View style={bodyStyle}>{children}</View>
          {footer}
        </View>
        <Overlay onPress={onClose} />
      </View>
    </Modal>
  );
};

export const Dialog = withTheme(DialogBase);
export default Dialog;
