import {
  addDays,
  eachDay,
  endOfMonth,
  format,
  getMonth,
  getYear,
  isAfter,
  isBefore,
  startOfMonth,
  subDays,
} from 'date-fns';

import { DAY_DATE_FORMAT } from '../../constants';
import { Week } from '../../types';
import { chunk } from './chunk';

export const getDay = (date: Date) => format(date, 'D');

export const getFirstDayOfWeek = (firstDayOfWeekIndex: number) =>
  (7 + firstDayOfWeekIndex) % 7 || 7;

export const getLastDayOfWeek = (firstDayOfWeekIndex: number) =>
  (firstDayOfWeekIndex + 6) % 7;

const getMonthDatesFromDate = (date: Date): Date[] =>
  eachDay(startOfMonth(date), endOfMonth(date));

export const getMonthDates = (
  month: number,
  year: 'current' | number = 'current',
): Date[] => {
  if (year === 'current') {
    const currentYearMonthDate = new Date();
    currentYearMonthDate.setMonth(month);

    return getMonthDatesFromDate(currentYearMonthDate);
  }

  const currentMonthDate = new Date(year, month);
  return getMonthDatesFromDate(currentMonthDate);
};

export const getMonthDayDates = (
  month: number,
  year: 'current' | number = 'current',
) => getMonthDates(month, year).map(d => format(d, DAY_DATE_FORMAT));

export const monthPage = (date: Date, firstDayOfWeekIndex: number) => {
  const month = getMonth(date);
  const days = getMonthDates(month, getYear(date));
  let before: Date[] = [];
  let after: Date[] = [];

  const firstDayOfWeek = getFirstDayOfWeek(firstDayOfWeekIndex);
  const lastDayOfWeek = getLastDayOfWeek(firstDayOfWeekIndex);

  let from = days[0];
  if (from.getDay() !== firstDayOfWeek) {
    from = addDays(from, -(from.getDay() + 7 - firstDayOfWeek) % 7);
  }

  let to = days[days.length - 1];
  if (to.getDay() !== lastDayOfWeek) {
    to = addDays(to, (lastDayOfWeek + 7 - to.getDay()) % 7);
  }

  if (isBefore(from, days[0])) {
    before = eachDay(from, subDays(days[0], 1));
  }

  if (isAfter(to, days[days.length - 1])) {
    after = eachDay(addDays(days[days.length - 1], 1), to);
  }

  return before.concat(days, after);
};

export const getWeeksInMonth = (date: Date, firstDayOfWeek: number): Week[] => {
  return chunk(
    monthPage(date, firstDayOfWeek).map(dateInMonth => ({
      availableTimes: [],
      calendarEvents: [],
      date: dateInMonth,
    })),
    7,
  ).map((week, index) => ({ days: week, weekIndex: index }));
};
