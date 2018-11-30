import { ViewStyle } from 'react-native';

import { IRequiredStyles } from '../style-getters/getSwitchStyles';
import { IThemeVariables } from '../ThemeInterface';

export interface ISwitchVariables {
  backgroundColorOff: string;
  backgroundColorOn: string;
  circleColorOff: string;
  circleColorOn: string;

  container: ViewStyle & IRequiredStyles;
  circle: ViewStyle & IRequiredStyles;
}

export const getSwitchVariables = (
  themeVariables: IThemeVariables,
): ISwitchVariables => {
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
      backgroundColor: themeVariables.colors.background.tint1,
      borderRadius: 18,
      height: 36,
      padding: 3,
      width: 56,
    },
  };
};
