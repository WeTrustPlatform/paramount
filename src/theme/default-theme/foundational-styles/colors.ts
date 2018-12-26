import { Colors } from '../../ThemeInterface';
import palette from './palette';

// tslint:disable object-literal-sort-keys

/**
 * This object are functional colors being used the default theme.
 * A required property is required by the default theme NOT by Evergreen itself.
 */
const colors: Colors = {
  /**
   * Available on Pane as `<Pane background="tint1" />`
   */
  background: {
    overlay: 'rgba(0,0,0,0.3)',
    plain: 'white',
    disabled: palette.neutral.light,
    tint1: palette.neutral.lightest,
    tint2: '#F5F6F7',

    // Brand colors
    primary: {
      default: palette.teal.base,
      focus: palette.teal.dark,
      focusLight: palette.teal.lightest,
    },
    secondary: {
      default: palette.orange.base,
      focus: palette.orange.dark,
      focusLight: palette.orange.lightest,
    },

    // Intent.
    danger: {
      default: palette.red.base,
      focus: palette.red.dark,
      focusLight: palette.red.lightest,
    },
    info: {
      default: palette.blue.base,
      focus: palette.blue.dark,
      focusLight: palette.blue.lightest,
    },
    success: {
      default: palette.green.base,
      focus: palette.green.dark,
      focusLight: palette.green.lightest,
    },
    warning: {
      default: palette.orange.base,
      focus: palette.orange.dark,
      focusLight: palette.orange.lightest,
    },
  },

  /**
   * Available on Pane as `<Pane borderBottom borderRight="muted" />`
   */
  border: {
    default: palette.neutral.light,
    muted: '#EDF0F2',

    // Brand colors
    primary: palette.teal.darkest,
    secondary: palette.orange.darkest,

    // Intent.
    danger: palette.red.darkest,
    info: palette.blue.darkest,
    success: palette.green.darkest,
    warning: palette.orange.darkest,
  },

  text: {
    dark: palette.neutral.darkest,
    default: palette.neutral.darkest,
    muted: palette.neutral.dark,
    plain: 'white',
    selected: 'white',

    // Brand colors
    primary: palette.teal.darkest,
    secondary: palette.orange.darkest,

    // Intent.
    danger: palette.red.darkest,
    info: palette.blue.darkest,
    success: palette.green.darkest,
    warning: palette.orange.darkest,
  },
};

export default colors;
