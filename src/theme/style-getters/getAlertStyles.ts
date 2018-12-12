import { TextStyle, ViewStyle } from 'react-native';

import { IntentType } from '../../constants/Intent';
import { IAlertVariables } from '../component-variables/alertVariables';

export interface IAlertStyles {
  containerStyle: ViewStyle;
  bodyStyle: ViewStyle;
  titleStyle: TextStyle;
  textStyle: TextStyle;
}

export type GetAlertStyles = (intent: IntentType) => IAlertStyles;

export const getAlertStyles = (
  alertVariables: IAlertVariables,
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
