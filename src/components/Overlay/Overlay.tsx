import * as React from 'react';
import { TouchableWithoutFeedback, View } from 'react-native';

import { useTheme } from '../../theme';
import { mergeStyles } from '../../utils/mergeStyles';
import { GetOverlayStyles, getOverlayStyles } from './Overlay.styles';

interface OverlayProps {
  onPress: () => void;
  transparent?: boolean;
  getStyles?: GetOverlayStyles;
}

export const Overlay = (props: OverlayProps) => {
  const { onPress, transparent = false, getStyles } = props;
  const theme = useTheme();

  const { overlayStyle } = mergeStyles(
    getOverlayStyles,
    getStyles,
    theme.components.getOverlayStyles,
  )({ transparent }, theme);

  return (
    <TouchableWithoutFeedback
      onPress={event => {
        event.preventDefault();
        onPress();
      }}
    >
      <View style={overlayStyle} />
    </TouchableWithoutFeedback>
  );
};
