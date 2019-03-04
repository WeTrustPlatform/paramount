import * as React from 'react';
import { TouchableOpacity, View } from 'react-native';

import { Strong } from '../Typography';
import CloseableModal, { CloseableModalProps } from './CloseableModal';

export interface FormModalProps extends CloseableModalProps {
  onClear: () => void;
}

const FormModalBase = (props: FormModalProps) => {
  const { children, onClose, onClear, ...closeableModalProps } = props;

  return (
    <CloseableModal
      onClose={onClose}
      rightSide={
        <TouchableOpacity
          onPress={event => {
            event.preventDefault();
            onClear();
          }}
        >
          <View
            style={{
              alignItems: 'center',
              display: 'flex',
              height: '100%',
              justifyContent: 'center',
              paddingHorizontal: 16,
            }}
          >
            <Strong>Clear</Strong>
          </View>
        </TouchableOpacity>
      }
      {...closeableModalProps}
    >
      {children}
    </CloseableModal>
  );
};

export const FormModal = FormModalBase;

export default FormModal;
