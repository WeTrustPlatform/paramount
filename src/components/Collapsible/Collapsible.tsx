import * as React from 'react';
import { AccessibilityProps, TouchableOpacity, View } from 'react-native';
import { animated, useSpring } from 'react-spring/native.cjs';
import { DeepPartial } from 'ts-essentials';

import { springDefaultConfig } from '../../constants/Animation';
import { initialMeasurements } from '../../hooks';
import { useTheme } from '../../theme';
import { mergeStyles, ReplaceReturnType } from '../../utils/mergeStyles';
import { ViewMeasure } from '../Helpers';
import { Icon } from '../Icon';
import { Text } from '../Typography';
import {
  CollapsibleStyles,
  GetCollapsibleStyles,
  getCollapsibleStyles,
} from './Collapsible.styles';

const AnimatedView = animated(View);

export interface CollapsibleProps extends AccessibilityProps {
  /** Adds animation when revealing the content @default true */
  isAnimated?: boolean;
  /** The header will move to the end of the content when revealing content @default false */
  shouldMoveWithEndOfContent?: boolean;
  children?: React.ReactNode;
  /** Uncontrolled usage of the component */
  initialIsOpen?: boolean;
  /** Controlled usage of the component */
  isOpen?: boolean;
  onOpen?: () => void;
  onClose?: () => void;
  getStyles?: ReplaceReturnType<
    GetCollapsibleStyles,
    DeepPartial<CollapsibleStyles>
  >;
  title?: string;
  header?: React.ReactNode;
  testID?: string;
}

export const Collapsible = (props: CollapsibleProps) => {
  const {
    isAnimated = true,
    shouldMoveWithEndOfContent = false,
    title,
    children,
    header,
    initialIsOpen = false,
    isOpen,
    getStyles,
    testID,
    onOpen = () => undefined,
    onClose = () => undefined,
    ...accessibilityProps
  } = props;
  const theme = useTheme();
  const [isOpened, setIsOpened] = React.useState(initialIsOpen);
  const [contentMeasurements, setContentMeasurements] = React.useState(
    initialMeasurements,
  );

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
  )({}, theme);

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
  }, [isOpened, isOpen, isControlledUsage]);

  const { height } = useSpring({
    config: springDefaultConfig,

    height: isFinalOpened ? contentMeasurements.height : 0,
  });

  const headerToggle = (
    <TouchableOpacity
      testID={testID}
      onPress={handlePress}
      style={touchableStyle}
      {...accessibilityProps}
    >
      <View style={outerWrapperStyle}>
        {header || (
          <>
            <Text size="large" getStyles={() => ({ textStyle })}>
              {title}
            </Text>
            <View style={iconWrapperStyle}>
              <Icon
                size={28}
                name={isFinalOpened ? 'chevron-up' : 'chevron-down'}
                color={theme.colors.text.default}
              />
            </View>
          </>
        )}
      </View>
    </TouchableOpacity>
  );

  const contentWrapper = isAnimated ? (
    // @ts-ignore
    <AnimatedView style={{ ...contentWrapperStyle, height }}>
      <ViewMeasure onMeasure={setContentMeasurements}>{children}</ViewMeasure>
    </AnimatedView>
  ) : (
    <View style={contentWrapperStyle}>{isFinalOpened && children}</View>
  );

  if (shouldMoveWithEndOfContent) {
    return (
      <>
        {contentWrapper}
        {headerToggle}
      </>
    );
  }

  return (
    <>
      {headerToggle}
      {contentWrapper}
    </>
  );
};
