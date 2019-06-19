import { TextStyle, ViewStyle } from 'react-native';

import { Theme } from '../../theme';
import { AlertProps } from './Alert';

export interface AlertStyles {
  containerStyle: ViewStyle;
  bodyStyle: ViewStyle;
  titleStyle: TextStyle;
  descriptionStyle: TextStyle;
}

export type GetAlertStyles = (props: AlertProps, theme: Theme) => AlertStyles;

export const getAlertStyles: GetAlertStyles = ({ intent = 'info' }, theme) => {
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
    descriptionStyle: {},
    titleStyle: {},
  };
};
