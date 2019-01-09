import { ComponentVariables, ThemeVariables } from '../ThemeInterface';
import { getAlertVariables } from './alertVariables';
import { getAvatarVariables } from './avatarVariables';
import { getBadgeVariables } from './badgeVariables';
import { getButtonVariables } from './buttonVariables';
import { getCheckboxVariables } from './checkboxVariables';
import { getCounterVariables } from './counterVariables';
import { getDialogVariables } from './dialogVariables';
import { getDividerVariables } from './dividerVariables';
import { getDrawerVariables } from './drawerVariables';
import { getHeadingVariables } from './headingVariables';
import { getOverlayMenuVariables } from './overlayMenuVariables';
import { getParagraphVariables } from './paragraphVariables';
import { getPickerVariables } from './pickerVariables';
import { getPopoverVariables } from './popoverVariables';
import { getProgressVariables } from './progressVariables';
import { getSelectListVariables } from './selectListVariables';
import { getSwitchVariables } from './switchVariables';
import { getTextInputVariables } from './textInputVariables';
import { getTextVariables } from './textVariables';
import { getToastVariables } from './toastVariables';

export const getComponentVariables = (
  themeVariables: ThemeVariables,
): ComponentVariables => {
  return {
    alert: getAlertVariables(themeVariables),
    avatar: getAvatarVariables(themeVariables),
    badge: getBadgeVariables(themeVariables),
    button: getButtonVariables(themeVariables),
    checkbox: getCheckboxVariables(themeVariables),
    counter: getCounterVariables(themeVariables),
    dialog: getDialogVariables(themeVariables),
    divider: getDividerVariables(themeVariables),
    drawer: getDrawerVariables(themeVariables),
    heading: getHeadingVariables(themeVariables),
    overlayMenu: getOverlayMenuVariables(themeVariables),
    paragraph: getParagraphVariables(themeVariables),
    picker: getPickerVariables(themeVariables),
    popover: getPopoverVariables(themeVariables),
    progress: getProgressVariables(themeVariables),
    selectList: getSelectListVariables(themeVariables),
    switch: getSwitchVariables(themeVariables),
    text: getTextVariables(themeVariables),
    textInput: getTextInputVariables(themeVariables),
    toast: getToastVariables(themeVariables),
  };
};
