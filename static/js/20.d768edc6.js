(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{"./src/components/Alert/Alert.mdx":function(e,t,r){"use strict";r.r(t),r.d(t,"default",function(){return p});var n=r("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),o=r("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/extends.js"),a=(r("./node_modules/react/index.js"),r("./node_modules/@mdx-js/react/dist/index.es.js")),i=r("./node_modules/docz/dist/index.esm.js"),s=r("./src/components/Alert/Alert.tsx"),c=r("./src/components/Box/Box.tsx"),l=r("./src/components/Button/Button.tsx"),d="/home/travis/build/WeTrustPlatform/paramount/src/components/Alert/Alert.mdx",u={},b="wrapper";function p(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(a.b)(b,Object(o.a)({},u,r,{components:t,mdxType:"MDXLayout",__source:{fileName:d,lineNumber:21}}),Object(a.b)("h1",Object(o.a)({id:"alert"},{__source:{fileName:d,lineNumber:23}}),"Alert"),Object(a.b)("p",{__source:{fileName:d,lineNumber:26}},"Give feedback to the user about an action or state"),Object(a.b)("h2",Object(o.a)({id:"usage"},{__source:{fileName:d,lineNumber:27}}),"Usage"),Object(a.b)(i.c,{__position:0,__code:'<Box paddingVertical={8}>\n  <Alert title="Info" description="Message" />\n</Box>\n<Box paddingVertical={8}>\n  <Alert intent="success" title="Success" description="Message" />\n</Box>\n<Box paddingVertical={8}>\n  <Alert intent="warning" title="Warning" description="Message" />\n</Box>\n<Box paddingVertical={8}>\n  <Alert\n    intent="danger"\n    title="Danger"\n    description="Message"\n    overrides={{\n      Action: {\n        component: () => (\n          <Button title="Action" appearance="minimal" color="primary" />\n        ),\n      },\n    }}\n  />\n</Box>',__scope:{props:this?this.props:r,Playground:i.c,Props:i.d,Alert:s.a,Box:c.a,Button:l.a},mdxType:"Playground",__source:{fileName:d,lineNumber:30}},Object(a.b)(c.a,{paddingVertical:8,mdxType:"Box",__source:{fileName:d,lineNumber:38}},Object(a.b)(s.a,{title:"Info",description:"Message",mdxType:"Alert",__source:{fileName:d,lineNumber:39}})),Object(a.b)(c.a,{paddingVertical:8,mdxType:"Box",__source:{fileName:d,lineNumber:41}},Object(a.b)(s.a,{intent:"success",title:"Success",description:"Message",mdxType:"Alert",__source:{fileName:d,lineNumber:42}})),Object(a.b)(c.a,{paddingVertical:8,mdxType:"Box",__source:{fileName:d,lineNumber:44}},Object(a.b)(s.a,{intent:"warning",title:"Warning",description:"Message",mdxType:"Alert",__source:{fileName:d,lineNumber:45}})),Object(a.b)(c.a,{paddingVertical:8,mdxType:"Box",__source:{fileName:d,lineNumber:47}},Object(a.b)(s.a,{intent:"danger",title:"Danger",description:"Message",overrides:{Action:{component:function(){return Object(a.b)(l.a,{title:"Action",appearance:"minimal",color:"primary",mdxType:"Button",__source:{fileName:d,lineNumber:50}})}}},mdxType:"Alert",__source:{fileName:d,lineNumber:48}}))),Object(a.b)("h2",Object(o.a)({id:"props"},{__source:{fileName:d,lineNumber:55}}),"Props"),Object(a.b)(i.d,{of:s.a,mdxType:"Props",__source:{fileName:d,lineNumber:58}}))}p&&p===Object(p)&&Object.isExtensible(p)&&Object.defineProperty(p,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src/components/Alert/Alert.mdx"}}),p.isMDXComponent=!0},"./src/components/Box/Box.tsx":function(e,t,r){"use strict";var n=r("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),o=r("./node_modules/react/index.js"),a=r("./node_modules/react-native-web/dist/exports/View/index.js"),i=r("./src/theme/Theme.tsx"),s=r("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/extends.js"),c=r("./node_modules/dlv/dist/dlv.umd.js"),l=r.n(c),d=r("./src/utils/Overrides.ts");"undefined"!==typeof SpacingProps&&SpacingProps&&SpacingProps===Object(SpacingProps)&&Object.isExtensible(SpacingProps)&&Object.defineProperty(SpacingProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"SpacingProps",filename:"src/components/Spacing/Spacing.tsx"}}),"undefined"!==typeof SpacingOverride&&SpacingOverride&&SpacingOverride===Object(SpacingOverride)&&Object.isExtensible(SpacingOverride)&&Object.defineProperty(SpacingOverride,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"SpacingOverride",filename:"src/components/Spacing/Spacing.tsx"}});var u=function(e,t){return"number"===typeof e?e:t.spacing[e]};u&&u===Object(u)&&Object.isExtensible(u)&&Object.defineProperty(u,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"getSpacing",filename:"src/components/Spacing/Spacing.tsx"}});var b=function(e){var t=e.size,r=void 0===t?"medium":t,c=e.orientation,b=void 0===c?"vertical":c,p=e.style,m=Object(n.a)(e,["size","orientation","style"]),f=Object(i.b)();return o.createElement(a.a,Object(s.a)({style:["vertical"===b?{height:u(r,f)}:{width:u(r,f)},Object(d.b)(e,p),Object(d.b)(e,l()(f,"overrides.Spacing.style"))]},m,{__source:{fileName:"/home/travis/build/WeTrustPlatform/paramount/src/components/Spacing/Spacing.tsx",lineNumber:44}}))};b&&b===Object(b)&&Object.isExtensible(b)&&Object.defineProperty(b,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Spacing",filename:"src/components/Spacing/Spacing.tsx"}}),r.d(t,"a",function(){return m});"undefined"!==typeof BoxProps&&BoxProps&&BoxProps===Object(BoxProps)&&Object.isExtensible(BoxProps)&&Object.defineProperty(BoxProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"BoxProps",filename:"src/components/Box/Box.tsx"}});var p={backgroundColor:function(e,t){return t.colors.background[e]?{backgroundColor:t.colors.background[e]}:{backgroundColor:e}},elevation:function(e,t){return t.elevations[e]},shape:function(e,t){return t.containerShapes[e]},space:function(e,t){return{padding:u(e,t)}},spaceBottom:function(e,t){return{paddingBottom:u(e,t)}},spaceEnd:function(e,t){return{paddingEnd:u(e,t)}},spaceHorizontal:function(e,t){return{paddingHorizontal:u(e,t)}},spaceLeft:function(e,t){return{paddingLeft:u(e,t)}},spaceRight:function(e,t){return{paddingRight:u(e,t)}},spaceStart:function(e,t){return{paddingStart:u(e,t)}},spaceTop:function(e,t){return{paddingTop:u(e,t)}},spaceVertical:function(e,t){return{paddingVertical:u(e,t)}}},m=function(e){var t=e.children,r=e.testID,s=Object(n.a)(e,["children","testID"]),c=Object(i.b)(),l=[],d={};for(var u in s)if(u){var b=p[u];if(b){var m=b(s[u],c);l.push(m)}else d[u]=s[u]}return o.createElement(a.a,{testID:r,style:[d,l],__source:{fileName:"/home/travis/build/WeTrustPlatform/paramount/src/components/Box/Box.tsx",lineNumber:106}},t)};"undefined"!==typeof m&&m&&m===Object(m)&&Object.isExtensible(m)&&Object.defineProperty(m,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Box",filename:"src/components/Box/Box.tsx"}})},"./src/components/Button/Button.tsx":function(e,t,r){"use strict";var n=r("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread.js"),o=r("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),a=r("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/extends.js"),i=r("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),s=r("./node_modules/dlv/dist/dlv.umd.js"),c=r.n(s),l=r("./node_modules/react/index.js"),d=r.n(l),u=r("./node_modules/react-native-web/dist/exports/TouchableOpacity/index.js"),b=r("./src/theme/Theme.tsx"),p=r("./src/utils/ControlSize.ts"),m=r("./src/utils/Overrides.ts"),f=r("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/regenerator/index.js"),g=r.n(f),j=r("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js"),x=r("./node_modules/react-native-web/dist/exports/View/index.js"),_=r("./node_modules/react-spring/native.cjs.js"),O=function(e,t){return!e},y=function(){var e=d.a.useReducer(O,!0),t=Object(i.a)(e,2)[1];return d.a.useCallback(function(){t(null)},[t])};y&&y===Object(y)&&Object.isExtensible(y)&&Object.defineProperty(y,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"useForceUpdate",filename:"src/hooks/useForceUpdate.ts"}});var v="/home/travis/build/WeTrustPlatform/paramount/src/components/LoadingIndicators/Dots.tsx",B=Object(_.animated)(x.a);"undefined"!==typeof DotsProps&&DotsProps&&DotsProps===Object(DotsProps)&&Object.isExtensible(DotsProps)&&Object.defineProperty(DotsProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"DotsProps",filename:"src/components/LoadingIndicators/Dots.tsx"}});var h=function(e){var t=Object(b.b)(),r=e.size,n=void 0===r?10:r,o=e.color,a=void 0===o?t.colors.text.primary:o,i=y(),s=Object(_.useTrail)(3,{config:{duration:800},from:{opacity:0},onRest:i,reset:!0,to:function(){var e=Object(j.a)(g.a.mark(function e(t){return g.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t({opacity:1});case 2:return e.next=4,t({opacity:0});case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()});return l.createElement(x.a,{style:{alignItems:"center",flexDirection:"row",justifyContent:"center"},__source:{fileName:v,lineNumber:34}},s.map(function(e,t){return l.createElement(B,{key:t,style:{backgroundColor:a,borderRadius:999,height:n,marginLeft:3,marginRight:3,opacity:e.opacity,width:n},__source:{fileName:v,lineNumber:42}})}))};h&&h===Object(h)&&Object.isExtensible(h)&&Object.defineProperty(h,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Dots",filename:"src/components/LoadingIndicators/Dots.tsx"}});var P=r("./src/components/Typography/Text.tsx");r.d(t,"a",function(){return S});var N="/home/travis/build/WeTrustPlatform/paramount/src/components/Button/Button.tsx";"undefined"!==typeof ButtonOverrides&&ButtonOverrides&&ButtonOverrides===Object(ButtonOverrides)&&Object.isExtensible(ButtonOverrides)&&Object.defineProperty(ButtonOverrides,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ButtonOverrides",filename:"src/components/Button/Button.tsx"}}),"undefined"!==typeof ButtonProps&&ButtonProps&&ButtonProps===Object(ButtonProps)&&Object.isExtensible(ButtonProps)&&Object.defineProperty(ButtonProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ButtonProps",filename:"src/components/Button/Button.tsx"}});var S=function(e){var t=e.appearance,r=void 0===t?"primary":t,n=e.color,o=void 0===n?"default":n,s=e.isDisabled,d=void 0!==s&&s,u=e.isLoading,p=void 0!==u&&u,f=e.size,g=void 0===f?"medium":f,j=e.onPress,x=void 0===j?function(){}:j,_=e.title,O=e.testID,y=e.overrides,v=void 0===y?{}:y,B=Object(b.b)(),h=Object(m.a)(k,e,{appearance:r,color:o,isDisabled:d,isLoading:p,size:g,onPress:x,testID:O},c()(B,"overrides.Button.Touchable"),v.Touchable),P=Object(i.a)(h,2),S=P[0],T=P[1],A=Object(m.a)(D,e,{appearance:r,color:o,isDisabled:d,size:g,title:_},c()(B,"overrides.Button.Title"),v.Title),L=Object(i.a)(A,2),z=L[0],w=L[1],I=Object(m.a)(C,e,{appearance:r,color:o},c()(B,"overrides.Button.Loading"),v.Loading),R=Object(i.a)(I,2),W=R[0],V=R[1],M=Object(m.a)(E,e,{appearance:r,color:o,isDisabled:d,isLoading:p,size:g},c()(B,"overrides.Button.IconBefore"),v.IconBefore),H=Object(i.a)(M,2),F=H[0],U=H[1],X=Object(m.a)(E,e,{appearance:r,color:o,isDisabled:d,isLoading:p,size:g},c()(B,"overrides.Button.IconAfter"),v.IconAfter),G=Object(i.a)(X,2),J=G[0],q=G[1];return l.createElement(S,Object(a.a)({},T,{__source:{fileName:N,lineNumber:151}}),l.createElement(F,Object(a.a)({},U,{__source:{fileName:N,lineNumber:152}})),p?l.createElement(W,Object(a.a)({},V,{__source:{fileName:N,lineNumber:153}})):l.createElement(z,Object(a.a)({},w,{__source:{fileName:N,lineNumber:153}})),l.createElement(J,Object(a.a)({},q,{__source:{fileName:N,lineNumber:154}})))};"undefined"!==typeof S&&S&&S===Object(S)&&Object.isExtensible(S)&&Object.defineProperty(S,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Button",filename:"src/components/Button/Button.tsx"}});var k=function(e){var t=e.appearance,r=e.color,i=e.isDisabled,s=e.isLoading,c=e.size,d=e.children,m=e.style,f=Object(o.a)(e,["appearance","color","isDisabled","isLoading","size","children","style"]),g=Object(b.b)(),j=function(e,t){return{minimal:{default:{backgroundColor:e.colors.background.content},danger:{backgroundColor:e.colors.background.content},primary:{backgroundColor:e.colors.background.content},secondary:{backgroundColor:e.colors.background.content}},primary:{default:{backgroundColor:t?e.colors.background.greyLight:e.colors.button.default},danger:{backgroundColor:t?e.colors.background.dangerLight:e.colors.button.danger},primary:{backgroundColor:t?e.colors.background.primaryLight:e.colors.button.primary},secondary:{backgroundColor:t?e.colors.background.secondaryLight:e.colors.button.secondary}},outline:{default:{backgroundColor:e.colors.background.content,borderColor:e.colors.text.default,borderWidth:3},danger:{backgroundColor:e.colors.background.content,borderColor:e.colors.border.danger,borderWidth:3},primary:{backgroundColor:e.colors.background.content,borderColor:e.colors.border.primary,borderWidth:3},secondary:{backgroundColor:e.colors.background.content,borderColor:e.colors.border.secondary,borderWidth:3}}}}(g,s),x=Object(p.a)(c)?{borderRadius:g.controlBorderRadius[c],minHeight:g.controlHeights[c],paddingLeft:g.controlPaddings[c]+8,paddingRight:g.controlPaddings[c]+8}:{borderRadius:g.controlBorderRadius.medium,minHeight:c,paddingLeft:g.controlPaddings.medium+8,paddingRight:g.controlPaddings.medium+8},_=x.borderRadius,O=x.minHeight,y=x.paddingLeft,v=x.paddingRight;return l.createElement(u.a,Object(a.a)({accessibilityRole:"button",disabled:!(!i&&!s),style:[Object(n.a)({borderRadius:_,minHeight:O,paddingLeft:y,paddingRight:v,flexDirection:"row",alignItems:"center",justifyContent:"center"},j[t][r],i&&{backgroundColor:g.colors.button.disabled}),m]},f,{__source:{fileName:N,lineNumber:277}}),d)},T=function(e){return{minimal:{default:e.colors.text.default,danger:e.colors.text.danger,primary:e.colors.text.primary,secondary:e.colors.text.secondary},primary:{default:e.colors.button.defaultText,danger:e.colors.button.dangerText,primary:e.colors.button.primaryText,secondary:e.colors.button.secondaryText},outline:{default:e.colors.text.default,danger:e.colors.text.danger,primary:e.colors.text.primary,secondary:e.colors.text.secondary}}},D=function(e){var t=e.appearance,r=e.color,i=e.isDisabled,s=e.size,c=e.title,d=e.style,u=Object(o.a)(e,["appearance","color","isDisabled","size","title","style"]),f=Object(b.b)(),g=Object(p.a)(s)?f.textSizes[s]:f.textSizes.medium;return c?l.createElement(P.a,Object(a.a)({weight:"bold",style:[Object(n.a)({alignItems:"center",color:i?f.colors.text.muted:T(f)[t][r],display:"flex",fontWeight:"600",justifyContent:"center",textAlign:"center",paddingHorizontal:8},g),Object(m.b)(e,d)]},u,{__source:{fileName:N,lineNumber:360}}),c):null},C=function(e){var t=e.appearance,r=e.color,n=Object(b.b)();return l.createElement(h,{color:T(n)[t][r],__source:{fileName:N,lineNumber:393}})},E=function(e){return l.createElement(l.Fragment,null)}},"./src/utils/ControlSize.ts":function(e,t,r){"use strict";r.d(t,"a",function(){return n});var n=function(e){return"number"!==typeof e};"undefined"!==typeof n&&n&&n===Object(n)&&Object.isExtensible(n)&&Object.defineProperty(n,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"isControlSize",filename:"src/utils/ControlSize.ts"}})}}]);
//# sourceMappingURL=20.e8e6d58e83774cf9e62e.js.map