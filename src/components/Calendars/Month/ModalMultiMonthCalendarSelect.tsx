import { format } from 'date-fns';
import * as React from 'react';

import { Button } from '../../Button';
import { Divider } from '../../Divider';
import { Spacing } from '../../Layout';
import { FormModal } from '../../Modal';
import MultiMonthCalendarSelect, {
  MultiMonthCalendarSelectProps,
  MultiMonthCalendarSelectText,
} from './MultiMonthCalendarSelect';

export interface ModalMultiMonthCalendarSelectChildrenProps {
  openModal?: () => void;
}

export interface ModalMultiMonthCalendarSelectText
  extends MultiMonthCalendarSelectText {
  applyChanges: string;
  title: string;
  clear: string;
}

export type SetText = (
  startDate: Date | null,
  endDate: Date | null,
) => ModalMultiMonthCalendarSelectText;

export interface ModalMultiMonthCalendarSelectProps
  extends MultiMonthCalendarSelectProps {
  children: (
    props: ModalMultiMonthCalendarSelectChildrenProps,
  ) => React.ReactNode;
  /** Prop to be passed to modal */
  useHistory?: boolean;
  setText?: SetText;
}

const DATE_FORMAT = 'D MMM YYYY';
const FULL_DATE_FORMAT = 'Do MMMM YYYY';

export const defaultSetText: SetText = (
  selectedStartDate: Date | null,
  selectedEndDate: Date | null,
) => {
  let title = '';
  let headerStartDate = '';
  let headerEndDate = '';

  if (!selectedStartDate) {
    title = 'Select date';
  } else if (selectedStartDate && !selectedEndDate) {
    title = format(selectedStartDate, FULL_DATE_FORMAT);
    headerStartDate = format(selectedStartDate, DATE_FORMAT);
  } else if (selectedStartDate && selectedEndDate) {
    title = `${format(selectedStartDate, DATE_FORMAT)} - ${format(
      selectedEndDate,
      DATE_FORMAT,
    )}`;
    headerStartDate = `${format(selectedStartDate, DATE_FORMAT)}`;
    headerEndDate = `${format(selectedEndDate, DATE_FORMAT)}`;
  }

  return {
    applyChanges: 'Apply changes',
    clear: 'Clear',
    headerEndDate,
    headerStartDate,
    placeholderEndDate: 'End date',
    placeholderStartDate: 'Start date',
    showMore: 'Show more months',
    title,
  };
};

const ModalMultiMonthCalendarSelectBase = (
  props: ModalMultiMonthCalendarSelectProps,
) => {
  const {
    children = () => null,
    useHistory = false,
    selectedStartDate: propSelectedStartDate = null,
    selectedEndDate: propSelectedEndDate = null,
    onValueChange,
    useRange = false,
    initialStartMonthDate,
    initialEndMonthDate,
    setText = defaultSetText,
  } = props;
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [selectedDateRange, setSelectedDateRange] = React.useState({
    selectedEndDate: propSelectedEndDate,
    selectedStartDate: propSelectedStartDate,
  });
  const { selectedStartDate, selectedEndDate } = selectedDateRange;

  const handleClose = React.useCallback(() => {
    setSelectedDateRange({
      selectedEndDate: propSelectedEndDate,
      selectedStartDate: propSelectedStartDate,
    });
    setIsModalOpen(false);
  }, [propSelectedEndDate, propSelectedStartDate]);

  const text = setText(selectedStartDate, selectedEndDate);

  return (
    <>
      <FormModal
        visible={isModalOpen}
        useHistory={useHistory}
        onRequestClose={handleClose}
        onClose={handleClose}
        clearText={text.clear}
        onClear={() => {
          setSelectedDateRange({
            selectedEndDate: null,
            selectedStartDate: null,
          });
        }}
      >
        <MultiMonthCalendarSelect
          useRange={useRange}
          selectedEndDate={selectedEndDate}
          selectedStartDate={selectedStartDate}
          initialStartMonthDate={initialStartMonthDate}
          initialEndMonthDate={initialEndMonthDate}
          onValueChange={(startDate, endDate) =>
            setSelectedDateRange({
              selectedEndDate: endDate,
              selectedStartDate: startDate,
            })
          }
          text={text}
        />
        <Divider />
        <Spacing paddingVertical={1} paddingHorizontal={2}>
          <Button
            onPress={event => {
              event.preventDefault();
              setIsModalOpen(false);
              if (onValueChange) {
                onValueChange(selectedStartDate, selectedEndDate);
              }
            }}
            title={text.applyChanges}
            color="primary"
          />
        </Spacing>
      </FormModal>
      {children({ openModal: () => setIsModalOpen(true) })}
    </>
  );
};

export const ModalMultiMonthCalendarSelect = ModalMultiMonthCalendarSelectBase;

export default ModalMultiMonthCalendarSelect;
