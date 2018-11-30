import { TextStyle } from 'react-native';

import { IHeadingVariables } from '../component-variables/headingVariables';
import { HeadingSize } from '../ThemeInterface';

export type GetHeadingStyle = (
  size: HeadingSize,
) => {
  headingStyle: TextStyle;
};

export const getHeadingStyle = (
  headingVariables: IHeadingVariables,
): GetHeadingStyle => size => {
  return {
    headingStyle: headingVariables.size[size],
  };
};
