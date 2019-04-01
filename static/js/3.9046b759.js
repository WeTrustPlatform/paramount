(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"./src/components/Button/Button.styles.ts":function(e,t,i){var n=i("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.getButtonStyles=t.getButtonVariables=void 0;var o=n(i("./node_modules/@babel/runtime/helpers/objectSpread.js")),a=n(i("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js")),s=function(e){return{appearances:{minimal:{default:{backgroundColor:e.colors.background.plain,color:e.colors.text.default,focusColor:e.colors.background.tint2},danger:{backgroundColor:e.colors.background.plain,color:e.colors.text.danger,focusColor:e.colors.background.tint2},primary:{backgroundColor:e.colors.background.plain,color:e.colors.text.primary,focusColor:e.colors.background.tint2},secondary:{backgroundColor:e.colors.background.plain,color:e.colors.text.secondary?e.colors.text.secondary:e.colors.text.default,focusColor:e.colors.background.tint2}},primary:{default:{backgroundColor:e.colors.background.tint1,borderColor:e.colors.border.default,color:e.colors.text.default,focusColor:e.colors.background.tint2,loadingBackgroundColor:e.colors.background.overlay},danger:{backgroundColor:e.colors.background.danger.default,borderColor:e.colors.border.danger,color:"white",focusColor:e.colors.background.danger.focus,loadingBackgroundColor:e.colors.background.danger.focusLight},primary:{backgroundColor:e.colors.background.primary.default,borderColor:e.colors.border.primary,color:"white",focusColor:e.colors.background.primary.focus,loadingBackgroundColor:e.colors.background.primary.focusLight},secondary:{backgroundColor:e.colors.background.secondary.default,borderColor:e.colors.border.secondary,color:"white",focusColor:e.colors.background.secondary.focus,loadingBackgroundColor:e.colors.background.secondary.focusLight}},outline:{default:{backgroundColor:e.colors.background.plain,borderColor:e.colors.text.default,borderWidth:3,color:e.colors.text.default,focusColor:e.colors.background.tint2},danger:{backgroundColor:e.colors.background.plain,borderColor:e.colors.border.danger,borderWidth:3,color:e.colors.text.danger,focusColor:e.colors.background.danger.focusLight},primary:{backgroundColor:e.colors.background.plain,borderColor:e.colors.border.primary,borderWidth:3,color:e.colors.text.primary,focusColor:e.colors.background.primary.focusLight},secondary:{backgroundColor:e.colors.background.plain,borderColor:e.colors.border.secondary,borderWidth:3,color:e.colors.text.secondary,focusColor:e.colors.background.secondary.focusLight}}},disabled:{backgroundColor:e.colors.background.disabled,color:e.colors.text.muted},sizes:{small:{borderRadius:e.controlBorderRadius.small,fontSize:e.textSizes.small,height:e.controlHeights.small,paddingLeft:e.controlPaddings.small,paddingRight:e.controlPaddings.small},medium:{borderRadius:e.controlBorderRadius.medium,fontSize:e.textSizes.medium,height:e.controlHeights.medium,paddingLeft:e.controlPaddings.medium,paddingRight:e.controlPaddings.medium},large:{borderRadius:e.controlBorderRadius.large,fontSize:e.textSizes.large,height:e.controlHeights.large,paddingLeft:e.controlPaddings.large,paddingRight:e.controlPaddings.large}}}};t.getButtonVariables=s;t.getButtonStyles=function(e,t){var i=e.appearance,n=e.color,r=e.size,l=e.isDisabled,d=e.isLoading,c=e.isInline,u=s(t),p=u.appearances,m=u.sizes,f=u.disabled,b=(0,a.default)(u,["appearances","sizes","disabled"]),y=p[i][n],h=y.color,g=y.focusColor,v=y.loadingBackgroundColor,S=(0,a.default)(y,["color","focusColor","loadingBackgroundColor"]),w=m[r],k=w.fontSize,V=(0,a.default)(w,["fontSize"]),_=f.color,C=(0,a.default)(f,["color"]);return{buttonStyle:(0,o.default)({},l?(0,o.default)({},C,V):(0,o.default)({},V,b,S,d?{backgroundColor:v}:{}),c?{alignSelf:"flex-start",flexDirection:"row",flexWrap:"wrap"}:{}),focusColor:g,textStyle:{alignItems:"center",color:l?_:h,display:"flex",fontSize:k,fontWeight:"600",justifyContent:"center",textAlign:"center"}}};try{s.displayName="getButtonVariables",s.__docgenInfo={description:"",displayName:"getButtonVariables",props:{colors:{defaultValue:null,description:"",name:"colors",required:!0,type:{name:"Colors"}},fills:{defaultValue:null,description:"",name:"fills",required:!0,type:{name:"Fills"}},fontFamilies:{defaultValue:null,description:"",name:"fontFamilies",required:!0,type:{name:"FontFamilies"}},fontWeights:{defaultValue:null,description:"",name:"fontWeights",required:!0,type:{name:"FontWeights"}},headingSizes:{defaultValue:null,description:"",name:"headingSizes",required:!0,type:{name:"HeadingSizes"}},paragraphSizes:{defaultValue:null,description:"",name:"paragraphSizes",required:!0,type:{name:"ParagraphSizes"}},textSizes:{defaultValue:null,description:"",name:"textSizes",required:!0,type:{name:"TextSizes"}},elevations:{defaultValue:null,description:"",name:"elevations",required:!0,type:{name:"ViewStyle[]"}},controlPaddings:{defaultValue:null,description:"",name:"controlPaddings",required:!0,type:{name:"ControlSizes"}},controlHeights:{defaultValue:null,description:"",name:"controlHeights",required:!0,type:{name:"ControlSizes"}},controlBorderRadius:{defaultValue:null,description:"",name:"controlBorderRadius",required:!0,type:{name:"ControlSizes"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Button/Button.styles.ts#getButtonVariables"]={docgenInfo:s.__docgenInfo,name:"getButtonVariables",path:"src/components/Button/Button.styles.ts#getButtonVariables"})}catch(r){}},"./src/components/Button/Button.tsx":function(e,t,i){var n=i("./node_modules/@babel/runtime/helpers/interopRequireWildcard.js"),o=i("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.Button=void 0;var a=o(i("./node_modules/@babel/runtime/helpers/extends.js")),s=o(i("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js")),r=n(i("./node_modules/react/index.js")),l=i("./node_modules/react-native-web/dist/index.js"),d=i("./src/theme/index.ts"),c=i("./src/utils/mergeStyles.ts"),u=i("./src/components/Layout/index.ts"),p=i("./src/components/Loading/index.ts"),m=i("./src/components/Typography/index.ts"),f=i("./src/components/Button/Button.styles.ts"),b=(0,d.withTheme)(function(e){var t=e.appearance,i=void 0===t?"primary":t,n=e.title,o=e.color,d=void 0===o?"default":o,b=e.getStyles,y=e.iconAfter,h=e.iconBefore,g=e.iconLoading,v=(e.isActive,e.isDisabled),S=void 0!==v&&v,w=e.isInline,k=void 0!==w&&w,V=e.isLoading,_=void 0!==V&&V,C=e.onPress,q=void 0===C?function(){}:C,B=e.size,A=void 0===B?"medium":B,T=e.theme,L=e.testID,R=(0,s.default)(e,["appearance","title","color","getStyles","iconAfter","iconBefore","iconLoading","isActive","isDisabled","isInline","isLoading","onPress","size","theme","testID"]),O=(0,c.mergeStyles)(f.getButtonStyles,b)({appearance:i,color:d,isDisabled:S,isInline:k,isLoading:_,size:A},T),x=O.buttonStyle,D=O.textStyle,I=O.focusColor;return r.createElement(l.TouchableHighlight,(0,a.default)({accessible:!0,accessibilityRole:"button",underlayColor:I,disabled:!(!S&&!_),onPress:q,style:x,testID:L},R),r.createElement(l.View,{style:{alignItems:"center",flexDirection:"row",height:"100%",justifyContent:"center"}},h,r.createElement(u.Spacing,{paddingLeft:h?1:0,paddingRight:y?1:0},_?g||r.createElement(p.LoadingDots,{color:D.color}):n?r.createElement(m.Text,{getStyles:function(){return{textStyle:D}}},n):null),y))});t.Button=b;var y=b;t.default=y;try{b.displayName="Button",b.__docgenInfo={description:"",displayName:"Button",props:{title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},color:{defaultValue:{value:'"default"'},description:"The intent of the button.",name:"color",required:!1,type:{name:'"default" | "danger" | "primary" | "secondary"'}},appearance:{defaultValue:{value:'"primary"'},description:"The appearance of the button.",name:"appearance",required:!1,type:{name:'"primary" | "minimal" | "outline"'}},size:{defaultValue:{value:'"medium"'},description:"The size of the button.",name:"size",required:!1,type:{name:'"small" | "medium" | "large"'}},isLoading:{defaultValue:{value:"false"},description:"When true, show a loading spinner before the title. This also disables the button.",name:"isLoading",required:!1,type:{name:"boolean"}},isActive:{defaultValue:{value:"false"},description:"Forcefully set the active state of a button.",name:"isActive",required:!1,type:{name:"boolean"}},isDisabled:{defaultValue:{value:"false"},description:"When true, the button is disabled. isLoading also sets the button to disabled.",name:"isDisabled",required:!1,type:{name:"boolean"}},isInline:{defaultValue:{value:"false"},description:"When true, the button will not stretch full width",name:"isInline",required:!1,type:{name:"boolean"}},onPress:{defaultValue:{value:"() => {}"},description:"Button press handler",name:"onPress",required:!1,type:{name:"(event: GestureResponderEvent) => void"}},iconBefore:{defaultValue:{value:"undefined"},description:"Sets an icon before the text.",name:"iconBefore",required:!1,type:{name:"ReactNode"}},iconAfter:{defaultValue:{value:"undefined"},description:"Sets an icon after the text.",name:"iconAfter",required:!1,type:{name:"ReactNode"}},iconLoading:{defaultValue:{value:"undefined"},description:"Sets an icon at loading state.",name:"iconLoading",required:!1,type:{name:"ReactNode"}},getStyles:{defaultValue:null,description:"Inline styles for components",name:"getStyles",required:!1,type:{name:"ReplaceReturnType<GetButtonStyles, DeepPartial<ButtonStyles>>"}},testID:{defaultValue:null,description:"",name:"testID",required:!1,type:{name:"string"}},accessible:{defaultValue:null,description:"When true, indicates that the view is an accessibility element.\nBy default, all the touchable elements are accessible.",name:"accessible",required:!1,type:{name:"boolean"}},accessibilityLabel:{defaultValue:null,description:"Overrides the text that's read by the screen reader when the user interacts with the element. By default, the\nlabel is constructed by traversing all the children and accumulating all the Text nodes separated by space.",name:"accessibilityLabel",required:!1,type:{name:"string"}},accessibilityRole:{defaultValue:null,description:"Accessibility Role tells a person using either VoiceOver on iOS or TalkBack on Android the type of element that is focused on.",name:"accessibilityRole",required:!1,type:{name:"AccessibilityRole"}},accessibilityStates:{defaultValue:null,description:"Accessibility State tells a person using either VoiceOver on iOS or TalkBack on Android the state of the element currently focused on.",name:"accessibilityStates",required:!1,type:{name:"AccessibilityState[]"}},accessibilityHint:{defaultValue:null,description:"An accessibility hint helps users understand what will happen when they perform an action on the accessibility element when that result is not obvious from the accessibility label.",name:"accessibilityHint",required:!1,type:{name:"string"}},accessibilityComponentType:{defaultValue:null,description:"In some cases, we also want to alert the end user of the type of selected component (i.e., that it is a \u201cbutton\u201d).\nIf we were using native buttons, this would work automatically. Since we are using javascript, we need to\nprovide a bit more context for TalkBack. To do so, you must specify the \u2018accessibilityComponentType\u2019 property\nfor any UI component. For instances, we support \u2018button\u2019, \u2018radiobutton_checked\u2019 and \u2018radiobutton_unchecked\u2019 and so on.\n@platform android",name:"accessibilityComponentType",required:!1,type:{name:'"none" | "button" | "radiobutton_checked" | "radiobutton_unchecked"'}},accessibilityLiveRegion:{defaultValue:null,description:"Indicates to accessibility services whether the user should be notified when this view changes.\nWorks for Android API >= 19 only.\nSee http://developer.android.com/reference/android/view/View.html#attr_android:accessibilityLiveRegion for references.\n@platform android",name:"accessibilityLiveRegion",required:!1,type:{name:'"none" | "polite" | "assertive"'}},importantForAccessibility:{defaultValue:null,description:"Controls how view is important for accessibility which is if it fires accessibility events\nand if it is reported to accessibility services that query the screen.\nWorks for Android only. See http://developer.android.com/reference/android/R.attr.html#importantForAccessibility for references.\n\nPossible values:\n      'auto' - The system determines whether the view is important for accessibility - default (recommended).\n      'yes' - The view is important for accessibility.\n      'no' - The view is not important for accessibility.\n      'no-hide-descendants' - The view is not important for accessibility, nor are any of its descendant views.",name:"importantForAccessibility",required:!1,type:{name:'"auto" | "yes" | "no" | "no-hide-descendants"'}},accessibilityElementsHidden:{defaultValue:null,description:"A Boolean value indicating whether the accessibility elements contained within this accessibility element\nare hidden to the screen reader.\n@platform ios",name:"accessibilityElementsHidden",required:!1,type:{name:"boolean"}},accessibilityTraits:{defaultValue:null,description:"Accessibility traits tell a person using VoiceOver what kind of element they have selected.\nIs this element a label? A button? A header? These questions are answered by accessibilityTraits.\n@platform ios",name:"accessibilityTraits",required:!1,type:{name:'"none" | "button" | "link" | "search" | "image" | "text" | "adjustable" | "header" | "summary" | "selected" | "disabled" | "plays" | "key" | "frequentUpdates" | "startsMedia" | "allowsDirectInteraction" | "pageTurn" | AccessibilityTrait[]'}},onAccessibilityTap:{defaultValue:null,description:"When `accessible` is true, the system will try to invoke this function when the user performs accessibility tap gesture.\n@platform ios",name:"onAccessibilityTap",required:!1,type:{name:"() => void"}},onMagicTap:{defaultValue:null,description:"When accessible is true, the system will invoke this function when the user performs the magic tap gesture.\n@platform ios",name:"onMagicTap",required:!1,type:{name:"() => void"}},accessibilityIgnoresInvertColors:{defaultValue:null,description:"https://facebook.github.io/react-native/docs/accessibility#accessibilityignoresinvertcolorsios\n@platform ios",name:"accessibilityIgnoresInvertColors",required:!1,type:{name:"boolean"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Button/Button.tsx#Button"]={docgenInfo:b.__docgenInfo,name:"Button",path:"src/components/Button/Button.tsx#Button"})}catch(h){}try{__class.displayName="__class",__class.__docgenInfo={description:"",displayName:"__class",props:{title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},color:{defaultValue:{value:'"default"'},description:"The intent of the button.",name:"color",required:!1,type:{name:'"default" | "danger" | "primary" | "secondary"'}},appearance:{defaultValue:{value:'"primary"'},description:"The appearance of the button.",name:"appearance",required:!1,type:{name:'"primary" | "minimal" | "outline"'}},size:{defaultValue:{value:'"medium"'},description:"The size of the button.",name:"size",required:!1,type:{name:'"small" | "medium" | "large"'}},isLoading:{defaultValue:{value:"false"},description:"When true, show a loading spinner before the title. This also disables the button.",name:"isLoading",required:!1,type:{name:"boolean"}},isActive:{defaultValue:{value:"false"},description:"Forcefully set the active state of a button.",name:"isActive",required:!1,type:{name:"boolean"}},isDisabled:{defaultValue:{value:"false"},description:"When true, the button is disabled. isLoading also sets the button to disabled.",name:"isDisabled",required:!1,type:{name:"boolean"}},isInline:{defaultValue:{value:"false"},description:"When true, the button will not stretch full width",name:"isInline",required:!1,type:{name:"boolean"}},onPress:{defaultValue:{value:"() => {}"},description:"Button press handler",name:"onPress",required:!1,type:{name:"(event: GestureResponderEvent) => void"}},iconBefore:{defaultValue:{value:"undefined"},description:"Sets an icon before the text.",name:"iconBefore",required:!1,type:{name:"ReactNode"}},iconAfter:{defaultValue:{value:"undefined"},description:"Sets an icon after the text.",name:"iconAfter",required:!1,type:{name:"ReactNode"}},iconLoading:{defaultValue:{value:"undefined"},description:"Sets an icon at loading state.",name:"iconLoading",required:!1,type:{name:"ReactNode"}},getStyles:{defaultValue:null,description:"Inline styles for components",name:"getStyles",required:!1,type:{name:"ReplaceReturnType<GetButtonStyles, DeepPartial<ButtonStyles>>"}},testID:{defaultValue:null,description:"",name:"testID",required:!1,type:{name:"string"}},accessible:{defaultValue:null,description:"When true, indicates that the view is an accessibility element.\nBy default, all the touchable elements are accessible.",name:"accessible",required:!1,type:{name:"boolean"}},accessibilityLabel:{defaultValue:null,description:"Overrides the text that's read by the screen reader when the user interacts with the element. By default, the\nlabel is constructed by traversing all the children and accumulating all the Text nodes separated by space.",name:"accessibilityLabel",required:!1,type:{name:"string"}},accessibilityRole:{defaultValue:null,description:"Accessibility Role tells a person using either VoiceOver on iOS or TalkBack on Android the type of element that is focused on.",name:"accessibilityRole",required:!1,type:{name:"AccessibilityRole"}},accessibilityStates:{defaultValue:null,description:"Accessibility State tells a person using either VoiceOver on iOS or TalkBack on Android the state of the element currently focused on.",name:"accessibilityStates",required:!1,type:{name:"AccessibilityState[]"}},accessibilityHint:{defaultValue:null,description:"An accessibility hint helps users understand what will happen when they perform an action on the accessibility element when that result is not obvious from the accessibility label.",name:"accessibilityHint",required:!1,type:{name:"string"}},accessibilityComponentType:{defaultValue:null,description:"In some cases, we also want to alert the end user of the type of selected component (i.e., that it is a \u201cbutton\u201d).\nIf we were using native buttons, this would work automatically. Since we are using javascript, we need to\nprovide a bit more context for TalkBack. To do so, you must specify the \u2018accessibilityComponentType\u2019 property\nfor any UI component. For instances, we support \u2018button\u2019, \u2018radiobutton_checked\u2019 and \u2018radiobutton_unchecked\u2019 and so on.\n@platform android",name:"accessibilityComponentType",required:!1,type:{name:'"none" | "button" | "radiobutton_checked" | "radiobutton_unchecked"'}},accessibilityLiveRegion:{defaultValue:null,description:"Indicates to accessibility services whether the user should be notified when this view changes.\nWorks for Android API >= 19 only.\nSee http://developer.android.com/reference/android/view/View.html#attr_android:accessibilityLiveRegion for references.\n@platform android",name:"accessibilityLiveRegion",required:!1,type:{name:'"none" | "polite" | "assertive"'}},importantForAccessibility:{defaultValue:null,description:"Controls how view is important for accessibility which is if it fires accessibility events\nand if it is reported to accessibility services that query the screen.\nWorks for Android only. See http://developer.android.com/reference/android/R.attr.html#importantForAccessibility for references.\n\nPossible values:\n      'auto' - The system determines whether the view is important for accessibility - default (recommended).\n      'yes' - The view is important for accessibility.\n      'no' - The view is not important for accessibility.\n      'no-hide-descendants' - The view is not important for accessibility, nor are any of its descendant views.",name:"importantForAccessibility",required:!1,type:{name:'"auto" | "yes" | "no" | "no-hide-descendants"'}},accessibilityElementsHidden:{defaultValue:null,description:"A Boolean value indicating whether the accessibility elements contained within this accessibility element\nare hidden to the screen reader.\n@platform ios",name:"accessibilityElementsHidden",required:!1,type:{name:"boolean"}},accessibilityTraits:{defaultValue:null,description:"Accessibility traits tell a person using VoiceOver what kind of element they have selected.\nIs this element a label? A button? A header? These questions are answered by accessibilityTraits.\n@platform ios",name:"accessibilityTraits",required:!1,type:{name:'"none" | "button" | "link" | "search" | "image" | "text" | "adjustable" | "header" | "summary" | "selected" | "disabled" | "plays" | "key" | "frequentUpdates" | "startsMedia" | "allowsDirectInteraction" | "pageTurn" | AccessibilityTrait[]'}},onAccessibilityTap:{defaultValue:null,description:"When `accessible` is true, the system will try to invoke this function when the user performs accessibility tap gesture.\n@platform ios",name:"onAccessibilityTap",required:!1,type:{name:"() => void"}},onMagicTap:{defaultValue:null,description:"When accessible is true, the system will invoke this function when the user performs the magic tap gesture.\n@platform ios",name:"onMagicTap",required:!1,type:{name:"() => void"}},accessibilityIgnoresInvertColors:{defaultValue:null,description:"https://facebook.github.io/react-native/docs/accessibility#accessibilityignoresinvertcolorsios\n@platform ios",name:"accessibilityIgnoresInvertColors",required:!1,type:{name:"boolean"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Button/Button.tsx#__class"]={docgenInfo:__class.__docgenInfo,name:"__class",path:"src/components/Button/Button.tsx#__class"})}catch(h){}},"./src/components/Loading/LoadingDots.tsx":function(e,t,i){var n=i("./node_modules/@babel/runtime/helpers/interopRequireWildcard.js"),o=i("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=o(i("./node_modules/@babel/runtime/helpers/classCallCheck.js")),s=o(i("./node_modules/@babel/runtime/helpers/createClass.js")),r=o(i("./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js")),l=o(i("./node_modules/@babel/runtime/helpers/getPrototypeOf.js")),d=o(i("./node_modules/@babel/runtime/helpers/inherits.js")),c=n(i("./node_modules/react/index.js")),u=i("./node_modules/react-native-web/dist/index.js"),p=function(e){function t(e){var i;return(0,a.default)(this,t),(i=(0,r.default)(this,(0,l.default)(t).call(this,e))).animationState=void 0,i.animationState={dotOpacities:i.initializeDots(),shouldAnimate:!0,targetOpacity:1},i}return(0,d.default)(t,e),(0,s.default)(t,[{key:"initializeDots",value:function(){for(var e=[],t=0;t<this.props.numberOfDots;t++){var i=new u.Animated.Value(this.props.minOpacity);e.push(i)}return e}},{key:"componentDidMount",value:function(){this.animateDots.bind(this)(0)}},{key:"componentWillUnmount",value:function(){this.animationState.shouldAnimate=!1}},{key:"animateDots",value:function(e){if(this.animationState.shouldAnimate){if(e>=this.animationState.dotOpacities.length){e=0;var t=this.props.minOpacity;this.animationState.targetOpacity=this.animationState.targetOpacity===t?1:t}var i=e+1;u.Animated.timing(this.animationState.dotOpacities[e],{duration:this.props.duration,toValue:this.animationState.targetOpacity}).start(this.animateDots.bind(this,i))}}},{key:"render",value:function(){var e=this.props,t=e.size,i=e.color,n=this.animationState.dotOpacities.map(function(e,n){return c.createElement(u.Animated.View,{key:n,style:{backgroundColor:i,borderRadius:"50%",height:t,marginLeft:3,marginRight:3,opacity:e,width:t}})});return c.createElement(u.View,{style:{alignItems:"center",flexDirection:"row",justifyContent:"center"}},n)}}]),t}(c.Component);p.defaultProps={color:"#aaa",duration:300,minOpacity:0,numberOfDots:3,size:10};var m=p;t.default=m;try{p.displayName="LoadingDots",p.__docgenInfo={description:"Ported from https://github.com/adorableio/react-native-animated-ellipsis",displayName:"LoadingDots",props:{numberOfDots:{defaultValue:{value:"3"},description:"",name:"numberOfDots",required:!0,type:{name:"number"}},duration:{defaultValue:{value:"300"},description:"",name:"duration",required:!0,type:{name:"number"}},minOpacity:{defaultValue:{value:"0"},description:"",name:"minOpacity",required:!0,type:{name:"number"}},color:{defaultValue:{value:"#aaa"},description:"",name:"color",required:!0,type:{name:"string"}},size:{defaultValue:{value:"10"},description:"",name:"size",required:!0,type:{name:"number"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Loading/LoadingDots.tsx#LoadingDots"]={docgenInfo:p.__docgenInfo,name:"LoadingDots",path:"src/components/Loading/LoadingDots.tsx#LoadingDots"})}catch(f){}},"./src/components/Loading/index.ts":function(e,t,i){var n=i("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"LoadingDots",{enumerable:!0,get:function(){return o.default}});var o=n(i("./src/components/Loading/LoadingDots.tsx"));try{LoadingDots.displayName="LoadingDots",LoadingDots.__docgenInfo={description:"Ported from https://github.com/adorableio/react-native-animated-ellipsis",displayName:"LoadingDots",props:{numberOfDots:{defaultValue:null,description:"",name:"numberOfDots",required:!0,type:{name:"number"}},duration:{defaultValue:null,description:"",name:"duration",required:!0,type:{name:"number"}},minOpacity:{defaultValue:null,description:"",name:"minOpacity",required:!0,type:{name:"number"}},color:{defaultValue:null,description:"",name:"color",required:!0,type:{name:"string"}},size:{defaultValue:null,description:"",name:"size",required:!0,type:{name:"number"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Loading/index.ts#LoadingDots"]={docgenInfo:LoadingDots.__docgenInfo,name:"LoadingDots",path:"src/components/Loading/index.ts#LoadingDots"})}catch(a){}}}]);
//# sourceMappingURL=3.0db58c1144c679ec3a19.js.map