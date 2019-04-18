import { format } from 'date-fns';
import * as React from 'react';

import { useTheme } from '../../../theme';
import { Box } from '../../Layout';
import { Month } from '../types';
import { DATE_FORMAT } from './constants';
import MonthDay, { MonthDayBaseProps } from './MonthDay';

export interface MonthBodyProps extends MonthDayBaseProps {
  month: Month;
}

const MonthBody = (props: MonthBodyProps) => {
  const { onSelect, month } = props;

  const theme = useTheme();

  return (
    <Box>
      {month.weeks.map(week => (
        <Box flexDirection="row" key={week.index}>
          {week.days.map(day => {
            const {
              date,
              isCurrentMonth,
              isSelected,
              isSelectedStart,
              isSelectedEnd,
            } = day;

            if (!isCurrentMonth) {
              return (
                <Box
                  flex={1}
                  justifyContent="center"
                  alignItems="flex-start"
                  key={date.toISOString()}
                  paddingVertical={4}
                  zIndex={-1}
                >
                  <Box
                    backgroundColor={
                      isSelected
                        ? theme.colors.background.primaryDark
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
                key={format(date, DATE_FORMAT)}
              >
                <MonthDay
                  onSelect={onSelect}
                  date={date}
                  isSelected={isSelected}
                  isSelectionStart={isSelectedStart}
                  isSelectionEnd={isSelectedEnd}
                />
              </Box>
            );
          })}
        </Box>
      ))}
    </Box>
  );
};

const propsAreEqual = (
  prevProps: MonthBodyProps,
  nextProps: MonthBodyProps,
) => {
  return (
    prevProps.month.selectedRange === nextProps.month.selectedRange &&
    prevProps.onSelect === nextProps.onSelect
  );
};

export default React.memo(MonthBody, propsAreEqual);
