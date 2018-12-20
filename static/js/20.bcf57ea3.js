(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{"./src/components/Counter/Counter.mdx":function(e,n,t){var o=t("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=o(t("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js")),a=o(t("./node_modules/@babel/runtime/helpers/classCallCheck.js")),l=o(t("./node_modules/@babel/runtime/helpers/createClass.js")),u=o(t("./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js")),s=o(t("./node_modules/@babel/runtime/helpers/getPrototypeOf.js")),i=o(t("./node_modules/@babel/runtime/helpers/inherits.js")),d=o(t("./node_modules/react/index.js")),c=t("./node_modules/@mdx-js/tag/dist/index.js"),m=t("./node_modules/docz/dist/index.m.js"),p=o(t("./src/components/Counter/Counter.tsx")),f=t("./src/components/Layout/index.ts"),_=t("./node_modules/react-powerplug/dist/react-powerplug.esm.js"),y=function(e){function n(e){var t;return(0,a.default)(this,n),(t=(0,u.default)(this,(0,s.default)(n).call(this,e))).layout=null,t}return(0,i.default)(n,e),(0,l.default)(n,[{key:"render",value:function(){var e=this.props,n=e.components,t=(0,r.default)(e,["components"]);return d.default.createElement(c.MDXTag,{name:"wrapper",components:n},d.default.createElement(c.MDXTag,{name:"h2",components:n,props:{id:"usage"}},"Usage"),d.default.createElement(c.MDXTag,{name:"h3",components:n,props:{id:"counter"}},"Counter"),d.default.createElement(m.Playground,{__position:0,__code:"<CounterContainer initial={1}>\n  {({ count, inc, dec }) => (\n    <Counter count={count} onIncrement={inc} onDecrement={dec} />\n  )}\n</CounterContainer>",__scope:{props:this?this.props:t,Counter:p.default,Spacing:f.Spacing,CounterContainer:_.Counter}},d.default.createElement(_.Counter,{initial:1},function(e){var n=e.count,t=e.inc,o=e.dec;return d.default.createElement(p.default,{count:n,onIncrement:t,onDecrement:o})})),d.default.createElement(c.MDXTag,{name:"h3",components:n,props:{id:"counter-with-disabled-decrement"}},"Counter with disabled decrement"),d.default.createElement(m.Playground,{__position:1,__code:"<CounterContainer initial={0}>\n  {({ count, inc }) => (\n    <Counter count={count} onIncrement={inc} isDecrementDisabled />\n  )}\n</CounterContainer>",__scope:{props:this?this.props:t,Counter:p.default,Spacing:f.Spacing,CounterContainer:_.Counter}},d.default.createElement(_.Counter,{initial:0},function(e){var n=e.count,t=e.inc;return d.default.createElement(p.default,{count:n,onIncrement:t,isDecrementDisabled:!0})})),d.default.createElement(c.MDXTag,{name:"h2",components:n,props:{id:"props"}},"Props"),d.default.createElement(m.PropsTable,{of:p.default}))}}]),n}(d.default.Component);n.default=y},"./src/components/Counter/Counter.tsx":function(e,n,t){var o=t("./node_modules/@babel/runtime/helpers/interopRequireWildcard.js"),r=t("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(n,"__esModule",{value:!0}),n.default=n.Counter=void 0;var a=r(t("./node_modules/@babel/runtime/helpers/objectSpread.js")),l=o(t("./node_modules/react/index.js")),u=t("./node_modules/react-icons/fi/index.js"),s=t("./node_modules/react-native-web/dist/index.js"),i=t("./src/theme/index.ts"),d=t("./src/components/Layout/index.ts"),c=(0,i.withTheme)(function(e){var n=e.count,t=e.component,o=e.onIncrement,r=e.onDecrement,i=e.isIncrementDisabled,c=e.isDecrementDisabled,m=e.dangerouslySetInlineStyle,p=e.theme,f=p.getCounterStyles(),_=f.containerStyle,y=f.counterStyle,C=f.countStyle,b=f.disabledStyle;return l.createElement(s.View,{style:(0,a.default)({},_,m&&m.containerStyle)},l.createElement(d.Spacing,{paddingRight:2},l.createElement(s.TouchableOpacity,{activeOpacity:.7,style:(0,a.default)({},y,m&&m.counterStyle,c&&b),disabled:c,onPress:c?void 0:r},l.createElement(u.FiMinus,{size:16,color:c?p.themeVariables.colors.text.muted:p.themeVariables.colors.text.primary}))),t||l.createElement(s.View,{style:(0,a.default)({},C,m&&m.countStyle)},n),l.createElement(d.Spacing,{paddingLeft:2},l.createElement(s.TouchableOpacity,{activeOpacity:.7,style:(0,a.default)({},y,m&&m.counterStyle,i&&b),disabled:i,onPress:i?void 0:o},l.createElement(u.FiPlus,{size:16,color:i?p.themeVariables.colors.text.muted:p.themeVariables.colors.text.primary}))))});n.Counter=c;var m=c;n.default=m;try{c.displayName="Counter",c.__docgenInfo={description:"",displayName:"Counter",props:{count:{defaultValue:null,description:"",name:"count",required:!0,type:{name:"number"}},component:{defaultValue:null,description:"",name:"component",required:!1,type:{name:"ReactNode"}},onIncrement:{defaultValue:null,description:"",name:"onIncrement",required:!1,type:{name:"() => void"}},onDecrement:{defaultValue:null,description:"",name:"onDecrement",required:!1,type:{name:"() => void"}},isIncrementDisabled:{defaultValue:null,description:"",name:"isIncrementDisabled",required:!1,type:{name:"boolean"}},isDecrementDisabled:{defaultValue:null,description:"",name:"isDecrementDisabled",required:!1,type:{name:"boolean"}},dangerouslySetInlineStyle:{defaultValue:null,description:"Inline styles for components",name:"dangerouslySetInlineStyle",required:!1,type:{name:"Partial<ICounterStyles>"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Counter/Counter.tsx#Counter"]={docgenInfo:c.__docgenInfo,name:"Counter",path:"src/components/Counter/Counter.tsx#Counter"})}catch(p){}try{__class.displayName="__class",__class.__docgenInfo={description:"",displayName:"__class",props:{count:{defaultValue:null,description:"",name:"count",required:!0,type:{name:"number"}},component:{defaultValue:null,description:"",name:"component",required:!1,type:{name:"ReactNode"}},onIncrement:{defaultValue:null,description:"",name:"onIncrement",required:!1,type:{name:"() => void"}},onDecrement:{defaultValue:null,description:"",name:"onDecrement",required:!1,type:{name:"() => void"}},isIncrementDisabled:{defaultValue:null,description:"",name:"isIncrementDisabled",required:!1,type:{name:"boolean"}},isDecrementDisabled:{defaultValue:null,description:"",name:"isDecrementDisabled",required:!1,type:{name:"boolean"}},dangerouslySetInlineStyle:{defaultValue:null,description:"Inline styles for components",name:"dangerouslySetInlineStyle",required:!1,type:{name:"Partial<ICounterStyles>"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Counter/Counter.tsx#__class"]={docgenInfo:__class.__docgenInfo,name:"__class",path:"src/components/Counter/Counter.tsx#__class"})}catch(p){}}}]);
//# sourceMappingURL=20.7ae571d33b8977a49fed.js.map