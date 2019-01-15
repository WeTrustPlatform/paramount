import { ViewStyle } from 'react-native';

import { Theme } from '../../theme/ThemeInterface';

export interface SwitchVariables {
  backgroundColorOff: string;
  backgroundColorOn: string;
  circleColorOff: string;
  circleColorOn: string;

  container: ViewStyle & SwitchStylesRequired;
  circle: ViewStyle & SwitchStylesRequired;
}

export const getSwitchVariables = (theme: Theme): SwitchVariables => {
  return {
    backgroundColorOff: theme.colors.background.tint2,
    backgroundColorOn: theme.colors.background.primary.default,
    circleColorOff: theme.colors.background.plain,
    circleColorOn: theme.colors.background.plain,

    circle: {
      alignItems: 'center',
      backgroundColor: theme.colors.background.plain,
      borderRadius: 24,
      display: 'flex',
      height: 38,
      justifyContent: 'center',
      padding: 0,
      width: 38,
    },

    container: {
      alignItems: 'center',
      backgroundColor: theme.colors.background.tint1,
      borderRadius: 24,
      flexDirection: 'row',
      height: 44,
      padding: 3,
      width: 72,
    },
  };
};

export interface SwitchStylesRequired {
  width: number;
  padding: number;
}

export interface SwitchStyles {
  containerStyle: ViewStyle & SwitchStylesRequired;
  circleStyle: ViewStyle & SwitchStylesRequired;
  backgroundColorOff: string;
  backgroundColorOn: string;
  circleColorOff: string;
  circleColorOn: string;
}
export type GetSwitchStyles = (theme: Theme) => SwitchStyles;

export const getSwitchStyles: GetSwitchStyles = (theme: Theme) => {
  const switchVariables = getSwitchVariables(theme);

  return {
    backgroundColorOff: switchVariables.backgroundColorOff,
    backgroundColorOn: switchVariables.backgroundColorOn,
    circleColorOff: switchVariables.circleColorOff,
    circleColorOn: switchVariables.circleColorOn,
    circleStyle: switchVariables.circle,
    containerStyle: switchVariables.container,
  };
};
