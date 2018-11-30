# Paramount

Cross platform React Native and React Web UI components library

- **Cross platform.** Components work on both React Native And React Web platforms (using [react-native-web](https://github.com/necolas/react-native-web))
- **Fully customizable.** You can customize 100% of the component styles so that you can adapt to your branding needs any way you want.
- **Mobile friendly.** All of the components are usable and look good on mobile devices.

More:

- Built on TypeScript (typings!)
- Tree-shaking friendly (ESM)
- [Styles in JavaScript](https://twitter.com/necolas/status/1058949412284592128)

# Getting started

## Install

Install the Paramount

```
yarn add paramount-ui
# or
npm install --save paramount-ui
```

## Usage on Web

To integrate this library into your web project, follow the guide on [react-native-web library](https://github.com/necolas/react-native-web)

## Usage on Native

Use directly

```
import { Button } from 'paramount-ui';
```

# Theming

Paramount uses three-tier theming system. It means you can customize the styles at three layers, with each level being more granular

## 1. Use ThemeProvider

First and foremost, in order to theme the library you need to use React Context's Provider

```
import { ThemeProvider, createTheme } from 'paramount-ui'

const theme = createTheme()

// in the outmost component insert the provider and pass Theme Object as value
<ThemeProvider value={theme}>
  ...
</ThemeProvider>

```

## 2. Theme Object

Theme object has 3 parts. [See ITheme interface](theme/ThemeInterface.ts). You can choose to customize whichever part you want

```
const theme = createTheme(themeVariables, componentVariables)

// or

const theme = {
  themeVariables: customThemeVariables,
  componentVariables: customComponentVariables,
  ...styleGetters
}
```

### Theme variables (Tier 1)

Those are variables that define overall look of the design system. These high level variables should be enough to provide basic style changes such as color, font sizes, control paddings/heights etc. [See IThemeVariables interface](theme/ThemeInterface.ts)

```
const themeVariables = {
  ...defaultThemeVariables,
  colors: {
    background: { ... },
    border: { ... },
    icon: { ... },
    intent: { ... },
    text: { ... },
    brand: { ... },
  }
}
```

### Component variables (Tier 2)

Those are variables applied to individual components. They inherit some variables from tier-1 theme variables but can be overriden specifically for each component. These variables usually provide styling for different component states, look etc.

```

const buttonVariables = {
  appearances: {
    minimal: {
      default: {
        backgroundColor: 'blue',
        ...
      },
      danger: { ... },
      primary: { ... },
      secondary: { ... },
    },
    primary: {
      default: { ... },
      danger: { ... },
      primary: { ... },
      secondary: { ... },
    },
    outline: {
      default: { ... },
      danger: { ... },
      primary: { ... },
      secondary: { ... }
    },
  },
  disabled: { ... },
  sizes: {
    small: { ... },
    medium: { ... },
    large: { ... },
  },
}

const theme = {
  ...createTheme(themeVariables, {
    ...componentVariables,
    button: buttonVariables, // <= Insert here
  }),
  ...styleGetters,
}
```

### Component style getters (Tier 3)

These are functions that return style for components. This allows for complete control over how a component looks depending on given props. They inherit variables from component variables.

```
const getButtonStyles = buttonVariables => (appearance, color, ...componentProps) => {
  return {
    buttonStyle: {
      backgroundColor: buttonVariables[appearance],
      boxShadow: '1 1 1 1 blue'
    },
    focusColor: { ... },
    textStyle: { ... },
  }
}

const theme = {
  ...createTheme(themeVariables, componentVariables),
  ...styleGetters,
  getButtonStyles, // <= Insert here
}
```

# Inspiration

> Standing on the shoulders of giants

Much of the architecture of this library are heavily inspired by awesome work of existing design systems, and there are parts even copied directly into this project.

- Awesome [Evergreen Design System](https://github.com/segmentio/evergreen) (Most inspired from)
- [react-native-switch-toggle](https://github.com/react-native-seoul/react-native-switch-toggle)
- More...

# Contributing
