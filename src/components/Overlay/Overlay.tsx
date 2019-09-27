import * as React from 'react';
import { TouchableWithoutFeedback, View, ViewProps } from 'react-native';

import { useTheme } from '../../theme';
import { getOverrides, WithOverrides } from '../../utils/overrides';

interface OverlayBaseProps {
  onPress: () => void;
}

export interface OverlayOverrides {
  Root: RootProps;
}

export interface OverlayProps
  extends WithOverrides<OverlayBaseProps, OverlayOverrides> {}

export const Overlay = (props: OverlayProps) => {
  const { onPress, overrides = {} } = props;

  const [Root, rootProps] = getOverrides(StyledRoot, props, overrides.Root);

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
