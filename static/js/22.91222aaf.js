(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{"./src/components/Checkbox/Checkbox.mdx":function(e,t,i){var n=i("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(i("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js")),s=n(i("./node_modules/@babel/runtime/helpers/classCallCheck.js")),o=n(i("./node_modules/@babel/runtime/helpers/createClass.js")),l=n(i("./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js")),r=n(i("./node_modules/@babel/runtime/helpers/getPrototypeOf.js")),c=n(i("./node_modules/@babel/runtime/helpers/inherits.js")),d=n(i("./node_modules/react/index.js")),u=i("./node_modules/@mdx-js/tag/dist/index.js"),p=i("./node_modules/docz/dist/index.m.js"),h=n(i("./src/components/Checkbox/Checkbox.tsx")),m=n(i("./src/components/Checkbox/LabeledCheckbox.tsx")),b=function(e){function t(e){var i;return(0,s.default)(this,t),(i=(0,l.default)(this,(0,r.default)(t).call(this,e))).layout=null,i}return(0,c.default)(t,e),(0,o.default)(t,[{key:"render",value:function(){var e=this.props,t=e.components,i=(0,a.default)(e,["components"]);return d.default.createElement(u.MDXTag,{name:"wrapper",components:t},d.default.createElement(u.MDXTag,{name:"h2",components:t,props:{id:"usage"}},"Usage"),d.default.createElement(u.MDXTag,{name:"h3",components:t,props:{id:"checkboxes"}},"Checkboxes"),d.default.createElement(p.Playground,{__position:0,__code:"<Checkbox />\n<Checkbox isChecked />\n<Checkbox isDisabled />\n<Checkbox isChecked isDisabled />",__scope:{props:this?this.props:i,Checkbox:h.default,LabeledCheckbox:m.default}},d.default.createElement(h.default,null),d.default.createElement(h.default,{isChecked:!0}),d.default.createElement(h.default,{isDisabled:!0}),d.default.createElement(h.default,{isChecked:!0,isDisabled:!0})),d.default.createElement(u.MDXTag,{name:"h3",components:t,props:{id:"labeled-checkboxes"}},"Labeled Checkboxes"),d.default.createElement(p.Playground,{__position:1,__code:'<LabeledCheckbox label="Default" />\n<LabeledCheckbox label="Checked" isChecked />\n<LabeledCheckbox label="Disabled" isDisabled />\n<LabeledCheckbox label="Checked and disabled" isChecked isDisabled />',__scope:{props:this?this.props:i,Checkbox:h.default,LabeledCheckbox:m.default}},d.default.createElement(m.default,{label:"Default"}),d.default.createElement(m.default,{label:"Checked",isChecked:!0}),d.default.createElement(m.default,{label:"Disabled",isDisabled:!0}),d.default.createElement(m.default,{label:"Checked and disabled",isChecked:!0,isDisabled:!0})),d.default.createElement(u.MDXTag,{name:"h2",components:t,props:{id:"props"}},"Props"),d.default.createElement(u.MDXTag,{name:"p",components:t},"Extends ",d.default.createElement(u.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"TouchableHighlightProps"),". Read from ",d.default.createElement(u.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"activeOpacity")," and above for component specific props"),d.default.createElement(p.PropsTable,{of:h.default}))}}]),t}(d.default.Component);t.default=b},"./src/components/Checkbox/Checkbox.styles.ts":function(e,t,i){var n=i("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.getCheckboxStyles=t.getCheckboxVariables=void 0;var a=n(i("./node_modules/@babel/runtime/helpers/objectSpread.js")),s=function(e){return{base:{backgroundColor:e.colors.background.plain,borderColor:e.colors.border.default,borderWidth:1,height:32,width:32},checked:{backgroundColor:e.colors.background.primary.default,borderColor:"transparent"},checkedFocus:{backgroundColor:e.colors.background.primary.focus},disabled:{backgroundColor:e.colors.background.disabled,borderColor:e.colors.border.default},shape:{circle:{borderRadius:999},square:{borderRadius:e.controlBorderRadius.small}},uncheckedFocus:{backgroundColor:e.colors.background.tint1}}};t.getCheckboxVariables=s;t.getCheckboxStyles=function(e,t){var i=e.isChecked,n=e.isDisabled,o=e.shape,l=s(t);return{checkboxFocusBackgroundColor:i?l.checkedFocus.backgroundColor:l.uncheckedFocus.backgroundColor,checkboxStyle:(0,a.default)({},l.base,i?l.checked:{},n?l.disabled:{},l.shape[o])}};try{s.displayName="getCheckboxVariables",s.__docgenInfo={description:"",displayName:"getCheckboxVariables",props:{colors:{defaultValue:null,description:"",name:"colors",required:!0,type:{name:"Colors"}},fills:{defaultValue:null,description:"",name:"fills",required:!0,type:{name:"Fills"}},fontFamilies:{defaultValue:null,description:"",name:"fontFamilies",required:!0,type:{name:"FontFamilies"}},fontWeights:{defaultValue:null,description:"",name:"fontWeights",required:!0,type:{name:"FontWeights"}},headingSizes:{defaultValue:null,description:"",name:"headingSizes",required:!0,type:{name:"HeadingSizes"}},paragraphSizes:{defaultValue:null,description:"",name:"paragraphSizes",required:!0,type:{name:"ParagraphSizes"}},textSizes:{defaultValue:null,description:"",name:"textSizes",required:!0,type:{name:"TextSizes"}},elevations:{defaultValue:null,description:"",name:"elevations",required:!0,type:{name:"ViewStyle[]"}},controlPaddings:{defaultValue:null,description:"",name:"controlPaddings",required:!0,type:{name:"ControlSizes"}},controlHeights:{defaultValue:null,description:"",name:"controlHeights",required:!0,type:{name:"ControlSizes"}},controlBorderRadius:{defaultValue:null,description:"",name:"controlBorderRadius",required:!0,type:{name:"ControlSizes"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Checkbox/Checkbox.styles.ts#getCheckboxVariables"]={docgenInfo:s.__docgenInfo,name:"getCheckboxVariables",path:"src/components/Checkbox/Checkbox.styles.ts#getCheckboxVariables"})}catch(o){}},"./src/components/Checkbox/Checkbox.tsx":function(e,t,i){var n=i("./node_modules/@babel/runtime/helpers/interopRequireWildcard.js"),a=i("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.Checkbox=void 0;var s=a(i("./node_modules/@babel/runtime/helpers/extends.js")),o=a(i("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js")),l=n(i("./node_modules/react/index.js")),r=i("./node_modules/react-native-web/dist/index.js"),c=i("./src/icons/index.ts"),d=i("./src/theme/index.ts"),u=i("./src/utils/mergeStyles.ts"),p=i("./src/components/Checkbox/Checkbox.styles.ts"),h=(0,d.withTheme)(function(e){var t=e.isChecked,i=void 0!==t&&t,n=e.isDisabled,a=void 0!==n&&n,d=e.isInteractive,h=void 0===d||d,m=e.checkedIcon,b=e.onChange,y=void 0===b?function(){return null}:b,f=e.shape,k=void 0===f?"square":f,g=e.theme,v=e.getStyles,C=e.testID,w=(0,o.default)(e,["isChecked","isDisabled","isInteractive","checkedIcon","onChange","shape","theme","getStyles","testID"]),x=(0,u.mergeStyles)(p.getCheckboxStyles,v)({isChecked:i,isDisabled:a,shape:k},g),_=x.checkboxStyle,S=x.checkboxFocusBackgroundColor;return l.createElement(r.TouchableHighlight,(0,s.default)({accessible:!0,style:_,underlayColor:S},h?{disabled:a,onPress:y}:{disabled:!0},{testID:C},w),l.createElement(r.View,{style:{alignItems:"center",display:"flex",height:"100%",justifyContent:"center"}},i?m||l.createElement(c.Icon,{name:"check",size:20,color:g.colors.text.plain}):null))});t.Checkbox=h;var m=h;t.default=m;try{h.displayName="Checkbox",h.__docgenInfo={description:"",displayName:"Checkbox",props:{isChecked:{defaultValue:null,description:"",name:"isChecked",required:!1,type:{name:"boolean"}},isDisabled:{defaultValue:null,description:"",name:"isDisabled",required:!1,type:{name:"boolean"}},isInteractive:{defaultValue:null,description:"Sometimes we just want the display of the checkbox",name:"isInteractive",required:!1,type:{name:"boolean"}},checkedIcon:{defaultValue:null,description:"",name:"checkedIcon",required:!1,type:{name:"ReactNode"}},shape:{defaultValue:null,description:"",name:"shape",required:!1,type:{name:"CheckboxShape"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"(e: GestureResponderEvent) => void"}},getStyles:{defaultValue:null,description:"",name:"getStyles",required:!1,type:{name:"ReplaceReturnType<GetCheckboxStyles, DeepPartial<CheckboxStyles>>"}},testID:{defaultValue:null,description:"",name:"testID",required:!1,type:{name:"string"}},accessible:{defaultValue:null,description:"When true, indicates that the view is an accessibility element.\nBy default, all the touchable elements are accessible.",name:"accessible",required:!1,type:{name:"boolean"}},accessibilityLabel:{defaultValue:null,description:"Overrides the text that's read by the screen reader when the user interacts with the element. By default, the\nlabel is constructed by traversing all the children and accumulating all the Text nodes separated by space.",name:"accessibilityLabel",required:!1,type:{name:"string"}},accessibilityRole:{defaultValue:null,description:"Accessibility Role tells a person using either VoiceOver on iOS or TalkBack on Android the type of element that is focused on.",name:"accessibilityRole",required:!1,type:{name:"AccessibilityRole"}},accessibilityStates:{defaultValue:null,description:"Accessibility State tells a person using either VoiceOver on iOS or TalkBack on Android the state of the element currently focused on.",name:"accessibilityStates",required:!1,type:{name:"AccessibilityState[]"}},accessibilityHint:{defaultValue:null,description:"An accessibility hint helps users understand what will happen when they perform an action on the accessibility element when that result is not obvious from the accessibility label.",name:"accessibilityHint",required:!1,type:{name:"string"}},accessibilityComponentType:{defaultValue:null,description:"In some cases, we also want to alert the end user of the type of selected component (i.e., that it is a \u201cbutton\u201d).\nIf we were using native buttons, this would work automatically. Since we are using javascript, we need to\nprovide a bit more context for TalkBack. To do so, you must specify the \u2018accessibilityComponentType\u2019 property\nfor any UI component. For instances, we support \u2018button\u2019, \u2018radiobutton_checked\u2019 and \u2018radiobutton_unchecked\u2019 and so on.\n@platform android",name:"accessibilityComponentType",required:!1,type:{name:'"none" | "button" | "radiobutton_checked" | "radiobutton_unchecked"'}},accessibilityLiveRegion:{defaultValue:null,description:"Indicates to accessibility services whether the user should be notified when this view changes.\nWorks for Android API >= 19 only.\nSee http://developer.android.com/reference/android/view/View.html#attr_android:accessibilityLiveRegion for references.\n@platform android",name:"accessibilityLiveRegion",required:!1,type:{name:'"none" | "polite" | "assertive"'}},importantForAccessibility:{defaultValue:null,description:"Controls how view is important for accessibility which is if it fires accessibility events\nand if it is reported to accessibility services that query the screen.\nWorks for Android only. See http://developer.android.com/reference/android/R.attr.html#importantForAccessibility for references.\n\nPossible values:\n      'auto' - The system determines whether the view is important for accessibility - default (recommended).\n      'yes' - The view is important for accessibility.\n      'no' - The view is not important for accessibility.\n      'no-hide-descendants' - The view is not important for accessibility, nor are any of its descendant views.",name:"importantForAccessibility",required:!1,type:{name:'"auto" | "yes" | "no" | "no-hide-descendants"'}},accessibilityElementsHidden:{defaultValue:null,description:"A Boolean value indicating whether the accessibility elements contained within this accessibility element\nare hidden to the screen reader.\n@platform ios",name:"accessibilityElementsHidden",required:!1,type:{name:"boolean"}},accessibilityTraits:{defaultValue:null,description:"Accessibility traits tell a person using VoiceOver what kind of element they have selected.\nIs this element a label? A button? A header? These questions are answered by accessibilityTraits.\n@platform ios",name:"accessibilityTraits",required:!1,type:{name:'"none" | "button" | "link" | "search" | "image" | "text" | "adjustable" | "header" | "summary" | "selected" | "disabled" | "plays" | "key" | "frequentUpdates" | "startsMedia" | "allowsDirectInteraction" | "pageTurn" | AccessibilityTrait[]'}},onAccessibilityTap:{defaultValue:null,description:"When `accessible` is true, the system will try to invoke this function when the user performs accessibility tap gesture.\n@platform ios",name:"onAccessibilityTap",required:!1,type:{name:"() => void"}},onMagicTap:{defaultValue:null,description:"When accessible is true, the system will invoke this function when the user performs the magic tap gesture.\n@platform ios",name:"onMagicTap",required:!1,type:{name:"() => void"}},accessibilityIgnoresInvertColors:{defaultValue:null,description:"https://facebook.github.io/react-native/docs/accessibility#accessibilityignoresinvertcolorsios\n@platform ios",name:"accessibilityIgnoresInvertColors",required:!1,type:{name:"boolean"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Checkbox/Checkbox.tsx#Checkbox"]={docgenInfo:h.__docgenInfo,name:"Checkbox",path:"src/components/Checkbox/Checkbox.tsx#Checkbox"})}catch(b){}try{__class.displayName="__class",__class.__docgenInfo={description:"",displayName:"__class",props:{isChecked:{defaultValue:null,description:"",name:"isChecked",required:!1,type:{name:"boolean"}},isDisabled:{defaultValue:null,description:"",name:"isDisabled",required:!1,type:{name:"boolean"}},isInteractive:{defaultValue:null,description:"Sometimes we just want the display of the checkbox",name:"isInteractive",required:!1,type:{name:"boolean"}},checkedIcon:{defaultValue:null,description:"",name:"checkedIcon",required:!1,type:{name:"ReactNode"}},shape:{defaultValue:null,description:"",name:"shape",required:!1,type:{name:"CheckboxShape"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"(e: GestureResponderEvent) => void"}},getStyles:{defaultValue:null,description:"",name:"getStyles",required:!1,type:{name:"ReplaceReturnType<GetCheckboxStyles, DeepPartial<CheckboxStyles>>"}},testID:{defaultValue:null,description:"",name:"testID",required:!1,type:{name:"string"}},accessible:{defaultValue:null,description:"When true, indicates that the view is an accessibility element.\nBy default, all the touchable elements are accessible.",name:"accessible",required:!1,type:{name:"boolean"}},accessibilityLabel:{defaultValue:null,description:"Overrides the text that's read by the screen reader when the user interacts with the element. By default, the\nlabel is constructed by traversing all the children and accumulating all the Text nodes separated by space.",name:"accessibilityLabel",required:!1,type:{name:"string"}},accessibilityRole:{defaultValue:null,description:"Accessibility Role tells a person using either VoiceOver on iOS or TalkBack on Android the type of element that is focused on.",name:"accessibilityRole",required:!1,type:{name:"AccessibilityRole"}},accessibilityStates:{defaultValue:null,description:"Accessibility State tells a person using either VoiceOver on iOS or TalkBack on Android the state of the element currently focused on.",name:"accessibilityStates",required:!1,type:{name:"AccessibilityState[]"}},accessibilityHint:{defaultValue:null,description:"An accessibility hint helps users understand what will happen when they perform an action on the accessibility element when that result is not obvious from the accessibility label.",name:"accessibilityHint",required:!1,type:{name:"string"}},accessibilityComponentType:{defaultValue:null,description:"In some cases, we also want to alert the end user of the type of selected component (i.e., that it is a \u201cbutton\u201d).\nIf we were using native buttons, this would work automatically. Since we are using javascript, we need to\nprovide a bit more context for TalkBack. To do so, you must specify the \u2018accessibilityComponentType\u2019 property\nfor any UI component. For instances, we support \u2018button\u2019, \u2018radiobutton_checked\u2019 and \u2018radiobutton_unchecked\u2019 and so on.\n@platform android",name:"accessibilityComponentType",required:!1,type:{name:'"none" | "button" | "radiobutton_checked" | "radiobutton_unchecked"'}},accessibilityLiveRegion:{defaultValue:null,description:"Indicates to accessibility services whether the user should be notified when this view changes.\nWorks for Android API >= 19 only.\nSee http://developer.android.com/reference/android/view/View.html#attr_android:accessibilityLiveRegion for references.\n@platform android",name:"accessibilityLiveRegion",required:!1,type:{name:'"none" | "polite" | "assertive"'}},importantForAccessibility:{defaultValue:null,description:"Controls how view is important for accessibility which is if it fires accessibility events\nand if it is reported to accessibility services that query the screen.\nWorks for Android only. See http://developer.android.com/reference/android/R.attr.html#importantForAccessibility for references.\n\nPossible values:\n      'auto' - The system determines whether the view is important for accessibility - default (recommended).\n      'yes' - The view is important for accessibility.\n      'no' - The view is not important for accessibility.\n      'no-hide-descendants' - The view is not important for accessibility, nor are any of its descendant views.",name:"importantForAccessibility",required:!1,type:{name:'"auto" | "yes" | "no" | "no-hide-descendants"'}},accessibilityElementsHidden:{defaultValue:null,description:"A Boolean value indicating whether the accessibility elements contained within this accessibility element\nare hidden to the screen reader.\n@platform ios",name:"accessibilityElementsHidden",required:!1,type:{name:"boolean"}},accessibilityTraits:{defaultValue:null,description:"Accessibility traits tell a person using VoiceOver what kind of element they have selected.\nIs this element a label? A button? A header? These questions are answered by accessibilityTraits.\n@platform ios",name:"accessibilityTraits",required:!1,type:{name:'"none" | "button" | "link" | "search" | "image" | "text" | "adjustable" | "header" | "summary" | "selected" | "disabled" | "plays" | "key" | "frequentUpdates" | "startsMedia" | "allowsDirectInteraction" | "pageTurn" | AccessibilityTrait[]'}},onAccessibilityTap:{defaultValue:null,description:"When `accessible` is true, the system will try to invoke this function when the user performs accessibility tap gesture.\n@platform ios",name:"onAccessibilityTap",required:!1,type:{name:"() => void"}},onMagicTap:{defaultValue:null,description:"When accessible is true, the system will invoke this function when the user performs the magic tap gesture.\n@platform ios",name:"onMagicTap",required:!1,type:{name:"() => void"}},accessibilityIgnoresInvertColors:{defaultValue:null,description:"https://facebook.github.io/react-native/docs/accessibility#accessibilityignoresinvertcolorsios\n@platform ios",name:"accessibilityIgnoresInvertColors",required:!1,type:{name:"boolean"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Checkbox/Checkbox.tsx#__class"]={docgenInfo:__class.__docgenInfo,name:"__class",path:"src/components/Checkbox/Checkbox.tsx#__class"})}catch(b){}},"./src/components/Checkbox/LabeledCheckbox.tsx":function(e,t,i){var n=i("./node_modules/@babel/runtime/helpers/interopRequireWildcard.js"),a=i("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.LabeledCheckbox=void 0;var s=a(i("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js")),o=n(i("./node_modules/react/index.js")),l=i("./src/theme/index.ts"),r=a(i("./src/components/Checkbox/Checkbox.tsx")),c=i("./src/components/Layout/index.ts"),d=i("./src/components/Typography/index.ts"),u=(0,l.withTheme)(function(e){var t=e.label,i=e.position,n=void 0===i?"right":i,a=e.color,l=e.size,u=(0,s.default)(e,["label","position","color","size"]);return t?o.createElement(c.Box,{flexDirection:"row",alignItems:"center"},"left"===n&&o.createElement(d.Text,{size:l,color:a},t),o.createElement(c.Spacing,{paddingHorizontal:1},o.createElement(r.default,u)),"right"===n&&o.createElement(d.Text,{size:l,color:a},t)):o.createElement(r.default,u)});t.LabeledCheckbox=u;var p=u;t.default=p;try{u.displayName="LabeledCheckbox",u.__docgenInfo={description:"",displayName:"LabeledCheckbox",props:{label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},position:{defaultValue:null,description:"",name:"position",required:!1,type:{name:'"left" | "right"'}},color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:'"dark" | "default" | "muted" | "plain" | "selected" | "primary" | "secondary" | "danger" | "info" | "success" | "warning"'}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:'"small" | "medium" | "large"'}},isChecked:{defaultValue:null,description:"",name:"isChecked",required:!1,type:{name:"boolean"}},isDisabled:{defaultValue:null,description:"",name:"isDisabled",required:!1,type:{name:"boolean"}},isInteractive:{defaultValue:null,description:"Sometimes we just want the display of the checkbox",name:"isInteractive",required:!1,type:{name:"boolean"}},checkedIcon:{defaultValue:null,description:"",name:"checkedIcon",required:!1,type:{name:"ReactNode"}},shape:{defaultValue:null,description:"",name:"shape",required:!1,type:{name:"CheckboxShape"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"(e: GestureResponderEvent) => void"}},getStyles:{defaultValue:null,description:"",name:"getStyles",required:!1,type:{name:"ReplaceReturnType<GetCheckboxStyles, DeepPartial<CheckboxStyles>>"}},testID:{defaultValue:null,description:"",name:"testID",required:!1,type:{name:"string"}},accessible:{defaultValue:null,description:"When true, indicates that the view is an accessibility element.\nBy default, all the touchable elements are accessible.",name:"accessible",required:!1,type:{name:"boolean"}},accessibilityLabel:{defaultValue:null,description:"Overrides the text that's read by the screen reader when the user interacts with the element. By default, the\nlabel is constructed by traversing all the children and accumulating all the Text nodes separated by space.",name:"accessibilityLabel",required:!1,type:{name:"string"}},accessibilityRole:{defaultValue:null,description:"Accessibility Role tells a person using either VoiceOver on iOS or TalkBack on Android the type of element that is focused on.",name:"accessibilityRole",required:!1,type:{name:"AccessibilityRole"}},accessibilityStates:{defaultValue:null,description:"Accessibility State tells a person using either VoiceOver on iOS or TalkBack on Android the state of the element currently focused on.",name:"accessibilityStates",required:!1,type:{name:"AccessibilityState[]"}},accessibilityHint:{defaultValue:null,description:"An accessibility hint helps users understand what will happen when they perform an action on the accessibility element when that result is not obvious from the accessibility label.",name:"accessibilityHint",required:!1,type:{name:"string"}},accessibilityComponentType:{defaultValue:null,description:"In some cases, we also want to alert the end user of the type of selected component (i.e., that it is a \u201cbutton\u201d).\nIf we were using native buttons, this would work automatically. Since we are using javascript, we need to\nprovide a bit more context for TalkBack. To do so, you must specify the \u2018accessibilityComponentType\u2019 property\nfor any UI component. For instances, we support \u2018button\u2019, \u2018radiobutton_checked\u2019 and \u2018radiobutton_unchecked\u2019 and so on.\n@platform android",name:"accessibilityComponentType",required:!1,type:{name:'"none" | "button" | "radiobutton_checked" | "radiobutton_unchecked"'}},accessibilityLiveRegion:{defaultValue:null,description:"Indicates to accessibility services whether the user should be notified when this view changes.\nWorks for Android API >= 19 only.\nSee http://developer.android.com/reference/android/view/View.html#attr_android:accessibilityLiveRegion for references.\n@platform android",name:"accessibilityLiveRegion",required:!1,type:{name:'"none" | "polite" | "assertive"'}},importantForAccessibility:{defaultValue:null,description:"Controls how view is important for accessibility which is if it fires accessibility events\nand if it is reported to accessibility services that query the screen.\nWorks for Android only. See http://developer.android.com/reference/android/R.attr.html#importantForAccessibility for references.\n\nPossible values:\n      'auto' - The system determines whether the view is important for accessibility - default (recommended).\n      'yes' - The view is important for accessibility.\n      'no' - The view is not important for accessibility.\n      'no-hide-descendants' - The view is not important for accessibility, nor are any of its descendant views.",name:"importantForAccessibility",required:!1,type:{name:'"auto" | "yes" | "no" | "no-hide-descendants"'}},accessibilityElementsHidden:{defaultValue:null,description:"A Boolean value indicating whether the accessibility elements contained within this accessibility element\nare hidden to the screen reader.\n@platform ios",name:"accessibilityElementsHidden",required:!1,type:{name:"boolean"}},accessibilityTraits:{defaultValue:null,description:"Accessibility traits tell a person using VoiceOver what kind of element they have selected.\nIs this element a label? A button? A header? These questions are answered by accessibilityTraits.\n@platform ios",name:"accessibilityTraits",required:!1,type:{name:'"selected" | "none" | "button" | "link" | "search" | "image" | "text" | "adjustable" | "header" | "summary" | "disabled" | "plays" | "key" | "frequentUpdates" | "startsMedia" | "allowsDirectInteraction" | "pageTurn" | AccessibilityTrait[]'}},onAccessibilityTap:{defaultValue:null,description:"When `accessible` is true, the system will try to invoke this function when the user performs accessibility tap gesture.\n@platform ios",name:"onAccessibilityTap",required:!1,type:{name:"() => void"}},onMagicTap:{defaultValue:null,description:"When accessible is true, the system will invoke this function when the user performs the magic tap gesture.\n@platform ios",name:"onMagicTap",required:!1,type:{name:"() => void"}},accessibilityIgnoresInvertColors:{defaultValue:null,description:"https://facebook.github.io/react-native/docs/accessibility#accessibilityignoresinvertcolorsios\n@platform ios",name:"accessibilityIgnoresInvertColors",required:!1,type:{name:"boolean"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Checkbox/LabeledCheckbox.tsx#LabeledCheckbox"]={docgenInfo:u.__docgenInfo,name:"LabeledCheckbox",path:"src/components/Checkbox/LabeledCheckbox.tsx#LabeledCheckbox"})}catch(h){}try{__class.displayName="__class",__class.__docgenInfo={description:"",displayName:"__class",props:{label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},position:{defaultValue:null,description:"",name:"position",required:!1,type:{name:'"left" | "right"'}},color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:'"dark" | "default" | "muted" | "plain" | "selected" | "primary" | "secondary" | "danger" | "info" | "success" | "warning"'}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:'"small" | "medium" | "large"'}},isChecked:{defaultValue:null,description:"",name:"isChecked",required:!1,type:{name:"boolean"}},isDisabled:{defaultValue:null,description:"",name:"isDisabled",required:!1,type:{name:"boolean"}},isInteractive:{defaultValue:null,description:"Sometimes we just want the display of the checkbox",name:"isInteractive",required:!1,type:{name:"boolean"}},checkedIcon:{defaultValue:null,description:"",name:"checkedIcon",required:!1,type:{name:"ReactNode"}},shape:{defaultValue:null,description:"",name:"shape",required:!1,type:{name:"CheckboxShape"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"(e: GestureResponderEvent) => void"}},getStyles:{defaultValue:null,description:"",name:"getStyles",required:!1,type:{name:"ReplaceReturnType<GetCheckboxStyles, DeepPartial<CheckboxStyles>>"}},testID:{defaultValue:null,description:"",name:"testID",required:!1,type:{name:"string"}},accessible:{defaultValue:null,description:"When true, indicates that the view is an accessibility element.\nBy default, all the touchable elements are accessible.",name:"accessible",required:!1,type:{name:"boolean"}},accessibilityLabel:{defaultValue:null,description:"Overrides the text that's read by the screen reader when the user interacts with the element. By default, the\nlabel is constructed by traversing all the children and accumulating all the Text nodes separated by space.",name:"accessibilityLabel",required:!1,type:{name:"string"}},accessibilityRole:{defaultValue:null,description:"Accessibility Role tells a person using either VoiceOver on iOS or TalkBack on Android the type of element that is focused on.",name:"accessibilityRole",required:!1,type:{name:"AccessibilityRole"}},accessibilityStates:{defaultValue:null,description:"Accessibility State tells a person using either VoiceOver on iOS or TalkBack on Android the state of the element currently focused on.",name:"accessibilityStates",required:!1,type:{name:"AccessibilityState[]"}},accessibilityHint:{defaultValue:null,description:"An accessibility hint helps users understand what will happen when they perform an action on the accessibility element when that result is not obvious from the accessibility label.",name:"accessibilityHint",required:!1,type:{name:"string"}},accessibilityComponentType:{defaultValue:null,description:"In some cases, we also want to alert the end user of the type of selected component (i.e., that it is a \u201cbutton\u201d).\nIf we were using native buttons, this would work automatically. Since we are using javascript, we need to\nprovide a bit more context for TalkBack. To do so, you must specify the \u2018accessibilityComponentType\u2019 property\nfor any UI component. For instances, we support \u2018button\u2019, \u2018radiobutton_checked\u2019 and \u2018radiobutton_unchecked\u2019 and so on.\n@platform android",name:"accessibilityComponentType",required:!1,type:{name:'"none" | "button" | "radiobutton_checked" | "radiobutton_unchecked"'}},accessibilityLiveRegion:{defaultValue:null,description:"Indicates to accessibility services whether the user should be notified when this view changes.\nWorks for Android API >= 19 only.\nSee http://developer.android.com/reference/android/view/View.html#attr_android:accessibilityLiveRegion for references.\n@platform android",name:"accessibilityLiveRegion",required:!1,type:{name:'"none" | "polite" | "assertive"'}},importantForAccessibility:{defaultValue:null,description:"Controls how view is important for accessibility which is if it fires accessibility events\nand if it is reported to accessibility services that query the screen.\nWorks for Android only. See http://developer.android.com/reference/android/R.attr.html#importantForAccessibility for references.\n\nPossible values:\n      'auto' - The system determines whether the view is important for accessibility - default (recommended).\n      'yes' - The view is important for accessibility.\n      'no' - The view is not important for accessibility.\n      'no-hide-descendants' - The view is not important for accessibility, nor are any of its descendant views.",name:"importantForAccessibility",required:!1,type:{name:'"auto" | "yes" | "no" | "no-hide-descendants"'}},accessibilityElementsHidden:{defaultValue:null,description:"A Boolean value indicating whether the accessibility elements contained within this accessibility element\nare hidden to the screen reader.\n@platform ios",name:"accessibilityElementsHidden",required:!1,type:{name:"boolean"}},accessibilityTraits:{defaultValue:null,description:"Accessibility traits tell a person using VoiceOver what kind of element they have selected.\nIs this element a label? A button? A header? These questions are answered by accessibilityTraits.\n@platform ios",name:"accessibilityTraits",required:!1,type:{name:'"selected" | "none" | "button" | "link" | "search" | "image" | "text" | "adjustable" | "header" | "summary" | "disabled" | "plays" | "key" | "frequentUpdates" | "startsMedia" | "allowsDirectInteraction" | "pageTurn" | AccessibilityTrait[]'}},onAccessibilityTap:{defaultValue:null,description:"When `accessible` is true, the system will try to invoke this function when the user performs accessibility tap gesture.\n@platform ios",name:"onAccessibilityTap",required:!1,type:{name:"() => void"}},onMagicTap:{defaultValue:null,description:"When accessible is true, the system will invoke this function when the user performs the magic tap gesture.\n@platform ios",name:"onMagicTap",required:!1,type:{name:"() => void"}},accessibilityIgnoresInvertColors:{defaultValue:null,description:"https://facebook.github.io/react-native/docs/accessibility#accessibilityignoresinvertcolorsios\n@platform ios",name:"accessibilityIgnoresInvertColors",required:!1,type:{name:"boolean"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Checkbox/LabeledCheckbox.tsx#__class"]={docgenInfo:__class.__docgenInfo,name:"__class",path:"src/components/Checkbox/LabeledCheckbox.tsx#__class"})}catch(h){}},"./src/icons/Icon.web.tsx":function(e,t,i){var n=i("./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(i("./node_modules/react/index.js")),s=n(i("./node_modules/react-icons/fi/index.js"));t.default=function(e){var t=e.name,i=e.color,n=e.size,o=s["Fi".concat(function(e){var t=e.replace(/(\-\w)/g,function(e){return e[1].toUpperCase()});return t.charAt(0).toUpperCase()+t.slice(1)}(t))];return a.createElement(o,{color:i,size:n})};try{Iconweb.displayName="Iconweb",Iconweb.__docgenInfo={description:"",displayName:"Iconweb",props:{color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:"string"}},name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"FeatherIconName"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"number"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/icons/Icon.web.tsx#Iconweb"]={docgenInfo:Iconweb.__docgenInfo,name:"Iconweb",path:"src/icons/Icon.web.tsx#Iconweb"})}catch(o){}},"./src/icons/index.ts":function(e,t,i){var n=i("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Icon",{enumerable:!0,get:function(){return a.default}});var a=n(i("./src/icons/Icon.web.tsx"));try{icons.displayName="icons",icons.__docgenInfo={description:"",displayName:"icons",props:{color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:"string"}},name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"FeatherIconName"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"number"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/icons/index.ts#icons"]={docgenInfo:icons.__docgenInfo,name:"icons",path:"src/icons/index.ts#icons"})}catch(s){}}}]);
//# sourceMappingURL=22.a3ab31657a489b395824.js.map