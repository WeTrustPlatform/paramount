import { IFills, IThemeVariables } from '../ThemeInterface';
import { getControlVariables, IControlVariables } from './controlVariables';

export interface IBadgeVariables extends IControlVariables {
  fills: IFills;
}

export const getBadgeVariables = (
  themeVariables: IThemeVariables,
): IBadgeVariables => {
  const controlVariables = getControlVariables(themeVariables);

  return {
    fills: themeVariables.fills,
    ...controlVariables,
  };
};
