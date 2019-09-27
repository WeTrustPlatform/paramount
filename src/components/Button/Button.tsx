import * as React from 'react';
import {
  GestureResponderEvent,
  TouchableOpacity,
  TouchableOpacityProps,
  ViewStyle,
} from 'react-native';

import { ButtonColor, ControlSize, Theme, useTheme } from '../../theme';
import { isControlSize } from '../../utils/isControlSize';
import { getOverrides, WithOverrides } from '../../utils/overrides';
import { Dots } from '../LoadingIndicators';
import { Text, TextProps } from '../Typography';

interface ButtonBaseProps {
  /** Title of the button */
  title?: string;

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
  size?: ControlSize | number;

  /**
   * When true, show a loading spinner before the title. This also disables the button.
   * @default false
   */
  isLoading?: boolean;

  /**
   * When true, the button is disabled. isLoading also sets the button to disabled.
   * @default false
   */
  isDisabled?: boolean;

  /** Called when button is pressed */
  onPress?: (event: GestureResponderEvent) => void;

  /** Used to locate this view in end-to-end tests. */
  testID?: string;
}

export interface ButtonOverrides {
  Touchable: TouchableProps;
  Title: TitleProps;
  IconBefore: IconProps;
  IconAfter: IconProps;
  Loading: LoadingProps;
}

export interface ButtonProps
  extends WithOverrides<ButtonBaseProps, ButtonOverrides> {}

export const Button = (props: ButtonProps) => {
  const {
    appearance = 'primary',
    color = 'default',
    isDisabled = false,
    isLoading = false,
    size = 'medium',
    onPress = () => {
      return;
    },
    title,
    testID,
    overrides = {},
  } = props;

  const [Touchable, touchableProps] = getOverrides(
    StyledTouchable,
    props,
    overrides.Touchable,
  );
  const [Title, titleProps] = getOverrides(StyledTitle, props, overrides.Title);
  const [Loading, loadingProps] = getOverrides(
    StyledLoading,
    props,
    overrides.Loading,
  );
  const [IconBefore, iconBeforeProps] = getOverrides(
    StyledIcon,
    props,
    overrides.IconBefore,
  );
  const [IconAfter, iconAfterProps] = getOverrides(
    StyledIcon,
    props,
    overrides.IconAfter,
  );

  return (
    <Touchable
      appearance={appearance}
      color={color}
      isDisabled={isDisabled}
      isLoading={isLoading}
      size={size}
      onPress={onPress}
      testID={testID}
      {...touchableProps}
    >
      <IconBefore
        appearance={appearance}
        color={color}
        isDisabled={isDisabled}
        isLoading={isLoading}
        size={size}
        {...iconBeforeProps}
      />
      {isLoading ? (
        <Loading appearance={appearance} color={color} {...loadingProps} />
      ) : (
        <Title
          appearance={appearance}
          color={color}
          isDisabled={isDisabled}
          size={size}
          title={title}
          {...titleProps}
        />
      )}
      <IconAfter
        appearance={appearance}
        color={color}
        isDisabled={isDisabled}
        isLoading={isLoading}
        size={size}
        {...iconAfterProps}
      />
    </Touchable>
  );
};

interface PropsWithChildren {
  children?: React.ReactNode;
}

interface ButtonAppearances {
  minimal: { [size in ButtonColor]: ViewStyle };
  primary: { [size in ButtonColor]: ViewStyle };
  outline: { [size in ButtonColor]: ViewStyle };
}

type ButtonAppearance = keyof ButtonAppearances;

const getButtonAppearances = (
  theme: Theme,
  isLoading: boolean,
): ButtonAppearances => {
  return {
    minimal: {
      default: {
        backgroundColor: theme.colors.background.content,
      },
      danger: {
        backgroundColor: theme.colors.background.content,
      },
      primary: {
        backgroundColor: theme.colors.background.content,
      },
      secondary: {
        backgroundColor: theme.colors.background.content,
      },
    },
    primary: {
      default: {
        backgroundColor: isLoading
          ? theme.colors.background.overlay
          : theme.colors.button.default,
      },
      danger: {
        backgroundColor: isLoading
          ? theme.colors.background.dangerLight
          : theme.colors.button.danger,
      },
      primary: {
        backgroundColor: isLoading
          ? theme.colors.background.primaryLight
          : theme.colors.button.primary,
      },
      secondary: {
        backgroundColor: isLoading
          ? theme.colors.background.secondaryLight
          : theme.colors.button.secondary,
      },
    },

    outline: {
      default: {
        backgroundColor: theme.colors.background.content,
        borderColor: theme.colors.text.default,
        borderWidth: 3,
      },
      danger: {
        backgroundColor: theme.colors.background.content,
        borderColor: theme.colors.border.danger,
        borderWidth: 3,
      },
      primary: {
        backgroundColor: theme.colors.background.content,
        borderColor: theme.colors.border.primary,
        borderWidth: 3,
      },
      secondary: {
        backgroundColor: theme.colors.background.content,
        borderColor: theme.colors.border.secondary,
        borderWidth: 3,
      },
    },
  };
};

