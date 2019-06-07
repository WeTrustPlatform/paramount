import * as React from 'react';
import { Dimensions, ScaledSize, View } from 'react-native';
import { DeepPartial } from 'ts-essentials';

import { POSITION, Position } from '../../constants';
import { Measurements } from '../../hooks';
import { useTheme } from '../../theme';
import { mergeStyles, ReplaceReturnType } from '../../utils/mergeStyles';
import { ViewMeasure } from '../Helpers';
import { Modal } from '../Modal';
import { Overlay } from '../Overlay';
import {
  GetPositionerStyles,
  getPositionerStyles,
  PositionerStyles,
} from './Positioner.styles';

export interface ContentProps {
  positionerMeasurements: Measurements;
  targetMeasurements: Measurements;
  position: Position;
}

export interface PositionerProps {
  onClose?: () => void;

  isFullWidth?: boolean;
  children: React.ReactNode;
  content: (props: ContentProps) => React.ReactNode;
  isVisible?: boolean;
  position?: Position;
  targetMeasurements?: Measurements;
  getStyles?: ReplaceReturnType<
    GetPositionerStyles,
    DeepPartial<PositionerStyles>
  >;
}

const DEFAULT_MARGIN = 24;
const DEFAULT_OFFSET = 14;

interface GetPositionerPositionParams {
  screenLayout: ScaledSize;
  position: Position;
  targetMeasurements: Measurements;
  positionerMeasurements: Measurements;
  offset: number;
}
const getPositionerPosition = (params: GetPositionerPositionParams) => {
  const {
    position,
    targetMeasurements,
    positionerMeasurements,
    offset,
  } = params;

  switch (position) {
    case POSITION.TOP_LEFT:
      return {
        position: POSITION.TOP_LEFT,

        left: targetMeasurements.pageX,
        marginRight: DEFAULT_MARGIN,
        top: targetMeasurements.pageY - positionerMeasurements.height - offset,
      };
    case POSITION.TOP:
      return {
        position: POSITION.TOP,

        left: targetMeasurements.pageX,
        top: targetMeasurements.pageY - positionerMeasurements.height - offset,
        transform: [
          {
            translateX:
              -positionerMeasurements.width / 2 + targetMeasurements.width / 2,
          },
        ],
      };
    case POSITION.TOP_RIGHT:
      return {
        position: POSITION.TOP_RIGHT,

        left:
          targetMeasurements.pageX -
          positionerMeasurements.width +
          targetMeasurements.width,
        top: targetMeasurements.pageY - positionerMeasurements.height - offset,
      };
    case POSITION.LEFT:
      return {
        position: POSITION.LEFT,

        left: targetMeasurements.pageX - positionerMeasurements.width - offset,
        top: targetMeasurements.pageY,
        transform: [
          {
            translateY:
              -positionerMeasurements.height / 2 +
              targetMeasurements.height / 2,
          },
        ],
      };
    case POSITION.RIGHT:
      return {
        position: POSITION.RIGHT,

        left: targetMeasurements.pageX + targetMeasurements.width + offset,
        marginRight: DEFAULT_MARGIN,
        top: targetMeasurements.pageY,
        transform: [
          {
            translateY:
              -positionerMeasurements.height / 2 +
              targetMeasurements.height / 2,
          },
        ],
      };
    case POSITION.BOTTOM_RIGHT:
      return {
        position: POSITION.BOTTOM_RIGHT,

        left:
          targetMeasurements.pageX -
          positionerMeasurements.width +
          targetMeasurements.width,
        top: targetMeasurements.pageY + targetMeasurements.height + offset,
      };
    case POSITION.BOTTOM:
      return {
        position: POSITION.BOTTOM,

        left: targetMeasurements.pageX,
        top: targetMeasurements.pageY + targetMeasurements.height + offset,
        transform: [
          {
            translateX:
              -positionerMeasurements.width / 2 + targetMeasurements.width / 2,
          },
        ],
      };
    case POSITION.BOTTOM_LEFT:
      return {
        position: POSITION.BOTTOM_LEFT,

        left: targetMeasurements.pageX,
        marginRight: DEFAULT_MARGIN,
        top: targetMeasurements.pageY + targetMeasurements.height + offset,
      };
    default:
      return {
        position: POSITION.BOTTOM_RIGHT,
      };
  }
};

const getPositionerFullWidthPosition = (
  params: GetPositionerPositionParams,
) => {
  const {
    position,
    targetMeasurements,
    positionerMeasurements,
    offset,
  } = params;

  const newPosition = position.replace('-left', '').replace('-right', '');

  switch (newPosition) {
    case POSITION.TOP:
      return {
        position: POSITION.TOP,

        left: 0,
        right: 0,
        top: targetMeasurements.pageY - positionerMeasurements.height - offset,
      };
    case POSITION.BOTTOM:
      return {
        position: POSITION.BOTTOM,

        left: 0,
        right: 0,
        top: targetMeasurements.pageY + targetMeasurements.height + offset,
      };
    default:
      return {
        position: POSITION.BOTTOM,
      };
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
    isFullWidth = false,
    onClose = () => null,
    position = POSITION.BOTTOM,
    targetMeasurements,
  } = props;
  const [positionerMeasurements, setPositionerMeasurements] = React.useState(
    initialMeasurements,
  );
  const [childrenMeasurements, setChildrenMeasurements] = React.useState(
    initialMeasurements,
  );

  const theme = useTheme();

  const { positionerStyle, modalContainerStyle } = mergeStyles(
    getPositionerStyles,
    getStyles,
  )({}, theme);

  const screenLayout = Dimensions.get('window');

  const finalTargetMeasurements = targetMeasurements || childrenMeasurements;
  const hasPositionerMeasurementsMeasured =
    positionerMeasurements.width !== 0 && positionerMeasurements.height !== 0;
  const getPositionerPositionParams = {
    offset: DEFAULT_OFFSET,
    position,
    positionerMeasurements,
    screenLayout,
    targetMeasurements: finalTargetMeasurements,
  };

  const {
    position: correctedPosition,
    ...positionerPositionStyle
  } = isFullWidth
    ? getPositionerFullWidthPosition(getPositionerPositionParams)
    : getPositionerPosition(getPositionerPositionParams);

  return (
    <>
      {targetMeasurements ? (
        children
      ) : (
        <ViewMeasure onMeasure={setChildrenMeasurements}>
          {children}
        </ViewMeasure>
      )}
      <Modal
        visible={isVisible}
        transparent
        onRequestClose={onClose}
        shouldLockBodyScroll={false}
      >
        <View style={modalContainerStyle}>
          <ViewMeasure
            style={{
              ...positionerStyle,
              ...positionerPositionStyle,
              // Hide flash mis-positioned content
              opacity: hasPositionerMeasurementsMeasured ? 1 : 0,
            }}
            onMeasure={setPositionerMeasurements}
          >
            {content({
              position: correctedPosition,
              positionerMeasurements,
              targetMeasurements: finalTargetMeasurements,
            })}
          </ViewMeasure>
          <Overlay transparent onPress={onClose} />
        </View>
      </Modal>
    </>
  );
};
