(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{"./src/components/Box/Box.tsx":function(e,n,o){"use strict";o.d(n,"a",function(){return c});var t=o("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),r=o("./node_modules/react/index.js"),i=o("./node_modules/react-native-web/dist/exports/View/index.js"),a=o("./src/theme/Theme.tsx");"undefined"!==typeof BoxProps&&BoxProps&&BoxProps===Object(BoxProps)&&Object.isExtensible(BoxProps)&&Object.defineProperty(BoxProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"BoxProps",filename:"src/components/Box/Box.tsx"}});var s={backgroundColor:function(e,n){return n.colors.background[e]?{backgroundColor:n.colors.background[e]}:{backgroundColor:e}},elevation:function(e,n){return n.elevations[e]},shape:function(e,n){return n.containerShapes[e]}},c=function(e){var n=e.children,o=e.testID,c=Object(t.a)(e,["children","testID"]),u=Object(a.b)(),d=[],l={};for(var m in c)if(m){var b=s[m];if(b){var p=b(c[m],u);d.push(p)}else l[m]=c[m]}return r.createElement(i.a,{testID:o,style:[l,d],__source:{fileName:"/home/travis/build/WeTrustPlatform/paramount/src/components/Box/Box.tsx",lineNumber:53}},n)};"undefined"!==typeof c&&c&&c===Object(c)&&Object.isExtensible(c)&&Object.defineProperty(c,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Box",filename:"src/components/Box/Box.tsx"}})},"./src/components/Layout/Container.mdx":function(e,n,o){"use strict";o.r(n),o.d(n,"default",function(){return p});var t=o("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),r=o("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/extends.js"),i=(o("./node_modules/react/index.js"),o("./node_modules/@mdx-js/react/dist/index.es.js")),a=o("./node_modules/docz/dist/index.esm.js"),s=o("./src/components/Box/Box.tsx"),c=o("./src/components/Layout/Container.tsx"),u=o("./src/components/Layout/LayoutProvider.tsx"),d=o("./src/components/Typography/Text.tsx"),l="/home/travis/build/WeTrustPlatform/paramount/src/components/Layout/Container.mdx",m={},b="wrapper";function p(e){var n=e.components,o=Object(t.a)(e,["components"]);return Object(i.b)(b,Object(r.a)({},m,o,{components:n,mdxType:"MDXLayout",__source:{fileName:l,lineNumber:21}}),Object(i.b)("h1",Object(r.a)({id:"container"},{__source:{fileName:l,lineNumber:24}}),"Container"),Object(i.b)("p",{__source:{fileName:l,lineNumber:27}},Object(i.b)("inlineCode",{parentName:"p",__source:{fileName:l,lineNumber:27}},"Container")," centers the content with a max-width of defined by Layout (varies depending on screen size)"),Object(i.b)("p",{__source:{fileName:l,lineNumber:28}},"Refer to ",Object(i.b)("inlineCode",{parentName:"p",__source:{fileName:l,lineNumber:28}},"Layout")," docs for setup"),Object(i.b)("h2",Object(r.a)({id:"usage"},{__source:{fileName:l,lineNumber:29}}),"Usage"),Object(i.b)(a.c,{__position:0,__code:'<LayoutProvider>\n  <Box backgroundColor="#67c6bb" padding={3}>\n    <Container\n      fluid={false} // Should not contain width\n      size={undefined} // Override default container size\n    >\n      <Box backgroundColor="white" padding={3}>\n        <Text>Centered content</Text>\n      </Box>\n    </Container>\n  </Box>\n</LayoutProvider>',__scope:{props:this?this.props:o,Playground:a.c,Props:a.d,Box:s.a,Container:c.a,LayoutProvider:u.a,Text:d.a},mdxType:"Playground",__source:{fileName:l,lineNumber:32}},Object(i.b)(u.a,{mdxType:"LayoutProvider",__source:{fileName:l,lineNumber:41}},Object(i.b)(s.a,{backgroundColor:"#67c6bb",padding:3,mdxType:"Box",__source:{fileName:l,lineNumber:42}},Object(i.b)(c.a,{fluid:!1,size:void 0,mdxType:"Container",__source:{fileName:l,lineNumber:43}},Object(i.b)(s.a,{backgroundColor:"white",padding:3,mdxType:"Box",__source:{fileName:l,lineNumber:46}},Object(i.b)(d.a,{mdxType:"Text",__source:{fileName:l,lineNumber:47}},"Centered content")))))),Object(i.b)("h2",Object(r.a)({id:"props"},{__source:{fileName:l,lineNumber:53}}),"Props"),Object(i.b)(a.d,{of:c.a,mdxType:"Props",__source:{fileName:l,lineNumber:56}}))}p&&p===Object(p)&&Object.isExtensible(p)&&Object.defineProperty(p,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src/components/Layout/Container.mdx"}}),p.isMDXComponent=!0},"./src/components/Layout/Container.tsx":function(e,n,o){"use strict";o.d(n,"a",function(){return p});var t=o("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),r=o("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/extends.js"),i=o("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),a=o("./node_modules/dlv/dist/dlv.umd.js"),s=o.n(a),c=o("./node_modules/react/index.js"),u=o("./node_modules/react-native-web/dist/exports/View/index.js"),d=o("./src/theme/Theme.tsx"),l=o("./src/utils/overrides.ts"),m=o("./src/components/Layout/LayoutContext.tsx"),b="/home/travis/build/WeTrustPlatform/paramount/src/components/Layout/Container.tsx";"undefined"!==typeof ContainerProps&&ContainerProps&&ContainerProps===Object(ContainerProps)&&Object.isExtensible(ContainerProps)&&Object.defineProperty(ContainerProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ContainerProps",filename:"src/components/Layout/Container.tsx"}}),"undefined"!==typeof ContainerOverride&&ContainerOverride&&ContainerOverride===Object(ContainerOverride)&&Object.isExtensible(ContainerOverride)&&Object.defineProperty(ContainerOverride,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ContainerOverride",filename:"src/components/Layout/Container.tsx"}});var p=function(e){var n=e.children,o=e.size,t=e.fluid,a=void 0!==t&&t,u=e.override,m=Object(d.b)(),p=Object(l.a)(f,e,s()(m,"overrides.Container"),u),x=Object(i.a)(p,2),_=x[0],j=x[1];return c.createElement(_,Object(r.a)({size:o,fluid:a},j,{__source:{fileName:b,lineNumber:53}}),n)};"undefined"!==typeof p&&p&&p===Object(p)&&Object.isExtensible(p)&&Object.defineProperty(p,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Container",filename:"src/components/Layout/Container.tsx"}});var f=function(e){var n=e.size,o=e.fluid,i=e.children,a=e.style,s=Object(t.a)(e,["size","fluid","children","style"]),d=Object(m.e)(),l=d.gutterWidth,p=d.containerSizes,f=d.currentScreenSize;return c.createElement(u.a,Object(r.a)({style:[{marginLeft:"auto",marginRight:"auto",maxWidth:o?"100%":n?p[n]:x(p,f),paddingLeft:l/2,paddingRight:l/2,width:"100%"},a]},s,{__source:{fileName:b,lineNumber:70}}),i)},x=function(e,n){var o=m.b.indexOf(n),t=m.b.find(function(n,t){return"xsmall"!==n&&(!(o>t)&&!!e[n])});if("xsmall"!==t)return t?e[t]:void 0}}}]);
//# sourceMappingURL=29.b00e7a1f0342f715624d.js.map