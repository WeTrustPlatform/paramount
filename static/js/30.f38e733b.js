(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{"./src/components/Box/Box.tsx":function(e,n,i){"use strict";var t=i("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),r=i("./node_modules/react/index.js"),a=i("./node_modules/react-native-web/dist/exports/View/index.js"),o=i("./src/theme/Theme.tsx"),s=i("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/extends.js"),c=i("./node_modules/dlv/dist/dlv.umd.js"),d=i.n(c),l=i("./src/utils/overrides.ts");"undefined"!==typeof SpacingProps&&SpacingProps&&SpacingProps===Object(SpacingProps)&&Object.isExtensible(SpacingProps)&&Object.defineProperty(SpacingProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"SpacingProps",filename:"src/components/Spacing/Spacing.tsx"}}),"undefined"!==typeof SpacingOverride&&SpacingOverride&&SpacingOverride===Object(SpacingOverride)&&Object.isExtensible(SpacingOverride)&&Object.defineProperty(SpacingOverride,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"SpacingOverride",filename:"src/components/Spacing/Spacing.tsx"}});var p=function(e,n){return"number"===typeof e?e:n.spacing[e]};p&&p===Object(p)&&Object.isExtensible(p)&&Object.defineProperty(p,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"getSpacing",filename:"src/components/Spacing/Spacing.tsx"}});var m=function(e){var n=e.size,i=void 0===n?"medium":n,c=e.orientation,m=void 0===c?"vertical":c,u=e.style,b=Object(t.a)(e,["size","orientation","style"]),g=Object(o.b)();return r.createElement(a.a,Object(s.a)({style:["vertical"===m?{height:p(i,g)}:{width:p(i,g)},Object(l.b)(e,u),Object(l.b)(e,d()(g,"overrides.Spacing.style"))]},b,{__source:{fileName:"/home/travis/build/WeTrustPlatform/paramount/src/components/Spacing/Spacing.tsx",lineNumber:44}}))};m&&m===Object(m)&&Object.isExtensible(m)&&Object.defineProperty(m,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Spacing",filename:"src/components/Spacing/Spacing.tsx"}}),i.d(n,"a",function(){return b});"undefined"!==typeof BoxProps&&BoxProps&&BoxProps===Object(BoxProps)&&Object.isExtensible(BoxProps)&&Object.defineProperty(BoxProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"BoxProps",filename:"src/components/Box/Box.tsx"}});var u={backgroundColor:function(e,n){return n.colors.background[e]?{backgroundColor:n.colors.background[e]}:{backgroundColor:e}},elevation:function(e,n){return n.elevations[e]},shape:function(e,n){return n.containerShapes[e]},space:function(e,n){return{padding:p(e,n)}},spaceBottom:function(e,n){return{paddingBottom:p(e,n)}},spaceEnd:function(e,n){return{paddingEnd:p(e,n)}},spaceHorizontal:function(e,n){return{paddingHorizontal:p(e,n)}},spaceLeft:function(e,n){return{paddingLeft:p(e,n)}},spaceRight:function(e,n){return{paddingRight:p(e,n)}},spaceStart:function(e,n){return{paddingStart:p(e,n)}},spaceTop:function(e,n){return{paddingTop:p(e,n)}},spaceVertical:function(e,n){return{paddingVertical:p(e,n)}}},b=function(e){var n=e.children,i=e.testID,s=Object(t.a)(e,["children","testID"]),c=Object(o.b)(),d=[],l={};for(var p in s)if(p){var m=u[p];if(m){var b=m(s[p],c);d.push(b)}else l[p]=s[p]}return r.createElement(a.a,{testID:i,style:[l,d],__source:{fileName:"/home/travis/build/WeTrustPlatform/paramount/src/components/Box/Box.tsx",lineNumber:106}},n)};"undefined"!==typeof b&&b&&b===Object(b)&&Object.isExtensible(b)&&Object.defineProperty(b,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Box",filename:"src/components/Box/Box.tsx"}})},"./src/components/Typography/Heading.mdx":function(e,n,i){"use strict";i.r(n),i.d(n,"default",function(){return m});var t=i("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),r=i("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/extends.js"),a=(i("./node_modules/react/index.js"),i("./node_modules/@mdx-js/react/dist/index.es.js")),o=i("./node_modules/docz/dist/index.esm.js"),s=i("./src/components/Box/Box.tsx"),c=i("./src/components/Typography/Heading.tsx"),d="/home/travis/build/WeTrustPlatform/paramount/src/components/Typography/Heading.mdx",l={},p="wrapper";function m(e){var n=e.components,i=Object(t.a)(e,["components"]);return Object(a.b)(p,Object(r.a)({},l,i,{components:n,mdxType:"MDXLayout",__source:{fileName:d,lineNumber:21}}),Object(a.b)("h1",Object(r.a)({id:"heading"},{__source:{fileName:d,lineNumber:24}}),"Heading"),Object(a.b)("p",{__source:{fileName:d,lineNumber:27}},"Composes React Native's ",Object(a.b)("inlineCode",{parentName:"p",__source:{fileName:d,lineNumber:27}},"Text")," component"),Object(a.b)("h2",Object(r.a)({id:"usage"},{__source:{fileName:d,lineNumber:28}}),"Usage"),Object(a.b)(o.c,{__position:0,__code:'<Box>\n  <Heading size="xxxlarge">xxxlarge</Heading>\n  <Heading size="xxlarge">xxlarge</Heading>\n  <Heading size="xlarge">xlarge</Heading>\n  <Heading size="large">large</Heading>\n  <Heading size="medium">medium</Heading>\n  <Heading size="small">small</Heading>\n</Box>',__scope:{props:this?this.props:i,Playground:o.c,Props:o.d,Box:s.a,Heading:c.a},mdxType:"Playground",__source:{fileName:d,lineNumber:31}},Object(a.b)(s.a,{mdxType:"Box",__source:{fileName:d,lineNumber:38}},Object(a.b)(c.a,{size:"xxxlarge",mdxType:"Heading",__source:{fileName:d,lineNumber:39}},"xxxlarge"),Object(a.b)(c.a,{size:"xxlarge",mdxType:"Heading",__source:{fileName:d,lineNumber:40}},"xxlarge"),Object(a.b)(c.a,{size:"xlarge",mdxType:"Heading",__source:{fileName:d,lineNumber:41}},"xlarge"),Object(a.b)(c.a,{size:"large",mdxType:"Heading",__source:{fileName:d,lineNumber:42}},"large"),Object(a.b)(c.a,{size:"medium",mdxType:"Heading",__source:{fileName:d,lineNumber:43}},"medium"),Object(a.b)(c.a,{size:"small",mdxType:"Heading",__source:{fileName:d,lineNumber:44}},"small"))),Object(a.b)("h2",Object(r.a)({id:"props"},{__source:{fileName:d,lineNumber:47}}),"Props"),Object(a.b)(o.d,{of:c.a,mdxType:"Props",__source:{fileName:d,lineNumber:50}}))}m&&m===Object(m)&&Object.isExtensible(m)&&Object.defineProperty(m,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src/components/Typography/Heading.mdx"}}),m.isMDXComponent=!0},"./src/components/Typography/Heading.tsx":function(e,n,i){"use strict";i.d(n,"a",function(){return b});var t=i("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/extends.js"),r=i("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread.js"),a=i("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),o=i("./node_modules/dlv/dist/dlv.umd.js"),s=i.n(o),c=i("./node_modules/react/index.js"),d=i("./node_modules/react-native-web/dist/exports/Platform/index.js"),l=i("./node_modules/react-native-web/dist/exports/Text/index.js"),p=i("./src/theme/Theme.tsx"),m=i("./src/utils/overrides.ts"),u=i("./src/components/Typography/Text.tsx");"undefined"!==typeof HeadingProps&&HeadingProps&&HeadingProps===Object(HeadingProps)&&Object.isExtensible(HeadingProps)&&Object.defineProperty(HeadingProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"HeadingProps",filename:"src/components/Typography/Heading.tsx"}}),"undefined"!==typeof HeadingOverride&&HeadingOverride&&HeadingOverride===Object(HeadingOverride)&&Object.isExtensible(HeadingOverride)&&Object.defineProperty(HeadingOverride,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"HeadingOverride",filename:"src/components/Typography/Heading.tsx"}});var b=function(e){var n=e.children,i=e.accessibilityLevel,o=e.size,b=void 0===o?"medium":o,f=e.align,x=void 0===f?"left":f,j=e.color,_=void 0===j?"default":j,O=e.weight,v=e.style,y=Object(a.a)(e,["children","accessibilityLevel","size","align","color","weight","style"]),h=Object(p.b)(),H=g(h.headingSizes)(b);return c.createElement(l.a,Object(t.a)({accessibilityRole:"web"===d.a.OS?"heading":"none","aria-level":i,style:[Object(r.a)({},H,{color:Object(u.c)(h.colors.text)(_),fontFamily:h.fontFamilies.heading,fontWeight:Object(u.b)(h.fontWeights)(O)||H.fontWeight,textAlign:x}),Object(m.b)(e,v),Object(m.b)(e,s()(h,"overrides.Heading.style"))]},y,{__source:{fileName:"/home/travis/build/WeTrustPlatform/paramount/src/components/Typography/Heading.tsx",lineNumber:77}}),n)};"undefined"!==typeof b&&b&&b===Object(b)&&Object.isExtensible(b)&&Object.defineProperty(b,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Heading",filename:"src/components/Typography/Heading.tsx"}});var g=function(e){return function(n){return e[n]||{fontSize:n}}};"undefined"!==typeof g&&g&&g===Object(g)&&Object.isExtensible(g)&&Object.defineProperty(g,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"getHeadingSize",filename:"src/components/Typography/Heading.tsx"}})}}]);
//# sourceMappingURL=30.7ddf16d1898155d46e1e.js.map