import { IComponentVariables, IStyleGetters } from '../ThemeInterface';
import { getAvatarStyles } from './getAvatarStyles';
import { getBadgeStyles } from './getBadgeStyles';
import { getButtonStyles } from './getButtonStyles';
import { getCheckboxStyles } from './getCheckboxStyles';
import { getDialogStyles } from './getDialogStyles';
import { getDividerStyles } from './getDividerStyles';
import { getHeadingStyle } from './getHeadingStyle';
import { getParagraphStyles } from './getParagraphStyles';
import { getPickerStyles } from './getPickerStyles';
import { getProgressStyles } from './getProgressStyles';
import { getSelectListStyles } from './getSelectListStyles';
import { getSwitchStyles } from './getSwitchStyles';
import { getTextInputStyles } from './getTextInputStyles';
import { getTextStyle } from './getTextStyles';
import { getToastStyles } from './getToastStyles';

export const getStyleGetters = (
  componentVariables: IComponentVariables,
): IStyleGetters => {
  return {
    getAvatarStyles: getAvatarStyles(componentVariables.avatar),
    getBadgeStyles: getBadgeStyles(componentVariables.badge),
    getButtonStyles: getButtonStyles(componentVariables.button),
    getCheckboxStyles: getCheckboxStyles(componentVariables.checkbox),
    getDialogStyles: getDialogStyles(componentVariables.dialog),
    getDividerStyles: getDividerStyles(componentVariables.divider),
    getHeadingStyles: getHeadingStyle(componentVariables.heading),
    getParagraphStyles: getParagraphStyles(componentVariables.paragraph),
    getPickerStyles: getPickerStyles(componentVariables.picker),
    getProgressStyles: getProgressStyles(componentVariables.progress),
    getSelectListStyles: getSelectListStyles(componentVariables.selectList),
    getSwitchStyles: getSwitchStyles(componentVariables.switch),
    getTextInputStyles: getTextInputStyles(componentVariables.textInput),
    getTextStyles: getTextStyle(componentVariables.text),
    getToastStyles: getToastStyles(componentVariables.toast),
  };
};
