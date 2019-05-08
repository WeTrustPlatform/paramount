import * as React from 'react';
import { View, ViewStyle } from 'react-native';

import { Position } from '../../constants';
import { Measurements } from '../../hooks';
import { Theme } from '../../theme';

const arrowWidth = 11;
const commonStyle = {
  borderColor: 'transparent',
  borderWidth: 11,
  height: 0,
  position: 'absolute',
  width: 0,
} as ViewStyle;

export const TopLeftArrow = ({
  theme,
  targetMeasurements,
}: {
  theme: Theme;
  targetMeasurements: Measurements;
}) => (
  <>
    <View
      style={{
        ...commonStyle,
        borderTopColor: theme.colors.border.default,
        bottom: 0,
        left: targetMeasurements.width / 2,
        marginBottom: -arrowWidth * 2,
        transform: [{ translateX: -arrowWidth }],
      }}
    />
    <View
      style={{
        ...commonStyle,
        borderTopColor: 'white',
        bottom: 0,
        left: targetMeasurements.width / 2,
        marginBottom: -arrowWidth * 2 + 1,
        transform: [{ translateX: -arrowWidth }],
      }}
    />
  </>
);

export const TopArrow = ({
  theme,
  targetMeasurements,
}: {
  theme: Theme;
  targetMeasurements: Measurements;
}) => (
  <>
    <View
      style={{
        ...commonStyle,
        borderTopColor: theme.colors.border.default,
        bottom: 0,
        left: '50%',
        marginBottom: -arrowWidth * 2,
        transform: [{ translateX: -arrowWidth }],
      }}
    />
    <View
      style={{
        ...commonStyle,
        borderTopColor: 'white',
        bottom: 0,
        left: '50%',
        marginBottom: -arrowWidth * 2 + 1,
        transform: [{ translateX: -arrowWidth }],
      }}
    />
  </>
);

export const TopRightArrow = ({
  theme,
  targetMeasurements,
}: {
  theme: Theme;
  targetMeasurements: Measurements;
}) => (
  <>
    <View
      style={{
        ...commonStyle,
        borderTopColor: theme.colors.border.default,
        bottom: 0,
        marginBottom: -arrowWidth * 2,
        right: targetMeasurements.width / 2,
        transform: [{ translateX: arrowWidth }],
      }}
    />
    <View
      style={{
        ...commonStyle,
        borderTopColor: 'white',
        bottom: 0,
        marginBottom: -arrowWidth * 2 + 1,
        right: targetMeasurements.width / 2,
        transform: [{ translateX: arrowWidth }],
      }}
    />
  </>
);

export const LeftArrow = ({
  theme,
  targetMeasurements,
}: {
  theme: Theme;
  targetMeasurements: Measurements;
}) => (
  <>
    <View
      style={{
        ...commonStyle,
        borderLeftColor: theme.colors.border.default,
        marginRight: -arrowWidth * 2,
        right: 0,
        top: '50%',
        transform: [{ translateY: -arrowWidth + 1 }],
      }}
    />
    <View
      style={{
        ...commonStyle,
        borderLeftColor: 'white',
        marginRight: -arrowWidth * 2 + 1,
        right: 0,
        top: '50%',
        transform: [{ translateY: -arrowWidth + 1 }],
      }}
    />
  </>
);

export const RightArrow = ({
  theme,
  targetMeasurements,
}: {
  theme: Theme;
  targetMeasurements: Measurements;
}) => (
  <>
    <View
      style={{
        ...commonStyle,
        borderRightColor: theme.colors.border.default,
        left: 0,
        marginLeft: -arrowWidth * 2,
        top: '50%',
        transform: [{ translateY: -arrowWidth + 1 }],
      }}
    />
    <View
      style={{
        ...commonStyle,
        borderRightColor: 'white',
        left: 0,
        marginLeft: -arrowWidth * 2 + 1,
        top: '50%',
        transform: [{ translateY: -arrowWidth + 1 }],
      }}
    />
  </>
);

export const BottomRightArrow = ({
  theme,
  targetMeasurements,
}: {
  theme: Theme;
  targetMeasurements: Measurements;
}) => (
  <>
    <View
      style={{
        ...commonStyle,
        borderBottomColor: theme.colors.border.default,
        marginTop: -arrowWidth * 2,
        right: targetMeasurements.width / 2,
        top: 0,
        transform: [{ translateX: arrowWidth }],
      }}
    />
    <View
      style={{
        ...commonStyle,
        borderBottomColor: 'white',
        marginTop: -arrowWidth * 2 + 1,
        right: targetMeasurements.width / 2,
        top: 0,
        transform: [{ translateX: arrowWidth }],
      }}
    />
  </>
);

