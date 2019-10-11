// PORTED IMPLEMENTATION FROM https://github.com/react-native-community/react-native-svg/blob/master/index.web.js
import {
  CircleProps,
  ClipPathProps,
  DefinitionProps,
  EllipseProps,
  GProps,
  ImageProps,
  LinearGradientProps,
  LineProps,
  MaskProps,
  PathProps,
  PatternProps,
  PolygonProps,
  PolylineProps,
  RadialGradientProps,
  RectProps,
  StopProps,
  SvgProps,
  SymbolProps,
  TextPathProps,
  TextProps,
  TSpanProps,
  UseProps,
} from 'react-native-svg';
import { createElement, StyleSheet } from 'react-native-web';
import { TextStyle } from 'react-native';

// @ts-ignore
// Kept in separate file, to avoid name collision with Symbol element
// @ts-ignore
const resolve = (styleProp, cleanedProps) => {
  if (styleProp) {
    return StyleSheet
      ? [styleProp, cleanedProps]
      : // Compatibility for arrays of styles in plain react web
      // @ts-ignore
      styleProp[Symbol.iterator]
      ? Object.assign({}, ...styleProp, cleanedProps)
      : Object.assign({}, styleProp, cleanedProps);
  } else {
    return cleanedProps;
  }
};

// eslint-disable-next-line
export const prepare = (props: any) => {
  const {
    translate,
    scale,
    rotation,
    skewX,
    skewY,
    originX,
    originY,
    fontFamily,
    fontSize,
    fontWeight,
    fontStyle,
    style,
    ...clean
  } = props;

  const transform = [];

  if (originX != null || originY != null) {
    transform.push(`translate(${originX || 0}, ${originY || 0})`);
  }
  if (translate != null) {
    transform.push(`translate(${translate})`);
  }
  if (scale != null) {
    transform.push(`scale(${scale})`);
  }
  // rotation maps to rotate, not to collide with the text rotate attribute (which acts per glyph rather than block)
  if (rotation != null) {
    transform.push(`rotate(${rotation})`);
  }
  if (skewX != null) {
    transform.push(`skewX(${skewX})`);
  }
  if (skewY != null) {
    transform.push(`skewY(${skewY})`);
  }
  if (originX != null || originY != null) {
    transform.push(`translate(${-originX || 0}, ${-originY || 0})`);
  }

  if (transform.length) {
    clean.transform = transform.join(' ');
  }

  const styles: TextStyle = {};

  if (fontFamily != null) {
    styles.fontFamily = fontFamily;
  }
  if (fontSize != null) {
    styles.fontSize = fontSize;
  }
  if (fontWeight != null) {
    styles.fontWeight = fontWeight;
  }
  if (fontStyle != null) {
    styles.fontStyle = fontStyle;
  }

  clean.style = resolve(style, styles);

  return clean;
};

export const Circle = (props: CircleProps) => {
  return createElement('circle', prepare(props));
};

export const ClipPath = (props: ClipPathProps) => {
  return createElement('clipPath', prepare(props));
};

export const Defs = (props: DefinitionProps) => {
  return createElement('defs', prepare(props));
};

export const Ellipse = (props: EllipseProps) => {
  return createElement('ellipse', prepare(props));
};

export const G = (props: GProps) => {
  const { x, y, ...rest } = props;

  if ((x || y) && !rest.translate) {
    rest.translate = `${x || 0}, ${y || 0}`;
  }

  return createElement('g', prepare(rest));
};

export const Image = (props: ImageProps) => {
  return createElement('image', prepare(props));
};

export const Line = (props: LineProps) => {
  return createElement('line', prepare(props));
};

export const LinearGradient = (props: LinearGradientProps) => {
  return createElement('linearGradient', prepare(props));
};

export const Path = (props: PathProps) => {
  return createElement('path', prepare(props));
};

export const Polygon = (props: PolygonProps) => {
  return createElement('polygon', prepare(props));
};

export const Polyline = (props: PolylineProps) => {
  return createElement('polyline', prepare(props));
};

export const RadialGradient = (props: RadialGradientProps) => {
  return createElement('radialGradient', prepare(props));
};

export const Rect = (props: RectProps) => {
  return createElement('rect', prepare(props));
};

export const Stop = (props: StopProps) => {
  return createElement('stop', prepare(props));
};

export const Svg = (props: SvgProps) => {
  return createElement('svg', prepare(props));
};

export const Symbol = (props: SymbolProps) => {
  return createElement('symbol', prepare(props));
};

export const Text = (props: TextProps) => {
  return createElement('text', prepare(props));
};

export const TSpan = (props: TSpanProps) => {
  return createElement('tspan', prepare(props));
};

export const TextPath = (props: TextPathProps) => {
  return createElement('textPath', prepare(props));
};

export const Use = (props: UseProps) => {
  return createElement('use', prepare(props));
};

export const Mask = (props: MaskProps) => {
  return createElement('mask', prepare(props));
};

export const Pattern = (props: PatternProps) => {
  return createElement('pattern', prepare(props));
};

export default Svg;
