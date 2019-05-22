import * as React from 'react';
import { View } from 'react-native';
import { DeepPartial } from 'ts-essentials';

import { useTheme } from '../../theme';
import { mergeStyles, ReplaceReturnType } from '../../utils/mergeStyles';
import { Label, Text } from '../Typography';
import {
  FormFieldStyles,
  GetFormFieldStyles,
  getFormFieldStyles,
} from './FormField.styles';

export type FormFieldLabelPosition = 'top' | 'left' | 'right';

export interface FormFieldProps {
  error?: string;
  label?: string;
  labelPosition?: FormFieldLabelPosition;
  description?: string;
  children?: React.ReactNode;
  getStyles?: ReplaceReturnType<
    GetFormFieldStyles,
    DeepPartial<FormFieldStyles>
  >;
}

export const FormField = (props: FormFieldProps) => {
  const {
    label,
    error,
    children,
    description,
    labelPosition = 'top',
    getStyles,
  } = props;
  const theme = useTheme();

  const {
    containerStyles,
    descriptionTextStyle,
    errorTextStyle,
    errorWrapperStyle,
    labelTextStyle,
    labelWrapperStyle,
    wrapperStyle,
  } = mergeStyles(getFormFieldStyles, getStyles)(
    {
      labelPosition,
    },
    theme,
  );

  const labelContent = (
    <View style={labelWrapperStyle}>
      <Label getStyles={() => ({ textStyle: labelTextStyle })}>{label}</Label>
    </View>
  );

  return (
    <View style={containerStyles}>
      {label && labelPosition === 'top' && labelContent}
      <View style={wrapperStyle}>
        {label && labelPosition === 'left' && labelContent}
        {children}
        {label && labelPosition === 'right' && labelContent}
      </View>
      {description && (
        <Text
          color="muted"
          getStyles={() => ({ textStyle: descriptionTextStyle })}
        >
          {description}
        </Text>
      )}
      {error && (
        <View style={errorWrapperStyle}>
          <Text
            color="danger"
            getStyles={() => ({ textStyle: errorTextStyle })}
          >
            {error}
          </Text>
        </View>
      )}
    </View>
  );
};
