type TOP = 'top';
type TOP_LEFT = 'top-left';
type TOP_RIGHT = 'top-right';
type BOTTOM = 'bottom';
type BOTTOM_LEFT = 'bottom-left';
type BOTTOM_RIGHT = 'bottom-right';
type LEFT = 'left';
type RIGHT = 'right';

export interface PositionInterface {
  TOP: TOP;
  TOP_LEFT: TOP_LEFT;
  TOP_RIGHT: TOP_RIGHT;
  BOTTOM: BOTTOM;
  BOTTOM_LEFT: BOTTOM_LEFT;
  BOTTOM_RIGHT: BOTTOM_RIGHT;
  LEFT: LEFT;
  RIGHT: RIGHT;
}

export const POSITION: PositionInterface = {
  TOP: 'top',
  TOP_LEFT: 'top-left',
  TOP_RIGHT: 'top-right',

  BOTTOM: 'bottom',
  BOTTOM_LEFT: 'bottom-left',
  BOTTOM_RIGHT: 'bottom-right',

  LEFT: 'left',
  RIGHT: 'right',
};

export type Position =
  | TOP
  | TOP_LEFT
  | TOP_RIGHT
  | BOTTOM
  | BOTTOM_LEFT
  | BOTTOM_RIGHT
  | LEFT
  | RIGHT;
