import * as React from 'react';
import { TouchableWithoutFeedback, View } from 'react-native';

import { ITheme, withTheme } from '../../theme';
import Modal from './Modal';

// TODO: Import from react-native when react-native-web implementation is ready

export interface IDialogProps {
  children: React.ReactNode;
  theme: ITheme;
  /** To show dialog or not */
  isVisible?: boolean;
  /** Called when clicking on overlay or pressing Esc */
  onClose?: () => void;
  /** In ConfirmDialog, you can pass null to render nothing. If it is undefined, it will use default value */
  header?: React.ReactNode;
  /** In ConfirmDialog, you can pass null to render nothing. If it is undefined, it will use default value */
  footer?: React.ReactNode;
}

const DialogWithoutTheme = (props: IDialogProps) => {
  const { children, footer, header, isVisible, onClose, theme } = props;

  if (!isVisible) return null;

  const {
    modalContainerStyle,
    overlayStyle,
    containerStyle,
    bodyStyle,
  } = theme.getDialogStyles();

  return (
    <Modal visible={isVisible} transparent onDismiss={onClose}>
      <View style={modalContainerStyle}>
        <View style={containerStyle}>
          {header}
          <View style={bodyStyle}>{children}</View>
          {footer}
        </View>
        <TouchableWithoutFeedback onPress={onClose}>
          <View style={overlayStyle} />
        </TouchableWithoutFeedback>
      </View>
    </Modal>
  );
};

export const Dialog = withTheme(DialogWithoutTheme);
export default Dialog;
