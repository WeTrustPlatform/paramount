import * as React from 'react';

import { withTheme } from '../../theme';
import { TextColor, TextSize } from '../../theme/ThemeInterface';
import Checkbox, { CheckboxProps } from '../Checkbox/Checkbox';
import { Box, Spacing } from '../Layout';
import { Text } from '../Typography';

export interface LabeledCheckboxProps extends CheckboxProps {
  label?: string;
  position?: 'left' | 'right';
  color?: TextColor;
  size?: TextSize;
}

const LabeledCheckboxBase = (props: LabeledCheckboxProps) => {
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
      <Spacing paddingHorizontal={1}>
        <Checkbox {...restProps} />
      </Spacing>
      {position === 'right' && (
        <Text size={size} color={color}>
          {label}
        </Text>
      )}
    </Box>
  );
};

export const LabeledCheckbox = withTheme(LabeledCheckboxBase);
export default LabeledCheckbox;
