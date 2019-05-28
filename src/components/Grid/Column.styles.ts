import { ViewStyle } from 'react-native';
import { Omit } from 'ts-essentials';

import { Theme } from '../../theme/ThemeInterface';

export interface ColumnStylesProps {
  hasGutter: boolean;
  gutterWidth: number;
}
export type GetColumnStyles = (
  progressStylesProps: ColumnStylesProps,
  theme: Theme,
) => ColumnStyles;

export interface ColumnStyles {
  outerWrapperStyle: Omit<ViewStyle, 'transform'>;
  innerWrapperStyle: Omit<ViewStyle, 'transform'>;
}

export const getColumnStyles: GetColumnStyles = (
  { hasGutter, gutterWidth },
  theme,
) => {
  return {
    innerWrapperStyle: {
      height: '100%',
      paddingLeft: hasGutter ? gutterWidth : 0,
      paddingRight: hasGutter ? gutterWidth : 0,
    },
    outerWrapperStyle: {
      height: '100%',
      minHeight: 0,
    },
  };
};
