import * as React from 'react';
import {
  Dimensions,
  ScaledSize,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

import { ITheme, withTheme } from '../../theme';
import { IPopoverStyles } from '../../theme/style-getters/getPopoverStyles';
import Modal from '../Dialog/Modal';
import { LayoutMeasure, LayoutMeasurements } from '../Helpers';

export type Position =
  | 'top-left'
  | 'top'
  | 'top-right'
  | 'left'
  | 'right'
  | 'bottom-right'
  | 'bottom'
  | 'bottom-left';

export interface IPopoverProps {
  theme: ITheme;
  onTap?: () => void;
  onClose?: () => void;
  children: React.ReactNode;
  content: React.ReactNode;
  offset?: number;
  isVisible?: boolean;
  position?: Position;
  /**
   * Inline styles for components
   */
  dangerouslySetInlineStyle?: Partial<IPopoverStyles>;
}

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

  if (position.includes('bottom') && shouldFlipBottomToTop) {
    newPosition = newPosition.replace('bottom', 'top') as 'top';
  }

  if (position.includes('top') && shouldFlipTopToBottom) {
    newPosition = newPosition.replace('top', 'bottom') as 'bottom';
  }

  if (position.includes('left') && shouldFlipLeftToRight) {
    newPosition = newPosition.replace('left', 'right') as 'right';
  }

  if (position.includes('right') && shouldFlipRightToLeft) {
    newPosition = newPosition.replace('right', 'left') as 'left';
  }

  return newPosition;
};

const getPositionCoordinates = (position: Position) => (
  screenLayout: ScaledSize,
) => (targetMeasurements: LayoutMeasurements) => (
  popoverMeasurements: LayoutMeasurements,
) => (offset: number) => {
  const newPosition = resolveCorrectPosition(position)({
    shouldFlipBottomToTop:
      popoverMeasurements.height + offset >
      screenLayout.height -
        targetMeasurements.pageY +
        targetMeasurements.height -
        offset,
    shouldFlipLeftToRight:
      position === 'left'
        ? popoverMeasurements.width + offset > targetMeasurements.pageX - offset
        : popoverMeasurements.width + offset >
          screenLayout.width - targetMeasurements.pageX,
    shouldFlipRightToLeft:
      position === 'right'
        ? targetMeasurements.pageX +
            targetMeasurements.width +
            popoverMeasurements.width +
            offset >
          screenLayout.width - offset
        : targetMeasurements.pageX + targetMeasurements.width <
          popoverMeasurements.width,
    shouldFlipTopToBottom:
      popoverMeasurements.height + offset > targetMeasurements.pageY,
  });

  switch (newPosition) {
    case 'top-left':
      return {
        left: targetMeasurements.pageX,
        top: targetMeasurements.pageY - popoverMeasurements.height - offset,
      };
    case 'top':
      return {
        left: targetMeasurements.pageX,
        top: targetMeasurements.pageY - popoverMeasurements.height - offset,
        transform: [
          {
            translateX:
              -popoverMeasurements.width / 2 + targetMeasurements.width / 2,
          },
        ],
      };
    case 'top-right':
      return {
        left:
          targetMeasurements.pageX -
          popoverMeasurements.width +
          targetMeasurements.width,
        top: targetMeasurements.pageY - popoverMeasurements.height - offset,
      };
    case 'left':
      return {
        left: targetMeasurements.pageX - popoverMeasurements.width - offset,
        top: targetMeasurements.pageY,
        transform: [
          {
            translateY:
              -popoverMeasurements.height / 2 + targetMeasurements.height / 2,
          },
        ],
      };
    case 'right':
      return {
        left: targetMeasurements.pageX + targetMeasurements.width + offset,
        top: targetMeasurements.pageY,
        transform: [
          {
            translateY:
              -popoverMeasurements.height / 2 + targetMeasurements.height / 2,
          },
        ],
      };
    case 'bottom-right':
      return {
        left:
          targetMeasurements.pageX -
          popoverMeasurements.width +
          targetMeasurements.width,
        top: targetMeasurements.pageY + targetMeasurements.height + offset,
      };
    case 'bottom':
      return {
        left: targetMeasurements.pageX,
        top: targetMeasurements.pageY + targetMeasurements.height + offset,
        transform: [
          {
            translateX:
              -popoverMeasurements.width / 2 + targetMeasurements.width / 2,
          },
        ],
      };
    case 'bottom-left':
      return {
        left: targetMeasurements.pageX,
        top: targetMeasurements.pageY + targetMeasurements.height + offset,
      };
    default:
      return {};
  }
};

export interface PopoverState {
  popoverMeasurements: LayoutMeasurements;
  targetMeasurements: LayoutMeasurements;
}

class PopoverBase extends React.Component<IPopoverProps, PopoverState> {
  constructor(props: IPopoverProps) {
    super(props);
    this.state = {
      popoverMeasurements: {
        height: 0,
        pageX: 0,
        pageY: 0,
        width: 0,
        x: 0,
        y: 0,
      },
      targetMeasurements: {
        height: 0,
        pageX: 0,
        pageY: 0,
        width: 0,
        x: 0,
        y: 0,
      },
    };
  }

  public render() {
    const {
      theme,
      dangerouslySetInlineStyle,
      children,
      content,
      isVisible,
      onClose,
      position = 'bottom',
      offset = 14,
    } = this.props;
    const { popoverMeasurements, targetMeasurements } = this.state;
    const {
      containerStyle,
      popoverStyle,
      modalContainerStyle,
      overlayStyle,
    } = theme.getPopoverStyles();

    const positionCoordinates = getPositionCoordinates(position)(
      Dimensions.get('window'),
    )(targetMeasurements)(popoverMeasurements)(offset);

    return (
      <>
        <LayoutMeasure
          style={{
            ...containerStyle,
            ...(dangerouslySetInlineStyle &&
              dangerouslySetInlineStyle.containerStyle),
          }}
          onMeasure={measurements =>
            this.setState({ targetMeasurements: measurements })
          }
        >
          {children}
        </LayoutMeasure>
        <Modal
          visible={isVisible}
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
            <LayoutMeasure
              style={{
                ...popoverStyle,
                ...(dangerouslySetInlineStyle &&
                  dangerouslySetInlineStyle.popoverStyle),
                ...positionCoordinates,
                // Hide flash mis-positioned content
                opacity:
                  popoverMeasurements.width === 0 ||
                  popoverMeasurements.height === 0
                    ? 0
                    : 1,
              }}
              onMeasure={measurements =>
                this.setState({ popoverMeasurements: measurements })
              }
            >
              {content}
            </LayoutMeasure>
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
