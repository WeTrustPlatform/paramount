import * as React from 'react';
import { View, ViewProps } from 'react-native';

import { useTheme } from '../../theme';
import { getOverrides, WithOverrides } from '../../utils/overrides';
import {
  Positioner,
  PositionerBaseProps,
  PositionerOverrides,
} from '../Positioner';

export interface PopoverOverrides extends PositionerOverrides {
  Content: ViewProps;
}

export interface PopoverProps
  extends WithOverrides<PositionerBaseProps, PopoverOverrides> {}

export const Popover = (props: PopoverProps) => {
  const { content, overrides = {}, ...restProps } = props;

  const [Content, contentProps] = getOverrides(
    StyledContent,
    props,
    overrides.Content,
  );

  return (
    <Positioner
      content={<Content {...contentProps}>{content}</Content>}
      overrides={overrides}
      {...restProps}
    />
  );
};

const StyledContent = (props: ViewProps) => {
  const { style, ...viewProps } = props;
  const theme = useTheme();

  return (
    <View
      style={[
        {
          backgroundColor: theme.colors.background.content,
          padding: 16,
          ...theme.elevations[2],
        },
        style,
      ]}
      {...viewProps}
    />
  );
};
