import { format } from 'date-fns';
import * as React from 'react';

import { Box, Spacing } from '../../Layout';
import { Heading, Text } from '../../Typography';
import { Day } from '../types';

export interface MonthHeaderProps {
  date: Date;
  days: Day[];
}

const MonthHeader = (props: MonthHeaderProps) => {
  const { days, date } = props;

  return (
    <Box>
      <Spacing paddingBottom={4}>
        <Heading size="xxxlarge">{format(date, 'MMMM YYYY')}</Heading>
      </Spacing>
      <Box flex={1} flexDirection="row">
        {days.map(day => {
          return (
            <Spacing
              key={day.date.toISOString()}
              flex={1}
              justifyContent="center"
              alignItems="center"
              padding={1}
            >
              <Text>{format(day.date, 'dd')}</Text>
            </Spacing>
          );
        })}
      </Box>
    </Box>
  );
};

export default MonthHeader;
