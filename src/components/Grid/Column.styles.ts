import { ViewStyle } from 'react-native';

import { Theme } from '../../theme/ThemeInterface';
import { ColumnConfigBase } from './Column';
import {
  ColumnCount,
  DESC_ORDER_LAYOUT_SIZES,
  LayoutSize,
} from './LayoutContext';

export interface ColumnStylesProps {
  gutterWidth: number;
  currentSize: LayoutSize;
  gridColumnCount: ColumnCount;
  columns: ColumnConfigBase;
  offsetColumns: ColumnConfigBase;
}

export type GetColumnStyles = (
  progressStylesProps: ColumnStylesProps,
  theme: Theme,
) => ColumnStyles;

export interface ColumnStyles {
  columnStyle: ViewStyle;
}

// Find nearest matching column count
// when currentSize = xlarge and columns = { medium: 6 }, it should use medium column count
// when currentSize = small and columns = { medium: 6 }, it should return null
const getNearestColumn = (
  columns: ColumnConfigBase,
  currentSize: LayoutSize,
) => {
  const currentSizeIndex = DESC_ORDER_LAYOUT_SIZES.indexOf(currentSize);

  const nearestSize = DESC_ORDER_LAYOUT_SIZES.find((breakpoint, index) => {
    if (currentSizeIndex >= index) return false;

    return !!columns[breakpoint];
  });

  return nearestSize ? columns[nearestSize] : null;
};

const getColumnCount = (columns: ColumnConfigBase, currentSize: LayoutSize) => {
  const matchedColumn = columns[currentSize];
  if (matchedColumn) return matchedColumn;

  const nearestColumn = getNearestColumn(columns, currentSize);
  if (nearestColumn) return nearestColumn;

  return null;
};

export const getProportion = (columnCount: number, gridColumnCount: number) => {
  const percentPerColumn = 100 / gridColumnCount;

  return `${columnCount * percentPerColumn}%`;
};

export const getColumnStyles: GetColumnStyles = (
  { gutterWidth, currentSize, gridColumnCount, columns, offsetColumns },
  theme,
) => {
  const columnCount = getColumnCount(columns, currentSize);
  const flexBasis = getProportion(columnCount || 12, gridColumnCount);
  const offsetColumnCount = getColumnCount(offsetColumns, currentSize);
  const marginLeft = getProportion(offsetColumnCount || 0, gridColumnCount);

  return {
    columnStyle: {
      flexBasis,
      marginLeft,
      maxWidth: flexBasis,
      paddingLeft: gutterWidth / 2,
      paddingRight: gutterWidth / 2,
    },
  };
};
