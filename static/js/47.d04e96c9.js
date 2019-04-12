(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{"./src/components/Typography/Heading.mdx":function(e,n,a){var t=a("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var l=t(a("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js")),o=t(a("./node_modules/@babel/runtime/helpers/classCallCheck.js")),r=t(a("./node_modules/@babel/runtime/helpers/createClass.js")),i=t(a("./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js")),s=t(a("./node_modules/@babel/runtime/helpers/getPrototypeOf.js")),d=t(a("./node_modules/@babel/runtime/helpers/inherits.js")),m=t(a("./node_modules/react/index.js")),p=a("./node_modules/@mdx-js/tag/dist/index.js"),u=a("./node_modules/docz/dist/index.m.js"),c=a("./src/components/Typography/index.ts"),g=a("./src/components/Layout/index.ts"),x=function(e){function n(e){var a;return(0,o.default)(this,n),(a=(0,i.default)(this,(0,s.default)(n).call(this,e))).layout=null,a}return(0,d.default)(n,e),(0,r.default)(n,[{key:"render",value:function(){var e=this.props,n=e.components,a=(0,l.default)(e,["components"]);return m.default.createElement(p.MDXTag,{name:"wrapper",components:n},m.default.createElement(p.MDXTag,{name:"h1",components:n,props:{id:"heading"}},"Heading"),m.default.createElement(p.MDXTag,{name:"p",components:n},"Composes React Native's ",m.default.createElement(p.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"Text")," component (i.e. you can pass its props)"),m.default.createElement(p.MDXTag,{name:"p",components:n},m.default.createElement(p.MDXTag,{name:"strong",components:n,parentName:"p"},"Note!!!")," In web environment sometimes you need to wrap ",m.default.createElement(p.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"Heading")," in a ",m.default.createElement(p.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"<Box>")," or provide a parent node with ",m.default.createElement(p.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"display: flex")," and ",m.default.createElement(p.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"flex-direction: column")," for centering to work properly. In React Native it is non issue because all nodes be default have these properties"),m.default.createElement(p.MDXTag,{name:"h3",components:n,props:{id:"usage"}},"Usage"),m.default.createElement(u.Playground,{__position:0,__code:'<Box>\n  <Heading\n    accessibilityLevel={3} // 1-6\n    align="center"\n    size="xxlarge" // small - xxxlarge or number\n    color="primary" // or custom\n    getStyles={(props, theme) => ({\n      headingStyle: {},\n    })}\n  >\n    Lorem ipsum dolar set amet\n  </Heading>\n</Box>',__scope:{props:this?this.props:a,Heading:c.Heading,Box:g.Box}},m.default.createElement(g.Box,null,m.default.createElement(c.Heading,{accessibilityLevel:3,align:"center",size:"xxlarge",color:"primary",getStyles:function(e,n){return{headingStyle:{}}}},"Lorem ipsum dolar set amet"))),m.default.createElement(u.Playground,{__position:1,__code:'<Box flexDirection="column">\n  <Heading size="xxxlarge">xxxlarge</Heading>\n  <Heading size="xxlarge">xxlarge</Heading>\n  <Heading size="xlarge">xlarge</Heading>\n  <Heading size="large">large</Heading>\n  <Heading size="medium">medium</Heading>\n  <Heading size="small">small</Heading>\n</Box>',__scope:{props:this?this.props:a,Heading:c.Heading,Box:g.Box}},m.default.createElement(g.Box,{flexDirection:"column"},m.default.createElement(c.Heading,{size:"xxxlarge"},"xxxlarge"),m.default.createElement(c.Heading,{size:"xxlarge"},"xxlarge"),m.default.createElement(c.Heading,{size:"xlarge"},"xlarge"),m.default.createElement(c.Heading,{size:"large"},"large"),m.default.createElement(c.Heading,{size:"medium"},"medium"),m.default.createElement(c.Heading,{size:"small"},"small"))))}}]),n}(m.default.Component);n.default=x}}]);
//# sourceMappingURL=47.586c54bb9e5eb64e8829.js.map