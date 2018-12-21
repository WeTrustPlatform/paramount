import * as React from 'react';

import { Icon } from '../../icons';
import { withTheme } from '../../theme';
import Button, { IButtonProps } from './Button';

const BackButton = (props: IButtonProps) => {
  const { theme } = props;
  return (
    <Button
      appearance="minimal"
      isInline
      iconBefore={
        <Icon
          name="arrow-left"
          size={24}
          color={theme.themeVariables.colors.text.default}
        />
      }
      size="small"
      {...props}
    />
  );
};

export default withTheme(BackButton);
