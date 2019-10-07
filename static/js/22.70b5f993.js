(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{"./src/components/Box/Box.tsx":function(e,t,o){"use strict";var r=o("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),n=o("./node_modules/react/index.js"),a=o("./node_modules/react-native-web/dist/exports/View/index.js"),s=o("./src/theme/Theme.tsx"),i=o("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/extends.js"),c=o("./node_modules/dlv/dist/dlv.umd.js"),l=o.n(c),u=o("./src/utils/overrides.ts");"undefined"!==typeof SpacingProps&&SpacingProps&&SpacingProps===Object(SpacingProps)&&Object.isExtensible(SpacingProps)&&Object.defineProperty(SpacingProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"SpacingProps",filename:"src/components/Spacing/Spacing.tsx"}}),"undefined"!==typeof SpacingOverride&&SpacingOverride&&SpacingOverride===Object(SpacingOverride)&&Object.isExtensible(SpacingOverride)&&Object.defineProperty(SpacingOverride,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"SpacingOverride",filename:"src/components/Spacing/Spacing.tsx"}});var d=function(e,t){return"number"===typeof e?e:t.spacing[e]};d&&d===Object(d)&&Object.isExtensible(d)&&Object.defineProperty(d,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"getSpacing",filename:"src/components/Spacing/Spacing.tsx"}});var b=function(e){var t=e.size,o=void 0===t?"medium":t,c=e.orientation,b=void 0===c?"vertical":c,m=e.style,p=Object(r.a)(e,["size","orientation","style"]),f=Object(s.b)();return n.createElement(a.a,Object(i.a)({style:["vertical"===b?{height:d(o,f)}:{width:d(o,f)},Object(u.b)(e,m),Object(u.b)(e,l()(f,"overrides.Spacing.style"))]},p,{__source:{fileName:"/home/travis/build/WeTrustPlatform/paramount/src/components/Spacing/Spacing.tsx",lineNumber:44}}))};b&&b===Object(b)&&Object.isExtensible(b)&&Object.defineProperty(b,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Spacing",filename:"src/components/Spacing/Spacing.tsx"}}),o.d(t,"a",function(){return p});"undefined"!==typeof BoxProps&&BoxProps&&BoxProps===Object(BoxProps)&&Object.isExtensible(BoxProps)&&Object.defineProperty(BoxProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"BoxProps",filename:"src/components/Box/Box.tsx"}});var m={backgroundColor:function(e,t){return t.colors.background[e]?{backgroundColor:t.colors.background[e]}:{backgroundColor:e}},elevation:function(e,t){return t.elevations[e]},shape:function(e,t){return t.containerShapes[e]},space:function(e,t){return{padding:d(e,t)}},spaceBottom:function(e,t){return{paddingBottom:d(e,t)}},spaceEnd:function(e,t){return{paddingEnd:d(e,t)}},spaceHorizontal:function(e,t){return{paddingHorizontal:d(e,t)}},spaceLeft:function(e,t){return{paddingLeft:d(e,t)}},spaceRight:function(e,t){return{paddingRight:d(e,t)}},spaceStart:function(e,t){return{paddingStart:d(e,t)}},spaceTop:function(e,t){return{paddingTop:d(e,t)}},spaceVertical:function(e,t){return{paddingVertical:d(e,t)}}},p=function(e){var t=e.children,o=e.testID,i=Object(r.a)(e,["children","testID"]),c=Object(s.b)(),l=[],u={};for(var d in i)if(d){var b=m[d];if(b){var p=b(i[d],c);l.push(p)}else u[d]=i[d]}return n.createElement(a.a,{testID:o,style:[u,l],__source:{fileName:"/home/travis/build/WeTrustPlatform/paramount/src/components/Box/Box.tsx",lineNumber:106}},t)};"undefined"!==typeof p&&p&&p===Object(p)&&Object.isExtensible(p)&&Object.defineProperty(p,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Box",filename:"src/components/Box/Box.tsx"}})},"./src/components/Button/Button.tsx":function(e,t,o){"use strict";var r=o("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread.js"),n=o("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),a=o("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/extends.js"),s=o("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),i=o("./node_modules/dlv/dist/dlv.umd.js"),c=o.n(i),l=o("./node_modules/react/index.js"),u=o.n(l),d=o("./node_modules/react-native-web/dist/exports/TouchableOpacity/index.js"),b=o("./src/theme/Theme.tsx"),m=o("./src/utils/isControlSize.ts"),p=o("./src/utils/overrides.ts"),f=o("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/regenerator/index.js"),g=o.n(f),j=o("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js"),O=o("./node_modules/react-native-web/dist/exports/View/index.js"),_=o("./node_modules/react-spring/native.cjs.js"),x=function(e,t){return!e},v=function(){var e=u.a.useReducer(x,!0),t=Object(s.a)(e,2)[1];return u.a.useCallback(function(){t(null)},[t])};v&&v===Object(v)&&Object.isExtensible(v)&&Object.defineProperty(v,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"useForceUpdate",filename:"src/hooks/useForceUpdate.ts"}});var y="/home/travis/build/WeTrustPlatform/paramount/src/components/LoadingIndicators/Dots.tsx",h=Object(_.animated)(O.a);"undefined"!==typeof DotsProps&&DotsProps&&DotsProps===Object(DotsProps)&&Object.isExtensible(DotsProps)&&Object.defineProperty(DotsProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"DotsProps",filename:"src/components/LoadingIndicators/Dots.tsx"}});var P=function(e){var t=Object(b.b)(),o=e.size,r=void 0===o?10:o,n=e.color,a=void 0===n?t.colors.text.primary:n,s=v(),i=Object(_.useTrail)(3,{config:{duration:800},from:{opacity:0},onRest:s,reset:!0,to:function(){var e=Object(j.a)(g.a.mark(function e(t){return g.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t({opacity:1});case 2:return e.next=4,t({opacity:0});case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()});return l.createElement(O.a,{style:{alignItems:"center",flexDirection:"row",justifyContent:"center"},__source:{fileName:y,lineNumber:34}},i.map(function(e,t){return l.createElement(h,{key:t,style:{backgroundColor:a,borderRadius:999,height:r,marginLeft:3,marginRight:3,opacity:e.opacity,width:r},__source:{fileName:y,lineNumber:42}})}))};P&&P===Object(P)&&Object.isExtensible(P)&&Object.defineProperty(P,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Dots",filename:"src/components/LoadingIndicators/Dots.tsx"}});var B=o("./src/components/Typography/Text.tsx");o.d(t,"a",function(){return T});var N="/home/travis/build/WeTrustPlatform/paramount/src/components/Button/Button.tsx";"undefined"!==typeof ButtonOverrides&&ButtonOverrides&&ButtonOverrides===Object(ButtonOverrides)&&Object.isExtensible(ButtonOverrides)&&Object.defineProperty(ButtonOverrides,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ButtonOverrides",filename:"src/components/Button/Button.tsx"}}),"undefined"!==typeof ButtonProps&&ButtonProps&&ButtonProps===Object(ButtonProps)&&Object.isExtensible(ButtonProps)&&Object.defineProperty(ButtonProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ButtonProps",filename:"src/components/Button/Button.tsx"}});var T=function(e){var t=e.appearance,o=void 0===t?"primary":t,r=e.color,n=void 0===r?"default":r,i=e.isDisabled,u=void 0!==i&&i,d=e.isLoading,m=void 0!==d&&d,f=e.size,g=void 0===f?"medium":f,j=e.onPress,O=void 0===j?function(){}:j,_=e.title,x=e.testID,v=e.overrides,y=void 0===v?{}:v,h=Object(b.b)(),P=Object(p.a)(C,e,c()(h,"overrides.Button.Touchable"),y.Touchable),B=Object(s.a)(P,2),T=B[0],k=B[1],L=Object(p.a)(S,e,c()(h,"overrides.Button.Title"),y.Title),z=Object(s.a)(L,2),w=z[0],R=z[1],I=Object(p.a)(D,e,c()(h,"overrides.Button.Loading"),y.Loading),W=Object(s.a)(I,2),A=W[0],H=W[1],M=Object(p.a)(E,e,c()(h,"overrides.Button.IconBefore"),y.IconBefore),U=Object(s.a)(M,2),V=U[0],F=U[1],X=Object(p.a)(E,e,c()(h,"overrides.Button.IconAfter"),y.IconAfter),J=Object(s.a)(X,2),G=J[0],q=J[1];return l.createElement(T,Object(a.a)({appearance:o,color:n,isDisabled:u,isLoading:m,size:g,onPress:O,testID:x},k,{__source:{fileName:N,lineNumber:117}}),l.createElement(V,Object(a.a)({appearance:o,color:n,isDisabled:u,isLoading:m,size:g},F,{__source:{fileName:N,lineNumber:127}})),m?l.createElement(A,Object(a.a)({appearance:o,color:n},H,{__source:{fileName:N,lineNumber:136}})):l.createElement(w,Object(a.a)({appearance:o,color:n,isDisabled:u,size:g,title:_},R,{__source:{fileName:N,lineNumber:138}})),l.createElement(G,Object(a.a)({appearance:o,color:n,isDisabled:u,isLoading:m,size:g},q,{__source:{fileName:N,lineNumber:147}})))};"undefined"!==typeof T&&T&&T===Object(T)&&Object.isExtensible(T)&&Object.defineProperty(T,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Button",filename:"src/components/Button/Button.tsx"}});var C=function(e){var t=e.appearance,o=e.color,s=e.isDisabled,i=e.isLoading,c=e.size,u=e.children,p=e.style,f=Object(n.a)(e,["appearance","color","isDisabled","isLoading","size","children","style"]),g=Object(b.b)(),j=function(e,t){return{minimal:{default:{backgroundColor:e.colors.background.content},danger:{backgroundColor:e.colors.background.content},primary:{backgroundColor:e.colors.background.content},secondary:{backgroundColor:e.colors.background.content}},primary:{default:{backgroundColor:t?e.colors.background.greyLight:e.colors.button.default},danger:{backgroundColor:t?e.colors.background.dangerLight:e.colors.button.danger},primary:{backgroundColor:t?e.colors.background.primaryLight:e.colors.button.primary},secondary:{backgroundColor:t?e.colors.background.secondaryLight:e.colors.button.secondary}},outline:{default:{backgroundColor:e.colors.background.content,borderColor:e.colors.text.default,borderWidth:3},danger:{backgroundColor:e.colors.background.content,borderColor:e.colors.border.danger,borderWidth:3},primary:{backgroundColor:e.colors.background.content,borderColor:e.colors.border.primary,borderWidth:3},secondary:{backgroundColor:e.colors.background.content,borderColor:e.colors.border.secondary,borderWidth:3}}}}(g,i),O=Object(m.a)(c)?{borderRadius:g.controlBorderRadius[c],height:g.controlHeights[c],paddingLeft:g.controlPaddings[c]+8,paddingRight:g.controlPaddings[c]+8}:{borderRadius:g.controlBorderRadius.medium,height:c,paddingLeft:g.controlPaddings.medium+8,paddingRight:g.controlPaddings.medium+8},_=O.borderRadius,x=O.height,v=O.paddingLeft,y=O.paddingRight;return l.createElement(d.a,Object(a.a)({accessibilityRole:"button",disabled:!(!s&&!i),style:[Object(r.a)({borderRadius:_,height:x,paddingLeft:v,paddingRight:y,flexDirection:"row",alignItems:"center",justifyContent:"center"},j[t][o],s&&{backgroundColor:g.colors.button.disabled}),p]},f,{__source:{fileName:N,lineNumber:277}}),u)},k=function(e){return{minimal:{default:e.colors.text.default,danger:e.colors.text.danger,primary:e.colors.text.primary,secondary:e.colors.text.secondary},primary:{default:e.colors.button.defaultText,danger:e.colors.button.dangerText,primary:e.colors.button.primaryText,secondary:e.colors.button.secondaryText},outline:{default:e.colors.text.default,danger:e.colors.text.danger,primary:e.colors.text.primary,secondary:e.colors.text.secondary}}},S=function(e){var t=e.appearance,o=e.color,s=e.isDisabled,i=e.size,c=e.title,u=e.style,d=Object(n.a)(e,["appearance","color","isDisabled","size","title","style"]),f=Object(b.b)(),g=Object(m.a)(i)?f.textSizes[i]:f.textSizes.medium;return c?l.createElement(B.a,Object(a.a)({weight:"bold",style:[Object(r.a)({alignItems:"center",color:s?f.colors.text.muted:k(f)[t][o],display:"flex",fontWeight:"600",justifyContent:"center",textAlign:"center",paddingHorizontal:8},g),Object(p.b)(e,u)]},d,{__source:{fileName:N,lineNumber:360}}),c):null},D=function(e){var t=e.appearance,o=e.color,r=Object(b.b)();return l.createElement(P,{color:k(r)[t][o],__source:{fileName:N,lineNumber:393}})},E=function(e){return l.createElement(l.Fragment,null)}},"./src/components/Toast/Toast.mdx":function(e,t,o){"use strict";o.r(t),o.d(t,"default",function(){return f});var r=o("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),n=o("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/extends.js"),a=(o("./node_modules/react/index.js"),o("./node_modules/@mdx-js/react/dist/index.es.js")),s=o("./node_modules/docz/dist/index.esm.js"),i=o("./src/components/Box/Box.tsx"),c=o("./src/components/Button/Button.tsx"),l=o("./src/components/Toast/ToastContext.ts"),u=o("./src/components/Toast/ToastProvider.tsx"),d=o("./src/components/Toast/Toast.tsx"),b="/home/travis/build/WeTrustPlatform/paramount/src/components/Toast/Toast.mdx",m={},p="wrapper";function f(e){var t=e.components,o=Object(r.a)(e,["components"]);return Object(a.b)(p,Object(n.a)({},m,o,{components:t,mdxType:"MDXLayout",__source:{fileName:b,lineNumber:21}}),Object(a.b)("h1",Object(n.a)({id:"toast"},{__source:{fileName:b,lineNumber:24}}),"Toast"),Object(a.b)("h2",Object(n.a)({id:"setup"},{__source:{fileName:b,lineNumber:27}}),"Setup"),Object(a.b)("p",{__source:{fileName:b,lineNumber:30}},"Make sure to use ",Object(a.b)("inlineCode",{parentName:"p",__source:{fileName:b,lineNumber:30}},"ThemeProvider")," at the top-level component."),Object(a.b)("pre",{__source:{fileName:b,lineNumber:31}},Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-tsx"},{__source:{fileName:b,lineNumber:31}}),"<ThemeProvider>{children}</ThemeProvider>\n")),Object(a.b)("h2",Object(n.a)({id:"usage"},{__source:{fileName:b,lineNumber:35}}),"Usage"),Object(a.b)("p",{__source:{fileName:b,lineNumber:38}},"Paramount exposes a convenience hook ",Object(a.b)("inlineCode",{parentName:"p",__source:{fileName:b,lineNumber:38}},"useToast")," you can use to create toasts from anywhere in the application."),Object(a.b)(s.c,{__position:0,__code:"<ToastProvider>\n  {/*\n    We use `ToastContext.Consumer` here due to limitations in docs\n    Use `const { notify } = useToast()` inside your function component\n   */}\n  <ToastContext.Consumer>\n    {({ notify }) => (\n      <Button\n        onPress={() =>\n          notify({\n            title: 'Title',\n            description: 'Description',\n            duration: 5000,\n          })\n        }\n        title=\"Open toast\"\n      />\n    )}\n  </ToastContext.Consumer>\n</ToastProvider>",__scope:{props:this?this.props:o,Playground:s.c,Props:s.d,Box:i.a,Button:c.a,ToastContext:l.a,ToastProvider:u.a,Toast:d.a},mdxType:"Playground",__source:{fileName:b,lineNumber:39}},Object(a.b)(u.a,{mdxType:"ToastProvider",__source:{fileName:b,lineNumber:49}},Object(a.b)(l.a.Consumer,{__source:{fileName:b,lineNumber:56}},function(e){var t=e.notify;return Object(a.b)(c.a,{onPress:function(){return t({title:"Title",description:"Description",duration:5e3})},title:"Open toast",mdxType:"Button",__source:{fileName:b,lineNumber:59}})}))),Object(a.b)("h2",Object(n.a)({id:"toast-options"},{__source:{fileName:b,lineNumber:67}}),"Toast Options"),Object(a.b)(s.d,{of:d.a,mdxType:"Props",__source:{fileName:b,lineNumber:70}}))}f&&f===Object(f)&&Object.isExtensible(f)&&Object.defineProperty(f,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src/components/Toast/Toast.mdx"}}),f.isMDXComponent=!0},"./src/utils/isControlSize.ts":function(e,t,o){"use strict";o.d(t,"a",function(){return r});var r=function(e){return"number"!==typeof e};"undefined"!==typeof r&&r&&r===Object(r)&&Object.isExtensible(r)&&Object.defineProperty(r,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"isControlSize",filename:"src/utils/isControlSize.ts"}})}}]);
//# sourceMappingURL=22.6cbb7ba68e77470c5bb5.js.map