interface TouchableProps extends TouchableOpacityProps, PropsWithChildren {
  color: ButtonColor;
  appearance: ButtonAppearance;
  size: ControlSize | number;
  isDisabled: boolean;
  isLoading: boolean;
}

const StyledTouchable = (props: TouchableProps) => {
  const {
    color,
    appearance,
    size,
    isDisabled,
    isLoading,
    children,
    style,
    ...touchableProps
  } = props;
  const theme = useTheme();
  const buttonAppearances = getButtonAppearances(theme, isLoading);

  const { borderRadius, height, paddingLeft, paddingRight } = isControlSize(
    size,
  )
    ? {
        borderRadius: theme.controlBorderRadius[size],
        height: theme.controlHeights[size],
        paddingLeft: theme.controlPaddings[size] + 8,
        paddingRight: theme.controlPaddings[size] + 8,
      }
    : {
        borderRadius: theme.controlBorderRadius.medium,
        height: size,
        paddingLeft: theme.controlPaddings.medium + 8,
        paddingRight: theme.controlPaddings.medium + 8,
      };

  return (
    <TouchableOpacity
      accessibilityRole="button"
      disabled={!!(isDisabled || isLoading)}
      style={[
        {
          borderRadius,
          height,
          paddingLeft,
          paddingRight,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          ...buttonAppearances[appearance][color],
          ...(isDisabled && {
            backgroundColor: theme.colors.button.disabled,
          }),
        },
        style,
      ]}
      {...touchableProps}
    >
      {children}
    </TouchableOpacity>
  );
};

interface ButtonTextColors {
  minimal: { [size in ButtonColor]: string };
  primary: { [size in ButtonColor]: string };
  outline: { [size in ButtonColor]: string };
}

const getButtonTextColor = (theme: Theme): ButtonTextColors => {
  return {
    minimal: {
      default: theme.colors.text.default,
      danger: theme.colors.text.danger,
      primary: theme.colors.text.primary,
      secondary: theme.colors.text.secondary,
    },
    primary: {
      default: theme.colors.button.defaultText,
      danger: theme.colors.button.dangerText,
      primary: theme.colors.button.primaryText,
      secondary: theme.colors.button.secondaryText,
    },

    outline: {
      default: theme.colors.text.default,
      danger: theme.colors.text.danger,
      primary: theme.colors.text.primary,
      secondary: theme.colors.text.secondary,
    },
  };
};

interface TitleProps extends TextProps {
  size: ControlSize | number;
  color: ButtonColor;
  title?: string;
  appearance: ButtonAppearance;
  isDisabled: boolean;
}

const StyledTitle = (props: TitleProps) => {
  const {
    size,
    title,
    style,
    color,
    isDisabled,
    appearance,
    ...textProps
  } = props;
  const theme = useTheme();

  const textSize = isControlSize(size)
    ? theme.textSizes[size]
    : theme.textSizes.medium;

  return (
    <Text
      weight="bold"
      style={[
        {
          alignItems: 'center',
          color: isDisabled
            ? theme.colors.text.muted
            : getButtonTextColor(theme)[appearance][color],
          display: 'flex',
          fontWeight: '600',
          justifyContent: 'center',
          textAlign: 'center',
          paddingHorizontal: 8,
          ...textSize,
        },
        style,
      ]}
      {...textProps}
    >
      {title}
    </Text>
  );
};

interface LoadingProps {
  color: ButtonColor;
  appearance: ButtonAppearance;
}

const StyledLoading = (props: LoadingProps) => {
  const { color, appearance } = props;
  const theme = useTheme();

  return <Dots color={getButtonTextColor(theme)[appearance][color]} />;
};

interface IconProps extends PropsWithChildren {
  size: ControlSize | number;
  color: ButtonColor;
  title?: string;
  appearance: ButtonAppearance;
  isDisabled: boolean;
  isLoading: boolean;
}

const StyledIcon = (props: IconProps) => {
  return <></>;
};
