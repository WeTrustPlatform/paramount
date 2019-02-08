(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"./src/components/Button/Button.styles.ts":function(e,t,n){var i=n("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.getButtonStyles=t.getButtonVariables=void 0;var o=i(n("./node_modules/@babel/runtime/helpers/objectSpread.js")),a=i(n("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js")),s=function(e){return{appearances:{minimal:{default:{backgroundColor:e.colors.background.plain,color:e.colors.text.default,focusColor:e.colors.background.tint2},danger:{backgroundColor:e.colors.background.plain,color:e.colors.text.danger,focusColor:e.colors.background.tint2},primary:{backgroundColor:e.colors.background.plain,color:e.colors.text.primary,focusColor:e.colors.background.tint2},secondary:{backgroundColor:e.colors.background.plain,color:e.colors.text.secondary?e.colors.text.secondary:e.colors.text.default,focusColor:e.colors.background.tint2}},primary:{default:{backgroundColor:e.colors.background.tint1,borderColor:e.colors.border.default,color:e.colors.text.default,focusColor:e.colors.background.tint2,loadingBackgroundColor:e.colors.background.overlay},danger:{backgroundColor:e.colors.background.danger.default,borderColor:e.colors.border.danger,color:"white",focusColor:e.colors.background.danger.focus,loadingBackgroundColor:e.colors.background.danger.focusLight},primary:{backgroundColor:e.colors.background.primary.default,borderColor:e.colors.border.primary,color:"white",focusColor:e.colors.background.primary.focus,loadingBackgroundColor:e.colors.background.primary.focusLight},secondary:{backgroundColor:e.colors.background.secondary.default,borderColor:e.colors.border.secondary,color:"white",focusColor:e.colors.background.secondary.focus,loadingBackgroundColor:e.colors.background.secondary.focusLight}},outline:{default:{backgroundColor:e.colors.background.plain,borderColor:e.colors.text.default,borderWidth:3,color:e.colors.text.default,focusColor:e.colors.background.tint2},danger:{backgroundColor:e.colors.background.plain,borderColor:e.colors.border.danger,borderWidth:3,color:e.colors.text.danger,focusColor:e.colors.background.danger.focusLight},primary:{backgroundColor:e.colors.background.plain,borderColor:e.colors.border.primary,borderWidth:3,color:e.colors.text.primary,focusColor:e.colors.background.primary.focusLight},secondary:{backgroundColor:e.colors.background.plain,borderColor:e.colors.border.secondary,borderWidth:3,color:e.colors.text.secondary,focusColor:e.colors.background.secondary.focusLight}}},disabled:{backgroundColor:e.colors.background.disabled,color:e.colors.text.muted},sizes:{small:{borderRadius:e.controlBorderRadius.small,fontSize:e.textSizes.small,height:e.controlHeights.small,paddingLeft:e.controlPaddings.small,paddingRight:e.controlPaddings.small},medium:{borderRadius:e.controlBorderRadius.medium,fontSize:e.textSizes.medium,height:e.controlHeights.medium,paddingLeft:e.controlPaddings.medium,paddingRight:e.controlPaddings.medium},large:{borderRadius:e.controlBorderRadius.large,fontSize:e.textSizes.large,height:e.controlHeights.large,paddingLeft:e.controlPaddings.large,paddingRight:e.controlPaddings.large}}}};t.getButtonVariables=s;t.getButtonStyles=function(e,t){var n=e.appearance,i=e.color,r=e.size,l=e.isDisabled,d=e.isLoading,u=e.isInline,c=s(t),p=c.appearances,m=c.sizes,y=c.disabled,h=(0,a.default)(c,["appearances","sizes","disabled"]),f=p[n][i],b=f.color,g=f.focusColor,v=f.loadingBackgroundColor,w=(0,a.default)(f,["color","focusColor","loadingBackgroundColor"]),S=m[r],V=S.fontSize,q=(0,a.default)(S,["fontSize"]),k=y.color,C=(0,a.default)(y,["color"]);return{buttonStyle:(0,o.default)({},l?(0,o.default)({},C,q):(0,o.default)({},q,h,w,d?{backgroundColor:v}:{}),u?{alignSelf:"flex-start",flexDirection:"row",flexWrap:"wrap"}:{}),focusColor:g,textStyle:{alignItems:"center",color:l?k:b,display:"flex",fontSize:V,fontWeight:"600",justifyContent:"center",textAlign:"center"}}};try{s.displayName="getButtonVariables",s.__docgenInfo={description:"",displayName:"getButtonVariables",props:{colors:{defaultValue:null,description:"",name:"colors",required:!0,type:{name:"Colors"}},fills:{defaultValue:null,description:"",name:"fills",required:!0,type:{name:"Fills"}},fontFamilies:{defaultValue:null,description:"",name:"fontFamilies",required:!0,type:{name:"FontFamilies"}},fontWeights:{defaultValue:null,description:"",name:"fontWeights",required:!0,type:{name:"FontWeights"}},headingSizes:{defaultValue:null,description:"",name:"headingSizes",required:!0,type:{name:"HeadingSizes"}},paragraphSizes:{defaultValue:null,description:"",name:"paragraphSizes",required:!0,type:{name:"ParagraphSizes"}},textSizes:{defaultValue:null,description:"",name:"textSizes",required:!0,type:{name:"TextSizes"}},elevations:{defaultValue:null,description:"",name:"elevations",required:!0,type:{name:"ViewStyle[]"}},controlPaddings:{defaultValue:null,description:"",name:"controlPaddings",required:!0,type:{name:"ControlSizes"}},controlHeights:{defaultValue:null,description:"",name:"controlHeights",required:!0,type:{name:"ControlSizes"}},controlBorderRadius:{defaultValue:null,description:"",name:"controlBorderRadius",required:!0,type:{name:"ControlSizes"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Button/Button.styles.ts#getButtonVariables"]={docgenInfo:s.__docgenInfo,name:"getButtonVariables",path:"src/components/Button/Button.styles.ts#getButtonVariables"})}catch(r){}},"./src/components/Button/Button.tsx":function(e,t,n){var i=n("./node_modules/@babel/runtime/helpers/interopRequireWildcard.js"),o=n("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.Button=void 0;var a=o(n("./node_modules/@babel/runtime/helpers/extends.js")),s=o(n("./node_modules/@babel/runtime/helpers/objectSpread.js")),r=o(n("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js")),l=i(n("./node_modules/react/index.js")),d=n("./node_modules/react-native-web/dist/index.js"),u=n("./src/theme/index.ts"),c=n("./src/utils/mergeStyles.ts"),p=n("./src/components/Layout/index.ts"),m=n("./src/components/Loading/index.ts"),y=n("./src/components/Typography/index.ts"),h=n("./src/components/Typography/Text.styles.ts"),f=n("./src/components/Button/Button.styles.ts"),b=(0,u.withTheme)(function(e){var t=e.appearance,n=void 0===t?"primary":t,i=e.title,o=e.color,u=void 0===o?"default":o,b=e.getStyles,g=e.iconAfter,v=e.iconBefore,w=e.iconLoading,S=(e.isActive,e.isDisabled),V=void 0!==S&&S,q=e.isInline,k=void 0!==q&&q,C=e.isLoading,_=void 0!==C&&C,O=e.onPress,T=void 0===O?function(){}:O,L=e.size,B=void 0===L?"medium":L,R=e.theme,A=(0,r.default)(e,["appearance","title","color","getStyles","iconAfter","iconBefore","iconLoading","isActive","isDisabled","isInline","isLoading","onPress","size","theme"]),I=(0,c.mergeStyles)(f.getButtonStyles,b)({appearance:n,color:u,isDisabled:V,isInline:k,isLoading:_,size:B},R),x=I.buttonStyle,P=I.textStyle,D=I.focusColor;return l.createElement(d.TouchableHighlight,(0,a.default)({accessible:!0,accessibilityRole:"button",underlayColor:D,disabled:!(!V&&!_),onPress:T,style:x},A),l.createElement(d.View,{style:{alignItems:"center",flexDirection:"row",height:"100%",justifyContent:"center"}},v,l.createElement(p.Spacing,{paddingLeft:v?1:0,paddingRight:g?1:0},_?w||l.createElement(m.LoadingDots,{color:P.color}):i?l.createElement(y.Text,{getStyles:function(){var e=h.getTextStyles.apply(void 0,arguments).textStyle;return{textStyle:(0,s.default)({},e,P)}}},i):null),g))});t.Button=b;var g=b;t.default=g;try{b.displayName="Button",b.__docgenInfo={description:"",displayName:"Button",props:{title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},color:{defaultValue:{value:'"default"'},description:"The intent of the button.",name:"color",required:!1,type:{name:'"default" | "danger" | "primary" | "secondary"'}},appearance:{defaultValue:{value:'"primary"'},description:"The appearance of the button.",name:"appearance",required:!1,type:{name:'"primary" | "minimal" | "outline"'}},size:{defaultValue:{value:'"medium"'},description:"The size of the button.",name:"size",required:!1,type:{name:'"small" | "medium" | "large"'}},isLoading:{defaultValue:{value:"false"},description:"When true, show a loading spinner before the title. This also disables the button.",name:"isLoading",required:!1,type:{name:"boolean"}},isActive:{defaultValue:{value:"false"},description:"Forcefully set the active state of a button.",name:"isActive",required:!1,type:{name:"boolean"}},isDisabled:{defaultValue:{value:"false"},description:"When true, the button is disabled. isLoading also sets the button to disabled.",name:"isDisabled",required:!1,type:{name:"boolean"}},isInline:{defaultValue:{value:"false"},description:"When true, the button will not stretch full width",name:"isInline",required:!1,type:{name:"boolean"}},onPress:{defaultValue:{value:"() => {}"},description:"Button press handler",name:"onPress",required:!1,type:{name:"() => void"}},iconBefore:{defaultValue:{value:"undefined"},description:"Sets an icon before the text.",name:"iconBefore",required:!1,type:{name:"ReactNode"}},iconAfter:{defaultValue:{value:"undefined"},description:"Sets an icon after the text.",name:"iconAfter",required:!1,type:{name:"ReactNode"}},iconLoading:{defaultValue:{value:"undefined"},description:"Sets an icon at loading state.",name:"iconLoading",required:!1,type:{name:"ReactNode"}},getStyles:{defaultValue:null,description:"Inline styles for components",name:"getStyles",required:!1,type:{name:"ReplaceReturnType<GetButtonStyles, DeepPartial<ButtonStyles>>"}},activeOpacity:{defaultValue:null,description:"Determines what the opacity of the wrapped view should be when touch is active.",name:"activeOpacity",required:!1,type:{name:"number"}},onHideUnderlay:{defaultValue:null,description:"Called immediately after the underlay is hidden",name:"onHideUnderlay",required:!1,type:{name:"() => void"}},onShowUnderlay:{defaultValue:null,description:"Called immediately after the underlay is shown",name:"onShowUnderlay",required:!1,type:{name:"() => void"}},style:{defaultValue:null,description:"//FIXME: not in doc but available in examples\n@see https://facebook.github.io/react-native/docs/view.html#style",name:"style",required:!1,type:{name:"StyleProp<ViewStyle>"}},underlayColor:{defaultValue:null,description:"The color of the underlay that will show through when the touch is active.",name:"underlayColor",required:!1,type:{name:"string"}},delayLongPress:{defaultValue:null,description:"Delay in ms, from onPressIn, before onLongPress is called.",name:"delayLongPress",required:!1,type:{name:"number"}},delayPressIn:{defaultValue:null,description:"Delay in ms, from the start of the touch, before onPressIn is called.",name:"delayPressIn",required:!1,type:{name:"number"}},delayPressOut:{defaultValue:null,description:"Delay in ms, from the release of the touch, before onPressOut is called.",name:"delayPressOut",required:!1,type:{name:"number"}},disabled:{defaultValue:null,description:"If true, disable all interactions for this component.",name:"disabled",required:!1,type:{name:"boolean"}},hitSlop:{defaultValue:null,description:"This defines how far your touch can start away from the button.\nThis is added to pressRetentionOffset when moving off of the button.\nNOTE The touch area never extends past the parent view bounds and\nthe Z-index of sibling views always takes precedence if a touch hits\ntwo overlapping views.",name:"hitSlop",required:!1,type:{name:"Insets"}},onLayout:{defaultValue:null,description:"Invoked on mount and layout changes with\n{nativeEvent: {layout: {x, y, width, height}}}",name:"onLayout",required:!1,type:{name:"(event: LayoutChangeEvent) => void"}},onLongPress:{defaultValue:null,description:"",name:"onLongPress",required:!1,type:{name:"(event: GestureResponderEvent) => void"}},onPressIn:{defaultValue:null,description:"",name:"onPressIn",required:!1,type:{name:"(event: GestureResponderEvent) => void"}},onPressOut:{defaultValue:null,description:"",name:"onPressOut",required:!1,type:{name:"(event: GestureResponderEvent) => void"}},pressRetentionOffset:{defaultValue:null,description:"When the scroll view is disabled, this defines how far your\ntouch may move off of the button, before deactivating the button.\nOnce deactivated, try moving it back and you'll see that the button\nis once again reactivated! Move it back and forth several times\nwhile the scroll view is disabled. Ensure you pass in a constant\nto reduce memory allocations.",name:"pressRetentionOffset",required:!1,type:{name:"Insets"}},testID:{defaultValue:null,description:"Used to locate this view in end-to-end tests.",name:"testID",required:!1,type:{name:"string"}},accessible:{defaultValue:null,description:"When true, indicates that the view is an accessibility element.\nBy default, all the touchable elements are accessible.",name:"accessible",required:!1,type:{name:"boolean"}},accessibilityLabel:{defaultValue:null,description:"Overrides the text that's read by the screen reader when the user interacts with the element. By default, the\nlabel is constructed by traversing all the children and accumulating all the Text nodes separated by space.",name:"accessibilityLabel",required:!1,type:{name:"string"}},accessibilityRole:{defaultValue:null,description:"Accessibility Role tells a person using either VoiceOver on iOS or TalkBack on Android the type of element that is focused on.",name:"accessibilityRole",required:!1,type:{name:"AccessibilityRole"}},accessibilityStates:{defaultValue:null,description:"Accessibility State tells a person using either VoiceOver on iOS or TalkBack on Android the state of the element currently focused on.",name:"accessibilityStates",required:!1,type:{name:"AccessibilityState[]"}},accessibilityHint:{defaultValue:null,description:"An accessibility hint helps users understand what will happen when they perform an action on the accessibility element when that result is not obvious from the accessibility label.",name:"accessibilityHint",required:!1,type:{name:"string"}},accessibilityComponentType:{defaultValue:null,description:"In some cases, we also want to alert the end user of the type of selected component (i.e., that it is a \u201cbutton\u201d).\nIf we were using native buttons, this would work automatically. Since we are using javascript, we need to\nprovide a bit more context for TalkBack. To do so, you must specify the \u2018accessibilityComponentType\u2019 property\nfor any UI component. For instances, we support \u2018button\u2019, \u2018radiobutton_checked\u2019 and \u2018radiobutton_unchecked\u2019 and so on.\n@platform android",name:"accessibilityComponentType",required:!1,type:{name:'"none" | "button" | "radiobutton_checked" | "radiobutton_unchecked"'}},accessibilityLiveRegion:{defaultValue:null,description:"Indicates to accessibility services whether the user should be notified when this view changes.\nWorks for Android API >= 19 only.\nSee http://developer.android.com/reference/android/view/View.html#attr_android:accessibilityLiveRegion for references.\n@platform android",name:"accessibilityLiveRegion",required:!1,type:{name:'"none" | "polite" | "assertive"'}},importantForAccessibility:{defaultValue:null,description:"Controls how view is important for accessibility which is if it fires accessibility events\nand if it is reported to accessibility services that query the screen.\nWorks for Android only. See http://developer.android.com/reference/android/R.attr.html#importantForAccessibility for references.\n\nPossible values:\n      'auto' - The system determines whether the view is important for accessibility - default (recommended).\n      'yes' - The view is important for accessibility.\n      'no' - The view is not important for accessibility.\n      'no-hide-descendants' - The view is not important for accessibility, nor are any of its descendant views.",name:"importantForAccessibility",required:!1,type:{name:'"auto" | "yes" | "no" | "no-hide-descendants"'}},accessibilityElementsHidden:{defaultValue:null,description:"A Boolean value indicating whether the accessibility elements contained within this accessibility element\nare hidden to the screen reader.\n@platform ios",name:"accessibilityElementsHidden",required:!1,type:{name:"boolean"}},accessibilityTraits:{defaultValue:null,description:"Accessibility traits tell a person using VoiceOver what kind of element they have selected.\nIs this element a label? A button? A header? These questions are answered by accessibilityTraits.\n@platform ios",name:"accessibilityTraits",required:!1,type:{name:'"disabled" | "none" | "button" | "link" | "search" | "image" | "text" | "adjustable" | "header" | "summary" | "selected" | "plays" | "key" | "frequentUpdates" | "startsMedia" | "allowsDirectInteraction" | "pageTurn" | AccessibilityTrait[]'}},onAccessibilityTap:{defaultValue:null,description:"When `accessible` is true, the system will try to invoke this function when the user performs accessibility tap gesture.\n@platform ios",name:"onAccessibilityTap",required:!1,type:{name:"() => void"}},onMagicTap:{defaultValue:null,description:"When accessible is true, the system will invoke this function when the user performs the magic tap gesture.\n@platform ios",name:"onMagicTap",required:!1,type:{name:"() => void"}},accessibilityIgnoresInvertColors:{defaultValue:null,description:"https://facebook.github.io/react-native/docs/accessibility#accessibilityignoresinvertcolorsios\n@platform ios",name:"accessibilityIgnoresInvertColors",required:!1,type:{name:"boolean"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Button/Button.tsx#Button"]={docgenInfo:b.__docgenInfo,name:"Button",path:"src/components/Button/Button.tsx#Button"})}catch(v){}try{__class.displayName="__class",__class.__docgenInfo={description:"",displayName:"__class",props:{title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},color:{defaultValue:{value:'"default"'},description:"The intent of the button.",name:"color",required:!1,type:{name:'"default" | "danger" | "primary" | "secondary"'}},appearance:{defaultValue:{value:'"primary"'},description:"The appearance of the button.",name:"appearance",required:!1,type:{name:'"primary" | "minimal" | "outline"'}},size:{defaultValue:{value:'"medium"'},description:"The size of the button.",name:"size",required:!1,type:{name:'"small" | "medium" | "large"'}},isLoading:{defaultValue:{value:"false"},description:"When true, show a loading spinner before the title. This also disables the button.",name:"isLoading",required:!1,type:{name:"boolean"}},isActive:{defaultValue:{value:"false"},description:"Forcefully set the active state of a button.",name:"isActive",required:!1,type:{name:"boolean"}},isDisabled:{defaultValue:{value:"false"},description:"When true, the button is disabled. isLoading also sets the button to disabled.",name:"isDisabled",required:!1,type:{name:"boolean"}},isInline:{defaultValue:{value:"false"},description:"When true, the button will not stretch full width",name:"isInline",required:!1,type:{name:"boolean"}},onPress:{defaultValue:{value:"() => {}"},description:"Button press handler",name:"onPress",required:!1,type:{name:"() => void"}},iconBefore:{defaultValue:{value:"undefined"},description:"Sets an icon before the text.",name:"iconBefore",required:!1,type:{name:"ReactNode"}},iconAfter:{defaultValue:{value:"undefined"},description:"Sets an icon after the text.",name:"iconAfter",required:!1,type:{name:"ReactNode"}},iconLoading:{defaultValue:{value:"undefined"},description:"Sets an icon at loading state.",name:"iconLoading",required:!1,type:{name:"ReactNode"}},getStyles:{defaultValue:null,description:"Inline styles for components",name:"getStyles",required:!1,type:{name:"ReplaceReturnType<GetButtonStyles, DeepPartial<ButtonStyles>>"}},activeOpacity:{defaultValue:null,description:"Determines what the opacity of the wrapped view should be when touch is active.",name:"activeOpacity",required:!1,type:{name:"number"}},onHideUnderlay:{defaultValue:null,description:"Called immediately after the underlay is hidden",name:"onHideUnderlay",required:!1,type:{name:"() => void"}},onShowUnderlay:{defaultValue:null,description:"Called immediately after the underlay is shown",name:"onShowUnderlay",required:!1,type:{name:"() => void"}},style:{defaultValue:null,description:"//FIXME: not in doc but available in examples\n@see https://facebook.github.io/react-native/docs/view.html#style",name:"style",required:!1,type:{name:"StyleProp<ViewStyle>"}},underlayColor:{defaultValue:null,description:"The color of the underlay that will show through when the touch is active.",name:"underlayColor",required:!1,type:{name:"string"}},delayLongPress:{defaultValue:null,description:"Delay in ms, from onPressIn, before onLongPress is called.",name:"delayLongPress",required:!1,type:{name:"number"}},delayPressIn:{defaultValue:null,description:"Delay in ms, from the start of the touch, before onPressIn is called.",name:"delayPressIn",required:!1,type:{name:"number"}},delayPressOut:{defaultValue:null,description:"Delay in ms, from the release of the touch, before onPressOut is called.",name:"delayPressOut",required:!1,type:{name:"number"}},disabled:{defaultValue:null,description:"If true, disable all interactions for this component.",name:"disabled",required:!1,type:{name:"boolean"}},hitSlop:{defaultValue:null,description:"This defines how far your touch can start away from the button.\nThis is added to pressRetentionOffset when moving off of the button.\nNOTE The touch area never extends past the parent view bounds and\nthe Z-index of sibling views always takes precedence if a touch hits\ntwo overlapping views.",name:"hitSlop",required:!1,type:{name:"Insets"}},onLayout:{defaultValue:null,description:"Invoked on mount and layout changes with\n{nativeEvent: {layout: {x, y, width, height}}}",name:"onLayout",required:!1,type:{name:"(event: LayoutChangeEvent) => void"}},onLongPress:{defaultValue:null,description:"",name:"onLongPress",required:!1,type:{name:"(event: GestureResponderEvent) => void"}},onPressIn:{defaultValue:null,description:"",name:"onPressIn",required:!1,type:{name:"(event: GestureResponderEvent) => void"}},onPressOut:{defaultValue:null,description:"",name:"onPressOut",required:!1,type:{name:"(event: GestureResponderEvent) => void"}},pressRetentionOffset:{defaultValue:null,description:"When the scroll view is disabled, this defines how far your\ntouch may move off of the button, before deactivating the button.\nOnce deactivated, try moving it back and you'll see that the button\nis once again reactivated! Move it back and forth several times\nwhile the scroll view is disabled. Ensure you pass in a constant\nto reduce memory allocations.",name:"pressRetentionOffset",required:!1,type:{name:"Insets"}},testID:{defaultValue:null,description:"Used to locate this view in end-to-end tests.",name:"testID",required:!1,type:{name:"string"}},accessible:{defaultValue:null,description:"When true, indicates that the view is an accessibility element.\nBy default, all the touchable elements are accessible.",name:"accessible",required:!1,type:{name:"boolean"}},accessibilityLabel:{defaultValue:null,description:"Overrides the text that's read by the screen reader when the user interacts with the element. By default, the\nlabel is constructed by traversing all the children and accumulating all the Text nodes separated by space.",name:"accessibilityLabel",required:!1,type:{name:"string"}},accessibilityRole:{defaultValue:null,description:"Accessibility Role tells a person using either VoiceOver on iOS or TalkBack on Android the type of element that is focused on.",name:"accessibilityRole",required:!1,type:{name:"AccessibilityRole"}},accessibilityStates:{defaultValue:null,description:"Accessibility State tells a person using either VoiceOver on iOS or TalkBack on Android the state of the element currently focused on.",name:"accessibilityStates",required:!1,type:{name:"AccessibilityState[]"}},accessibilityHint:{defaultValue:null,description:"An accessibility hint helps users understand what will happen when they perform an action on the accessibility element when that result is not obvious from the accessibility label.",name:"accessibilityHint",required:!1,type:{name:"string"}},accessibilityComponentType:{defaultValue:null,description:"In some cases, we also want to alert the end user of the type of selected component (i.e., that it is a \u201cbutton\u201d).\nIf we were using native buttons, this would work automatically. Since we are using javascript, we need to\nprovide a bit more context for TalkBack. To do so, you must specify the \u2018accessibilityComponentType\u2019 property\nfor any UI component. For instances, we support \u2018button\u2019, \u2018radiobutton_checked\u2019 and \u2018radiobutton_unchecked\u2019 and so on.\n@platform android",name:"accessibilityComponentType",required:!1,type:{name:'"none" | "button" | "radiobutton_checked" | "radiobutton_unchecked"'}},accessibilityLiveRegion:{defaultValue:null,description:"Indicates to accessibility services whether the user should be notified when this view changes.\nWorks for Android API >= 19 only.\nSee http://developer.android.com/reference/android/view/View.html#attr_android:accessibilityLiveRegion for references.\n@platform android",name:"accessibilityLiveRegion",required:!1,type:{name:'"none" | "polite" | "assertive"'}},importantForAccessibility:{defaultValue:null,description:"Controls how view is important for accessibility which is if it fires accessibility events\nand if it is reported to accessibility services that query the screen.\nWorks for Android only. See http://developer.android.com/reference/android/R.attr.html#importantForAccessibility for references.\n\nPossible values:\n      'auto' - The system determines whether the view is important for accessibility - default (recommended).\n      'yes' - The view is important for accessibility.\n      'no' - The view is not important for accessibility.\n      'no-hide-descendants' - The view is not important for accessibility, nor are any of its descendant views.",name:"importantForAccessibility",required:!1,type:{name:'"auto" | "yes" | "no" | "no-hide-descendants"'}},accessibilityElementsHidden:{defaultValue:null,description:"A Boolean value indicating whether the accessibility elements contained within this accessibility element\nare hidden to the screen reader.\n@platform ios",name:"accessibilityElementsHidden",required:!1,type:{name:"boolean"}},accessibilityTraits:{defaultValue:null,description:"Accessibility traits tell a person using VoiceOver what kind of element they have selected.\nIs this element a label? A button? A header? These questions are answered by accessibilityTraits.\n@platform ios",name:"accessibilityTraits",required:!1,type:{name:'"disabled" | "none" | "button" | "link" | "search" | "image" | "text" | "adjustable" | "header" | "summary" | "selected" | "plays" | "key" | "frequentUpdates" | "startsMedia" | "allowsDirectInteraction" | "pageTurn" | AccessibilityTrait[]'}},onAccessibilityTap:{defaultValue:null,description:"When `accessible` is true, the system will try to invoke this function when the user performs accessibility tap gesture.\n@platform ios",name:"onAccessibilityTap",required:!1,type:{name:"() => void"}},onMagicTap:{defaultValue:null,description:"When accessible is true, the system will invoke this function when the user performs the magic tap gesture.\n@platform ios",name:"onMagicTap",required:!1,type:{name:"() => void"}},accessibilityIgnoresInvertColors:{defaultValue:null,description:"https://facebook.github.io/react-native/docs/accessibility#accessibilityignoresinvertcolorsios\n@platform ios",name:"accessibilityIgnoresInvertColors",required:!1,type:{name:"boolean"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Button/Button.tsx#__class"]={docgenInfo:__class.__docgenInfo,name:"__class",path:"src/components/Button/Button.tsx#__class"})}catch(v){}},"./src/components/Loading/LoadingDots.tsx":function(e,t,n){var i=n("./node_modules/@babel/runtime/helpers/interopRequireWildcard.js"),o=n("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=o(n("./node_modules/@babel/runtime/helpers/classCallCheck.js")),s=o(n("./node_modules/@babel/runtime/helpers/createClass.js")),r=o(n("./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js")),l=o(n("./node_modules/@babel/runtime/helpers/getPrototypeOf.js")),d=o(n("./node_modules/@babel/runtime/helpers/inherits.js")),u=i(n("./node_modules/react/index.js")),c=n("./node_modules/react-native-web/dist/index.js"),p=function(e){function t(e){var n;return(0,a.default)(this,t),(n=(0,r.default)(this,(0,l.default)(t).call(this,e))).animationState=void 0,n.animationState={dotOpacities:n.initializeDots(),shouldAnimate:!0,targetOpacity:1},n}return(0,d.default)(t,e),(0,s.default)(t,[{key:"initializeDots",value:function(){for(var e=[],t=0;t<this.props.numberOfDots;t++){var n=new c.Animated.Value(this.props.minOpacity);e.push(n)}return e}},{key:"componentDidMount",value:function(){this.animateDots.bind(this)(0)}},{key:"componentWillUnmount",value:function(){this.animationState.shouldAnimate=!1}},{key:"animateDots",value:function(e){if(this.animationState.shouldAnimate){if(e>=this.animationState.dotOpacities.length){e=0;var t=this.props.minOpacity;this.animationState.targetOpacity=this.animationState.targetOpacity===t?1:t}var n=e+1;c.Animated.timing(this.animationState.dotOpacities[e],{duration:this.props.duration,toValue:this.animationState.targetOpacity}).start(this.animateDots.bind(this,n))}}},{key:"render",value:function(){var e=this.props,t=e.size,n=e.color,i=this.animationState.dotOpacities.map(function(e,i){return u.createElement(c.Animated.View,{key:i,style:{backgroundColor:n,borderRadius:"50%",height:t,marginLeft:3,marginRight:3,opacity:e,width:t}})});return u.createElement(c.View,{style:{alignItems:"center",flexDirection:"row",justifyContent:"center"}},i)}}]),t}(u.Component);p.defaultProps={color:"#aaa",duration:300,minOpacity:0,numberOfDots:3,size:10};var m=p;t.default=m;try{p.displayName="LoadingDots",p.__docgenInfo={description:"Ported from https://github.com/adorableio/react-native-animated-ellipsis",displayName:"LoadingDots",props:{numberOfDots:{defaultValue:{value:"3"},description:"",name:"numberOfDots",required:!0,type:{name:"number"}},duration:{defaultValue:{value:"300"},description:"",name:"duration",required:!0,type:{name:"number"}},minOpacity:{defaultValue:{value:"0"},description:"",name:"minOpacity",required:!0,type:{name:"number"}},color:{defaultValue:{value:"#aaa"},description:"",name:"color",required:!0,type:{name:"string"}},size:{defaultValue:{value:"10"},description:"",name:"size",required:!0,type:{name:"number"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Loading/LoadingDots.tsx#LoadingDots"]={docgenInfo:p.__docgenInfo,name:"LoadingDots",path:"src/components/Loading/LoadingDots.tsx#LoadingDots"})}catch(y){}},"./src/components/Loading/index.ts":function(e,t,n){var i=n("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"LoadingDots",{enumerable:!0,get:function(){return o.default}});var o=i(n("./src/components/Loading/LoadingDots.tsx"));try{LoadingDots.displayName="LoadingDots",LoadingDots.__docgenInfo={description:"Ported from https://github.com/adorableio/react-native-animated-ellipsis",displayName:"LoadingDots",props:{numberOfDots:{defaultValue:null,description:"",name:"numberOfDots",required:!0,type:{name:"number"}},duration:{defaultValue:null,description:"",name:"duration",required:!0,type:{name:"number"}},minOpacity:{defaultValue:null,description:"",name:"minOpacity",required:!0,type:{name:"number"}},color:{defaultValue:null,description:"",name:"color",required:!0,type:{name:"string"}},size:{defaultValue:null,description:"",name:"size",required:!0,type:{name:"number"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Loading/index.ts#LoadingDots"]={docgenInfo:LoadingDots.__docgenInfo,name:"LoadingDots",path:"src/components/Loading/index.ts#LoadingDots"})}catch(a){}}}]);
//# sourceMappingURL=3.8d05571979015dcfd67f.js.map