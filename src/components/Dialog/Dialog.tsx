import * as React from 'react';
import { ScrollView, View } from 'react-native';
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
  /** WWhether body can scroll while dialog is opened */
  shouldLockBodyScroll?: boolean;
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
    shouldLockBodyScroll = true,
    isVisible,
    onRequestClose = () => null,
    getStyles,
    useHistory,
  } = props;
  const theme = useTheme();

  const {
    modalContainerStyle,
    containerStyle,
    bodyStyle,
    contentContainerStyle,
    overlayStyle,
  } = mergeStyles(getDialogStyles, getStyles)({}, theme);

  return (
    <Modal
      useHistory={useHistory}
      visible={isVisible}
      transparent
      animationType="fade"
      onRequestClose={onRequestClose}
      shouldLockBodyScroll={shouldLockBodyScroll}
    >
      <View style={modalContainerStyle}>
        <View style={containerStyle}>
          {header}
          <ScrollView
            contentContainerStyle={contentContainerStyle}
            style={bodyStyle}
          >
            {children}
          </ScrollView>
          {footer}
        </View>
        <Overlay
          getStyles={() => ({ overlayStyle })}
          onPress={onRequestClose}
        />
      </View>
    </Modal>
  );
};
