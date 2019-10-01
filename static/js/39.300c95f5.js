(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{"./docs/Customization.mdx":function(e,n,t){"use strict";t.r(n),t.d(n,"default",function(){return d});var a=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),o=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/extends.js"),r=(t("./node_modules/react/index.js"),t("./node_modules/@mdx-js/react/dist/index.es.js")),l="/home/travis/build/WeTrustPlatform/paramount/docs/Customization.mdx",i={},s="wrapper";function d(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(r.b)(s,Object(o.a)({},i,t,{components:n,mdxType:"MDXLayout",__source:{fileName:l,lineNumber:20}}),Object(r.b)("h1",Object(o.a)({id:"customization"},{__source:{fileName:l,lineNumber:21}}),"Customization"),Object(r.b)("h2",Object(o.a)({id:"look-and-feel"},{__source:{fileName:l,lineNumber:24}}),"Look and Feel"),Object(r.b)("p",{__source:{fileName:l,lineNumber:27}},"Use ",Object(r.b)("inlineCode",{parentName:"p",__source:{fileName:l,lineNumber:27}},"ThemeProvider")," and pass a ",Object(r.b)("inlineCode",{parentName:"p",__source:{fileName:l,lineNumber:27}},"Theme")," object. For all available options, ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"#options"},{__source:{fileName:l,lineNumber:27}}),"refer to Options")),Object(r.b)("pre",{__source:{fileName:l,lineNumber:30}},Object(r.b)("code",Object(o.a)({parentName:"pre"},{},{__source:{fileName:l,lineNumber:30}}),"import { ThemeProvider } from 'paramount-ui'\n\n<ThemeProvider value={{\n  // Colors\n  colors: Colors;\n  fills: Fills;\n\n  // Layout\n  layout: Layout;\n\n  // Typography\n  fontFamilies: FontFamilies;\n  fontWeights: FontWeights;\n\n  headingSizes: HeadingSizes;\n  paragraphSizes: ParagraphSizes;\n  textSizes: TextSizes;\n\n  // Elevations\n  elevations: Elevations;\n\n  // Controls - Buttons, Controls etc.\n  controlPaddings: ControlSizes;\n  controlHeights: ControlSizes;\n  controlBorderRadius: ControlSizes;\n\n  // Container shapes\n  containerShapes: ContainerShapes;\n}}>\n  ...\n</ThemeProvider>\n")),Object(r.b)("h2",Object(o.a)({id:"components"},{__source:{fileName:l,lineNumber:62}}),"Components"),Object(r.b)("p",{__source:{fileName:l,lineNumber:65}},"Components can be customized at two levels, ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"#from-themeprovider"},{__source:{fileName:l,lineNumber:65}}),"From ThemeProvider")," and ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"#per-instance"},{__source:{fileName:l,lineNumber:67}}),"Per instance")),Object(r.b)("h3",Object(o.a)({id:"from-themeprovider"},{__source:{fileName:l,lineNumber:70}}),"From ThemeProvider"),Object(r.b)("p",{__source:{fileName:l,lineNumber:73}},"In the same ",Object(r.b)("inlineCode",{parentName:"p",__source:{fileName:l,lineNumber:73}},"ThemeProvider")," as above, use ",Object(r.b)("inlineCode",{parentName:"p",__source:{fileName:l,lineNumber:73}},"components")," option. See ",Object(r.b)("inlineCode",{parentName:"p",__source:{fileName:l,lineNumber:73}},"Customization")," section in corresponding component docs to understand the ",Object(r.b)("inlineCode",{parentName:"p",__source:{fileName:l,lineNumber:73}},"get*Sstyles")," callback values"),Object(r.b)("pre",{__source:{fileName:l,lineNumber:74}},Object(r.b)("code",Object(o.a)({parentName:"pre"},{},{__source:{fileName:l,lineNumber:74}}),"import { ThemeProvider } from 'paramount-ui'\n\n<ThemeProvider value={{\n  // ...Other options\n\n  components: {\n    getAlertStyles?: GetAlertStyles;\n    getAvatarStyles?: GetAvatarStyles;\n    getBadgeStyles?: GetBadgeStyles;\n    getButtonStyles?: GetButtonStyles;\n    getCheckboxStyles?: GetCheckboxStyles;\n    getCollapsibleStyles?: GetCollapsibleStyles;\n    getCounterStyles?: GetCounterStyles;\n    getDialogStyles?: GetDialogStyles;\n    getDividerStyles?: GetDividerStyles;\n    getDrawerStyles?: GetDrawerStyles;\n    getFormFieldStyles?: GetFormFieldStyles;\n    getColumnStyles?: GetColumnStyles;\n    getContainerStyles?: GetContainerStyles;\n    getRowStyles?: GetRowStyles;\n    getTextInputStyles?: GetIconTextInputStyles;\n    getLabelStyles?: GetLabelStyles;\n    getListItemStyles?: GetListItemStyles;\n    getOverlayStyles?: GetOverlayStyles;\n    getPickerButtonStyles?: GetPickerButtonStyles;\n    getPopoverStyles?: GetPopoverStyles;\n    getPositionerStyles?: GetPositionerStyles;\n    getProgressBarStyles?: GetProgressBarStyles;\n    getRatingStyles?: GetRatingStyles;\n    getSliderStyles?: GetSliderStyles;\n    getSwitchStyles?: GetSwitchStyles;\n    getTabStyles?: GetTabStyles;\n    getTabsStyles?: GetTabsStyles;\n    getToastStyles?: GetToastStyles;\n    getHeadingStyles?: GetHeadingStyles;\n    getTextStyles?: GetTextStyles;\n    getParagraphStyles?: GetParagraphStyles;\n  }\n}}>\n  ...\n</ThemeProvider>\n")),Object(r.b)("h3",Object(o.a)({id:"per-instance"},{__source:{fileName:l,lineNumber:116}}),"Per instance"),Object(r.b)("p",{__source:{fileName:l,lineNumber:119}},"Each component exposes ",Object(r.b)("inlineCode",{parentName:"p",__source:{fileName:l,lineNumber:119}},"getStyles")," callback, which can be used to override component styles. See ",Object(r.b)("inlineCode",{parentName:"p",__source:{fileName:l,lineNumber:119}},"Customization")," section in corresponding component docs to understand the ",Object(r.b)("inlineCode",{parentName:"p",__source:{fileName:l,lineNumber:119}},"get*Sstyles")," callback values"),Object(r.b)("pre",{__source:{fileName:l,lineNumber:120}},Object(r.b)("code",Object(o.a)({parentName:"pre"},{},{__source:{fileName:l,lineNumber:120}}),"import { Button } from 'paramount-ui'\n\nconst CustomButton = () => {\n  return (\n    <Button\n      isDisabled\n      getStyles={(props, theme) => {\n        const { isDisabled } = props;\n\n        // Style of each React Element\n        return {\n          touchableStyle: { ... },\n          textStyle: { ... },\n        }\n      }}\n    >\n  )\n}\n")),Object(r.b)("h2",Object(o.a)({id:"usage"},{__source:{fileName:l,lineNumber:139}}),"Usage"),Object(r.b)("p",{__source:{fileName:l,lineNumber:142}},"Paramount exposes a convenience hook ",Object(r.b)("inlineCode",{parentName:"p",__source:{fileName:l,lineNumber:142}},"useTheme")," to import values from the ",Object(r.b)("inlineCode",{parentName:"p",__source:{fileName:l,lineNumber:142}},"Theme")),Object(r.b)("pre",{__source:{fileName:l,lineNumber:143}},Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-tsx"},{__source:{fileName:l,lineNumber:143}}),"const MyComponent = () => {\n  const { colors, fills, ...restTheme } = useTheme();\n\n  ...\n}\n")),Object(r.b)("h2",Object(o.a)({id:"options"},{__source:{fileName:l,lineNumber:151}}),"Options"),Object(r.b)("p",{__source:{fileName:l,lineNumber:154}},"These are all the available configuration options, as well as the default configuration"),Object(r.b)("pre",{__source:{fileName:l,lineNumber:155}},Object(r.b)("code",Object(o.a)({parentName:"pre"},{},{__source:{fileName:l,lineNumber:155}}),"const controlPaddings: ControlSizes = {\n  small: 8,\n\n  medium: 16,\n\n  large: 24,\n};\n\nconst controlHeights: ControlSizes = {\n  small: 40,\n\n  medium: 48,\n\n  large: 56,\n};\n\nconst controlBorderRadius: ControlSizes = {\n  small: 4,\n\n  medium: 4,\n\n  large: 4,\n};\n\nconst colors: Colors = {\n  background: {\n    base: 'white',\n    content: 'white',\n    overlay: 'rgba(0,0,0,0.3)',\n\n    greyLight: palette.neutral.lightest,\n    greyDefault: '#F5F6F7',\n    greyDark: palette.neutral.light,\n\n    primaryLight: palette.teal.lightest,\n    primaryDefault: palette.teal.base,\n    primaryDark: palette.teal.dark,\n\n    secondaryLight: palette.orange.lightest,\n    secondaryDefault: palette.orange.base,\n    secondaryDark: palette.orange.dark,\n\n    dangerLight: palette.red.lightest,\n    dangerDefault: palette.red.base,\n    dangerDark: palette.red.dark,\n\n    infoLight: palette.blue.lightest,\n    infoDefault: palette.blue.base,\n    infoDark: palette.blue.dark,\n\n    successLight: palette.green.lightest,\n    successDefault: palette.green.base,\n    successDark: palette.green.dark,\n\n    warningLight: palette.orange.lightest,\n    warningDefault: palette.orange.base,\n    warningDark: palette.orange.dark,\n  },\n\n  border: {\n    default: palette.neutral.light,\n\n    primary: palette.teal.darkest,\n    secondary: palette.orange.darkest,\n\n    danger: palette.red.darkest,\n    info: palette.blue.darkest,\n    success: palette.green.darkest,\n    warning: palette.orange.darkest,\n  },\n\n  button: {\n    disabled: palette.neutral.light,\n    disabledText: palette.neutral.darkest,\n\n    default: palette.neutral.lightest,\n    defaultText: palette.neutral.darkest,\n\n    primary: palette.teal.base,\n    primaryText: 'white',\n\n    secondary: palette.orange.base,\n    secondaryText: 'white',\n\n    danger: palette.red.base,\n    dangerText: 'white',\n  },\n\n  text: {\n    link: palette.neutral.darkest,\n    default: palette.neutral.darkest,\n    muted: palette.neutral.dark,\n    white: 'white',\n    selected: 'white',\n\n    primary: palette.teal.darkest,\n    secondary: palette.orange.darkest,\n\n    danger: palette.red.darkest,\n    info: palette.blue.darkest,\n    success: palette.green.darkest,\n    warning: palette.orange.darkest,\n  },\n};\n\nconst elevations: Elevations = [\n  {\n    elevation: 0,\n    shadowColor: palette.neutral.dark,\n    shadowOffset: { width: 0, height: 0 },\n    shadowOpacity: 0,\n    shadowRadius: 0,\n  },\n  {\n    elevation: 1,\n    shadowColor: palette.neutral.dark,\n    shadowOffset: { width: 1, height: 1 },\n    shadowOpacity: 0.15,\n    shadowRadius: 8,\n  },\n  {\n    elevation: 2,\n    shadowColor: palette.neutral.dark,\n    shadowOffset: { width: 2, height: 2 },\n    shadowOpacity: 0.2,\n    shadowRadius: 10,\n  },\n  {\n    elevation: 3,\n    shadowColor: palette.neutral.dark,\n    shadowOffset: { width: 3, height: 3 },\n    shadowOpacity: 0.25,\n    shadowRadius: 12,\n  },\n  {\n    elevation: 4,\n    shadowColor: palette.neutral.dark,\n    shadowOffset: { width: 4, height: 4 },\n    shadowOpacity: 0.3,\n    shadowRadius: 8,\n  },\n  {\n    elevation: 5,\n    shadowColor: palette.neutral.dark,\n    shadowOffset: { width: 5, height: 5 },\n    shadowOpacity: 0.35,\n    shadowRadius: 8,\n  },\n];\n\nconst fills: Fills = {\n  solid: {\n    neutral: {\n      backgroundColor: palette.neutral.base,\n      color: 'white',\n    },\n\n    blue: {\n      backgroundColor: palette.blue.base,\n      color: 'white',\n    },\n\n    red: {\n      backgroundColor: palette.red.base,\n      color: 'white',\n    },\n\n    orange: {\n      backgroundColor: palette.orange.base,\n      color: 'white',\n    },\n\n    yellow: {\n      backgroundColor: palette.yellow.base,\n      color: palette.yellow.darkest,\n    },\n\n    green: {\n      backgroundColor: palette.green.base,\n      color: 'white',\n    },\n\n    teal: {\n      backgroundColor: palette.teal.base,\n      color: 'white',\n    },\n\n    purple: {\n      backgroundColor: palette.purple.base,\n      color: 'white',\n    },\n  },\n\n  subtle: {\n    neutral: {\n      backgroundColor: palette.neutral.light,\n      color: palette.neutral.darkest,\n    },\n\n    blue: {\n      backgroundColor: palette.blue.light,\n      color: palette.blue.darkest,\n    },\n\n    red: {\n      backgroundColor: palette.red.light,\n      color: palette.red.darkest,\n    },\n\n    orange: {\n      backgroundColor: palette.orange.light,\n      color: palette.orange.darkest,\n    },\n\n    yellow: {\n      backgroundColor: palette.yellow.light,\n      color: palette.yellow.darkest,\n    },\n\n    green: {\n      backgroundColor: palette.green.light,\n      color: palette.green.darkest,\n    },\n\n    teal: {\n      backgroundColor: palette.teal.light,\n      color: palette.teal.darkest,\n    },\n\n    purple: {\n      backgroundColor: palette.purple.light,\n      color: palette.purple.darkest,\n    },\n  },\n};\n\nconst fontFamilies: FontFamilies =\n  Platform.OS === 'web'\n    ? // Use system font on the Web\n      {\n        heading: `\"SF UI Display\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\"`,\n        mono: `\"SF Mono\", \"Monaco\", \"Inconsolata\", \"Fira Mono\", \"Droid Sans Mono\", \"Source Code Pro\", monospace`,\n        text: `\"SF UI Text\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\"`,\n      }\n    : // Use default font families by React Native by default. Setting it to undefined will use the default font\n      {\n        heading: \"System\",\n        mono: \"System\",\n        text: \"System\",\n      };\n\nconst fontWeights: FontWeights = {\n  bold: 'bold',\n  light: '300',\n  normal: 'normal',\n};\n\nconst headingSizes: HeadingSizes = {\n  xxxlarge: {\n    fontSize: 35,\n    letterSpacing: -0.2,\n    lineHeight: 40,\n  },\n\n  xxlarge: {\n    fontSize: 29,\n    letterSpacing: -0.2,\n    lineHeight: 32,\n  },\n\n  xlarge: {\n    fontSize: 24,\n    letterSpacing: -0.07,\n    lineHeight: 28,\n  },\n\n  large: {\n    fontSize: 20,\n    letterSpacing: -0.07,\n    lineHeight: 24,\n  },\n\n  medium: {\n    fontSize: 16,\n    letterSpacing: -0.05,\n    lineHeight: 20,\n  },\n\n  small: {\n    fontSize: 14,\n    letterSpacing: -0.05,\n    lineHeight: 20,\n  },\n};\n\nconst paragraphSizes: ParagraphSizes = {\n  small: {\n    fontSize: 14,\n    lineHeight: 24,\n  },\n\n  medium: {\n    fontSize: 16,\n    lineHeight: 21,\n  },\n\n  large: {\n    fontSize: 18,\n    lineHeight: 18,\n  },\n};\n\nconst textSizes: TextSizes = {\n  large: {\n    fontSize: 20,\n  },\n  medium: {\n    fontSize: 16,\n  },\n  small: {\n    fontSize: 14,\n  },\n  xsmall: {\n    fontSize: 12,\n  },\n};\n\nconst containerShapes: ContainerShapes = {\n  circle: {\n    borderRadius: 999,\n  },\n  pill: {\n    borderRadius: 999,\n  },\n  rounded: {\n    borderRadius: controlBorderRadius.medium,\n  },\n  roundedBottom: {\n    borderBottomLeftRadius: controlBorderRadius.medium,\n    borderBottomRightRadius: controlBorderRadius.medium,\n  },\n  roundedLeft: {\n    borderBottomLeftRadius: controlBorderRadius.medium,\n    borderTopLeftRadius: controlBorderRadius.medium,\n  },\n  roundedRight: {\n    borderBottomRightRadius: controlBorderRadius.medium,\n    borderTopRightRadius: controlBorderRadius.medium,\n  },\n  roundedTop: {\n    borderTopLeftRadius: controlBorderRadius.medium,\n    borderTopRightRadius: controlBorderRadius.medium,\n  },\n  square: {\n    borderRadius: 0,\n  },\n};\n\nexport const defaultLayout: Layout = {\n  breakpoints: {\n    small: 480,\n\n    medium: 768,\n\n    large: 992,\n\n    xlarge: 1200,\n  },\n  containerSizes: {\n    small: 540,\n\n    medium: 720,\n\n    large: 960,\n\n    xlarge: 1140,\n  },\n  gridColumnCount: 12,\n  gutterWidth: 30,\n};\n\nexport const defaultTheme: Theme = {\n  colors,\n  fills,\n  layout,\n\n  fontFamilies,\n  fontWeights,\n\n  headingSizes,\n  paragraphSizes,\n  textSizes,\n\n  elevations,\n\n  controlBorderRadius,\n  controlHeights,\n  controlPaddings,\n\n  containerShapes,\n\n  components: {},\n};\n")))}d&&d===Object(d)&&Object.isExtensible(d)&&Object.defineProperty(d,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"docs/Customization.mdx"}}),d.isMDXComponent=!0}}]);
//# sourceMappingURL=39.b00e7a1f0342f715624d.js.map