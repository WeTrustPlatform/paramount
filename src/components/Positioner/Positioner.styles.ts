import { ViewStyle } from 'react-native';

import { Theme } from '../../theme/Theme';

export interface PositionerStyles {
  positionerStyle: ViewStyle;
  containerStyle: ViewStyle;
}

export interface PositionerStyleProps {
  isPositionerMeasurementsMeasured: boolean;
}

export type GetPositionerStyles = (
  props: PositionerStyleProps,
  theme: Theme,
) => Partial<PositionerStyles>;

export const getPositionerStyles: GetPositionerStyles = (props, theme) => {
  const { isPositionerMeasurementsMeasured } = props;

  return {
    containerStyle: {},
    positionerStyle: {
      opacity: isPositionerMeasurementsMeasured ? 1 : 0,
      position: 'absolute',
      zIndex: 1,
    },
  };
};
