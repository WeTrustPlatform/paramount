import dlv from 'dlv';
import * as React from 'react';
import { ViewStyle } from 'react-native';

import { Measurements } from '../../hooks';
import { useTheme } from '../../theme';
import { getOverrides, WithOverrides } from '../../utils/overrides';
import { ViewMeasure, ViewMeasureProps } from '../Helpers';

export const POSITION = {
  TOP: 'top' as const,
  TOP_LEFT: 'top-left' as const,
  TOP_RIGHT: 'top-right' as const,

  BOTTOM: 'bottom' as const,
  BOTTOM_LEFT: 'bottom-left' as const,
  BOTTOM_RIGHT: 'bottom-right' as const,

  LEFT: 'left' as const,
  RIGHT: 'right' as const,
};

export type PositionerPosition =
  | 'top'
  | 'top-left'
  | 'top-right'
  | 'bottom'
  | 'bottom-left'
  | 'bottom-right'
  | 'left'
  | 'right';

export interface PositionerBaseProps {
  /**
   * Position of the content.
   * @default "bottom"
   */
  position?: PositionerPosition;

  /**
   * Wrapped component to open the positioner over.
   */
  children?: React.ReactNode;

  /**
   * Content revealed when positioner is opened.
   */
  content?: React.ReactNode;

  /**
   * When true, displays positioner.
   */
  isVisible?: boolean;
}

export interface PositionerOverrides {
  Root: RootProps;
  Target: ViewMeasureProps;
}

export interface PositionerProps
  extends WithOverrides<PositionerBaseProps, PositionerOverrides> {}

interface GetPositionerPositionParams {
  position: PositionerPosition;
  targetMeasurements: Measurements;
  positionerMeasurements: Measurements;
}

const DEFAULT_OFFSET = 14;

const getPositionerPosition = (params: GetPositionerPositionParams) => {
  const { position, targetMeasurements, positionerMeasurements } = params;

  switch (position) {
    case POSITION.TOP_LEFT:
      return {
        left: 0,
        top: -positionerMeasurements.height - DEFAULT_OFFSET,
      };
    case POSITION.TOP:
      return {
        left: targetMeasurements.width / 2,
        top: -positionerMeasurements.height - DEFAULT_OFFSET,
        transform: [
          {
            translateX: -positionerMeasurements.width / 2,
          },
        ],
      };
    case POSITION.TOP_RIGHT:
      return {
        right: 0,
        top: -positionerMeasurements.height - DEFAULT_OFFSET,
      };
    case POSITION.LEFT:
      return {
        left: 0 - positionerMeasurements.width - DEFAULT_OFFSET,
        top: -positionerMeasurements.height / 2 + targetMeasurements.height / 2,
      };
    case POSITION.RIGHT:
      return {
        right: 0 - positionerMeasurements.width - DEFAULT_OFFSET,
        top: -positionerMeasurements.height / 2 + targetMeasurements.height / 2,
      };
    case POSITION.BOTTOM_RIGHT:
      return {
        right: 0,
        top: targetMeasurements.height + DEFAULT_OFFSET,
      };
    case POSITION.BOTTOM:
      return {
        left: targetMeasurements.width / 2,
        top: targetMeasurements.height + DEFAULT_OFFSET,
        transform: [
          {
            translateX: -positionerMeasurements.width / 2,
          },
        ],
      };
    case POSITION.BOTTOM_LEFT:
      return {
        left: 0,
        top: targetMeasurements.height + DEFAULT_OFFSET,
      };
    default:
      return {};
  }
};

const initialMeasurements = {
  height: 0,
  pageX: 0,
  pageY: 0,
  width: 0,
  x: 0,
  y: 0,
};

const defaultProps = {
  isVisible: false,
  position: POSITION.BOTTOM,
};

export const Positioner = (props: PositionerProps) => {
  const {
    children,
    content,
    isVisible = defaultProps.isVisible,
    position = defaultProps.position,
    overrides = {},
  } = props;
  const theme = useTheme();

  const [targetMeasurements, setTargetMeasurements] = React.useState(
    initialMeasurements,
  );
  const [positionerMeasurements, setPositionerMeasurements] = React.useState(
    initialMeasurements,
  );

  const isPositionerMeasurementsMeasured = !!(
    positionerMeasurements.width || positionerMeasurements.height
  );

  const positionStyle = getPositionerPosition({
    position,
    positionerMeasurements,
    targetMeasurements,
  });

  const [Root, rootProps] = getOverrides(
    StyledRoot,
    props,
    dlv(theme, 'overrides.Positioner.Root'),
    overrides.Root,
  );
  const [Target, targetProps] = getOverrides(
    ViewMeasure,
    props,
    dlv(theme, 'overrides.Positioner.Target'),
    overrides.Target,
  );

  return (
    <>
      {isVisible && (
        <Root
          positionStyle={positionStyle}
          isPositionerMeasurementsMeasured={isPositionerMeasurementsMeasured}
          onMeasure={setPositionerMeasurements}
          {...rootProps}
        >
          {content}
        </Root>
      )}
      <Target onMeasure={setTargetMeasurements} {...targetProps}>
        {children}
      </Target>
    </>
  );
};

interface RootProps extends ViewMeasureProps {
  isPositionerMeasurementsMeasured?: boolean;
  positionStyle?: ViewStyle;
}

const StyledRoot = (props: RootProps) => {
  const {
    style,
    positionStyle,
    isPositionerMeasurementsMeasured = false,
    ...viewMeasureProps
  } = props;

  return (
    <ViewMeasure
      style={[
        {
          opacity: isPositionerMeasurementsMeasured ? 1 : 0,
          position: 'absolute',
          zIndex: 1,
        },
        positionStyle,
        style,
      ]}
      {...viewMeasureProps}
    />
  );
};
