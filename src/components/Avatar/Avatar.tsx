import * as React from 'react';
import { Image, ImageSourcePropType, View } from 'react-native';
import { DeepPartial } from 'ts-essentials';

import { useTheme } from '../../theme';
import { FillColors } from '../../theme/Theme';
import { mergeStyles, ReplaceReturnType } from '../../utils/mergeStyles';
import { Text } from '../Typography';
import {
  AvatarStyles,
  GetAvatarStyles,
  getAvatarStyles,
} from './Avatar.styles';

// https://github.com/segmentio/evergreen/blob/master/source/avatar/README.md
export type GetInitialsType = (name?: string, fallback?: string) => string;

const globalGetInitials: GetInitialsType = (name, fallback = '?') => {
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
  source?: ImageSourcePropType;

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

  getStyles?: ReplaceReturnType<GetAvatarStyles, DeepPartial<AvatarStyles>>;

  testID?: string;
}

export const Avatar = (props: AvatarProps) => {
  const {
    source,
    size = 48,
    name,
    isSolid = false,
    hashValue,
    getInitials = globalGetInitials,
    color = 'automatic',
    forceShowInitials = false,
    sizeLimitOneCharacter = 20,
    getStyles,
    testID,
  } = props;

  const theme = useTheme();

  const { imageHasFailedLoading } = { imageHasFailedLoading: false };
  const imageUnavailable = !source || imageHasFailedLoading;

  let initials = getInitials(name);
  if (size <= sizeLimitOneCharacter) {
    initials = initials.substring(0, 1);
  }

  const { containerStyle, textStyle, imageStyle } = mergeStyles(
    getAvatarStyles,
    getStyles,
  )(
    {
      color,
      hashValue,
      isSolid,
      name,
      size,
      sizeLimitOneCharacter,
    },
    theme,
  );

  return (
    <View style={containerStyle} testID={testID}>
      {(imageUnavailable || forceShowInitials) && (
        <Text
          getStyles={() => ({
            textStyle,
          })}
        >
          {initials}
        </Text>
      )}
      {!imageUnavailable && !!source && (
        <Image source={source} style={imageStyle} />
      )}
    </View>
  );
};
