export interface Day {
  date: Date;

  /** Is the date in the month within the current month */
  isCurrentMonth: boolean;

  /** Is it in the selection */
  isSelected: boolean;
  /** Is it the first item in the selection */
  isSelectedStart: boolean;
  /** Is it the last item in the selection */
  isSelectedEnd: boolean;
}

export interface Week {
  days: Day[];
  key: string;
}

export interface Month {
  weeks: Week[];
  selectedDatesCount: number;
  key: string;
  month: Date;
}
