import * as React from 'react';
import {
  TouchableHighlight,
  TouchableHighlightProps,
  View,
} from 'react-native';
import { DeepPartial } from 'ts-essentials';

import { Theme, withTheme } from '../../theme';
import { mergeStyles, ReplaceReturnType } from '../../utils/mergeStyles';
import { Spacing } from '../Layout';
import { LoadingDots } from '../Loading';
import { Text } from '../Typography';
import { getTextStyles } from '../Typography/Text.styles';
import {
  ButtonAppearance,
  ButtonColor,
  ButtonSize,
  ButtonStyles,
  GetButtonStyles,
  getButtonStyles,
} from './Button.styles';

export interface ButtonProps extends TouchableHighlightProps {
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
  getStyles?: ReplaceReturnType<GetButtonStyles, DeepPartial<ButtonStyles>>;
}

const ButtonBase = (props: ButtonProps) => {
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
    theme,

    ...touchableHighlightProps
  } = props;

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
          ) : title ? (
            <Text
              getStyles={(...params) => {
                const { textStyle: defaultTextStyle } = getTextStyles(
                  ...params,
                );
                return {
                  textStyle: {
                    ...defaultTextStyle,
                    ...textStyle,
                  },
                };
              }}
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

export const Button = withTheme(ButtonBase);
export default Button;
