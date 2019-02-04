import { DeepPartial } from 'ts-essentials';

// tslint:disable-next-line
const deepMerge = require('deepmerge');

export type GetStyles<TStyles = any> = (...args: any[]) => TStyles;

export type GetStylesOptional<TStyles = any> = (
  ...args: any[]
) => DeepPartial<TStyles>;

export type ArgumentTypes<T> = T extends (...args: infer U) => infer R
  ? U
  : never;
export type ReplaceReturnType<T, TNewReturn> = (
  ...a: ArgumentTypes<T>
) => TNewReturn;

export const mergeStyles = <TStyles = any, TPartialStyles = any>(
  getDefaultStyles: GetStyles<TStyles>,
  getOverridingStyles?: GetStyles<TPartialStyles>,
) => (...args: any[]): TStyles => {
  const defaultStyles = getDefaultStyles(...args);

  return getOverridingStyles
    ? deepMerge(defaultStyles, getOverridingStyles(...args))
    : defaultStyles;
};
