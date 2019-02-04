import * as React from 'react';
import { View } from 'react-native';
import { DeepPartial } from 'ts-essentials';

import { Theme, withTheme } from '../../theme';
import { mergeStyles, ReplaceReturnType } from '../../utils/mergeStyles';
import { Modal } from '../Modal';
import { Overlay } from '../Overlay';
import {
  DialogStyles,
  GetDialogStyles,
  getDialogStyles,
} from './Dialog.styles';

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
  getStyles?: ReplaceReturnType<GetDialogStyles, DeepPartial<DialogStyles>>;
}

const DialogBase = (props: DialogProps) => {
  const {
    children,
    footer,
    header,
    isVisible,
    onClose = () => null,
    theme,
    getStyles,
  } = props;

  const { modalContainerStyle, containerStyle, bodyStyle } = mergeStyles(
    getDialogStyles,
    getStyles,
  )(theme);

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
