import * as React from 'react';
import { TouchableWithoutFeedback, View, ViewStyle } from 'react-native';

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
  /**
   * Inline styles for components
   */
  dangerouslySetInlineStyle?: {
    modalContainerStyle: ViewStyle;
    overlayStyle: ViewStyle;
    containerStyle: ViewStyle;
    bodyStyle: ViewStyle;
  };
}

const DialogBase = (props: IDialogProps) => {
  const {
    children,
    footer,
    header,
    isVisible,
    onClose,
    theme,
    dangerouslySetInlineStyle,
  } = props;

  const {
    modalContainerStyle,
    overlayStyle,
    containerStyle,
    bodyStyle,
  } = theme.getDialogStyles();

  return (
    <Modal visible={isVisible} transparent onDismiss={onClose}>
      <View
        style={{
          ...modalContainerStyle,
          ...(dangerouslySetInlineStyle &&
            dangerouslySetInlineStyle.modalContainerStyle),
        }}
      >
        <View
          style={{
            ...containerStyle,
            ...(dangerouslySetInlineStyle &&
              dangerouslySetInlineStyle.containerStyle),
          }}
        >
          {header}
          <View
            style={{
              ...bodyStyle,
              ...(dangerouslySetInlineStyle &&
                dangerouslySetInlineStyle.bodyStyle),
            }}
          >
            {children}
          </View>
          {footer}
        </View>
        <TouchableWithoutFeedback onPress={onClose}>
          <View
            style={{
              ...overlayStyle,
              ...(dangerouslySetInlineStyle &&
                dangerouslySetInlineStyle.overlayStyle),
            }}
          />
        </TouchableWithoutFeedback>
      </View>
    </Modal>
  );
};

export const Dialog = withTheme(DialogBase);
export default Dialog;
