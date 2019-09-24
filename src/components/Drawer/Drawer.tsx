import * as React from 'react';
import { View } from 'react-native';
import { animated, useSpring } from 'react-spring/native.cjs';

import { springDefaultConfig } from '../../constants/Animation';
import { useTheme } from '../../theme';
import { mergeStyles } from '../../utils/mergeStyles';
import { Modal } from '../Modal';
import { Overlay } from '../Overlay';
import { GetDrawerStyles, getDrawerStyles } from './Drawer.styles';

type Position = 'bottom' | 'top' | 'right' | 'left';

const AnimatedView = animated(View);

export interface DrawerProps {
  /**
   * (Web only) When true, upon going back in history/navigation, it will call `onRequestClose`. On Native, it already does that
   * @default false
   */
  useHistory?: boolean;

  /**
   * (Web only) When true, the body of the document will not scroll when dialog is opened
   * @default true
   */
  shouldLockBodyScroll?: boolean;

  /**
   * When true, it will display the drawer
   * @default false
   */
  isVisible?: boolean;

  /**
   * Called when clicking on overlay or pressing Esc
   */
  onRequestClose?: () => void;

  /**
   * Amount to offset from the edge of window.
   * @default 0
   */
  offset?: number;

  /**
   * Amount of % screen or px to take up.
   */
  space?: number | string;

  /**
   * The position to slide from.
   * @default bottom
   */
  position?: Position;

  /** Content of the drawer body */
  children: React.ReactNode;

  /** Callback to get element styles. */
  getStyles?: GetDrawerStyles;
}

export const Drawer = (props: DrawerProps) => {
  const {
    children,
    isVisible = false,
    onRequestClose = () => null,
    position = 'bottom',
    offset = 0,
    space,
    shouldLockBodyScroll = true,
    useHistory = false,
    getStyles,
  } = props;

  const theme = useTheme();

  const { modalContainerStyle, containerStyle, overlayStyle } = mergeStyles(
    getDrawerStyles,
    getStyles,
    theme.components.getDrawerStyles,
  )(props, theme);

  const animation = useSpring({
    [position]: offset,
    config: springDefaultConfig,
    from: { [position]: -600 },
    reset: true,
  });

  return (
    <Modal
      visible={isVisible}
      transparent
      onRequestClose={onRequestClose}
      shouldLockBodyScroll={shouldLockBodyScroll}
      useHistory={useHistory}
    >
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
        <Overlay
          onPress={onRequestClose}
          getStyles={() => ({ overlayStyle })}
        />
      </View>
    </Modal>
  );
};
