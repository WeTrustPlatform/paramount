import dlv from 'dlv';
import * as React from 'react';
import { View, ViewProps } from 'react-native';

import { useTheme } from '../../theme';
import { getOverrides, getStyle, WithOverrides } from '../../utils/overrides';
import { OptionalString } from '../../utils/types';
import { Label, LabelProps, Text, TextProps } from '../Typography';

type FormFieldLabelPosition = 'top' | 'left' | 'right';

interface FormFieldBaseProps {
  /**
   * Error message of the field
   */
  error?: OptionalString;

  /**
   * Label of the field.
   */
  label?: OptionalString;

  /**
   * Position of the field.
   * @default "top"
   */
  labelPosition?: FormFieldLabelPosition;

  /**
   * Description of the field.
   */
  description?: OptionalString;

  /** Content to wrap FormField with. */
  children?: React.ReactNode;
}

export interface FormFieldOverrides {
  Root: RootProps;
  Label: LabelProps;
  Description: DescriptionProps;
  Error: ErrorProps;
}

export interface FormFieldProps
  extends WithOverrides<FormFieldBaseProps, FormFieldOverrides> {}

export const FormField = (props: FormFieldProps) => {
  const {
    label,
    error,
    children,
    description,
    labelPosition = 'top',
    overrides = {},
  } = props;
  const theme = useTheme();

  const [Root, rootProps] = getOverrides(
    StyledRoot,
    props,
    dlv(theme, 'overrides.FormField.Root'),
    overrides.Root,
  );
  const [LabelR, labelRProps] = getOverrides(
    Label,
    props,
    dlv(theme, 'overrides.FormField.Label'),
    overrides.Label,
  );
  const [Description, descriptionProps] = getOverrides(
    StyledDescription,
    props,
    dlv(theme, 'overrides.FormField.Description'),
    overrides.Description,
  );
  const [ErrorR, errorProps] = getOverrides(
    StyledError,
    props,
    dlv(theme, 'overrides.FormField.Error'),
    overrides.Error,
  );

  return (
    <Root {...rootProps}>
      <LabelR label={label} position={labelPosition} {...labelRProps}>
        {children}
      </LabelR>
      <Description description={description} {...descriptionProps} />
      <ErrorR error={error} {...errorProps} />
    </Root>
  );
};

interface PropsWithChildren {
  children?: React.ReactNode;
}

interface RootProps extends ViewProps, PropsWithChildren {}

const StyledRoot = (props: RootProps) => {
  const { children, style, ...viewProps } = props;

  return (
    <View style={[style]} {...viewProps}>
      {children}
    </View>
  );
};

interface DescriptionProps extends TextProps, PropsWithChildren {
  description?: OptionalString;
}

const StyledDescription = (props: DescriptionProps) => {
  const { children, style, description, ...viewProps } = props;

  if (!description) return null;

  return (
    <Text
      color="muted"
      style={[
        {
          paddingBottom: 4,
        },
        getStyle(props, style),
      ]}
      {...viewProps}
    >
      {description}
    </Text>
  );
};

interface ErrorProps extends TextProps, PropsWithChildren {
  error?: OptionalString;
}

const StyledError = (props: ErrorProps) => {
  const { children, style, error, ...viewProps } = props;

  if (!error) return null;

  return (
    <Text style={[getStyle(props, style)]} color="danger" {...viewProps}>
      {error}
    </Text>
  );
};
