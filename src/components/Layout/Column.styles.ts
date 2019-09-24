import { ViewStyle } from 'react-native';

import { Theme } from '../../theme/Theme';
import { ColumnConfig, ColumnConfigBase, ColumnProps } from './Column';
import {
  DESC_ORDER_SCREEN_SIZES,
  LayoutInterface,
  ScreenSize,
} from './LayoutContext';

export type GetColumnStyles = (
  props: ColumnProps & LayoutInterface,
  theme: Theme,
) => Partial<ColumnStyles>;

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

export const getColumnStyles: GetColumnStyles = ({
  gutterWidth,
  currentScreenSize,
  gridColumnCount,
  ...config
}) => {
  const { columns, offsetColumns } = splitColumnConfig(config);

  const columnCount = getColumnCount(columns, currentScreenSize);
  const flexBasis = getProportion(columnCount || 12, gridColumnCount);
  const offsetColumnCount = getColumnCount(offsetColumns, currentScreenSize);
  const marginLeft = getProportion(offsetColumnCount || 0, gridColumnCount);

  return {
    columnStyle: {
      flex: 1,
      flexBasis,
      marginLeft,
      maxWidth: flexBasis,
      paddingLeft: gutterWidth / 2,
      paddingRight: gutterWidth / 2,
    },
  };
};
