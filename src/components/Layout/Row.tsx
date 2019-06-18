import * as React from 'react';
import { View } from 'react-native';
import { DeepPartial } from 'ts-essentials';

import { useTheme } from '../../theme';
import { mergeStyles, ReplaceReturnType } from '../../utils/mergeStyles';
import { ColumnProps } from './Column';
import { defaultLayout, useLayout } from './LayoutContext';
import { GetRowStyles, getRowStyles, RowStyles } from './Row.styles';

export interface RowProps {
  children:
    | Array<React.ReactElement<ColumnProps>>
    | React.ReactElement<ColumnProps>;
  hasGutter?: boolean;
  getStyles?: ReplaceReturnType<GetRowStyles, DeepPartial<RowStyles>>;
}

export const GutterWidthContext = React.createContext(
  defaultLayout.gutterWidth,
);

export const Row = (props: RowProps) => {
  const { children, hasGutter = true, getStyles } = props;
  const { gutterWidth } = useLayout();
  const theme = useTheme();

  const { rowStyle } = mergeStyles(
    getRowStyles,
    getStyles,
    theme.components.getRowStyles,
  )({ gutterWidth, hasGutter }, theme);

  return (
    <View style={rowStyle}>
      <GutterWidthContext.Provider value={hasGutter ? gutterWidth : 0}>
        {children}
      </GutterWidthContext.Provider>
    </View>
  );
};
