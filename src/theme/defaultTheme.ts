import { Platform } from 'react-native';

import { defaultLayout } from '../components';
import palette from './palette';
import {
  Colors,
  ContainerShapes,
  ControlSizes,
  Elevations,
  Fills,
  FontFamilies,
  FontWeights,
  HeadingSizes,
  ParagraphSizes,
  TextSizes,
  Theme,
} from './Theme';

const controlPaddings: ControlSizes = {
  small: 8,

  medium: 16,

  large: 24,
};

const controlHeights: ControlSizes = {
  small: 40,

  medium: 48,

  large: 56,
};

const controlBorderRadius: ControlSizes = {
  small: 4,

  medium: 4,

  large: 4,
};

const colors: Colors = {
  background: {
    base: 'white',
    content: 'white',

    greyLight: palette.neutral.lightest,
    greyDefault: '#F5F6F7',
    greyDark: palette.neutral.light,

    primaryLight: palette.teal.lightest,
    primaryDefault: palette.teal.base,
    primaryDark: palette.teal.dark,

    secondaryLight: palette.orange.lightest,
    secondaryDefault: palette.orange.base,
    secondaryDark: palette.orange.dark,

    dangerLight: palette.red.lightest,
    dangerDefault: palette.red.base,
    dangerDark: palette.red.dark,

    infoLight: palette.blue.lightest,
    infoDefault: palette.blue.base,
    infoDark: palette.blue.dark,

    successLight: palette.green.lightest,
    successDefault: palette.green.base,
    successDark: palette.green.dark,

    warningLight: palette.orange.lightest,
    warningDefault: palette.orange.base,
    warningDark: palette.orange.dark,
  },

  border: {
    default: palette.neutral.light,

    primary: palette.teal.darkest,
    secondary: palette.orange.darkest,

    danger: palette.red.darkest,
    info: palette.blue.darkest,
    success: palette.green.darkest,
    warning: palette.orange.darkest,
  },

  button: {
    disabled: palette.neutral.light,
    disabledText: palette.neutral.darkest,

    default: palette.neutral.lightest,
    defaultText: palette.neutral.darkest,

    primary: palette.teal.base,
    primaryText: 'white',

    secondary: palette.orange.base,
    secondaryText: 'white',

    danger: palette.red.base,
    dangerText: 'white',
  },

  text: {
    link: palette.teal.darkest,
    default: palette.neutral.darkest,
    muted: palette.neutral.dark,
    white: 'white',
    selected: 'white',

    primary: palette.teal.darkest,
    secondary: palette.orange.darkest,

    danger: palette.red.darkest,
    info: palette.blue.darkest,
    success: palette.green.darkest,
    warning: palette.orange.darkest,
  },
};

const elevations: Elevations = [
  {
    elevation: 0,
    shadowColor: palette.neutral.dark,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0,
    shadowRadius: 0,
  },
  {
    elevation: 1,
    shadowColor: palette.neutral.dark,
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
  },
  {
    elevation: 2,
    shadowColor: palette.neutral.dark,
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
  },
  {
    elevation: 3,
    shadowColor: palette.neutral.dark,
    shadowOffset: { width: 3, height: 3 },
    shadowOpacity: 0.25,
    shadowRadius: 12,
  },
  {
    elevation: 4,
    shadowColor: palette.neutral.dark,
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
  },
  {
    elevation: 5,
    shadowColor: palette.neutral.dark,
    shadowOffset: { width: 5, height: 5 },
    shadowOpacity: 0.35,
    shadowRadius: 8,
  },
];

