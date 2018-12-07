(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"./src/components/Picker/Picker.mdx":function(e,t,n){var i=n("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=i(n("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js")),a=i(n("./node_modules/@babel/runtime/helpers/classCallCheck.js")),s=i(n("./node_modules/@babel/runtime/helpers/createClass.js")),r=i(n("./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js")),l=i(n("./node_modules/@babel/runtime/helpers/getPrototypeOf.js")),d=i(n("./node_modules/@babel/runtime/helpers/inherits.js")),u=i(n("./node_modules/react/index.js")),c=n("./node_modules/@mdx-js/tag/dist/index.js"),p=n("./node_modules/docz/dist/index.m.js"),h=i(n("./src/components/Picker/Picker.tsx")),m=i(n("./src/components/Picker/PickerItem.tsx")),f=function(e){function t(e){var n;return(0,a.default)(this,t),(n=(0,r.default)(this,(0,l.default)(t).call(this,e))).layout=null,n}return(0,d.default)(t,e),(0,s.default)(t,[{key:"render",value:function(){var e=this.props,t=e.components,n=(0,o.default)(e,["components"]);return u.default.createElement(c.MDXTag,{name:"wrapper",components:t},u.default.createElement(c.MDXTag,{name:"h2",components:t,props:{id:"usage"}},"Usage"),u.default.createElement(c.MDXTag,{name:"h3",components:t,props:{id:"default"}},"Default"),u.default.createElement(p.Playground,{__position:0,__code:'<Picker\n  selectedValue="js"\n  onValueChange={(itemValue, itemIndex) =>\n    console.log(\'itemValue\', itemValue)\n  }\n>\n  <PickerItem label="Java" value="java" />\n  <PickerItem label="JavaScript" value="js" />\n</Picker>',__scope:{props:this?this.props:n,Picker:h.default,PickerItem:m.default}},u.default.createElement(h.default,{selectedValue:"js",onValueChange:function(e,t){return console.log("itemValue",e)}},u.default.createElement(m.default,{label:"Java",value:"java"}),u.default.createElement(m.default,{label:"JavaScript",value:"js"}))),u.default.createElement(c.MDXTag,{name:"h2",components:t,props:{id:"props"}},"Props"),u.default.createElement(p.PropsTable,{of:h.default}))}}]),t}(u.default.Component);t.default=f},"./src/components/Picker/Picker.tsx":function(e,t,n){var i=n("./node_modules/@babel/runtime/helpers/interopRequireWildcard.js"),o=n("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.Picker=void 0;var a=o(n("./node_modules/@babel/runtime/helpers/extends.js")),s=o(n("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js")),r=i(n("./node_modules/react/index.js")),l=n("./node_modules/react-native-web/dist/index.js"),d=(0,n("./src/theme/index.ts").withTheme)(function(e){var t=e.theme,n=e.size,i=void 0===n?"medium":n,o=(0,s.default)(e,["theme","size"]),d=t.getPickerStyles(i),u=d.pickerStyle,c=d.itemStyle;return r.createElement(l.Picker,(0,a.default)({itemStyle:c,style:[u]},o))});t.Picker=d;var u=d;t.default=u;try{d.displayName="Picker",d.__docgenInfo={description:"",displayName:"Picker",props:{size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:'"small" | "medium" | "large"'}},onValueChange:{defaultValue:null,description:"Callback for when an item is selected. This is called with the\nfollowing parameters:\n- itemValue: the value prop of the item that was selected\n- itemPosition: the index of the selected item in this picker",name:"onValueChange",required:!1,type:{name:"(itemValue: any, itemPosition: number) => void"}},selectedValue:{defaultValue:null,description:"Value matching value of one of the items.\nCan be a string or an integer.",name:"selectedValue",required:!1,type:{name:"any"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"StyleProp<ViewStyle>"}},testId:{defaultValue:null,description:"Used to locate this view in end-to-end tests.",name:"testId",required:!1,type:{name:"string"}},itemStyle:{defaultValue:null,description:"Style to apply to each of the item labels.\n@platform ios",name:"itemStyle",required:!1,type:{name:"StyleProp<ViewStyle>"}},hitSlop:{defaultValue:null,description:"This defines how far a touch event can start away from the view.\nTypical interface guidelines recommend touch targets that are at least\n30 - 40 points/density-independent pixels. If a Touchable view has\na height of 20 the touchable height can be extended to 40 with\nhitSlop={{top: 10, bottom: 10, left: 0, right: 0}}\nNOTE The touch area never extends past the parent view bounds and\nthe Z-index of sibling views always takes precedence if a touch\nhits two overlapping views.",name:"hitSlop",required:!1,type:{name:"Insets"}},onLayout:{defaultValue:null,description:"Invoked on mount and layout changes with\n\n{nativeEvent: { layout: {x, y, width, height}}}.",name:"onLayout",required:!1,type:{name:"(event: LayoutChangeEvent) => void"}},pointerEvents:{defaultValue:null,description:"In the absence of auto property, none is much like CSS's none value. box-none is as if you had applied the CSS class:\n\n.box-none {\n   pointer-events: none;\n}\n.box-none * {\n   pointer-events: all;\n}\n\nbox-only is the equivalent of\n\n.box-only {\n   pointer-events: all;\n}\n.box-only * {\n   pointer-events: none;\n}\n\nBut since pointerEvents does not affect layout/appearance, and we are already deviating from the spec by adding additional modes,\nwe opt to not include pointerEvents on style. On some platforms, we would need to implement it as a className anyways. Using style or not is an implementation detail of the platform.",name:"pointerEvents",required:!1,type:{name:'"box-none" | "none" | "box-only" | "auto"'}},removeClippedSubviews:{defaultValue:null,description:"This is a special performance property exposed by RCTView and is useful for scrolling content when there are many subviews,\nmost of which are offscreen. For this property to be effective, it must be applied to a view that contains many subviews that extend outside its bound.\nThe subviews must also have overflow: hidden, as should the containing view (or one of its superviews).",name:"removeClippedSubviews",required:!1,type:{name:"boolean"}},testID:{defaultValue:null,description:"Used to locate this view in end-to-end tests.",name:"testID",required:!1,type:{name:"string"}},collapsable:{defaultValue:null,description:"Views that are only used to layout their children or otherwise don't draw anything\nmay be automatically removed from the native hierarchy as an optimization.\nSet this property to false to disable this optimization and ensure that this View exists in the native view hierarchy.",name:"collapsable",required:!1,type:{name:"boolean"}},needsOffscreenAlphaCompositing:{defaultValue:null,description:"Whether this view needs to rendered offscreen and composited with an alpha in order to preserve 100% correct colors and blending behavior.\nThe default (false) falls back to drawing the component and its children\nwith an alpha applied to the paint used to draw each element instead of rendering the full component offscreen and compositing it back with an alpha value.\nThis default may be noticeable and undesired in the case where the View you are setting an opacity on\nhas multiple overlapping elements (e.g. multiple overlapping Views, or text and a background).\n\nRendering offscreen to preserve correct alpha behavior is extremely expensive\nand hard to debug for non-native developers, which is why it is not turned on by default.\nIf you do need to enable this property for an animation,\nconsider combining it with renderToHardwareTextureAndroid if the view contents are static (i.e. it doesn't need to be redrawn each frame).\nIf that property is enabled, this View will be rendered off-screen once,\nsaved in a hardware texture, and then composited onto the screen with an alpha each frame without having to switch rendering targets on the GPU.",name:"needsOffscreenAlphaCompositing",required:!1,type:{name:"boolean"}},renderToHardwareTextureAndroid:{defaultValue:null,description:"Whether this view should render itself (and all of its children) into a single hardware texture on the GPU.\n\nOn Android, this is useful for animations and interactions that only modify opacity, rotation, translation, and/or scale:\nin those cases, the view doesn't have to be redrawn and display lists don't need to be re-executed. The texture can just be\nre-used and re-composited with different parameters. The downside is that this can use up limited video memory, so this prop should be set back to false at the end of the interaction/animation.",name:"renderToHardwareTextureAndroid",required:!1,type:{name:"boolean"}},accessibilityViewIsModal:{defaultValue:null,description:"A Boolean value indicating whether VoiceOver should ignore the elements within views that are siblings of the receiver.\n@platform ios",name:"accessibilityViewIsModal",required:!1,type:{name:"boolean"}},accessibilityActions:{defaultValue:null,description:"Provides an array of custom actions available for accessibility.\n@platform ios",name:"accessibilityActions",required:!1,type:{name:"string[]"}},onAccessibilityAction:{defaultValue:null,description:"When `accessible` is true, the system will try to invoke this function\nwhen the user performs an accessibility custom action.\n@platform ios",name:"onAccessibilityAction",required:!1,type:{name:"() => void"}},shouldRasterizeIOS:{defaultValue:null,description:"Whether this view should be rendered as a bitmap before compositing.\n\nOn iOS, this is useful for animations and interactions that do not modify this component's dimensions nor its children;\nfor example, when translating the position of a static view, rasterization allows the renderer to reuse a cached bitmap of a static view\nand quickly composite it during each frame.\n\nRasterization incurs an off-screen drawing pass and the bitmap consumes memory.\nTest and measure when using this property.",name:"shouldRasterizeIOS",required:!1,type:{name:"boolean"}},onStartShouldSetResponder:{defaultValue:null,description:"A view can become the touch responder by implementing the correct negotiation methods.\nThere are two methods to ask the view if it wants to become responder:\nDoes this view want to become responder on the start of a touch?",name:"onStartShouldSetResponder",required:!1,type:{name:"(event: GestureResponderEvent) => boolean"}},onMoveShouldSetResponder:{defaultValue:null,description:'Called for every touch move on the View when it is not the responder: does this view want to "claim" touch responsiveness?',name:"onMoveShouldSetResponder",required:!1,type:{name:"(event: GestureResponderEvent) => boolean"}},onResponderEnd:{defaultValue:null,description:"If the View returns true and attempts to become the responder, one of the following will happen:",name:"onResponderEnd",required:!1,type:{name:"(event: GestureResponderEvent) => void"}},onResponderGrant:{defaultValue:null,description:"The View is now responding for touch events.\nThis is the time to highlight and show the user what is happening",name:"onResponderGrant",required:!1,type:{name:"(event: GestureResponderEvent) => void"}},onResponderReject:{defaultValue:null,description:"Something else is the responder right now and will not release it",name:"onResponderReject",required:!1,type:{name:"(event: GestureResponderEvent) => void"}},onResponderMove:{defaultValue:null,description:"If the view is responding, the following handlers can be called:\nThe user is moving their finger",name:"onResponderMove",required:!1,type:{name:"(event: GestureResponderEvent) => void"}},onResponderRelease:{defaultValue:null,description:'Fired at the end of the touch, ie "touchUp"',name:"onResponderRelease",required:!1,type:{name:"(event: GestureResponderEvent) => void"}},onResponderStart:{defaultValue:null,description:"",name:"onResponderStart",required:!1,type:{name:"(event: GestureResponderEvent) => void"}},onResponderTerminationRequest:{defaultValue:null,description:"Something else wants to become responder.\nShould this view release the responder? Returning true allows release",name:"onResponderTerminationRequest",required:!1,type:{name:"(event: GestureResponderEvent) => boolean"}},onResponderTerminate:{defaultValue:null,description:"The responder has been taken from the View.\nMight be taken by other views after a call to onResponderTerminationRequest,\nor might be taken by the OS without asking (happens with control center/ notification center on iOS)",name:"onResponderTerminate",required:!1,type:{name:"(event: GestureResponderEvent) => void"}},onStartShouldSetResponderCapture:{defaultValue:null,description:"onStartShouldSetResponder and onMoveShouldSetResponder are called with a bubbling pattern,\nwhere the deepest node is called first.\nThat means that the deepest component will become responder when multiple Views return true for *ShouldSetResponder handlers.\nThis is desirable in most cases, because it makes sure all controls and buttons are usable.\n\nHowever, sometimes a parent will want to make sure that it becomes responder.\nThis can be handled by using the capture phase.\nBefore the responder system bubbles up from the deepest component,\nit will do a capture phase, firing on*ShouldSetResponderCapture.\nSo if a parent View wants to prevent the child from becoming responder on a touch start,\nit should have a onStartShouldSetResponderCapture handler which returns true.",name:"onStartShouldSetResponderCapture",required:!1,type:{name:"(event: GestureResponderEvent) => boolean"}},onMoveShouldSetResponderCapture:{defaultValue:null,description:"onStartShouldSetResponder and onMoveShouldSetResponder are called with a bubbling pattern,\nwhere the deepest node is called first.\nThat means that the deepest component will become responder when multiple Views return true for *ShouldSetResponder handlers.\nThis is desirable in most cases, because it makes sure all controls and buttons are usable.\n\nHowever, sometimes a parent will want to make sure that it becomes responder.\nThis can be handled by using the capture phase.\nBefore the responder system bubbles up from the deepest component,\nit will do a capture phase, firing on*ShouldSetResponderCapture.\nSo if a parent View wants to prevent the child from becoming responder on a touch start,\nit should have a onStartShouldSetResponderCapture handler which returns true.",name:"onMoveShouldSetResponderCapture",required:!1,type:{name:"(event: GestureResponderEvent) => boolean"}},onTouchStart:{defaultValue:null,description:"",name:"onTouchStart",required:!1,type:{name:"(event: GestureResponderEvent) => void"}},onTouchMove:{defaultValue:null,description:"",name:"onTouchMove",required:!1,type:{name:"(event: GestureResponderEvent) => void"}},onTouchEnd:{defaultValue:null,description:"",name:"onTouchEnd",required:!1,type:{name:"(event: GestureResponderEvent) => void"}},onTouchCancel:{defaultValue:null,description:"",name:"onTouchCancel",required:!1,type:{name:"(event: GestureResponderEvent) => void"}},onTouchEndCapture:{defaultValue:null,description:"",name:"onTouchEndCapture",required:!1,type:{name:"(event: GestureResponderEvent) => void"}},accessible:{defaultValue:null,description:"When true, indicates that the view is an accessibility element.\nBy default, all the touchable elements are accessible.",name:"accessible",required:!1,type:{name:"boolean"}},accessibilityLabel:{defaultValue:null,description:"Overrides the text that's read by the screen reader when the user interacts with the element. By default, the\nlabel is constructed by traversing all the children and accumulating all the Text nodes separated by space.",name:"accessibilityLabel",required:!1,type:{name:"string"}},accessibilityRole:{defaultValue:null,description:"Accessibility Role tells a person using either VoiceOver on iOS or TalkBack on Android the type of element that is focused on.",name:"accessibilityRole",required:!1,type:{name:"AccessibilityRole"}},accessibilityStates:{defaultValue:null,description:"Accessibility State tells a person using either VoiceOver on iOS or TalkBack on Android the state of the element currently focused on.",name:"accessibilityStates",required:!1,type:{name:"AccessibilityState[]"}},accessibilityHint:{defaultValue:null,description:"An accessibility hint helps users understand what will happen when they perform an action on the accessibility element when that result is not obvious from the accessibility label.",name:"accessibilityHint",required:!1,type:{name:"string"}},accessibilityComponentType:{defaultValue:null,description:"In some cases, we also want to alert the end user of the type of selected component (i.e., that it is a \u201cbutton\u201d).\nIf we were using native buttons, this would work automatically. Since we are using javascript, we need to\nprovide a bit more context for TalkBack. To do so, you must specify the \u2018accessibilityComponentType\u2019 property\nfor any UI component. For instances, we support \u2018button\u2019, \u2018radiobutton_checked\u2019 and \u2018radiobutton_unchecked\u2019 and so on.\n@platform android",name:"accessibilityComponentType",required:!1,type:{name:'"none" | "button" | "radiobutton_checked" | "radiobutton_unchecked"'}},accessibilityLiveRegion:{defaultValue:null,description:"Indicates to accessibility services whether the user should be notified when this view changes.\nWorks for Android API >= 19 only.\nSee http://developer.android.com/reference/android/view/View.html#attr_android:accessibilityLiveRegion for references.\n@platform android",name:"accessibilityLiveRegion",required:!1,type:{name:'"none" | "polite" | "assertive"'}},importantForAccessibility:{defaultValue:null,description:"Controls how view is important for accessibility which is if it fires accessibility events\nand if it is reported to accessibility services that query the screen.\nWorks for Android only. See http://developer.android.com/reference/android/R.attr.html#importantForAccessibility for references.\n\nPossible values:\n      'auto' - The system determines whether the view is important for accessibility - default (recommended).\n      'yes' - The view is important for accessibility.\n      'no' - The view is not important for accessibility.\n      'no-hide-descendants' - The view is not important for accessibility, nor are any of its descendant views.",name:"importantForAccessibility",required:!1,type:{name:'"auto" | "yes" | "no" | "no-hide-descendants"'}},accessibilityElementsHidden:{defaultValue:null,description:"A Boolean value indicating whether the accessibility elements contained within this accessibility element\nare hidden to the screen reader.\n@platform ios",name:"accessibilityElementsHidden",required:!1,type:{name:"boolean"}},accessibilityTraits:{defaultValue:null,description:"Accessibility traits tell a person using VoiceOver what kind of element they have selected.\nIs this element a label? A button? A header? These questions are answered by accessibilityTraits.\n@platform ios",name:"accessibilityTraits",required:!1,type:{name:'"none" | "button" | "link" | "search" | "image" | "text" | "adjustable" | "header" | "summary" | "selected" | "disabled" | "plays" | "key" | "frequentUpdates" | "startsMedia" | "allowsDirectInteraction" | "pageTurn" | AccessibilityTrait[]'}},onAccessibilityTap:{defaultValue:null,description:"When `accessible` is true, the system will try to invoke this function when the user performs accessibility tap gesture.\n@platform ios",name:"onAccessibilityTap",required:!1,type:{name:"() => void"}},onMagicTap:{defaultValue:null,description:"When accessible is true, the system will invoke this function when the user performs the magic tap gesture.\n@platform ios",name:"onMagicTap",required:!1,type:{name:"() => void"}},accessibilityIgnoresInvertColors:{defaultValue:null,description:"https://facebook.github.io/react-native/docs/accessibility#accessibilityignoresinvertcolorsios\n@platform ios",name:"accessibilityIgnoresInvertColors",required:!1,type:{name:"boolean"}},enabled:{defaultValue:null,description:"If set to false, the picker will be disabled, i.e. the user will not be able to make a\nselection.\n@platform android",name:"enabled",required:!1,type:{name:"boolean"}},mode:{defaultValue:null,description:"On Android, specifies how to display the selection items when the user taps on the picker:\n\n   - 'dialog': Show a modal dialog. This is the default.\n   - 'dropdown': Shows a dropdown anchored to the picker view\n@platform android",name:"mode",required:!1,type:{name:'"dialog" | "dropdown"'}},prompt:{defaultValue:null,description:"Prompt string for this picker, used on Android in dialog mode as the title of the dialog.\n@platform android",name:"prompt",required:!1,type:{name:"string"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Picker/Picker.tsx#Picker"]={docgenInfo:d.__docgenInfo,name:"Picker",path:"src/components/Picker/Picker.tsx#Picker"})}catch(c){}try{__class.displayName="__class",__class.__docgenInfo={description:"",displayName:"__class",props:{size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:'"small" | "medium" | "large"'}},onValueChange:{defaultValue:null,description:"Callback for when an item is selected. This is called with the\nfollowing parameters:\n- itemValue: the value prop of the item that was selected\n- itemPosition: the index of the selected item in this picker",name:"onValueChange",required:!1,type:{name:"(itemValue: any, itemPosition: number) => void"}},selectedValue:{defaultValue:null,description:"Value matching value of one of the items.\nCan be a string or an integer.",name:"selectedValue",required:!1,type:{name:"any"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"StyleProp<ViewStyle>"}},testId:{defaultValue:null,description:"Used to locate this view in end-to-end tests.",name:"testId",required:!1,type:{name:"string"}},itemStyle:{defaultValue:null,description:"Style to apply to each of the item labels.\n@platform ios",name:"itemStyle",required:!1,type:{name:"StyleProp<ViewStyle>"}},hitSlop:{defaultValue:null,description:"This defines how far a touch event can start away from the view.\nTypical interface guidelines recommend touch targets that are at least\n30 - 40 points/density-independent pixels. If a Touchable view has\na height of 20 the touchable height can be extended to 40 with\nhitSlop={{top: 10, bottom: 10, left: 0, right: 0}}\nNOTE The touch area never extends past the parent view bounds and\nthe Z-index of sibling views always takes precedence if a touch\nhits two overlapping views.",name:"hitSlop",required:!1,type:{name:"Insets"}},onLayout:{defaultValue:null,description:"Invoked on mount and layout changes with\n\n{nativeEvent: { layout: {x, y, width, height}}}.",name:"onLayout",required:!1,type:{name:"(event: LayoutChangeEvent) => void"}},pointerEvents:{defaultValue:null,description:"In the absence of auto property, none is much like CSS's none value. box-none is as if you had applied the CSS class:\n\n.box-none {\n   pointer-events: none;\n}\n.box-none * {\n   pointer-events: all;\n}\n\nbox-only is the equivalent of\n\n.box-only {\n   pointer-events: all;\n}\n.box-only * {\n   pointer-events: none;\n}\n\nBut since pointerEvents does not affect layout/appearance, and we are already deviating from the spec by adding additional modes,\nwe opt to not include pointerEvents on style. On some platforms, we would need to implement it as a className anyways. Using style or not is an implementation detail of the platform.",name:"pointerEvents",required:!1,type:{name:'"box-none" | "none" | "box-only" | "auto"'}},removeClippedSubviews:{defaultValue:null,description:"This is a special performance property exposed by RCTView and is useful for scrolling content when there are many subviews,\nmost of which are offscreen. For this property to be effective, it must be applied to a view that contains many subviews that extend outside its bound.\nThe subviews must also have overflow: hidden, as should the containing view (or one of its superviews).",name:"removeClippedSubviews",required:!1,type:{name:"boolean"}},testID:{defaultValue:null,description:"Used to locate this view in end-to-end tests.",name:"testID",required:!1,type:{name:"string"}},collapsable:{defaultValue:null,description:"Views that are only used to layout their children or otherwise don't draw anything\nmay be automatically removed from the native hierarchy as an optimization.\nSet this property to false to disable this optimization and ensure that this View exists in the native view hierarchy.",name:"collapsable",required:!1,type:{name:"boolean"}},needsOffscreenAlphaCompositing:{defaultValue:null,description:"Whether this view needs to rendered offscreen and composited with an alpha in order to preserve 100% correct colors and blending behavior.\nThe default (false) falls back to drawing the component and its children\nwith an alpha applied to the paint used to draw each element instead of rendering the full component offscreen and compositing it back with an alpha value.\nThis default may be noticeable and undesired in the case where the View you are setting an opacity on\nhas multiple overlapping elements (e.g. multiple overlapping Views, or text and a background).\n\nRendering offscreen to preserve correct alpha behavior is extremely expensive\nand hard to debug for non-native developers, which is why it is not turned on by default.\nIf you do need to enable this property for an animation,\nconsider combining it with renderToHardwareTextureAndroid if the view contents are static (i.e. it doesn't need to be redrawn each frame).\nIf that property is enabled, this View will be rendered off-screen once,\nsaved in a hardware texture, and then composited onto the screen with an alpha each frame without having to switch rendering targets on the GPU.",name:"needsOffscreenAlphaCompositing",required:!1,type:{name:"boolean"}},renderToHardwareTextureAndroid:{defaultValue:null,description:"Whether this view should render itself (and all of its children) into a single hardware texture on the GPU.\n\nOn Android, this is useful for animations and interactions that only modify opacity, rotation, translation, and/or scale:\nin those cases, the view doesn't have to be redrawn and display lists don't need to be re-executed. The texture can just be\nre-used and re-composited with different parameters. The downside is that this can use up limited video memory, so this prop should be set back to false at the end of the interaction/animation.",name:"renderToHardwareTextureAndroid",required:!1,type:{name:"boolean"}},accessibilityViewIsModal:{defaultValue:null,description:"A Boolean value indicating whether VoiceOver should ignore the elements within views that are siblings of the receiver.\n@platform ios",name:"accessibilityViewIsModal",required:!1,type:{name:"boolean"}},accessibilityActions:{defaultValue:null,description:"Provides an array of custom actions available for accessibility.\n@platform ios",name:"accessibilityActions",required:!1,type:{name:"string[]"}},onAccessibilityAction:{defaultValue:null,description:"When `accessible` is true, the system will try to invoke this function\nwhen the user performs an accessibility custom action.\n@platform ios",name:"onAccessibilityAction",required:!1,type:{name:"() => void"}},shouldRasterizeIOS:{defaultValue:null,description:"Whether this view should be rendered as a bitmap before compositing.\n\nOn iOS, this is useful for animations and interactions that do not modify this component's dimensions nor its children;\nfor example, when translating the position of a static view, rasterization allows the renderer to reuse a cached bitmap of a static view\nand quickly composite it during each frame.\n\nRasterization incurs an off-screen drawing pass and the bitmap consumes memory.\nTest and measure when using this property.",name:"shouldRasterizeIOS",required:!1,type:{name:"boolean"}},onStartShouldSetResponder:{defaultValue:null,description:"A view can become the touch responder by implementing the correct negotiation methods.\nThere are two methods to ask the view if it wants to become responder:\nDoes this view want to become responder on the start of a touch?",name:"onStartShouldSetResponder",required:!1,type:{name:"(event: GestureResponderEvent) => boolean"}},onMoveShouldSetResponder:{defaultValue:null,description:'Called for every touch move on the View when it is not the responder: does this view want to "claim" touch responsiveness?',name:"onMoveShouldSetResponder",required:!1,type:{name:"(event: GestureResponderEvent) => boolean"}},onResponderEnd:{defaultValue:null,description:"If the View returns true and attempts to become the responder, one of the following will happen:",name:"onResponderEnd",required:!1,type:{name:"(event: GestureResponderEvent) => void"}},onResponderGrant:{defaultValue:null,description:"The View is now responding for touch events.\nThis is the time to highlight and show the user what is happening",name:"onResponderGrant",required:!1,type:{name:"(event: GestureResponderEvent) => void"}},onResponderReject:{defaultValue:null,description:"Something else is the responder right now and will not release it",name:"onResponderReject",required:!1,type:{name:"(event: GestureResponderEvent) => void"}},onResponderMove:{defaultValue:null,description:"If the view is responding, the following handlers can be called:\nThe user is moving their finger",name:"onResponderMove",required:!1,type:{name:"(event: GestureResponderEvent) => void"}},onResponderRelease:{defaultValue:null,description:'Fired at the end of the touch, ie "touchUp"',name:"onResponderRelease",required:!1,type:{name:"(event: GestureResponderEvent) => void"}},onResponderStart:{defaultValue:null,description:"",name:"onResponderStart",required:!1,type:{name:"(event: GestureResponderEvent) => void"}},onResponderTerminationRequest:{defaultValue:null,description:"Something else wants to become responder.\nShould this view release the responder? Returning true allows release",name:"onResponderTerminationRequest",required:!1,type:{name:"(event: GestureResponderEvent) => boolean"}},onResponderTerminate:{defaultValue:null,description:"The responder has been taken from the View.\nMight be taken by other views after a call to onResponderTerminationRequest,\nor might be taken by the OS without asking (happens with control center/ notification center on iOS)",name:"onResponderTerminate",required:!1,type:{name:"(event: GestureResponderEvent) => void"}},onStartShouldSetResponderCapture:{defaultValue:null,description:"onStartShouldSetResponder and onMoveShouldSetResponder are called with a bubbling pattern,\nwhere the deepest node is called first.\nThat means that the deepest component will become responder when multiple Views return true for *ShouldSetResponder handlers.\nThis is desirable in most cases, because it makes sure all controls and buttons are usable.\n\nHowever, sometimes a parent will want to make sure that it becomes responder.\nThis can be handled by using the capture phase.\nBefore the responder system bubbles up from the deepest component,\nit will do a capture phase, firing on*ShouldSetResponderCapture.\nSo if a parent View wants to prevent the child from becoming responder on a touch start,\nit should have a onStartShouldSetResponderCapture handler which returns true.",name:"onStartShouldSetResponderCapture",required:!1,type:{name:"(event: GestureResponderEvent) => boolean"}},onMoveShouldSetResponderCapture:{defaultValue:null,description:"onStartShouldSetResponder and onMoveShouldSetResponder are called with a bubbling pattern,\nwhere the deepest node is called first.\nThat means that the deepest component will become responder when multiple Views return true for *ShouldSetResponder handlers.\nThis is desirable in most cases, because it makes sure all controls and buttons are usable.\n\nHowever, sometimes a parent will want to make sure that it becomes responder.\nThis can be handled by using the capture phase.\nBefore the responder system bubbles up from the deepest component,\nit will do a capture phase, firing on*ShouldSetResponderCapture.\nSo if a parent View wants to prevent the child from becoming responder on a touch start,\nit should have a onStartShouldSetResponderCapture handler which returns true.",name:"onMoveShouldSetResponderCapture",required:!1,type:{name:"(event: GestureResponderEvent) => boolean"}},onTouchStart:{defaultValue:null,description:"",name:"onTouchStart",required:!1,type:{name:"(event: GestureResponderEvent) => void"}},onTouchMove:{defaultValue:null,description:"",name:"onTouchMove",required:!1,type:{name:"(event: GestureResponderEvent) => void"}},onTouchEnd:{defaultValue:null,description:"",name:"onTouchEnd",required:!1,type:{name:"(event: GestureResponderEvent) => void"}},onTouchCancel:{defaultValue:null,description:"",name:"onTouchCancel",required:!1,type:{name:"(event: GestureResponderEvent) => void"}},onTouchEndCapture:{defaultValue:null,description:"",name:"onTouchEndCapture",required:!1,type:{name:"(event: GestureResponderEvent) => void"}},accessible:{defaultValue:null,description:"When true, indicates that the view is an accessibility element.\nBy default, all the touchable elements are accessible.",name:"accessible",required:!1,type:{name:"boolean"}},accessibilityLabel:{defaultValue:null,description:"Overrides the text that's read by the screen reader when the user interacts with the element. By default, the\nlabel is constructed by traversing all the children and accumulating all the Text nodes separated by space.",name:"accessibilityLabel",required:!1,type:{name:"string"}},accessibilityRole:{defaultValue:null,description:"Accessibility Role tells a person using either VoiceOver on iOS or TalkBack on Android the type of element that is focused on.",name:"accessibilityRole",required:!1,type:{name:"AccessibilityRole"}},accessibilityStates:{defaultValue:null,description:"Accessibility State tells a person using either VoiceOver on iOS or TalkBack on Android the state of the element currently focused on.",name:"accessibilityStates",required:!1,type:{name:"AccessibilityState[]"}},accessibilityHint:{defaultValue:null,description:"An accessibility hint helps users understand what will happen when they perform an action on the accessibility element when that result is not obvious from the accessibility label.",name:"accessibilityHint",required:!1,type:{name:"string"}},accessibilityComponentType:{defaultValue:null,description:"In some cases, we also want to alert the end user of the type of selected component (i.e., that it is a \u201cbutton\u201d).\nIf we were using native buttons, this would work automatically. Since we are using javascript, we need to\nprovide a bit more context for TalkBack. To do so, you must specify the \u2018accessibilityComponentType\u2019 property\nfor any UI component. For instances, we support \u2018button\u2019, \u2018radiobutton_checked\u2019 and \u2018radiobutton_unchecked\u2019 and so on.\n@platform android",name:"accessibilityComponentType",required:!1,type:{name:'"none" | "button" | "radiobutton_checked" | "radiobutton_unchecked"'}},accessibilityLiveRegion:{defaultValue:null,description:"Indicates to accessibility services whether the user should be notified when this view changes.\nWorks for Android API >= 19 only.\nSee http://developer.android.com/reference/android/view/View.html#attr_android:accessibilityLiveRegion for references.\n@platform android",name:"accessibilityLiveRegion",required:!1,type:{name:'"none" | "polite" | "assertive"'}},importantForAccessibility:{defaultValue:null,description:"Controls how view is important for accessibility which is if it fires accessibility events\nand if it is reported to accessibility services that query the screen.\nWorks for Android only. See http://developer.android.com/reference/android/R.attr.html#importantForAccessibility for references.\n\nPossible values:\n      'auto' - The system determines whether the view is important for accessibility - default (recommended).\n      'yes' - The view is important for accessibility.\n      'no' - The view is not important for accessibility.\n      'no-hide-descendants' - The view is not important for accessibility, nor are any of its descendant views.",name:"importantForAccessibility",required:!1,type:{name:'"auto" | "yes" | "no" | "no-hide-descendants"'}},accessibilityElementsHidden:{defaultValue:null,description:"A Boolean value indicating whether the accessibility elements contained within this accessibility element\nare hidden to the screen reader.\n@platform ios",name:"accessibilityElementsHidden",required:!1,type:{name:"boolean"}},accessibilityTraits:{defaultValue:null,description:"Accessibility traits tell a person using VoiceOver what kind of element they have selected.\nIs this element a label? A button? A header? These questions are answered by accessibilityTraits.\n@platform ios",name:"accessibilityTraits",required:!1,type:{name:'"none" | "button" | "link" | "search" | "image" | "text" | "adjustable" | "header" | "summary" | "selected" | "disabled" | "plays" | "key" | "frequentUpdates" | "startsMedia" | "allowsDirectInteraction" | "pageTurn" | AccessibilityTrait[]'}},onAccessibilityTap:{defaultValue:null,description:"When `accessible` is true, the system will try to invoke this function when the user performs accessibility tap gesture.\n@platform ios",name:"onAccessibilityTap",required:!1,type:{name:"() => void"}},onMagicTap:{defaultValue:null,description:"When accessible is true, the system will invoke this function when the user performs the magic tap gesture.\n@platform ios",name:"onMagicTap",required:!1,type:{name:"() => void"}},accessibilityIgnoresInvertColors:{defaultValue:null,description:"https://facebook.github.io/react-native/docs/accessibility#accessibilityignoresinvertcolorsios\n@platform ios",name:"accessibilityIgnoresInvertColors",required:!1,type:{name:"boolean"}},enabled:{defaultValue:null,description:"If set to false, the picker will be disabled, i.e. the user will not be able to make a\nselection.\n@platform android",name:"enabled",required:!1,type:{name:"boolean"}},mode:{defaultValue:null,description:"On Android, specifies how to display the selection items when the user taps on the picker:\n\n   - 'dialog': Show a modal dialog. This is the default.\n   - 'dropdown': Shows a dropdown anchored to the picker view\n@platform android",name:"mode",required:!1,type:{name:'"dialog" | "dropdown"'}},prompt:{defaultValue:null,description:"Prompt string for this picker, used on Android in dialog mode as the title of the dialog.\n@platform android",name:"prompt",required:!1,type:{name:"string"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Picker/Picker.tsx#__class"]={docgenInfo:__class.__docgenInfo,name:"__class",path:"src/components/Picker/Picker.tsx#__class"})}catch(c){}},"./src/components/Picker/PickerItem.tsx":function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=n("./node_modules/react-native-web/dist/index.js").Picker.Item,o=i;t.default=o;try{i.displayName="PickerItem",i.__docgenInfo={description:"",displayName:"PickerItem",props:{testID:{defaultValue:null,description:"",name:"testID",required:!1,type:{name:"string"}},color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"any"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Picker/PickerItem.tsx#PickerItem"]={docgenInfo:i.__docgenInfo,name:"PickerItem",path:"src/components/Picker/PickerItem.tsx#PickerItem"})}catch(a){}}}]);
//# sourceMappingURL=11.d0633c331fa4197d9866.js.map