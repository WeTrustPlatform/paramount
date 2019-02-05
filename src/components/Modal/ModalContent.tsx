import * as React from 'react';
import { TouchableOpacity, View } from 'react-native';

import { Icon } from '../../icons';
import { Theme, withTheme } from '../../theme';

export type ModalContentShape = 'circle' | 'square';

export interface ModalContentProps {
  theme: Theme;
  onClose?: () => void;
  children: React.ReactNode;
}

const ModalContentBase = (props: ModalContentProps) => {
  const { children, onClose, theme } = props;

  return (
    <View
      style={{
        height: '100%',
        marginLeft: 'auto',
        marginRight: 'auto',
        maxWidth: 960,
      }}
    >
      <TouchableOpacity
        style={{ width: 56 }}
        onPress={event => {
          event.preventDefault();
          if (onClose) onClose();
        }}
      >
        <View style={{ paddingHorizontal: 8 }}>
          <Icon color={theme.colors.text.default} size={40} name="x" />
        </View>
      </TouchableOpacity>
      {children}
    </View>
  );
};

export const ModalContent = withTheme(ModalContentBase);
export default ModalContent;
