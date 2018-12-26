// tslint:disable object-literal-sort-keys

export interface ColorPalette {
  base: string;
  dark: string;
  darkest: string;
  light: string;
  lightest: string;
}

export interface Palette {
  neutral: ColorPalette;
  blue: ColorPalette;
  red: ColorPalette;
  orange: ColorPalette;
  yellow: ColorPalette;
  green: ColorPalette;
  teal: ColorPalette;
  purple: ColorPalette;
}

export default {
  neutral: {
    lightest: '#fafafa',
    light: '#eeeeee',
    base: '#cccccc',
    dark: '#a7a7a7',
    darkest: '#7e7e7e',
  },

  blue: {
    lightest: '#e5f5ff',
    light: '#ceecff',
    base: '#1ca5F7',
    dark: '#59a9de',
    darkest: '#33495f',
  },

  red: {
    lightest: '#f9e1de',
    light: '#f9aa9f',
    base: '#d26557',
    dark: '#bb584e',
    darkest: '#b74033',
  },

  orange: {
    lightest: '#fce8cf',
    light: '#f2c58a',
    base: '#f3b058',
    dark: '#ec8e30',
    darkest: '#b26500',
  },

  yellow: {
    lightest: '#fef8e7',
    light: '#fbe6a2',
    base: '#f7d154',
    dark: '#d1b047',
    darkest: '#7e6514',
  },

  green: {
    lightest: '#eafff3',
    light: '#c2edd5',
    base: '#54bf84',
    dark: '#42a46e',
    darkest: '#16a054',
  },

  teal: {
    lightest: '#d6fcf7',
    light: '#c0f9f2',
    base: '#67c6bb',
    dark: '#3fa296',
    darkest: '#1b877a',
  },

  purple: {
    lightest: '#f8f7fc',
    light: '#eae7f8',
    base: '#735dd0',
    dark: '#37248f',
    darkest: '#37248f',
  },
};
