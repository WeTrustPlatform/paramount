import { addDays, format, startOfWeek } from 'date-fns';
import * as React from 'react';

import { Box, Spacing } from '../../Layout';
import { Text } from '../../Typography';
import { DEFAULT_FIRST_DAY_OF_WEEK } from '../constants';

export interface WeekDaysProps {
  firstDayOfWeekIndex?: number;
}

const getDaysInWeek = (firstDayOfWeekIndex: number) => {
  const week = [];
  const firstDayOfWeek = addDays(startOfWeek(new Date()), firstDayOfWeekIndex);

  for (let index = 0; index < 7; index++) {
    week.push(addDays(firstDayOfWeek, index));
  }

  return week;
};

export const WeekDays = (props: WeekDaysProps) => {
  const { firstDayOfWeekIndex = DEFAULT_FIRST_DAY_OF_WEEK } = props;
  const dates = getDaysInWeek(firstDayOfWeekIndex);

  return (
    <Box flex={1} flexDirection="row">
      {dates.map(date => {
        return (
          <Spacing
            key={date.toISOString()}
            flex={1}
            justifyContent="center"
            alignItems="center"
            padding={1}
          >
            <Text>{format(date, 'dd')}</Text>
          </Spacing>
        );
      })}
    </Box>
  );
};
