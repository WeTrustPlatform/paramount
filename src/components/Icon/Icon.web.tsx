import * as React from 'react';
import * as Feather from 'react-icons/fi';

import { IconProps } from './Icon';

function convertToPascal(name: string) {
  const converter = (matches: string, ...args: any[]) => {
    return matches[1].toUpperCase();
  };

  const result = name.replace(/(\-\w)/g, converter);
  return result.charAt(0).toUpperCase() + result.slice(1);
}

export const Icon = ({ name, color, size }: IconProps) => {
  // @ts-ignore
  const IconTag = Feather[`Fi${convertToPascal(name)}`];

  return <IconTag color={color} size={size} />;
};
