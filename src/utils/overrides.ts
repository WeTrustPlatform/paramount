import deepMerge from 'deepmerge';
import { StyleProp } from 'react-native';

export type GetProps<TProps = any, TChildProps = any> = (
  props: TProps,
) => Partial<TChildProps>;

export type OverrideProps<TProps = any, TChildProps = any> =
  | GetProps<TProps, TChildProps>
  | Partial<TChildProps>;

export type GetStyle<TProps = any, TStyle = any> = (
  props: TProps,
) => StyleProp<TStyle>;

export type Style<TChildProps = any, TStyle = any> =
  | GetStyle<TChildProps, TStyle>
  | StyleProp<TStyle>;

export interface PropsWithStyle<TStyle = any> {
  style?: TStyle;
}

export interface OverrideBase<TProps = any, TChildProps = any> {
  props?: OverrideProps<TProps, TChildProps>;
  component?: React.ComponentType<TChildProps>;
}

export interface OverrideStyle<TChildProps = any, TStyle = any> {
  style?: Style<TChildProps, TStyle>;
}

export interface OverrideWithStyle<
  TProps = any,
  TChildProps = any,
  TStyle = any
>
  extends OverrideBase<TProps, TChildProps>,
    OverrideStyle<TChildProps, TStyle> {}

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
  style: Style<TChildProps, TStyle>,
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

export const getStyle = <TChildProps = any, TStyle = any>(
  props: TChildProps,
  style?: Style<TChildProps, TStyle>,
): StyleProp<TStyle> | undefined => {
  if (!style) return undefined;

  return isGetStyleFn(style) ? style(props) : style;
};

const applyOverrides = <TProps = any, TChildProps = any>(
  parentProps: TProps,
  override?: OverrideWithStyle<TProps, TChildProps>,
): Partial<TChildProps> => {
  if (!override) return {};

  let overrideProps: Partial<TChildProps> = {};
  let style = null;

  if (override.props) {
    overrideProps = isGetPropsFn<TProps, TChildProps>(override.props)
      ? override.props(parentProps)
      : override.props;
  }

  if (override.style) {
    style = getStyle<Partial<TChildProps>>(
      { ...parentProps, ...overrideProps },
      override.style,
    );
  }

  return { ...overrideProps, ...(style ? { style } : {}) };
};

export const getOverrides = <TProps = any, TChildProps = any>(
  Component: React.ComponentType<TChildProps>,
  parentProps: TProps,
  ...overrides: (OverrideWithStyle<TProps, TChildProps> | undefined)[]
): [React.ComponentType<TChildProps>, Partial<TChildProps>] => {
  let overrideProps: Partial<TChildProps> = {};
  let OverrideComponent: React.ComponentType<TChildProps> = Component;

  overrides.forEach(override => {
    overrideProps = deepMerge(
      overrideProps,
      applyOverrides(parentProps, override),
    );

    if (override && (override.component || override.component === null)) {
      OverrideComponent = override.component;
    }
  });

  return [OverrideComponent, overrideProps];
};
