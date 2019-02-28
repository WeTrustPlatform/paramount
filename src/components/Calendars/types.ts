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
  index: number;
}

export interface Month {
  weeks: Week[];
  selectedRange: string;
  formattedMonth: string;
  month: Date;
}
