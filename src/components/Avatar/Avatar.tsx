import * as React from 'react';
import { Image, ImageSourcePropType, View } from 'react-native';

import { useTheme } from '../../theme';
import { ControlSize, FillColor } from '../../theme/Theme';
import { mergeStyles } from '../../utils/mergeStyles';
import { Text } from '../Typography';
import { GetAvatarStyles, getAvatarStyles } from './Avatar.styles';

// https://github.com/segmentio/evergreen/blob/master/source/avatar/README.md
export type GetInitialsType = (name?: string, fallback?: string) => string;

const getInitials: GetInitialsType = (name, fallback = '?') => {
  if (!name) return fallback;

  return name
    .replace(/\s+/, ' ')
    .split(' ') // Repeated spaces results in empty strings
    .slice(0, 2)
    .map(v => v && v[0].toUpperCase()) // Watch out for empty strings
    .join('');
};

export interface AvatarProps {
  /** The source attribute of the image. When it's not available, render initials instead. */
  source?: ImageSourcePropType;

  /**
   * The size of the avatar.
   * @default "medium"
   */
  size?: ControlSize | number;

  /**
   * The name used for the initials and title attribute.
   */
  name?: string;

  /**
   * When true, render a solid background when initials are used.
   * @default false
   */
  isSolid?: boolean;

  /**
   * The color used for the avatar.
   * @default "automatic"
   */
  color?: 'automatic' | FillColor;

  /** Image label for screen readers */
  imageAccessibilityLabel?: string;

  /** Label for screen readers */
  accessibilityLabel?: string;

  /** Callback to get element styles. */
  getStyles?: GetAvatarStyles;

  /** Used to locate this view in end-to-end tests. */
  testID?: string;
}

export const Avatar = (props: AvatarProps) => {
  const {
    source,
    name,
    getStyles,
    testID,
    imageAccessibilityLabel,
    accessibilityLabel,
  } = props;

  const theme = useTheme();

  const [hasImageFailedLoading, setHasImageFailedLoading] = React.useState(
    false,
  );
  const imageUnavailable = !source || hasImageFailedLoading;

  const initials = getInitials(name);

  const { containerStyle, textStyle, imageStyle } = mergeStyles(
    getAvatarStyles,
    getStyles,
    theme.components.getAvatarStyles,
  )(props, theme);

  return (
    <View
      accessibilityLabel={accessibilityLabel}
      style={containerStyle}
      testID={testID}
    >
      {imageUnavailable && (
        <Text getStyles={() => ({ textStyle })}>{initials}</Text>
      )}
      {!imageUnavailable && !!source && (
        <Image
          accessibilityLabel={imageAccessibilityLabel}
          onError={() => setHasImageFailedLoading(true)}
          source={source}
          style={imageStyle}
        />
      )}
    </View>
  );
};
