import * as React from 'react';
import { View } from 'react-native';
import { DeepPartial } from 'ts-essentials';

import { useTheme } from '../../theme';
import { mergeStyles, ReplaceReturnType } from '../../utils/mergeStyles';
import {
  ColumnStyles,
  GetColumnStyles,
  getColumnStyles,
} from './Column.styles';
import { ColumnCount, useLayout } from './LayoutContext';
import { GutterWidthContext } from './Row';

export interface ColumnConfigBase {
  /**
   * Number of columns to span over when screen size is xsmall
   */
  xsmall?: ColumnCount;

  /**
   * Number of columns to span over when screen size is small
   */
  small?: ColumnCount;

  /**
   * Number of columns to span over when screen size is medium
   */
  medium?: ColumnCount;

  /**
   * Number of columns to span over when screen size is large
   */
  large?: ColumnCount;

  /**
   * Number of columns to span over when screen size is xlarge
   */
  xlarge?: ColumnCount;
}

export interface ColumnConfig extends ColumnConfigBase {
  /**
   * Number of columns to offset when screen size is xsmall
   */
  offsetXsmall?: ColumnCount;

  /**
   * Number of columns to offset when screen size is small
   */
  offsetSmall?: ColumnCount;

  /**
   * Number of columns to offset when screen size is medium
   */
  offsetMedium?: ColumnCount;

  /**
   * Number of columns to offset when screen size is large
   */
  offsetLarge?: ColumnCount;

  /**
   * Number of columns to offset when screen size is xlarge
   */
  offsetXlarge?: ColumnCount;
}

export interface ColumnProps extends ColumnConfig {
  /** Content of the column. */
  children?: React.ReactNode;

  /** Callback to get element styles. */
  getStyles?: ReplaceReturnType<GetColumnStyles, DeepPartial<ColumnStyles>>;
}

export const Column = (props: ColumnProps) => {
  const { children, getStyles } = props;
  const layout = useLayout();
  const theme = useTheme();
  const gutterWidth = React.useContext(GutterWidthContext);

  const { columnStyle } = mergeStyles(
    getColumnStyles,
    getStyles,
    theme.components.getColumnStyles,
  )({ ...layout, ...props, gutterWidth }, theme);

  return <View style={columnStyle}>{children}</View>;
};
