(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{"./src/components/Box/Box.tsx":function(e,r,i){"use strict";i.d(r,"a",function(){return a});var o=i("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),t=i("./node_modules/react/index.js"),n=i("./node_modules/react-native-web/dist/exports/View/index.js"),s=i("./src/theme/Theme.tsx");"undefined"!==typeof BoxProps&&BoxProps&&BoxProps===Object(BoxProps)&&Object.isExtensible(BoxProps)&&Object.defineProperty(BoxProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"BoxProps",filename:"src/components/Box/Box.tsx"}});var d={backgroundColor:function(e,r){return r.colors.background[e]?{backgroundColor:r.colors.background[e]}:{backgroundColor:e}},elevation:function(e,r){return r.elevations[e]},shape:function(e,r){return r.containerShapes[e]}},a=function(e){var r=e.children,i=e.testID,a=Object(o.a)(e,["children","testID"]),c=Object(s.b)(),l=[],u={};for(var m in a)if(m){var b=d[m];if(b){var p=b(a[m],c);l.push(p)}else u[m]=a[m]}return t.createElement(n.a,{testID:i,style:[u,l],__source:{fileName:"/home/travis/build/WeTrustPlatform/paramount/src/components/Box/Box.tsx",lineNumber:53}},r)};"undefined"!==typeof a&&a&&a===Object(a)&&Object.isExtensible(a)&&Object.defineProperty(a,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Box",filename:"src/components/Box/Box.tsx"}})},"./src/components/Divider/Divider.mdx":function(e,r,i){"use strict";i.r(r),i.d(r,"default",function(){return m});var o=i("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),t=i("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/extends.js"),n=(i("./node_modules/react/index.js"),i("./node_modules/@mdx-js/react/dist/index.es.js")),s=i("./node_modules/docz/dist/index.esm.js"),d=i("./src/components/Box/Box.tsx"),a=i("./src/components/Divider/Divider.tsx"),c="/home/travis/build/WeTrustPlatform/paramount/src/components/Divider/Divider.mdx",l={},u="wrapper";function m(e){var r=e.components,i=Object(o.a)(e,["components"]);return Object(n.b)(u,Object(t.a)({},l,i,{components:r,mdxType:"MDXLayout",__source:{fileName:c,lineNumber:21}}),Object(n.b)("h1",Object(t.a)({id:"divider"},{__source:{fileName:c,lineNumber:24}}),"Divider"),Object(n.b)("h2",Object(t.a)({id:"usage"},{__source:{fileName:c,lineNumber:27}}),"Usage"),Object(n.b)(s.c,{__position:0,__code:"<Box paddingVertical={40}>\n  <Divider />\n</Box>",__scope:{props:this?this.props:i,Playground:s.c,Props:s.d,Box:d.a,Divider:a.a},mdxType:"Playground",__source:{fileName:c,lineNumber:30}},Object(n.b)(d.a,{paddingVertical:40,mdxType:"Box",__source:{fileName:c,lineNumber:37}},Object(n.b)(a.a,{mdxType:"Divider",__source:{fileName:c,lineNumber:38}}))),Object(n.b)("h2",Object(t.a)({id:"props"},{__source:{fileName:c,lineNumber:41}}),"Props"),Object(n.b)(s.d,{of:a.a,mdxType:"Props",__source:{fileName:c,lineNumber:44}}))}m&&m===Object(m)&&Object.isExtensible(m)&&Object.defineProperty(m,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src/components/Divider/Divider.mdx"}}),m.isMDXComponent=!0},"./src/components/Divider/Divider.tsx":function(e,r,i){"use strict";i.d(r,"a",function(){return j});var o=i("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),t=i("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/extends.js"),n=i("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),s=i("./node_modules/dlv/dist/dlv.umd.js"),d=i.n(s),a=i("./node_modules/react/index.js"),c=i("./node_modules/react-native-web/dist/exports/View/index.js"),l=i("./src/theme/Theme.tsx"),u=i("./src/utils/isControlSize.ts"),m=i("./src/utils/overrides.ts"),b="/home/travis/build/WeTrustPlatform/paramount/src/components/Divider/Divider.tsx";"undefined"!==typeof DividerProps&&DividerProps&&DividerProps===Object(DividerProps)&&Object.isExtensible(DividerProps)&&Object.defineProperty(DividerProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"DividerProps",filename:"src/components/Divider/Divider.tsx"}}),"undefined"!==typeof DividerOverride&&DividerOverride&&DividerOverride===Object(DividerOverride)&&Object.isExtensible(DividerOverride)&&Object.defineProperty(DividerOverride,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"DividerOverride",filename:"src/components/Divider/Divider.tsx"}});var p="small",v="default",f="horizontal",j=function(e){var r=e.size,i=void 0===r?p:r,o=e.color,s=void 0===o?v:o,c=e.orientation,u=void 0===c?f:c,j=e.override,x=Object(l.b)(),O=Object(m.a)(_,e,d()(x,"overrides.Divider"),j),D=Object(n.a)(O,2),h=D[0],P=D[1];return a.createElement(h,Object(t.a)({size:i,color:s,orientation:u},P,{__source:{fileName:b,lineNumber:61}}))};"undefined"!==typeof j&&j&&j===Object(j)&&Object.isExtensible(j)&&Object.defineProperty(j,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Divider",filename:"src/components/Divider/Divider.tsx"}});var x={large:3,medium:2,small:1},_=function(e){var r,i=Object(l.b)(),n=e.size,s=void 0===n?p:n,d=e.color,m=void 0===d?v:d,j=e.orientation,_=void 0===j?f:j,O=e.style,D=Object(o.a)(e,["size","color","orientation","style"]),h=(r=i.colors.border,function(e){return r[e]||e})(m||i.colors.border.default),P=Object(u.a)(s)?x[s]:s,y={horizontal:{backgroundColor:h,height:P,width:"100%"},vertical:{backgroundColor:h,height:"100%",width:P}};return a.createElement(c.a,Object(t.a)({style:[_?y[_]:y.horizontal,O]},D,{__source:{fileName:b,lineNumber:116}}))}},"./src/utils/isControlSize.ts":function(e,r,i){"use strict";i.d(r,"a",function(){return o});var o=function(e){return"number"!==typeof e};"undefined"!==typeof o&&o&&o===Object(o)&&Object.isExtensible(o)&&Object.defineProperty(o,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"isControlSize",filename:"src/utils/isControlSize.ts"}})}}]);
//# sourceMappingURL=25.48818ae313f1216d8e7f.js.map