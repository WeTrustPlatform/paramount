import * as React from 'react';
import * as Feather from 'react-icons/fi';

import { useTheme } from '../../theme';
import { getTextColor, getTextSize } from '../Typography/Text';
import { IconProps } from './Icon';

function convertToPascal(name: string) {
  const converter = (matches: string, ...args: any[]) => {
    return matches[1].toUpperCase();
  };

  const result = name.replace(/(\-\w)/g, converter);
  return result.charAt(0).toUpperCase() + result.slice(1);
}

export const Icon = ({
  name,
  color = 'default',
  size = 'medium',
}: IconProps) => {
  const theme = useTheme();
  // @ts-ignore
  const IconTag = Feather[`Fi${convertToPascal(name)}`];
  const { fontSize = 16 } = getTextSize(theme.textSizes)(size);
  const iconSize = typeof size === 'string' ? fontSize + 8 : size;

  return (
    <IconTag color={getTextColor(theme.colors.text)(color)} size={iconSize} />
  );
};
