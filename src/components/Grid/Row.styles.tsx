import { ViewStyle } from 'react-native';

import { Theme } from '../../theme/ThemeInterface';

export interface RowStyleProps {
  gutterWidth: number;
  hasGutter: boolean;
}

export type GetRowStyles = (props: RowStyleProps, theme: Theme) => RowStyles;

export interface RowStyles {
  rowStyle: ViewStyle;
}

export const getRowStyles: GetRowStyles = ({ hasGutter, gutterWidth }) => {
  return {
    rowStyle: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      marginLeft: hasGutter ? -gutterWidth / 2 : 0,
      marginRight: hasGutter ? -gutterWidth / 2 : 0,
    },
  };
};
