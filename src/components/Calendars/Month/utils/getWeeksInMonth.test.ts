import {
  getDaysInMonth,
  monthPageInDates,
  monthPageInWeeks,
} from './getWeeksInMonth';

describe('monthPageInWeeks', () => {
  const table = [
    ['January 2019', 5, new Date(2019, 0, 5)],
    ['February 2019', 5, new Date(2019, 1, 5)],
    ['September 2019', 6, new Date(2019, 8, 5)],
  ];

  test.each(table)('%s should have %i weeks', (month, numberOfWeeks, date) => {
    const dates = monthPageInWeeks(date as Date);

    expect(dates).toHaveLength(numberOfWeeks as number);
  });
});

describe('monthPageInDates', () => {
  const table = [
    ['January 2019', 35, new Date(2019, 0, 5)],
    ['February 2019', 35, new Date(2019, 1, 5)],
    ['September 2019', 42, new Date(2019, 8, 5)],
  ];

  test.each(table)('%s should have %i days', (month, numberOfDays, date) => {
    const dates = monthPageInDates(date as Date, 1);

    expect(dates).toHaveLength(numberOfDays as number);
  });
});

describe('getDaysInMonth', () => {
  const table = [
    [9, new Date(2019, 1), new Date(2019, 1, 12), new Date(2019, 1, 20)],
    [1, new Date(2019, 1), new Date(2019, 1, 12), null],
    [20, new Date(2019, 1), new Date(2019, 1, 12), new Date(2019, 2, 20)],
    [7, new Date(2019, 1), new Date(2019, 0, 12), new Date(2019, 1, 3)],
  ];

  test.each(table)(
    'should mark %i days in %s given %s as selectedStartDate and %s as selectedEndDate',
    (
      expectedSelectedDaysCount,
      monthDate,
      selectedStartDate,
      selectedEndDate,
    ) => {
      const days = getDaysInMonth(
        monthDate as Date,
        selectedStartDate as Date,
        selectedEndDate as Date,
      );

      const selectedDaysCount = days.filter(day => day.isSelected).length;

      expect(selectedDaysCount).toBe(expectedSelectedDaysCount);
    },
  );
});
