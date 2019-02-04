import * as React from 'react';
import { TouchableWithoutFeedback, View } from 'react-native';
import { DeepPartial } from 'ts-essentials';

import { Theme, withTheme } from '../../theme';
import { mergeStyles, ReplaceReturnType } from '../../utils/mergeStyles';
import {
  GetOverlayStyles,
  getOverlayStyles,
  OverlayStyles,
} from './Overlay.styles';

interface OverlayProps {
  onPress: () => void;
  theme: Theme;
  transparent?: boolean;
  getStyles?: ReplaceReturnType<GetOverlayStyles, DeepPartial<OverlayStyles>>;
}

const OverlayBase = (props: OverlayProps) => {
  const { onPress, transparent = false, theme, getStyles } = props;

  const { overlayStyle } = mergeStyles(getOverlayStyles, getStyles)(
    { transparent },
    theme,
  );

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
