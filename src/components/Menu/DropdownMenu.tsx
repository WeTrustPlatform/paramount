import * as React from 'react';

import { useTheme } from '../../theme';
import { Button, ButtonProps } from '../Button';
import { Measurements, ViewMeasure } from '../Helpers';
import { Box } from '../Layout';
import { Positioner } from '../Positioner';

export interface DropdownMenuProps {
  children: React.ReactNode;
  /** To show dialog or not */
  isVisible?: boolean;
  /** Called when clicking on overlay or pressing Esc */
  onClose?: () => void;
  /** List of menu options, which also take `ButtonProps` */
  options?: ButtonProps[];
}

export interface DropdownMenuState {
  targetMeasurements: Measurements;
}

export const DropdownMenu = (props: DropdownMenuProps) => {
  const { options = [], isVisible, onClose, children } = props;
  const [targetMeasurements, setTargetMeasurements] = React.useState({
    height: 0,
    pageX: 0,
    pageY: 0,
    width: 0,
    x: 0,
    y: 0,
  });
  const theme = useTheme();

  return (
    <Positioner
      position="bottom"
      content={() => (
        <Box
          elevation={1}
          borderRadius={theme.controlBorderRadius.medium}
          borderWidth={1}
          borderColor={theme.colors.border.default}
          width={targetMeasurements.width}
        >
          {options.map(option => (
            <Button key={option.title} {...option} />
          ))}
        </Box>
      )}
      isVisible={isVisible}
      onClose={onClose}
    >
      <ViewMeasure onMeasure={setTargetMeasurements}>{children}</ViewMeasure>
    </Positioner>
  );
};
