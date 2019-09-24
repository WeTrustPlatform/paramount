import { ViewStyle } from 'react-native';

import { ControlSize, Theme } from '../../theme/Theme';
import { isControlSize } from '../../utils/isControlSize';
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
) => Partial<SwitchStyles>;

export const getCircleSize = (
  size: ControlSize | number = 'medium',
  theme: Theme,
) => {
  return isControlSize(size) ? theme.controlHeights[size] - 8 : size;
};

export const getContainerSize = (
  size: ControlSize | number = 'medium',
  theme: Theme,
) => {
  return getCircleSize(size, theme) * 2;
};

export const getSwitchStyles: GetSwitchStyles = (props, theme) => {
  const { isDisabled = false, size = 'medium' } = props;

  const circleSize = getCircleSize(size, theme);
  const containerSize = getContainerSize(size, theme);

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
      height: circleSize,
      justifyContent: 'center',
      padding: 0,
      width: circleSize,
    },
    containerStyle: {
      alignItems: 'center',
      backgroundColor: theme.colors.background.greyLight,
      borderRadius: 24,
      flexDirection: 'row',
      height: circleSize + 8,
      padding: 3,
      width: containerSize,
    },
    touchableStyle: {
      alignSelf: 'flex-start',
      flexDirection: 'row',
      flexWrap: 'wrap',
    },
  };
};
