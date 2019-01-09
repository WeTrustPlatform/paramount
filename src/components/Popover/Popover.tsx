import * as React from 'react';
import {
  Dimensions,
  ScaledSize,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

import { POSITION, Position } from '../../constants';
import { Theme, withTheme } from '../../theme';
import { PopoverStyles } from '../../theme/style-getters/getPopoverStyles';
import { Measurements, ViewMeasure } from '../Helpers';
import { Modal } from '../Modal';
import { getPopoverArrow } from './getPopoverArrow';

export interface PopoverProps {
  theme: Theme;
  onTap?: () => void;
  onClose?: () => void;
  /** For dynamic size content of popovers we have to render all the items first so it precalculates popover position and layout, so that when user opens popover there is no flash of adjusting popover but immediately shows it. This is not `true` by default because it may causes small delay for the Popover to be properly available. @default false */
  isDynamicContent?: boolean;
  children: React.ReactNode;
  content: React.ReactNode;
  /**
   * Popover uses window height to calculate its position, and whether it should flip to top if it at the bottom (So that it does not pop up outside the window height).
   * However, sometimes window.height is shorter than the parent container, unnecessarily flipping it to `top`. To fix this behavior,
   * you can pass in height of the parent so that it will use that instead of window's height
   */
  parentHeight?: number;
  isVisible?: boolean;
  position?: Position;
  targetMeasurements?: Measurements;
  /**
   * Inline styles for components
   */
  dangerouslySetInlineStyle?: Partial<PopoverStyles>;
}

const DEFAULT_MARGIN = 24;
const DEFAULT_OFFSET = 14;
/** Time to allow all the calculation to be done */
const RENDER_CALCULATION_DURATION = 600;

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

const getPopoverPosition = (position: Position) => (
  screenLayout: ScaledSize,
) => (targetMeasurements: Measurements) => (
  popoverMeasurements: Measurements,
) => (initialPopoverMeasurements: Measurements) => (offset: number) => (
  isOverflowing: boolean,
) => {
  const newPosition = resolveCorrectPosition(position)({
    shouldFlipBottomToTop:
      initialPopoverMeasurements.height + offset >
      screenLayout.height -
        targetMeasurements.pageY +
        targetMeasurements.height -
        offset,
    shouldFlipLeftToRight:
      position === POSITION.LEFT
        ? initialPopoverMeasurements.width + offset + DEFAULT_MARGIN >
          targetMeasurements.pageX - offset
        : initialPopoverMeasurements.width + offset >
          screenLayout.width - targetMeasurements.pageX,
    shouldFlipRightToLeft:
      position === POSITION.RIGHT
        ? targetMeasurements.pageX +
            targetMeasurements.width +
            initialPopoverMeasurements.width +
            offset >
          screenLayout.width - offset
        : targetMeasurements.pageX <
          initialPopoverMeasurements.width + DEFAULT_MARGIN,
    shouldFlipTopToBottom:
      initialPopoverMeasurements.height + offset > targetMeasurements.pageY,
  });

  switch (newPosition) {
    case POSITION.TOP_LEFT:
      return {
        position: POSITION.TOP_LEFT,

        left: targetMeasurements.pageX,
        marginRight: DEFAULT_MARGIN,
        top: targetMeasurements.pageY - popoverMeasurements.height - offset,
      };
    case POSITION.TOP:
      return {
        position: POSITION.TOP,

        left: targetMeasurements.pageX,
        top: targetMeasurements.pageY - popoverMeasurements.height - offset,
        transform: [
          {
            translateX:
              -popoverMeasurements.width / 2 + targetMeasurements.width / 2,
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
                popoverMeasurements.width +
                targetMeasurements.width,
            }),
        top: targetMeasurements.pageY - popoverMeasurements.height - offset,
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
                targetMeasurements.pageX - popoverMeasurements.width - offset,
            }),
        top: targetMeasurements.pageY,
        transform: [
          {
            translateY:
              -popoverMeasurements.height / 2 + targetMeasurements.height / 2,
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
              -popoverMeasurements.height / 2 + targetMeasurements.height / 2,
          },
        ],
      };
    case POSITION.BOTTOM_RIGHT:
      return {
        position: POSITION.BOTTOM_RIGHT,

        left:
          targetMeasurements.pageX -
          popoverMeasurements.width +
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
              -popoverMeasurements.width / 2 + targetMeasurements.width / 2,
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

export const getIsOverflowing = ({
  initialPopoverMeasurements,
  windowDimensions,
  position,
}: {
  initialPopoverMeasurements: Measurements;
  windowDimensions: ScaledSize;
  position: Position;
}) => {
  if (initialPopoverMeasurements.width > windowDimensions.width - 48) {
    return true;
  }

  return false;
};

export interface PopoverState {
  /** This is the original measurements of the popover. It is static, and will not change. It is used to calculate whether popover should "flip" and also whether originally the popover overflows the window or not */
  initialPopoverMeasurements: Measurements;
  /** This is the adjusted measurements of the popover when the content is of dynamic size. It adjusts several times when its position is being calculated to account for things like window overflow, margins and other layout calculations */
  popoverMeasurements: Measurements;
  /** Measurements of the wrapped component */
  localTargetMeasurements: Measurements;
  /** HACK: For dynamic size content of popovers we have to render all the items first so it precalculates popover position and layout, so that when user opens popover there is no flash of adjusting popover but immediately shows it */
  isAdjustingContent: boolean;
}

const defaultProps = {
  isDynamicContent: false,
  position: POSITION.BOTTOM,
};

class PopoverBase extends React.Component<PopoverProps, PopoverState> {
  constructor(props: PopoverProps) {
    super(props);
    const { isDynamicContent = defaultProps.isDynamicContent } = props;
    const initialMeasurements = {
      height: 0,
      pageX: 0,
      pageY: 0,
      width: 0,
      x: 0,
      y: 0,
    };

    this.state = {
      initialPopoverMeasurements: initialMeasurements,
      isAdjustingContent: isDynamicContent,
      localTargetMeasurements: initialMeasurements,
      popoverMeasurements: initialMeasurements,
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
      dangerouslySetInlineStyle,
      children,
      content,
      parentHeight,
      isVisible,
      onClose,
      position = defaultProps.position,
      targetMeasurements,
    } = this.props;
    const {
      popoverMeasurements,
      localTargetMeasurements,
      initialPopoverMeasurements,
      isAdjustingContent,
    } = this.state;
    const {
      popoverStyle,
      modalContainerStyle,
      overlayStyle,
    } = theme.getPopoverStyles();

    const windowDimensions = Dimensions.get('window');
    const isOverflowing = getIsOverflowing({
      initialPopoverMeasurements,
      position,
      windowDimensions,
    });
    const initialPopoverMeasurementsMeasured =
      initialPopoverMeasurements.width !== 0 &&
      initialPopoverMeasurements.height !== 0;
    const popoverMeasurementsMeasured =
      popoverMeasurements.width !== 0 && popoverMeasurements.height !== 0;

    const finalTargetMeasurements =
      targetMeasurements || localTargetMeasurements;
    const {
      position: correctedPosition,
      ...popoverPositionStyle
    } = getPopoverPosition(position)({
      ...windowDimensions,
      height: parentHeight || windowDimensions.height,
    })(finalTargetMeasurements)(popoverMeasurements)(
      initialPopoverMeasurements,
    )(DEFAULT_OFFSET)(isOverflowing);

    const renderArrow = getPopoverArrow(correctedPosition)(
      finalTargetMeasurements,
    )(theme);

    return (
      <>
        {targetMeasurements ? (
          children
        ) : (
          <ViewMeasure
            onMeasure={measurements => {
              this.setState({ localTargetMeasurements: measurements });
            }}
          >
            {children}
          </ViewMeasure>
        )}
        {/* Mounts an invisible node to measure initial Popover measurements, after which is removed */}
        {!initialPopoverMeasurementsMeasured && (
          <ViewMeasure
            onMeasure={measurements =>
              this.setState({ initialPopoverMeasurements: measurements })
            }
            style={{
              opacity: 0,
              position: 'absolute',
              zIndex: -1,
            }}
          >
            {content}
          </ViewMeasure>
        )}
        <Modal
          visible={isAdjustingContent || isVisible}
          transparent
          onRequestClose={onClose}
          isScrollable
        >
          <View
            style={{
              ...modalContainerStyle,
              ...(dangerouslySetInlineStyle &&
                dangerouslySetInlineStyle.modalContainerStyle),
            }}
          >
            <ViewMeasure
              style={{
                ...popoverStyle,
                ...(dangerouslySetInlineStyle &&
                  dangerouslySetInlineStyle.popoverStyle),
                ...popoverPositionStyle,
                // Hide flash mis-positioned content
                opacity:
                  popoverMeasurementsMeasured && !isAdjustingContent ? 1 : 0,
              }}
              onMeasure={measurements => {
                this.setState({ popoverMeasurements: measurements });
              }}
            >
              {content}
              {renderArrow}
            </ViewMeasure>
            <TouchableWithoutFeedback
              onPress={() => {
                if (onClose) onClose();
              }}
            >
              <View
                style={{
                  ...overlayStyle,
                  ...(dangerouslySetInlineStyle &&
                    dangerouslySetInlineStyle.overlayStyle),
                }}
              />
            </TouchableWithoutFeedback>
          </View>
        </Modal>
      </>
    );
  }
}

export const Popover = withTheme(PopoverBase);
export default Popover;