const fills: Fills = {
  solid: {
    neutral: {
      backgroundColor: palette.neutral.base,
      color: 'white',
    },

    blue: {
      backgroundColor: palette.blue.base,
      color: 'white',
    },

    red: {
      backgroundColor: palette.red.base,
      color: 'white',
    },

    orange: {
      backgroundColor: palette.orange.base,
      color: 'white',
    },

    yellow: {
      backgroundColor: palette.yellow.base,
      color: palette.yellow.darkest,
    },

    green: {
      backgroundColor: palette.green.base,
      color: 'white',
    },

    teal: {
      backgroundColor: palette.teal.base,
      color: 'white',
    },

    purple: {
      backgroundColor: palette.purple.base,
      color: 'white',
    },
  },

  subtle: {
    neutral: {
      backgroundColor: palette.neutral.light,
      color: palette.neutral.darkest,
    },

    blue: {
      backgroundColor: palette.blue.light,
      color: palette.blue.darkest,
    },

    red: {
      backgroundColor: palette.red.light,
      color: palette.red.darkest,
    },

    orange: {
      backgroundColor: palette.orange.light,
      color: palette.orange.darkest,
    },

    yellow: {
      backgroundColor: palette.yellow.light,
      color: palette.yellow.darkest,
    },

    green: {
      backgroundColor: palette.green.light,
      color: palette.green.darkest,
    },

    teal: {
      backgroundColor: palette.teal.light,
      color: palette.teal.darkest,
    },

    purple: {
      backgroundColor: palette.purple.light,
      color: palette.purple.darkest,
    },
  },
};

// Use system font on the Web
const fontFamilies: FontFamilies =
  Platform.OS === 'web'
    ? {
        heading: `"SF UI Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`,
        mono: `"SF Mono", "Monaco", "Inconsolata", "Fira Mono", "Droid Sans Mono", "Source Code Pro", monospace`,
        text: `"SF UI Text", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`,
      }
    : {
        heading: 'System',
        mono: 'System',
        text: 'System',
      };

const fontWeights: FontWeights = {
  bold: 'bold',
  light: '300',
  normal: 'normal',
};

const headingSizes: HeadingSizes = {
  xxxlarge: {
    fontSize: 35,
    letterSpacing: -0.2,
    lineHeight: 40,
  },

  xxlarge: {
    fontSize: 29,
    letterSpacing: -0.2,
    lineHeight: 32,
  },

  xlarge: {
    fontSize: 24,
    letterSpacing: -0.07,
    lineHeight: 28,
  },

  large: {
    fontSize: 20,
    letterSpacing: -0.07,
    lineHeight: 24,
  },

  medium: {
    fontSize: 16,
    letterSpacing: -0.05,
    lineHeight: 20,
  },

  small: {
    fontSize: 14,
    letterSpacing: -0.05,
    lineHeight: 20,
  },
};

const paragraphSizes: ParagraphSizes = {
  small: {
    fontSize: 14,
    lineHeight: 24,
  },

  medium: {
    fontSize: 16,
    lineHeight: 21,
  },

  large: {
    fontSize: 18,
    lineHeight: 18,
  },
};

const textSizes: TextSizes = {
  large: {
    fontSize: 20,
  },
  medium: {
    fontSize: 16,
  },
  small: {
    fontSize: 14,
  },
  xsmall: {
    fontSize: 12,
  },
};

const containerShapes: ContainerShapes = {
  circle: {
    borderRadius: 999,
  },
  pill: {
    borderRadius: 999,
  },
  rounded: {
    borderRadius: controlBorderRadius.medium,
  },
  roundedBottom: {
    borderBottomLeftRadius: controlBorderRadius.medium,
    borderBottomRightRadius: controlBorderRadius.medium,
  },
  roundedLeft: {
    borderBottomLeftRadius: controlBorderRadius.medium,
    borderTopLeftRadius: controlBorderRadius.medium,
  },
  roundedRight: {
    borderBottomRightRadius: controlBorderRadius.medium,
    borderTopRightRadius: controlBorderRadius.medium,
  },
  roundedTop: {
    borderTopLeftRadius: controlBorderRadius.medium,
    borderTopRightRadius: controlBorderRadius.medium,
  },
  square: {
    borderRadius: 0,
  },
};

export const defaultTheme: Theme = {
  colors,
  fills,

  layout: defaultLayout,

  fontFamilies,
  fontWeights,

  headingSizes,
  paragraphSizes,
  textSizes,

  elevations,

  controlBorderRadius,
  controlHeights,
  controlPaddings,

  containerShapes,
};