export const BottomArrow = ({
  theme,
  targetMeasurements,
}: {
  theme: Theme;
  targetMeasurements: Measurements;
}) => (
  <>
    <View
      style={{
        ...commonStyle,
        borderBottomColor: theme.colors.border.default,
        marginTop: -arrowWidth * 2,
        right: '50%',
        top: 0,
        transform: [{ translateX: arrowWidth }],
      }}
    />
    <View
      style={{
        ...commonStyle,
        borderBottomColor: 'white',
        marginTop: -arrowWidth * 2 + 1,
        right: '50%',
        top: 0,
        transform: [{ translateX: arrowWidth }],
      }}
    />
  </>
);

export const BottomLeftArrow = ({
  theme,
  targetMeasurements,
}: {
  theme: Theme;
  targetMeasurements: Measurements;
}) => (
  <>
    <View
      style={{
        ...commonStyle,
        borderBottomColor: theme.colors.border.default,
        left: targetMeasurements.width / 2,
        marginTop: -arrowWidth * 2,
        top: 0,
        transform: [{ translateX: -arrowWidth }],
      }}
    />
    <View
      style={{
        ...commonStyle,
        borderBottomColor: 'white',
        left: targetMeasurements.width / 2,
        marginTop: -arrowWidth * 2 + 1,
        top: 0,
        transform: [{ translateX: -arrowWidth }],
      }}
    />
  </>
);

export const getPositionerArrow = ({
  position,
  targetMeasurements,
  theme,
}: {
  position: Position;
  targetMeasurements: Measurements;
  theme: Theme;
}) => {
  switch (position) {
    case 'top-left':
      return (
        <TopLeftArrow theme={theme} targetMeasurements={targetMeasurements} />
      );
    case 'top':
      return <TopArrow theme={theme} targetMeasurements={targetMeasurements} />;
    case 'top-right':
      return (
        <TopRightArrow theme={theme} targetMeasurements={targetMeasurements} />
      );
    case 'left':
      return (
        <LeftArrow theme={theme} targetMeasurements={targetMeasurements} />
      );
    case 'right':
      return (
        <RightArrow theme={theme} targetMeasurements={targetMeasurements} />
      );
    case 'bottom-right':
      return (
        <BottomRightArrow
          theme={theme}
          targetMeasurements={targetMeasurements}
        />
      );
    case 'bottom':
      return (
        <BottomArrow theme={theme} targetMeasurements={targetMeasurements} />
      );
    case 'bottom-left':
      return (
        <BottomLeftArrow
          theme={theme}
          targetMeasurements={targetMeasurements}
        />
      );
    default:
      return <View />;
  }
};

export const FullWidthTopArrow = ({
  theme,
  targetMeasurements,
}: {
  theme: Theme;
  targetMeasurements: Measurements;
}) => (
  <>
    <View
      style={{
        ...commonStyle,
        borderTopColor: theme.colors.border.default,
        bottom: 0,
        left: targetMeasurements.pageX + targetMeasurements.width / 2,
        marginBottom: -arrowWidth * 2,
        transform: [{ translateX: -arrowWidth }],
      }}
    />
    <View
      style={{
        ...commonStyle,
        borderTopColor: 'white',
        bottom: 0,
        left: targetMeasurements.pageX + targetMeasurements.width / 2,
        marginBottom: -arrowWidth * 2 + 1,
        transform: [{ translateX: -arrowWidth }],
      }}
    />
  </>
);

export const FullWidthBottomArrow = ({
  theme,
  targetMeasurements,
}: {
  theme: Theme;
  targetMeasurements: Measurements;
}) => (
  <>
    <View
      style={{
        ...commonStyle,
        borderBottomColor: theme.colors.border.default,
        left: targetMeasurements.pageX + targetMeasurements.width / 2,
        marginTop: -arrowWidth * 2,
        top: 0,
        transform: [{ translateX: -arrowWidth }],
      }}
    />
    <View
      style={{
        ...commonStyle,
        borderBottomColor: 'white',
        left: targetMeasurements.pageX + targetMeasurements.width / 2,
        marginTop: -arrowWidth * 2 + 1,
        top: 0,
        transform: [{ translateX: -arrowWidth }],
      }}
    />
  </>
);

export const getFullWidthPositionerArrow = ({
  position,
  targetMeasurements,
  theme,
}: {
  position: Position;
  targetMeasurements: Measurements;
  theme: Theme;
}) => {
  switch (position) {
    case 'top':
      return (
        <FullWidthTopArrow
          theme={theme}
          targetMeasurements={targetMeasurements}
        />
      );
    case 'bottom':
      return (
        <FullWidthBottomArrow
          theme={theme}
          targetMeasurements={targetMeasurements}
        />
      );
    default:
      return <View />;
  }
};
