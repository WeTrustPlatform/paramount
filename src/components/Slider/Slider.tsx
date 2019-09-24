import * as React from 'react';
import { PanResponder, View } from 'react-native';

import { usePrevious } from '../../hooks';
import { ControlSize, useTheme } from '../../theme';
import { mergeStyles } from '../../utils/mergeStyles';
import { ViewMeasure } from '../Helpers';
import { GetSliderStyles, getSliderStyles } from './Slider.styles';

type RangeValue = [number, number];
type SliderValue = number | RangeValue;
type Value<TIsRange extends boolean> = TIsRange extends true
  ? [number, number]
  : number;

export interface SliderProps<TIsRange extends boolean> {
  /**
   * Set whether it should slide a range. You should specify the value to get proper type-checking.
   * However, if initialValue is set, it will take precedence over this prop
   * @default false
   */
  isRange?: TIsRange;

  /**
   * Size of the thumb, and thus the whole slider
   * @default "medium"
   */
  size?: ControlSize | number;

  /**
   * Initial value of the slider. The value should be between minimumValue
   * and maximumValue; which default to 0 and 1 respectively.
   *
   * *This is not a controlled component*; you don't need to update the
   * value during dragging.
   * @default 0
   */
  value?: Value<TIsRange>;

  /**
   * Step value of the slider. The value should be
   * between 0 and (maximumValue - minimumValue).
   * @default 0
   */
  step?: number;

  /**
   * Initial minimum value of the slider.
   * @default 0
   */
  minimumValue?: number;

  /**
   * Initial maximum value of the slider.
   * @default 1
   */
  maximumValue?: number;

  /**
   * If true the user won't be able to move the slider.
   * @default false
   */
  disabled?: boolean;

  /**
   * Callback continuously called while the user is dragging the slider.
   */
  onValueChange?: (value: Value<TIsRange>) => void;

  /**
   * Callback that is called when the user releases the slider;
   * regardless if the value has changed. The current value is passed
   * as an argument to the callback handler.
   */
  onSlidingComplete?: (value: Value<TIsRange>) => void;

  /**
   * Callback called when the user starts changing the value.
   */
  onSlidingStart?: (value: Value<TIsRange>) => void;

  /**
   * Callback to get element styles.
   */
  getStyles?: GetSliderStyles;

  /** Label for screen readers */
  leftThumbAccessibilityLabel?: string;

  /** Hint for screen readers */
  leftThumbAccessibilityHint?: string;

  /** Label for screen readers */
  rightThumbAccessibilityLabel?: string;

  /** Hint for screen readers */
  rightThumbAccessibilityHint?: string;

  /**
   * Used to locate this view in UI automation tests.
   */
  testID?: string;
}

const initialMeasurements = {
  height: 0,
  pageX: 0,
  pageY: 0,
  width: 0,
  x: 0,
  y: 0,
};

const getBoundedValueBase = ({
  maximumValue,
  minimumValue,
}: {
  maximumValue: number;
  minimumValue: number;
}) => (value: number) =>
  value > maximumValue
    ? maximumValue
    : value < minimumValue
    ? minimumValue
    : value;

const isRangeValue = (value: SliderValue): value is [number, number] =>
  Array.isArray(value);

const getLeftValue = (value: SliderValue): number => {
  if (isRangeValue(value)) return value[0];
  return value;
};

const getRightValue = (value: SliderValue): number => {
  if (isRangeValue(value)) return value[1];
  return value;
};

const setLeftValue = (
  previousValue: SliderValue,
  leftValue: number,
): SliderValue => {
  return isRangeValue(previousValue)
    ? [leftValue, previousValue[1]]
    : leftValue;
};

const setRightValue = (
  previousValue: SliderValue,
  rightValue: number,
): SliderValue => {
  return isRangeValue(previousValue)
    ? [previousValue[0], rightValue]
    : rightValue;
};

