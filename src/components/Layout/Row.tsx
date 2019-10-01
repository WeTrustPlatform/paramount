import dlv from 'dlv';
import * as React from 'react';
import { View, ViewProps } from 'react-native';

import { useTheme } from '../../theme';
import { getOverrides, Override } from '../../utils/overrides';
import { ColumnProps } from './Column';
import { defaultLayout, useLayout } from './LayoutContext';

export interface RowProps extends ViewProps {
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
   * Overrides
   */
  override?: RowOverride;
}

export type RowOverride = Override<RowProps, RootProps>;

export const GutterWidthContext = React.createContext(
  defaultLayout.gutterWidth,
);

export const Row = (props: RowProps) => {
  const { children, hasGutter = true, override } = props;
  const { gutterWidth } = useLayout();
  const theme = useTheme();

  const [Root, rootProps] = getOverrides(
    StyledRoot,
    props,
    dlv(theme, 'overrides.Row'),
    override,
  );

  return (
    <Root hasGutter={hasGutter} {...rootProps}>
      <GutterWidthContext.Provider value={hasGutter ? gutterWidth : 0}>
        {children}
      </GutterWidthContext.Provider>
    </Root>
  );
};

interface RootProps extends ViewProps {
  children?: React.ReactNode;
  hasGutter: boolean;
}

const StyledRoot = (props: RootProps) => {
  const { children, style, hasGutter, ...viewProps } = props;
  const { gutterWidth } = useLayout();

  return (
    <View
      style={[
        {
          flexDirection: 'row',
          flexWrap: 'wrap',
          marginLeft: hasGutter ? -gutterWidth / 2 : 0,
          marginRight: hasGutter ? -gutterWidth / 2 : 0,
        },
        style,
      ]}
      {...viewProps}
    >
      {children}
    </View>
  );
};
