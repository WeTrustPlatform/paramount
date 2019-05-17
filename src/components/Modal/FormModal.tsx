import * as React from 'react';
import { TouchableOpacity, View } from 'react-native';

import { Text } from '../Typography';
import { CloseableModal, CloseableModalProps } from './CloseableModal';

export interface FormModalProps extends CloseableModalProps {
  onClear: () => void;
  clearText?: string;
}

export const FormModal = (props: FormModalProps) => {
  const {
    children,
    onClose,
    onClear,
    clearText = 'Clear',
    ...closeableModalProps
  } = props;

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
            <Text weight="bold">{clearText}</Text>
          </View>
        </TouchableOpacity>
      }
      {...closeableModalProps}
    >
      {children}
    </CloseableModal>
  );
};
