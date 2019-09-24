import * as React from 'react';

import { Measurements } from '../../hooks';
import { useTheme } from '../../theme';
import { mergeStyles } from '../../utils/mergeStyles';
import { ViewMeasure } from '../Helpers';
import { GetPositionerStyles, getPositionerStyles } from './Positioner.styles';

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

export type Position =
  | 'top'
  | 'top-left'
  | 'top-right'
  | 'bottom'
  | 'bottom-left'
  | 'bottom-right'
  | 'left'
  | 'right';

export interface PositionerProps {
  /**
   * Position of the content.
   * @default "bottom"
   */
  position?: Position;

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

  /** Callback to get element styles. */
  getStyles?: GetPositionerStyles;
}

interface GetPositionerPositionParams {
  position: Position;
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

export const Positioner = (props: PositionerProps) => {
  const {
    getStyles,
    children,
    content,
    isVisible,
    position = POSITION.BOTTOM,
  } = props;
  const [targetMeasurements, setTargetMeasurements] = React.useState(
    initialMeasurements,
  );
  const [positionerMeasurements, setPositionerMeasurements] = React.useState(
    initialMeasurements,
  );

  const theme = useTheme();
  const isPositionerMeasurementsMeasured = !!(
    positionerMeasurements.width || positionerMeasurements.height
  );

  const { positionerStyle, containerStyle } = mergeStyles(
    getPositionerStyles,
    getStyles,
    theme.components.getPositionerStyles,
  )({ isPositionerMeasurementsMeasured }, theme);

  const positionStyle = getPositionerPosition({
    position,
    positionerMeasurements,
    targetMeasurements,
  });

  return (
    <>
      {isVisible && (
        <ViewMeasure
          style={{
            ...positionStyle,
            ...positionerStyle,
          }}
          onMeasure={setPositionerMeasurements}
        >
          {content}
        </ViewMeasure>
      )}
      <ViewMeasure style={containerStyle} onMeasure={setTargetMeasurements}>
        {children}
      </ViewMeasure>
    </>
  );
};
