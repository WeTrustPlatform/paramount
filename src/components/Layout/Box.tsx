import * as React from 'react';
import { View, ViewStyle } from 'react-native';

import { ITheme, withTheme } from '../../theme';
import { Elevation } from '../../theme/ThemeInterface';

export const BASE_BORDER_RADII = 4;

export type AccessibilityRole =
  | 'alert'
  | 'alertdialog'
  | 'application'
  | 'article'
  | 'banner'
  | 'button'
  | 'cell'
  | 'checkbox'
  | 'columnheader'
  | 'combobox'
  | 'complementary'
  | 'contentinfo'
  | 'definition'
  | 'dialog'
  | 'directory'
  | 'document'
  | 'feed'
  | 'figure'
  | 'form'
  | 'grid'
  | 'gridcell'
  | 'group'
  | 'heading'
  | 'img'
  | 'link'
  | 'list'
  | 'listbox'
  | 'listitem'
  | 'log'
  | 'main'
  | 'marquee'
  | 'math'
  | 'men'
  | 'menuba'
  | 'menuitem'
  | 'menuitemcheckbox '
  | 'menuitemradio'
  | 'navigation'
  | 'none'
  | 'note'
  | 'option'
  | 'presentation'
  | 'progressbar'
  | 'radio'
  | 'radiogroup'
  | 'region'
  | 'row'
  | 'rowgroup'
  | 'rowheader'
  | 'scrollbar'
  | 'search'
  | 'separator'
  | 'slider'
  | 'spinbutton'
  | 'status'
  | 'switch'
  | 'tab'
  | 'table'
  | 'tablist'
  | 'tabpanel'
  | 'textbox'
  | 'timer'
  | 'tooltip'
  | 'tre'
  | 'tree'
  | 'treegri'
  | 'treeitem';

export type Shape =
  | 'circle'
  | 'pill'
  | 'rounded'
  | 'roundedBottom'
  | 'roundedLeft'
  | 'roundedRight'
  | 'roundedTop'
  | 'square';

export interface IBoxProps extends ViewStyle {
  theme: ITheme;
  accessibilityRole?: AccessibilityRole;
  children?: React.ReactNode;

  elevation?: Elevation;

  marginX?: number | string;
  marginY?: number | string;
  paddingX?: number | string;
  paddingY?: number | string;

  shape?: Shape;
}

const shapeMap = {
  circle: {
    borderRadius: '50%',
  },
  pill: {
    borderRadius: '999px',
  },
  rounded: {
    borderRadius: `${BASE_BORDER_RADII}px`,
  },
  roundedBottom: {
    borderRadius: `0 0 ${BASE_BORDER_RADII}px ${BASE_BORDER_RADII}px`,
  },
  roundedLeft: {
    borderRadius: `${BASE_BORDER_RADII}px 0 0 ${BASE_BORDER_RADII}px`,
  },
  roundedRight: {
    borderRadius: `0 ${BASE_BORDER_RADII}px ${BASE_BORDER_RADII}px 0`,
  },
  roundedTop: {
    borderRadius: `${BASE_BORDER_RADII}px ${BASE_BORDER_RADII}px 0 0`,
  },
  square: {
    borderRadius: '0',
  },
};

const propToFn = {
  elevation: (elevation: Elevation, theme: ITheme) => ({
    boxShadow: theme.themeVariables.elevations[elevation],
  }),
  marginX: (marginX: number) => ({
    marginLeft: marginX,
    marginRight: marginX,
  }),
  marginY: (marginY: number) => ({
    marginBottom: marginY,
    marginTop: marginY,
  }),
  paddingX: (paddingX: number) => ({
    paddingLeft: paddingX,
    paddingRight: paddingX,
  }),
  paddingY: (paddingY: number) => ({
    paddingBottom: paddingY,
    paddingTop: paddingY,
  }),
  shape: (shape: Shape) => shapeMap[shape],
};

const Box = ({ theme, ...props }: IBoxProps) => {
  const { children, accessibilityRole, ...viewStyles } = props;
  const transformedStyles = [];
  const pureStyles = {};

  for (const prop in viewStyles) {
    if (prop) {
      // @ts-ignore
      const styleFn = propToFn[prop];

      if (styleFn) {
        // @ts-ignore
        const style = styleFn(viewStyles[prop], theme);

        transformedStyles.push(style);
      } else {
        // @ts-ignore
        pureStyles[prop] = viewStyles[prop];
      }
    }
  }

  return <View style={[pureStyles, transformedStyles]}>{children}</View>;
};

export default withTheme(Box);
