import { ImageStyle, TextStyle, ViewStyle } from 'react-native';

import { Fills, ThemeVariables } from '../ThemeInterface';

export interface AvatarVariables {
  fills: Fills;
  box: ViewStyle;
  text: TextStyle;
  image: ImageStyle;
}

export const getAvatarVariables = (
  themeVariables: ThemeVariables,
): AvatarVariables => {
  return {
    box: {
      alignItems: 'center',
      borderRadius: 9999,
      display: 'flex',
      justifyContent: 'center',
      overflow: 'hidden',
      position: 'relative',
    },

    image: {
      height: '100%',
      width: '100%',
    },

    text: {},

    fills: themeVariables.fills,
  };
};
