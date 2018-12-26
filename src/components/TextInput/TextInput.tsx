import * as React from 'react';
import {
  NativeSyntheticEvent,
  TextInput as RNTextInput,
  TextInputFocusEventData,
  TextInputProps as RNTextInputProps,
  ViewStyle,
} from 'react-native';

import { Theme, withTheme } from '../../theme';
import { TextInputSize } from '../../theme/component-variables/textInputVariables';

export interface TextInputProps extends RNTextInputProps {
  theme: Theme;
  size?: TextInputSize;
  isDisabled?: boolean;
  isRequired?: boolean;
  isInvalid?: boolean;
  dangerouslySetInlineStyle?: {
    inputStyle?: ViewStyle;
  };
}

class TextInputBase extends React.Component<TextInputProps> {
  private root: any;

  public handleOnFocus = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
    const {
      isDisabled = false,
      isInvalid = false,
      onFocus,
      theme,
      size = 'medium',
      dangerouslySetInlineStyle,
    } = this.props;
    const { inputStyle, focusedStyle } = theme.getTextInputStyles(
      size,
      isDisabled,
      isInvalid,
    );

    if (!isDisabled) {
      this.root.setNativeProps({
        style: [
          inputStyle,
          focusedStyle,
          dangerouslySetInlineStyle && dangerouslySetInlineStyle.inputStyle,
        ],
      });
    }

    if (onFocus) {
      onFocus(e);
    }
  };

  public handleOnBlur = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
    const {
      onBlur,
      isDisabled = false,
      isInvalid = false,
      theme,
      size = 'medium',
      dangerouslySetInlineStyle,
    } = this.props;

    const { inputStyle } = theme.getTextInputStyles(
      size,
      isDisabled,
      isInvalid,
    );

    this.root.setNativeProps({
      style: [
        inputStyle,
        dangerouslySetInlineStyle && dangerouslySetInlineStyle.inputStyle,
      ],
    });

    if (onBlur) {
      onBlur(e);
    }
  };

  public render() {
    const {
      isDisabled = false,
      isInvalid = false,
      isRequired,
      size = 'medium',
      theme,
      dangerouslySetInlineStyle,
      ...textInputProps
    } = this.props;

    const { inputStyle, placeholderTextColor } = theme.getTextInputStyles(
      size,
      isDisabled,
      isInvalid,
    );

    return (
      <RNTextInput
        ref={(component: any) => {
          this.root = component;
        }}
        style={[
          inputStyle,
          dangerouslySetInlineStyle && dangerouslySetInlineStyle.inputStyle,
        ]}
        onFocus={e => this.handleOnFocus(e)}
        onBlur={e => this.handleOnBlur(e)}
        editable={!isDisabled}
        placeholderTextColor={placeholderTextColor}
        {...textInputProps}
      />
    );
  }
}

export const TextInput = withTheme(TextInputBase);
export default TextInput;
