import * as React from 'react';
import { View } from 'react-native';

export interface ModalContentProps {
  children: React.ReactNode;
}

const ModalContentBase = (props: ModalContentProps) => {
  const { children } = props;

  return (
    <View
      style={{
        height: '100%',
        marginLeft: 'auto',
        marginRight: 'auto',
        maxWidth: 960,
      }}
    >
      {children}
    </View>
  );
};

export const ModalContent = ModalContentBase;

export default ModalContent;
