import * as React from 'react';

import { Theme, withTheme } from '../../theme';
import { Button, ButtonGroup, ButtonProps } from '../Button';
import { Drawer } from '../Drawer';
import { Box, Spacing } from '../Layout';

export interface DrawerMenuProps {
  theme: Theme;
  /** To show dialog or not */
  isVisible?: boolean;
  /** Called when clicking on overlay or pressing Esc */
  onClose?: () => void;
  /** List of menu options, which also take `ButtonProps` */
  options?: ButtonProps[];
}

const DrawerMenuBase = (props: DrawerMenuProps) => {
  const { options = [], isVisible, onClose, theme } = props;

  return (
    <Drawer isVisible={isVisible} onClose={onClose}>
      <Spacing padding={3}>
        <Box
          elevation={1}
          borderRadius={theme.controlBorderRadius.medium}
          borderWidth={1}
          borderColor={theme.colors.border.default}
        >
          <ButtonGroup>
            {options.map(option => (
              <Button key={option.title} {...option} />
            ))}
          </ButtonGroup>
        </Box>
        <Spacing paddingTop={3}>
          <Button onPress={onClose} title="Close" />
        </Spacing>
      </Spacing>
    </Drawer>
  );
};

export const DrawerMenu = withTheme(DrawerMenuBase);
export default DrawerMenu;
