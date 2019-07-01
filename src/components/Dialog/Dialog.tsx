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
  /**
   * (Web only) When true, upon going back in history/navigation, it will call `onRequestClose`. On Native, it already does that.
   * @default false
   */
  useHistory?: boolean;

  /**
   * When true, it will display the dialog
   * @default false
   */
  isVisible?: boolean;

  /**
   * (Web only) When true, the body of the document will not scroll when dialog is opened
   * @default true
   */
  shouldLockBodyScroll?: boolean;

  /** Called when clicking on overlay or pressing Esc, or using back button (requires useHistory to be true) */
  onRequestClose?: () => void;

  /** Content of the dialog body */
  children?: React.ReactNode;

  /** Component to appear at the top of the dialog */
  header?: React.ReactNode;

  /** Component to appear at the bottom of the dialog */
  footer?: React.ReactNode;

  /** Callback to get element styles. */
  getStyles?: ReplaceReturnType<GetDialogStyles, DeepPartial<DialogStyles>>;
}

export const Dialog = (props: DialogProps) => {
  const {
    children,
    footer,
    header,
    shouldLockBodyScroll = true,
    isVisible = false,
    onRequestClose = () => null,
    getStyles,
    useHistory = false,
  } = props;
  const theme = useTheme();

  const {
    modalContainerStyle,
    containerStyle,
    bodyStyle,
    contentContainerStyle,
    overlayStyle,
  } = mergeStyles(getDialogStyles, getStyles, theme.components.getDialogStyles)(
    props,
    theme,
  );

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
