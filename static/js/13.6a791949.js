(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{"./src/components/Badge/Badge.mdx":function(e,l,o){var n=o("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(l,"__esModule",{value:!0}),l.default=void 0;var t=n(o("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js")),a=n(o("./node_modules/@babel/runtime/helpers/classCallCheck.js")),s=n(o("./node_modules/@babel/runtime/helpers/createClass.js")),r=n(o("./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js")),d=n(o("./node_modules/@babel/runtime/helpers/getPrototypeOf.js")),i=n(o("./node_modules/@babel/runtime/helpers/inherits.js")),u=n(o("./node_modules/react/index.js")),c=o("./node_modules/@mdx-js/tag/dist/index.js"),m=o("./node_modules/docz/dist/index.m.js"),p=n(o("./src/components/Badge/Badge.tsx")),f=o("./src/theme/index.ts"),g=o("./src/components/Layout/index.ts"),h=function(e){function l(e){var o;return(0,a.default)(this,l),(o=(0,r.default)(this,(0,d.default)(l).call(this,e))).layout=null,o}return(0,i.default)(l,e),(0,s.default)(l,[{key:"render",value:function(){var e=this.props,l=e.components,o=(0,t.default)(e,["components"]);return u.default.createElement(c.MDXTag,{name:"wrapper",components:l},u.default.createElement(c.MDXTag,{name:"h2",components:l,props:{id:"usage"}},"Usage"),u.default.createElement(c.MDXTag,{name:"h3",components:l,props:{id:"default"}},"Default"),u.default.createElement(m.Playground,{__position:0,__code:"<ThemeConsumer>\n  {theme => (\n    <Box>\n      {Object.keys(theme.themeVariables.fills.solid).map(color => (\n        <Box key={color}>\n          <Badge color={color}>{color}</Badge>\n          <Badge color={color} isSolid>\n            {color}\n          </Badge>\n        </Box>\n      ))}\n    </Box>\n  )}\n</ThemeConsumer>",__scope:{props:this?this.props:o,Badge:p.default,ThemeConsumer:f.ThemeConsumer,Box:g.Box}},u.default.createElement(f.ThemeConsumer,null,function(e){return u.default.createElement(g.Box,null,Object.keys(e.themeVariables.fills.solid).map(function(e){return u.default.createElement(g.Box,{key:e},u.default.createElement(p.default,{color:e},e),u.default.createElement(p.default,{color:e,isSolid:!0},e))}))})),u.default.createElement(c.MDXTag,{name:"h3",components:l,props:{id:"pills"}},"Pills"),u.default.createElement(m.Playground,{__position:1,__code:'<ThemeConsumer>\n  {theme => (\n    <Box>\n      {Object.keys(theme.themeVariables.fills.solid).map(color => (\n        <Box key={color}>\n          <Badge shape="pill" color={color}>\n            {color}\n          </Badge>\n          <Badge shape="pill" color={color} isSolid>\n            {color}\n          </Badge>\n        </Box>\n      ))}\n    </Box>\n  )}\n</ThemeConsumer>',__scope:{props:this?this.props:o,Badge:p.default,ThemeConsumer:f.ThemeConsumer,Box:g.Box}},u.default.createElement(f.ThemeConsumer,null,function(e){return u.default.createElement(g.Box,null,Object.keys(e.themeVariables.fills.solid).map(function(e){return u.default.createElement(g.Box,{key:e},u.default.createElement(p.default,{shape:"pill",color:e},e),u.default.createElement(p.default,{shape:"pill",color:e,isSolid:!0},e))}))})),u.default.createElement(c.MDXTag,{name:"h2",components:l,props:{id:"props"}},"Props"),u.default.createElement(m.PropsTable,{of:p.default}))}}]),l}(u.default.Component);l.default=h},"./src/components/Badge/Badge.tsx":function(e,l,o){var n=o("./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");Object.defineProperty(l,"__esModule",{value:!0}),l.default=l.Badge=void 0;var t=n(o("./node_modules/react/index.js")),a=o("./src/theme/index.ts"),s=o("./src/components/Layout/index.ts"),r=o("./src/components/Typography/index.ts"),d=(0,a.withTheme)(function(e){var l=e.theme,o=e.size,n=void 0===o?"small":o,a=e.isSolid,d=void 0!==a&&a,i=e.color,u=void 0===i?"neutral":i,c=e.shape,m=void 0===c?"rounded":c,p=e.children,f=l.getBadgeStyles(n,u,d),g=f.boxStyle,h=f.textStyle;return t.createElement(s.Box,{backgroundColor:g.backgroundColor,height:g.height,paddingLeft:g.paddingLeft,paddingRight:g.paddingRight,shape:m,display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center",alignSelf:"flex-start"},t.createElement(r.Strong,{size:n,dangerouslySetInlineStyle:{__style:h}},p))});l.Badge=d;var i=d;l.default=i;try{d.displayName="Badge",d.__docgenInfo={description:"",displayName:"Badge",props:{color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:'"neutral" | "blue" | "red" | "orange" | "yellow" | "green" | "teal" | "purple"'}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:'"small" | "medium" | "large"'}},shape:{defaultValue:null,description:"",name:"shape",required:!1,type:{name:"Shape"}},isSolid:{defaultValue:null,description:"",name:"isSolid",required:!1,type:{name:"boolean"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Badge/Badge.tsx#Badge"]={docgenInfo:d.__docgenInfo,name:"Badge",path:"src/components/Badge/Badge.tsx#Badge"})}catch(u){}try{__class.displayName="__class",__class.__docgenInfo={description:"",displayName:"__class",props:{color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:'"neutral" | "blue" | "red" | "orange" | "yellow" | "green" | "teal" | "purple"'}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:'"small" | "medium" | "large"'}},shape:{defaultValue:null,description:"",name:"shape",required:!1,type:{name:"Shape"}},isSolid:{defaultValue:null,description:"",name:"isSolid",required:!1,type:{name:"boolean"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Badge/Badge.tsx#__class"]={docgenInfo:__class.__docgenInfo,name:"__class",path:"src/components/Badge/Badge.tsx#__class"})}catch(u){}}}]);
//# sourceMappingURL=13.996f08c49beeb10302e8.js.map