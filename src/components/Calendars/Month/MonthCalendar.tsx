import * as React from 'react';

import { Box } from '../../Layout';
import { DEFAULT_FIRST_DAY_OF_WEEK } from '../constants';
import { marshalTimeRange } from '../utils';
import MonthBody from './MonthBody';
import { MonthDayBaseProps } from './MonthDay';
import { getWeeksInMonth } from './utils/getWeeksInMonth';

export interface MonthCalendarProps extends MonthDayBaseProps {
  /** Date to which display its month for. @default Date */
  date?: Date;
  /** Highlights the date or start date on the calendar */
  selectedStartDate?: Date | null;
  /** Highlights the end date on the calendar. Will created a selected range */
  selectedEndDate?: Date | null;
  firstDayOfWeekIndex?: number;
}

export const MonthCalendar = (props: MonthCalendarProps) => {
  const {
    date = new Date(),
    firstDayOfWeekIndex = DEFAULT_FIRST_DAY_OF_WEEK,
    selectedStartDate: propSelectedStartDate = null,
    selectedEndDate: propSelectedEndDate = null,
    onSelect,
  } = props;

  const [selectedStartDate, selectedEndDate] = marshalTimeRange(
    propSelectedStartDate,
    propSelectedEndDate,
  );

  const month = getWeeksInMonth(
    date,
    selectedStartDate,
    selectedEndDate,
    firstDayOfWeekIndex,
  );

  return (
    <Box flex={1} width="100%">
      <MonthBody onSelect={onSelect} month={month} />
    </Box>
  );
};
