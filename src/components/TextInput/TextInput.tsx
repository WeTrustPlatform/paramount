import * as React from 'react';
import {
  NativeSyntheticEvent,
  TextInput as RNTextInput,
  TextInputFocusEventData,
  TextInputProps as RNTextInputProps,
} from 'react-native';

import { Theme, withTheme } from '../../theme';
import {
  GetTextInputStyles,
  getTextInputStyles,
  TextInputSize,
} from './TextInput.styles';

export interface TextInputProps extends RNTextInputProps {
  theme: Theme;
  size?: TextInputSize;
  isDisabled?: boolean;
  isRequired?: boolean;
  isInvalid?: boolean;
  getStyles?: GetTextInputStyles;
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
      getStyles = getTextInputStyles,
    } = this.props;
    const { inputStyle, focusedStyle } = getStyles(
      {
        isDisabled,
        isInvalid,
        size,
      },
      theme,
    );

    if (!isDisabled) {
      this.root.setNativeProps({
        style: [inputStyle, focusedStyle],
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
      getStyles = getTextInputStyles,
    } = this.props;

    const { inputStyle } = getStyles(
      {
        isDisabled,
        isInvalid,
        size,
      },
      theme,
    );

    this.root.setNativeProps({
      style: [inputStyle],
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
      getStyles = getTextInputStyles,
      ...textInputProps
    } = this.props;

    const { inputStyle, placeholderTextColor } = getStyles(
      {
        isDisabled,
        isInvalid,
        size,
      },
      theme,
    );

    return (
      <RNTextInput
        ref={(component: any) => {
          this.root = component;
        }}
        style={inputStyle}
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
