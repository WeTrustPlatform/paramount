(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"./src/components/Layout/Box.tsx":function(e,t,a){var r=a("./node_modules/@babel/runtime/helpers/interopRequireWildcard.js"),n=a("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.shapeMapping=t.BASE_BORDER_RADII=void 0;var o=n(a("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js")),l=r(a("./node_modules/react/index.js")),i=a("./node_modules/react-native-web/dist/index.js"),s=a("./src/theme/index.ts");t.BASE_BORDER_RADII=4;var d={circle:{borderRadius:999},pill:{borderRadius:999},rounded:{borderRadius:4},roundedBottom:{borderBottomLeftRadius:4,borderBottomRightRadius:4},roundedLeft:{borderBottomLeftRadius:4,borderTopLeftRadius:4},roundedRight:{borderBottomRightRadius:4,borderTopRightRadius:4},roundedTop:{borderTopLeftRadius:4,borderTopRightRadius:4},square:{borderRadius:0}};t.shapeMapping=d;var u={elevation:function(e,t){return t.elevations[e]},shape:function(e){function t(t){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}(function(e){return d[e]})},c=(0,s.withTheme)(function(e){var t=e.theme,a=(0,o.default)(e,["theme"]),r=a.children,n=a.style,s=a.testID,d=(0,o.default)(a,["children","style","testID"]),c=[],f={};for(var p in d)if(p){var m=u[p];if(m){var h=m(d[p],t);c.push(h)}else f[p]=d[p]}return l.createElement(i.View,{testID:s,style:[f,c,n]},r)});t.default=c},"./src/components/Layout/Spacing.tsx":function(e,t,a){var r=a("./node_modules/@babel/runtime/helpers/interopRequireWildcard.js"),n=a("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(a("./node_modules/@babel/runtime/helpers/objectSpread.js")),l=r(a("./node_modules/react/index.js")),i=a("./src/theme/index.ts"),s=n(a("./src/components/Layout/Box.tsx")),d={height:!0,margin:!0,marginBottom:!0,marginEnd:!0,marginHorizontal:!0,marginLeft:!0,marginRight:!0,marginStart:!0,marginTop:!0,marginVertical:!0,padding:!0,paddingBottom:!0,paddingEnd:!0,paddingHorizontal:!0,paddingLeft:!0,paddingRight:!0,paddingStart:!0,paddingTop:!0,paddingVertical:!0},u=(0,i.withTheme)(function(e){var t=(0,o.default)({},e);for(var a in e)d[a]&&(t[a]=e[a]*(e.gridPointMultiplier||8));return l.createElement(s.default,t)});t.default=u},"./src/components/Layout/index.ts":function(e,t,a){var r=a("./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Box",{enumerable:!0,get:function(){return n.default}}),Object.defineProperty(t,"BoxProps",{enumerable:!0,get:function(){return n.BoxProps}}),Object.defineProperty(t,"Spacing",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(t,"SpacingProps",{enumerable:!0,get:function(){return o.SpacingProps}});var n=r(a("./src/components/Layout/Box.tsx")),o=r(a("./src/components/Layout/Spacing.tsx"))},"./src/components/Switch/Switch.mdx":function(e,t,a){var r=a("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(a("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js")),o=r(a("./node_modules/@babel/runtime/helpers/classCallCheck.js")),l=r(a("./node_modules/@babel/runtime/helpers/createClass.js")),i=r(a("./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js")),s=r(a("./node_modules/@babel/runtime/helpers/getPrototypeOf.js")),d=r(a("./node_modules/@babel/runtime/helpers/inherits.js")),u=r(a("./node_modules/react/index.js")),c=a("./node_modules/@mdx-js/tag/dist/index.js"),f=a("./node_modules/docz/dist/index.m.js"),p=a("./node_modules/react-powerplug/dist/react-powerplug.esm.js"),m=r(a("./src/components/Switch/Switch.tsx")),h=a("./src/components/Layout/index.ts"),g=function(e){function t(e){var a;return(0,o.default)(this,t),(a=(0,i.default)(this,(0,s.default)(t).call(this,e))).layout=null,a}return(0,d.default)(t,e),(0,l.default)(t,[{key:"render",value:function(){var e=this.props,t=e.components,a=(0,n.default)(e,["components"]);return u.default.createElement(c.MDXTag,{name:"wrapper",components:t},u.default.createElement(c.MDXTag,{name:"h1",components:t,props:{id:"switch"}},"Switch"),u.default.createElement(c.MDXTag,{name:"h3",components:t,props:{id:"usage"}},"Usage"),u.default.createElement(f.Playground,{__position:0,__code:"<Box>\n  <Toggle initial={true}>\n    {({ on, toggle }) => (\n      <Switch\n        isSwitchedOn={on}\n        onChange={toggle}\n        isDisabled={false}\n        onIcon={null}\n        offIcon={null}\n        duration={300}\n        getStyles={(props, theme) => ({\n          circleStyle: {},\n          containerStyle: {},\n          backgroundColorOff: '#F5F6F7',\n          backgroundColorOn: '#67c6bb',\n          circleColorOff: 'white',\n          circleColorOn: 'white',\n        })}\n      />\n    )}\n  </Toggle>\n</Box>",__scope:{props:this?this.props:a,Toggle:p.Toggle,Switch:m.default,Box:h.Box}},u.default.createElement(h.Box,null,u.default.createElement(p.Toggle,{initial:!0},function(e){var t=e.on,a=e.toggle;return u.default.createElement(m.default,{isSwitchedOn:t,onChange:a,isDisabled:!1,onIcon:null,offIcon:null,duration:300,getStyles:function(e,t){return{circleStyle:{},containerStyle:{},backgroundColorOff:"#F5F6F7",backgroundColorOn:"#67c6bb",circleColorOff:"white",circleColorOn:"white"}}})}))),u.default.createElement(c.MDXTag,{name:"h3",components:t,props:{id:"props"}},"Props"),u.default.createElement(f.PropsTable,{of:m.default}))}}]),t}(u.default.Component);t.default=g},"./src/components/Switch/Switch.styles.ts":function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.getSwitchStyles=t.getSwitchVariables=void 0;var a=function(e){return{backgroundColorOff:e.colors.background.greyDefault,backgroundColorOn:e.colors.background.primaryDefault,circleColorOff:e.colors.background.white,circleColorOn:e.colors.background.white,circle:{alignItems:"center",backgroundColor:e.colors.background.white,borderRadius:24,display:"flex",height:38,justifyContent:"center",padding:0,width:38},container:{alignItems:"center",backgroundColor:e.colors.background.greyLight,borderRadius:24,flexDirection:"row",height:44,padding:3,width:72}}};t.getSwitchVariables=a;var r=function(e){var t=a(e);return{backgroundColorOff:t.backgroundColorOff,backgroundColorOn:t.backgroundColorOn,circleColorOff:t.circleColorOff,circleColorOn:t.circleColorOn,circleStyle:t.circle,containerStyle:t.container}};t.getSwitchStyles=r;try{a.displayName="getSwitchVariables",a.__docgenInfo={description:"",displayName:"getSwitchVariables",props:{colors:{defaultValue:null,description:"",name:"colors",required:!0,type:{name:"Colors"}},fills:{defaultValue:null,description:"",name:"fills",required:!0,type:{name:"Fills"}},fontFamilies:{defaultValue:null,description:"",name:"fontFamilies",required:!0,type:{name:"FontFamilies"}},fontWeights:{defaultValue:null,description:"",name:"fontWeights",required:!0,type:{name:"FontWeights"}},headingSizes:{defaultValue:null,description:"",name:"headingSizes",required:!0,type:{name:"HeadingSizes"}},paragraphSizes:{defaultValue:null,description:"",name:"paragraphSizes",required:!0,type:{name:"ParagraphSizes"}},textSizes:{defaultValue:null,description:"",name:"textSizes",required:!0,type:{name:"TextSizes"}},elevations:{defaultValue:null,description:"",name:"elevations",required:!0,type:{name:"ViewStyle[]"}},controlPaddings:{defaultValue:null,description:"",name:"controlPaddings",required:!0,type:{name:"ControlSizes"}},controlHeights:{defaultValue:null,description:"",name:"controlHeights",required:!0,type:{name:"ControlSizes"}},controlBorderRadius:{defaultValue:null,description:"",name:"controlBorderRadius",required:!0,type:{name:"ControlSizes"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Switch/Switch.styles.ts#getSwitchVariables"]={docgenInfo:a.__docgenInfo,name:"getSwitchVariables",path:"src/components/Switch/Switch.styles.ts#getSwitchVariables"})}catch(n){}try{r.displayName="getSwitchStyles",r.__docgenInfo={description:"",displayName:"getSwitchStyles",props:{colors:{defaultValue:null,description:"",name:"colors",required:!0,type:{name:"Colors"}},fills:{defaultValue:null,description:"",name:"fills",required:!0,type:{name:"Fills"}},fontFamilies:{defaultValue:null,description:"",name:"fontFamilies",required:!0,type:{name:"FontFamilies"}},fontWeights:{defaultValue:null,description:"",name:"fontWeights",required:!0,type:{name:"FontWeights"}},headingSizes:{defaultValue:null,description:"",name:"headingSizes",required:!0,type:{name:"HeadingSizes"}},paragraphSizes:{defaultValue:null,description:"",name:"paragraphSizes",required:!0,type:{name:"ParagraphSizes"}},textSizes:{defaultValue:null,description:"",name:"textSizes",required:!0,type:{name:"TextSizes"}},elevations:{defaultValue:null,description:"",name:"elevations",required:!0,type:{name:"ViewStyle[]"}},controlPaddings:{defaultValue:null,description:"",name:"controlPaddings",required:!0,type:{name:"ControlSizes"}},controlHeights:{defaultValue:null,description:"",name:"controlHeights",required:!0,type:{name:"ControlSizes"}},controlBorderRadius:{defaultValue:null,description:"",name:"controlBorderRadius",required:!0,type:{name:"ControlSizes"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Switch/Switch.styles.ts#getSwitchStyles"]={docgenInfo:r.__docgenInfo,name:"getSwitchStyles",path:"src/components/Switch/Switch.styles.ts#getSwitchStyles"})}catch(n){}},"./src/components/Switch/Switch.tsx":function(e,t,a){var r=a("./node_modules/@babel/runtime/helpers/interopRequireWildcard.js"),n=a("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.Switch=void 0;var o=n(a("./node_modules/@babel/runtime/helpers/extends.js")),l=n(a("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js")),i=n(a("./node_modules/@babel/runtime/helpers/classCallCheck.js")),s=n(a("./node_modules/@babel/runtime/helpers/createClass.js")),d=n(a("./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js")),u=n(a("./node_modules/@babel/runtime/helpers/getPrototypeOf.js")),c=n(a("./node_modules/@babel/runtime/helpers/inherits.js")),f=r(a("./node_modules/react/index.js")),p=a("./node_modules/react-native-web/dist/index.js"),m=a("./src/icons/index.ts"),h=a("./src/theme/index.ts"),g=a("./src/utils/mergeStyles.ts"),b=a("./src/components/Switch/Switch.styles.ts"),y=function(e){function t(e){var a;(0,i.default)(this,t),(a=(0,d.default)(this,(0,u.default)(t).call(this,e))).handleOnPress=function(e){var t=a.props.onChange;a.runAnimation(),t&&t(e)},a.runAnimation=function(){var e=a.props,t=e.duration,r=e.isSwitchedOn,n={duration:t,fromValue:r?1:0,toValue:r?0:1};p.Animated.timing(a.state.animXValue,n).start()};var r=e.theme,n=e.getStyles,o=(0,g.mergeStyles)(b.getSwitchStyles,n)(r),l=o.circleStyle,s=o.containerStyle,c=s.width-(l.width+2*s.padding);return a.state={animXValue:new p.Animated.Value(e.isSwitchedOn?1:0),circlePosXEnd:c,circlePosXStart:0},a}return(0,c.default)(t,e),(0,s.default)(t,[{key:"componentWillReceiveProps",value:function(e){e.isSwitchedOn!==this.props.isSwitchedOn&&this.runAnimation()}},{key:"render",value:function(){var e=this.props,t=e.onIcon,a=e.offIcon,r=e.theme,n=e.isSwitchedOn,i=e.getStyles,s=e.testID,d=(0,l.default)(e,["onIcon","offIcon","theme","isSwitchedOn","getStyles","testID"]),u=this.state,c=u.animXValue,h=u.circlePosXStart,y=u.circlePosXEnd,S=(0,g.mergeStyles)(b.getSwitchStyles,i)(r),w=S.circleStyle,_=S.containerStyle,v=S.backgroundColorOff,O=S.backgroundColorOn,C=S.circleColorOff,k=S.circleColorOn;return f.createElement(p.TouchableOpacity,(0,o.default)({accessible:!0,accessibilityLabel:"switch",onPress:this.handleOnPress,activeOpacity:1,style:{alignSelf:"flex-start",flexDirection:"row",flexWrap:"wrap"},testID:s},d),f.createElement(p.Animated.View,{style:[_,{backgroundColor:c.interpolate({inputRange:[0,1],outputRange:[v,O]})}]},f.createElement(p.Animated.View,{style:[w,{backgroundColor:c.interpolate({inputRange:[0,1],outputRange:[C,k]})},{transform:[{translateX:c.interpolate({inputRange:[0,1],outputRange:[h,y]})}]}]},n?t||f.createElement(m.Icon,{name:"check",size:20,color:r.colors.text.primary}):a||f.createElement(m.Icon,{name:"x",size:20,color:r.colors.text.default}))))}}]),t}(f.Component);y.defaultProps={backgroundColorOff:"rgb(215,215,215)",backgroundColorOn:"rgb(227,227,227)",circleColorOff:"white",circleColorOn:"rgb(102,134,205)",duration:300,circleStyle:{backgroundColor:"white",borderRadius:15,height:30,width:30},containerStyle:{backgroundColor:"rgb(227,227,227)",borderRadius:18,height:36,padding:3,width:72},isSwitchedOn:!1,onChange:function(){return null}};var S=(0,h.withTheme)(y);t.Switch=S;var w=S;t.default=w},"./src/icons/Icon.web.tsx":function(e,t,a){var r=a("./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(a("./node_modules/react/index.js")),o=r(a("./node_modules/react-icons/fi/index.js"));t.default=function(e){var t=e.name,a=e.color,r=e.size,l=o["Fi".concat(function(e){var t=e.replace(/(\-\w)/g,function(e){return e[1].toUpperCase()});return t.charAt(0).toUpperCase()+t.slice(1)}(t))];return n.createElement(l,{color:a,size:r})};try{Iconweb.displayName="Iconweb",Iconweb.__docgenInfo={description:"",displayName:"Iconweb",props:{}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/icons/Icon.web.tsx#Iconweb"]={docgenInfo:Iconweb.__docgenInfo,name:"Iconweb",path:"src/icons/Icon.web.tsx#Iconweb"})}catch(l){}},"./src/icons/index.ts":function(e,t,a){var r=a("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Icon",{enumerable:!0,get:function(){return n.default}});var n=r(a("./src/icons/Icon.web.tsx"))},"./src/theme/ThemeContext.ts":function(e,t,a){var r=a("./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");Object.defineProperty(t,"__esModule",{value:!0}),t.ThemeContext=void 0;var n=r(a("./node_modules/react/index.js")),o=a("./src/theme/default-theme/index.ts"),l=n.createContext(o.defaultTheme);t.ThemeContext=l},"./src/theme/ThemeInterface.ts":function(e,t){},"./src/theme/createTheme.ts":function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0}),t.createTheme=void 0;var r=a("./src/theme/default-theme/index.ts"),n=a("./node_modules/deepmerge/dist/umd.js"),o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:r.defaultTheme;return n(r.defaultTheme,e)};t.createTheme=o;try{o.displayName="createTheme",o.__docgenInfo={description:"",displayName:"createTheme",props:{colors:{defaultValue:null,description:"",name:"colors",required:!1,type:{name:"DeepPartial<Colors>"}},fills:{defaultValue:null,description:"",name:"fills",required:!1,type:{name:"DeepPartial<Fills>"}},fontFamilies:{defaultValue:null,description:"",name:"fontFamilies",required:!1,type:{name:"DeepPartial<FontFamilies>"}},fontWeights:{defaultValue:null,description:"",name:"fontWeights",required:!1,type:{name:"DeepPartial<FontWeights>"}},headingSizes:{defaultValue:null,description:"",name:"headingSizes",required:!1,type:{name:"DeepPartial<HeadingSizes>"}},paragraphSizes:{defaultValue:null,description:"",name:"paragraphSizes",required:!1,type:{name:"DeepPartial<ParagraphSizes>"}},textSizes:{defaultValue:null,description:"",name:"textSizes",required:!1,type:{name:"DeepPartial<TextSizes>"}},elevations:{defaultValue:null,description:"",name:"elevations",required:!1,type:{name:"DeepPartial<ViewStyle>[]"}},controlPaddings:{defaultValue:null,description:"",name:"controlPaddings",required:!1,type:{name:"DeepPartial<ControlSizes>"}},controlHeights:{defaultValue:null,description:"",name:"controlHeights",required:!1,type:{name:"DeepPartial<ControlSizes>"}},controlBorderRadius:{defaultValue:null,description:"",name:"controlBorderRadius",required:!1,type:{name:"DeepPartial<ControlSizes>"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/theme/createTheme.ts#createTheme"]={docgenInfo:o.__docgenInfo,name:"createTheme",path:"src/theme/createTheme.ts#createTheme"})}catch(l){}},"./src/theme/default-theme/controls/index.ts":function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.controlBorderRadius=t.controlHeights=t.controlPaddings=void 0;t.controlPaddings={small:8,medium:16,large:24};t.controlHeights={small:40,medium:48,large:56};t.controlBorderRadius={small:4,medium:4,large:4}},"./src/theme/default-theme/foundational-styles/colors.ts":function(e,t,a){var r=a("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(a("./src/theme/default-theme/foundational-styles/palette.ts")),o={background:{white:"white",overlay:"rgba(0,0,0,0.3)",greyLight:n.default.neutral.lightest,greyDefault:"#F5F6F7",greyDark:n.default.neutral.light,primaryLight:n.default.teal.lightest,primaryDefault:n.default.teal.base,primaryDark:n.default.teal.dark,secondaryLight:n.default.orange.lightest,secondaryDefault:n.default.orange.base,secondaryDark:n.default.orange.dark,dangerLight:n.default.red.lightest,dangerDefault:n.default.red.base,dangerDark:n.default.red.dark,infoLight:n.default.blue.lightest,infoDefault:n.default.blue.base,infoDark:n.default.blue.dark,successLight:n.default.green.lightest,successDefault:n.default.green.base,successDark:n.default.green.dark,warningLight:n.default.orange.lightest,warningDefault:n.default.orange.base,warningDark:n.default.orange.dark},border:{default:n.default.neutral.light,dark:"#EDF0F2",primary:n.default.teal.darkest,secondary:n.default.orange.darkest,danger:n.default.red.darkest,info:n.default.blue.darkest,success:n.default.green.darkest,warning:n.default.orange.darkest},text:{link:n.default.neutral.darkest,dark:n.default.neutral.darkest,default:n.default.neutral.darkest,muted:n.default.neutral.dark,white:"white",selected:"white",primary:n.default.teal.darkest,secondary:n.default.orange.darkest,danger:n.default.red.darkest,info:n.default.blue.darkest,success:n.default.green.darkest,warning:n.default.orange.darkest}};t.default=o},"./src/theme/default-theme/foundational-styles/elevations.ts":function(e,t,a){var r=a("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(a("./src/theme/default-theme/foundational-styles/palette.ts")),o=[{elevation:0,shadowColor:n.default.neutral.dark,shadowOffset:{width:0,height:0},shadowOpacity:0,shadowRadius:0},{elevation:1,shadowColor:n.default.neutral.dark,shadowOffset:{width:1,height:1},shadowOpacity:.15,shadowRadius:8},{elevation:2,shadowColor:n.default.neutral.dark,shadowOffset:{width:2,height:2},shadowOpacity:.2,shadowRadius:10},{elevation:3,shadowColor:n.default.neutral.dark,shadowOffset:{width:3,height:3},shadowOpacity:.25,shadowRadius:12},{elevation:4,shadowColor:n.default.neutral.dark,shadowOffset:{width:4,height:4},shadowOpacity:.3,shadowRadius:8},{elevation:5,shadowColor:n.default.neutral.dark,shadowOffset:{width:5,height:5},shadowOpacity:.35,shadowRadius:8}];t.default=o},"./src/theme/default-theme/foundational-styles/fills.ts":function(e,t,a){var r=a("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(a("./src/theme/default-theme/foundational-styles/palette.ts")),o={solid:{neutral:{backgroundColor:n.default.neutral.base,color:"white"},blue:{backgroundColor:n.default.blue.base,color:"white"},red:{backgroundColor:n.default.red.base,color:"white"},orange:{backgroundColor:n.default.orange.base,color:"white"},yellow:{backgroundColor:n.default.yellow.base,color:n.default.yellow.darkest},green:{backgroundColor:n.default.green.base,color:"white"},teal:{backgroundColor:n.default.teal.base,color:"white"},purple:{backgroundColor:n.default.purple.base,color:"white"}},subtle:{neutral:{backgroundColor:n.default.neutral.light,color:n.default.neutral.darkest},blue:{backgroundColor:n.default.blue.light,color:n.default.blue.darkest},red:{backgroundColor:n.default.red.light,color:n.default.red.darkest},orange:{backgroundColor:n.default.orange.light,color:n.default.orange.darkest},yellow:{backgroundColor:n.default.yellow.light,color:n.default.yellow.darkest},green:{backgroundColor:n.default.green.light,color:n.default.green.darkest},teal:{backgroundColor:n.default.teal.light,color:n.default.teal.darkest},purple:{backgroundColor:n.default.purple.light,color:n.default.purple.darkest}}};t.default=o},"./src/theme/default-theme/foundational-styles/index.ts":function(e,t,a){var r=a("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"colors",{enumerable:!0,get:function(){return n.default}}),Object.defineProperty(t,"elevations",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(t,"fills",{enumerable:!0,get:function(){return l.default}}),Object.defineProperty(t,"palette",{enumerable:!0,get:function(){return i.default}});var n=r(a("./src/theme/default-theme/foundational-styles/colors.ts")),o=r(a("./src/theme/default-theme/foundational-styles/elevations.ts")),l=r(a("./src/theme/default-theme/foundational-styles/fills.ts")),i=r(a("./src/theme/default-theme/foundational-styles/palette.ts"))},"./src/theme/default-theme/foundational-styles/palette.ts":function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default={neutral:{lightest:"#fafafa",light:"#eeeeee",base:"#cccccc",dark:"#a7a7a7",darkest:"#7e7e7e"},blue:{lightest:"#e5f5ff",light:"#ceecff",base:"#1ca5F7",dark:"#59a9de",darkest:"#33495f"},red:{lightest:"#f9e1de",light:"#f9aa9f",base:"#d26557",dark:"#bb584e",darkest:"#b74033"},orange:{lightest:"#fce8cf",light:"#f2c58a",base:"#f3b058",dark:"#ec8e30",darkest:"#b26500"},yellow:{lightest:"#fef8e7",light:"#fbe6a2",base:"#f7d154",dark:"#d1b047",darkest:"#7e6514"},green:{lightest:"#eafff3",light:"#c2edd5",base:"#54bf84",dark:"#42a46e",darkest:"#16a054"},teal:{lightest:"#d6fcf7",light:"#c0f9f2",base:"#67c6bb",dark:"#3fa296",darkest:"#1b877a"},purple:{lightest:"#f8f7fc",light:"#eae7f8",base:"#735dd0",dark:"#37248f",darkest:"#37248f"}}},"./src/theme/default-theme/index.ts":function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0}),t.defaultTheme=void 0;var r=a("./src/theme/default-theme/controls/index.ts"),n=a("./src/theme/default-theme/foundational-styles/index.ts"),o=a("./src/theme/default-theme/typography/index.ts"),l={colors:n.colors,fills:n.fills,fontFamilies:o.fontFamilies,fontWeights:o.fontWeights,headingSizes:o.headingSizes,paragraphSizes:o.paragraphSizes,textSizes:o.textSizes,elevations:n.elevations,controlBorderRadius:r.controlBorderRadius,controlHeights:r.controlHeights,controlPaddings:r.controlPaddings};t.defaultTheme=l},"./src/theme/default-theme/typography/fontFamilies.ts":function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0}),t.fontFamilies=void 0;var r="web"===a("./node_modules/react-native-web/dist/index.js").Platform.OS?{heading:'"SF UI Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',mono:'"SF Mono", "Monaco", "Inconsolata", "Fira Mono", "Droid Sans Mono", "Source Code Pro", monospace',text:'"SF UI Text", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"'}:{heading:void 0,mono:void 0,text:void 0};t.fontFamilies=r},"./src/theme/default-theme/typography/fontWeights.ts":function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.fontWeights=void 0;t.fontWeights={bold:"bold",light:"300",normal:"normal"}},"./src/theme/default-theme/typography/headingSizes.ts":function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.headingSizes=void 0;t.headingSizes={xxxlarge:{fontSize:35,letterSpacing:-.2,lineHeight:40},xxlarge:{fontSize:29,letterSpacing:-.2,lineHeight:32},xlarge:{fontSize:24,letterSpacing:-.07,lineHeight:28},large:{fontSize:20,letterSpacing:-.07,lineHeight:24},medium:{fontSize:16,letterSpacing:-.05,lineHeight:20},small:{fontSize:14,letterSpacing:-.05,lineHeight:20}}},"./src/theme/default-theme/typography/index.ts":function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"fontFamilies",{enumerable:!0,get:function(){return r.fontFamilies}}),Object.defineProperty(t,"fontWeights",{enumerable:!0,get:function(){return n.fontWeights}}),Object.defineProperty(t,"textSizes",{enumerable:!0,get:function(){return o.textSizes}}),Object.defineProperty(t,"paragraphSizes",{enumerable:!0,get:function(){return l.paragraphSizes}}),Object.defineProperty(t,"headingSizes",{enumerable:!0,get:function(){return i.headingSizes}});var r=a("./src/theme/default-theme/typography/fontFamilies.ts"),n=a("./src/theme/default-theme/typography/fontWeights.ts"),o=a("./src/theme/default-theme/typography/textSizes.ts"),l=a("./src/theme/default-theme/typography/paragraphSizes.ts"),i=a("./src/theme/default-theme/typography/headingSizes.ts")},"./src/theme/default-theme/typography/paragraphSizes.ts":function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.paragraphSizes=void 0;t.paragraphSizes={small:{fontSize:14,lineHeight:24},medium:{fontSize:16,lineHeight:21},large:{fontSize:18,lineHeight:18}}},"./src/theme/default-theme/typography/textSizes.ts":function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.textSizes=void 0;t.textSizes={large:{fontSize:20},medium:{fontSize:16},small:{fontSize:14}}},"./src/theme/index.ts":function(e,t,a){var r=a("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0});var n={defaultTheme:!0,withTheme:!0,createTheme:!0};Object.defineProperty(t,"defaultTheme",{enumerable:!0,get:function(){return o.defaultTheme}}),Object.defineProperty(t,"withTheme",{enumerable:!0,get:function(){return s.default}}),Object.defineProperty(t,"createTheme",{enumerable:!0,get:function(){return d.createTheme}});var o=a("./src/theme/default-theme/index.ts"),l=a("./src/theme/ThemeContext.ts");Object.keys(l).forEach(function(e){"default"!==e&&"__esModule"!==e&&(Object.prototype.hasOwnProperty.call(n,e)||Object.defineProperty(t,e,{enumerable:!0,get:function(){return l[e]}}))});var i=a("./src/theme/ThemeInterface.ts");Object.keys(i).forEach(function(e){"default"!==e&&"__esModule"!==e&&(Object.prototype.hasOwnProperty.call(n,e)||Object.defineProperty(t,e,{enumerable:!0,get:function(){return i[e]}}))});var s=r(a("./src/theme/withTheme.tsx")),d=a("./src/theme/createTheme.ts");try{theme.displayName="theme",theme.__docgenInfo={description:"",displayName:"theme",props:{colors:{defaultValue:null,description:"",name:"colors",required:!1,type:{name:"DeepPartial<Colors>"}},fills:{defaultValue:null,description:"",name:"fills",required:!1,type:{name:"DeepPartial<Fills>"}},fontFamilies:{defaultValue:null,description:"",name:"fontFamilies",required:!1,type:{name:"DeepPartial<FontFamilies>"}},fontWeights:{defaultValue:null,description:"",name:"fontWeights",required:!1,type:{name:"DeepPartial<FontWeights>"}},headingSizes:{defaultValue:null,description:"",name:"headingSizes",required:!1,type:{name:"DeepPartial<HeadingSizes>"}},paragraphSizes:{defaultValue:null,description:"",name:"paragraphSizes",required:!1,type:{name:"DeepPartial<ParagraphSizes>"}},textSizes:{defaultValue:null,description:"",name:"textSizes",required:!1,type:{name:"DeepPartial<TextSizes>"}},elevations:{defaultValue:null,description:"",name:"elevations",required:!1,type:{name:"DeepPartial<ViewStyle>[]"}},controlPaddings:{defaultValue:null,description:"",name:"controlPaddings",required:!1,type:{name:"DeepPartial<ControlSizes>"}},controlHeights:{defaultValue:null,description:"",name:"controlHeights",required:!1,type:{name:"DeepPartial<ControlSizes>"}},controlBorderRadius:{defaultValue:null,description:"",name:"controlBorderRadius",required:!1,type:{name:"DeepPartial<ControlSizes>"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/theme/index.ts#theme"]={docgenInfo:theme.__docgenInfo,name:"theme",path:"src/theme/index.ts#theme"})}catch(u){}},"./src/theme/withTheme.tsx":function(e,t,a){var r=a("./node_modules/@babel/runtime/helpers/interopRequireWildcard.js"),n=a("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(a("./node_modules/@babel/runtime/helpers/extends.js")),l=n(a("./node_modules/@babel/runtime/helpers/classCallCheck.js")),i=n(a("./node_modules/@babel/runtime/helpers/createClass.js")),s=n(a("./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js")),d=n(a("./node_modules/@babel/runtime/helpers/getPrototypeOf.js")),u=n(a("./node_modules/@babel/runtime/helpers/inherits.js")),c=r(a("./node_modules/react/index.js")),f=a("./src/theme/ThemeContext.ts"),p=function(e){var t,a,r=e.displayName||e.name||"Component";return a=t=function(t){function a(){return(0,l.default)(this,a),(0,s.default)(this,(0,d.default)(a).apply(this,arguments))}return(0,u.default)(a,t),(0,i.default)(a,[{key:"render",value:function(){var t=this;return c.createElement(f.ThemeContext.Consumer,null,function(a){return c.createElement(e,(0,o.default)({theme:a},t.props))})}}]),a}(c.PureComponent),t.displayName=r,a},m=p;t.default=m;try{p.displayName="withTheme",p.__docgenInfo={description:"",displayName:"withTheme",props:{propTypes:{defaultValue:null,description:"",name:"propTypes",required:!0,type:{name:"WeakValidationMap<TWrappedComponentProps>"}},contextTypes:{defaultValue:null,description:"",name:"contextTypes",required:!0,type:{name:"ValidationMap<any>"}},defaultProps:{defaultValue:null,description:"",name:"defaultProps",required:!0,type:{name:"Partial<TWrappedComponentProps>"}},displayName:{defaultValue:null,description:"",name:"displayName",required:!0,type:{name:"string"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/theme/withTheme.tsx#withTheme"]={docgenInfo:p.__docgenInfo,name:"withTheme",path:"src/theme/withTheme.tsx#withTheme"})}catch(h){}},"./src/utils/mergeStyles.ts":function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0}),t.mergeStyles=void 0;var r=a("./node_modules/deepmerge/dist/umd.js");t.mergeStyles=function(e,t){return function(){var a=e.apply(void 0,arguments);return t?r(a,t.apply(void 0,arguments)):a}}}}]);
//# sourceMappingURL=11.586c54bb9e5eb64e8829.js.map