(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{"./src/components/Button/BackButton.tsx":function(e,t,o){var n=o("./node_modules/@babel/runtime/helpers/interopRequireWildcard.js"),r=o("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=r(o("./node_modules/@babel/runtime/helpers/extends.js")),a=n(o("./node_modules/react/index.js")),s=o("./src/icons/index.ts"),i=o("./src/theme/index.ts"),d=r(o("./src/components/Button/Button.tsx")),u=(0,i.withTheme)(function(e){var t=e.theme;return a.createElement(d.default,(0,l.default)({appearance:"minimal",isInline:!0,iconBefore:a.createElement(s.Icon,{name:"arrow-left",size:24,color:t.colors.text.default}),size:"small"},e))});t.default=u},"./src/components/Button/Button.styles.ts":function(e,t,o){var n=o("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.getButtonStyles=t.getButtonVariables=void 0;var r=n(o("./node_modules/@babel/runtime/helpers/objectSpread.js")),l=n(o("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js")),a=function(e){return{appearances:{minimal:{default:{backgroundColor:e.colors.background.white,color:e.colors.text.default,focusColor:e.colors.background.greyDefault},danger:{backgroundColor:e.colors.background.white,color:e.colors.text.danger,focusColor:e.colors.background.greyDefault},primary:{backgroundColor:e.colors.background.white,color:e.colors.text.primary,focusColor:e.colors.background.greyDefault},secondary:{backgroundColor:e.colors.background.white,color:e.colors.text.secondary?e.colors.text.secondary:e.colors.text.default,focusColor:e.colors.background.greyDefault}},primary:{default:{backgroundColor:e.colors.background.greyLight,borderColor:e.colors.border.default,color:e.colors.text.default,focusColor:e.colors.background.greyDefault,loadingBackgroundColor:e.colors.background.overlay},danger:{backgroundColor:e.colors.background.dangerDefault,borderColor:e.colors.border.danger,color:"white",focusColor:e.colors.background.dangerDark,loadingBackgroundColor:e.colors.background.dangerLight},primary:{backgroundColor:e.colors.background.primaryDefault,borderColor:e.colors.border.primary,color:"white",focusColor:e.colors.background.primaryDark,loadingBackgroundColor:e.colors.background.primaryLight},secondary:{backgroundColor:e.colors.background.secondaryDefault,borderColor:e.colors.border.secondary,color:"white",focusColor:e.colors.background.secondaryDark,loadingBackgroundColor:e.colors.background.secondaryLight}},outline:{default:{backgroundColor:e.colors.background.white,borderColor:e.colors.text.default,borderWidth:3,color:e.colors.text.default,focusColor:e.colors.background.greyDefault},danger:{backgroundColor:e.colors.background.white,borderColor:e.colors.border.danger,borderWidth:3,color:e.colors.text.danger,focusColor:e.colors.background.dangerLight},primary:{backgroundColor:e.colors.background.white,borderColor:e.colors.border.primary,borderWidth:3,color:e.colors.text.primary,focusColor:e.colors.background.primaryLight},secondary:{backgroundColor:e.colors.background.white,borderColor:e.colors.border.secondary,borderWidth:3,color:e.colors.text.secondary,focusColor:e.colors.background.secondaryLight}}},disabled:{backgroundColor:e.colors.background.greyDark,color:e.colors.text.muted},sizes:{small:{borderRadius:e.controlBorderRadius.small,fontSize:e.textSizes.small.fontSize||14,height:e.controlHeights.small,paddingLeft:e.controlPaddings.small,paddingRight:e.controlPaddings.small},medium:{borderRadius:e.controlBorderRadius.medium,fontSize:e.textSizes.medium.fontSize||16,height:e.controlHeights.medium,paddingLeft:e.controlPaddings.medium,paddingRight:e.controlPaddings.medium},large:{borderRadius:e.controlBorderRadius.large,fontSize:e.textSizes.large.fontSize||20,height:e.controlHeights.large,paddingLeft:e.controlPaddings.large,paddingRight:e.controlPaddings.large}}}};t.getButtonVariables=a;t.getButtonStyles=function(e,t){var o=e.appearance,n=e.color,s=e.size,i=e.isDisabled,d=e.isLoading,u=e.isInline,c=a(t),m=c.appearances,p=c.sizes,f=c.disabled,b=(0,l.default)(c,["appearances","sizes","disabled"]),g=m[o][n],h=g.color,y=g.focusColor,_=g.loadingBackgroundColor,C=(0,l.default)(g,["color","focusColor","loadingBackgroundColor"]),x=p[s],v=x.fontSize,B=(0,l.default)(x,["fontSize"]),M=f.color,S=(0,l.default)(f,["color"]);return{buttonStyle:(0,r.default)({},i?(0,r.default)({},S,B):(0,r.default)({},B,b,C,d?{backgroundColor:_}:{}),u?{alignSelf:"flex-start",flexDirection:"row",flexWrap:"wrap"}:{}),focusColor:y,textStyle:{alignItems:"center",color:i?M:h,display:"flex",fontSize:v,fontWeight:"600",justifyContent:"center",textAlign:"center"}}};try{a.displayName="getButtonVariables",a.__docgenInfo={description:"",displayName:"getButtonVariables",props:{colors:{defaultValue:null,description:"",name:"colors",required:!0,type:{name:"Colors"}},fills:{defaultValue:null,description:"",name:"fills",required:!0,type:{name:"Fills"}},fontFamilies:{defaultValue:null,description:"",name:"fontFamilies",required:!0,type:{name:"FontFamilies"}},fontWeights:{defaultValue:null,description:"",name:"fontWeights",required:!0,type:{name:"FontWeights"}},headingSizes:{defaultValue:null,description:"",name:"headingSizes",required:!0,type:{name:"HeadingSizes"}},paragraphSizes:{defaultValue:null,description:"",name:"paragraphSizes",required:!0,type:{name:"ParagraphSizes"}},textSizes:{defaultValue:null,description:"",name:"textSizes",required:!0,type:{name:"TextSizes"}},elevations:{defaultValue:null,description:"",name:"elevations",required:!0,type:{name:"ViewStyle[]"}},controlPaddings:{defaultValue:null,description:"",name:"controlPaddings",required:!0,type:{name:"ControlSizes"}},controlHeights:{defaultValue:null,description:"",name:"controlHeights",required:!0,type:{name:"ControlSizes"}},controlBorderRadius:{defaultValue:null,description:"",name:"controlBorderRadius",required:!0,type:{name:"ControlSizes"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Button/Button.styles.ts#getButtonVariables"]={docgenInfo:a.__docgenInfo,name:"getButtonVariables",path:"src/components/Button/Button.styles.ts#getButtonVariables"})}catch(s){}},"./src/components/Button/Button.tsx":function(e,t,o){var n=o("./node_modules/@babel/runtime/helpers/interopRequireWildcard.js"),r=o("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.Button=void 0;var l=r(o("./node_modules/@babel/runtime/helpers/extends.js")),a=r(o("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js")),s=n(o("./node_modules/react/index.js")),i=o("./node_modules/react-native-web/dist/index.js"),d=o("./src/theme/index.ts"),u=o("./src/utils/mergeStyles.ts"),c=o("./src/components/Layout/index.ts"),m=o("./src/components/Loading/index.ts"),p=o("./src/components/Typography/index.ts"),f=o("./src/components/Button/Button.styles.ts"),b=(0,d.withTheme)(function(e){var t=e.appearance,o=void 0===t?"primary":t,n=e.title,r=e.color,d=void 0===r?"default":r,b=e.getStyles,g=e.iconAfter,h=e.iconBefore,y=e.iconLoading,_=(e.isActive,e.isDisabled),C=void 0!==_&&_,x=e.isInline,v=void 0!==x&&x,B=e.isLoading,M=void 0!==B&&B,S=e.onPress,j=void 0===S?function(){}:S,O=e.size,E=void 0===O?"medium":O,P=e.theme,T=e.testID,R=(0,a.default)(e,["appearance","title","color","getStyles","iconAfter","iconBefore","iconLoading","isActive","isDisabled","isInline","isLoading","onPress","size","theme","testID"]),w=(0,u.mergeStyles)(f.getButtonStyles,b)({appearance:o,color:d,isDisabled:C,isInline:v,isLoading:M,size:E},P),k=w.buttonStyle,D=w.textStyle,I=w.focusColor;return s.createElement(i.TouchableHighlight,(0,l.default)({accessible:!0,accessibilityRole:"button",underlayColor:I,disabled:!(!C&&!M),onPress:j,style:k,testID:T},R),s.createElement(i.View,{style:{alignItems:"center",flexDirection:"row",height:"100%",justifyContent:"center"}},h,s.createElement(c.Spacing,{paddingLeft:h?1:0,paddingRight:g?1:0},M?y||s.createElement(m.LoadingDots,{color:D.color}):n?s.createElement(p.Text,{getStyles:function(){return{textStyle:D}}},n):null),g))});t.Button=b;var g=b;t.default=g},"./src/components/Button/ButtonGroup.tsx":function(e,t,o){var n=o("./node_modules/@babel/runtime/helpers/interopRequireWildcard.js"),r=o("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=r(o("./node_modules/@babel/runtime/helpers/objectSpread.js")),a=n(o("./node_modules/react/index.js")),s=o("./src/theme/index.ts"),i=o("./src/components/Layout/index.ts"),d={horizontal:"row",vertical:"column"},u=(0,s.withTheme)(function(e){var t=e.children,o=e.direction,n=void 0===o?"vertical":o,r=e.theme,s=a.Children.count(t),u=a.Children.map(t,function(e,t){if(!a.isValidElement(e))return e;var o=e,i=o.props.size||"medium",d=r.controlBorderRadius[i];return a.cloneElement(o,{getStyles:function(){return{buttonStyle:(0,l.default)({},"vertical"===n?(0,l.default)({borderBottomWidth:1,borderColor:r.colors.border.default,borderRadius:0,borderWidth:0,elevation:0},0===t&&{borderTopLeftRadius:d,borderTopRightRadius:d},s-1===t&&{borderBottomLeftRadius:d,borderBottomRightRadius:d,borderBottomWidth:0}):(0,l.default)({borderColor:r.colors.border.default,borderLeftWidth:0,borderRadius:0,elevation:0},0===t&&{borderBottomLeftRadius:d,borderTopLeftRadius:d},s-1===t&&{borderBottomRightRadius:d,borderTopRightRadius:d}))}}})});return a.createElement(i.Box,{flexDirection:d[n]},u)});t.default=u},"./src/components/Button/index.ts":function(e,t,o){var n=o("./node_modules/@babel/runtime/helpers/interopRequireDefault.js"),r=o("./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Button",{enumerable:!0,get:function(){return l.default}}),Object.defineProperty(t,"ButtonProps",{enumerable:!0,get:function(){return l.ButtonProps}}),Object.defineProperty(t,"ButtonGroup",{enumerable:!0,get:function(){return a.default}}),Object.defineProperty(t,"ButtonGroupProps",{enumerable:!0,get:function(){return a.ButtonGroupProps}}),Object.defineProperty(t,"BackButton",{enumerable:!0,get:function(){return s.default}});var l=r(o("./src/components/Button/Button.tsx")),a=r(o("./src/components/Button/ButtonGroup.tsx")),s=n(o("./src/components/Button/BackButton.tsx"))},"./src/components/Loading/LoadingDots.tsx":function(e,t,o){var n=o("./node_modules/@babel/runtime/helpers/interopRequireWildcard.js"),r=o("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=r(o("./node_modules/@babel/runtime/helpers/classCallCheck.js")),a=r(o("./node_modules/@babel/runtime/helpers/createClass.js")),s=r(o("./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js")),i=r(o("./node_modules/@babel/runtime/helpers/getPrototypeOf.js")),d=r(o("./node_modules/@babel/runtime/helpers/inherits.js")),u=n(o("./node_modules/react/index.js")),c=o("./node_modules/react-native-web/dist/index.js"),m=function(e){function t(e){var o;return(0,l.default)(this,t),(o=(0,s.default)(this,(0,i.default)(t).call(this,e))).animationState=void 0,o.animationState={dotOpacities:o.initializeDots(),shouldAnimate:!0,targetOpacity:1},o}return(0,d.default)(t,e),(0,a.default)(t,[{key:"initializeDots",value:function(){for(var e=[],t=0;t<this.props.numberOfDots;t++){var o=new c.Animated.Value(this.props.minOpacity);e.push(o)}return e}},{key:"componentDidMount",value:function(){this.animateDots.bind(this)(0)}},{key:"componentWillUnmount",value:function(){this.animationState.shouldAnimate=!1}},{key:"animateDots",value:function(e){if(this.animationState.shouldAnimate){if(e>=this.animationState.dotOpacities.length){e=0;var t=this.props.minOpacity;this.animationState.targetOpacity=this.animationState.targetOpacity===t?1:t}var o=e+1;c.Animated.timing(this.animationState.dotOpacities[e],{duration:this.props.duration,toValue:this.animationState.targetOpacity}).start(this.animateDots.bind(this,o))}}},{key:"render",value:function(){var e=this.props,t=e.size,o=e.color,n=this.animationState.dotOpacities.map(function(e,n){return u.createElement(c.Animated.View,{key:n,style:{backgroundColor:o,borderRadius:"50%",height:t,marginLeft:3,marginRight:3,opacity:e,width:t}})});return u.createElement(c.View,{style:{alignItems:"center",flexDirection:"row",justifyContent:"center"}},n)}}]),t}(u.Component);m.defaultProps={color:"#aaa",duration:300,minOpacity:0,numberOfDots:3,size:10};var p=m;t.default=p;try{m.displayName="LoadingDots",m.__docgenInfo={description:"Ported from https://github.com/adorableio/react-native-animated-ellipsis",displayName:"LoadingDots",props:{numberOfDots:{defaultValue:{value:"3"},description:"",name:"numberOfDots",required:!0,type:{name:"number"}},duration:{defaultValue:{value:"300"},description:"",name:"duration",required:!0,type:{name:"number"}},minOpacity:{defaultValue:{value:"0"},description:"",name:"minOpacity",required:!0,type:{name:"number"}},color:{defaultValue:{value:"#aaa"},description:"",name:"color",required:!0,type:{name:"string"}},size:{defaultValue:{value:"10"},description:"",name:"size",required:!0,type:{name:"number"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Loading/LoadingDots.tsx#LoadingDots"]={docgenInfo:m.__docgenInfo,name:"LoadingDots",path:"src/components/Loading/LoadingDots.tsx#LoadingDots"})}catch(f){}},"./src/components/Loading/index.ts":function(e,t,o){var n=o("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"LoadingDots",{enumerable:!0,get:function(){return r.default}});var r=n(o("./src/components/Loading/LoadingDots.tsx"))},"./src/components/Modal/CloseableModal.tsx":function(e,t,o){var n=o("./node_modules/@babel/runtime/helpers/interopRequireWildcard.js"),r=o("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.CloseableModal=void 0;var l=r(o("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js")),a=n(o("./node_modules/react/index.js")),s=o("./node_modules/react-native-web/dist/index.js"),i=o("./src/components/Modal/index.ts"),d=o("./src/icons/index.ts"),u=o("./src/theme/index.ts"),c=o("./src/components/Layout/index.ts"),m=r(o("./src/components/Modal/ModalContent.tsx")),p=function(e){var t=e.children,o=e.rightSide,n=e.onClose,r=(0,l.default)(e,["children","rightSide","onClose"]),p=a.useContext(u.ThemeContext);return a.createElement(i.Modal,r,a.createElement(m.default,null,a.createElement(c.Box,{flexDirection:"row",justifyContent:"space-between"},a.createElement(s.TouchableOpacity,{style:{width:56,height:60,justifyContent:"center"},onPress:function(e){e.preventDefault(),n()}},a.createElement(s.View,{style:{paddingHorizontal:8}},a.createElement(d.Icon,{color:p.colors.text.default,size:40,name:"x"}))),o),t))};t.CloseableModal=p;var f=p;t.default=f;try{p.displayName="CloseableModal",p.__docgenInfo={description:"",displayName:"CloseableModal",props:{onClose:{defaultValue:null,description:"",name:"onClose",required:!0,type:{name:"() => void"}},rightSide:{defaultValue:null,description:"",name:"rightSide",required:!1,type:{name:"ReactNode"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Modal/CloseableModal.tsx#CloseableModal"]={docgenInfo:p.__docgenInfo,name:"CloseableModal",path:"src/components/Modal/CloseableModal.tsx#CloseableModal"})}catch(b){}},"./src/components/Modal/FormModal.tsx":function(e,t,o){var n=o("./node_modules/@babel/runtime/helpers/interopRequireWildcard.js"),r=o("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.FormModal=void 0;var l=r(o("./node_modules/@babel/runtime/helpers/extends.js")),a=r(o("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js")),s=n(o("./node_modules/react/index.js")),i=o("./node_modules/react-native-web/dist/index.js"),d=o("./src/components/Typography/index.ts"),u=r(o("./src/components/Modal/CloseableModal.tsx")),c=function(e){var t=e.children,o=e.onClose,n=e.onClear,r=e.clearText,c=void 0===r?"Clear":r,m=(0,a.default)(e,["children","onClose","onClear","clearText"]);return s.createElement(u.default,(0,l.default)({onClose:o,rightSide:s.createElement(i.TouchableOpacity,{onPress:function(e){e.preventDefault(),n()}},s.createElement(i.View,{style:{alignItems:"center",display:"flex",height:"100%",justifyContent:"center",paddingHorizontal:16}},s.createElement(d.Text,{isBold:!0},c)))},m),t)};t.FormModal=c;var m=c;t.default=m;try{c.displayName="FormModal",c.__docgenInfo={description:"",displayName:"FormModal",props:{onClear:{defaultValue:null,description:"",name:"onClear",required:!0,type:{name:"() => void"}},clearText:{defaultValue:null,description:"",name:"clearText",required:!1,type:{name:"string"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Modal/FormModal.tsx#FormModal"]={docgenInfo:c.__docgenInfo,name:"FormModal",path:"src/components/Modal/FormModal.tsx#FormModal"})}catch(p){}},"./src/components/Modal/HistoryModal.web.tsx":function(e,t,o){var n=o("./node_modules/@babel/runtime/helpers/interopRequireWildcard.js"),r=o("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=r(o("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js")),a=r(o("./node_modules/@babel/runtime/helpers/extends.js")),s=r(o("./node_modules/@babel/runtime/helpers/defineProperty.js")),i=r(o("./node_modules/@babel/runtime/helpers/objectSpread.js")),d=r(o("./node_modules/@babel/runtime/helpers/classCallCheck.js")),u=r(o("./node_modules/@babel/runtime/helpers/createClass.js")),c=r(o("./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js")),m=r(o("./node_modules/@babel/runtime/helpers/getPrototypeOf.js")),p=r(o("./node_modules/@babel/runtime/helpers/inherits.js")),f=n(o("./node_modules/react/index.js")),b=r(o("./src/components/Modal/ModalBase.web.tsx")),g=0,h=function(e){function t(){var e,o;(0,d.default)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(o=(0,c.default)(this,(e=(0,m.default)(t)).call.apply(e,[this].concat(r)))).modalId=++g,o.componentDidUpdate=function(e){var t=o.props.visible;e.visible!==t&&(t?o.updateBrowserHistory():o.handleManuallyClosed())},o.componentWillUnmount=function(){o.clearBrowserState()},o.updateBrowserHistory=function(){history.state&&history.state.modal&&history.state.modal[o.modalId]||history.pushState((0,i.default)({},history.state,{modal:(0,i.default)({},history.state&&history.state.modal,(0,s.default)({},o.modalId,!0))}),""),window.addEventListener("popstate",o.handlePopstate,!1)},o.handlePopstate=function(e){var t=o.props,n=t.visible,r=t.onRequestClose;e.state&&e.state.modal&&e.state.modal[o.modalId]||!r||(o.clearBrowserState(),r()),!n&&e.state&&e.state.modal&&e.state.modal[o.modalId]&&history.go(-1)},o.handleEscapeKey=function(){var e=o.props.onRequestClose;(history.state||history.state.modal||history.state.modal[o.modalId])&&e&&(o.clearBrowserState(),e(),history.go(-1))},o.handleManuallyClosed=function(){history.state&&history.state.modal&&history.state.modal[o.modalId]&&(o.clearBrowserState(),history.go(-1))},o.clearBrowserState=function(){history.replaceState((0,i.default)({},history.state,{modal:(0,i.default)({},history.state&&history.state.modal,(0,s.default)({},o.modalId,!1))}),""),window.removeEventListener("popstate",o.handlePopstate,!1)},o}return(0,p.default)(t,e),(0,u.default)(t,[{key:"render",value:function(){var e=(0,a.default)({},this.props);return f.createElement(b.default,(0,a.default)({},e,{onRequestClose:this.handleEscapeKey}))}}]),t}(f.PureComponent);t.default=function(e){var t=e.useHistory,o=void 0!==t&&t,n=(0,l.default)(e,["useHistory"]);return o?f.createElement(h,n):f.createElement(b.default,n)};try{HistoryModalweb.displayName="HistoryModalweb",HistoryModalweb.__docgenInfo={description:"",displayName:"HistoryModalweb",props:{}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Modal/HistoryModal.web.tsx#HistoryModalweb"]={docgenInfo:HistoryModalweb.__docgenInfo,name:"HistoryModalweb",path:"src/components/Modal/HistoryModal.web.tsx#HistoryModalweb"})}catch(y){}},"./src/components/Modal/Modal.mdx":function(e,t,o){var n=o("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(o("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js")),l=n(o("./node_modules/@babel/runtime/helpers/classCallCheck.js")),a=n(o("./node_modules/@babel/runtime/helpers/createClass.js")),s=n(o("./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js")),i=n(o("./node_modules/@babel/runtime/helpers/getPrototypeOf.js")),d=n(o("./node_modules/@babel/runtime/helpers/inherits.js")),u=n(o("./node_modules/react/index.js")),c=o("./node_modules/@mdx-js/tag/dist/index.js"),m=o("./node_modules/react-powerplug/dist/react-powerplug.esm.js"),p=o("./node_modules/docz/dist/index.m.js"),f=o("./src/components/Modal/index.ts"),b=o("./src/components/Button/index.ts"),g=o("./src/components/Layout/index.ts"),h=o("./src/components/Typography/index.ts"),y=function(e){function t(e){var o;return(0,l.default)(this,t),(o=(0,s.default)(this,(0,i.default)(t).call(this,e))).layout=null,o}return(0,d.default)(t,e),(0,a.default)(t,[{key:"render",value:function(){var e=this.props,t=e.components,o=(0,r.default)(e,["components"]);return u.default.createElement(c.MDXTag,{name:"wrapper",components:t},u.default.createElement(c.MDXTag,{name:"h1",components:t,props:{id:"modal"}},"Modal"),u.default.createElement(c.MDXTag,{name:"p",components:t},"Modal covers the full screen. For a prompt/small version of modal, use ",u.default.createElement(c.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"Dialog")),u.default.createElement(c.MDXTag,{name:"h3",components:t,props:{id:"usage"}},"Usage"),u.default.createElement(p.Playground,{__position:0,__code:'<Toggle initial={false}>\n  {({ on, toggle, set }) => (\n    <Box>\n      <Modal visible={on} onRequestClose={() => set(false)}>\n        <Box height={1800}>\n          <Text>Put any content in the modal</Text>\n          <Button onPress={() => set(false)} title="Close button one" />\n          <Button onPress={() => set(false)} title="Close button two" />\n        </Box>\n      </Modal>\n      <Button onPress={() => set(true)} title="Open modal" />\n    </Box>\n  )}\n</Toggle>',__scope:{props:this?this.props:o,Toggle:m.Toggle,Modal:f.Modal,Button:b.Button,Box:g.Box,Text:h.Text}},u.default.createElement(m.Toggle,{initial:!1},function(e){var t=e.on,o=(e.toggle,e.set);return u.default.createElement(g.Box,null,u.default.createElement(f.Modal,{visible:t,onRequestClose:function(){return o(!1)}},u.default.createElement(g.Box,{height:1800},u.default.createElement(h.Text,null,"Put any content in the modal"),u.default.createElement(b.Button,{onPress:function(){return o(!1)},title:"Close button one"}),u.default.createElement(b.Button,{onPress:function(){return o(!1)},title:"Close button two"}))),u.default.createElement(b.Button,{onPress:function(){return o(!0)},title:"Open modal"}))})),u.default.createElement(c.MDXTag,{name:"h3",components:t,props:{id:"nested"}},"Nested"),u.default.createElement(p.Playground,{__position:1,__code:'<Toggle initial={false}>\n  {({ on: outerOn, set: outerSet }) => (\n    <Box>\n      <Modal visible={outerOn} onRequestClose={() => outerSet(false)}>\n        <Box height={1800}>\n          <Text>Outer modal</Text>\n          <Button\n            onPress={() => outerSet(false)}\n            title="Close outer modal button one"\n          />\n          <Button\n            onPress={() => outerSet(false)}\n            title="Close outer modal button two"\n          />\n          <Toggle initial={false}>\n            {({ on: innerOn, set: innerSet }) => (\n              <Box>\n                <Modal\n                  visible={innerOn}\n                  onRequestClose={() => innerSet(false)}\n                >\n                  <Box height={1800}>\n                    <Text>Inner modal</Text>\n                    <Button\n                      onPress={() => innerSet(false)}\n                      title="Close inner modal button one"\n                    />\n                    <Button\n                      onPress={() => innerSet(false)}\n                      title="Close inner modal button two"\n                    />\n                  </Box>\n                </Modal>\n                <Button\n                  onPress={() => innerSet(true)}\n                  title="Open inner modal"\n                />\n              </Box>\n            )}\n          </Toggle>\n        </Box>\n      </Modal>\n      <Button onPress={() => outerSet(true)} title="Open outer modal" />\n    </Box>\n  )}\n</Toggle>',__scope:{props:this?this.props:o,Toggle:m.Toggle,Modal:f.Modal,Button:b.Button,Box:g.Box,Text:h.Text}},u.default.createElement(m.Toggle,{initial:!1},function(e){var t=e.on,o=e.set;return u.default.createElement(g.Box,null,u.default.createElement(f.Modal,{visible:t,onRequestClose:function(){return o(!1)}},u.default.createElement(g.Box,{height:1800},u.default.createElement(h.Text,null,"Outer modal"),u.default.createElement(b.Button,{onPress:function(){return o(!1)},title:"Close outer modal button one"}),u.default.createElement(b.Button,{onPress:function(){return o(!1)},title:"Close outer modal button two"}),u.default.createElement(m.Toggle,{initial:!1},function(e){var t=e.on,o=e.set;return u.default.createElement(g.Box,null,u.default.createElement(f.Modal,{visible:t,onRequestClose:function(){return o(!1)}},u.default.createElement(g.Box,{height:1800},u.default.createElement(h.Text,null,"Inner modal"),u.default.createElement(b.Button,{onPress:function(){return o(!1)},title:"Close inner modal button one"}),u.default.createElement(b.Button,{onPress:function(){return o(!1)},title:"Close inner modal button two"}))),u.default.createElement(b.Button,{onPress:function(){return o(!0)},title:"Open inner modal"}))}))),u.default.createElement(b.Button,{onPress:function(){return o(!0)},title:"Open outer modal"}))})),u.default.createElement(c.MDXTag,{name:"h3",components:t,props:{id:"using-browser-history"}},"Using browser history"),u.default.createElement(c.MDXTag,{name:"p",components:t},"By using ",u.default.createElement(c.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"useHistory")," prop it will mimic Android's back button behavior on web which closes modals. On RN, this will have no effect and will use a regular ",u.default.createElement(c.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"Modal"),". Works in nested modals as well."),u.default.createElement(c.MDXTag,{name:"p",components:t},"Note: Uses history ",u.default.createElement(c.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"state")," to manipulate modal state"),u.default.createElement(p.Playground,{__position:2,__code:'<Toggle initial={false}>\n  {({ on: outerOn, set: outerSet }) => (\n    <Box>\n      <Modal\n        useHistory\n        visible={outerOn}\n        onRequestClose={() => outerSet(false)}\n      >\n        <Box height={1800}>\n          <Text>Outer modal</Text>\n          <Button\n            onPress={() => outerSet(false)}\n            title="Close outer modal button one"\n          />\n          <Button\n            onPress={() => outerSet(false)}\n            title="Close outer modal button two"\n          />\n          <Toggle initial={false}>\n            {({ on: innerOn, set: innerSet }) => (\n              <Box>\n                <Modal\n                  visible={innerOn}\n                  useHistory\n                  onRequestClose={() => innerSet(false)}\n                >\n                  <Box height={1800}>\n                    <Text>Inner modal</Text>\n                    <Button\n                      onPress={() => innerSet(false)}\n                      title="Close inner modal button one"\n                    />\n                    <Button\n                      onPress={() => innerSet(false)}\n                      title="Close inner modal button two"\n                    />\n                  </Box>\n                </Modal>\n                <Button\n                  onPress={() => innerSet(true)}\n                  title="Open inner modal"\n                />\n              </Box>\n            )}\n          </Toggle>\n        </Box>\n      </Modal>\n      <Button onPress={() => outerSet(true)} title="Open outer modal" />\n    </Box>\n  )}\n</Toggle>',__scope:{props:this?this.props:o,Toggle:m.Toggle,Modal:f.Modal,Button:b.Button,Box:g.Box,Text:h.Text}},u.default.createElement(m.Toggle,{initial:!1},function(e){var t=e.on,o=e.set;return u.default.createElement(g.Box,null,u.default.createElement(f.Modal,{useHistory:!0,visible:t,onRequestClose:function(){return o(!1)}},u.default.createElement(g.Box,{height:1800},u.default.createElement(h.Text,null,"Outer modal"),u.default.createElement(b.Button,{onPress:function(){return o(!1)},title:"Close outer modal button one"}),u.default.createElement(b.Button,{onPress:function(){return o(!1)},title:"Close outer modal button two"}),u.default.createElement(m.Toggle,{initial:!1},function(e){var t=e.on,o=e.set;return u.default.createElement(g.Box,null,u.default.createElement(f.Modal,{visible:t,useHistory:!0,onRequestClose:function(){return o(!1)}},u.default.createElement(g.Box,{height:1800},u.default.createElement(h.Text,null,"Inner modal"),u.default.createElement(b.Button,{onPress:function(){return o(!1)},title:"Close inner modal button one"}),u.default.createElement(b.Button,{onPress:function(){return o(!1)},title:"Close inner modal button two"}))),u.default.createElement(b.Button,{onPress:function(){return o(!0)},title:"Open inner modal"}))}))),u.default.createElement(b.Button,{onPress:function(){return o(!0)},title:"Open outer modal"}))})),u.default.createElement(c.MDXTag,{name:"h3",components:t,props:{id:"modal-props"}},"Modal Props"),u.default.createElement(p.PropsTable,{of:f.Modal}))}}]),t}(u.default.Component);t.default=y},"./src/components/Modal/Modal.tsx":function(e,t,o){var n=o("./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"HistoryModal",{enumerable:!0,get:function(){return r.default}}),Object.defineProperty(t,"HistoryModalProps",{enumerable:!0,get:function(){return r.HistoryModalProps}});var r=n(o("./src/components/Modal/HistoryModal.web.tsx"))},"./src/components/Modal/ModalBase.web.tsx":function(e,t,o){var n=o("./node_modules/@babel/runtime/helpers/interopRequireWildcard.js"),r=o("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=r(o("./node_modules/@babel/runtime/helpers/classCallCheck.js")),a=r(o("./node_modules/@babel/runtime/helpers/createClass.js")),s=r(o("./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js")),i=r(o("./node_modules/@babel/runtime/helpers/getPrototypeOf.js")),d=r(o("./node_modules/@babel/runtime/helpers/inherits.js")),u=r(o("./node_modules/focus-trap/index.js")),c=n(o("./node_modules/react/index.js")),m=n(o("./node_modules/react-dom/index.js")),p=function(e){function t(e){var o;return(0,l.default)(this,t),(o=(0,s.default)(this,(0,i.default)(t).call(this,e))).el=void 0,o.modalRoot=void 0,o.focusTrap=void 0,o.isUnmounting=!1,o.content=c.createRef(),o.freezeBody=function(){document.body.style.overflow="hidden",document.body.style.height="100vh"},o.unfreezeBody=function(){document.body.style.overflow="",document.body.style.height=""},o.activateFocus=function(){var e=o.props.onRequestClose;o.content.current&&!o.focusTrap&&(o.focusTrap=(0,u.default)(o.content.current,{initialFocus:o.content.current,onDeactivate:function(){e&&o.props.visible&&!o.isUnmounting&&e()}}),o.focusTrap.activate())},o.deactivateFocus=function(){o.focusTrap&&(o.focusTrap.deactivate(),o.focusTrap=null)},o.el=null,o.modalRoot=null,o.focusTrap=null,o}return(0,d.default)(t,e),(0,a.default)(t,[{key:"componentDidMount",value:function(){this.el=document.createElement("div"),this.modalRoot=document.getElementsByTagName("body")[0],this.modalRoot.appendChild(this.el),this.forceUpdate()}},{key:"componentDidUpdate",value:function(){var e=this.props,t=e.visible,o=e.isBackgroundScrollable,n=void 0!==o&&o;t?(this.activateFocus(),n||this.freezeBody()):(this.deactivateFocus(),n||this.unfreezeBody())}},{key:"componentWillUnmount",value:function(){this.modalRoot&&this.el&&this.modalRoot.removeChild(this.el),this.isUnmounting=!0,this.deactivateFocus()}},{key:"render",value:function(){var e=this.props,t=e.transparent,o=e.visible,n=e.isBackgroundScrollable,r=void 0!==n&&n;return o&&this.el?m.createPortal(c.createElement("div",{tabIndex:-1,ref:this.content,style:{backgroundColor:t?"transparent":"white",bottom:0,left:0,overflow:"auto",position:r?"absolute":"fixed",right:0,top:0,zIndex:1e3}},this.props.children),this.el):null}}]),t}(c.PureComponent),f=p;t.default=f;try{p.displayName="ModalBase",p.__docgenInfo={description:"",displayName:"ModalBase",props:{}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Modal/ModalBase.web.tsx#ModalBase"]={docgenInfo:p.__docgenInfo,name:"ModalBase",path:"src/components/Modal/ModalBase.web.tsx#ModalBase"})}catch(b){}},"./src/components/Modal/ModalContent.tsx":function(e,t,o){var n=o("./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.ModalContent=void 0;var r=n(o("./node_modules/react/index.js")),l=o("./node_modules/react-native-web/dist/index.js"),a=function(e){var t=e.children;return r.createElement(l.View,{style:{height:"100%",marginLeft:"auto",marginRight:"auto",maxWidth:960}},t)};t.ModalContent=a;var s=a;t.default=s;try{a.displayName="ModalContent",a.__docgenInfo={description:"",displayName:"ModalContent",props:{}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Modal/ModalContent.tsx#ModalContent"]={docgenInfo:a.__docgenInfo,name:"ModalContent",path:"src/components/Modal/ModalContent.tsx#ModalContent"})}catch(i){}},"./src/components/Modal/index.ts":function(e,t,o){var n=o("./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Modal",{enumerable:!0,get:function(){return r.HistoryModal}}),Object.defineProperty(t,"ModalProps",{enumerable:!0,get:function(){return r.HistoryModalProps}}),Object.defineProperty(t,"ModalBase",{enumerable:!0,get:function(){return l.default}}),Object.defineProperty(t,"ModalBaseProps",{enumerable:!0,get:function(){return l.ModalBaseProps}}),Object.defineProperty(t,"HistoryModal",{enumerable:!0,get:function(){return a.default}}),Object.defineProperty(t,"HistoryModalProps",{enumerable:!0,get:function(){return a.HistoryModalProps}}),Object.defineProperty(t,"FormModal",{enumerable:!0,get:function(){return s.default}}),Object.defineProperty(t,"FormModalProps",{enumerable:!0,get:function(){return s.FormModalProps}}),Object.defineProperty(t,"CloseableModal",{enumerable:!0,get:function(){return i.default}}),Object.defineProperty(t,"CloseableModalProps",{enumerable:!0,get:function(){return i.CloseableModalProps}});var r=o("./src/components/Modal/Modal.tsx"),l=n(o("./src/components/Modal/ModalBase.web.tsx")),a=n(o("./src/components/Modal/HistoryModal.web.tsx")),s=n(o("./src/components/Modal/FormModal.tsx")),i=n(o("./src/components/Modal/CloseableModal.tsx"))},"./src/icons/Icon.web.tsx":function(e,t,o){var n=o("./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(o("./node_modules/react/index.js")),l=n(o("./node_modules/react-icons/fi/index.js"));t.default=function(e){var t=e.name,o=e.color,n=e.size,a=l["Fi".concat(function(e){var t=e.replace(/(\-\w)/g,function(e){return e[1].toUpperCase()});return t.charAt(0).toUpperCase()+t.slice(1)}(t))];return r.createElement(a,{color:o,size:n})};try{Iconweb.displayName="Iconweb",Iconweb.__docgenInfo={description:"",displayName:"Iconweb",props:{}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/icons/Icon.web.tsx#Iconweb"]={docgenInfo:Iconweb.__docgenInfo,name:"Iconweb",path:"src/icons/Icon.web.tsx#Iconweb"})}catch(a){}},"./src/icons/index.ts":function(e,t,o){var n=o("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Icon",{enumerable:!0,get:function(){return r.default}});var r=n(o("./src/icons/Icon.web.tsx"))}}]);
//# sourceMappingURL=19.586c54bb9e5eb64e8829.js.map