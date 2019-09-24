import { ImageStyle, TextStyle, ViewStyle } from 'react-native';

import { ControlSize, FillColors, Fills, Theme } from '../../theme/Theme';
import { isControlSize } from '../../utils/isControlSize';
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
) => Partial<AvatarStyles>;

const avatarScale: { [size in ControlSize]: number } = {
  large: 2,
  medium: 1.5,
  small: 1,
};

export const getAvatarStyles: GetAvatarStyles = (
  { name, color = 'automatic', isSolid = false, size = 'medium' },
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

  const controlSize = isControlSize(size)
    ? theme.controlHeights[size] * avatarScale[size]
    : size;

  return {
    containerStyle: {
      alignItems: 'center',
      backgroundColor: colorProps.backgroundColor,
      borderRadius: 9999,
      display: 'flex',
      height: controlSize,
      justifyContent: 'center',
      overflow: 'hidden',
      position: 'relative',
      width: controlSize,
    },

    textStyle: {
      color: colorProps.color,
      fontSize: controlSize / 2,
      lineHeight: controlSize,
    },

    imageStyle: {
      height: '100%',
      width: '100%',
    },
  };
};
