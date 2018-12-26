import { ViewStyle } from 'react-native';

import { SwitchVariables } from '../component-variables/switchVariables';

export interface RequiredStyles {
  width: number;
  padding: number;
}

export type GetSwitchStyles = () => {
  containerStyle: ViewStyle & RequiredStyles;
  circleStyle: ViewStyle & RequiredStyles;
  backgroundColorOff: string;
  backgroundColorOn: string;
  circleColorOff: string;
  circleColorOn: string;
};

export const getSwitchStyles = (
  switchVariables: SwitchVariables,
): GetSwitchStyles => () => {
  return {
    backgroundColorOff: switchVariables.backgroundColorOff,
    backgroundColorOn: switchVariables.backgroundColorOn,
    circleColorOff: switchVariables.circleColorOff,
    circleColorOn: switchVariables.circleColorOn,
    circleStyle: switchVariables.circle,
    containerStyle: switchVariables.container,
  };
};
