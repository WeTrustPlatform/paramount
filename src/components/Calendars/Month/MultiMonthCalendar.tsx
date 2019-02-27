import { addMonths, format } from 'date-fns';
import * as React from 'react';
import { Omit } from 'ts-essentials';

import { Box, Spacing } from '../../Layout';
import { Heading } from '../../Typography';
import { DEFAULT_FIRST_DAY_OF_WEEK } from '../constants';
import { marshalTimeRange } from '../utils';
import MonthBody from './MonthBody';
import { MonthCalendarProps } from './MonthCalendar';
import { getWeeksInMultiMonth } from './utils/getWeeksInMonth';

export interface MultiMonthCalendarProps
  extends Omit<MonthCalendarProps, 'date'> {
  startMonthDate: Date;
  endMonthDate: Date;
}

const MultiMonthCalendar = (props: MultiMonthCalendarProps) => {
  const {
    firstDayOfWeekIndex = DEFAULT_FIRST_DAY_OF_WEEK,
    startMonthDate = new Date(),
    endMonthDate = addMonths(new Date(), 1),
    selectedStartDate: propSelectedStartDate = null,
    selectedEndDate: propSelectedEndDate = null,
    onSelect,
  } = props;

  const [startDate, endDate] = marshalTimeRange(startMonthDate, endMonthDate);

  if (!startDate || !endDate) {
    throw new Error(
      'Please pass correct startMonthDate and endMonthDate in MultiMonthCalendar',
    );
  }

  const [selectedStartDate, selectedEndDate] = marshalTimeRange(
    propSelectedStartDate,
    propSelectedEndDate,
  );

  const months = getWeeksInMultiMonth(
    startDate,
    endDate,
    selectedStartDate,
    selectedEndDate,
    firstDayOfWeekIndex,
  );

  return (
    <Box flex={1} width="100%">
      {months.map(month => {
        return (
          <Box key={month.month.toISOString()}>
            <Spacing paddingVertical={3}>
              <Heading size="xlarge">
                {format(month.month, 'MMMM YYYY')}
              </Heading>
            </Spacing>
            <MonthBody weeks={month.weeks} onSelect={onSelect} />
          </Box>
        );
      })}
    </Box>
  );
};

export default MultiMonthCalendar;
