import {
  addDays,
  addMonths,
  areRangesOverlapping,
  differenceInMonths,
  eachDay,
  endOfMonth,
  isAfter,
  isBefore,
  isSameDay,
  isWithinRange,
  startOfMonth,
  subDays,
} from 'date-fns';
import memoize from 'fast-memoize';

import { Day, Month, Week } from '../../types';
import { chunk } from './chunk';

const getFirstDayOfWeek = (firstDayOfWeekIndex: number) =>
  (7 + firstDayOfWeekIndex) % 7 || 7;

const getLastDayOfWeek = (firstDayOfWeekIndex: number) =>
  (firstDayOfWeekIndex + 6) % 7;

const getMonthDatesFromDate = (date: Date): Date[] =>
  eachDay(startOfMonth(date), endOfMonth(date));

const getDatesBefore = (
  startOfMonthDate: Date,
  firstDayOfWeekIndex: number,
) => {
  const firstDayOfWeek = getFirstDayOfWeek(firstDayOfWeekIndex);
  let beforeDates: Date[] = [];

  let fromDate = startOfMonthDate;

  if (fromDate.getDay() !== firstDayOfWeek) {
    fromDate = addDays(fromDate, -(fromDate.getDay() + 7 - firstDayOfWeek) % 7);
  }

  if (isBefore(fromDate, startOfMonthDate)) {
    beforeDates = eachDay(fromDate, subDays(startOfMonthDate, 1));
  }

  return beforeDates;
};

const getDatesAfter = (endOfMonthDate: Date, firstDayOfWeekIndex: number) => {
  let afterDates: Date[] = [];

  const lastDayOfWeek = getLastDayOfWeek(firstDayOfWeekIndex);

  let toDate = endOfMonthDate;

  if (toDate.getDay() !== lastDayOfWeek) {
    toDate = addDays(toDate, (lastDayOfWeek + 7 - toDate.getDay()) % 7);
  }

  if (isAfter(toDate, endOfMonthDate)) {
    afterDates = eachDay(addDays(endOfMonthDate, 1), toDate);
  }

  return afterDates;
};

export const monthPageInDates = (
  date: Date,
  firstDayOfWeekIndex: number,
): Date[] => {
  const monthDates = getMonthDatesFromDate(date);
  const startOfMonthDate = monthDates[0];
  const endOfMonthDate = monthDates[monthDates.length - 1];

  const beforeDates = getDatesBefore(startOfMonthDate, firstDayOfWeekIndex);
  const afterDates = getDatesAfter(endOfMonthDate, firstDayOfWeekIndex);

  return beforeDates.concat(monthDates, afterDates);
};

const chunkBySeven = <TData = any>(array: TData[]) => chunk(array, 7);

export const monthPageInWeeks = (
  monthDate: Date,
  firstDayOfWeekIndex: number = 1,
) => chunkBySeven(monthPageInDates(monthDate, firstDayOfWeekIndex));

const transformDateToDay = (
  isSelected: boolean,
  isCurrentMonth: boolean = true,
) => (date: Date): Day => ({
  date,
  isCurrentMonth,
  isSelected,
  isSelectedEnd: false,
  isSelectedStart: false,
});

const getCurrentMonthDays = (
  monthDates: Date[],
  selectedStartDate: Date | null,
  selectedEndDate: Date | null,
) => {
  if (!selectedStartDate) return monthDates.map(transformDateToDay(false));

  const selectedStartDateIndex = monthDates.findIndex(date =>
    isSameDay(date, selectedStartDate),
  );
  const isSelectedStartDateWithinMonth = selectedStartDateIndex !== -1;

  const selectedEndDateIndex = selectedEndDate
    ? monthDates.findIndex(date => isSameDay(date, selectedEndDate))
    : selectedStartDateIndex;

  const isSelectedEndDateWithinMonth = selectedEndDateIndex !== -1;

  const beforeSelectedDays = isSelectedStartDateWithinMonth
    ? monthDates.slice(0, selectedStartDateIndex).map(transformDateToDay(false))
    : [];

  const selectedDates = monthDates.slice(
    isSelectedStartDateWithinMonth ? selectedStartDateIndex : 0,
    isSelectedEndDateWithinMonth ? selectedEndDateIndex : monthDates.length,
  );

  const selectedDays = selectedDates.map(transformDateToDay(true));

  const afterSelectedDays = isSelectedEndDateWithinMonth
    ? monthDates.slice(selectedEndDateIndex).map(transformDateToDay(false))
    : [];

  const days = beforeSelectedDays.concat(selectedDays, afterSelectedDays);

  days[selectedStartDateIndex] = {
    ...days[selectedStartDateIndex],
    isSelected: true,
    isSelectedStart: true,
  };

  days[selectedEndDateIndex] = {
    ...days[selectedEndDateIndex],
    isSelected: true,
    isSelectedEnd: true,
  };

  return days;
};

