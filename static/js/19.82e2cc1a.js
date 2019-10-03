(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{"./src/components/Badge/Badge.mdx":function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return p});var r=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),o=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/extends.js"),i=(n("./node_modules/react/index.js"),n("./node_modules/@mdx-js/react/dist/index.es.js")),a=n("./node_modules/docz/dist/index.esm.js"),s=n("./src/components/Badge/Badge.tsx"),d=n("./src/components/Box/Box.tsx"),c="/home/travis/build/WeTrustPlatform/paramount/src/components/Badge/Badge.mdx",l={},u="wrapper";function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)(u,Object(o.a)({},l,n,{components:t,mdxType:"MDXLayout",__source:{fileName:c,lineNumber:21}}),Object(i.b)("h1",Object(o.a)({id:"badge"},{__source:{fileName:c,lineNumber:23}}),"Badge"),Object(i.b)("p",{__source:{fileName:c,lineNumber:26}},"Display to indicate status or feat of service"),Object(i.b)("h2",Object(o.a)({id:"usage"},{__source:{fileName:c,lineNumber:27}}),"Usage"),Object(i.b)(a.c,{__position:0,__code:'<Box>\n  <Badge title="Badge" color="teal" isSolid size="large" shape="pill" />\n</Box>',__scope:{props:this?this.props:n,Playground:a.c,Props:a.d,Badge:s.a,Box:d.a},mdxType:"Playground",__source:{fileName:c,lineNumber:30}},Object(i.b)(d.a,{mdxType:"Box",__source:{fileName:c,lineNumber:37}},Object(i.b)(s.a,{title:"Badge",color:"teal",isSolid:!0,size:"large",shape:"pill",mdxType:"Badge",__source:{fileName:c,lineNumber:38}}))),Object(i.b)("h2",Object(o.a)({id:"props"},{__source:{fileName:c,lineNumber:41}}),"Props"),Object(i.b)(a.d,{of:s.a,mdxType:"Props",__source:{fileName:c,lineNumber:44}}))}p&&p===Object(p)&&Object.isExtensible(p)&&Object.defineProperty(p,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src/components/Badge/Badge.mdx"}}),p.isMDXComponent=!0},"./src/components/Badge/Badge.tsx":function(e,t,n){"use strict";n.d(t,"a",function(){return f});var r=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread.js"),o=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),i=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/extends.js"),a=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),s=n("./node_modules/dlv/dist/dlv.umd.js"),d=n.n(s),c=n("./node_modules/react/index.js"),l=n("./node_modules/react-native-web/dist/exports/View/index.js"),u=n("./src/theme/Theme.tsx"),p=n("./src/utils/isControlSize.ts"),m=n("./src/utils/overrides.ts"),b=n("./src/components/Typography/Text.tsx"),g="/home/travis/build/WeTrustPlatform/paramount/src/components/Badge/Badge.tsx";"undefined"!==typeof BadgeOverrides&&BadgeOverrides&&BadgeOverrides===Object(BadgeOverrides)&&Object.isExtensible(BadgeOverrides)&&Object.defineProperty(BadgeOverrides,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"BadgeOverrides",filename:"src/components/Badge/Badge.tsx"}}),"undefined"!==typeof BadgeProps&&BadgeProps&&BadgeProps===Object(BadgeProps)&&Object.isExtensible(BadgeProps)&&Object.defineProperty(BadgeProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"BadgeProps",filename:"src/components/Badge/Badge.tsx"}});var f=function(e){var t=e.size,n=void 0===t?"medium":t,r=e.color,o=void 0===r?"neutral":r,s=e.isSolid,l=void 0!==s&&s,p=e.shape,b=void 0===p?"rounded":p,f=e.title,_=e.testID,x=e.overrides,v=void 0===x?{}:x,h=Object(u.b)(),B=Object(m.a)(j,e,d()(h,"overrides.Badge.Root"),v.Root),P=Object(a.a)(B,2),y=P[0],S=P[1],N=Object(m.a)(O,e,d()(h,"overrides.Badge.Title"),v.Title),E=Object(a.a)(N,2),T=E[0],z=E[1];return c.createElement(y,Object(i.a)({size:n,color:o,isSolid:l,shape:b,testID:_},S,{__source:{fileName:g,lineNumber:78}}),c.createElement(T,Object(i.a)({size:n,color:o,isSolid:l,title:f},z,{__source:{fileName:g,lineNumber:86}})))};"undefined"!==typeof f&&f&&f===Object(f)&&Object.isExtensible(f)&&Object.defineProperty(f,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Badge",filename:"src/components/Badge/Badge.tsx"}});var j=function(e){var t=e.size,n=e.color,a=e.isSolid,s=e.shape,d=e.children,m=e.style,b=Object(o.a)(e,["size","color","isSolid","shape","children","style"]),f=Object(u.b)(),j=f.containerShapes[s],O=(a?f.fills.solid:f.fills.subtle)[n],_=Object(p.a)(t)?{small:{height:f.controlHeights.small,paddingLeft:f.controlPaddings.small,paddingRight:f.controlPaddings.small},medium:{height:f.controlHeights.medium,paddingLeft:f.controlPaddings.medium,paddingRight:f.controlPaddings.medium},large:{height:f.controlHeights.large,paddingLeft:f.controlPaddings.large,paddingRight:f.controlPaddings.large}}[t]:{height:t,paddingLeft:f.controlPaddings.medium,paddingRight:f.controlPaddings.medium},x=_.height,v=_.paddingLeft,h=_.paddingRight;return c.createElement(l.a,Object(i.a)({style:[Object(r.a)({alignItems:"center",alignSelf:"flex-start",backgroundColor:O.backgroundColor,display:"flex",flexDirection:"row",height:x,justifyContent:"center",paddingLeft:v,paddingRight:h},j),m]},b,{__source:{fileName:g,lineNumber:142}}),d)},O=function(e){e.size;var t=e.color,n=e.isSolid,r=e.title,a=e.style,s=Object(o.a)(e,["size","color","isSolid","title","style"]),d=Object(u.b)(),l=(n?d.fills.solid:d.fills.subtle)[t];return c.createElement(b.a,Object(i.a)({weight:"bold",style:[{color:l.color,textTransform:"uppercase"},Object(m.b)(e,a)]},s,{__source:{fileName:g,lineNumber:179}}),r)}},"./src/components/Box/Box.tsx":function(e,t,n){"use strict";var r=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),o=n("./node_modules/react/index.js"),i=n("./node_modules/react-native-web/dist/exports/View/index.js"),a=n("./src/theme/Theme.tsx"),s=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/extends.js"),d=n("./node_modules/dlv/dist/dlv.umd.js"),c=n.n(d),l=n("./src/utils/overrides.ts");"undefined"!==typeof SpacingProps&&SpacingProps&&SpacingProps===Object(SpacingProps)&&Object.isExtensible(SpacingProps)&&Object.defineProperty(SpacingProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"SpacingProps",filename:"src/components/Spacing/Spacing.tsx"}}),"undefined"!==typeof SpacingOverride&&SpacingOverride&&SpacingOverride===Object(SpacingOverride)&&Object.isExtensible(SpacingOverride)&&Object.defineProperty(SpacingOverride,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"SpacingOverride",filename:"src/components/Spacing/Spacing.tsx"}});var u=function(e,t){return"number"===typeof e?e:t.spacing[e]};u&&u===Object(u)&&Object.isExtensible(u)&&Object.defineProperty(u,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"getSpacing",filename:"src/components/Spacing/Spacing.tsx"}});var p=function(e){var t=e.size,n=void 0===t?"medium":t,d=e.orientation,p=void 0===d?"vertical":d,m=e.style,b=Object(r.a)(e,["size","orientation","style"]),g=Object(a.b)();return o.createElement(i.a,Object(s.a)({style:["vertical"===p?{height:u(n,g)}:{width:u(n,g)},Object(l.b)(e,m),Object(l.b)(e,c()(g,"overrides.Spacing.style"))]},b,{__source:{fileName:"/home/travis/build/WeTrustPlatform/paramount/src/components/Spacing/Spacing.tsx",lineNumber:44}}))};p&&p===Object(p)&&Object.isExtensible(p)&&Object.defineProperty(p,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Spacing",filename:"src/components/Spacing/Spacing.tsx"}}),n.d(t,"a",function(){return b});"undefined"!==typeof BoxProps&&BoxProps&&BoxProps===Object(BoxProps)&&Object.isExtensible(BoxProps)&&Object.defineProperty(BoxProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"BoxProps",filename:"src/components/Box/Box.tsx"}});var m={backgroundColor:function(e,t){return t.colors.background[e]?{backgroundColor:t.colors.background[e]}:{backgroundColor:e}},elevation:function(e,t){return t.elevations[e]},shape:function(e,t){return t.containerShapes[e]},space:function(e,t){return{padding:u(e,t)}},spaceBottom:function(e,t){return{paddingBottom:u(e,t)}},spaceEnd:function(e,t){return{paddingEnd:u(e,t)}},spaceHorizontal:function(e,t){return{paddingHorizontal:u(e,t)}},spaceLeft:function(e,t){return{paddingLeft:u(e,t)}},spaceRight:function(e,t){return{paddingRight:u(e,t)}},spaceStart:function(e,t){return{paddingStart:u(e,t)}},spaceTop:function(e,t){return{paddingTop:u(e,t)}},spaceVertical:function(e,t){return{paddingVertical:u(e,t)}}},b=function(e){var t=e.children,n=e.testID,s=Object(r.a)(e,["children","testID"]),d=Object(a.b)(),c=[],l={};for(var u in s)if(u){var p=m[u];if(p){var b=p(s[u],d);c.push(b)}else l[u]=s[u]}return o.createElement(i.a,{testID:n,style:[l,c],__source:{fileName:"/home/travis/build/WeTrustPlatform/paramount/src/components/Box/Box.tsx",lineNumber:106}},t)};"undefined"!==typeof b&&b&&b===Object(b)&&Object.isExtensible(b)&&Object.defineProperty(b,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Box",filename:"src/components/Box/Box.tsx"}})},"./src/utils/isControlSize.ts":function(e,t,n){"use strict";n.d(t,"a",function(){return r});var r=function(e){return"number"!==typeof e};"undefined"!==typeof r&&r&&r===Object(r)&&Object.isExtensible(r)&&Object.defineProperty(r,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"isControlSize",filename:"src/utils/isControlSize.ts"}})}}]);
//# sourceMappingURL=19.8f268ae8d65d7c0f3f9a.js.map