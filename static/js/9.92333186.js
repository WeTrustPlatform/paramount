(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"./src/components/Box/Box.tsx":function(e,r,t){"use strict";var n=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),s=t("./node_modules/react/index.js"),o=t("./node_modules/react-native-web/dist/exports/View/index.js"),a=t("./src/theme/Theme.tsx"),i=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/extends.js"),c=t("./node_modules/dlv/dist/dlv.umd.js"),l=t.n(c),u=t("./src/utils/Overrides.ts");"undefined"!==typeof SpacingProps&&SpacingProps&&SpacingProps===Object(SpacingProps)&&Object.isExtensible(SpacingProps)&&Object.defineProperty(SpacingProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"SpacingProps",filename:"src/components/Spacing/Spacing.tsx"}}),"undefined"!==typeof SpacingOverride&&SpacingOverride&&SpacingOverride===Object(SpacingOverride)&&Object.isExtensible(SpacingOverride)&&Object.defineProperty(SpacingOverride,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"SpacingOverride",filename:"src/components/Spacing/Spacing.tsx"}});var d=function(e,r){return"number"===typeof e?e:r.spacing[e]};d&&d===Object(d)&&Object.isExtensible(d)&&Object.defineProperty(d,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"getSpacing",filename:"src/components/Spacing/Spacing.tsx"}});var b=function(e){var r=e.size,t=void 0===r?"medium":r,c=e.orientation,b=void 0===c?"vertical":c,m=e.style,p=Object(n.a)(e,["size","orientation","style"]),f=Object(a.b)();return s.createElement(o.a,Object(i.a)({style:["vertical"===b?{height:d(t,f)}:{width:d(t,f)},Object(u.b)(e,m),Object(u.b)(e,l()(f,"overrides.Spacing.style"))]},p,{__source:{fileName:"/home/travis/build/WeTrustPlatform/paramount/src/components/Spacing/Spacing.tsx",lineNumber:44}}))};b&&b===Object(b)&&Object.isExtensible(b)&&Object.defineProperty(b,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Spacing",filename:"src/components/Spacing/Spacing.tsx"}}),t.d(r,"a",function(){return p});"undefined"!==typeof BoxProps&&BoxProps&&BoxProps===Object(BoxProps)&&Object.isExtensible(BoxProps)&&Object.defineProperty(BoxProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"BoxProps",filename:"src/components/Box/Box.tsx"}});var m={backgroundColor:function(e,r){return r.colors.background[e]?{backgroundColor:r.colors.background[e]}:{backgroundColor:e}},elevation:function(e,r){return r.elevations[e]},shape:function(e,r){return r.containerShapes[e]},space:function(e,r){return{padding:d(e,r)}},spaceBottom:function(e,r){return{paddingBottom:d(e,r)}},spaceEnd:function(e,r){return{paddingEnd:d(e,r)}},spaceHorizontal:function(e,r){return{paddingHorizontal:d(e,r)}},spaceLeft:function(e,r){return{paddingLeft:d(e,r)}},spaceRight:function(e,r){return{paddingRight:d(e,r)}},spaceStart:function(e,r){return{paddingStart:d(e,r)}},spaceTop:function(e,r){return{paddingTop:d(e,r)}},spaceVertical:function(e,r){return{paddingVertical:d(e,r)}}},p=function(e){var r=e.children,t=e.testID,i=Object(n.a)(e,["children","testID"]),c=Object(a.b)(),l=[],u={};for(var d in i)if(d){var b=m[d];if(b){var p=b(i[d],c);l.push(p)}else u[d]=i[d]}return s.createElement(o.a,{testID:t,style:[u,l],__source:{fileName:"/home/travis/build/WeTrustPlatform/paramount/src/components/Box/Box.tsx",lineNumber:106}},r)};"undefined"!==typeof p&&p&&p===Object(p)&&Object.isExtensible(p)&&Object.defineProperty(p,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Box",filename:"src/components/Box/Box.tsx"}})},"./src/components/Counter/Counter.tsx":function(e,r,t){"use strict";t.d(r,"a",function(){return O});var n=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread.js"),s=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),o=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/extends.js"),a=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),i=t("./node_modules/dlv/dist/dlv.umd.js"),c=t.n(i),l=t("./node_modules/react/index.js"),u=t("./node_modules/react-native-web/dist/exports/TouchableOpacity/index.js"),d=t("./node_modules/react-native-web/dist/exports/View/index.js"),b=t("./src/theme/Theme.tsx"),m=t("./src/utils/Overrides.ts"),p=t("./src/components/Icon/Icon.web.tsx"),f=t("./src/components/Typography/Text.tsx"),j="/home/travis/build/WeTrustPlatform/paramount/src/components/Counter/Counter.tsx";"undefined"!==typeof CounterOverrides&&CounterOverrides&&CounterOverrides===Object(CounterOverrides)&&Object.isExtensible(CounterOverrides)&&Object.defineProperty(CounterOverrides,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"CounterOverrides",filename:"src/components/Counter/Counter.tsx"}}),"undefined"!==typeof CounterProps&&CounterProps&&CounterProps===Object(CounterProps)&&Object.isExtensible(CounterProps)&&Object.defineProperty(CounterProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"CounterProps",filename:"src/components/Counter/Counter.tsx"}});var O=function(e){var r=e.value,t=void 0===r?0:r,n=e.step,s=void 0===n?1:n,i=e.max,u=e.min,d=e.onValueChange,p=void 0===d?function(){}:d,f=e.overrides,O=void 0===f?{}:f,P=Object(b.b)(),h=u===t,S=i===t,B=l.useCallback(function(){p(t+s)},[t]),C=l.useCallback(function(){p(t-s)},[t]),N=Object(m.a)(_,e,{},c()(P,"overrides.Counter.Root"),O.Root),E=Object(a.a)(N,2),w=E[0],T=E[1],D=Object(m.a)(v,e,{isDisabled:h,onPress:C},c()(P,"overrides.Counter.Decrement"),O.Decrement),z=Object(a.a)(D,2),R=z[0],k=z[1],I=Object(m.a)(v,e,{isDisabled:S,onPress:B},c()(P,"overrides.Counter.Increment"),O.Increment),W=Object(a.a)(I,2),H=W[0],V=W[1],M=Object(m.a)(g,e,{value:t},c()(P,"overrides.Counter.Count"),O.Count),A=Object(a.a)(M,2),L=A[0],X=A[1],J=Object(m.a)(x,e,{isDisabled:S},c()(P,"overrides.Counter.IconPlus"),O.IconPlus),U=Object(a.a)(J,2),q=U[0],F=U[1],G=Object(m.a)(y,e,{isDisabled:h},c()(P,"overrides.Counter.IconMinus"),O.IconMinus),K=Object(a.a)(G,2),Q=K[0],Y=K[1];return l.createElement(w,Object(o.a)({},T,{__source:{fileName:j,lineNumber:128}}),l.createElement(R,Object(o.a)({},k,{__source:{fileName:j,lineNumber:129}}),l.createElement(Q,Object(o.a)({},Y,{__source:{fileName:j,lineNumber:130}}))),l.createElement(L,Object(o.a)({},X,{__source:{fileName:j,lineNumber:132}})),l.createElement(H,Object(o.a)({},V,{__source:{fileName:j,lineNumber:133}}),l.createElement(q,Object(o.a)({},F,{__source:{fileName:j,lineNumber:134}}))))};"undefined"!==typeof O&&O&&O===Object(O)&&Object.isExtensible(O)&&Object.defineProperty(O,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Counter",filename:"src/components/Counter/Counter.tsx"}});var _=function(e){var r=e.children,t=e.style,n=Object(s.a)(e,["children","style"]);return l.createElement(d.a,Object(o.a)({style:[{display:"flex",flexDirection:"row",alignItems:"center"},t]},n,{__source:{fileName:j,lineNumber:150}}),r)},g=function(e){var r=e.value,t=e.style,n=Object(s.a)(e,["value","style"]);return l.createElement(f.a,Object(o.a)({align:"center",style:[{paddingHorizontal:16,minWidth:56},Object(m.b)(e,t)]},n,{__source:{fileName:j,lineNumber:174}}),r)},v=function(e){var r=e.children,t=e.style,a=e.isDisabled,i=void 0!==a&&a,c=e.onPress,d=Object(s.a)(e,["children","style","isDisabled","onPress"]),m=Object(b.b)();return l.createElement(u.a,Object(o.a)({style:[Object(n.a)({alignItems:"center",borderColor:m.colors.border.primary,borderRadius:999,borderWidth:1,display:"flex",height:40,justifyContent:"center",width:40},i&&{borderColor:m.colors.border.default}),t],disabled:i,onPress:i?void 0:c},d,{__source:{fileName:j,lineNumber:199}}),r)},P=function(e){var r=e.isDisabled,t=e.name,n=Object(s.a)(e,["isDisabled","name"]),a=Object(b.b)();return l.createElement(p.a,Object(o.a)({name:t,size:"xsmall",color:r?a.colors.text.muted:a.colors.text.primary},n,{__source:{fileName:j,lineNumber:232}}))},x=function(e){return l.createElement(P,Object(o.a)({name:"plus"},e,{__source:{fileName:j,lineNumber:246}}))},y=function(e){return l.createElement(P,Object(o.a)({name:"minus"},e,{__source:{fileName:j,lineNumber:249}}))}},"./src/components/Helpers/State.tsx":function(e,r,t){"use strict";t.d(r,"a",function(){return a});var n=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),s=t("./node_modules/react/index.js"),o=t.n(s);"undefined"!==typeof StateRenderProps&&StateRenderProps&&StateRenderProps===Object(StateRenderProps)&&Object.isExtensible(StateRenderProps)&&Object.defineProperty(StateRenderProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"StateRenderProps",filename:"src/components/Helpers/State.tsx"}}),"undefined"!==typeof StateProps&&StateProps&&StateProps===Object(StateProps)&&Object.isExtensible(StateProps)&&Object.defineProperty(StateProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"StateProps",filename:"src/components/Helpers/State.tsx"}});var a=function(e){var r=e.children,t=e.initial,s=void 0!==t&&t,a=o.a.useState(s),i=Object(n.a)(a,2),c=i[0],l=i[1];return r({state:c,setState:o.a.useCallback(function(e){l(e)},[])})};"undefined"!==typeof a&&a&&a===Object(a)&&Object.isExtensible(a)&&Object.defineProperty(a,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"State",filename:"src/components/Helpers/State.tsx"}})},"./src/components/ProgressBar/ProgressBar.mdx":function(e,r,t){"use strict";t.r(r),t.d(r,"default",function(){return p});var n=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),s=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/extends.js"),o=(t("./node_modules/react/index.js"),t("./node_modules/@mdx-js/react/dist/index.es.js")),a=t("./node_modules/docz/dist/index.esm.js"),i=t("./src/components/Box/Box.tsx"),c=t("./src/components/Counter/Counter.tsx"),l=t("./src/components/Helpers/State.tsx"),u=t("./src/components/ProgressBar/ProgressBar.tsx"),d="/home/travis/build/WeTrustPlatform/paramount/src/components/ProgressBar/ProgressBar.mdx",b={},m="wrapper";function p(e){var r=e.components,t=Object(n.a)(e,["components"]);return Object(o.b)(m,Object(s.a)({},b,t,{components:r,mdxType:"MDXLayout",__source:{fileName:d,lineNumber:21}}),Object(o.b)("h1",Object(s.a)({id:"progressbar"},{__source:{fileName:d,lineNumber:24}}),"ProgressBar"),Object(o.b)("h2",Object(s.a)({id:"usage"},{__source:{fileName:d,lineNumber:27}}),"Usage"),Object(o.b)(a.c,{__position:0,__code:'<State initial={{ value: 0 }}>\n  {({ state, setState }) => (\n    <Box>\n      <ProgressBar percent={state.value} size="large" />\n      <Counter\n        value={state.value}\n        onValueChange={value => setState({ value })}\n        min={0}\n        max={100}\n        step={10}\n      />\n    </Box>\n  )}\n</State>',__scope:{props:this?this.props:t,Playground:a.c,Props:a.d,Box:i.a,Counter:c.a,State:l.a,ProgressBar:u.a},mdxType:"Playground",__source:{fileName:d,lineNumber:30}},Object(o.b)(l.a,{initial:{value:0},mdxType:"State",__source:{fileName:d,lineNumber:39}},function(e){var r=e.state,t=e.setState;return Object(o.b)(i.a,{mdxType:"Box",__source:{fileName:d,lineNumber:45}},Object(o.b)(u.a,{percent:r.value,size:"large",mdxType:"ProgressBar",__source:{fileName:d,lineNumber:46}}),Object(o.b)(c.a,{value:r.value,onValueChange:function(e){return t({value:e})},min:0,max:100,step:10,mdxType:"Counter",__source:{fileName:d,lineNumber:47}}))})),Object(o.b)("h2",Object(s.a)({id:"props"},{__source:{fileName:d,lineNumber:53}}),"Props"),Object(o.b)(a.d,{of:u.a,mdxType:"Props",__source:{fileName:d,lineNumber:56}}))}p&&p===Object(p)&&Object.isExtensible(p)&&Object.defineProperty(p,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src/components/ProgressBar/ProgressBar.mdx"}}),p.isMDXComponent=!0},"./src/components/ProgressBar/ProgressBar.tsx":function(e,r,t){"use strict";t.d(r,"a",function(){return _});var n=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),s=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/extends.js"),o=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),a=t("./node_modules/dlv/dist/dlv.umd.js"),i=t.n(a),c=t("./node_modules/react/index.js"),l=t("./node_modules/react-native-web/dist/exports/Platform/index.js"),u=t("./node_modules/react-native-web/dist/exports/View/index.js"),d=t("./node_modules/react-spring/native.cjs.js"),b=t("./src/constants/Animation.ts"),m=t("./src/theme/Theme.tsx"),p=t("./src/utils/ControlSize.ts"),f=t("./src/utils/Overrides.ts"),j="/home/travis/build/WeTrustPlatform/paramount/src/components/ProgressBar/ProgressBar.tsx",O=Object(d.animated)(u.a);"undefined"!==typeof ProgressBarOverrides&&ProgressBarOverrides&&ProgressBarOverrides===Object(ProgressBarOverrides)&&Object.isExtensible(ProgressBarOverrides)&&Object.defineProperty(ProgressBarOverrides,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ProgressBarOverrides",filename:"src/components/ProgressBar/ProgressBar.tsx"}}),"undefined"!==typeof ProgressBarProps&&ProgressBarProps&&ProgressBarProps===Object(ProgressBarProps)&&Object.isExtensible(ProgressBarProps)&&Object.defineProperty(ProgressBarProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ProgressBarProps",filename:"src/components/ProgressBar/ProgressBar.tsx"}});var _=function(e){var r=e.percent,t=void 0===r?0:r,n=e.size,a=void 0===n?"medium":n,l=e.overrides,u=void 0===l?{}:l,d=Object(m.b)(),b=Object(f.a)(g,e,{size:a},i()(d,"overrides.ProgressBar.Root"),u.Root),p=Object(o.a)(b,2),O=p[0],_=p[1],P=Object(f.a)(v,e,{percent:t},i()(d,"overrides.ProgressBar.Progress"),u.Progress),x=Object(o.a)(P,2),y=x[0],h=x[1];return c.createElement(O,Object(s.a)({},_,{__source:{fileName:j,lineNumber:55}}),c.createElement(y,Object(s.a)({},h,{__source:{fileName:j,lineNumber:56}})))};"undefined"!==typeof _&&_&&_===Object(_)&&Object.isExtensible(_)&&Object.defineProperty(_,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ProgressBar",filename:"src/components/ProgressBar/ProgressBar.tsx"}});var g=function(e){var r=e.children,t=e.style,o=e.size,a=Object(n.a)(e,["children","style","size"]),i=Object(m.b)(),l=Object(p.a)(o)?i.controlHeights[o]-16:o;return c.createElement(u.a,Object(s.a)({style:[{backgroundColor:i.colors.background.greyDefault,borderRadius:999,minHeight:l,overflow:"hidden"},t]},a,{__source:{fileName:j,lineNumber:75}}),r)},v=function(e){var r=e.percent,t=(e.children,e.style),o=Object(n.a)(e,["percent","children","style"]),a=Object(m.b)(),i=Math.max(Math.min(r,100),0),u=Object(d.useSpring)({config:b.a,from:{width:i},width:i}).width;return c.createElement(O,Object(s.a)({accessibilityRole:"web"===l.a.OS?"progress":"none",style:[{backgroundColor:a.colors.background.primaryDefault,borderRadius:999,height:"100%",width:u.interpolate(function(e){return"".concat(e,"%")})},t]},o,{__source:{fileName:j,lineNumber:110}}))}},"./src/utils/ControlSize.ts":function(e,r,t){"use strict";t.d(r,"a",function(){return n});var n=function(e){return"number"!==typeof e};"undefined"!==typeof n&&n&&n===Object(n)&&Object.isExtensible(n)&&Object.defineProperty(n,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"isControlSize",filename:"src/utils/ControlSize.ts"}})}}]);
//# sourceMappingURL=9.e8e6d58e83774cf9e62e.js.map