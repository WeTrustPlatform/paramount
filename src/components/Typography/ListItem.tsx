import * as React from 'react';
import { View } from 'react-native';

import { withTheme } from '../../theme';
import { TextColor, TextSize } from '../../theme/ThemeInterface';
import { GridBox } from '../Layout';
import Text, { ITextProps } from './Text';

const paddingLeftMap = {
  large: 3,
  medium: 2,
  small: 2,
  xsmall: 1,
};

export interface IListItemProps {
  icon?: React.ReactNode;
  children: React.ReactNode;
  index?: number | null;
  iconColor?: TextColor;
  size?: TextSize;
}

const ListItemBase = (props: ITextProps & IListItemProps) => {
  const { size = 'medium', index, icon, iconColor, ...textProps } = props;

  const paddingLeft = paddingLeftMap[size] as 1 | 2 | 3;

  const mark = index ? (
    <Text size={size} {...textProps}>{`${index}.`}</Text>
  ) : icon ? (
    icon
  ) : null;

  return (
    <View
      // @ts-ignore
      accessibilityRole="listitem"
    >
      <GridBox flexDirection="row" alignItems="center" marginY={1}>
        <GridBox>{mark}</GridBox>
        <GridBox width="100%" paddingLeft={paddingLeft}>
          <Text isInline size={size} {...textProps} />
        </GridBox>
      </GridBox>
    </View>
  );
};

export const ListItem = withTheme(ListItemBase);
export default ListItem;
