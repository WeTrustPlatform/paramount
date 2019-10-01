import dlv from 'dlv';
import * as React from 'react';
import { TouchableWithoutFeedback, View, ViewProps } from 'react-native';

import { useTheme } from '../../theme';
import { getOverrides, Override } from '../../utils/overrides';

export interface OverlayProps extends ViewProps {
  onPress?: () => void;
  override?: OverlayOverride;
}

export type OverlayOverride = Override<OverlayProps, RootProps>;

export const Overlay = (props: OverlayProps) => {
  const {
    onPress = () => {
      return;
    },
    override,
  } = props;
  const theme = useTheme();

  const [Root, rootProps] = getOverrides(
    StyledRoot,
    props,
    dlv(theme, 'overrides.Overlay'),
    override,
  );

  return <Root onPress={onPress} {...rootProps} />;
};

interface RootProps extends ViewProps {
  onPress: () => void;
}

const StyledRoot = (props: RootProps) => {
  const { style, onPress, ...viewProps } = props;
  const theme = useTheme();

  return (
    <TouchableWithoutFeedback
      onPress={event => {
        event.preventDefault();
        onPress();
      }}
    >
      <View
        style={[
          {
            backgroundColor: theme.colors.background.overlay,
            bottom: 0,
            height: '100%',
            left: 0,
            position: 'absolute',
            right: 0,
            top: 0,
            width: '100%',
          },
          style,
        ]}
        {...viewProps}
      />
    </TouchableWithoutFeedback>
  );
};
