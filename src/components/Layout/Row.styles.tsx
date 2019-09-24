import { ViewStyle } from 'react-native';

import { Theme } from '../../theme/Theme';
import { LayoutContext } from './LayoutContext';
import { RowProps } from './Row';

export type GetRowStyles = (
  props: RowProps & LayoutContext,
  theme: Theme,
) => Partial<RowStyles>;

export interface RowStyles {
  rowStyle: ViewStyle;
}

export const getRowStyles: GetRowStyles = ({
  hasGutter = true,
  gutterWidth,
}) => {
  return {
    rowStyle: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      marginLeft: hasGutter ? -gutterWidth / 2 : 0,
      marginRight: hasGutter ? -gutterWidth / 2 : 0,
    },
  };
};
