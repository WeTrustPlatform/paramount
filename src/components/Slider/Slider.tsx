import dlv from 'dlv';
import React from 'react';
import { PanResponder, View, ViewProps } from 'react-native';

import { usePrevious } from '../../hooks';
import { ControlSize, useTheme } from '../../theme';
import { isControlSize } from '../../utils/ControlSize';
import { getOverrides, WithOverrides } from '../../utils/Overrides';
import { ViewMeasure, ViewMeasureProps } from '../Helpers';

type RangeValue = [number, number];
type SliderValue = number | RangeValue;
type Value<TIsRange extends boolean> = TIsRange extends true
  ? [number, number]
  : number;

interface SliderBaseProps<TIsRange extends boolean> {
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
  isDisabled?: boolean;

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

  testID?: string;
}

export interface SliderOverrides {
  Root: RootProps;
  UnselectedTrack: UnselectedTrackProps;
  SelectedTrack: SelectedTrackProps;
  LeftThumb: ThumbProps;
  RightThumb: ThumbProps;
}

export interface SliderProps<TIsRange extends boolean>
  extends WithOverrides<SliderBaseProps<TIsRange>, SliderOverrides> {}

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
    size = 'medium' as const,
    isRange = false,
    overrides = {},
  } = props;
  const theme = useTheme();

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

  const handleLeftSlide = React.useCallback(
    (dx: number) => {
      const leftValue = getLeftValue(value) + dx * valuePerPixel;
      const roundedLeftValue = step
        ? Math.round(leftValue / step) * step
        : leftValue;

      const finalLeftValue = getBoundedValueBase({
        maximumValue: isRangeSlider
          ? getRightValue(value) - step
          : maximumValue,
        minimumValue,
      })(getLeftValue(roundedLeftValue));
      const updatedValue = setLeftValue(value, finalLeftValue);

      setValue(updatedValue);
      onValueChange(updatedValue as Value<TIsRange>);
    },
    [
      isRangeSlider,
      maximumValue,
      minimumValue,
      onValueChange,
      step,
      value,
      valuePerPixel,
    ],
  );

  const handleRightSlide = React.useCallback(
    (dx: number) => {
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
    },
    [maximumValue, onValueChange, step, value, valuePerPixel],
  );

  const makeThumbRef = React.useCallback(
    (handler: (dx: number) => void) =>
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
      }),
    [onSlidingStart, value],
  );

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
  }, [
    handleLeftSlide,
    handleRightSlide,
    isSliding,
    makeThumbRef,
    onSlidingComplete,
    prevIsSliding,
    value,
    valuePerPixel,
  ]);

  const left = getLeftValue(value) * pixelPerValue;
  const right = getRightValue(value) * pixelPerValue;

  const [Root, rootProps] = getOverrides(
    StyledRoot,
    props,
    { size, onMeasure: setTrackMeasurements },
    dlv(theme, 'overrides.Slider.Root'),
    overrides.Root,
  );
  const [UnselectedTrack, unselectedTrackProps] = getOverrides(
    StyledUnselectedTrack,
    props,
    { size },
    dlv(theme, 'overrides.Slider.UnselectedTrack'),
    overrides.UnselectedTrack,
  );
  const [SelectedTrack, selectedTrackProps] = getOverrides(
    StyledSelectedTrack,
    props,
    { isRangeSlider, left, right, size },
    dlv(theme, 'overrides.Slider.SelectedTrack'),
    overrides.SelectedTrack,
  );
  const [LeftThumb, leftThumbProps] = getOverrides(
    StyledThumb,
    props,
    {
      size,
      position: left,
      isSliding,
      value: getLeftValue(value),
      ...leftThumbRef.current.panHandlers,
    },
    dlv(theme, 'overrides.Slider.LeftThumb'),
    overrides.LeftThumb,
  );
  const [RightThumb, rightThumbProps] = getOverrides(
    StyledThumb,
    props,
    {
      size,
      position: right,
      isSliding,
      value: getRightValue(value),
      ...rightThumbRef.current.panHandlers,
    },
    dlv(theme, 'overrides.Slider.RightThumb'),
    overrides.RightThumb,
  );

  return (
    <Root {...rootProps}>
      <UnselectedTrack {...unselectedTrackProps} />
      <SelectedTrack {...selectedTrackProps} />
      <LeftThumb {...leftThumbProps} />
      {isRangeSlider && <RightThumb {...rightThumbProps} />}
    </Root>
  );
};

interface RootProps extends ViewMeasureProps {
  size: ControlSize | number;
}

const StyledRoot = (props: RootProps) => {
  const { style, size, ...viewMeasureProps } = props;
  const theme = useTheme();

  const controlSize = isControlSize(size) ? theme.controlHeights[size] : size;

  return (
    <ViewMeasure
      style={[
        {
          height: controlSize,
          justifyContent: 'center',
        },
        style,
      ]}
      {...viewMeasureProps}
    />
  );
};

interface UnselectedTrackProps extends ViewProps {
  size: ControlSize | number;
}

const StyledUnselectedTrack = (props: UnselectedTrackProps) => {
  const { style, size, ...viewProps } = props;
  const theme = useTheme();

  const controlSize = isControlSize(size) ? theme.controlHeights[size] : size;

  return (
    <View
      style={[
        {
          backgroundColor: theme.colors.background.greyDark,
          borderRadius: 8,
          height: controlSize / 4,
          position: 'absolute',
          width: '100%',
        },
        style,
      ]}
      {...viewProps}
    />
  );
};

interface SelectedTrackProps extends ViewProps {
  size: ControlSize | number;
  left: number;
  right: number;
  isRangeSlider: boolean;
}

const StyledSelectedTrack = (props: SelectedTrackProps) => {
  const {
    style,
    size,
    left = 0,
    right = 0,
    isRangeSlider,
    ...viewProps
  } = props;
  const theme = useTheme();

  const controlSize = isControlSize(size) ? theme.controlHeights[size] : size;

  return (
    <View
      style={[
        {
          backgroundColor: theme.colors.background.primaryDefault,
          borderRadius: 8,
          height: controlSize / 4,
          position: 'absolute',
          width: '100%',
          ...(isRangeSlider ? { left, width: right - left } : { width: left }),
        },
        style,
      ]}
      {...viewProps}
    />
  );
};

interface ThumbProps extends ViewProps {
  size: ControlSize | number;
  isSliding: boolean;
  position: number;
  value: number;
}

const StyledThumb = (props: ThumbProps) => {
  const { style, size, isSliding = false, position = 0, ...viewProps } = props;
  const theme = useTheme();

  const controlSize = isControlSize(size) ? theme.controlHeights[size] : size;
  const cursor = isSliding ? 'grabbing' : 'grab';

  return (
    <View
      accessible
      style={[
        {
          backgroundColor: theme.colors.background.content,
          borderColor: theme.colors.border.primary,
          borderRadius: 999,
          borderWidth: 3,
          height: controlSize,
          position: 'absolute',
          width: controlSize,
          zIndex: 1,
          left: position - controlSize / 2,
          // @ts-ignore
          cursor,
        },
        style,
      ]}
      {...viewProps}
    />
  );
};
