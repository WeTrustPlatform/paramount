import { ViewStyle } from 'react-native';

import { Theme } from '../../theme/ThemeInterface';

export interface IconTextInputStyles {
  inputStyle: ViewStyle;
  containerStyle: ViewStyle;
  leftContainerStyle: ViewStyle;
  rightContainerStyle: ViewStyle;
}

export interface GetIconTextInputStylesProps {
  hasLeftIcon: boolean;
  hasRightIcon: boolean;
}

export type GetIconTextInputStyles = (
  props: GetIconTextInputStylesProps,
  theme: Theme,
) => IconTextInputStyles;

export const getIconTextInputStyles: GetIconTextInputStyles = (
  props: GetIconTextInputStylesProps,
  theme,
) => {
  const { hasLeftIcon, hasRightIcon } = props;

  return {
    containerStyle: {
      position: 'relative',
    },
    inputStyle: {
      ...(hasLeftIcon && { paddingLeft: 48 }),
      ...(hasRightIcon && { paddingRight: 48 }),
    },
    leftContainerStyle: {
      alignItems: 'center',
      display: 'flex',
      height: '100%',
      justifyContent: 'center',
      left: 0,
      paddingHorizontal: 8,
      position: 'absolute',
    },
    rightContainerStyle: {
      alignItems: 'center',
      display: 'flex',
      height: '100%',
      justifyContent: 'center',
      paddingHorizontal: 8,
      position: 'absolute',
      right: 0,
    },
  };
};
