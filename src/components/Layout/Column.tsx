import dlv from 'dlv';
import * as React from 'react';
import { View, ViewProps } from 'react-native';

import { useTheme } from '../../theme';
import { getOverrides, Override } from '../../utils/overrides';
import {
  ColumnCount,
  DESC_ORDER_SCREEN_SIZES,
  ScreenSize,
  useLayout,
} from './LayoutContext';
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

export interface ColumnProps extends ColumnConfig, ViewProps {
  /** Content of the column. */
  children?: React.ReactNode;

  /**
   * Overrides
   */
  override?: ColumnOverride;
}

export type ColumnOverride = Override<ColumnProps, RootProps>;

export const Column = (props: ColumnProps) => {
  const { children, override, ...config } = props;
  const theme = useTheme();
  const [Root, rootProps] = getOverrides(
    StyledRoot,
    props,
    dlv(theme, 'overrides.Column'),
    override,
  );

  return (
    <Root {...config} {...rootProps}>
      {children}
    </Root>
  );
};

interface RootProps extends ViewProps, ColumnConfig {
  children?: React.ReactNode;
}

const StyledRoot = (props: RootProps) => {
  const {
    children,
    style,
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
    ...viewProps
  } = props;
  const config = {
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
  };
  const { currentScreenSize, gridColumnCount } = useLayout();
  const gutterWidth = React.useContext(GutterWidthContext);

  const { columns, offsetColumns } = splitColumnConfig(config);

  const columnCount = getColumnCount(columns, currentScreenSize);
  const flexBasis = getProportion(columnCount || 12, gridColumnCount);
  const offsetColumnCount = getColumnCount(offsetColumns, currentScreenSize);
  const marginLeft = getProportion(offsetColumnCount || 0, gridColumnCount);

  return (
    <View
      style={[
        {
          flex: 1,
          flexBasis,
          marginLeft,
          maxWidth: flexBasis,
          paddingLeft: gutterWidth / 2,
          paddingRight: gutterWidth / 2,
        },
        style,
      ]}
      {...viewProps}
    >
      {children}
    </View>
  );
};

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
