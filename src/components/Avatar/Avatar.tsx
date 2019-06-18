import * as React from 'react';
import { Image, ImageSourcePropType, View } from 'react-native';
import { DeepPartial } from 'ts-essentials';

import { useTheme } from '../../theme';
import { FillColor } from '../../theme/Theme';
import { mergeStyles, ReplaceReturnType } from '../../utils/mergeStyles';
import { Text } from '../Typography';
import {
  AvatarStyles,
  GetAvatarStyles,
  getAvatarStyles,
} from './Avatar.styles';

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

  /** The size of the avatar. */
  size?: number;

  /**
   * The name used for the initials and title attribute.
   * @default 48
   */
  name?: string;

  /**
   * When true, render a solid avatar.
   * @default false
   */
  isSolid?: boolean;

  /**
   * The color used for the avatar.
   * When the value is `automatic`, use the hash function to determine the color.
   * @default "automatic"
   */
  color?: 'automatic' | FillColor;

  /**
   * When the size is smaller than this number, use a single initial for the avatar.
   * @default 20
   */
  sizeLimitOneCharacter?: number;

  /** Callback to get element styles. */
  getStyles?: ReplaceReturnType<GetAvatarStyles, DeepPartial<AvatarStyles>>;

  /** Used to locate this view in end-to-end tests. */
  testID?: string;
}

export const Avatar = (props: AvatarProps) => {
  const {
    source,
    size = 48,
    name,
    isSolid = false,
    color = 'automatic',
    sizeLimitOneCharacter = 20,
    getStyles,
    testID,
  } = props;

  const theme = useTheme();

  const [hasImageFailedLoading, setHasImageFailedLoading] = React.useState(
    false,
  );
  const imageUnavailable = !source || hasImageFailedLoading;

  let initials = getInitials(name);
  if (size <= sizeLimitOneCharacter) {
    initials = initials.substring(0, 1);
  }

  const { containerStyle, textStyle, imageStyle } = mergeStyles(
    getAvatarStyles,
    getStyles,
    theme.components.getAvatarStyles,
  )(
    {
      color,
      isSolid,
      name,
      size,
      sizeLimitOneCharacter,
    },
    theme,
  );

  return (
    <View style={containerStyle} testID={testID}>
      {imageUnavailable && (
        <Text getStyles={() => ({ textStyle })}>{initials}</Text>
      )}
      {!imageUnavailable && !!source && (
        <Image
          onError={() => setHasImageFailedLoading(true)}
          source={source}
          style={imageStyle}
        />
      )}
    </View>
  );
};
