import { ViewStyle } from 'react-native';

import { Theme } from '../../theme/ThemeInterface';

export type GetRowStyles = (theme: Theme) => RowStyles;

export interface RowStyles {
  rowStyle: ViewStyle;
}

export const getRowStyles: GetRowStyles = theme => {
  return {
    rowStyle: {
      flexDirection: 'row',
      flexWrap: 'wrap',
    },
  };
};
