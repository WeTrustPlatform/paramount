import * as React from 'react';

import { ThemeContext } from '../../../theme';
import { Box } from '../../Layout';
import { Month } from '../types';
import MonthDay, { MonthDayBaseProps } from './MonthDay';

export interface MonthBodyProps extends MonthDayBaseProps {
  month: Month;
}

const MonthBody = (props: MonthBodyProps) => {
  const { onSelect, month } = props;

  const theme = React.useContext(ThemeContext);

  return (
    <Box>
      {month.weeks.map(week => (
        <Box flexDirection="row" key={week.key}>
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
                key={date.toISOString()}
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

const propsAreEqual = (prevProps: MonthBodyProps, props: MonthBodyProps) => {
  return prevProps.month.selectedDatesCount === props.month.selectedDatesCount;
};

export default React.memo(MonthBody, propsAreEqual);
