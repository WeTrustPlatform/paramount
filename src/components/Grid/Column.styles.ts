import { ViewStyle } from 'react-native';

import { Theme } from '../../theme/Theme';
import { ColumnConfigBase } from './Column';
import {
  ColumnCount,
  DESC_ORDER_SCREEN_SIZES,
  ScreenSize,
} from './LayoutContext';

export interface ColumnStylesProps {
  gutterWidth: number;
  currentScreenSize: ScreenSize;
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
// when currentScreenSize = xlarge and columns = { medium: 6 }, it should use medium column count
// when currentScreenSize = small and columns = { medium: 6 }, it should return null
const getNearestColumn = (
  columns: ColumnConfigBase,
  currentScreenSize: ScreenSize,
) => {
  const currentScreenSizeIndex = DESC_ORDER_SCREEN_SIZES.indexOf(
    currentScreenSize,
  );

  const nearestSize = DESC_ORDER_SCREEN_SIZES.find((screenSize, index) => {
    if (currentScreenSizeIndex > index) return false;

    return !!columns[screenSize];
  });

  return nearestSize ? columns[nearestSize] : null;
};

const getColumnCount = (
  columns: ColumnConfigBase,
  currentScreenSize: ScreenSize,
) => {
  const matchedColumn = columns[currentScreenSize];
  if (matchedColumn) return matchedColumn;

  const nearestColumn = getNearestColumn(columns, currentScreenSize);
  if (nearestColumn) return nearestColumn;

  return null;
};

export const getProportion = (columnCount: number, gridColumnCount: number) => {
  const percentPerColumn = 100 / gridColumnCount;

  return `${columnCount * percentPerColumn}%`;
};

export const getColumnStyles: GetColumnStyles = (
  { gutterWidth, currentScreenSize, gridColumnCount, columns, offsetColumns },
  theme,
) => {
  const columnCount = getColumnCount(columns, currentScreenSize);
  const flexBasis = getProportion(columnCount || 12, gridColumnCount);
  const offsetColumnCount = getColumnCount(offsetColumns, currentScreenSize);
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
