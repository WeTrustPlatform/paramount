import { ViewStyle } from 'react-native';

import { Theme } from '../../theme/Theme';

export interface CollapsibleStyles {
  touchableStyle: ViewStyle;
  outerWrapperStyle: ViewStyle;
  contentWrapperStyle: ViewStyle;
  textStyle: ViewStyle;
  iconWrapperStyle: ViewStyle;
}

export type GetCollapsibleStyles = (
  checkboxStylesProps: {},
  theme: Theme,
) => CollapsibleStyles;

export const getCollapsibleStyles: GetCollapsibleStyles = (props, theme) => {
  return {
    contentWrapperStyle: {
      overflow: 'hidden',
    },
    iconWrapperStyle: {
      paddingLeft: 4,
    },
    outerWrapperStyle: {
      alignItems: 'center',
      display: 'flex',
      flexDirection: 'row',
    },
    textStyle: {},
    touchableStyle: {},
  };
};
