import * as React from 'react';
import { TouchableWithoutFeedback, View } from 'react-native';

import { ITheme, withTheme } from '../../theme';
import Modal from './Modal';

// TODO: Import from react-native when react-native-web implementation is ready

export interface IDialogProps {
  isVisible?: boolean;
  children: React.ReactNode;
  theme: ITheme;
  /** Called when clicking on overlay or pressing Esc */
  onClose?: () => void;
  header?: React.ReactNode;
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
    <Modal visible={isVisible} transparent>
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
