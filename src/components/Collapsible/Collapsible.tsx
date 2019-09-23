import * as React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { DeepPartial } from 'ts-essentials';

import { useTheme } from '../../theme';
import { mergeStyles, ReplaceReturnType } from '../../utils/mergeStyles';
import { Icon } from '../Icon';
import { Text } from '../Typography';
import {
  CollapsibleStyles,
  GetCollapsibleStyles,
  getCollapsibleStyles,
} from './Collapsible.styles';

export interface CollapsibleProps {
  /** Title of the collapsible */
  title?: string;

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

  /** Override the title with the component */
  header?: React.ReactNode;

  /** Label for screen readers */
  accessibilityLabel?: string;

  /** Hint for screen readers */
  accessibilityHint?: string;

  /**
   * When true, indicates that the view is an accessibility element.
   * @default true
   */
  accessible?: boolean;

  /** Callback to get element styles. */
  getStyles?: ReplaceReturnType<
    GetCollapsibleStyles,
    DeepPartial<CollapsibleStyles>
  >;

  /** Used to locate this view in end-to-end tests. */
  testID?: string;
}

export const Collapsible = (props: CollapsibleProps) => {
  const {
    title,
    children,
    header,
    initialIsOpen = false,
    isOpen,
    getStyles,
    testID,
    onOpen = () => undefined,
    onClose = () => undefined,
    accessibilityHint,
    accessibilityLabel,
    accessible = true,
  } = props;
  const theme = useTheme();
  const [isOpened, setIsOpened] = React.useState(initialIsOpen);

  const isControlledUsage = typeof isOpen === 'boolean';
  const isFinalOpened = isControlledUsage ? isOpen : isOpened;

  const {
    touchableStyle,
    outerWrapperStyle,
    contentWrapperStyle,
    textStyle,
    iconWrapperStyle,
  } = mergeStyles(
    getCollapsibleStyles,
    getStyles,
    theme.components.getCollapsibleStyles,
  )({ ...props, isOpen: isFinalOpened }, theme);

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

  return (
    <>
      <TouchableOpacity
        testID={testID}
        onPress={handlePress}
        style={touchableStyle}
        accessibilityHint={accessibilityHint}
        accessibilityLabel={accessibilityLabel}
        accessible={accessible}
      >
        <View style={outerWrapperStyle}>
          {header || (
            <>
              <Text size="large" getStyles={() => ({ textStyle })}>
                {title}
              </Text>
              <View style={iconWrapperStyle}>
                <Icon
                  size="large"
                  name={isFinalOpened ? 'chevron-up' : 'chevron-down'}
                  color={theme.colors.text.default}
                />
              </View>
            </>
          )}
        </View>
      </TouchableOpacity>
      <View style={contentWrapperStyle}>{isFinalOpened && children}</View>
    </>
  );
};
