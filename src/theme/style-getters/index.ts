import { ComponentVariables, StyleGetters } from '../ThemeInterface';
import { getAlertStyles } from './getAlertStyles';
import { getAvatarStyles } from './getAvatarStyles';
import { getBadgeStyles } from './getBadgeStyles';
import { getButtonStyles } from './getButtonStyles';
import { getCheckboxStyles } from './getCheckboxStyles';
import { getCounterStyles } from './getCounterStyles';
import { getDialogStyles } from './getDialogStyles';
import { getDividerStyles } from './getDividerStyles';
import { getDrawerStyles } from './getDrawerStyles';
import { getHeadingStyle } from './getHeadingStyle';
import { getOverlayMenuStyles } from './getOverlayMenuStyles';
import { getParagraphStyles } from './getParagraphStyles';
import { getPickerStyles } from './getPickerStyles';
import { getPopoverStyles } from './getPopoverStyles';
import { getProgressStyles } from './getProgressStyles';
import { getSelectListStyles } from './getSelectListStyles';
import { getSwitchStyles } from './getSwitchStyles';
import { getTextInputStyles } from './getTextInputStyles';
import { getTextStyle } from './getTextStyles';
import { getToastStyles } from './getToastStyles';

export const getStyleGetters = (
  componentVariables: ComponentVariables,
): StyleGetters => {
  return {
    getAlertStyles: getAlertStyles(componentVariables.alert),
    getAvatarStyles: getAvatarStyles(componentVariables.avatar),
    getBadgeStyles: getBadgeStyles(componentVariables.badge),
    getButtonStyles: getButtonStyles(componentVariables.button),
    getCheckboxStyles: getCheckboxStyles(componentVariables.checkbox),
    getCounterStyles: getCounterStyles(componentVariables.counter),
    getDialogStyles: getDialogStyles(componentVariables.dialog),
    getDividerStyles: getDividerStyles(componentVariables.divider),
    getDrawerStyles: getDrawerStyles(componentVariables.drawer),
    getHeadingStyles: getHeadingStyle(componentVariables.heading),
    getOverlayMenuStyles: getOverlayMenuStyles(componentVariables.overlayMenu),
    getParagraphStyles: getParagraphStyles(componentVariables.paragraph),
    getPickerStyles: getPickerStyles(componentVariables.picker),
    getPopoverStyles: getPopoverStyles(componentVariables.popover),
    getProgressStyles: getProgressStyles(componentVariables.progress),
    getSelectListStyles: getSelectListStyles(componentVariables.selectList),
    getSwitchStyles: getSwitchStyles(componentVariables.switch),
    getTextInputStyles: getTextInputStyles(componentVariables.textInput),
    getTextStyles: getTextStyle(componentVariables.text),
    getToastStyles: getToastStyles(componentVariables.toast),
  };
};
