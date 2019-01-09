import * as React from 'react';

import { Theme, withTheme } from '../../theme';
import { OverlayMenuStyles } from '../../theme/style-getters/getOverlayMenuStyles';

export interface OverlayMenuProps {
  children: React.ReactNode;
  theme: Theme;
  /** To show dialog or not */
  isVisible?: boolean;
  /** Called when clicking on overlay or pressing Esc */
  onClose?: () => void;
  /**
   * Inline styles for components
   */
  dangerouslySetInlineStyle?: Partial<OverlayMenuStyles>;
}

const OverlayMenuBase = (props: OverlayMenuProps) => {
  return null;
};

export const OverlayMenu = withTheme(OverlayMenuBase);
export default OverlayMenu;
