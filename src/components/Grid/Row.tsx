import * as React from 'react';
import { View } from 'react-native';
import { DeepPartial } from 'ts-essentials';

import { useTheme } from '../../theme';
import { mergeStyles, ReplaceReturnType } from '../../utils/mergeStyles';
import { defaultLayout, useLayout } from './LayoutContext';
import { GetRowStyles, getRowStyles, RowStyles } from './Row.styles';

export interface RowProps {
  children: React.ReactNode;
  hasGutter?: boolean;
  hasMargin?: boolean;
  getStyles?: ReplaceReturnType<GetRowStyles, DeepPartial<RowStyles>>;
}

export const GutterWidthContext = React.createContext(
  defaultLayout.gutterWidth,
);

export const Row = (props: RowProps) => {
  const { children, hasMargin = true, hasGutter = true, getStyles } = props;
  const { gutterWidth } = useLayout();
  const theme = useTheme();

  const { rowStyle } = mergeStyles(getRowStyles, getStyles)(
    { gutterWidth, hasMargin, hasGutter },
    theme,
  );

  return (
    <View style={rowStyle}>
      <GutterWidthContext.Provider value={hasGutter ? gutterWidth : 0}>
        {children}
      </GutterWidthContext.Provider>
    </View>
  );
};
