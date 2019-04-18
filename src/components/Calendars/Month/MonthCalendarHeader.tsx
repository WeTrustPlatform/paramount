import * as React from 'react';
import { TouchableOpacity } from 'react-native';

import { Box } from '../../Layout';
import { Heading } from '../../Typography';

export interface MonthCalendarHeaderProps {
  /** Prop to be passed to modal */
  useRange?: boolean;

  onPressStartDate?: () => void;
  onPressEndDate?: () => void;
  selectedStartDate?: Date | null;
  selectedEndDate?: Date | null;

  headerStartDateText?: string;
  placeholderStartDateText?: string;
  headerEndDateText?: string;
  placeholderEndDateText?: string;
}

export const MonthCalendarHeader = (props: MonthCalendarHeaderProps) => {
  const {
    selectedStartDate = null,
    selectedEndDate = null,
    useRange = false,
    onPressStartDate,
    onPressEndDate,
    headerStartDateText,
    placeholderStartDateText,
    headerEndDateText,
    placeholderEndDateText,
  } = props;

  return (
    <Box flexDirection="row">
      <Box flex={1}>
        <TouchableOpacity onPress={onPressStartDate}>
          <Heading size="xlarge">
            {selectedStartDate ? headerStartDateText : placeholderStartDateText}
          </Heading>
        </TouchableOpacity>
      </Box>
      {useRange && (
        <Box flex={1}>
          <TouchableOpacity onPress={onPressEndDate}>
            <Heading size="xlarge">
              {selectedEndDate ? headerEndDateText : placeholderEndDateText}
            </Heading>
          </TouchableOpacity>
        </Box>
      )}
    </Box>
  );
};
