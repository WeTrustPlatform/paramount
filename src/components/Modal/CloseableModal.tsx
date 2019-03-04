import * as React from 'react';
import { TouchableOpacity, View } from 'react-native';

import { Modal, ModalProps } from '.';
import { Icon } from '../../icons';
import { ThemeContext } from '../../theme';
import { Box } from '../Layout';
import ModalContent from './ModalContent';

export interface CloseableModalProps extends ModalProps {
  onClose: () => void;
  children: React.ReactNode;
  rightSide?: React.ReactNode;
}

const CloseableModalBase = (props: CloseableModalProps) => {
  const { children, rightSide, onClose, ...modalProps } = props;

  const theme = React.useContext(ThemeContext);

  return (
    <Modal {...modalProps}>
      <ModalContent>
        <Box flexDirection="row" justifyContent="space-between">
          <TouchableOpacity
            style={{ width: 56, height: 60, justifyContent: 'center' }}
            onPress={event => {
              event.preventDefault();
              onClose();
            }}
          >
            <View style={{ paddingHorizontal: 8 }}>
              <Icon color={theme.colors.text.default} size={40} name="x" />
            </View>
          </TouchableOpacity>
          {rightSide}
        </Box>
        {children}
      </ModalContent>
    </Modal>
  );
};

export const CloseableModal = CloseableModalBase;

export default CloseableModal;
