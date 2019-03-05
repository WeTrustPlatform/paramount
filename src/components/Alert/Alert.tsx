import * as React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { DeepPartial } from 'ts-essentials';

import { Intent } from '../../constants/Intent';
import { Icon } from '../../icons';
import { Theme, withTheme } from '../../theme';
import { mergeStyles, ReplaceReturnType } from '../../utils/mergeStyles';
import { Spacing } from '../Layout';
import { Text } from '../Typography';
import { AlertStyles, GetAlertStyles, getAlertStyles } from './Alert.styles';

export interface AlertProps {
  theme: Theme;
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

const AlertBase = (props: AlertProps) => {
  const {
    title,
    description,
    component,
    onClose,
    isCloseable = false,
    icon,
    intent = 'info',
    getStyles,
    theme,
    testID,
  } = props;

  const { containerStyle, bodyStyle } = mergeStyles(getAlertStyles, getStyles)(
    { intent },
    theme,
  );

  return (
    <View style={containerStyle} testID={testID}>
      {icon || (
        <Spacing paddingRight={2} justifyContent="center">
          {resolveIcon(intent, theme)}
        </Spacing>
      )}
      {component || (
        <View style={bodyStyle}>
          <Text bold>{title}</Text>
          <Text>{description}</Text>
        </View>
      )}
      {isCloseable && (
        <TouchableOpacity onPress={onClose}>
          <Spacing paddingLeft={2}>
            <Icon name="x" size={24} color={theme.colors.text.default} />
          </Spacing>
        </TouchableOpacity>
      )}
    </View>
  );
};

export const Alert = withTheme(AlertBase);
export default Alert;
