import { ViewStyle } from 'react-native';

import { RequiredStyles } from '../style-getters/getSwitchStyles';
import { ThemeVariables } from '../ThemeInterface';

export interface SwitchVariables {
  backgroundColorOff: string;
  backgroundColorOn: string;
  circleColorOff: string;
  circleColorOn: string;

  container: ViewStyle & RequiredStyles;
  circle: ViewStyle & RequiredStyles;
}

export const getSwitchVariables = (
  themeVariables: ThemeVariables,
): SwitchVariables => {
  return {
    backgroundColorOff: themeVariables.colors.background.tint2,
    backgroundColorOn: themeVariables.colors.background.primary.default,
    circleColorOff: themeVariables.colors.background.plain,
    circleColorOn: themeVariables.colors.background.plain,

    circle: {
      alignItems: 'center',
      backgroundColor: themeVariables.colors.background.plain,
      borderRadius: 15,
      display: 'flex',
      height: 30,
      justifyContent: 'center',
      padding: 0,
      width: 30,
    },

    container: {
      alignItems: 'center',
      backgroundColor: themeVariables.colors.background.tint1,
      borderRadius: 18,
      flexDirection: 'row',
      height: 36,
      padding: 3,
      width: 56,
    },
  };
};