const getBeforeMonthDays = (
  startOfMonthDate: Date,
  selectedStartDate: Date | null,
  firstDayOfWeekIndex: number = 1,
) => {
  const hasSelectedDatesBeforeMonth = !!(
    selectedStartDate && isBefore(selectedStartDate, startOfMonthDate)
  );
  const beforeDates = getDatesBefore(startOfMonthDate, firstDayOfWeekIndex);

  return beforeDates.map(
    transformDateToDay(hasSelectedDatesBeforeMonth, false),
  );
};

const getAfterMonthDays = (
  endOfMonthDate: Date,
  selectedEndDate: Date | null,
  firstDayOfWeekIndex: number = 1,
) => {
  const hasSelectedDatesAfterMonth = !!(
    selectedEndDate && isAfter(selectedEndDate, endOfMonthDate)
  );
  const afterDates = getDatesAfter(endOfMonthDate, firstDayOfWeekIndex);

  return afterDates.map(transformDateToDay(hasSelectedDatesAfterMonth, false));
};

export const getDaysInMonth = (
  monthDate: Date,
  selectedStartDate: Date | null,
  selectedEndDate: Date | null,
  firstDayOfWeekIndex: number = 1,
) => {
  const monthDates = getMonthDatesFromDate(monthDate);
  const startOfMonthDate = monthDates[0];
  const endOfMonthDate = monthDates[monthDates.length - 1];

  const currentDays = getCurrentMonthDays(
    monthDates,
    selectedStartDate,
    selectedEndDate,
  );
  const beforeDays = getBeforeMonthDays(
    startOfMonthDate,
    selectedStartDate,
    firstDayOfWeekIndex,
  );
  const afterDays = getAfterMonthDays(
    endOfMonthDate,
    selectedEndDate,
    firstDayOfWeekIndex,
  );

  return beforeDays.concat(currentDays, afterDays);
};

const memoizedGetDaysInMonth = memoize(getDaysInMonth);

export const getWeeksInMonth = (
  monthDate: Date,
  selectedStartDate: Date | null,
  selectedEndDate: Date | null,
  firstDayOfWeekIndex: number = 1,
): Week[] => {
  const days = memoizedGetDaysInMonth(
    monthDate,
    selectedStartDate,
    selectedEndDate,
    firstDayOfWeekIndex,
  );

  return chunkBySeven(days).map((week, index) => ({
    days: week,
    weekIndex: index,
  }));
};

const getMonthsDates = (startDate: Date, endDate: Date) => {
  const monthsCount = differenceInMonths(endDate, startDate);

  const monthsDates: Date[] = [];

  for (let index = 0; index < monthsCount; index++) {
    monthsDates.push(addMonths(startDate, index));
  }

  return monthsDates;
};

export const getWeeksInMultiMonth = (
  startMonthDate: Date,
  endMonthDate: Date,
  selectedStartDate: Date | null,
  selectedEndDate: Date | null,
  firstDayOfWeekIndex: number = 1,
): Month[] => {
  const monthsDates = getMonthsDates(startMonthDate, endMonthDate);

  return monthsDates.map(monthDate => {
    if (!selectedStartDate) {
      return {
        month: monthDate,
        weeks: getWeeksInMonth(monthDate, null, null, firstDayOfWeekIndex),
      };
    }

    const startOfMonthDate = startOfMonth(monthDate);
    const endOfMonthDate = endOfMonth(monthDate);

    if (!selectedEndDate) {
      const isSelectedStartDateWithinMonth = isWithinRange(
        selectedStartDate,
        startOfMonthDate,
        endOfMonthDate,
      );

      return isSelectedStartDateWithinMonth
        ? {
            month: monthDate,
            weeks: getWeeksInMonth(
              monthDate,
              selectedStartDate,
              null,
              firstDayOfWeekIndex,
            ),
          }
        : {
            month: monthDate,
            weeks: getWeeksInMonth(monthDate, null, null, firstDayOfWeekIndex),
          };
    }

    const isMonthOverlappingWithSelectedRange = areRangesOverlapping(
      startOfMonthDate,
      endOfMonthDate,
      selectedStartDate,
      selectedEndDate,
    );

    return isMonthOverlappingWithSelectedRange
      ? {
          month: monthDate,
          weeks: getWeeksInMonth(
            monthDate,
            selectedStartDate,
            selectedEndDate,
            firstDayOfWeekIndex,
          ),
        }
      : {
          month: monthDate,
          weeks: getWeeksInMonth(monthDate, null, null, firstDayOfWeekIndex),
        };
  });
};
