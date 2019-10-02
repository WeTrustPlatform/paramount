import dlv from 'dlv';
import * as React from 'react';
import { View, ViewProps, ViewStyle } from 'react-native';

import { useTheme } from '../../theme';
import { getStyle, OverrideStyle, Style } from '../../utils/overrides';
import { ColumnProps } from './Column';
import { defaultLayout, useLayout } from './LayoutContext';

export interface RowProps extends Omit<ViewProps, 'style'> {
  /**
   * When true, there will be gutter between columns
   * @default true
   */
  hasGutter?: boolean;

  /**
   * `Column` components
   */
  children:
    | Array<React.ReactElement<ColumnProps>>
    | React.ReactElement<ColumnProps>;

  /**
   * Style callback or ViewStyle object
   */
  style?: Style<RowProps, ViewStyle>;
}

export type RowOverride = OverrideStyle<RowProps, ViewStyle>;

export const GutterWidthContext = React.createContext(
  defaultLayout.gutterWidth,
);

export const Row = (props: RowProps) => {
  const { children, hasGutter = true, style, ...viewProps } = props;
  const { gutterWidth } = useLayout();
  const theme = useTheme();

  return (
    <View
      style={[
        {
          flexDirection: 'row',
          flexWrap: 'wrap',
          marginLeft: hasGutter ? -gutterWidth / 2 : 0,
          marginRight: hasGutter ? -gutterWidth / 2 : 0,
        },
        getStyle(props, style),
        getStyle(props, dlv(theme, 'overrides.Row.style')),
      ]}
      {...viewProps}
    >
      <GutterWidthContext.Provider value={hasGutter ? gutterWidth : 0}>
        {children}
      </GutterWidthContext.Provider>
    </View>
  );
};
