import * as React from 'react';
import { TouchableWithoutFeedback, View } from 'react-native';

import { Theme, withTheme } from '../../theme';
import { DialogStyles } from '../../theme/style-getters/getDialogStyles';
import Modal from './Modal';

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
  dangerouslySetInlineStyle?: Partial<DialogStyles>;
}

const DialogBase = (props: DialogProps) => {
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
    <Modal visible={isVisible} transparent onRequestClose={onClose}>
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
