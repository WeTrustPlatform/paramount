import * as React from 'react';

import { Theme, withTheme } from '../../theme';
import { DrawerMenuStyles } from '../../theme/style-getters/getDrawerMenuStyles';
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
  /**
   * Inline styles for components
   */
  dangerouslySetInlineStyle?: Partial<DrawerMenuStyles>;
}

const DrawerMenuBase = (props: DrawerMenuProps) => {
  const { options = [], isVisible, onClose, theme } = props;

  return (
    <Drawer isVisible={isVisible} onClose={onClose}>
      <Spacing padding={3}>
        <Box
          elevation={1}
          borderRadius={theme.themeVariables.controlBorderRadius.medium}
          borderWidth={1}
          borderColor={theme.themeVariables.colors.border.default}
        >
          <ButtonGroup>
            {options.map(option => (
              <Button key={option.children} {...option} />
            ))}
          </ButtonGroup>
        </Box>
        <Spacing paddingTop={3}>
          <Button onPress={onClose}>Close</Button>
        </Spacing>
      </Spacing>
    </Drawer>
  );
};

export const DrawerMenu = withTheme(DrawerMenuBase);
export default DrawerMenu;
