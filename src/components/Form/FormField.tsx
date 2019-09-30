import * as React from 'react';
import { View, ViewProps } from 'react-native';

import { getOverrides, WithOverrides } from '../../utils/overrides';
import { Label, LabelProps, Text, TextProps } from '../Typography';

type FormFieldLabelPosition = 'top' | 'left' | 'right';

interface FormFieldBaseProps {
  /**
   * Error message of the field
   */
  error?: string | false;

  /**
   * Label of the field.
   */
  label?: string | false;

  /**
   * Position of the field.
   * @default "top"
   */
  labelPosition?: FormFieldLabelPosition;

  /**
   * Description of the field.
   */
  description?: string;

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

  const [Root, rootProps] = getOverrides(StyledRoot, props, overrides.Root);
  const [LabelR, labelRProps] = getOverrides(Label, props, overrides.Label);
  const [Description, descriptionProps] = getOverrides(
    StyledDescription,
    props,
    overrides.Description,
  );
  const [ErrorR, errorProps] = getOverrides(
    StyledError,
    props,
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
  description?: string | false;
}

const StyledDescription = (props: DescriptionProps) => {
  const { children, style, description, ...viewProps } = props;

  if (!description) return null;

  return (
    <Text
      style={[
        {
          paddingBottom: 4,
        },
        style,
      ]}
      {...viewProps}
    >
      {description}
    </Text>
  );
};

interface ErrorProps extends TextProps, PropsWithChildren {
  error?: string | false;
}

const StyledError = (props: ErrorProps) => {
  const { children, style, error, ...viewProps } = props;

  if (!error) return null;

  return (
    <Text style={[style]} color="danger" {...viewProps}>
      {error}
    </Text>
  );
};
