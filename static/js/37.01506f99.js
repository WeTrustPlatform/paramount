(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{"./src/components/Typography/Heading.mdx":function(e,n,d){var i=d("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(n,"__esModule",{value:!0}),n.default=p;var a=i(d("./node_modules/@babel/runtime/helpers/extends.js")),o=i(d("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js")),s=(i(d("./node_modules/react/index.js")),d("./node_modules/@mdx-js/react/dist/index.es.js")),r=d("./node_modules/docz/dist/index.esm.js"),m=d("./src/components/Typography/index.ts"),x=d("./src/components/Box/index.ts"),l={},t="wrapper";function p(e){var n=e.components,d=(0,o.default)(e,["components"]);return(0,s.mdx)(t,(0,a.default)({},l,d,{components:n,mdxType:"MDXLayout"}),(0,s.mdx)("h1",{id:"heading"},"Heading"),(0,s.mdx)("p",null,"Composes React Native's ",(0,s.mdx)("inlineCode",{parentName:"p"},"Text")," component (i.e. you can pass its props)"),(0,s.mdx)("p",null,(0,s.mdx)("strong",{parentName:"p"},"Note!!!")," In web environment sometimes you need to wrap ",(0,s.mdx)("inlineCode",{parentName:"p"},"Heading")," in a ",(0,s.mdx)("inlineCode",{parentName:"p"},"<Box>")," or provide a parent node with ",(0,s.mdx)("inlineCode",{parentName:"p"},"display: flex")," and ",(0,s.mdx)("inlineCode",{parentName:"p"},"flex-direction: column")," for centering to work properly. In React Native it is non issue because all nodes be default have these properties"),(0,s.mdx)("h3",{id:"usage"},"Usage"),(0,s.mdx)(r.Playground,{__position:0,__code:'<Box>\n  <Heading\n    accessibilityLevel={3} // 1-6\n    align="center"\n    size="xxlarge" // small - xxxlarge or number\n    color="primary" // or custom\n    weight="600"\n    getStyles={(props, theme) => ({\n      headingStyle: {},\n    })}\n  >\n    Lorem ipsum dolar set amet\n  </Heading>\n</Box>',__scope:{props:this?this.props:d,Playground:r.Playground,Props:r.Props,Heading:m.Heading,Box:x.Box},mdxType:"Playground"},(0,s.mdx)(x.Box,{mdxType:"Box"},(0,s.mdx)(m.Heading,{accessibilityLevel:3,align:"center",size:"xxlarge",color:"primary",weight:"600",getStyles:function(e,n){return{headingStyle:{}}},mdxType:"Heading"},"Lorem ipsum dolar set amet"))),(0,s.mdx)(r.Playground,{__position:1,__code:'<Box flexDirection="column">\n  <Heading size="xxxlarge">xxxlarge</Heading>\n  <Heading size="xxlarge">xxlarge</Heading>\n  <Heading size="xlarge">xlarge</Heading>\n  <Heading size="large">large</Heading>\n  <Heading size="medium">medium</Heading>\n  <Heading size="small">small</Heading>\n</Box>',__scope:{props:this?this.props:d,Playground:r.Playground,Props:r.Props,Heading:m.Heading,Box:x.Box},mdxType:"Playground"},(0,s.mdx)(x.Box,{flexDirection:"column",mdxType:"Box"},(0,s.mdx)(m.Heading,{size:"xxxlarge",mdxType:"Heading"},"xxxlarge"),(0,s.mdx)(m.Heading,{size:"xxlarge",mdxType:"Heading"},"xxlarge"),(0,s.mdx)(m.Heading,{size:"xlarge",mdxType:"Heading"},"xlarge"),(0,s.mdx)(m.Heading,{size:"large",mdxType:"Heading"},"large"),(0,s.mdx)(m.Heading,{size:"medium",mdxType:"Heading"},"medium"),(0,s.mdx)(m.Heading,{size:"small",mdxType:"Heading"},"small"))),(0,s.mdx)("h3",{id:"props"},"Props"),(0,s.mdx)(r.Props,{of:m.Heading,mdxType:"Props"}))}p&&p===Object(p)&&Object.isExtensible(p)&&Object.defineProperty(p,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src/components/Typography/Heading.mdx"}}),p.isMDXComponent=!0}}]);
//# sourceMappingURL=37.e29ba8862b1e78c0afd3.js.map