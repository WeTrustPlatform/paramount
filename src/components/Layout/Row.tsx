import * as React from 'react';
import { View, ViewProps } from 'react-native';

import { getOverrides, Override } from '../../utils/overrides';
import { ColumnProps } from './Column';
import { defaultLayout, useLayout } from './LayoutContext';

export interface RowProps {
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
  override?: Override<RowProps, RootProps>;
}

export const GutterWidthContext = React.createContext(
  defaultLayout.gutterWidth,
);

export const Row = (props: RowProps) => {
  const { children, hasGutter = true, override } = props;
  const { gutterWidth } = useLayout();

  const [Root, rootProps] = getOverrides(StyledRoot, props, override);

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
