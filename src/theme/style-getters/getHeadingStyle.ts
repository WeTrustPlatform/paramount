import { TextStyle } from 'react-native';

import { HeadingVariables } from '../component-variables/headingVariables';
import { HeadingSize } from '../ThemeInterface';

export type GetHeadingStyle = (
  size: HeadingSize,
) => {
  headingStyle: TextStyle;
};

export const getHeadingStyle = (
  headingVariables: HeadingVariables,
): GetHeadingStyle => size => {
  return {
    headingStyle: headingVariables.size[size],
  };
};
