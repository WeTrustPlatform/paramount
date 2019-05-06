import * as React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { DeepPartial } from 'ts-essentials';

import { Intent } from '../../constants/Intent';
import { Icon } from '../../icons';
import { Theme, useTheme } from '../../theme';
import { mergeStyles, ReplaceReturnType } from '../../utils/mergeStyles';
import { Box } from '../Layout';
import { Text } from '../Typography';
import { AlertStyles, GetAlertStyles, getAlertStyles } from './Alert.styles';

export interface AlertProps {
  title?: string;
  description?: string;
  testID?: string;
  /* custom component, will take precedence over title and description */
  component?: React.ReactNode;
  onClose?: () => void;
  isCloseable?: boolean;
  icon?: React.ReactNode | null;
  intent?: Intent;

  getStyles?: ReplaceReturnType<GetAlertStyles, DeepPartial<AlertStyles>>;
}

const resolveIcon = (intent: Intent, theme: Theme) => {
  switch (intent) {
    case 'success':
      return (
        <Icon name="check-circle" size={24} color={theme.colors.text.success} />
      );
    case 'warning':
      return (
        <Icon
          name="alert-triangle"
          size={24}
          color={theme.colors.text.warning}
        />
      );
    case 'danger':
      return (
        <Icon name="alert-circle" size={24} color={theme.colors.text.danger} />
      );
    default:
      return <Icon name="info" size={24} color={theme.colors.text.info} />;
  }
};

export const Alert = (props: AlertProps) => {
  const {
    title,
    description,
    component,
    onClose,
    isCloseable = false,
    icon,
    intent = 'info',
    getStyles,
    testID,
  } = props;

  const theme = useTheme();

  const { containerStyle, bodyStyle } = mergeStyles(getAlertStyles, getStyles)(
    { intent },
    theme,
  );

  return (
    <View style={containerStyle} testID={testID}>
      {icon || (
        <Box paddingRight={16} justifyContent="center">
          {resolveIcon(intent, theme)}
        </Box>
      )}
      {component || (
        <View style={bodyStyle}>
          <Text isBold>{title}</Text>
          <Text>{description}</Text>
        </View>
      )}
      {isCloseable && (
        <TouchableOpacity onPress={onClose}>
          <Box paddingLeft={16}>
            <Icon name="x" size={24} color={theme.colors.text.default} />
          </Box>
        </TouchableOpacity>
      )}
    </View>
  );
};
