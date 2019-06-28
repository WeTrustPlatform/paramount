import * as React from 'react';
import { View } from 'react-native';
import { DeepPartial } from 'ts-essentials';

import { useTheme } from '../../theme';
import { mergeStyles, ReplaceReturnType } from '../../utils/mergeStyles';
import { Box } from '../Box';
import { Icon } from '../Icon';
import { Text } from '../Typography';
import { AlertStyles, GetAlertStyles, getAlertStyles } from './Alert.styles';

export type Intent = 'danger' | 'info' | 'success' | 'warning';

/**
 * Alert properties
 */
export interface AlertProps {
  /** Title of the alert. */
  title?: string;

  /** Description of the alert. */
  description?: string;

  /** Replace the icon of the alert on the left. Set to null to remove icon */
  icon?: React.ReactNode;

  /**
   * Intent of the alert.
   * @default info
   */
  intent?: Intent;

  /**
   * Component display on the right side of the alert.
   * @default null
   */
  action?: React.ReactNode;

  /** Callback to get element styles. */
  getStyles?: ReplaceReturnType<GetAlertStyles, DeepPartial<AlertStyles>>;

  /** Used to locate this view in end-to-end tests. */
  testID?: string;
}

const resolveIcon = (intent: Intent) => {
  switch (intent) {
    case 'success':
      return <Icon name="check-circle" size={24} color="success" />;
    case 'warning':
      return <Icon name="alert-triangle" size={24} color="warning" />;
    case 'danger':
      return <Icon name="alert-circle" size={24} color="danger" />;
    default:
      return <Icon name="info" size={24} color="info" />;
  }
};

/**
 * Alert with intent
 */
export const Alert = (props: AlertProps) => {
  const {
    title,
    description,
    icon,
    intent = 'info',
    getStyles,
    testID,
    action = null,
  } = props;

  const theme = useTheme();

  const {
    leftWrapperStyle,
    containerStyle,
    bodyStyle,
    descriptionStyle,
    titleStyle,
  } = mergeStyles(getAlertStyles, getStyles, theme.components.getAlertStyles)(
    { intent },
    theme,
  );

  return (
    <View style={containerStyle} testID={testID}>
      <View style={leftWrapperStyle}>
        {icon === null
          ? null
          : icon || (
              <Box paddingRight={16} justifyContent="center">
                {resolveIcon(intent)}
              </Box>
            )}
        <View style={bodyStyle}>
          <Text getStyles={() => ({ textStyle: titleStyle })} weight="bold">
            {title}
          </Text>
          <Text getStyles={() => ({ textStyle: descriptionStyle })}>
            {description}
          </Text>
        </View>
      </View>
      {action}
    </View>
  );
};
