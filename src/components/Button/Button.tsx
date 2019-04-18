import * as React from 'react';
import {
  AccessibilityProps,
  GestureResponderEvent,
  TouchableHighlight,
  View,
} from 'react-native';
import { DeepPartial } from 'ts-essentials';

import { useTheme } from '../../theme';
import { mergeStyles, ReplaceReturnType } from '../../utils/mergeStyles';
import { Spacing } from '../Layout';
import { LoadingDots } from '../Loading';
import { Text } from '../Typography';
import {
  ButtonAppearance,
  ButtonColor,
  ButtonSize,
  ButtonStyles,
  GetButtonStyles,
  getButtonStyles,
} from './Button.styles';

export interface ButtonProps extends AccessibilityProps {
  title?: string;

  /**
   * The intent of the button.
   * @default "default"
   */
  color?: ButtonColor;

  /**
   * The appearance of the button.
   * @default "primary"
   */
  appearance?: ButtonAppearance;

  /**
   * The size of the button.
   * @default "medium"
   */
  size?: ButtonSize;

  /**
   * When true, show a loading spinner before the title. This also disables the button.
   * @default false
   */
  isLoading?: boolean;

  /**
   * Forcefully set the active state of a button.
   * @default false
   */
  isActive?: boolean;

  /**
   * When true, the button is disabled. isLoading also sets the button to disabled.
   * @default false
   */
  isDisabled?: boolean;

  /**
   * When true, the button will not stretch full width
   * @default false
   */
  isInline?: boolean;

  /**
   * Button press handler
   * @default () => {}
   */
  onPress?: (event: GestureResponderEvent) => void;

  /**
   * Sets an icon before the text.
   * @default undefined
   */
  iconBefore?: React.ReactNode;

  /**
   * Sets an icon after the text.
   * @default undefined
   */
  iconAfter?: React.ReactNode;

  /**
   * Sets an icon at loading state.
   * @default undefined
   */
  iconLoading?: React.ReactNode;

  /**
   * Inline styles for components
   */
  getStyles?: ReplaceReturnType<GetButtonStyles, DeepPartial<ButtonStyles>>;

  testID?: string;
}

export const Button = (props: ButtonProps) => {
  const {
    appearance = 'primary',
    title,
    color = 'default',
    getStyles,
    iconAfter,
    iconBefore,
    iconLoading,
    isActive = false,
    isDisabled = false,
    isInline = false,
    isLoading = false,
    onPress = () => {
      return;
    },
    size = 'medium',
    testID,

    ...accessibilityProps
  } = props;

  const theme = useTheme();

  const { buttonStyle, textStyle, focusColor } = mergeStyles(
    getButtonStyles,
    getStyles,
  )(
    {
      appearance,
      color,
      isDisabled,
      isInline,
      isLoading,
      size,
    },
    theme,
  );

  return (
    <TouchableHighlight
      accessible
      accessibilityRole="button"
      underlayColor={focusColor}
      disabled={!!(isDisabled || isLoading)}
      onPress={onPress}
      style={buttonStyle}
      testID={testID}
      {...accessibilityProps}
    >
      <View
        style={{
          alignItems: 'center',
          flexDirection: 'row',
          height: '100%',
          justifyContent: 'center',
        }}
      >
        {iconBefore}
        <Spacing
          paddingLeft={iconBefore ? 1 : 0}
          paddingRight={iconAfter ? 1 : 0}
        >
          {isLoading ? (
            iconLoading || <LoadingDots color={textStyle.color} />
          ) : title ? (
            <Text
              getStyles={() => ({
                textStyle,
              })}
            >
              {title}
            </Text>
          ) : null}
        </Spacing>
        {iconAfter}
      </View>
    </TouchableHighlight>
  );
};
