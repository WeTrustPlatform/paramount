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
  getStyles?: ReplaceReturnType<GetColumnStyles, DeepPartial<ColumnStyles>>;
}

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
  const { children, getStyles, ...config } = props;
  const { currentScreenSize, gridColumnCount } = useLayout();
  const theme = useTheme();
  const gutterWidth = React.useContext(GutterWidthContext);

  const { columns, offsetColumns } = splitColumnConfig(config);
  const { columnStyle } = mergeStyles(
    getColumnStyles,
    getStyles,
    theme.components.getColumnStyles,
  )(
    { gutterWidth, currentScreenSize, gridColumnCount, columns, offsetColumns },
    theme,
  );

  return <View style={columnStyle}>{children}</View>;
};
