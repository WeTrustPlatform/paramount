import dlv from 'dlv';
import * as React from 'react';
import { TouchableWithoutFeedback, View, ViewProps } from 'react-native';

import { useTheme } from '../../theme';
import { getOverrides, Override } from '../../utils/overrides';

type OverlayColor = 'dark' | 'light';

export interface OverlayProps extends ViewProps {
  onPress?: () => void;
  override?: OverlayOverride;
  /**
   * @default "dark"
   */
  color?: OverlayColor;
}

export type OverlayOverride = Override<OverlayProps, RootProps>;

export const Overlay = (props: OverlayProps) => {
  const {
    onPress = () => {
      return;
    },
    color = 'dark',
    override,
  } = props;
  const theme = useTheme();

  const [Root, rootProps] = getOverrides(
    StyledRoot,
    props,
    dlv(theme, 'overrides.Overlay'),
    override,
  );

  return <Root color={color} onPress={onPress} {...rootProps} />;
};

interface RootProps extends ViewProps {
  onPress: () => void;
  color: OverlayColor;
}

const StyledRoot = (props: RootProps) => {
  const { style, onPress, color, ...viewProps } = props;

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
            backgroundColor:
              color === 'dark' ? 'rgba(0,0,0,0.3)' : 'rgba(255,255,255,0.3)',
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
