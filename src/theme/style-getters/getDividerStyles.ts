import { TextStyle } from 'react-native';

import { IDividerVariables } from '../component-variables/dividerVariables';

export type GetDividerStyles = (
  size?: number,
  color?: string,
  radius?: number,
) => {
  dividerStyle: TextStyle;
};

export const getDividerStyles = (
  dividerVariables: IDividerVariables,
): GetDividerStyles => (size, color, radius) => {
  return {
    dividerStyle: {
      backgroundColor: color || dividerVariables.color,
      borderRadius: radius || dividerVariables.radius,
      height: size || dividerVariables.size,
      width: '100%',
    },
  };
};
