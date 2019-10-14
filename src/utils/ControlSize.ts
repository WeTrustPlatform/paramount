import { ControlSize, useTheme, TextSize } from '../theme';

export const isControlSize = (
  size: ControlSize | number,
): size is ControlSize => {
  if (typeof size === 'number') return false;

  return true;
};

export const useControlSizeUtils = () => {
  const theme = useTheme();

  const getControlHeight = (size: ControlSize | number): number => {
    if (typeof size === 'number') return size;

    return theme.controlHeights[size];
  };

  const getHeightControlSize = (size: ControlSize | number): ControlSize => {
    if (typeof size === 'number') {
      if (size >= theme.controlHeights.large) return 'large';
      if (size >= theme.controlHeights.medium) return 'medium';
      if (size < theme.controlHeights.medium) return 'small';
    }

    return size as ControlSize;
  };

  const getTextSize = (size: TextSize | number): TextSize => {
    if (typeof size === 'number') {
      if (size >= theme.controlHeights.large) return 'large';
      if (size >= theme.controlHeights.medium) return 'medium';
      if (size >= theme.controlHeights.small) return 'small';
      if (size < theme.controlHeights.small) return 'xsmall';
    }

    return size as TextSize;
  };

  const getSmallerTextSize = (size: TextSize | number): TextSize => {
    switch (getTextSize(size)) {
      case 'large':
        return 'medium';
      case 'medium':
        return 'small';
      case 'small':
        return 'xsmall';
      default:
        return 'xsmall';
    }
  };

  const getSmallerHeightControlSize = (
    size: ControlSize | number,
  ): ControlSize => {
    switch (getHeightControlSize(size)) {
      case 'large':
        return 'medium';
      case 'medium':
        return 'small';
      default:
        return 'small';
    }
  };

  return {
    getControlHeight,
    getSmallerTextSize,
    getSmallerHeightControlSize,
  };
};
