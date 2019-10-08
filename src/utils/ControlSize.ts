import { ControlSize } from '../theme';

export const isControlSize = (
  size: ControlSize | number,
): size is ControlSize => {
  if (typeof size === 'number') return false;

  return true;
};
