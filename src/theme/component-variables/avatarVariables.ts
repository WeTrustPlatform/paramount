import { Fills, ThemeVariables } from '../ThemeInterface';

export interface AvatarVariables {
  fills: Fills;
}

export const getAvatarVariables = (
  themeVariables: ThemeVariables,
): AvatarVariables => {
  return {
    fills: themeVariables.fills,
  };
};
