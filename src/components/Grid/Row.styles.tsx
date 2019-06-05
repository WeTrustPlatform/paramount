import { ViewStyle } from 'react-native';

import { Theme } from '../../theme/ThemeInterface';

export interface RowStyleProps {
  gutterWidth: number;
  hasMargin: boolean;
  hasGutter: boolean;
}

export type GetRowStyles = (props: RowStyleProps, theme: Theme) => RowStyles;

export interface RowStyles {
  rowStyle: ViewStyle;
}

export const getRowStyles: GetRowStyles = ({
  hasMargin,
  hasGutter,
  gutterWidth,
}) => {
  // Columns have horizontal paddings that already create the margin
  // So we manipulate row's margin to get desired result
  let margin = 0;

  if (hasMargin && !hasGutter) {
    margin = gutterWidth / 2;
  } else if (!hasMargin && hasGutter) {
    margin = -gutterWidth / 2;
  } else if (hasMargin && hasGutter) {
    margin = 0;
  } else if (!hasMargin && !hasGutter) {
    margin = 0;
  }

  return {
    rowStyle: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      marginLeft: margin,
      marginRight: margin,
    },
  };
};
