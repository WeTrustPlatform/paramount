import { StyleProp } from 'react-native';

import { Theme } from '../theme';

export type GetProps<TProps = any, TChildProps = any> = (
  props: TProps,
) => TChildProps;

export type OverrideProps<TProps = any, TChildProps = any> =
  | GetProps<TProps, TChildProps>
  | TChildProps;

export type GetStyle<TProps = any, TStyle = any> = (
  props: TProps,
  theme: Theme,
) => TStyle;

export type OverrideStyle<TChildProps = any, TStyle = any> =
  | GetStyle<TChildProps, TStyle>
  | StyleProp<TStyle>;

export interface PropsWithStyle<TStyle = any> {
  style?: StyleProp<TStyle>;
}

export interface OverrideBase<TProps = any, TChildProps = any> {
  props?: OverrideProps<TProps, TChildProps>;
  component?: React.ComponentType<TChildProps>;
}

export interface OverrideWithStyle<
  TProps = any,
  TChildProps = any,
  TStyle = any
> extends OverrideBase<TProps, TChildProps> {
  style?: OverrideStyle<TChildProps, TStyle>;
}

export type Override<
  TProps = any,
  TChildProps = any
> = TChildProps extends PropsWithStyle
  ? OverrideWithStyle<TProps, TChildProps, TChildProps['style']>
  : OverrideBase<TProps, TChildProps>;

export type Overrides<TProps = any, TOverrides = object> = Partial<
  { [key in keyof TOverrides]: Override<TProps, TOverrides[key]> }
>;

export type WithOverrides<TProps = any, TOverrides = object> = {
  overrides?: Overrides<TProps, TOverrides>;
} & TProps;

const isGetStyleFn = <TChildProps = any, TStyle = any>(
  style: OverrideStyle<TChildProps, TStyle>,
): style is GetStyle<TChildProps, TStyle> => {
  if (typeof style === 'function') return true;

  return false;
};

const isGetPropsFn = <TProps = any, TChildProps = any>(
  props: OverrideProps<TProps, TChildProps>,
): props is GetProps<TProps, TChildProps> => {
  if (typeof props === 'function') return true;

  return false;
};

const applyOverrides = <TProps = any, TChildProps = any>(
  parentProps: TProps,
  override?: Override<TProps, TChildProps>,
): Partial<TChildProps> => {
  if (!override) return {};

  let childProps: Partial<TChildProps> = {};
  const style = {};

  if (override.props) {
    childProps = isGetPropsFn<TProps, TChildProps>(override.props)
      ? override.props(parentProps)
      : override.props;
  }

  return {
    ...childProps,
    style,
  };
};

export const getOverrides = <TProps = any, TChildProps = any>(
  Component: React.ComponentType<TChildProps>,
  parentProps: TProps,
  themeOverride?: Override<TProps, TChildProps>,
  propsOverride?: Override<TProps, TChildProps>,
): [React.ComponentType<TChildProps>, Partial<TChildProps>] => {
  let childProps: Partial<TChildProps> = {};

  if (themeOverride) childProps = applyOverrides(parentProps, themeOverride);
  if (propsOverride) childProps = applyOverrides(parentProps, propsOverride);

  return [Component, childProps];
};
