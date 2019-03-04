import { addMonths, format, isAfter, isBefore, subMonths } from 'date-fns';
import * as React from 'react';
import { ScrollView, TouchableOpacity } from 'react-native';

import { Button } from '../Button';
import { MultiMonthCalendar } from '../Calendars';
import { Divider } from '../Divider';
import { Box, Spacing } from '../Layout';
import { FormModal } from '../Modal';
import { SelectListItemBaseProps } from '../SelectList';
import { Heading } from '../Typography';
import PickerButton, { GetPickerButtonStylesProp } from './PickerButton';
import { PickerButtonSize } from './PickerButton.styles';

export type SetText = (
  startDate: Date | null,
  endDate: Date | null,
) => {
  applyChanges: string;
  headerEndDate: string;
  headerStartDate: string;
  placeholderEndDate: string;
  placeholderStartDate: string;
  showMoreMonths: string;
  title: string;
};

export interface DatePickerProps {
  children: Array<React.ReactElement<SelectListItemBaseProps>>;
  /** Prop to be passed to modal */
  useHistory?: boolean;
  /** Label displayed when showing country selection */
  getStyles?: GetPickerButtonStylesProp;
  size?: PickerButtonSize;
  useRange?: boolean;
  onValueChange: (startDate: Date | null, endDate: Date | null) => void;
  setText?: SetText;

  placeholderText?: string;
  selectedStartDate?: Date | null;
  selectedEndDate?: Date | null;
  initialStartMonthDate?: Date;
  initialEndMonthDate?: Date;
}

interface ReducerState {
  selectedEndDate: Date | null;
  selectedStartDate: Date | null;
  useRange: boolean;
}

interface SelectAction {
  type: 'select';
  date: Date;
}

interface ResetAction {
  type: 'reset';
  selectedEndDate: Date | null;
  selectedStartDate: Date | null;
}

const reducer = (state: ReducerState, action: SelectAction | ResetAction) => {
  const { selectedStartDate, selectedEndDate, useRange } = state;

  if (action.type === 'select' && action.date) {
    const date = action.date;

    if (useRange) {
      if (
        (!selectedStartDate && !selectedEndDate) ||
        (selectedStartDate && selectedEndDate)
      ) {
        return {
          selectedEndDate: null,
          selectedStartDate: date,
          useRange,
        };
      } else if (selectedStartDate && !selectedEndDate) {
        if (isBefore(date, selectedStartDate)) {
          return {
            selectedEndDate: null,
            selectedStartDate: date,
            useRange,
          };
        } else if (isAfter(date, selectedStartDate)) {
          return {
            selectedEndDate: date,
            selectedStartDate,
            useRange,
          };
        }
      }

      return state;
    }

    return {
      selectedEndDate: null,
      selectedStartDate: date,
      useRange,
    };
  } else if (action.type === 'reset') {
    return {
      selectedEndDate: action.selectedEndDate,
      selectedStartDate: action.selectedStartDate,
      useRange,
    };
  }

  throw new Error();
};

const DATE_FORMAT = 'D MMM YYYY';
const FULL_DATE_FORMAT = 'Do MMMM YYYY';

const defaultSetText: SetText = (
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
    headerEndDate,
    headerStartDate,
    placeholderEndDate: 'End date',
    placeholderStartDate: 'Start date',
    showMoreMonths: 'Show more months',
    title,
  };
};

const DatePickerBase = (props: DatePickerProps) => {
  const {
    getStyles,
    useHistory = false,
    selectedStartDate: propSelectedStartDate = null,
    selectedEndDate: propSelectedEndDate = null,
    onValueChange,
    useRange = false,
    setText = defaultSetText,
    size = 'medium',
  } = props;
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [monthsToShow, setMonthsToShow] = React.useState(1);
  const [state, dispatch] = React.useReducer(reducer, {
    selectedEndDate: propSelectedEndDate,
    selectedStartDate: propSelectedStartDate,
    useRange,
  });
  const handleClose = React.useCallback(() => {
    dispatch({
      selectedEndDate: propSelectedEndDate,
      selectedStartDate: propSelectedStartDate,
      type: 'reset',
    });
    setIsModalOpen(false);
  }, [propSelectedEndDate, propSelectedStartDate]);

  const { selectedStartDate, selectedEndDate } = state;

  const handleSelect = React.useCallback((date: Date) => {
    dispatch({ date, type: 'select' });
  }, []);
  const text = setText(selectedStartDate, selectedEndDate);

  return (
    <>
      <PickerButton
        onPress={() => setIsModalOpen(true)}
        getStyles={getStyles}
        size={size}
        title={text.title}
      />
      <FormModal
        visible={isModalOpen}
        useHistory={useHistory}
        onRequestClose={handleClose}
        onClose={handleClose}
        onClear={() => {
          dispatch({
            selectedEndDate: null,
            selectedStartDate: null,
            type: 'reset',
          });
        }}
      >
        <Spacing
          flexDirection="row"
          paddingHorizontal={2}
          paddingTop={1}
          paddingBottom={2}
        >
          <Box flex={1}>
            <TouchableOpacity
              onPress={() =>
                dispatch({
                  selectedEndDate: null,
                  selectedStartDate: null,
                  type: 'reset',
                })
              }
            >
              <Heading size="xlarge">
                {selectedStartDate
                  ? text.headerStartDate
                  : text.placeholderStartDate}
              </Heading>
            </TouchableOpacity>
          </Box>
          {useRange && (
            <Box paddingHorizontal={4}>
              <Divider position="vertical" />
            </Box>
          )}
          {useRange && (
            <Box flex={1}>
              <Heading size="xlarge">
                {selectedEndDate ? text.headerEndDate : text.placeholderEndDate}
              </Heading>
            </Box>
          )}
        </Spacing>
        <ScrollView>
          <Spacing paddingVertical={3} paddingHorizontal={2}>
            <MultiMonthCalendar
              selectedStartDate={selectedStartDate}
              selectedEndDate={selectedEndDate}
              startMonthDate={subMonths(new Date(), 1)}
              endMonthDate={addMonths(new Date(), monthsToShow)}
              onSelect={handleSelect}
            />
            <Spacing paddingTop={3}>
              <Button
                onPress={() => {
                  setMonthsToShow(monthsToShow + 2);
                }}
                title={text.showMoreMonths}
                appearance="minimal"
                color="primary"
              />
            </Spacing>
          </Spacing>
        </ScrollView>
        <Divider />
        <Spacing paddingVertical={1} paddingHorizontal={2}>
          <Button
            onPress={() => {
              setIsModalOpen(false);
              onValueChange(selectedStartDate, selectedEndDate);
            }}
            title={text.applyChanges}
            color="primary"
          />
        </Spacing>
      </FormModal>
    </>
  );
};

export const DatePicker = DatePickerBase;

export default DatePicker;
