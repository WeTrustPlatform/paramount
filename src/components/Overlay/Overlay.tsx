import * as React from 'react';
import { TouchableWithoutFeedback, View } from 'react-native';

import { Theme, withTheme } from '../../theme';
import { getOverlayStyles } from './Overlay.styles';

interface OverlayProps {
  onPress: () => void;
  theme: Theme;
}

const OverlayBase = (props: OverlayProps) => {
  const { onPress, theme } = props;

  const { overlayStyle } = getOverlayStyles(theme);
  return (
    <TouchableWithoutFeedback
      onPress={event => {
        // @ts-ignore
        event.preventDefault();
        onPress();
      }}
    >
      <View style={overlayStyle} />
    </TouchableWithoutFeedback>
  );
};

export const Overlay = withTheme(OverlayBase);
