import { TextStyle, ViewStyle } from 'react-native';

import { Intent } from '../../constants/Intent';
import { AlertVariables } from '../component-variables/alertVariables';

export interface AlertStyles {
  containerStyle: ViewStyle;
  bodyStyle: ViewStyle;
  titleStyle: TextStyle;
  textStyle: TextStyle;
}

export type GetAlertStyles = (intent: Intent) => AlertStyles;

export const getAlertStyles = (
  alertVariables: AlertVariables,
): GetAlertStyles => intent => {
  const { container, body, title, message, ...intents } = alertVariables;

  const intentStyle = intents[intent];

  return {
    bodyStyle: {
      ...body,
      ...intentStyle.body,
    },
    containerStyle: {
      ...container,
      ...intentStyle.container,
    },
    textStyle: {
      ...message,
      ...intentStyle.message,
    },
    titleStyle: {
      ...title,
      ...intentStyle.title,
    },
  };
};
