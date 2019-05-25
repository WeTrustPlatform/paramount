import * as React from 'react';
import { View } from 'react-native';

export interface ModalContentProps {
  children: React.ReactNode;
}

export const ModalContent = (props: ModalContentProps) => {
  const { children } = props;

  return (
    <View
      style={{
        height: '100%',
        marginLeft: 'auto',
        marginRight: 'auto',
        maxWidth: 960,
        width: '100%',
      }}
    >
      {children}
    </View>
  );
};
