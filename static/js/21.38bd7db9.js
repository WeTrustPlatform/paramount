(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{"./src/components/Alert/Alert.mdx":function(e,t,o){"use strict";o.r(t),o.d(t,"default",function(){return m});var r=o("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),n=o("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/extends.js"),a=(o("./node_modules/react/index.js"),o("./node_modules/@mdx-js/react/dist/index.es.js")),i=o("./node_modules/docz/dist/index.esm.js"),s=o("./src/components/Alert/Alert.tsx"),c=o("./src/components/Box/Box.tsx"),l=o("./src/components/Button/Button.tsx"),d="/home/travis/build/WeTrustPlatform/paramount/src/components/Alert/Alert.mdx",u={},b="wrapper";function m(e){var t=e.components,o=Object(r.a)(e,["components"]);return Object(a.b)(b,Object(n.a)({},u,o,{components:t,mdxType:"MDXLayout",__source:{fileName:d,lineNumber:21}}),Object(a.b)("h1",Object(n.a)({id:"alert"},{__source:{fileName:d,lineNumber:23}}),"Alert"),Object(a.b)("p",{__source:{fileName:d,lineNumber:26}},"Give feedback to the user about an action or state"),Object(a.b)("h2",Object(n.a)({id:"usage"},{__source:{fileName:d,lineNumber:27}}),"Usage"),Object(a.b)(i.c,{__position:0,__code:'<Box paddingVertical={8}>\n  <Alert title="Info" description="Message" />\n</Box>\n<Box paddingVertical={8}>\n  <Alert intent="success" title="Success" description="Message" />\n</Box>\n<Box paddingVertical={8}>\n  <Alert intent="warning" title="Warning" description="Message" />\n</Box>\n<Box paddingVertical={8}>\n  <Alert\n    intent="danger"\n    title="Danger"\n    description="Message"\n    overrides={{\n      Action: {\n        component: () => (\n          <Button title="Action" appearance="minimal" color="primary" />\n        ),\n      },\n    }}\n  />\n</Box>',__scope:{props:this?this.props:o,Playground:i.c,Props:i.d,Alert:s.a,Box:c.a,Button:l.a},mdxType:"Playground",__source:{fileName:d,lineNumber:30}},Object(a.b)(c.a,{paddingVertical:8,mdxType:"Box",__source:{fileName:d,lineNumber:38}},Object(a.b)(s.a,{title:"Info",description:"Message",mdxType:"Alert",__source:{fileName:d,lineNumber:39}})),Object(a.b)(c.a,{paddingVertical:8,mdxType:"Box",__source:{fileName:d,lineNumber:41}},Object(a.b)(s.a,{intent:"success",title:"Success",description:"Message",mdxType:"Alert",__source:{fileName:d,lineNumber:42}})),Object(a.b)(c.a,{paddingVertical:8,mdxType:"Box",__source:{fileName:d,lineNumber:44}},Object(a.b)(s.a,{intent:"warning",title:"Warning",description:"Message",mdxType:"Alert",__source:{fileName:d,lineNumber:45}})),Object(a.b)(c.a,{paddingVertical:8,mdxType:"Box",__source:{fileName:d,lineNumber:47}},Object(a.b)(s.a,{intent:"danger",title:"Danger",description:"Message",overrides:{Action:{component:function(){return Object(a.b)(l.a,{title:"Action",appearance:"minimal",color:"primary",mdxType:"Button",__source:{fileName:d,lineNumber:50}})}}},mdxType:"Alert",__source:{fileName:d,lineNumber:48}}))),Object(a.b)("h2",Object(n.a)({id:"props"},{__source:{fileName:d,lineNumber:55}}),"Props"),Object(a.b)(i.d,{of:s.a,mdxType:"Props",__source:{fileName:d,lineNumber:58}}))}m&&m===Object(m)&&Object.isExtensible(m)&&Object.defineProperty(m,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src/components/Alert/Alert.mdx"}}),m.isMDXComponent=!0},"./src/components/Box/Box.tsx":function(e,t,o){"use strict";o.d(t,"a",function(){return c});var r=o("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),n=o("./node_modules/react/index.js"),a=o("./node_modules/react-native-web/dist/exports/View/index.js"),i=o("./src/theme/Theme.tsx");"undefined"!==typeof BoxProps&&BoxProps&&BoxProps===Object(BoxProps)&&Object.isExtensible(BoxProps)&&Object.defineProperty(BoxProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"BoxProps",filename:"src/components/Box/Box.tsx"}});var s={backgroundColor:function(e,t){return t.colors.background[e]?{backgroundColor:t.colors.background[e]}:{backgroundColor:e}},elevation:function(e,t){return t.elevations[e]},shape:function(e,t){return t.containerShapes[e]}},c=function(e){var t=e.children,o=e.testID,c=Object(r.a)(e,["children","testID"]),l=Object(i.b)(),d=[],u={};for(var b in c)if(b){var m=s[b];if(m){var p=m(c[b],l);d.push(p)}else u[b]=c[b]}return n.createElement(a.a,{testID:o,style:[u,d],__source:{fileName:"/home/travis/build/WeTrustPlatform/paramount/src/components/Box/Box.tsx",lineNumber:53}},t)};"undefined"!==typeof c&&c&&c===Object(c)&&Object.isExtensible(c)&&Object.defineProperty(c,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Box",filename:"src/components/Box/Box.tsx"}})},"./src/components/Button/Button.tsx":function(e,t,o){"use strict";var r=o("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread.js"),n=o("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),a=o("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/extends.js"),i=o("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),s=o("./node_modules/dlv/dist/dlv.umd.js"),c=o.n(s),l=o("./node_modules/react/index.js"),d=o.n(l),u=o("./node_modules/react-native-web/dist/exports/TouchableOpacity/index.js"),b=o("./src/theme/Theme.tsx"),m=o("./src/utils/isControlSize.ts"),p=o("./src/utils/overrides.ts"),f=o("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/regenerator/index.js"),g=o.n(f),x=o("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js"),j=o("./node_modules/react-native-web/dist/exports/View/index.js"),_=o("./node_modules/react-spring/native.cjs.js"),O=function(e,t){return!e},y=function(){var e=d.a.useReducer(O,!0),t=Object(i.a)(e,2)[1];return d.a.useCallback(function(){t(null)},[t])};y&&y===Object(y)&&Object.isExtensible(y)&&Object.defineProperty(y,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"useForceUpdate",filename:"src/hooks/useForceUpdate.ts"}});var v="/home/travis/build/WeTrustPlatform/paramount/src/components/LoadingIndicators/Dots.tsx",B=Object(_.animated)(j.a);"undefined"!==typeof DotsProps&&DotsProps&&DotsProps===Object(DotsProps)&&Object.isExtensible(DotsProps)&&Object.defineProperty(DotsProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"DotsProps",filename:"src/components/LoadingIndicators/Dots.tsx"}});var h=function(e){var t=Object(b.b)(),o=e.size,r=void 0===o?10:o,n=e.color,a=void 0===n?t.colors.text.primary:n,i=y(),s=Object(_.useTrail)(3,{config:{duration:800},from:{opacity:0},onRest:i,reset:!0,to:function(){var e=Object(x.a)(g.a.mark(function e(t){return g.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t({opacity:1});case 2:return e.next=4,t({opacity:0});case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()});return l.createElement(j.a,{style:{alignItems:"center",flexDirection:"row",justifyContent:"center"},__source:{fileName:v,lineNumber:34}},s.map(function(e,t){return l.createElement(B,{key:t,style:{backgroundColor:a,borderRadius:999,height:r,marginLeft:3,marginRight:3,opacity:e.opacity,width:r},__source:{fileName:v,lineNumber:42}})}))};h&&h===Object(h)&&Object.isExtensible(h)&&Object.defineProperty(h,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Dots",filename:"src/components/LoadingIndicators/Dots.tsx"}});var N=o("./src/components/Typography/Text.tsx");o.d(t,"a",function(){return E});var P="/home/travis/build/WeTrustPlatform/paramount/src/components/Button/Button.tsx";"undefined"!==typeof ButtonOverrides&&ButtonOverrides&&ButtonOverrides===Object(ButtonOverrides)&&Object.isExtensible(ButtonOverrides)&&Object.defineProperty(ButtonOverrides,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ButtonOverrides",filename:"src/components/Button/Button.tsx"}}),"undefined"!==typeof ButtonProps&&ButtonProps&&ButtonProps===Object(ButtonProps)&&Object.isExtensible(ButtonProps)&&Object.defineProperty(ButtonProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ButtonProps",filename:"src/components/Button/Button.tsx"}});var k="primary",D="default",T=!1,C=!1,A="medium",E=function(e){var t=e.appearance,o=void 0===t?k:t,r=e.color,n=void 0===r?D:r,s=e.isDisabled,d=void 0===s?T:s,u=e.isLoading,m=void 0===u?C:u,f=e.size,g=void 0===f?A:f,x=e.onPress,j=void 0===x?function(){}:x,_=e.title,O=e.testID,y=e.overrides,v=void 0===y?{}:y,B=Object(b.b)(),h=Object(p.a)(w,e,c()(B,"overrides.Button.Touchable"),v.Touchable),N=Object(i.a)(h,2),E=N[0],L=N[1],W=Object(p.a)(z,e,c()(B,"overrides.Button.Title"),v.Title),M=Object(i.a)(W,2),S=M[0],V=M[1],F=Object(p.a)(I,e,c()(B,"overrides.Button.Loading"),v.Loading),U=Object(i.a)(F,2),X=U[0],G=U[1],H=Object(p.a)(R,e,c()(B,"overrides.Button.IconBefore"),v.IconBefore),J=Object(i.a)(H,2),q=J[0],K=J[1],Q=Object(p.a)(R,e,c()(B,"overrides.Button.IconAfter"),v.IconAfter),Y=Object(i.a)(Q,2),Z=Y[0],$=Y[1];return l.createElement(E,Object(a.a)({appearance:o,color:n,isDisabled:d,isLoading:m,size:g,onPress:j,testID:O},L,{__source:{fileName:P,lineNumber:125}}),l.createElement(q,Object(a.a)({appearance:o,color:n,isDisabled:d,isLoading:m,size:g},K,{__source:{fileName:P,lineNumber:135}})),m?l.createElement(X,Object(a.a)({appearance:o,color:n},G,{__source:{fileName:P,lineNumber:144}})):l.createElement(S,Object(a.a)({appearance:o,color:n,isDisabled:d,size:g,title:_},V,{__source:{fileName:P,lineNumber:146}})),l.createElement(Z,Object(a.a)({appearance:o,color:n,isDisabled:d,isLoading:m,size:g},$,{__source:{fileName:P,lineNumber:155}})))};"undefined"!==typeof E&&E&&E===Object(E)&&Object.isExtensible(E)&&Object.defineProperty(E,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Button",filename:"src/components/Button/Button.tsx"}});var w=function(e){var t=e.appearance,o=void 0===t?k:t,i=e.color,s=void 0===i?D:i,c=e.isDisabled,d=void 0===c?T:c,p=e.isLoading,f=void 0===p?C:p,g=e.size,x=void 0===g?A:g,j=e.children,_=e.style,O=Object(n.a)(e,["appearance","color","isDisabled","isLoading","size","children","style"]),y=Object(b.b)(),v=function(e,t){return{minimal:{default:{backgroundColor:e.colors.background.content},danger:{backgroundColor:e.colors.background.content},primary:{backgroundColor:e.colors.background.content},secondary:{backgroundColor:e.colors.background.content}},primary:{default:{backgroundColor:t?e.colors.background.overlay:e.colors.button.default},danger:{backgroundColor:t?e.colors.background.dangerLight:e.colors.button.danger},primary:{backgroundColor:t?e.colors.background.primaryLight:e.colors.button.primary},secondary:{backgroundColor:t?e.colors.background.secondaryLight:e.colors.button.secondary}},outline:{default:{backgroundColor:e.colors.background.content,borderColor:e.colors.text.default,borderWidth:3},danger:{backgroundColor:e.colors.background.content,borderColor:e.colors.border.danger,borderWidth:3},primary:{backgroundColor:e.colors.background.content,borderColor:e.colors.border.primary,borderWidth:3},secondary:{backgroundColor:e.colors.background.content,borderColor:e.colors.border.secondary,borderWidth:3}}}}(y,f),B=Object(m.a)(x)?{borderRadius:y.controlBorderRadius[x],height:y.controlHeights[x],paddingLeft:y.controlPaddings[x]+8,paddingRight:y.controlPaddings[x]+8}:{borderRadius:y.controlBorderRadius.medium,height:x,paddingLeft:y.controlPaddings.medium+8,paddingRight:y.controlPaddings.medium+8},h=B.borderRadius,N=B.height,E=B.paddingLeft,w=B.paddingRight;return l.createElement(u.a,Object(a.a)({accessibilityRole:"button",disabled:!(!d&&!f),style:[Object(r.a)({borderRadius:h,height:N,paddingLeft:E,paddingRight:w,flexDirection:"row",alignItems:"center",justifyContent:"center"},v[o][s],d&&{backgroundColor:y.colors.button.disabled}),_]},O,{__source:{fileName:P,lineNumber:285}}),j)},L=function(e){return{minimal:{default:e.colors.text.default,danger:e.colors.text.danger,primary:e.colors.text.primary,secondary:e.colors.text.secondary},primary:{default:e.colors.button.defaultText,danger:e.colors.button.dangerText,primary:e.colors.button.primaryText,secondary:e.colors.button.secondaryText},outline:{default:e.colors.text.default,danger:e.colors.text.danger,primary:e.colors.text.primary,secondary:e.colors.text.secondary}}},z=function(e){var t=e.appearance,o=void 0===t?k:t,i=e.color,s=void 0===i?D:i,c=e.isDisabled,d=void 0===c?T:c,u=e.size,p=void 0===u?A:u,f=e.title,g=e.style,x=Object(n.a)(e,["appearance","color","isDisabled","size","title","style"]),j=Object(b.b)(),_=Object(m.a)(p)?j.textSizes[p]:j.textSizes.medium;return f?l.createElement(N.a,Object(a.a)({weight:"bold",style:[Object(r.a)({alignItems:"center",color:d?j.colors.text.muted:L(j)[o][s],display:"flex",fontWeight:"600",justifyContent:"center",textAlign:"center",paddingHorizontal:8},_),g]},x,{__source:{fileName:P,lineNumber:368}}),f):null},I=function(e){var t=e.appearance,o=void 0===t?k:t,r=e.color,n=void 0===r?D:r,a=Object(b.b)();return l.createElement(h,{color:L(a)[o][n],__source:{fileName:P,lineNumber:404}})},R=function(e){return l.createElement(l.Fragment,null)}},"./src/utils/isControlSize.ts":function(e,t,o){"use strict";o.d(t,"a",function(){return r});var r=function(e){return"number"!==typeof e};"undefined"!==typeof r&&r&&r===Object(r)&&Object.isExtensible(r)&&Object.defineProperty(r,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"isControlSize",filename:"src/utils/isControlSize.ts"}})}}]);
//# sourceMappingURL=21.b00e7a1f0342f715624d.js.map