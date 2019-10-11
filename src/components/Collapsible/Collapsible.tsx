import dlv from 'dlv';
import React from 'react';
import {
  TouchableOpacity,
  TouchableOpacityProps,
  View,
  ViewProps,
} from 'react-native';

import { useTheme } from '../../theme';
import { getOverrides, getStyle, WithOverrides } from '../../utils/Overrides';
import { OptionalString } from '../../utils/types';
import { Icon } from '../Icon';
import { Text, TextProps } from '../Typography';

interface CollapsibleBaseProps {
  /** Title of the collapsible */
  title?: OptionalString;

  /** Content revealed when collapsible is opened */
  children?: React.ReactNode;

  /**
   * Set whether it is opened initially, for uncontrolled usage.
   * @default false
   */
  initialIsOpen?: boolean;

  /**
   * When true, content of Collapsible is revealed
   * @default false
   */
  isOpen?: boolean;

  /** Called when header is pressed to open collapsible */
  onOpen?: () => void;

  /** Called when header is pressed to close collapsible */
  onClose?: () => void;

  /** Used to locate this view in end-to-end tests. */
  testID?: string;
}

export interface CollapsibleOverrides {
  Touchable: TouchableProps;
  Title: TitleProps;
  IconOpen: IconProps;
  IconClose: IconProps;
  Content: ContentProps;
}

export interface CollapsibleProps
  extends WithOverrides<CollapsibleBaseProps, CollapsibleOverrides> {}

export const Collapsible = (props: CollapsibleProps) => {
  const {
    title,
    children,
    initialIsOpen = false,
    isOpen,
    testID,
    onOpen = () => {
      return;
    },
    onClose = () => {
      return;
    },
    overrides = {},
  } = props;
  const theme = useTheme();
  const [isOpened, setIsOpened] = React.useState(initialIsOpen);

  const isControlledUsage = typeof isOpen === 'boolean';
  const isFinalOpened = isControlledUsage ? isOpen : isOpened;

  const handlePress = React.useCallback(() => {
    if (isControlledUsage) {
      if (isOpen) {
        onClose();
      } else {
        onOpen();
      }
    } else {
      if (isOpened) {
        setIsOpened(false);
        onClose();
      } else {
        setIsOpened(true);
        onOpen();
      }
    }
  }, [isOpened, setIsOpened, isOpen, onClose, isControlledUsage]);

  const [Touchable, touchableProps] = getOverrides(
    StyledTouchable,
    props,
    { testID, onPress: handlePress },
    dlv(theme, 'overrides.Collapsible.Touchable'),
    overrides.Touchable,
  );

  const [Title, titleProps] = getOverrides(
    StyledTitle,
    props,
    { title },
    dlv(theme, 'overrides.Collapsible.Title'),
    overrides.Title,
  );
  const [Content, contentProps] = getOverrides(
    StyledContent,
    props,
    { isOpened: !!isFinalOpened },
    dlv(theme, 'overrides.Collapsible.Content'),
    overrides.Content,
  );
  const [IconOpen, iconOpenProps] = getOverrides(
    StyledIconOpen,
    props,
    {},
    dlv(theme, 'overrides.Collapsible.IconOpen'),
    overrides.IconOpen,
  );
  const [IconClose, iconCloseProps] = getOverrides(
    StyledIconClose,
    props,
    {},
    dlv(theme, 'overrides.Collapsible.IconClose'),
    overrides.IconClose,
  );

  return (
    <>
      <Touchable {...touchableProps}>
        <Title {...titleProps} />
        {isFinalOpened ? (
          <IconClose {...iconCloseProps} />
        ) : (
          <IconOpen {...iconOpenProps} />
        )}
      </Touchable>
      <Content {...contentProps}>{children}</Content>
    </>
  );
};

interface TouchableProps extends TouchableOpacityProps {
  children?: React.ReactNode;
}

const StyledTouchable = (props: TouchableProps) => {
  const { style, children, ...touchableProps } = props;

  return (
    <TouchableOpacity
      style={[
        {
          alignItems: 'center',
          display: 'flex',
          flexDirection: 'row',
        },
        style,
      ]}
      {...touchableProps}
    >
      {children}
    </TouchableOpacity>
  );
};

interface TitleProps extends TextProps {
  title?: OptionalString;
}

const StyledTitle = (props: TitleProps) => {
  const { title, style, ...textProps } = props;

  if (!title) return null;

  return (
    <Text size="large" style={[{}, getStyle(props, style)]} {...textProps}>
      {title}
    </Text>
  );
};

interface ContentProps extends ViewProps {
  children?: React.ReactNode;
  isOpened: boolean;
}

const StyledContent = (props: ContentProps) => {
  const { children, style, isOpened, ...viewProps } = props;

  return (
    <View style={[{ paddingLeft: 4 }, style]} {...viewProps}>
      {isOpened && children}
    </View>
  );
};

interface StyledIconProps {
  showOpen?: boolean;
}

const StyledIcon = (props: StyledIconProps) => {
  const { showOpen } = props;
  const theme = useTheme();

  return (
    <View style={{ paddingLeft: 4 }}>
      <Icon
        size="large"
        name={showOpen ? 'chevron-up' : 'chevron-down'}
        color={theme.colors.text.default}
      />
    </View>
  );
};

// tslint:disable-next-line
interface IconProps {}

const StyledIconOpen = () => <StyledIcon showOpen={false} />;

const StyledIconClose = () => <StyledIcon showOpen={true} />;
