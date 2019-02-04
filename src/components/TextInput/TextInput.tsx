import * as React from 'react';
import {
  NativeSyntheticEvent,
  TextInput as RNTextInput,
  TextInputFocusEventData,
  TextInputProps as RNTextInputProps,
} from 'react-native';
import { DeepPartial } from 'ts-essentials';

import { Theme, withTheme } from '../../theme';
import { mergeStyles, ReplaceReturnType } from '../../utils/mergeStyles';
import {
  GetTextInputStyles,
  getTextInputStyles,
  TextInputSize,
  TextInputStyles,
} from './TextInput.styles';

export interface TextInputProps extends RNTextInputProps {
  theme: Theme;
  size?: TextInputSize;
  isDisabled?: boolean;
  isRequired?: boolean;
  isInvalid?: boolean;
  getStyles?: ReplaceReturnType<
    GetTextInputStyles,
    DeepPartial<TextInputStyles>
  >;
}

class TextInputBase extends React.Component<TextInputProps> {
  private root: any;

  public getStyles = () => {
    const {
      isDisabled = false,
      isInvalid = false,
      theme,
      size = 'medium',
      getStyles,
    } = this.props;
    return mergeStyles(getTextInputStyles, getStyles)(
      {
        isDisabled,
        isInvalid,
        size,
      },
      theme,
    );
  };

  public handleOnFocus = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
    const { isDisabled = false, onFocus } = this.props;
    const { inputStyle, focusedStyle } = this.getStyles();

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
    const { onBlur } = this.props;

    const { inputStyle } = this.getStyles();

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

    const { inputStyle, placeholderTextColor } = this.getStyles();

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
