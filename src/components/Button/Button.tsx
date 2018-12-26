import * as React from 'react';
import {
  TextStyle,
  TouchableHighlight,
  TouchableHighlightProps,
  View,
  ViewStyle,
} from 'react-native';

import { Theme, withTheme } from '../../theme';
import {
  ButtonAppearance,
  ButtonColor,
  ButtonSize,
} from '../../theme/component-variables/buttonVariables';
import { Spacing } from '../Layout';
import { LoadingDots } from '../Loading';
import { Text } from '../Typography';

export interface ButtonProps extends TouchableHighlightProps {
  children?: string;

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
   * When true, show a loading spinner before the children. This also disables the button.
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
  onPress?: () => void;

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
   * Theme provided by ThemeProvider.
   */
  theme: Theme;

  /**
   * Inline styles for components
   */
  dangerouslySetInlineStyle?: {
    buttonStyle: ViewStyle;
    textStyle: TextStyle;
  };
}

const ButtonBase = (props: ButtonProps) => {
  const {
    appearance = 'primary',
    children,
    color = 'default',
    dangerouslySetInlineStyle,
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
    theme,

    ...touchableHighlightProps
  } = props;

  const { buttonStyle, textStyle, focusColor } = theme.getButtonStyles(
    appearance,
    color,
    size,
    isDisabled,
    isLoading,
    isInline,
  );

  return (
    <TouchableHighlight
      accessible
      accessibilityRole="button"
      underlayColor={focusColor}
      disabled={!!(isDisabled || isLoading)}
      onPress={onPress}
      style={{
        ...buttonStyle,
        ...(dangerouslySetInlineStyle && dangerouslySetInlineStyle.buttonStyle),
      }}
      {...touchableHighlightProps}
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
          ) : children ? (
            <Text
              dangerouslySetInlineStyle={{
                textStyle: {
                  ...textStyle,
                  ...(dangerouslySetInlineStyle &&
                    dangerouslySetInlineStyle.textStyle),
                },
              }}
            >
              {children}
            </Text>
          ) : null}
        </Spacing>
        {iconAfter}
      </View>
    </TouchableHighlight>
  );
};

export const Button = withTheme(ButtonBase);
export default Button;
