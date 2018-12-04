import * as React from 'react';
import { TouchableHighlight, View } from 'react-native';

import { ITheme, withTheme } from '../../theme';
import {
  ButtonAppearance,
  ButtonColor,
  ButtonSize,
} from '../../theme/component-variables/buttonVariables';
import { GridBox } from '../Layout';
import { LoadingDots } from '../Loading';
import { Text } from '../Typography';

export interface IButtonProps {
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
   * Theme provided by ThemeProvider.
   */
  theme: ITheme;
}

const ButtonWithoutTheme = (props: IButtonProps) => {
  const {
    appearance = 'primary',
    children,
    color = 'default',
    iconAfter,
    iconBefore,
    isActive = false,
    isDisabled = false,
    isInline = false,
    isLoading = false,
    onPress = () => {
      return;
    },
    size = 'medium',
    theme,

    ...otherProps
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
      accessibilityRole="button"
      underlayColor={focusColor}
      disabled={!!(isDisabled || isLoading)}
      onPress={onPress}
      style={buttonStyle}
      {...otherProps}
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
        <GridBox
          paddingLeft={iconBefore ? 1 : 0}
          paddingRight={iconAfter ? 1 : 0}
        >
          {isLoading ? (
            <LoadingDots color={textStyle.color} />
          ) : children ? (
            <Text style={textStyle}>{children}</Text>
          ) : null}
        </GridBox>
        {iconAfter}
      </View>
    </TouchableHighlight>
  );
};

export const Button = withTheme(ButtonWithoutTheme);
export default Button;
