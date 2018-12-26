import { Fills, ThemeVariables } from '../ThemeInterface';
import { ControlVariables, getControlVariables } from './controlVariables';

export interface BadgeVariables extends ControlVariables {
  fills: Fills;
}

export const getBadgeVariables = (
  themeVariables: ThemeVariables,
): BadgeVariables => {
  const controlVariables = getControlVariables(themeVariables);

  return {
    fills: themeVariables.fills,
    ...controlVariables,
  };
};
