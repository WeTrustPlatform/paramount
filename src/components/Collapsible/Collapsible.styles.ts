import { TextStyle, ViewStyle } from 'react-native';

import { Theme } from '../../theme/Theme';
import { CollapsibleProps } from './Collapsible';

export interface CollapsibleStyles {
  touchableStyle: ViewStyle;
  outerWrapperStyle: ViewStyle;
  contentWrapperStyle: ViewStyle;
  textStyle: TextStyle;
  iconWrapperStyle: ViewStyle;
}

export type GetCollapsibleStyles = (
  props: CollapsibleProps,
  theme: Theme,
) => Partial<CollapsibleStyles>;

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
