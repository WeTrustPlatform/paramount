(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"./src/components/Alert/Alert.mdx":function(e,t,n){var i=n("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=i(n("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js")),s=i(n("./node_modules/@babel/runtime/helpers/classCallCheck.js")),l=i(n("./node_modules/@babel/runtime/helpers/createClass.js")),o=i(n("./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js")),r=i(n("./node_modules/@babel/runtime/helpers/getPrototypeOf.js")),c=i(n("./node_modules/@babel/runtime/helpers/inherits.js")),d=i(n("./node_modules/react/index.js")),u=n("./node_modules/@mdx-js/tag/dist/index.js"),p=n("./node_modules/docz/dist/index.m.js"),m=i(n("./src/components/Alert/Alert.tsx")),h=n("./src/components/Layout/index.ts"),y=function(e){function t(e){var n;return(0,s.default)(this,t),(n=(0,o.default)(this,(0,r.default)(t).call(this,e))).layout=null,n}return(0,c.default)(t,e),(0,l.default)(t,[{key:"render",value:function(){var e=this.props,t=e.components,n=(0,a.default)(e,["components"]);return d.default.createElement(u.MDXTag,{name:"wrapper",components:t},d.default.createElement(u.MDXTag,{name:"h2",components:t,props:{id:"usage"}},"Usage"),d.default.createElement(u.MDXTag,{name:"h3",components:t,props:{id:"alerts"}},"Alerts"),d.default.createElement(p.Playground,{__position:0,__code:'<Spacing paddingVertical={2}>\n  <Alert title="Info" description="Message" />\n</Spacing>\n<Spacing paddingVertical={2}>\n  <Alert intent="success" title="Success" description="Message" />\n</Spacing>\n<Spacing paddingVertical={2}>\n  <Alert intent="warning" title="Warning" description="Message" />\n</Spacing>\n<Spacing paddingVertical={2}>\n  <Alert intent="danger" title="Danger" description="Message" />\n</Spacing>',__scope:{props:this?this.props:n,Alert:m.default,Spacing:h.Spacing}},d.default.createElement(h.Spacing,{paddingVertical:2},d.default.createElement(m.default,{title:"Info",description:"Message"})),d.default.createElement(h.Spacing,{paddingVertical:2},d.default.createElement(m.default,{intent:"success",title:"Success",description:"Message"})),d.default.createElement(h.Spacing,{paddingVertical:2},d.default.createElement(m.default,{intent:"warning",title:"Warning",description:"Message"})),d.default.createElement(h.Spacing,{paddingVertical:2},d.default.createElement(m.default,{intent:"danger",title:"Danger",description:"Message"}))),d.default.createElement(u.MDXTag,{name:"h3",components:t,props:{id:"closable-alerts"}},"Closable Alerts"),d.default.createElement(p.Playground,{__position:1,__code:'<Alert isCloseable title="Closeable" description="Message" />',__scope:{props:this?this.props:n,Alert:m.default,Spacing:h.Spacing}},d.default.createElement(m.default,{isCloseable:!0,title:"Closeable",description:"Message"})),d.default.createElement(u.MDXTag,{name:"h2",components:t,props:{id:"props"}},"Props"),d.default.createElement(p.PropsTable,{of:m.default}))}}]),t}(d.default.Component);t.default=y},"./src/components/Alert/Alert.tsx":function(e,t,n){var i=n("./node_modules/@babel/runtime/helpers/interopRequireWildcard.js"),a=n("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.Alert=void 0;var s=a(n("./node_modules/@babel/runtime/helpers/objectSpread.js")),l=i(n("./node_modules/react/index.js")),o=n("./node_modules/react-native-web/dist/index.js"),r=n("./src/icons/index.ts"),c=n("./src/theme/index.ts"),d=n("./src/components/Layout/index.ts"),u=n("./src/components/Typography/index.ts"),p=(0,c.withTheme)(function(e){var t=e.title,n=e.description,i=e.component,a=e.onClose,c=e.isCloseable,p=void 0!==c&&c,m=e.icon,h=e.intent,y=void 0===h?"info":h,f=e.dangerouslySetInlineStyle,b=e.theme,g=b.getAlertStyles(y),w=g.containerStyle,v=g.bodyStyle;return l.createElement(o.View,{style:(0,s.default)({},w,f&&f.containerStyle)},m||l.createElement(d.Spacing,{paddingRight:2,justifyContent:"center"},function(e,t){switch(e){case"success":return l.createElement(r.Icon,{name:"check-circle",size:24,color:t.themeVariables.colors.text.success});case"warning":return l.createElement(r.Icon,{name:"alert-triangle",size:24,color:t.themeVariables.colors.text.warning});case"danger":return l.createElement(r.Icon,{name:"alert-circle",size:24,color:t.themeVariables.colors.text.danger});default:return l.createElement(r.Icon,{name:"info",size:24,color:t.themeVariables.colors.text.info})}}(y,b)),i||l.createElement(o.View,{style:(0,s.default)({},v,f&&f.bodyStyle)},l.createElement(u.Strong,null,t),l.createElement(u.Text,null,n)),p&&l.createElement(o.TouchableOpacity,{onPress:a},l.createElement(d.Spacing,{paddingLeft:2},l.createElement(r.Icon,{name:"x",size:24,color:b.themeVariables.colors.text.default}))))});t.Alert=p;var m=p;t.default=m;try{p.displayName="Alert",p.__docgenInfo={description:"",displayName:"Alert",props:{title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string"}},component:{defaultValue:null,description:"",name:"component",required:!1,type:{name:"ReactNode"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!1,type:{name:"() => void"}},isCloseable:{defaultValue:null,description:"",name:"isCloseable",required:!1,type:{name:"boolean"}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"ReactNode"}},intent:{defaultValue:null,description:"",name:"intent",required:!1,type:{name:'"danger" | "info" | "success" | "warning"'}},dangerouslySetInlineStyle:{defaultValue:null,description:"Inline styles for components",name:"dangerouslySetInlineStyle",required:!1,type:{name:"Partial<AlertStyles>"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Alert/Alert.tsx#Alert"]={docgenInfo:p.__docgenInfo,name:"Alert",path:"src/components/Alert/Alert.tsx#Alert"})}catch(h){}try{__class.displayName="__class",__class.__docgenInfo={description:"",displayName:"__class",props:{title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string"}},component:{defaultValue:null,description:"",name:"component",required:!1,type:{name:"ReactNode"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!1,type:{name:"() => void"}},isCloseable:{defaultValue:null,description:"",name:"isCloseable",required:!1,type:{name:"boolean"}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"ReactNode"}},intent:{defaultValue:null,description:"",name:"intent",required:!1,type:{name:'"danger" | "info" | "success" | "warning"'}},dangerouslySetInlineStyle:{defaultValue:null,description:"Inline styles for components",name:"dangerouslySetInlineStyle",required:!1,type:{name:"Partial<AlertStyles>"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Alert/Alert.tsx#__class"]={docgenInfo:__class.__docgenInfo,name:"__class",path:"src/components/Alert/Alert.tsx#__class"})}catch(h){}},"./src/icons/Icon.web.tsx":function(e,t,n){var i=n("./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=i(n("./node_modules/react/index.js")),s=i(n("./node_modules/react-icons/fi/index.js"));t.default=function(e){var t=e.name,n=e.color,i=e.size,l=s["Fi".concat(function(e){var t=e.replace(/(\-\w)/g,function(e){return e[1].toUpperCase()});return t.charAt(0).toUpperCase()+t.slice(1)}(t))];return a.createElement(l,{color:n,size:i})};try{Iconweb.displayName="Iconweb",Iconweb.__docgenInfo={description:"",displayName:"Iconweb",props:{color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:"string"}},name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"FeatherIcon"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"number"}},allowFontScaling:{defaultValue:null,description:"Specifies whether fonts should scale to respect Text Size accessibility settings.\nThe default is `true`.",name:"allowFontScaling",required:!1,type:{name:"boolean"}},ellipsizeMode:{defaultValue:null,description:'This can be one of the following values:\n\n- `head` - The line is displayed so that the end fits in the container and the missing text\nat the beginning of the line is indicated by an ellipsis glyph. e.g., "...wxyz"\n- `middle` - The line is displayed so that the beginning and end fit in the container and the\nmissing text in the middle is indicated by an ellipsis glyph. "ab...yz"\n- `tail` - The line is displayed so that the beginning fits in the container and the\nmissing text at the end of the line is indicated by an ellipsis glyph. e.g., "abcd..."\n- `clip` - Lines are not drawn past the edge of the text container.\n\nThe default is `tail`.\n\n`numberOfLines` must be set in conjunction with this prop.\n\n> `clip` is working only for iOS',name:"ellipsizeMode",required:!1,type:{name:'"head" | "middle" | "tail" | "clip"'}},lineBreakMode:{defaultValue:null,description:"Line Break mode. Works only with numberOfLines.\nclip is working only for iOS",name:"lineBreakMode",required:!1,type:{name:'"head" | "middle" | "tail" | "clip"'}},numberOfLines:{defaultValue:null,description:"Used to truncate the text with an ellipsis after computing the text\nlayout, including line wrapping, such that the total number of lines\ndoes not exceed this number.\n\nThis prop is commonly used with `ellipsizeMode`.",name:"numberOfLines",required:!1,type:{name:"number"}},onLayout:{defaultValue:null,description:"Invoked on mount and layout changes with\n\n{nativeEvent: { layout: {x, y, width, height}}}.",name:"onLayout",required:!1,type:{name:"(event: LayoutChangeEvent) => void"}},onPress:{defaultValue:null,description:"This function is called on press.\nText intrinsically supports press handling with a default highlight state (which can be disabled with suppressHighlighting).",name:"onPress",required:!1,type:{name:"(event: GestureResponderEvent) => void"}},onLongPress:{defaultValue:null,description:"This function is called on long press.\ne.g., `onLongPress={this.increaseSize}>``\n     *",name:"onLongPress",required:!1,type:{name:"(event: GestureResponderEvent) => void"}},style:{defaultValue:null,description:"@see https://facebook.github.io/react-native/docs/text.html#style",name:"style",required:!1,type:{name:"StyleProp<TextStyle>"}},testID:{defaultValue:null,description:"Used to locate this view in end-to-end tests.",name:"testID",required:!1,type:{name:"string"}},nativeID:{defaultValue:null,description:"Used to reference react managed views from native code.",name:"nativeID",required:!1,type:{name:"string"}},adjustsFontSizeToFit:{defaultValue:null,description:"Specifies whether font should be scaled down automatically to fit given style constraints.",name:"adjustsFontSizeToFit",required:!1,type:{name:"boolean"}},minimumFontScale:{defaultValue:null,description:"Specifies smallest possible scale a font can reach when adjustsFontSizeToFit is enabled. (values 0.01-1.0).",name:"minimumFontScale",required:!1,type:{name:"number"}},suppressHighlighting:{defaultValue:null,description:"When `true`, no visual change is made when text is pressed down. By\ndefault, a gray oval highlights the text on press down.",name:"suppressHighlighting",required:!1,type:{name:"boolean"}},selectable:{defaultValue:null,description:"Lets the user select text, to use the native copy and paste functionality.",name:"selectable",required:!1,type:{name:"boolean"}},selectionColor:{defaultValue:null,description:"The highlight color of the text.",name:"selectionColor",required:!1,type:{name:"string"}},textBreakStrategy:{defaultValue:null,description:"Set text break strategy on Android API Level 23+\ndefault is `highQuality`.",name:"textBreakStrategy",required:!1,type:{name:'"simple" | "highQuality" | "balanced"'}},accessible:{defaultValue:null,description:"When true, indicates that the view is an accessibility element.\nBy default, all the touchable elements are accessible.",name:"accessible",required:!1,type:{name:"boolean"}},accessibilityLabel:{defaultValue:null,description:"Overrides the text that's read by the screen reader when the user interacts with the element. By default, the\nlabel is constructed by traversing all the children and accumulating all the Text nodes separated by space.",name:"accessibilityLabel",required:!1,type:{name:"string"}},accessibilityRole:{defaultValue:null,description:"Accessibility Role tells a person using either VoiceOver on iOS or TalkBack on Android the type of element that is focused on.",name:"accessibilityRole",required:!1,type:{name:"AccessibilityRole"}},accessibilityStates:{defaultValue:null,description:"Accessibility State tells a person using either VoiceOver on iOS or TalkBack on Android the state of the element currently focused on.",name:"accessibilityStates",required:!1,type:{name:"AccessibilityState[]"}},accessibilityHint:{defaultValue:null,description:"An accessibility hint helps users understand what will happen when they perform an action on the accessibility element when that result is not obvious from the accessibility label.",name:"accessibilityHint",required:!1,type:{name:"string"}},accessibilityComponentType:{defaultValue:null,description:"In some cases, we also want to alert the end user of the type of selected component (i.e., that it is a \u201cbutton\u201d).\nIf we were using native buttons, this would work automatically. Since we are using javascript, we need to\nprovide a bit more context for TalkBack. To do so, you must specify the \u2018accessibilityComponentType\u2019 property\nfor any UI component. For instances, we support \u2018button\u2019, \u2018radiobutton_checked\u2019 and \u2018radiobutton_unchecked\u2019 and so on.\n@platform android",name:"accessibilityComponentType",required:!1,type:{name:'"none" | "button" | "radiobutton_checked" | "radiobutton_unchecked"'}},accessibilityLiveRegion:{defaultValue:null,description:"Indicates to accessibility services whether the user should be notified when this view changes.\nWorks for Android API >= 19 only.\nSee http://developer.android.com/reference/android/view/View.html#attr_android:accessibilityLiveRegion for references.\n@platform android",name:"accessibilityLiveRegion",required:!1,type:{name:'"none" | "polite" | "assertive"'}},importantForAccessibility:{defaultValue:null,description:"Controls how view is important for accessibility which is if it fires accessibility events\nand if it is reported to accessibility services that query the screen.\nWorks for Android only. See http://developer.android.com/reference/android/R.attr.html#importantForAccessibility for references.\n\nPossible values:\n      'auto' - The system determines whether the view is important for accessibility - default (recommended).\n      'yes' - The view is important for accessibility.\n      'no' - The view is not important for accessibility.\n      'no-hide-descendants' - The view is not important for accessibility, nor are any of its descendant views.",name:"importantForAccessibility",required:!1,type:{name:'"auto" | "yes" | "no" | "no-hide-descendants"'}},accessibilityElementsHidden:{defaultValue:null,description:"A Boolean value indicating whether the accessibility elements contained within this accessibility element\nare hidden to the screen reader.\n@platform ios",name:"accessibilityElementsHidden",required:!1,type:{name:"boolean"}},accessibilityTraits:{defaultValue:null,description:"Accessibility traits tell a person using VoiceOver what kind of element they have selected.\nIs this element a label? A button? A header? These questions are answered by accessibilityTraits.\n@platform ios",name:"accessibilityTraits",required:!1,type:{name:'"image" | "link" | "search" | "none" | "button" | "text" | "adjustable" | "header" | "summary" | "selected" | "disabled" | "plays" | "key" | "frequentUpdates" | "startsMedia" | "allowsDirectInteraction" | "pageTurn" | AccessibilityTrait[]'}},onAccessibilityTap:{defaultValue:null,description:"When `accessible` is true, the system will try to invoke this function when the user performs accessibility tap gesture.\n@platform ios",name:"onAccessibilityTap",required:!1,type:{name:"() => void"}},onMagicTap:{defaultValue:null,description:"When accessible is true, the system will invoke this function when the user performs the magic tap gesture.\n@platform ios",name:"onMagicTap",required:!1,type:{name:"() => void"}},accessibilityIgnoresInvertColors:{defaultValue:null,description:"https://facebook.github.io/react-native/docs/accessibility#accessibilityignoresinvertcolorsios\n@platform ios",name:"accessibilityIgnoresInvertColors",required:!1,type:{name:"boolean"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/icons/Icon.web.tsx#Iconweb"]={docgenInfo:Iconweb.__docgenInfo,name:"Iconweb",path:"src/icons/Icon.web.tsx#Iconweb"})}catch(l){}},"./src/icons/index.ts":function(e,t,n){var i=n("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Icon",{enumerable:!0,get:function(){return a.default}});var a=i(n("./src/icons/Icon.web.tsx"));try{icons.displayName="icons",icons.__docgenInfo={description:"",displayName:"icons",props:{color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:"string"}},name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"FeatherIcon"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"number"}},allowFontScaling:{defaultValue:null,description:"Specifies whether fonts should scale to respect Text Size accessibility settings.\nThe default is `true`.",name:"allowFontScaling",required:!1,type:{name:"boolean"}},ellipsizeMode:{defaultValue:null,description:'This can be one of the following values:\n\n- `head` - The line is displayed so that the end fits in the container and the missing text\nat the beginning of the line is indicated by an ellipsis glyph. e.g., "...wxyz"\n- `middle` - The line is displayed so that the beginning and end fit in the container and the\nmissing text in the middle is indicated by an ellipsis glyph. "ab...yz"\n- `tail` - The line is displayed so that the beginning fits in the container and the\nmissing text at the end of the line is indicated by an ellipsis glyph. e.g., "abcd..."\n- `clip` - Lines are not drawn past the edge of the text container.\n\nThe default is `tail`.\n\n`numberOfLines` must be set in conjunction with this prop.\n\n> `clip` is working only for iOS',name:"ellipsizeMode",required:!1,type:{name:'"head" | "middle" | "tail" | "clip"'}},lineBreakMode:{defaultValue:null,description:"Line Break mode. Works only with numberOfLines.\nclip is working only for iOS",name:"lineBreakMode",required:!1,type:{name:'"head" | "middle" | "tail" | "clip"'}},numberOfLines:{defaultValue:null,description:"Used to truncate the text with an ellipsis after computing the text\nlayout, including line wrapping, such that the total number of lines\ndoes not exceed this number.\n\nThis prop is commonly used with `ellipsizeMode`.",name:"numberOfLines",required:!1,type:{name:"number"}},onLayout:{defaultValue:null,description:"Invoked on mount and layout changes with\n\n{nativeEvent: { layout: {x, y, width, height}}}.",name:"onLayout",required:!1,type:{name:"(event: LayoutChangeEvent) => void"}},onPress:{defaultValue:null,description:"This function is called on press.\nText intrinsically supports press handling with a default highlight state (which can be disabled with suppressHighlighting).",name:"onPress",required:!1,type:{name:"(event: GestureResponderEvent) => void"}},onLongPress:{defaultValue:null,description:"This function is called on long press.\ne.g., `onLongPress={this.increaseSize}>``\n     *",name:"onLongPress",required:!1,type:{name:"(event: GestureResponderEvent) => void"}},style:{defaultValue:null,description:"@see https://facebook.github.io/react-native/docs/text.html#style",name:"style",required:!1,type:{name:"StyleProp<TextStyle>"}},testID:{defaultValue:null,description:"Used to locate this view in end-to-end tests.",name:"testID",required:!1,type:{name:"string"}},nativeID:{defaultValue:null,description:"Used to reference react managed views from native code.",name:"nativeID",required:!1,type:{name:"string"}},adjustsFontSizeToFit:{defaultValue:null,description:"Specifies whether font should be scaled down automatically to fit given style constraints.",name:"adjustsFontSizeToFit",required:!1,type:{name:"boolean"}},minimumFontScale:{defaultValue:null,description:"Specifies smallest possible scale a font can reach when adjustsFontSizeToFit is enabled. (values 0.01-1.0).",name:"minimumFontScale",required:!1,type:{name:"number"}},suppressHighlighting:{defaultValue:null,description:"When `true`, no visual change is made when text is pressed down. By\ndefault, a gray oval highlights the text on press down.",name:"suppressHighlighting",required:!1,type:{name:"boolean"}},selectable:{defaultValue:null,description:"Lets the user select text, to use the native copy and paste functionality.",name:"selectable",required:!1,type:{name:"boolean"}},selectionColor:{defaultValue:null,description:"The highlight color of the text.",name:"selectionColor",required:!1,type:{name:"string"}},textBreakStrategy:{defaultValue:null,description:"Set text break strategy on Android API Level 23+\ndefault is `highQuality`.",name:"textBreakStrategy",required:!1,type:{name:'"simple" | "highQuality" | "balanced"'}},accessible:{defaultValue:null,description:"When true, indicates that the view is an accessibility element.\nBy default, all the touchable elements are accessible.",name:"accessible",required:!1,type:{name:"boolean"}},accessibilityLabel:{defaultValue:null,description:"Overrides the text that's read by the screen reader when the user interacts with the element. By default, the\nlabel is constructed by traversing all the children and accumulating all the Text nodes separated by space.",name:"accessibilityLabel",required:!1,type:{name:"string"}},accessibilityRole:{defaultValue:null,description:"Accessibility Role tells a person using either VoiceOver on iOS or TalkBack on Android the type of element that is focused on.",name:"accessibilityRole",required:!1,type:{name:"AccessibilityRole"}},accessibilityStates:{defaultValue:null,description:"Accessibility State tells a person using either VoiceOver on iOS or TalkBack on Android the state of the element currently focused on.",name:"accessibilityStates",required:!1,type:{name:"AccessibilityState[]"}},accessibilityHint:{defaultValue:null,description:"An accessibility hint helps users understand what will happen when they perform an action on the accessibility element when that result is not obvious from the accessibility label.",name:"accessibilityHint",required:!1,type:{name:"string"}},accessibilityComponentType:{defaultValue:null,description:"In some cases, we also want to alert the end user of the type of selected component (i.e., that it is a \u201cbutton\u201d).\nIf we were using native buttons, this would work automatically. Since we are using javascript, we need to\nprovide a bit more context for TalkBack. To do so, you must specify the \u2018accessibilityComponentType\u2019 property\nfor any UI component. For instances, we support \u2018button\u2019, \u2018radiobutton_checked\u2019 and \u2018radiobutton_unchecked\u2019 and so on.\n@platform android",name:"accessibilityComponentType",required:!1,type:{name:'"none" | "button" | "radiobutton_checked" | "radiobutton_unchecked"'}},accessibilityLiveRegion:{defaultValue:null,description:"Indicates to accessibility services whether the user should be notified when this view changes.\nWorks for Android API >= 19 only.\nSee http://developer.android.com/reference/android/view/View.html#attr_android:accessibilityLiveRegion for references.\n@platform android",name:"accessibilityLiveRegion",required:!1,type:{name:'"none" | "polite" | "assertive"'}},importantForAccessibility:{defaultValue:null,description:"Controls how view is important for accessibility which is if it fires accessibility events\nand if it is reported to accessibility services that query the screen.\nWorks for Android only. See http://developer.android.com/reference/android/R.attr.html#importantForAccessibility for references.\n\nPossible values:\n      'auto' - The system determines whether the view is important for accessibility - default (recommended).\n      'yes' - The view is important for accessibility.\n      'no' - The view is not important for accessibility.\n      'no-hide-descendants' - The view is not important for accessibility, nor are any of its descendant views.",name:"importantForAccessibility",required:!1,type:{name:'"auto" | "yes" | "no" | "no-hide-descendants"'}},accessibilityElementsHidden:{defaultValue:null,description:"A Boolean value indicating whether the accessibility elements contained within this accessibility element\nare hidden to the screen reader.\n@platform ios",name:"accessibilityElementsHidden",required:!1,type:{name:"boolean"}},accessibilityTraits:{defaultValue:null,description:"Accessibility traits tell a person using VoiceOver what kind of element they have selected.\nIs this element a label? A button? A header? These questions are answered by accessibilityTraits.\n@platform ios",name:"accessibilityTraits",required:!1,type:{name:'"image" | "link" | "search" | "none" | "button" | "text" | "adjustable" | "header" | "summary" | "selected" | "disabled" | "plays" | "key" | "frequentUpdates" | "startsMedia" | "allowsDirectInteraction" | "pageTurn" | AccessibilityTrait[]'}},onAccessibilityTap:{defaultValue:null,description:"When `accessible` is true, the system will try to invoke this function when the user performs accessibility tap gesture.\n@platform ios",name:"onAccessibilityTap",required:!1,type:{name:"() => void"}},onMagicTap:{defaultValue:null,description:"When accessible is true, the system will invoke this function when the user performs the magic tap gesture.\n@platform ios",name:"onMagicTap",required:!1,type:{name:"() => void"}},accessibilityIgnoresInvertColors:{defaultValue:null,description:"https://facebook.github.io/react-native/docs/accessibility#accessibilityignoresinvertcolorsios\n@platform ios",name:"accessibilityIgnoresInvertColors",required:!1,type:{name:"boolean"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/icons/index.ts#icons"]={docgenInfo:icons.__docgenInfo,name:"icons",path:"src/icons/index.ts#icons"})}catch(s){}}}]);
//# sourceMappingURL=14.c53227a0609b39f66c03.js.map