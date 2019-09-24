import { TextStyle } from 'react-native';

import { Theme } from '../../theme/Theme';
import { LabelProps } from './Label';
import { getTextStyles } from './Text.styles';

export interface LabelStyles {
  labelStyle: TextStyle;
}

export type GetLabelStyles = (
  props: LabelProps,
  theme: Theme,
) => Partial<LabelStyles>;

export const getLabelStyles: GetLabelStyles = (props, theme) => {
  const { getStyles, ...rest } = props;
  const { textStyle } = getTextStyles(rest, theme);

  return { labelStyle: textStyle };
};
