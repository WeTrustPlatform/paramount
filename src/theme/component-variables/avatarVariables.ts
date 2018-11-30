import { IFills, IThemeVariables } from '../ThemeInterface';

export interface IAvatarVariables {
  fills: IFills;
}

export const getAvatarVariables = (
  themeVariables: IThemeVariables,
): IAvatarVariables => {
  return {
    fills: themeVariables.fills,
  };
};
