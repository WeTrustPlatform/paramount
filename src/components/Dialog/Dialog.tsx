import * as React from 'react';
import { View } from 'react-native';
import { DeepPartial } from 'ts-essentials';

import { useTheme } from '../../theme';
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
  /** Prop to be passed to Modal */
  useHistory?: boolean;
  /** To show dialog or not */
  isVisible?: boolean;
  /** Called when clicking on overlay or pressing Esc, or using back button (requires useHistory to be true) */
  onRequestClose?: () => void;
  /** In ConfirmDialog, you can pass null to render nothing. If it is undefined, it will use default value */
  header?: React.ReactNode;
  /** In ConfirmDialog, you can pass null to render nothing. If it is undefined, it will use default value */
  footer?: React.ReactNode;
  /**
   * Inline styles for components
   */
  getStyles?: ReplaceReturnType<GetDialogStyles, DeepPartial<DialogStyles>>;
}

export const Dialog = (props: DialogProps) => {
  const {
    children,
    footer,
    header,
    isVisible,
    onRequestClose = () => null,
    getStyles,
    useHistory,
  } = props;
  const theme = useTheme();

  const { modalContainerStyle, containerStyle, bodyStyle } = mergeStyles(
    getDialogStyles,
    getStyles,
  )(theme);

  return (
    <Modal
      useHistory={useHistory}
      visible={isVisible}
      transparent
      onRequestClose={onRequestClose}
    >
      <View style={modalContainerStyle}>
        <View style={containerStyle}>
          {header}
          <View style={bodyStyle}>{children}</View>
          {footer}
        </View>
        <Overlay onPress={onRequestClose} />
      </View>
    </Modal>
  );
};
