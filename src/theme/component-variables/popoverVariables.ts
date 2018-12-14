import { ViewStyle } from 'react-native';

import { IThemeVariables } from '../ThemeInterface';

export interface IPopoverVariables {
  container: ViewStyle;
  popover: ViewStyle;
  modalContainer: ViewStyle;
  overlay: ViewStyle & { cursor?: string };
}

export const getPopoverVariables = (
  themeVariables: IThemeVariables,
): IPopoverVariables => {
  return {
    container: {
      alignSelf: 'flex-start',
      flexDirection: 'row',
      flexWrap: 'wrap',
    },
    modalContainer: {
      alignItems: 'center',
      display: 'flex',
      height: '100%',
      justifyContent: 'center',
      width: '100%',
    },
    overlay: {
      backgroundColor: 'transparent',
      bottom: 0,
      cursor: 'auto',
      height: '100%',
      left: 0,
      position: 'absolute',
      right: 0,
      top: 0,
      width: '100%',
    },
    popover: {
      backgroundColor: themeVariables.colors.background.plain,
      padding: 16,
      position: 'absolute',
      shadowColor: themeVariables.colors.text.dark,
      shadowOffset: { width: 1, height: 1 },
      shadowOpacity: 0.15,
      shadowRadius: 8,
      zIndex: 1,
    },
  };
};
