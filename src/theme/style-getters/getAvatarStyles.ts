import { ImageStyle, TextStyle, ViewStyle } from 'react-native';

import { AvatarVariables } from '../component-variables/avatarVariables';
import { FillColors, Fills } from '../ThemeInterface';

export type AvatarColor = 'automatic' | keyof FillColors;

export interface AvatarStylesParams {
  name?: string;
  color: AvatarColor;
  hashValue?: string;
  isSolid: boolean;
  size: number;
  sizeLimitOneCharacter: number;
}

export interface AvatarStyles {
  boxStyle: ViewStyle;
  textStyle: TextStyle;
  imageStyle: ImageStyle;
}

export type GetAvatarStyles = (params: AvatarStylesParams) => AvatarStyles;

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

export const getAvatarStyles = (
  avatarVariables: AvatarVariables,
): GetAvatarStyles => ({
  name,
  color,
  hashValue,
  isSolid,
  size = 24,
  sizeLimitOneCharacter = 20,
}) => {
  let colorProps;
  const fills = avatarVariables.fills;
  if (color === 'automatic') {
    const newHashValue = hashCode(hashValue || name);
    colorProps = getAvatarProps(avatarVariables.fills, {
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
    boxStyle: {
      ...avatarVariables.box,
      backgroundColor: colorProps.backgroundColor,
      height: size,
      width: size,
    },

    textStyle: {
      ...avatarVariables.text,
      color: colorProps.color,
      fontSize: initialsFontSize,
      lineHeight: initialsFontSize,
    },

    imageStyle: avatarVariables.image,
  };
};
