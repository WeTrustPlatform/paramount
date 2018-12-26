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
      borderRadius: 24,
      display: 'flex',
      height: 38,
      justifyContent: 'center',
      padding: 0,
      width: 38,
    },

    container: {
      alignItems: 'center',
      backgroundColor: themeVariables.colors.background.tint1,
      borderRadius: 24,
      flexDirection: 'row',
      height: 44,
      padding: 3,
      width: 72,
    },
  };
};
