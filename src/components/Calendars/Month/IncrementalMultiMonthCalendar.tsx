import { addMonths, subMonths } from 'date-fns';
import * as React from 'react';

import { MultiMonthCalendar } from '..';
import { Button } from '../../Button';
import { Spacing } from '../../Layout';
import { MultiMonthCalendarProps } from './MultiMonthCalendar';

export interface IncrementalMultiMonthCalendarProps
  extends MultiMonthCalendarProps {
  showMoreText?: string;
  initialStartMonthDate?: Date;
  initialEndMonthDate?: Date;
}

const IncrementalMultiMonthCalendarBase = (
  props: IncrementalMultiMonthCalendarProps,
) => {
  const {
    showMoreText = 'Show more months',
    initialStartMonthDate = subMonths(new Date(), 1),
    initialEndMonthDate = addMonths(new Date(), 1),
    ...multiMonthCalendarProps
  } = props;
  const [endMonthDate, setEndMonthDate] = React.useState(initialEndMonthDate);
  const [startMonthDate, setStartMonthDate] = React.useState(
    initialStartMonthDate,
  );

  return (
    <>
      <MultiMonthCalendar
        {...multiMonthCalendarProps}
        startMonthDate={startMonthDate}
        endMonthDate={endMonthDate}
      />
      <Spacing paddingTop={3}>
        <Button
          onPress={() => setEndMonthDate(addMonths(endMonthDate, 2))}
          title={showMoreText}
          appearance="minimal"
          color="primary"
        />
      </Spacing>
    </>
  );
};

export const IncrementalMultiMonthCalendar = IncrementalMultiMonthCalendarBase;

export default IncrementalMultiMonthCalendar;
