import * as React from 'react';
import { View } from 'react-native';
import { DeepPartial } from 'ts-essentials';

import { useTheme } from '../../theme';
import { mergeStyles, ReplaceReturnType } from '../../utils/mergeStyles';
import { GetRowStyles, getRowStyles, RowStyles } from './Row.styles';

export interface RowProps {
  children: React.ReactNode;
  getStyles?: ReplaceReturnType<GetRowStyles, DeepPartial<RowStyles>>;
}

export const Row = (props: RowProps) => {
  const { children, getStyles } = props;
  const theme = useTheme();

  const { rowStyle } = mergeStyles(getRowStyles, getStyles)(theme);

  return <View style={rowStyle}>{children}</View>;
};
