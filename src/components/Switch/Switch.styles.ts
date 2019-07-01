import { ViewStyle } from 'react-native';

import { Theme } from '../../theme/Theme';
import { SwitchProps } from './Switch';

export interface SwitchStylesRequired {
  width: number;
  padding: number;
}

export interface SwitchStyles {
  touchableStyle: ViewStyle;
  containerStyle: ViewStyle & SwitchStylesRequired;
  circleStyle: ViewStyle & SwitchStylesRequired;
  backgroundColorOff: string;
  backgroundColorOn: string;
  circleColorOff: string;
  circleColorOn: string;
}

export type GetSwitchStyles = (
  props: SwitchProps,
  theme: Theme,
) => SwitchStyles;

export const getSwitchStyles: GetSwitchStyles = (props, theme) => {
  const { isDisabled = false } = props;

  return {
    backgroundColorOff: theme.colors.background.greyDefault,
    backgroundColorOn: isDisabled
      ? theme.colors.background.greyDefault
      : theme.colors.background.primaryDefault,
    circleColorOff: theme.colors.background.content,
    circleColorOn: theme.colors.background.content,

    circleStyle: {
      alignItems: 'center',
      backgroundColor: theme.colors.background.content,
      borderRadius: 24,
      display: 'flex',
      height: 38,
      justifyContent: 'center',
      padding: 0,
      width: 38,
    },
    containerStyle: {
      alignItems: 'center',
      backgroundColor: theme.colors.background.greyLight,
      borderRadius: 24,
      flexDirection: 'row',
      height: 44,
      padding: 3,
      width: 72,
    },
    touchableStyle: {
      alignSelf: 'flex-start',
      flexDirection: 'row',
      flexWrap: 'wrap',
    },
  };
};
