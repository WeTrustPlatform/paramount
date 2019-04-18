import * as React from 'react';

import { ModalMultiMonthCalendarSelect } from '../Calendars/Month';
import {
  defaultSetText,
  ModalMultiMonthCalendarSelectProps,
  SetText,
} from '../Calendars/Month/ModalMultiMonthCalendarSelect';
import { GetPickerButtonStylesProp, PickerButton } from './PickerButton';
import { PickerButtonSize } from './PickerButton.styles';

export interface CalendarDatePickerProps
  extends ModalMultiMonthCalendarSelectProps {
  setText?: SetText;
  /** Prop to be passed to modal */
  useHistory?: boolean;
  /** Label displayed when showing country selection */
  getStyles?: GetPickerButtonStylesProp;
  size?: PickerButtonSize;
}

export const CalendarDatePicker = (props: CalendarDatePickerProps) => {
  const {
    getStyles,
    useHistory = false,
    selectedStartDate = null,
    selectedEndDate = null,
    onValueChange,
    useRange = false,
    setText = defaultSetText,
    size = 'medium',
  } = props;

  const text = setText(selectedStartDate, selectedEndDate);

  return (
    <>
      <ModalMultiMonthCalendarSelect
        useHistory={useHistory}
        selectedStartDate={selectedStartDate}
        selectedEndDate={selectedEndDate}
        onValueChange={onValueChange}
        useRange={useRange}
        text={text}
        setText={setText}
      >
        {({ openModal }) => (
          <PickerButton
            onPress={openModal}
            getStyles={getStyles}
            size={size}
            title={text.title}
          />
        )}
      </ModalMultiMonthCalendarSelect>
    </>
  );
};
