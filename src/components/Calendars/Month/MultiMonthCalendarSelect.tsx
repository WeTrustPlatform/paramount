import { isAfter, isBefore } from 'date-fns';
import * as React from 'react';
import { ScrollView } from 'react-native';

import { IncrementalMultiMonthCalendar } from '.';
import { Spacing } from '../../Layout';
import { IncrementalMultiMonthCalendarProps } from './IncrementalMultiMonthCalendar';
import { MonthCalendarHeader } from './MonthCalendarHeader';
import { WeekDays } from './WeekDays';

export interface MultiMonthCalendarSelectProps
  extends IncrementalMultiMonthCalendarProps {
  useRange?: boolean;

  onValueChange?: (
    selectedStartDate: Date | null,
    selectedEndDate: Date | null,
  ) => void;
  text: MultiMonthCalendarSelectText;
}

export interface MultiMonthCalendarSelectText {
  showMore: string;
  headerStartDate: string;
  placeholderStartDate: string;
  headerEndDate: string;
  placeholderEndDate: string;
}

export const MultiMonthCalendarSelect = (
  props: MultiMonthCalendarSelectProps,
) => {
  const {
    selectedStartDate = null,
    selectedEndDate = null,
    useRange = false,
    onValueChange,
    initialStartMonthDate,
    initialEndMonthDate,
    text,
  } = props;

  const handleSelect = React.useCallback(
    (date: Date) => {
      if (!onValueChange) return;

      if (useRange) {
        if (
          (!selectedStartDate && !selectedEndDate) ||
          (selectedStartDate && selectedEndDate)
        ) {
          onValueChange(date, null);
        } else if (selectedStartDate && !selectedEndDate) {
          if (isBefore(date, selectedStartDate)) {
            onValueChange(date, null);
          } else if (isAfter(date, selectedStartDate)) {
            onValueChange(selectedStartDate, date);
          }
        }
      } else {
        onValueChange(date, null);
      }
    },
    [selectedStartDate, selectedEndDate],
  );

  return (
    <>
      <Spacing paddingHorizontal={2} paddingTop={1} paddingBottom={2}>
        <MonthCalendarHeader
          useRange={useRange}
          selectedStartDate={selectedStartDate}
          selectedEndDate={selectedEndDate}
          headerStartDateText={text.headerStartDate}
          onPressStartDate={() => {
            if (onValueChange) {
              onValueChange(null, null);
            }
          }}
          onPressEndDate={() => {
            if (onValueChange) {
              onValueChange(selectedStartDate, null);
            }
          }}
          placeholderStartDateText={text.placeholderStartDate}
          headerEndDateText={text.headerEndDate}
          placeholderEndDateText={text.placeholderEndDate}
        />
        <Spacing paddingTop={1}>
          <WeekDays />
        </Spacing>
      </Spacing>
      <ScrollView>
        <Spacing paddingBottom={3} paddingHorizontal={2}>
          <IncrementalMultiMonthCalendar
            selectedStartDate={selectedStartDate}
            selectedEndDate={selectedEndDate}
            onSelect={handleSelect}
            initialStartMonthDate={initialStartMonthDate}
            initialEndMonthDate={initialEndMonthDate}
            showMoreText={text.showMore}
          />
        </Spacing>
      </ScrollView>
    </>
  );
};
