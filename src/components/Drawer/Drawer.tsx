import dlv from 'dlv';
import * as React from 'react';
import { View, ViewProps } from 'react-native';
import { animated, useSpring } from 'react-spring/native.cjs';

import { springDefaultConfig } from '../../constants/Animation';
import { useTheme } from '../../theme';
import { getOverrides, WithOverrides } from '../../utils/overrides';
import { Modal } from '../Modal';
import { Overlay, OverlayProps } from '../Overlay';

type Position = 'bottom' | 'top' | 'right' | 'left';

const AnimatedView = animated(View);

interface DrawerBaseProps {
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
}

export interface DrawerOverrides {
  Root: RootProps;
  Content: ContentProps;
  Overlay: OverlayProps;
}

export interface DrawerProps
  extends WithOverrides<DrawerBaseProps, DrawerOverrides> {}

const defaultProps = {
  shouldLockBodyScroll: true,
  useHistory: false,
  isVisible: false,
  position: 'bottom' as const,
  offset: 0,
};

export const Drawer = (props: DrawerProps) => {
  const {
    isVisible = defaultProps.isVisible,
    position = defaultProps.position,
    offset = defaultProps.offset,
    shouldLockBodyScroll = defaultProps.shouldLockBodyScroll,
    useHistory = defaultProps.useHistory,
    children,
    onRequestClose = () => null,
    space,
    overrides = {},
  } = props;
  const theme = useTheme();

  const [Root, rootProps] = getOverrides(
    StyledRoot,
    props,
    dlv(theme, 'overrides.Drawer.Root'),
    overrides.Root,
  );
  const [Content, contentProps] = getOverrides(
    StyledContent,
    props,
    dlv(theme, 'overrides.Drawer.Content'),
    overrides.Content,
  );
  const [OverlayR, overlayProps] = getOverrides(
    Overlay,
    props,
    dlv(theme, 'overrides.Drawer.Overlay'),
    overrides.Overlay,
  );

  return (
    <Modal
      visible={isVisible}
      transparent
      onRequestClose={onRequestClose}
      shouldLockBodyScroll={shouldLockBodyScroll}
      useHistory={useHistory}
    >
      <Root {...rootProps}>
        <Content
          position={position}
          offset={offset}
          space={space}
          {...contentProps}
        >
          {children}
        </Content>
        <OverlayR onPress={onRequestClose} {...overlayProps} />
      </Root>
    </Modal>
  );
};

interface PropsWithChildren {
  children?: React.ReactNode;
}

interface RootProps extends ViewProps, PropsWithChildren {}

const StyledRoot = (props: RootProps) => {
  const { children, style, ...viewProps } = props;

  return (
    <View
      style={[
        {
          alignItems: 'center',
          display: 'flex',
          height: '100%',
          justifyContent: 'center',
          width: '100%',
        },
        style,
      ]}
      {...viewProps}
    >
      {children}
    </View>
  );
};

interface ContentProps extends ViewProps, PropsWithChildren {
  offset?: number;
  space?: number | string;
  position?: Position;
}

const StyledContent = (props: ContentProps) => {
  const {
    position = defaultProps.position,
    offset = defaultProps.offset,
    children,
    space,
    style,
    ...viewProps
  } = props;

  const animation = useSpring({
    [position]: offset,
    config: springDefaultConfig,
    from: { [position]: -600 },
    reset: true,
  });

  return (
    // @ts-ignore
    <AnimatedView
      style={[
        {
          position: 'absolute',
          width: '100%',
          zIndex: 1,
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
        },
        style,
      ]}
      {...viewProps}
    >
      {children}
    </AnimatedView>
  );
};
