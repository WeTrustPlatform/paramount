import * as React from 'react';
import { Dimensions, ScaledSize, View } from 'react-native';
import { DeepPartial } from 'ts-essentials';

import { POSITION, Position } from '../../constants';
import { Measurements } from '../../hooks';
import { Theme, withTheme } from '../../theme';
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
  theme: Theme;
  onClose?: () => void;
  /** For dynamic size content of positioners we have to render all the items first so it precalculates positioner position and layout, so that when user opens positioner there is no flash of adjusting positioner but immediately shows it. This is not `true` by default because it may causes small delay for the Positioner to be properly available. @default false */
  isDynamicContent?: boolean;
  /** Sets the positioner to cover full width. Useful when wanting to display on mobile devices a full menu. Overrides `isDynamicContent`. Ignores `right` and `left` positions. */
  isFullWidth?: boolean;
  children: React.ReactNode;
  content: (props: ContentProps) => React.ReactNode;
  /**
   * Positioner uses window height to calculate its position, and whether it should flip to top if it at the bottom (So that it does not pop up outside the window height).
   * However, sometimes window.height is shorter than the parent container, unnecessarily flipping it to `top`. To fix this behavior,
   * you can pass in height of the parent so that it will use that instead of window's height
   */
  parentHeight?: number;
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
/** Time to allow all the calculation to be done */
const RENDER_CALCULATION_DURATION = 700;

const resolveCorrectPosition = (position: Position) => ({
  shouldFlipBottomToTop,
  shouldFlipLeftToRight,
  shouldFlipRightToLeft,
  shouldFlipTopToBottom,
}: {
  shouldFlipBottomToTop: boolean;
  shouldFlipLeftToRight: boolean;
  shouldFlipRightToLeft: boolean;
  shouldFlipTopToBottom: boolean;
}) => {
  let newPosition = position;

  if (position.includes(POSITION.BOTTOM) && shouldFlipBottomToTop) {
    newPosition = newPosition.replace(
      POSITION.BOTTOM,
      POSITION.TOP,
    ) as Position;
  }

  if (position.includes(POSITION.TOP) && shouldFlipTopToBottom) {
    newPosition = newPosition.replace(
      POSITION.TOP,
      POSITION.BOTTOM,
    ) as Position;
  }

  if (position.includes(POSITION.LEFT) && shouldFlipLeftToRight) {
    newPosition = newPosition.replace(
      POSITION.LEFT,
      POSITION.RIGHT,
    ) as Position;
  }

  if (position.includes(POSITION.RIGHT) && shouldFlipRightToLeft) {
    newPosition = newPosition.replace(
      POSITION.RIGHT,
      POSITION.LEFT,
    ) as Position;
  }

  return newPosition;
};

interface GetPositionerPositionParams {
  screenLayout: ScaledSize;
  position: Position;
  targetMeasurements: Measurements;
  positionerMeasurements: Measurements;
  offset: number;
}
const getPositionerPosition = (params: GetPositionerPositionParams) => {
  const {
    screenLayout,
    position,
    targetMeasurements,
    positionerMeasurements,
    offset,
  } = params;

  const newPosition = resolveCorrectPosition(position)({
    shouldFlipBottomToTop:
      positionerMeasurements.height + offset >
      screenLayout.height -
        targetMeasurements.pageY +
        targetMeasurements.height -
        offset,
    shouldFlipLeftToRight:
      position === POSITION.LEFT
        ? positionerMeasurements.width + offset + DEFAULT_MARGIN >
          targetMeasurements.pageX - offset
        : positionerMeasurements.width + offset >
          screenLayout.width - targetMeasurements.pageX,
    shouldFlipRightToLeft:
      position === POSITION.RIGHT
        ? targetMeasurements.pageX +
            targetMeasurements.width +
            positionerMeasurements.width +
            offset >
          screenLayout.width - offset
        : targetMeasurements.pageX <
          positionerMeasurements.width + DEFAULT_MARGIN,
    shouldFlipTopToBottom:
      positionerMeasurements.height + offset > targetMeasurements.pageY,
  });

  const isOverflowing = getIsOverflowing({
    position,
    positionerMeasurements,
    screenLayout,
  });

  switch (newPosition) {
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

        ...(isOverflowing
          ? {
              left: 0,
              marginLeft: DEFAULT_MARGIN,
              marginRight:
                screenLayout.width -
                targetMeasurements.pageX -
                targetMeasurements.width,
            }
          : {
              left:
                targetMeasurements.pageX -
                positionerMeasurements.width +
                targetMeasurements.width,
            }),
        top: targetMeasurements.pageY - positionerMeasurements.height - offset,
      };
    case POSITION.LEFT:
      return {
        position: POSITION.LEFT,

        ...(isOverflowing
          ? {
              left: 0,
              marginLeft: DEFAULT_MARGIN,
              marginRight:
                screenLayout.width - targetMeasurements.pageX + offset,
            }
          : {
              left:
                targetMeasurements.pageX -
                positionerMeasurements.width -
                offset,
            }),
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
    screenLayout,
    position,
    targetMeasurements,
    positionerMeasurements,
    offset,
  } = params;

  const newPosition = resolveCorrectPosition(position)({
    shouldFlipBottomToTop:
      positionerMeasurements.height + offset >
      screenLayout.height -
        targetMeasurements.pageY +
        targetMeasurements.height -
        offset,
    shouldFlipLeftToRight: false,
    shouldFlipRightToLeft: false,
    shouldFlipTopToBottom:
      positionerMeasurements.height + offset > targetMeasurements.pageY,
  })
    .replace('-left', '')
    .replace('-right', '');

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
        position: POSITION.BOTTOM_RIGHT,
      };
  }
};

