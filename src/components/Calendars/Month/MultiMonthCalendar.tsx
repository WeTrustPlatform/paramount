import { addMonths, differenceInMonths, format } from 'date-fns';
import * as React from 'react';
import { Omit } from 'ts-essentials';

import { Box, Spacing } from '../../Layout';
import { Heading } from '../../Typography';
import { DEFAULT_FIRST_DAY_OF_WEEK } from '../constants';
import { marshalTimeRange } from '../utils';
import MonthCalendar, { MonthCalendarProps } from './MonthCalendar';

export interface MultiMonthCalendarProps
  extends Omit<MonthCalendarProps, 'date'> {
  startMonthDate: Date;
  endMonthDate: Date;
}

const getMonthsDates = (startDate: Date, endDate: Date) => {
  const monthsCount = differenceInMonths(endDate, startDate);

  const dates: Date[] = [];

  for (let index = 0; index < monthsCount; index++) {
    dates.push(addMonths(startDate, index));
  }

  return dates;
};

const MultiMonthCalendar = (props: MultiMonthCalendarProps) => {
  const {
    firstDayOfWeekIndex = DEFAULT_FIRST_DAY_OF_WEEK,
    startMonthDate = new Date(),
    endMonthDate = addMonths(new Date(), 1),
    selectedStartDate,
    selectedEndDate,
    onSelect,
  } = props;

  const [startDate, endDate] = marshalTimeRange(startMonthDate, endMonthDate);
  const months = startDate && endDate ? getMonthsDates(startDate, endDate) : [];

  return (
    <Box flex={1} width="100%">
      {months.map(month => {
        return (
          <Box key={month.toISOString()}>
            <Spacing paddingVertical={3}>
              <Heading size="xlarge">{format(month, 'MMMM YYYY')}</Heading>
            </Spacing>
            <MonthCalendar
              date={month}
              firstDayOfWeekIndex={firstDayOfWeekIndex}
              selectedStartDate={selectedStartDate}
              selectedEndDate={selectedEndDate}
              onSelect={onSelect}
            />
          </Box>
        );
      })}
    </Box>
  );
};

export default MultiMonthCalendar;
