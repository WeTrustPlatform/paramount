import * as React from 'react';
import {
  GestureResponderEvent,
  TextStyle,
  TouchableOpacity,
  View,
} from 'react-native';
import { DeepPartial } from 'ts-essentials';

import { ButtonColor, ControlSize, useTheme } from '../../theme';
import { mergeStyles, ReplaceReturnType } from '../../utils/mergeStyles';
import { Dots } from '../LoadingIndicators';
import { Text } from '../Typography';
import {
  ButtonAppearance,
  ButtonStyles,
  GetButtonStyles,
  getButtonStyles,
} from './Button.styles';

export interface ButtonProps {
  /** Title of the button */
  title?: string;

  /** Icon in place of title */
  icon?: React.ReactNode;

  /**
   * The color of the button.
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
  size?: ControlSize;

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

  /** Called when button is pressed */
  onPress?: (event: GestureResponderEvent) => void;

  /** Sets an icon before the text. */
  iconBefore?: React.ReactNode;

  /** Sets an icon after the text. */
  iconAfter?: React.ReactNode;

  /** Sets an icon at loading state. */
  iconLoading?: React.ReactNode;

  /** Label for screen readers */
  accessibilityLabel?: string;

  /** Callback to get element styles. */
  getStyles?: ReplaceReturnType<GetButtonStyles, DeepPartial<ButtonStyles>>;

  /** Used to locate this view in end-to-end tests. */
  testID?: string;
}

export const Button = (props: ButtonProps) => {
  const {
    appearance = 'primary',
    title,
    color = 'default',
    getStyles,
    icon,
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

  const {
    buttonStyle,
    textStyle,
    innerButtonWrapperStyle,
    buttonContentWrapperStyle,
  } = mergeStyles(getButtonStyles, getStyles, theme.components.getButtonStyles)(
    {
      appearance,
      color,
      hasIconAfter: !!iconAfter,
      hasIconBefore: !!iconBefore,
      isDisabled,
      isInline,
      isLoading,
      size,
    },
    theme,
  );

  return (
    <TouchableOpacity
      accessibilityRole="button"
      disabled={!!(isDisabled || isLoading)}
      onPress={onPress}
      style={buttonStyle}
      testID={testID}
      {...accessibilityProps}
    >
      <View style={innerButtonWrapperStyle}>
        {iconBefore}
        <View style={buttonContentWrapperStyle}>
          {/*
          // @ts-ignore */}
          <ButtonContent {...props} textStyle={textStyle} />
        </View>
        {iconAfter}
      </View>
    </TouchableOpacity>
  );
};

export interface ButtonContentProps extends ButtonProps {
  textStyle: TextStyle;
}

const ButtonContent = (props: ButtonContentProps) => {
  const { isLoading, iconLoading, icon, title, textStyle, size } = props;

  if (isLoading) {
    return <>{iconLoading || <Dots color={textStyle.color} />}</>;
  }
  if (icon) return <>{icon}</>;
  if (title) {
    return (
      <Text size={size} getStyles={() => ({ textStyle })}>
        {title}
      </Text>
    );
  }

  return <></>;
};