export const getIsOverflowing = ({
  positionerMeasurements,
  screenLayout,
  position,
}: {
  positionerMeasurements: Measurements;
  screenLayout: ScaledSize;
  position: Position;
}) => {
  if (positionerMeasurements.width > screenLayout.width - 48) {
    return true;
  }

  return false;
};

export interface PositionerState {
  /** This is the adjusted measurements of the positioner when the content is of dynamic size. It adjusts several times when its position is being calculated to account for things like window overflow, margins and other layout calculations */
  positionerMeasurements: Measurements;
  /** Measurements of the wrapped component */
  childrenMeasurements: Measurements;
  /** HACK: For dynamic size content of positioners we have to render all the items first so it precalculates positioner position and layout, so that when user opens positioner there is no flash of adjusting positioner but immediately shows it */
  isAdjustingContent: boolean;
}

const defaultProps = {
  isDynamicContent: false,
  isFullWidth: false,
  position: POSITION.BOTTOM,
};

const initialMeasurements = {
  height: 0,
  pageX: 0,
  pageY: 0,
  width: 0,
  x: 0,
  y: 0,
};

export class PositionerBase extends React.Component<
  PositionerProps,
  PositionerState
> {
  /** Hack to get correct position of dynamic content */
  private hasOverflowedCounter: number = 0;

  constructor(props: PositionerProps) {
    super(props);
    const { isDynamicContent = defaultProps.isDynamicContent } = props;

    this.state = {
      childrenMeasurements: initialMeasurements,
      isAdjustingContent: isDynamicContent,
      positionerMeasurements: initialMeasurements,
    };
  }

  public componentDidMount() {
    const { isDynamicContent = defaultProps.isDynamicContent } = this.props;

    if (isDynamicContent) {
      setTimeout(() => {
        this.setState({ isAdjustingContent: false });
      }, RENDER_CALCULATION_DURATION);
    }
  }

  public render() {
    const {
      theme,
      getStyles,
      children,
      content,
      parentHeight,
      isVisible,
      isFullWidth = defaultProps.isFullWidth,
      onClose = () => null,
      position = defaultProps.position,
      targetMeasurements,
    } = this.props;
    const {
      positionerMeasurements,
      childrenMeasurements,
      isAdjustingContent,
    } = this.state;

    const { positionerStyle, modalContainerStyle } = mergeStyles(
      getPositionerStyles,
      getStyles,
    )(theme);

    const screenLayout = Dimensions.get('window');

    const finalTargetMeasurements = targetMeasurements || childrenMeasurements;
    const hasPositionerMeasurementsMeasured =
      positionerMeasurements.width !== 0 && positionerMeasurements.height !== 0;
    const getPositionerPositionParams = {
      offset: DEFAULT_OFFSET,
      position,
      positionerMeasurements,
      screenLayout: {
        ...screenLayout,
        height: parentHeight || screenLayout.height,
      },
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
          <ViewMeasure
            onMeasure={measurements => {
              this.setState({ childrenMeasurements: measurements });
            }}
          >
            {children}
          </ViewMeasure>
        )}
        <Modal
          visible={isAdjustingContent || isVisible}
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
                opacity:
                  hasPositionerMeasurementsMeasured && !isAdjustingContent
                    ? 1
                    : 0,
              }}
              onMeasure={measurements => {
                const isOverflowing = getIsOverflowing({
                  position,
                  positionerMeasurements,
                  screenLayout,
                });
                /**
                 * Positioner usually gets expected positioning after it has overflowed once.
                 */

                if (this.hasOverflowedCounter === 0) {
                  this.setState({ positionerMeasurements: measurements });
                } else if (!isOverflowing) {
                  this.setState({ positionerMeasurements: measurements });
                }

                if (isOverflowing) {
                  this.hasOverflowedCounter++;
                }
              }}
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
  }
}

export const Positioner = withTheme(PositionerBase);
