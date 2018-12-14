import * as React from 'react';

import { ITheme, withTheme } from '../../theme';
import { IPopoverStyles } from '../../theme/style-getters/getPopoverStyles';
import { LayoutMeasurements } from '../Helpers';

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
  isVisible?: number;
  position?: Position;
  /**
   * Inline styles for components
   */
  dangerouslySetInlineStyle?: Partial<IPopoverStyles>;
}
export interface Layout {
  width: number;
  height: number;
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
  screenLayout: Layout,
) => (targetLayout: LayoutMeasurements) => (popoverLayout: Layout) => (
  offset: number,
) => {
  const newPosition = resolveCorrectPosition(position)({
    shouldFlipBottomToTop:
      popoverLayout.height + offset >
      screenLayout.height - targetLayout.pageY + targetLayout.height - offset,
    shouldFlipLeftToRight:
      position === 'left'
        ? popoverLayout.width + offset > targetLayout.pageX - offset
        : popoverLayout.width + offset >
          screenLayout.width - targetLayout.pageX,
    shouldFlipRightToLeft:
      position === 'right'
        ? targetLayout.pageX +
            targetLayout.width +
            popoverLayout.width +
            offset >
          screenLayout.width - offset
        : targetLayout.pageX + targetLayout.width < popoverLayout.width,
    shouldFlipTopToBottom: popoverLayout.height + offset > targetLayout.pageY,
  });

  switch (newPosition) {
    case 'top-left':
      return {
        left: 0,
        top: -popoverLayout.height - offset,
      };
    case 'top':
      return {
        left: '50%',
        top: -popoverLayout.height - offset,
        transform: [{ translateX: -popoverLayout.width / 2 }],
      };
    case 'top-right':
      return {
        right: 0,
        top: -popoverLayout.height - offset,
      };
    case 'left':
      return {
        left: -popoverLayout.width - offset,
        top: '50%',
        transform: [{ translateY: -popoverLayout.height / 2 }],
      };
    case 'right':
      return {
        right: -popoverLayout.width - offset,
        top: '50%',
        transform: [{ translateY: -popoverLayout.height / 2 }],
      };
    case 'bottom-right':
      return {
        bottom: -popoverLayout.height - offset,
        right: 0,
      };
    case 'bottom':
      return {
        bottom: -popoverLayout.height - offset,
        left: '50%',
        transform: [{ translateX: -popoverLayout.width / 2 }],
      };
    case 'bottom-left':
      return {
        bottom: -popoverLayout.height - offset,
        left: 0,
      };
    default:
      return {};
  }
};

export interface PopoverState {
  popoverLayout: Layout;
}

class PopoverBase extends React.Component<IPopoverProps, PopoverState> {
  constructor(props: IPopoverProps) {
    super(props);
    this.state = {
      popoverLayout: {
        height: 0,
        width: 0,
      },
    };
  }

  public render() {
    return null;
    // return (
    //   <LayoutMeasure>
    //     {targetLayout => {
    //       const positionCoordinates = getPositionCoordinates(position)(
    //         Dimensions.get('window'),
    //       )(targetLayout)(popoverLayout)(offset);
    //       return (
    //         <View
    //           style={{
    //             ...containerStyle,
    //             ...(dangerouslySetInlineStyle &&
    //               dangerouslySetInlineStyle.containerStyle),
    //           }}
    //         >
    //           {isVisible && (
    //             <View
    //               style={{
    //                 ...popoverStyle,
    //                 ...positionCoordinates,
    //                 // Hide flash mis-positioned content
    //                 opacity:
    //                   popoverLayout.width === 0 || popoverLayout.height === 0
    //                     ? 0
    //                     : 1,
    //               }}
    //               onLayout={e => {
    //                 this.setState({
    //                   popoverLayout: e.nativeEvent.layout,
    //                 });
    //               }}
    //             >
    //               {content}
    //             </View>
    //           )}
    //           {children}
    //         </View>
    //       );
    //     }}
    //   </LayoutMeasure>
    // );
  }
}

export const Popover = withTheme(PopoverBase);
export default Popover;
