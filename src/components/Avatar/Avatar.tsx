import * as React from 'react';
import { Image, View } from 'react-native';

import { Theme, withTheme } from '../../theme';
import { AvatarStyles } from '../../theme/style-getters/getAvatarStyles';
import { FillColors } from '../../theme/ThemeInterface';
import { Text } from '../Typography';

// https://github.com/segmentio/evergreen/blob/master/source/avatar/README.md
export type GetInitialsType = (name?: string, fallback?: string) => string;

export const globalGetInitials: GetInitialsType = (name, fallback = '?') => {
  if (!name) return fallback;

  return name
    .replace(/\s+/, ' ')
    .split(' ') // Repeated spaces results in empty strings
    .slice(0, 2)
    .map(v => v && v[0].toUpperCase()) // Watch out for empty strings
    .join('');
};

export interface AvatarProps {
  /**
   * The source attribute of the image.
   * When it's not available, render initials instead.
   */
  source?: string;

  /**
   * The size of the avatar.
   */
  size?: number;

  /**
   * The name used for the initials and title attribute.
   */
  name?: string;

  /**
   * The value used for the hash function.
   * The name is used as the hashValue by default.
   * When dealing with anonymous users you should use the id instead.
   */
  hashValue?: string;

  /**
   * When true, render a solid avatar.
   */
  isSolid?: boolean;

  /**
   * The color used for the avatar.
   * When the value is `automatic`, use the hash function to determine the color.
   */
  color?: 'automatic' | keyof FillColors;

  /**
   * Function to get the initials based on the name.
   */
  getInitials?: GetInitialsType;

  /**
   * When true, force show the initials.
   * This is useful in some cases when using Gravatar and transparent pngs.
   */
  forceShowInitials?: boolean;

  /**
   * When the size is smaller than this number, use a single initial for the avatar.
   */
  sizeLimitOneCharacter?: number;

  /**
   * Theme provided by ThemeProvider.
   */
  theme: Theme;

  /**
   * Inline styles for components
   */
  dangerouslySetInlineStyle?: Partial<AvatarStyles>;
}

export const AvatarBase = (props: AvatarProps) => {
  const {
    theme,

    source,
    size = 40,
    name,
    isSolid = false,
    hashValue,
    getInitials = globalGetInitials,
    color = 'automatic',
    forceShowInitials = false,
    sizeLimitOneCharacter = 20,
    dangerouslySetInlineStyle,
  } = props;

  const { imageHasFailedLoading } = { imageHasFailedLoading: false };
  const imageUnavailable = !source || imageHasFailedLoading;

  let initials = getInitials(name);
  if (size <= sizeLimitOneCharacter) {
    initials = initials.substring(0, 1);
  }

  const { boxStyle, textStyle, imageStyle } = theme.getAvatarStyles({
    color,
    hashValue,
    isSolid,
    name,
    size,
    sizeLimitOneCharacter,
  });

  return (
    <View
      style={{
        ...boxStyle,
        ...(dangerouslySetInlineStyle && dangerouslySetInlineStyle.boxStyle),
      }}
    >
      {(imageUnavailable || forceShowInitials) && (
        <Text
          dangerouslySetInlineStyle={{
            textStyle: {
              ...textStyle,
              ...(dangerouslySetInlineStyle &&
                dangerouslySetInlineStyle.textStyle),
            },
          }}
        >
          {initials}
        </Text>
      )}
      {!imageUnavailable && (
        <Image
          source={{
            uri: source,
          }}
          style={{
            ...imageStyle,
            ...(dangerouslySetInlineStyle &&
              dangerouslySetInlineStyle.imageStyle),
          }}
        />
      )}
    </View>
  );
};

export const Avatar = withTheme(AvatarBase);
export default Avatar;
