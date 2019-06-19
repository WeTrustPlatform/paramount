import { ImageStyle, TextStyle, ViewStyle } from 'react-native';

import { FillColors, Fills, Theme } from '../../theme/Theme';
import { AvatarProps } from './Avatar';

export const hashCode = (s?: string) => {
  const str = String(s);
  let hash = 0;
  let char;
  if (str.trim().length === 0) return hash;
  for (let i = 0; i < str.length; i++) {
    char = str.charCodeAt(i);
    // tslint:disable-next-line
    hash = (hash << 5) - hash + char;
    // Convert to 32bit integer
    // tslint:disable-next-line
    hash &= hash;
  }
  return Math.abs(hash);
};

export type AvatarColor = 'automatic' | keyof FillColors;

export interface AvatarStyles {
  containerStyle: ViewStyle;
  textStyle: TextStyle;
  imageStyle: ImageStyle;
}

const getAvatarInitialsFontSize = (
  size: number,
  sizeLimitOneCharacter: number,
) => {
  if (size <= sizeLimitOneCharacter) {
    return Math.ceil(size / 2.2);
  }
  return Math.ceil(size / 2.6);
};

const getAvatarProps = (
  fills: Fills,
  {
    isSolid,
    color,
    hashValue,
  }: {
    isSolid?: boolean;
    color: AvatarColor;
    hashValue: number;
  },
) => {
  const appearances = fills[isSolid ? 'solid' : 'subtle'];

  if (color === 'automatic') {
    const keys = Object.keys(appearances);
    const key = keys[hashValue % keys.length] as keyof FillColors;
    return appearances[key];
  }

  return appearances[color];
};

export type GetAvatarStyles = (
  props: AvatarProps,
  theme: Theme,
) => AvatarStyles;

export const getAvatarStyles: GetAvatarStyles = (
  {
    name,
    color = 'automatic',
    isSolid = false,
    size = 48,
    sizeLimitOneCharacter = 20,
  },
  theme,
) => {
  let colorProps;
  const fills = theme.fills;
  if (color === 'automatic') {
    const newHashValue = hashCode(name);
    colorProps = getAvatarProps(theme.fills, {
      color,
      hashValue: newHashValue,
      isSolid,
    });
  } else {
    colorProps = getAvatarProps(fills, { color, isSolid, hashValue: 0 });
  }

  const initialsFontSize = getAvatarInitialsFontSize(
    size,
    sizeLimitOneCharacter,
  );

  return {
    containerStyle: {
      alignItems: 'center',
      backgroundColor: colorProps.backgroundColor,
      borderRadius: 9999,
      display: 'flex',
      height: size,
      justifyContent: 'center',
      overflow: 'hidden',
      position: 'relative',
      width: size,
    },

    textStyle: {
      color: colorProps.color,
      fontSize: initialsFontSize,
      lineHeight: initialsFontSize,
    },

    imageStyle: {
      height: '100%',
      width: '100%',
    },
  };
};
