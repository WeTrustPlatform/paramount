import { Colors } from '../../ThemeInterface';
import palette from './palette';

// tslint:disable object-literal-sort-keys

const colors: Colors = {
  background: {
    base: 'white',
    content: 'white',
    overlay: 'rgba(0,0,0,0.3)',

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

  text: {
    link: palette.neutral.darkest,
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

export default colors;
