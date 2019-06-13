(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{"./src/components/Typography/Heading.mdx":function(e,n,d){var i=d("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(n,"__esModule",{value:!0}),n.default=t;var a=i(d("./node_modules/@babel/runtime/helpers/extends.js")),o=i(d("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js")),r=(i(d("./node_modules/react/index.js")),d("./node_modules/@mdx-js/react/dist/index.es.js")),s=d("./node_modules/docz/dist/index.esm.js"),m=d("./src/components/index.ts"),l={},x="wrapper";function t(e){var n=e.components,d=(0,o.default)(e,["components"]);return(0,r.mdx)(x,(0,a.default)({},l,d,{components:n,mdxType:"MDXLayout"}),(0,r.mdx)("h1",{id:"heading"},"Heading"),(0,r.mdx)("p",null,"Composes React Native's ",(0,r.mdx)("inlineCode",{parentName:"p"},"Text")," component (i.e. you can pass its props)"),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Note!!!")," In web environment sometimes you need to wrap ",(0,r.mdx)("inlineCode",{parentName:"p"},"Heading")," in a ",(0,r.mdx)("inlineCode",{parentName:"p"},"<Box>")," or provide a parent node with ",(0,r.mdx)("inlineCode",{parentName:"p"},"display: flex")," and ",(0,r.mdx)("inlineCode",{parentName:"p"},"flex-direction: column")," for centering to work properly. In React Native it is non issue because all nodes be default have these properties"),(0,r.mdx)("h3",{id:"usage"},"Usage"),(0,r.mdx)(s.Playground,{__position:0,__code:'<Box>\n  <Heading\n    accessibilityLevel={3} // 1-6\n    align="center"\n    size="xxlarge" // small - xxxlarge or number\n    color="primary" // or custom\n    weight="600"\n    getStyles={(props, theme) => ({\n      headingStyle: {},\n    })}\n  >\n    Lorem ipsum dolar set amet\n  </Heading>\n</Box>',__scope:{props:this?this.props:d,Playground:s.Playground,Props:s.Props,Box:m.Box,Heading:m.Heading},mdxType:"Playground"},(0,r.mdx)(m.Box,{mdxType:"Box"},(0,r.mdx)(m.Heading,{accessibilityLevel:3,align:"center",size:"xxlarge",color:"primary",weight:"600",getStyles:function(e,n){return{headingStyle:{}}},mdxType:"Heading"},"Lorem ipsum dolar set amet"))),(0,r.mdx)(s.Playground,{__position:1,__code:'<Box flexDirection="column">\n  <Heading size="xxxlarge">xxxlarge</Heading>\n  <Heading size="xxlarge">xxlarge</Heading>\n  <Heading size="xlarge">xlarge</Heading>\n  <Heading size="large">large</Heading>\n  <Heading size="medium">medium</Heading>\n  <Heading size="small">small</Heading>\n</Box>',__scope:{props:this?this.props:d,Playground:s.Playground,Props:s.Props,Box:m.Box,Heading:m.Heading},mdxType:"Playground"},(0,r.mdx)(m.Box,{flexDirection:"column",mdxType:"Box"},(0,r.mdx)(m.Heading,{size:"xxxlarge",mdxType:"Heading"},"xxxlarge"),(0,r.mdx)(m.Heading,{size:"xxlarge",mdxType:"Heading"},"xxlarge"),(0,r.mdx)(m.Heading,{size:"xlarge",mdxType:"Heading"},"xlarge"),(0,r.mdx)(m.Heading,{size:"large",mdxType:"Heading"},"large"),(0,r.mdx)(m.Heading,{size:"medium",mdxType:"Heading"},"medium"),(0,r.mdx)(m.Heading,{size:"small",mdxType:"Heading"},"small"))),(0,r.mdx)("h3",{id:"props"},"Props"),(0,r.mdx)(s.Props,{of:m.Heading,mdxType:"Props"}))}t&&t===Object(t)&&Object.isExtensible(t)&&Object.defineProperty(t,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src/components/Typography/Heading.mdx"}}),t.isMDXComponent=!0}}]);
//# sourceMappingURL=35.b2d7fd6e78b64eb52f9c.js.map