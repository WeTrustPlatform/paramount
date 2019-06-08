(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{"./src/components/Typography/Text.mdx":function(e,t,o){var x=o("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.default=T;var n=x(o("./node_modules/@babel/runtime/helpers/extends.js")),m=x(o("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js")),r=(x(o("./node_modules/react/index.js")),o("./node_modules/@mdx-js/react/dist/index.es.js")),d=o("./node_modules/docz/dist/index.esm.js"),i=o("./src/components/Typography/index.ts"),s=o("./src/components/Box/index.ts"),l={},a="wrapper";function T(e){var t=e.components,o=(0,m.default)(e,["components"]);return(0,r.mdx)(a,(0,n.default)({},l,o,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("h1",{id:"text"},"Text"),(0,r.mdx)("p",null,"Composes React Native's ",(0,r.mdx)("inlineCode",{parentName:"p"},"Text")," component (i.e. you can pass its props)"),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Note!!!")," In web environment sometimes you need to wrap ",(0,r.mdx)("inlineCode",{parentName:"p"},"Text")," in a ",(0,r.mdx)("inlineCode",{parentName:"p"},"<Box>")," or provide a parent node with ",(0,r.mdx)("inlineCode",{parentName:"p"},"display: flex")," and ",(0,r.mdx)("inlineCode",{parentName:"p"},"flex-direction: column")," for centering to work properly. In React Native it is non issue because all nodes be default have these properties"),(0,r.mdx)("h3",{id:"usage"},"Usage"),(0,r.mdx)(d.Playground,{__position:0,__code:'<Box>\n  <Text\n    color="primary" // or custom\n    align="left"\n    size="large" // small - large or number\n    fontFamily="text"\n    weight="normal"\n    isItalic\n    isInline\n    transform="uppercase"\n    getStyles={(props, theme) => ({\n      textStyle: {},\n    })}\n  >\n    Lorem ipsum dolar set amet\n  </Text>\n</Box>',__scope:{props:this?this.props:o,Playground:d.Playground,Props:d.Props,Text:i.Text,Box:s.Box},mdxType:"Playground"},(0,r.mdx)(s.Box,{mdxType:"Box"},(0,r.mdx)(i.Text,{color:"primary",align:"left",size:"large",fontFamily:"text",weight:"normal",isItalic:!0,isInline:!0,transform:"uppercase",getStyles:function(e,t){return{textStyle:{}}},mdxType:"Text"},"Lorem ipsum dolar set amet"))),(0,r.mdx)("h3",{id:"sizes"},"Sizes"),(0,r.mdx)(d.Playground,{__position:1,__code:'<Box flexDirection="column">\n  <Text size="small">small</Text>\n  <Text size="medium">medium</Text>\n  <Text size="large">large</Text>\n</Box>',__scope:{props:this?this.props:o,Playground:d.Playground,Props:d.Props,Text:i.Text,Box:s.Box},mdxType:"Playground"},(0,r.mdx)(s.Box,{flexDirection:"column",mdxType:"Box"},(0,r.mdx)(i.Text,{size:"small",mdxType:"Text"},"small"),(0,r.mdx)(i.Text,{size:"medium",mdxType:"Text"},"medium"),(0,r.mdx)(i.Text,{size:"large",mdxType:"Text"},"large"))),(0,r.mdx)("h3",{id:"colors"},"Colors"),(0,r.mdx)(d.Playground,{__position:2,__code:'<Box flexDirection="column">\n  <Text color="#16a054">#16a054</Text>\n  <Text color="default">default</Text>\n  <Text color="muted">muted</Text>\n  <Text color="link">link</Text>\n  <Text color="white">white</Text>\n  <Text color="selected">selected</Text>\n  <Text color="primary">primary</Text>\n  <Text color="secondary">secondary</Text>\n  <Text color="danger">danger</Text>\n  <Text color="info">info</Text>\n  <Text color="success">success</Text>\n  <Text color="warning">warning</Text>\n</Box>',__scope:{props:this?this.props:o,Playground:d.Playground,Props:d.Props,Text:i.Text,Box:s.Box},mdxType:"Playground"},(0,r.mdx)(s.Box,{flexDirection:"column",mdxType:"Box"},(0,r.mdx)(i.Text,{color:"#16a054",mdxType:"Text"},"#16a054"),(0,r.mdx)(i.Text,{color:"default",mdxType:"Text"},"default"),(0,r.mdx)(i.Text,{color:"muted",mdxType:"Text"},"muted"),(0,r.mdx)(i.Text,{color:"link",mdxType:"Text"},"link"),(0,r.mdx)(i.Text,{color:"white",mdxType:"Text"},"white"),(0,r.mdx)(i.Text,{color:"selected",mdxType:"Text"},"selected"),(0,r.mdx)(i.Text,{color:"primary",mdxType:"Text"},"primary"),(0,r.mdx)(i.Text,{color:"secondary",mdxType:"Text"},"secondary"),(0,r.mdx)(i.Text,{color:"danger",mdxType:"Text"},"danger"),(0,r.mdx)(i.Text,{color:"info",mdxType:"Text"},"info"),(0,r.mdx)(i.Text,{color:"success",mdxType:"Text"},"success"),(0,r.mdx)(i.Text,{color:"warning",mdxType:"Text"},"warning"))),(0,r.mdx)("h3",{id:"font-families"},"Font Families"),(0,r.mdx)(d.Playground,{__position:3,__code:'<Box flexDirection="column">\n  <Text fontFamily="heading">heading</Text>\n  <Text fontFamily="text">text</Text>\n  <Text fontFamily="mono">mono</Text>\n</Box>',__scope:{props:this?this.props:o,Playground:d.Playground,Props:d.Props,Text:i.Text,Box:s.Box},mdxType:"Playground"},(0,r.mdx)(s.Box,{flexDirection:"column",mdxType:"Box"},(0,r.mdx)(i.Text,{fontFamily:"heading",mdxType:"Text"},"heading"),(0,r.mdx)(i.Text,{fontFamily:"text",mdxType:"Text"},"text"),(0,r.mdx)(i.Text,{fontFamily:"mono",mdxType:"Text"},"mono"))),(0,r.mdx)("h3",{id:"font-weights"},"Font Weights"),(0,r.mdx)(d.Playground,{__position:4,__code:'<Box flexDirection="column">\n  <Text weight="500">500</Text>\n  <Text weight="700">700</Text>\n  <Text weight="bold">bold</Text>\n  <Text weight="normal">normal</Text>\n  <Text weight="light">light</Text>\n</Box>',__scope:{props:this?this.props:o,Playground:d.Playground,Props:d.Props,Text:i.Text,Box:s.Box},mdxType:"Playground"},(0,r.mdx)(s.Box,{flexDirection:"column",mdxType:"Box"},(0,r.mdx)(i.Text,{weight:"500",mdxType:"Text"},"500"),(0,r.mdx)(i.Text,{weight:"700",mdxType:"Text"},"700"),(0,r.mdx)(i.Text,{weight:"bold",mdxType:"Text"},"bold"),(0,r.mdx)(i.Text,{weight:"normal",mdxType:"Text"},"normal"),(0,r.mdx)(i.Text,{weight:"light",mdxType:"Text"},"light"))),(0,r.mdx)("h3",{id:"variations"},"Variations"),(0,r.mdx)(d.Playground,{__position:5,__code:'<Box flexDirection="column">\n  <Text isItalic>Lorem ipsum dolar set amet</Text>\n  <Text align="left">Lorem ipsum dolar set amet</Text>\n  <Text align="center">Lorem ipsum dolar set amet</Text>\n  <Text align="right">Lorem ipsum dolar set amet</Text>\n  <Text transform="uppercase">Lorem ipsum dolar set amet</Text>\n  <Text transform="lowercase">Lorem ipsum dolar set amet</Text>\n  <Text transform="capitalize">Lorem ipsum dolar set amet</Text>\n</Box>',__scope:{props:this?this.props:o,Playground:d.Playground,Props:d.Props,Text:i.Text,Box:s.Box},mdxType:"Playground"},(0,r.mdx)(s.Box,{flexDirection:"column",mdxType:"Box"},(0,r.mdx)(i.Text,{isItalic:!0,mdxType:"Text"},"Lorem ipsum dolar set amet"),(0,r.mdx)(i.Text,{align:"left",mdxType:"Text"},"Lorem ipsum dolar set amet"),(0,r.mdx)(i.Text,{align:"center",mdxType:"Text"},"Lorem ipsum dolar set amet"),(0,r.mdx)(i.Text,{align:"right",mdxType:"Text"},"Lorem ipsum dolar set amet"),(0,r.mdx)(i.Text,{transform:"uppercase",mdxType:"Text"},"Lorem ipsum dolar set amet"),(0,r.mdx)(i.Text,{transform:"lowercase",mdxType:"Text"},"Lorem ipsum dolar set amet"),(0,r.mdx)(i.Text,{transform:"capitalize",mdxType:"Text"},"Lorem ipsum dolar set amet"))),(0,r.mdx)("h3",{id:"props"},"Props"),(0,r.mdx)(d.Props,{of:i.Text,mdxType:"Props"}))}T&&T===Object(T)&&Object.isExtensible(T)&&Object.defineProperty(T,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src/components/Typography/Text.mdx"}}),T.isMDXComponent=!0}}]);
//# sourceMappingURL=40.76cdd36a11050c61b923.js.map