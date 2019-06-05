import { ViewStyle } from 'react-native';

import { Theme } from '../../theme/ThemeInterface';

export type GetRowStyles = (props: {}, theme: Theme) => RowStyles;

export interface RowStyles {
  rowStyle: ViewStyle;
}

export const getRowStyles: GetRowStyles = () => {
  return {
    rowStyle: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      height: '100%',
    },
  };
};
