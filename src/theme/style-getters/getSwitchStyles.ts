import { ViewStyle } from 'react-native';

import { ISwitchVariables } from '../component-variables/switchVariables';

export interface IRequiredStyles {
  width: number;
  padding: number;
}

export type GetSwitchStyles = () => {
  containerStyle: ViewStyle & IRequiredStyles;
  circleStyle: ViewStyle & IRequiredStyles;
  backgroundColorOff: string;
  backgroundColorOn: string;
  circleColorOff: string;
  circleColorOn: string;
};

export const getSwitchStyles = (
  switchVariables: ISwitchVariables,
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
