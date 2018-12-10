import * as React from 'react';

import { withTheme } from '../../theme';
import { TextColor, TextSize } from '../../theme/ThemeInterface';
import Checkbox, { ICheckboxProps } from '../Checkbox/Checkbox';
import { Box, GridBox } from '../Layout';
import { Text } from '../Typography';

export interface ILabeledCheckboxProps extends ICheckboxProps {
  label?: string;
  position?: 'left' | 'right';
  color?: TextColor;
  size?: TextSize;
}

const LabeledCheckboxBase = (props: ILabeledCheckboxProps) => {
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
      <GridBox paddingX={1}>
        <Checkbox {...restProps} />
      </GridBox>
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
