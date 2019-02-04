import * as React from 'react';
import {
  NativeSyntheticEvent,
  TextInput as RNTextInput,
  TextInputFocusEventData,
  TextInputProps as RNTextInputProps,
  TouchableOpacity,
  View,
} from 'react-native';
import { DeepPartial } from 'ts-essentials';

import { Icon } from '../../icons';
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
  isClearable?: boolean;
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
      isClearable = false,
      theme,
      size = 'medium',
      getStyles,
    } = this.props;

    return mergeStyles(getTextInputStyles, getStyles)(
      {
        isClearable,
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

  public handleOnClear = () => {
    const { onChangeText } = this.props;
    this.root.clear();
    this.root.focus();

    if (onChangeText) onChangeText('');
  };

  public render() {
    const {
      isDisabled = false,
      isInvalid = false,
      isClearable = false,
      size = 'medium',
      theme,
      value,
      getStyles,
      ...textInputProps
    } = this.props;

    const {
      clearContainerStyle,
      containerStyle,
      inputStyle,
      placeholderTextColor,
    } = this.getStyles();

    return (
      <View style={containerStyle}>
        <RNTextInput
          ref={(component: any) => {
            this.root = component;
          }}
          style={inputStyle}
          onFocus={e => this.handleOnFocus(e)}
          onBlur={e => this.handleOnBlur(e)}
          editable={!isDisabled}
          placeholderTextColor={placeholderTextColor}
          value={value}
          {...textInputProps}
        />
        {isClearable && !!value && (
          <TouchableOpacity
            style={clearContainerStyle}
            onPress={this.handleOnClear}
          >
            <Icon name="x" size={24} color={theme.colors.text.default} />
          </TouchableOpacity>
        )}
      </View>
    );
  }
}

export const TextInput = withTheme(TextInputBase);
export default TextInput;
