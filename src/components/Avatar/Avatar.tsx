// https://github.com/segmentio/evergreen/blob/master/source/avatar/README.md
import * as React from 'react';
import { Image } from 'react-native';

import { ITheme, withTheme } from '../../theme';
import { IFillColors } from '../../theme/ThemeInterface';
import { Box } from '../Layout';
import { Text } from '../Typography';

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

export interface IAvatarProps {
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
  color?: 'automatic' | keyof IFillColors;

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
  theme: ITheme;
}

export const AvatarWithoutTheme = (props: IAvatarProps) => {
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
    ...otherProps
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
    <Box {...boxStyle} {...otherProps}>
      {(imageUnavailable || forceShowInitials) && (
        <Text
          dangerouslySetInlineStyle={{
            __style: textStyle,
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
          style={imageStyle}
        />
      )}
    </Box>
  );
};

export const Avatar = withTheme(AvatarWithoutTheme);
export default Avatar;
