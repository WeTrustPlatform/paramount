(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{"./src/components/Button/BackButton.tsx":function(e,t,o){var r=o("./node_modules/@babel/runtime/helpers/interopRequireWildcard.js"),n=o("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(o("./node_modules/@babel/runtime/helpers/extends.js")),i=r(o("./node_modules/react/index.js")),s=o("./src/icons/index.ts"),l=o("./src/theme/index.ts"),d=n(o("./src/components/Button/Button.tsx")),u=(0,l.withTheme)(function(e){var t=e.theme;return i.createElement(d.default,(0,a.default)({appearance:"minimal",isInline:!0,iconBefore:i.createElement(s.Icon,{name:"arrow-left",size:24,color:t.colors.text.default}),size:"small"},e))});t.default=u},"./src/components/Button/Button.styles.ts":function(e,t,o){var r=o("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.getButtonStyles=t.getButtonVariables=void 0;var n=r(o("./node_modules/@babel/runtime/helpers/objectSpread.js")),a=r(o("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js")),i=function(e){return{appearances:{minimal:{default:{backgroundColor:e.colors.background.white,color:e.colors.text.default,focusColor:e.colors.background.greyDefault},danger:{backgroundColor:e.colors.background.white,color:e.colors.text.danger,focusColor:e.colors.background.greyDefault},primary:{backgroundColor:e.colors.background.white,color:e.colors.text.primary,focusColor:e.colors.background.greyDefault},secondary:{backgroundColor:e.colors.background.white,color:e.colors.text.secondary?e.colors.text.secondary:e.colors.text.default,focusColor:e.colors.background.greyDefault}},primary:{default:{backgroundColor:e.colors.background.greyLight,borderColor:e.colors.border.default,color:e.colors.text.default,focusColor:e.colors.background.greyDefault,loadingBackgroundColor:e.colors.background.overlay},danger:{backgroundColor:e.colors.background.dangerDefault,borderColor:e.colors.border.danger,color:"white",focusColor:e.colors.background.dangerDark,loadingBackgroundColor:e.colors.background.dangerLight},primary:{backgroundColor:e.colors.background.primaryDefault,borderColor:e.colors.border.primary,color:"white",focusColor:e.colors.background.primaryDark,loadingBackgroundColor:e.colors.background.primaryLight},secondary:{backgroundColor:e.colors.background.secondaryDefault,borderColor:e.colors.border.secondary,color:"white",focusColor:e.colors.background.secondaryDark,loadingBackgroundColor:e.colors.background.secondaryLight}},outline:{default:{backgroundColor:e.colors.background.white,borderColor:e.colors.text.default,borderWidth:3,color:e.colors.text.default,focusColor:e.colors.background.greyDefault},danger:{backgroundColor:e.colors.background.white,borderColor:e.colors.border.danger,borderWidth:3,color:e.colors.text.danger,focusColor:e.colors.background.dangerLight},primary:{backgroundColor:e.colors.background.white,borderColor:e.colors.border.primary,borderWidth:3,color:e.colors.text.primary,focusColor:e.colors.background.primaryLight},secondary:{backgroundColor:e.colors.background.white,borderColor:e.colors.border.secondary,borderWidth:3,color:e.colors.text.secondary,focusColor:e.colors.background.secondaryLight}}},disabled:{backgroundColor:e.colors.background.greyDark,color:e.colors.text.muted},sizes:{small:{borderRadius:e.controlBorderRadius.small,fontSize:e.textSizes.small.fontSize||14,height:e.controlHeights.small,paddingLeft:e.controlPaddings.small,paddingRight:e.controlPaddings.small},medium:{borderRadius:e.controlBorderRadius.medium,fontSize:e.textSizes.medium.fontSize||16,height:e.controlHeights.medium,paddingLeft:e.controlPaddings.medium,paddingRight:e.controlPaddings.medium},large:{borderRadius:e.controlBorderRadius.large,fontSize:e.textSizes.large.fontSize||20,height:e.controlHeights.large,paddingLeft:e.controlPaddings.large,paddingRight:e.controlPaddings.large}}}};t.getButtonVariables=i;t.getButtonStyles=function(e,t){var o=e.appearance,r=e.color,s=e.size,l=e.isDisabled,d=e.isLoading,u=e.isInline,c=i(t),m=c.appearances,p=c.sizes,g=c.disabled,f=(0,a.default)(c,["appearances","sizes","disabled"]),b=m[o][r],y=b.color,h=b.focusColor,S=b.loadingBackgroundColor,C=(0,a.default)(b,["color","focusColor","loadingBackgroundColor"]),_=p[s],v=_.fontSize,x=(0,a.default)(_,["fontSize"]),B=g.color,j=(0,a.default)(g,["color"]);return{buttonStyle:(0,n.default)({},l?(0,n.default)({},j,x):(0,n.default)({},x,f,C,d?{backgroundColor:S}:{}),u?{alignSelf:"flex-start",flexDirection:"row",flexWrap:"wrap"}:{}),focusColor:h,textStyle:{alignItems:"center",color:l?B:y,display:"flex",fontSize:v,fontWeight:"600",justifyContent:"center",textAlign:"center"}}};try{i.displayName="getButtonVariables",i.__docgenInfo={description:"",displayName:"getButtonVariables",props:{colors:{defaultValue:null,description:"",name:"colors",required:!0,type:{name:"Colors"}},fills:{defaultValue:null,description:"",name:"fills",required:!0,type:{name:"Fills"}},fontFamilies:{defaultValue:null,description:"",name:"fontFamilies",required:!0,type:{name:"FontFamilies"}},fontWeights:{defaultValue:null,description:"",name:"fontWeights",required:!0,type:{name:"FontWeights"}},headingSizes:{defaultValue:null,description:"",name:"headingSizes",required:!0,type:{name:"HeadingSizes"}},paragraphSizes:{defaultValue:null,description:"",name:"paragraphSizes",required:!0,type:{name:"ParagraphSizes"}},textSizes:{defaultValue:null,description:"",name:"textSizes",required:!0,type:{name:"TextSizes"}},elevations:{defaultValue:null,description:"",name:"elevations",required:!0,type:{name:"ViewStyle[]"}},controlPaddings:{defaultValue:null,description:"",name:"controlPaddings",required:!0,type:{name:"ControlSizes"}},controlHeights:{defaultValue:null,description:"",name:"controlHeights",required:!0,type:{name:"ControlSizes"}},controlBorderRadius:{defaultValue:null,description:"",name:"controlBorderRadius",required:!0,type:{name:"ControlSizes"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Button/Button.styles.ts#getButtonVariables"]={docgenInfo:i.__docgenInfo,name:"getButtonVariables",path:"src/components/Button/Button.styles.ts#getButtonVariables"})}catch(s){}},"./src/components/Button/Button.tsx":function(e,t,o){var r=o("./node_modules/@babel/runtime/helpers/interopRequireWildcard.js"),n=o("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.Button=void 0;var a=n(o("./node_modules/@babel/runtime/helpers/extends.js")),i=n(o("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js")),s=r(o("./node_modules/react/index.js")),l=o("./node_modules/react-native-web/dist/index.js"),d=o("./src/theme/index.ts"),u=o("./src/utils/mergeStyles.ts"),c=o("./src/components/Layout/index.ts"),m=o("./src/components/Loading/index.ts"),p=o("./src/components/Typography/index.ts"),g=o("./src/components/Button/Button.styles.ts"),f=(0,d.withTheme)(function(e){var t=e.appearance,o=void 0===t?"primary":t,r=e.title,n=e.color,d=void 0===n?"default":n,f=e.getStyles,b=e.iconAfter,y=e.iconBefore,h=e.iconLoading,S=(e.isActive,e.isDisabled),C=void 0!==S&&S,_=e.isInline,v=void 0!==_&&_,x=e.isLoading,B=void 0!==x&&x,j=e.onPress,P=void 0===j?function(){}:j,z=e.size,R=void 0===z?"medium":z,O=e.theme,V=e.testID,k=(0,i.default)(e,["appearance","title","color","getStyles","iconAfter","iconBefore","iconLoading","isActive","isDisabled","isInline","isLoading","onPress","size","theme","testID"]),q=(0,u.mergeStyles)(g.getButtonStyles,f)({appearance:o,color:d,isDisabled:C,isInline:v,isLoading:B,size:R},O),D=q.buttonStyle,w=q.textStyle,E=q.focusColor;return s.createElement(l.TouchableHighlight,(0,a.default)({accessible:!0,accessibilityRole:"button",underlayColor:E,disabled:!(!C&&!B),onPress:P,style:D,testID:V},k),s.createElement(l.View,{style:{alignItems:"center",flexDirection:"row",height:"100%",justifyContent:"center"}},y,s.createElement(c.Spacing,{paddingLeft:y?1:0,paddingRight:b?1:0},B?h||s.createElement(m.LoadingDots,{color:w.color}):r?s.createElement(p.Text,{getStyles:function(){return{textStyle:w}}},r):null),b))});t.Button=f;var b=f;t.default=b},"./src/components/Button/ButtonGroup.tsx":function(e,t,o){var r=o("./node_modules/@babel/runtime/helpers/interopRequireWildcard.js"),n=o("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(o("./node_modules/@babel/runtime/helpers/objectSpread.js")),i=r(o("./node_modules/react/index.js")),s=o("./src/theme/index.ts"),l=o("./src/components/Layout/index.ts"),d={horizontal:"row",vertical:"column"},u=(0,s.withTheme)(function(e){var t=e.children,o=e.direction,r=void 0===o?"vertical":o,n=e.theme,s=i.Children.count(t),u=i.Children.map(t,function(e,t){if(!i.isValidElement(e))return e;var o=e,l=o.props.size||"medium",d=n.controlBorderRadius[l];return i.cloneElement(o,{getStyles:function(){return{buttonStyle:(0,a.default)({},"vertical"===r?(0,a.default)({borderBottomWidth:1,borderColor:n.colors.border.default,borderRadius:0,borderWidth:0,elevation:0},0===t&&{borderTopLeftRadius:d,borderTopRightRadius:d},s-1===t&&{borderBottomLeftRadius:d,borderBottomRightRadius:d,borderBottomWidth:0}):(0,a.default)({borderColor:n.colors.border.default,borderLeftWidth:0,borderRadius:0,elevation:0},0===t&&{borderBottomLeftRadius:d,borderTopLeftRadius:d},s-1===t&&{borderBottomRightRadius:d,borderTopRightRadius:d}))}}})});return i.createElement(l.Box,{flexDirection:d[r]},u)});t.default=u},"./src/components/Button/index.ts":function(e,t,o){var r=o("./node_modules/@babel/runtime/helpers/interopRequireDefault.js"),n=o("./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Button",{enumerable:!0,get:function(){return a.default}}),Object.defineProperty(t,"ButtonProps",{enumerable:!0,get:function(){return a.ButtonProps}}),Object.defineProperty(t,"ButtonGroup",{enumerable:!0,get:function(){return i.default}}),Object.defineProperty(t,"ButtonGroupProps",{enumerable:!0,get:function(){return i.ButtonGroupProps}}),Object.defineProperty(t,"BackButton",{enumerable:!0,get:function(){return s.default}});var a=n(o("./src/components/Button/Button.tsx")),i=n(o("./src/components/Button/ButtonGroup.tsx")),s=r(o("./src/components/Button/BackButton.tsx"))},"./src/components/Counter/Counter.styles.ts":function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.getCounterStyles=t.getCounterVariables=void 0;var o=function(e){return{container:{display:"flex",flexDirection:"row"},count:{justifyContent:"center"},counter:{alignItems:"center",borderColor:e.colors.border.primary,borderRadius:999,borderWidth:1,display:"flex",height:40,justifyContent:"center",width:40},disabled:{borderColor:e.colors.border.dark}}};t.getCounterVariables=o;var r=function(e){var t=o(e),r=t.container,n=t.counter;return{containerStyle:r,countStyle:t.count,counterStyle:n,disabledStyle:t.disabled,textStyle:{}}};t.getCounterStyles=r;try{o.displayName="getCounterVariables",o.__docgenInfo={description:"",displayName:"getCounterVariables",props:{colors:{defaultValue:null,description:"",name:"colors",required:!0,type:{name:"Colors"}},fills:{defaultValue:null,description:"",name:"fills",required:!0,type:{name:"Fills"}},fontFamilies:{defaultValue:null,description:"",name:"fontFamilies",required:!0,type:{name:"FontFamilies"}},fontWeights:{defaultValue:null,description:"",name:"fontWeights",required:!0,type:{name:"FontWeights"}},headingSizes:{defaultValue:null,description:"",name:"headingSizes",required:!0,type:{name:"HeadingSizes"}},paragraphSizes:{defaultValue:null,description:"",name:"paragraphSizes",required:!0,type:{name:"ParagraphSizes"}},textSizes:{defaultValue:null,description:"",name:"textSizes",required:!0,type:{name:"TextSizes"}},elevations:{defaultValue:null,description:"",name:"elevations",required:!0,type:{name:"ViewStyle[]"}},controlPaddings:{defaultValue:null,description:"",name:"controlPaddings",required:!0,type:{name:"ControlSizes"}},controlHeights:{defaultValue:null,description:"",name:"controlHeights",required:!0,type:{name:"ControlSizes"}},controlBorderRadius:{defaultValue:null,description:"",name:"controlBorderRadius",required:!0,type:{name:"ControlSizes"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Counter/Counter.styles.ts#getCounterVariables"]={docgenInfo:o.__docgenInfo,name:"getCounterVariables",path:"src/components/Counter/Counter.styles.ts#getCounterVariables"})}catch(n){}try{r.displayName="getCounterStyles",r.__docgenInfo={description:"",displayName:"getCounterStyles",props:{colors:{defaultValue:null,description:"",name:"colors",required:!0,type:{name:"Colors"}},fills:{defaultValue:null,description:"",name:"fills",required:!0,type:{name:"Fills"}},fontFamilies:{defaultValue:null,description:"",name:"fontFamilies",required:!0,type:{name:"FontFamilies"}},fontWeights:{defaultValue:null,description:"",name:"fontWeights",required:!0,type:{name:"FontWeights"}},headingSizes:{defaultValue:null,description:"",name:"headingSizes",required:!0,type:{name:"HeadingSizes"}},paragraphSizes:{defaultValue:null,description:"",name:"paragraphSizes",required:!0,type:{name:"ParagraphSizes"}},textSizes:{defaultValue:null,description:"",name:"textSizes",required:!0,type:{name:"TextSizes"}},elevations:{defaultValue:null,description:"",name:"elevations",required:!0,type:{name:"ViewStyle[]"}},controlPaddings:{defaultValue:null,description:"",name:"controlPaddings",required:!0,type:{name:"ControlSizes"}},controlHeights:{defaultValue:null,description:"",name:"controlHeights",required:!0,type:{name:"ControlSizes"}},controlBorderRadius:{defaultValue:null,description:"",name:"controlBorderRadius",required:!0,type:{name:"ControlSizes"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Counter/Counter.styles.ts#getCounterStyles"]={docgenInfo:r.__docgenInfo,name:"getCounterStyles",path:"src/components/Counter/Counter.styles.ts#getCounterStyles"})}catch(n){}},"./src/components/Counter/Counter.tsx":function(e,t,o){var r=o("./node_modules/@babel/runtime/helpers/interopRequireWildcard.js"),n=o("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.Counter=void 0;var a=n(o("./node_modules/@babel/runtime/helpers/objectSpread.js")),i=r(o("./node_modules/react/index.js")),s=o("./node_modules/react-native-web/dist/index.js"),l=o("./src/icons/index.ts"),d=o("./src/theme/index.ts"),u=o("./src/utils/mergeStyles.ts"),c=o("./src/components/Layout/index.ts"),m=o("./src/components/Typography/index.ts"),p=o("./src/components/Counter/Counter.styles.ts"),g=(0,d.withTheme)(function(e){var t=e.count,o=e.component,r=e.max,n=e.min,d=e.onIncrement,g=e.onDecrement,f=e.getStyles,b=e.theme,y=(0,u.mergeStyles)(p.getCounterStyles,f)(b),h=y.containerStyle,S=y.counterStyle,C=y.countStyle,_=y.textStyle,v=y.disabledStyle,x=n===t,B=r===t;return i.createElement(s.View,{style:h},i.createElement(c.Spacing,{paddingRight:2},i.createElement(s.TouchableOpacity,{activeOpacity:.7,style:(0,a.default)({},S,x&&v),disabled:x,onPress:x?void 0:g},i.createElement(l.Icon,{name:"minus",size:16,color:x?b.colors.text.muted:b.colors.text.primary}))),o||i.createElement(s.View,{style:C},i.createElement(m.Text,{getStyles:function(){return{textStyle:_}}},"".concat(t))),i.createElement(c.Spacing,{paddingLeft:2},i.createElement(s.TouchableOpacity,{activeOpacity:.7,style:(0,a.default)({},S,B&&v),disabled:B,onPress:B?void 0:d},i.createElement(l.Icon,{name:"plus",size:16,color:B?b.colors.text.muted:b.colors.text.primary}))))});t.Counter=g;var f=g;t.default=f},"./src/components/Counter/index.ts":function(e,t,o){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Counter",{enumerable:!0,get:function(){return r.Counter}}),Object.defineProperty(t,"CounterProps",{enumerable:!0,get:function(){return r.CounterProps}});var r=o("./src/components/Counter/Counter.tsx")},"./src/components/Loading/LoadingDots.tsx":function(e,t,o){var r=o("./node_modules/@babel/runtime/helpers/interopRequireWildcard.js"),n=o("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(o("./node_modules/@babel/runtime/helpers/classCallCheck.js")),i=n(o("./node_modules/@babel/runtime/helpers/createClass.js")),s=n(o("./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js")),l=n(o("./node_modules/@babel/runtime/helpers/getPrototypeOf.js")),d=n(o("./node_modules/@babel/runtime/helpers/inherits.js")),u=r(o("./node_modules/react/index.js")),c=o("./node_modules/react-native-web/dist/index.js"),m=function(e){function t(e){var o;return(0,a.default)(this,t),(o=(0,s.default)(this,(0,l.default)(t).call(this,e))).animationState=void 0,o.animationState={dotOpacities:o.initializeDots(),shouldAnimate:!0,targetOpacity:1},o}return(0,d.default)(t,e),(0,i.default)(t,[{key:"initializeDots",value:function(){for(var e=[],t=0;t<this.props.numberOfDots;t++){var o=new c.Animated.Value(this.props.minOpacity);e.push(o)}return e}},{key:"componentDidMount",value:function(){this.animateDots.bind(this)(0)}},{key:"componentWillUnmount",value:function(){this.animationState.shouldAnimate=!1}},{key:"animateDots",value:function(e){if(this.animationState.shouldAnimate){if(e>=this.animationState.dotOpacities.length){e=0;var t=this.props.minOpacity;this.animationState.targetOpacity=this.animationState.targetOpacity===t?1:t}var o=e+1;c.Animated.timing(this.animationState.dotOpacities[e],{duration:this.props.duration,toValue:this.animationState.targetOpacity}).start(this.animateDots.bind(this,o))}}},{key:"render",value:function(){var e=this.props,t=e.size,o=e.color,r=this.animationState.dotOpacities.map(function(e,r){return u.createElement(c.Animated.View,{key:r,style:{backgroundColor:o,borderRadius:"50%",height:t,marginLeft:3,marginRight:3,opacity:e,width:t}})});return u.createElement(c.View,{style:{alignItems:"center",flexDirection:"row",justifyContent:"center"}},r)}}]),t}(u.Component);m.defaultProps={color:"#aaa",duration:300,minOpacity:0,numberOfDots:3,size:10};var p=m;t.default=p;try{m.displayName="LoadingDots",m.__docgenInfo={description:"Ported from https://github.com/adorableio/react-native-animated-ellipsis",displayName:"LoadingDots",props:{numberOfDots:{defaultValue:{value:"3"},description:"",name:"numberOfDots",required:!0,type:{name:"number"}},duration:{defaultValue:{value:"300"},description:"",name:"duration",required:!0,type:{name:"number"}},minOpacity:{defaultValue:{value:"0"},description:"",name:"minOpacity",required:!0,type:{name:"number"}},color:{defaultValue:{value:"#aaa"},description:"",name:"color",required:!0,type:{name:"string"}},size:{defaultValue:{value:"10"},description:"",name:"size",required:!0,type:{name:"number"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Loading/LoadingDots.tsx#LoadingDots"]={docgenInfo:m.__docgenInfo,name:"LoadingDots",path:"src/components/Loading/LoadingDots.tsx#LoadingDots"})}catch(g){}},"./src/components/Loading/index.ts":function(e,t,o){var r=o("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"LoadingDots",{enumerable:!0,get:function(){return n.default}});var n=r(o("./src/components/Loading/LoadingDots.tsx"))},"./src/components/Progress/Progress.mdx":function(e,t,o){var r=o("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(o("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js")),a=r(o("./node_modules/@babel/runtime/helpers/classCallCheck.js")),i=r(o("./node_modules/@babel/runtime/helpers/createClass.js")),s=r(o("./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js")),l=r(o("./node_modules/@babel/runtime/helpers/getPrototypeOf.js")),d=r(o("./node_modules/@babel/runtime/helpers/inherits.js")),u=r(o("./node_modules/react/index.js")),c=o("./node_modules/@mdx-js/tag/dist/index.js"),m=o("./node_modules/react-powerplug/dist/react-powerplug.esm.js"),p=o("./node_modules/docz/dist/index.m.js"),g=r(o("./src/components/Progress/Progress.tsx")),f=o("./src/components/Layout/index.ts"),b=o("./src/components/Button/index.ts"),y=o("./src/components/Counter/index.ts"),h=function(e){function t(e){var o;return(0,a.default)(this,t),(o=(0,s.default)(this,(0,l.default)(t).call(this,e))).layout=null,o}return(0,d.default)(t,e),(0,i.default)(t,[{key:"render",value:function(){var e=this.props,t=e.components,o=(0,n.default)(e,["components"]);return u.default.createElement(c.MDXTag,{name:"wrapper",components:t},u.default.createElement(c.MDXTag,{name:"h1",components:t,props:{id:"progress"}},"Progress"),u.default.createElement(c.MDXTag,{name:"h3",components:t,props:{id:"usage"}},"Usage"),u.default.createElement(p.Playground,{__position:0,__code:'<CounterContainer initial={0}>\n  {({ count, incBy, decBy }) => (\n    <Box>\n      <Progress\n        percent={count}\n        size="large"\n        getStyles={(props, theme) => ({\n          containerStyle: {},\n          progressStyle: {},\n        })}\n      />\n      <Counter\n        count={count}\n        onDecrement={() => decBy(10)}\n        onIncrement={() => incBy(10)}\n        min={0}\n        max={100}\n      />\n    </Box>\n  )}\n</CounterContainer>',__scope:{props:this?this.props:o,CounterContainer:m.Counter,Progress:g.default,Box:f.Box,Button:b.Button,Counter:y.Counter}},u.default.createElement(m.Counter,{initial:0},function(e){var t=e.count,o=e.incBy,r=e.decBy;return u.default.createElement(f.Box,null,u.default.createElement(g.default,{percent:t,size:"large",getStyles:function(e,t){return{containerStyle:{},progressStyle:{}}}}),u.default.createElement(y.Counter,{count:t,onDecrement:function(){return r(10)},onIncrement:function(){return o(10)},min:0,max:100}))})),u.default.createElement(c.MDXTag,{name:"h3",components:t,props:{id:"props"}},"Props"),u.default.createElement(p.PropsTable,{of:g.default}))}}]),t}(u.default.Component);t.default=h},"./src/components/Progress/Progress.styles.ts":function(e,t,o){var r=o("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.getProgressStyles=t.getProgressVariables=void 0;var n=r(o("./node_modules/@babel/runtime/helpers/objectSpread.js")),a=function(e){return{container:{backgroundColor:e.colors.background.greyDefault},progress:{backgroundColor:e.colors.background.primaryDefault,height:"100%"},size:{small:{borderRadius:999,height:16},medium:{borderRadius:999,height:24},large:{borderRadius:999,height:32}}}};t.getProgressVariables=a;t.getProgressStyles=function(e,t){var o=e.size,r=a(t),i=r.size[o];return{containerStyle:(0,n.default)({},i,r.container),progressStyle:(0,n.default)({},i,r.progress)}};try{a.displayName="getProgressVariables",a.__docgenInfo={description:"",displayName:"getProgressVariables",props:{colors:{defaultValue:null,description:"",name:"colors",required:!0,type:{name:"Colors"}},fills:{defaultValue:null,description:"",name:"fills",required:!0,type:{name:"Fills"}},fontFamilies:{defaultValue:null,description:"",name:"fontFamilies",required:!0,type:{name:"FontFamilies"}},fontWeights:{defaultValue:null,description:"",name:"fontWeights",required:!0,type:{name:"FontWeights"}},headingSizes:{defaultValue:null,description:"",name:"headingSizes",required:!0,type:{name:"HeadingSizes"}},paragraphSizes:{defaultValue:null,description:"",name:"paragraphSizes",required:!0,type:{name:"ParagraphSizes"}},textSizes:{defaultValue:null,description:"",name:"textSizes",required:!0,type:{name:"TextSizes"}},elevations:{defaultValue:null,description:"",name:"elevations",required:!0,type:{name:"ViewStyle[]"}},controlPaddings:{defaultValue:null,description:"",name:"controlPaddings",required:!0,type:{name:"ControlSizes"}},controlHeights:{defaultValue:null,description:"",name:"controlHeights",required:!0,type:{name:"ControlSizes"}},controlBorderRadius:{defaultValue:null,description:"",name:"controlBorderRadius",required:!0,type:{name:"ControlSizes"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Progress/Progress.styles.ts#getProgressVariables"]={docgenInfo:a.__docgenInfo,name:"getProgressVariables",path:"src/components/Progress/Progress.styles.ts#getProgressVariables"})}catch(i){}},"./src/components/Progress/Progress.tsx":function(e,t,o){var r=o("./node_modules/@babel/runtime/helpers/interopRequireWildcard.js"),n=o("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.Progress=void 0;var a=n(o("./node_modules/@babel/runtime/helpers/objectSpread.js")),i=r(o("./node_modules/react/index.js")),s=o("./node_modules/react-native-web/dist/index.js"),l=o("./src/theme/index.ts"),d=o("./src/utils/mergeStyles.ts"),u=o("./src/components/Progress/Progress.styles.ts"),c=(0,l.withTheme)(function(e){var t=e.percent,o=void 0===t?0:t,r=e.size,n=void 0===r?"medium":r,l=e.getStyles,c=e.theme,m=e.testID,p=(0,d.mergeStyles)(u.getProgressStyles,l)({size:n},c),g=p.containerStyle,f=p.progressStyle;return i.createElement(s.View,{style:g,testID:m},i.createElement(s.View,{accessibilityRole:"web"===s.Platform.OS?"progress":"none",style:(0,a.default)({width:"".concat(o,"%")},f)}))});t.Progress=c;var m=c;t.default=m},"./src/icons/Icon.web.tsx":function(e,t,o){var r=o("./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(o("./node_modules/react/index.js")),a=r(o("./node_modules/react-icons/fi/index.js"));t.default=function(e){var t=e.name,o=e.color,r=e.size,i=a["Fi".concat(function(e){var t=e.replace(/(\-\w)/g,function(e){return e[1].toUpperCase()});return t.charAt(0).toUpperCase()+t.slice(1)}(t))];return n.createElement(i,{color:o,size:r})};try{Iconweb.displayName="Iconweb",Iconweb.__docgenInfo={description:"",displayName:"Iconweb",props:{}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/icons/Icon.web.tsx#Iconweb"]={docgenInfo:Iconweb.__docgenInfo,name:"Iconweb",path:"src/icons/Icon.web.tsx#Iconweb"})}catch(i){}},"./src/icons/index.ts":function(e,t,o){var r=o("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Icon",{enumerable:!0,get:function(){return n.default}});var n=r(o("./src/icons/Icon.web.tsx"))}}]);
//# sourceMappingURL=20.20cf0d8d264414702445.js.map