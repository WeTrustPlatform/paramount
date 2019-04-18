import * as React from 'react';
import { Animated, View } from 'react-native';
import { DeepPartial } from 'ts-essentials';

import { useTheme } from '../../theme';
import { mergeStyles, ReplaceReturnType } from '../../utils/mergeStyles';
import { Modal } from '../Modal';
import { Overlay } from '../Overlay';
import {
  DrawerStyles,
  GetDrawerStyles,
  getDrawerStyles,
} from './Drawer.styles';

type Position = 'bottom' | 'top' | 'right' | 'left';

export interface DrawerProps {
  children: React.ReactNode;
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
  getStyles?: ReplaceReturnType<GetDrawerStyles, DeepPartial<DrawerStyles>>;
}

export const Drawer = (props: DrawerProps) => {
  const {
    children,
    isVisible,
    onClose = () => null,
    position = 'bottom',
    offset = 0,
    space,
    getStyles,
  } = props;

  const theme = useTheme();

  const { modalContainerStyle, containerStyle } = mergeStyles(
    getDrawerStyles,
    getStyles,
  )(theme);

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
        <Overlay onPress={onClose} />
      </View>
    </Modal>
  );
};
