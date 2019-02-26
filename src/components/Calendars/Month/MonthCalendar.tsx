import * as React from 'react';

import { Box } from '../../Layout';
import { DEFAULT_FIRST_DAY_OF_WEEK } from '../constants';
import MonthBody, { MonthBodyBaseProps } from './MonthBody';
import { getWeeksInMonth } from './utils/getWeeksInMonth';

export interface MonthCalendarProps extends MonthBodyBaseProps {
  firstDayOfWeekIndex?: number;
}

const MonthCalendar = (props: MonthCalendarProps) => {
  const {
    date = new Date(),
    firstDayOfWeekIndex = DEFAULT_FIRST_DAY_OF_WEEK,
    selectedStartDate,
    selectedEndDate,
    onSelect,
  } = props;

  const weeks = getWeeksInMonth(date, firstDayOfWeekIndex);

  return (
    <Box flex={1} width="100%">
      <MonthBody
        date={date}
        onSelect={onSelect}
        weeks={weeks}
        selectedStartDate={selectedStartDate}
        selectedEndDate={selectedEndDate}
      />
    </Box>
  );
};

export default MonthCalendar;
