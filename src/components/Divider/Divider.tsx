import * as React from 'react';
import { View } from 'react-native';
import { DeepPartial } from 'ts-essentials';

import { ThemeContext } from '../../theme';
import { mergeStyles, ReplaceReturnType } from '../../utils/mergeStyles';
import {
  DividerPosition,
  DividerStyles,
  GetDividerStyles,
  getDividerStyles,
} from './Divider.styles';

export interface DividerProps {
  size?: number;
  color?: string;
  position?: DividerPosition;
  getStyles?: ReplaceReturnType<GetDividerStyles, DeepPartial<DividerStyles>>;
}

const DividerBase = (props: DividerProps) => {
  const { size, color, position = 'horizontal', getStyles } = props;
  const theme = React.useContext(ThemeContext);

  const { dividerStyle } = mergeStyles(getDividerStyles, getStyles)(
    { size, color, position },
    theme,
  );

  return <View style={dividerStyle} />;
};

export const Divider = DividerBase;

export default Divider;
