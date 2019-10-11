import dlv from 'dlv';
import React from 'react';
import { ScrollView, ScrollViewProps, View, ViewProps } from 'react-native';

import { useTheme } from '../../theme';
import { getOverrides, WithOverrides } from '../../utils/Overrides';
import { Modal } from '../Modal';
import { Overlay, OverlayProps } from '../Overlay';

interface DialogBaseProps {
  /**
   * (Web only) When true, upon going back in history/navigation, it will call `onRequestClose`. On Native, it already does that.
   * @default false
   */
  useHistory?: boolean;

  /**
   * When true, it will display the dialog
   * @default false
   */
  isVisible?: boolean;

  /**
   * (Web only) When true, the body of the document will not scroll when dialog is opened
   * @default true
   */
  shouldLockBodyScroll?: boolean;

  /** Called when clicking on overlay or pressing Esc, or using back button (requires useHistory to be true) */
  onRequestClose?: () => void;

  /** Content of the dialog body */
  children?: React.ReactNode;
}

export interface DialogOverrides {
  Root: RootProps;
  Content: ContentProps;
  Body: BodyProps;
  Overlay: OverlayProps;
  Header: HeaderProps;
  Footer: FooterProps;
}

export interface DialogProps
  extends WithOverrides<DialogBaseProps, DialogOverrides> {}

export const Dialog = (props: DialogProps) => {
  const {
    children,
    shouldLockBodyScroll = true,
    isVisible = false,
    onRequestClose = () => null,
    useHistory = false,
    overrides = {},
  } = props;
  const theme = useTheme();

  const [Root, rootProps] = getOverrides(
    StyledRoot,
    props,
    {},
    dlv(theme, 'overrides.Dialog.Root'),
    overrides.Root,
  );
  const [Content, contentProps] = getOverrides(
    StyledContent,
    props,
    {},
    dlv(theme, 'overrides.Dialog.Content'),
    overrides.Content,
  );
  const [Body, bodyProps] = getOverrides(
    StyledBody,
    props,
    {},
    dlv(theme, 'overrides.Dialog.Body'),
    overrides.Body,
  );
  const [OverlayR, overlayProps] = getOverrides(
    Overlay,
    props,
    { onPress: onRequestClose },
    dlv(theme, 'overrides.Dialog.Overlay'),
    overrides.Overlay,
  );
  const [Header, headerProps] = getOverrides(
    StyledHeader,
    props,
    { onRequestClose },
    dlv(theme, 'overrides.Dialog.Header'),
    overrides.Header,
  );
  const [Footer, footerProps] = getOverrides(
    StyledFooter,
    props,
    { onRequestClose },
    dlv(theme, 'overrides.Dialog.Footer'),
    overrides.Footer,
  );

  return (
    <Modal
      useHistory={useHistory}
      visible={isVisible}
      transparent
      animationType="fade"
      onRequestClose={onRequestClose}
      shouldLockBodyScroll={shouldLockBodyScroll}
    >
      <Root {...rootProps}>
        <Content {...contentProps}>
          <Header {...headerProps} />
          <Body {...bodyProps}>{children}</Body>
          <Footer {...footerProps} />
        </Content>
        <OverlayR {...overlayProps} />
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

interface ContentProps extends ViewProps, PropsWithChildren {}

const StyledContent = (props: ContentProps) => {
  const { children, style, ...viewProps } = props;
  const theme = useTheme();

  return (
    <View
      style={[
        {
          backgroundColor: 'white',
          borderRadius: theme.controlBorderRadius.medium,
          elevation: 1,

          /**
           * On iOs the navigation bar and bottom bar take roughly 10% each, maxHeight offsets
           * that amount so that it does not overflow the window
           */
          maxHeight: '80%',
          maxWidth: '80%',
          minWidth: 288,
          position: 'relative',
          zIndex: 1,
        },
        style,
      ]}
      {...viewProps}
    >
      {children}
    </View>
  );
};

interface FooterProps extends PropsWithChildren {
  onRequestClose?: () => void;
}

const StyledFooter = (props: FooterProps) => {
  return <></>;
};

interface HeaderProps extends PropsWithChildren {
  onRequestClose?: () => void;
}

const StyledHeader = (props: HeaderProps) => {
  return <></>;
};

interface BodyProps extends ScrollViewProps, PropsWithChildren {}

const StyledBody = (props: BodyProps) => {
  const { children, style, ...scrollViewProps } = props;

  return (
    <ScrollView
      style={[
        {
          maxHeight: 400,
        },
        style,
      ]}
      {...scrollViewProps}
    >
      {children}
    </ScrollView>
  );
};
