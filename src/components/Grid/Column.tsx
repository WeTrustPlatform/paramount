import * as React from 'react';
import { View, ViewStyle } from 'react-native';
import { DeepPartial } from 'ts-essentials';

import { useTheme } from '../../theme';
import { mergeStyles, ReplaceReturnType } from '../../utils/mergeStyles';
import { GetColumnStyles, getColumnStyles } from './Column.styles';
import {
  ColumnCount,
  DESC_ORDER_BREAKPOINTS,
  FullBreakpoint,
  LayoutContext,
} from './LayoutContext';

interface ColumnStyles {
  outerWrapperStyle: ViewStyle;
  innerWrapperStyle: ViewStyle;
}

export interface ColumnConfigBase {
  xsmall?: ColumnCount;
  small?: ColumnCount;
  medium?: ColumnCount;
  large?: ColumnCount;
  xlarge?: ColumnCount;
}

export interface ColumnConfig extends ColumnConfigBase {
  offsetXsmall?: ColumnCount;
  offsetSmall?: ColumnCount;
  offsetMedium?: ColumnCount;
  offsetLarge?: ColumnCount;
  offsetXlarge?: ColumnCount;
}

export interface ColumnProps extends ColumnConfig {
  children?: React.ReactNode;
  hasGutter?: boolean;
  getStyles?: ReplaceReturnType<GetColumnStyles, DeepPartial<ColumnStyles>>;
}

// Find nearest matching column count
// when currentBreakpoint = xlarge and columns = { medium: 6 }, it should use medium column count
// when currentBreakpoint = small and columns = { medium: 6 }, it should return null
const getNearestColumn = (
  columns: ColumnConfigBase,
  currentBreakpoint: FullBreakpoint,
) => {
  const currentBreakpointIndex = DESC_ORDER_BREAKPOINTS.indexOf(
    currentBreakpoint,
  );

  const nearestBreakpoint = DESC_ORDER_BREAKPOINTS.find((breakpoint, index) => {
    if (currentBreakpointIndex >= index) return false;

    return !!columns[breakpoint];
  });

  return nearestBreakpoint ? columns[nearestBreakpoint] : null;
};

const getColumnCount = (
  columns: ColumnConfigBase,
  currentBreakpoint: FullBreakpoint,
) => {
  const matchedColumn = columns[currentBreakpoint];
  if (matchedColumn) return matchedColumn;

  const nearestColumn = getNearestColumn(columns, currentBreakpoint);
  if (nearestColumn) return nearestColumn;

  return null;
};

export const getProportion = (columnCount: number, gridColumnCount: number) => {
  const percentPerColumn = 100 / gridColumnCount;

  return `${columnCount * percentPerColumn}%`;
};

export const splitColumnConfig = (config: ColumnConfig) => {
  const {
    xsmall,
    small,
    medium,
    large,
    xlarge,
    offsetXsmall,
    offsetSmall,
    offsetMedium,
    offsetLarge,
    offsetXlarge,
  } = config;
  const columns = { xsmall, small, medium, large, xlarge };
  const offsetColumns = {
    large: offsetLarge,
    medium: offsetMedium,
    small: offsetSmall,
    xlarge: offsetXlarge,
    xsmall: offsetXsmall,
  };

  return { columns, offsetColumns };
};

export const Column = (props: ColumnProps) => {
  const { children, hasGutter = true, getStyles, ...config } = props;
  const { currentBreakpoint, gutterWidth, gridColumnCount } = React.useContext(
    LayoutContext,
  );
  const theme = useTheme();
  const { columns, offsetColumns } = splitColumnConfig(config);
  const { outerWrapperStyle, innerWrapperStyle } = mergeStyles(
    getColumnStyles,
    getStyles,
  )({ hasGutter, gutterWidth }, theme);

  const columnCount = getColumnCount(columns, currentBreakpoint);
  const flexBasis = getProportion(columnCount || 12, gridColumnCount);
  const offsetColumnCount = getColumnCount(offsetColumns, currentBreakpoint);
  const marginLeft = getProportion(offsetColumnCount || 0, gridColumnCount);

  return (
    <View
      style={{
        flexBasis,
        marginLeft,
        ...outerWrapperStyle,
      }}
    >
      <View style={innerWrapperStyle}>{children}</View>
    </View>
  );
};
