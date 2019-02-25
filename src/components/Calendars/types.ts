export type RelativeFromTodayType = 'past' | 'today' | 'future';

/** DayDate is in a format of YYYY-MM-DD */
export type DayDate = string;

/** Assumes within a day. MUST NOT BE spanning over two days */
export interface AvailableTime {
  endTime: Date;
  startTime: Date;
}

export interface Day<TCalendarEvent = any> {
  date: Date;
  calendarEvents: TCalendarEvent[];
  availableTimes: AvailableTime[];
}

export interface Week {
  days: Day[];
  weekIndex: number;
}

export interface CalendarEvent {
  startTime: Date;
  endTime: Date;
  id: string;
}