export const Slider = <TIsRange extends boolean>(
  props: SliderProps<TIsRange>,
) => {
  const {
    value: initialValue = 0,
    onSlidingStart = () => undefined,
    onSlidingComplete = () => undefined,
    onValueChange = () => undefined,
    minimumValue = 0,
    maximumValue = 1,
    step = 0,
    getStyles,
    isRange = false,
    leftThumbAccessibilityLabel,
    leftThumbAccessibilityHint,
    rightThumbAccessibilityHint,
    rightThumbAccessibilityLabel,
  } = props;

  const finalInitialValue =
    initialValue || (isRange ? [minimumValue, maximumValue] : minimumValue);

  const [value, setValue] = React.useState(finalInitialValue);
  const [isSliding, setIsSliding] = React.useState(false);
  const [trackMeasurements, setTrackMeasurements] = React.useState(
    initialMeasurements,
  );
  const prevIsSliding = usePrevious(isSliding);
  const valuePerPixel = (maximumValue - minimumValue) / trackMeasurements.width;
  const pixelPerValue = trackMeasurements.width / (maximumValue - minimumValue);
  const isRangeSlider = isRangeValue(value);

  const handleLeftSlide = (dx: number) => {
    const leftValue = getLeftValue(value) + dx * valuePerPixel;
    const roundedLeftValue = step
      ? Math.round(leftValue / step) * step
      : leftValue;

    const finalLeftValue = getBoundedValueBase({
      maximumValue: isRangeSlider ? getRightValue(value) - step : maximumValue,
      minimumValue,
    })(getLeftValue(roundedLeftValue));
    const updatedValue = setLeftValue(value, finalLeftValue);

    setValue(updatedValue);
    onValueChange(updatedValue as Value<TIsRange>);
  };

  const handleRightSlide = (dx: number) => {
    const rightValue = getRightValue(value) + dx * valuePerPixel;
    const roundedRightValue = step
      ? Math.round(rightValue / step) * step
      : rightValue;

    const finalRightValue = getBoundedValueBase({
      maximumValue,
      minimumValue: getLeftValue(value) + step,
    })(getRightValue(roundedRightValue));

    const updatedValue = setRightValue(value, finalRightValue);

    setValue(updatedValue);
    onValueChange(updatedValue as Value<TIsRange>);
  };

  const makeThumbRef = (handler: (dx: number) => void) =>
    PanResponder.create({
      onStartShouldSetPanResponder: () => {
        onSlidingStart(value as Value<TIsRange>);
        return true;
      },

      onPanResponderGrant: () => {
        setIsSliding(true);
      },

      onPanResponderMove: (_, { dx }) => handler(dx),

      onPanResponderRelease: () => {
        setIsSliding(false);
      },
    });

  const leftThumbRef = React.useRef(makeThumbRef(handleLeftSlide));
  const rightThumbRef = React.useRef(makeThumbRef(handleRightSlide));

  React.useEffect(() => {
    // We need to update the callback `onPanResponderMove` because it uses memoized `value`
    leftThumbRef.current = makeThumbRef(handleLeftSlide);
    rightThumbRef.current = makeThumbRef(handleRightSlide);

    // We need to callback here because we need latest value instead of memoized one
    if (prevIsSliding && !isSliding) {
      onSlidingComplete(value as Value<TIsRange>);
    }

    // We diff valuePerPixel because on loading the component it may be NaN as it is calculating the measurements of the track
  }, [isSliding, valuePerPixel]);

  const theme = useTheme();
  const {
    containerStyle,
    selectedTrackStyle,
    thumbStyle,
    unselectedTrackStyle,
  } = mergeStyles(getSliderStyles, getStyles, theme.components.getSliderStyles)(
    props,
    theme,
  );

  const left = getLeftValue(value) * pixelPerValue;
  const right = getRightValue(value) * pixelPerValue;
  const cursor = isSliding ? 'grabbing' : 'grab';

  return (
    <ViewMeasure onMeasure={setTrackMeasurements} style={{ ...containerStyle }}>
      <View style={unselectedTrackStyle} />
      <View
        style={{
          ...selectedTrackStyle,
          ...(isRangeSlider ? { left, width: right - left } : { width: left }),
        }}
      />
      <View
        accessible
        // @ts-ignore
        style={{ ...thumbStyle, left: left - thumbStyle.width / 2, cursor }}
        accessibilityLabel={leftThumbAccessibilityLabel}
        accessibilityHint={leftThumbAccessibilityHint}
        {...leftThumbRef.current.panHandlers}
      />
      {isRangeSlider && (
        <View
          accessible
          // @ts-ignore
          style={{ ...thumbStyle, left: right - thumbStyle.width / 2, cursor }}
          accessibilityLabel={rightThumbAccessibilityLabel}
          accessibilityHint={rightThumbAccessibilityHint}
          {...rightThumbRef.current.panHandlers}
        />
      )}
    </ViewMeasure>
  );
};
