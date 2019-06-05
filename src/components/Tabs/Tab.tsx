import * as React from 'react';
import { DeepPartial, Omit } from 'ts-essentials';

import { initialMeasurements, Measurements } from '../../hooks';
import { useTheme } from '../../theme';
import { mergeStyles, ReplaceReturnType } from '../../utils/mergeStyles';
import { Button, ButtonProps } from '../Button';
import { ViewMeasure } from '../Helpers';
import { GetTabStyles, getTabStyles, TabStyles } from './Tab.styles';

export interface TabProps
  extends Omit<Omit<ButtonProps, 'onPress'>, 'getStyles'> {
  index: number;
  isActive?: boolean;
  getStyles?: ReplaceReturnType<GetTabStyles, DeepPartial<TabStyles>>;
  onPress: (index: number) => void;
  onActive?: (index: number, measurements: Measurements) => void;
}

export const Tab = (props: TabProps) => {
  const {
    isActive = false,
    getStyles,
    index,
    onPress,
    onActive = () => {
      return;
    },
    ...buttonProps
  } = props;
  const [measurements, setMeasurements] = React.useState(initialMeasurements);
  const theme = useTheme();
  const { containerStyle, buttonStyle, textStyle } = mergeStyles(
    getTabStyles,
    getStyles,
  )({}, theme);

  React.useEffect(() => {
    if (isActive) onActive(index, measurements);
  }, [isActive, measurements]);

  return (
    <ViewMeasure onMeasure={setMeasurements} style={containerStyle}>
      <Button
        color={isActive ? 'primary' : 'default'}
        appearance="minimal"
        getStyles={() => ({ buttonStyle, textStyle })}
        onPress={() => onPress(index)}
        {...buttonProps}
      />
    </ViewMeasure>
  );
};
