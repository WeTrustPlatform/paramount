(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{"./src/components/Typography/Paragraph.mdx":function(e,a,t){var n=t("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var r=n(t("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js")),o=n(t("./node_modules/@babel/runtime/helpers/classCallCheck.js")),l=n(t("./node_modules/@babel/runtime/helpers/createClass.js")),s=n(t("./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js")),p=n(t("./node_modules/@babel/runtime/helpers/getPrototypeOf.js")),m=n(t("./node_modules/@babel/runtime/helpers/inherits.js")),i=n(t("./node_modules/react/index.js")),d=t("./node_modules/@mdx-js/tag/dist/index.js"),u=t("./node_modules/docz/dist/index.m.js"),c=t("./src/components/Typography/index.ts"),g=t("./src/components/Layout/index.ts"),h=function(e){function a(e){var t;return(0,o.default)(this,a),(t=(0,s.default)(this,(0,p.default)(a).call(this,e))).layout=null,t}return(0,m.default)(a,e),(0,l.default)(a,[{key:"render",value:function(){var e=this.props,a=e.components,t=(0,r.default)(e,["components"]);return i.default.createElement(d.MDXTag,{name:"wrapper",components:a},i.default.createElement(d.MDXTag,{name:"h1",components:a,props:{id:"paragraph"}},"Paragraph"),i.default.createElement(d.MDXTag,{name:"p",components:a},"Composes React Native's ",i.default.createElement(d.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"Text")," component (i.e. you can pass its props)"),i.default.createElement(d.MDXTag,{name:"p",components:a},i.default.createElement(d.MDXTag,{name:"strong",components:a,parentName:"p"},"Note!!!")," In web environment sometimes you need to wrap ",i.default.createElement(d.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"Paragraph")," in a ",i.default.createElement(d.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"<Box>")," or provide a parent node with ",i.default.createElement(d.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"display: flex")," and ",i.default.createElement(d.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"flex-direction: column")," for centering to work properly. In React Native it is non issue because all nodes be default have these properties"),i.default.createElement(d.MDXTag,{name:"h3",components:a,props:{id:"usage"}},"Usage"),i.default.createElement(u.Playground,{__position:0,__code:'<Box>\n  <Paragraph\n    color="primary"\n    align="left"\n    size="large" // small - large or number\n    fontFamily="text"\n    weight="normal"\n    getStyles={(props, theme) => ({\n      paragraphStyle: {},\n    })}\n  >\n    Lorem ipsum dolar set amet\n  </Paragraph>\n</Box>',__scope:{props:this?this.props:t,Paragraph:c.Paragraph,Box:g.Box}},i.default.createElement(g.Box,null,i.default.createElement(c.Paragraph,{color:"primary",align:"left",size:"large",fontFamily:"text",weight:"normal",getStyles:function(e,a){return{paragraphStyle:{}}}},"Lorem ipsum dolar set amet"))),i.default.createElement(d.MDXTag,{name:"h3",components:a,props:{id:"sizes"}},"Sizes"),i.default.createElement(u.Playground,{__position:1,__code:'<Box flexDirection="column">\n  <Paragraph size="small">Lorem ipsum dolar set amet</Paragraph>\n  <Paragraph size="medium">Lorem ipsum dolar set amet</Paragraph>\n  <Paragraph size="large">Lorem ipsum dolar set amet</Paragraph>\n</Box>',__scope:{props:this?this.props:t,Paragraph:c.Paragraph,Box:g.Box}},i.default.createElement(g.Box,{flexDirection:"column"},i.default.createElement(c.Paragraph,{size:"small"},"Lorem ipsum dolar set amet"),i.default.createElement(c.Paragraph,{size:"medium"},"Lorem ipsum dolar set amet"),i.default.createElement(c.Paragraph,{size:"large"},"Lorem ipsum dolar set amet"))))}}]),a}(i.default.Component);a.default=h}}]);
//# sourceMappingURL=50.20cf0d8d264414702445.js.map