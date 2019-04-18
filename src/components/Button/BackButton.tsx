import * as React from 'react';

import { Icon } from '../../icons';
import { useTheme } from '../../theme';
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
