import { TextStyle, ViewStyle } from 'react-native';

import { Intent } from '../../constants/Intent';
import { Theme } from '../../theme';

export interface AlertStyles {
  containerStyle: ViewStyle;
  bodyStyle: ViewStyle;
  titleStyle: TextStyle;
  textStyle: TextStyle;
}

export interface AlertStyleProps {
  intent: Intent;
}

export type GetAlertStyles = (
  alertStyleProps: AlertStyleProps,
  theme: Theme,
) => AlertStyles;

export const getAlertStyles: GetAlertStyles = ({ intent }, theme) => {
  return {
    bodyStyle: {
      flex: 1,
    },
    containerStyle: {
      backgroundColor: theme.colors.background.content,
      borderLeftColor: theme.colors.border[intent],
      borderLeftWidth: 5,
      borderRadius: theme.controlBorderRadius.medium,
      display: 'flex',
      flexDirection: 'row',
      padding: 16,
      ...theme.elevations[2],
    },
    textStyle: {},
    titleStyle: {},
  };
};
