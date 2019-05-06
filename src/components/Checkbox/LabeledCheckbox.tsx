import * as React from 'react';

import { TextColor, TextSize } from '../../theme/ThemeInterface';
import { Checkbox, CheckboxProps } from '../Checkbox/Checkbox';
import { Box } from '../Layout';
import { Text } from '../Typography';

export interface LabeledCheckboxProps extends CheckboxProps {
  label?: string;
  position?: 'left' | 'right';
  color?: TextColor;
  size?: TextSize;
}

export const LabeledCheckbox = (props: LabeledCheckboxProps) => {
  const { label, position = 'right', color, size, ...restProps } = props;

  if (!label) {
    return <Checkbox {...restProps} />;
  }

  return (
    <Box flexDirection="row" alignItems="center">
      {position === 'left' && (
        <Text size={size} color={color}>
          {label}
        </Text>
      )}
      <Box paddingHorizontal={8}>
        <Checkbox {...restProps} />
      </Box>
      {position === 'right' && (
        <Text size={size} color={color}>
          {label}
        </Text>
      )}
    </Box>
  );
};
