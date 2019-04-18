import * as React from 'react';

import { useTheme } from '../../theme';
import { Button, ButtonProps } from '../Button';
import { Drawer } from '../Drawer';
import { Box, Spacing } from '../Layout';

export interface DrawerMenuProps {
  /** To show dialog or not */
  isVisible?: boolean;
  /** Called when clicking on overlay or pressing Esc */
  onClose?: () => void;
  /** List of menu options, which also take `ButtonProps` */
  options?: ButtonProps[];
}

export const DrawerMenu = (props: DrawerMenuProps) => {
  const { options = [], isVisible, onClose } = props;
  const theme = useTheme();

  return (
    <Drawer isVisible={isVisible} onClose={onClose}>
      <Spacing padding={3}>
        <Box
          elevation={1}
          borderRadius={theme.controlBorderRadius.medium}
          borderWidth={1}
          borderColor={theme.colors.border.default}
        >
          {options.map(option => (
            <Button key={option.title} {...option} />
          ))}
        </Box>
        <Spacing paddingTop={3}>
          <Button onPress={onClose} title="Close" />
        </Spacing>
      </Spacing>
    </Drawer>
  );
};
