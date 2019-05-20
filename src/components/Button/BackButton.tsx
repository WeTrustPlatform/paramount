import * as React from 'react';

import { useTheme } from '../../theme';
import { Icon } from '../Icon';
import { Button, ButtonProps } from './Button';

export const BackButton = (props: ButtonProps) => {
  const theme = useTheme();

  return (
    <Button
      appearance="minimal"
      isInline
      iconBefore={
        <Icon name="arrow-left" size={24} color={theme.colors.text.default} />
      }
      size="small"
      {...props}
    />
  );
};
