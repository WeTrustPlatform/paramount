import deepMerge from 'deepmerge';
import { DeepPartial } from 'ts-essentials';

import { Theme } from '../theme';

export type GetStyles<TStyles = any, TStyleProps = any> = (
  props: TStyleProps,
  theme: Theme,
) => TStyles;

export type ArgumentTypes<T> = T extends (...args: infer U) => infer R
  ? U
  : never;
export type ReplaceReturnType<T, TNewReturn> = (
  ...a: ArgumentTypes<T>
) => TNewReturn;

export const mergeStyles = <TStyles = any, TStyleProps = any>(
  getDefaultStyles: GetStyles<TStyles, TStyleProps>,
  getOverridingStyles?: GetStyles<DeepPartial<TStyles>, TStyleProps>,
  getThemeStyles?: GetStyles<DeepPartial<TStyles>, TStyleProps>,
) => (props: TStyleProps, theme: Theme): TStyles => {
  const defaultStyles = getDefaultStyles(props, theme);

  const styles: Array<Partial<TStyles>> = [];

  if (getThemeStyles) {
    styles.push(getThemeStyles(props, theme) as Partial<TStyles>);
  }

  if (getOverridingStyles) {
    styles.push(getOverridingStyles(props, theme) as Partial<TStyles>);
  }

  // @ts-ignore
  return deepMerge.all<TStyles>([defaultStyles, ...styles]);
};
