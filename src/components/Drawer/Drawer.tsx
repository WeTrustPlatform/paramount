import * as React from 'react';
import { View } from 'react-native';
import { animated, useSpring } from 'react-spring/native.cjs';
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
const AnimatedView = animated(View);

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

  const animation = useSpring({
    [position]: offset,
    from: { [position]: -600 },
    reset: true,
  });

  return (
    <Modal visible={isVisible} transparent onRequestClose={onClose}>
      <View style={modalContainerStyle}>
        {/*
        // @ts-ignore */}
        <AnimatedView
          style={{
            ...containerStyle,
            [position]: animation[position],
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
        </AnimatedView>
        <Overlay onPress={onClose} />
      </View>
    </Modal>
  );
};
