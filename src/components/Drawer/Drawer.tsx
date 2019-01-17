import * as React from 'react';
import { Animated, TouchableWithoutFeedback, View } from 'react-native';

import { Theme, withTheme } from '../../theme';
import { Modal } from '../Modal';
import { GetDrawerStyles, getDrawerStyles } from './Drawer.styles';

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
  getStyles?: GetDrawerStyles;
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
    getStyles = getDrawerStyles,
  } = props;

  const { modalContainerStyle, overlayStyle, containerStyle } = getStyles(
    theme,
  );

  if (!isVisible) return null;

  const value = new Animated.Value(-500);

  Animated.spring(value, {
    bounciness: 0,
    speed: 70,
    toValue: offset,
  }).start();

  return (
    <Modal visible transparent onRequestClose={onClose}>
      <View style={modalContainerStyle}>
        <Animated.View
          style={{
            ...containerStyle,
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
          <View style={overlayStyle} />
        </TouchableWithoutFeedback>
      </View>
    </Modal>
  );
};

export const Drawer = withTheme(DrawerBase);
export default Drawer;
