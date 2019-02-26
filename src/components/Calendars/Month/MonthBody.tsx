import {
  endOfMonth,
  isAfter,
  isBefore,
  isSameDay,
  isSameMonth,
  isWithinRange,
  startOfMonth,
} from 'date-fns';
import * as React from 'react';

import { ThemeContext } from '../../../theme';
import { Box } from '../../Layout';
import { Week } from '../types';
import MonthDay, { MonthDayBaseProps } from './MonthDay';

export interface MonthBodyBaseProps extends MonthDayBaseProps {
  /** Date to which display its month for. @default Date */
  date?: Date;
  /** Highlights the date or start date on the calendar */
  selectedStartDate?: Date;
  /** Highlights the end date on the calendar. Will created a selected range */
  selectedEndDate?: Date;
}

export interface MonthBodyProps extends MonthBodyBaseProps {
  weeks: Week[];
}

const marshalSelectedDates = (
  selectedStartDate: Date | null = null,
  selectedEndDate: Date | null = null,
) => {
  if (
    selectedEndDate &&
    selectedStartDate &&
    isBefore(selectedEndDate, selectedStartDate)
  ) {
    console.error('Selected end date cannot be before selected start date');
    return { selectedStartDate: null, selectedEndDate: null };
  }

  if (selectedEndDate && !selectedStartDate) {
    console.error('Selected end date cannot exist without selected start date');
    return { selectedStartDate: null, selectedEndDate: null };
  }

  return { selectedStartDate, selectedEndDate };
};

const MonthBody = (props: MonthBodyProps) => {
  const {
    weeks,
    onSelect,
    date = new Date(),
    selectedStartDate: propSelectedStartDate = null,
    selectedEndDate: propSelectedEndDate = null,
  } = props;
  const { selectedStartDate, selectedEndDate } = marshalSelectedDates(
    propSelectedStartDate,
    propSelectedEndDate,
  );

  const theme = React.useContext(ThemeContext);

  const isSelectedEndDateBeyondThisMonth = selectedEndDate
    ? isAfter(selectedEndDate, endOfMonth(date))
    : false;
  const isSelectedStartDateBeforeThisMonth = selectedStartDate
    ? isBefore(selectedStartDate, startOfMonth(date))
    : false;

  return (
    <Box>
      {weeks.map(week => (
        <Box flexDirection="row" key={week.weekIndex}>
          {week.days.map(day => {
            const isCurrentMonth = isSameMonth(day.date, date);
            const isMonthBefore = isBefore(day.date, startOfMonth(date));
            const isMonthAfter = isAfter(day.date, endOfMonth(date));

            if (!isCurrentMonth) {
              return (
                <Box
                  flex={1}
                  justifyContent="center"
                  alignItems="flex-start"
                  key={day.date.toISOString()}
                  paddingVertical={4}
                  zIndex={-1}
                >
                  <Box
                    backgroundColor={
                      (isMonthBefore && isSelectedStartDateBeforeThisMonth) ||
                      (isMonthAfter && isSelectedEndDateBeyondThisMonth)
                        ? theme.colors.background.primary.focus
                        : 'transparent'
                    }
                    flex={1}
                    height={40}
                    width="100%"
                  />
                </Box>
              );
            }

            return (
              <Box
                flex={1}
                justifyContent="center"
                alignItems="flex-start"
                key={day.date.toISOString()}
              >
                <MonthDay
                  onSelect={onSelect}
                  date={day.date}
                  isSelected={
                    selectedStartDate && selectedEndDate
                      ? isWithinRange(
                          day.date,
                          selectedStartDate,
                          selectedEndDate,
                        )
                      : false
                  }
                  isSelectionStart={
                    selectedStartDate
                      ? isSameDay(day.date, selectedStartDate)
                      : false
                  }
                  hasNext={!!selectedEndDate}
                  isSelectionEnd={
                    selectedEndDate
                      ? isSameDay(day.date, selectedEndDate)
                      : false
                  }
                />
              </Box>
            );
          })}
        </Box>
      ))}
    </Box>
  );
};

export default MonthBody;
