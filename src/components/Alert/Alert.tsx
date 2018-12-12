import * as React from 'react';
import {
  FiAlertCircle,
  FiAlertTriangle,
  FiCheckCircle,
  FiInfo,
  FiX,
} from 'react-icons/fi';
import { TouchableOpacity, View } from 'react-native';

import { IntentType } from '../../constants/Intent';
import { ITheme, withTheme } from '../../theme';
import { IAlertStyles } from '../../theme/style-getters/getAlertStyles';
import { Spacing } from '../Layout';
import { Strong, Text } from '../Typography';

export interface IAlertProps {
  theme: ITheme;
  title?: string;
  message?: string;
  /* custom component, will take precedence over title and message */
  component?: React.ReactNode;
  onClose?: () => void;
  isCloseable?: boolean;
  icon?: React.ReactNode | null;
  intent?: IntentType;
  /**
   * Inline styles for components
   */
  dangerouslySetInlineStyle?: Partial<IAlertStyles>;
}

const resolveIcon = (intent: IntentType, theme: ITheme) => {
  switch (intent) {
    case 'success':
      return (
        <FiCheckCircle
          size={24}
          color={theme.themeVariables.colors.text.success}
        />
      );
    case 'warning':
      return (
        <FiAlertTriangle
          size={24}
          color={theme.themeVariables.colors.text.warning}
        />
      );
    case 'danger':
      return (
        <FiAlertCircle
          size={24}
          color={theme.themeVariables.colors.text.danger}
        />
      );
    default:
      return <FiInfo size={24} color={theme.themeVariables.colors.text.info} />;
  }
};

const AlertBase = (props: IAlertProps) => {
  const {
    title,
    message,
    component,
    onClose,
    isCloseable = false,
    icon,
    intent = 'info',
    dangerouslySetInlineStyle,
    theme,
  } = props;

  const { containerStyle, bodyStyle } = theme.getAlertStyles(intent);

  return (
    <View
      style={{
        ...containerStyle,
        ...(dangerouslySetInlineStyle &&
          dangerouslySetInlineStyle.containerStyle),
      }}
    >
      {icon || (
        <Spacing paddingRight={2} justifyContent="center">
          {resolveIcon(intent, theme)}
        </Spacing>
      )}
      {component || (
        <View
          style={{
            ...bodyStyle,
            ...(dangerouslySetInlineStyle &&
              dangerouslySetInlineStyle.bodyStyle),
          }}
        >
          <Strong>{title}</Strong>
          <Text>{message}</Text>
        </View>
      )}
      {isCloseable && (
        <TouchableOpacity onPress={onClose}>
          <Spacing paddingLeft={2}>
            <FiX size={24} color={theme.themeVariables.colors.text.default} />
          </Spacing>
        </TouchableOpacity>
      )}
    </View>
  );
};

export const Alert = withTheme(AlertBase);
export default Alert;
