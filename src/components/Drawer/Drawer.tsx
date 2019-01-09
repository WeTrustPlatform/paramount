import * as React from 'react';
import { Animated, TouchableWithoutFeedback, View } from 'react-native';

import { Theme, withTheme } from '../../theme';
import { DrawerStyles } from '../../theme/style-getters/getDrawerStyles';
import { Modal } from '../Modal';

type Position = 'bottom' | 'top' | 'right' | 'left';

export interface DrawerProps {
  children: React.ReactNode;
  theme: Theme;
  /** To show dialog or not */
  isVisible?: boolean;
  /** Called when clicking on overlay or pressing Esc */
  onClose?: () => void;
  /** Amount to offset from the edge of window @default 0 */
  offset?: number;
  /** Amount of % screen to take up. */
  space?: number | string;
  /** Which side to draw from @default bottom */
  position?: Position;
  /**
   * Inline styles for components
   */
  dangerouslySetInlineStyle?: Partial<DrawerStyles>;
}

const DrawerBase = (props: DrawerProps) => {
  const {
    children,
    isVisible,
    onClose,
    position = 'bottom',
    offset = 0,
    space,
    theme,
    dangerouslySetInlineStyle,
  } = props;

  const {
    modalContainerStyle,
    overlayStyle,
    containerStyle,
  } = theme.getDrawerStyles();

  if (!isVisible) return null;

  const value = new Animated.Value(-500);

  Animated.spring(value, {
    bounciness: 0,
    speed: 70,
    toValue: offset,
  }).start();

  return (
    <Modal visible={isVisible} transparent onRequestClose={onClose}>
      <View
        style={{
          ...modalContainerStyle,
          ...(dangerouslySetInlineStyle &&
            dangerouslySetInlineStyle.modalContainerStyle),
        }}
      >
        <Animated.View
          style={{
            ...containerStyle,
            ...(dangerouslySetInlineStyle &&
              dangerouslySetInlineStyle.containerStyle),
            [position]: value,
            ...((position === 'left' || position === 'right') &&
              space && {
                height: '100%',
                width: space,
              }),
            ...((position === 'bottom' || position === 'top') &&
              space && {
                height: space,
                width: '100%',
              }),
          }}
        >
          {children}
        </Animated.View>
        <TouchableWithoutFeedback onPress={onClose}>
          <View
            style={{
              ...overlayStyle,
              ...(dangerouslySetInlineStyle &&
                dangerouslySetInlineStyle.overlayStyle),
            }}
          />
        </TouchableWithoutFeedback>
      </View>
    </Modal>
  );
};

export const Drawer = withTheme(DrawerBase);
export default Drawer;
