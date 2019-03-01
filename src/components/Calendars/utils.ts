import { isBefore } from 'date-fns';

export const marshalTimeRange = (
  startDate: Date | null = null,
  endDate: Date | null = null,
): [Date | null, Date | null] => {
  if (endDate && startDate && isBefore(endDate, startDate)) {
    console.error('Selected end date cannot be before selected start date');
    return [null, null];
  }

  if (endDate && !startDate) {
    console.error('Selected end date cannot exist without selected start date');
    return [null, null];
  }

  return [startDate, endDate];
};
