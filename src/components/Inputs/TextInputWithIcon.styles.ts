import { ViewStyle } from 'react-native';

import { Theme } from '../../theme/ThemeInterface';

export interface TextInputWithIconStyles {
  containerStyle: ViewStyle;
  leftContainerStyle: ViewStyle;
  rightContainerStyle: ViewStyle;
}

export type GetTextInputWithIconStyles = (
  theme: Theme,
) => TextInputWithIconStyles;

export const getTextInputWithIconStyles: GetTextInputWithIconStyles = theme => {
  return {
    containerStyle: {
      position: 'relative',
    },
    leftContainerStyle: {
      alignItems: 'center',
      display: 'flex',
      height: '100%',
      justifyContent: 'center',
      paddingHorizontal: 8,
      position: 'absolute',
      right: 0,
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
