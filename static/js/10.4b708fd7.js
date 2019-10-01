(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"./src/components/Box/Box.tsx":function(e,r,t){"use strict";t.d(r,"a",function(){return c});var s=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),o=t("./node_modules/react/index.js"),n=t("./node_modules/react-native-web/dist/exports/View/index.js"),a=t("./src/theme/Theme.tsx");"undefined"!==typeof BoxProps&&BoxProps&&BoxProps===Object(BoxProps)&&Object.isExtensible(BoxProps)&&Object.defineProperty(BoxProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"BoxProps",filename:"src/components/Box/Box.tsx"}});var i={backgroundColor:function(e,r){return r.colors.background[e]?{backgroundColor:r.colors.background[e]}:{backgroundColor:e}},elevation:function(e,r){return r.elevations[e]},shape:function(e,r){return r.containerShapes[e]}},c=function(e){var r=e.children,t=e.testID,c=Object(s.a)(e,["children","testID"]),l=Object(a.b)(),u=[],b={};for(var d in c)if(d){var m=i[d];if(m){var p=m(c[d],l);u.push(p)}else b[d]=c[d]}return o.createElement(n.a,{testID:t,style:[b,u],__source:{fileName:"/home/travis/build/WeTrustPlatform/paramount/src/components/Box/Box.tsx",lineNumber:53}},r)};"undefined"!==typeof c&&c&&c===Object(c)&&Object.isExtensible(c)&&Object.defineProperty(c,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Box",filename:"src/components/Box/Box.tsx"}})},"./src/components/Counter/Counter.tsx":function(e,r,t){"use strict";t.d(r,"a",function(){return v});var s=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread.js"),o=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),n=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/extends.js"),a=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),i=t("./node_modules/dlv/dist/dlv.umd.js"),c=t.n(i),l=t("./node_modules/react/index.js"),u=t("./node_modules/react-native-web/dist/exports/TouchableOpacity/index.js"),b=t("./node_modules/react-native-web/dist/exports/View/index.js"),d=t("./src/theme/Theme.tsx"),m=t("./src/utils/overrides.ts"),p=t("./src/components/Icon/Icon.web.tsx"),f=t("./src/components/Typography/Text.tsx"),j="/home/travis/build/WeTrustPlatform/paramount/src/components/Counter/Counter.tsx";"undefined"!==typeof CounterOverrides&&CounterOverrides&&CounterOverrides===Object(CounterOverrides)&&Object.isExtensible(CounterOverrides)&&Object.defineProperty(CounterOverrides,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"CounterOverrides",filename:"src/components/Counter/Counter.tsx"}}),"undefined"!==typeof CounterProps&&CounterProps&&CounterProps===Object(CounterProps)&&Object.isExtensible(CounterProps)&&Object.defineProperty(CounterProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"CounterProps",filename:"src/components/Counter/Counter.tsx"}});var _=0,O=1,v=function(e){var r=e.value,t=void 0===r?_:r,s=e.step,o=void 0===s?O:s,i=e.max,u=e.min,b=e.onValueChange,p=void 0===b?function(){}:b,f=e.overrides,v=void 0===f?{}:f,h=Object(d.b)(),C=u===t,N=i===t,S=Object(m.a)(P,e,c()(h,"overrides.Counter.Root"),v.Root),E=Object(a.a)(S,2),w=E[0],T=E[1],D=Object(m.a)(g,e,c()(h,"overrides.Counter.Touchable"),v.Touchable),R=Object(a.a)(D,2),k=R[0],z=R[1],I=Object(m.a)(x,e,c()(h,"overrides.Counter.Count"),v.Count),W=Object(a.a)(I,2),H=W[0],M=W[1],V=Object(m.a)(y,e,c()(h,"overrides.Counter.IconPlus"),v.IconPlus),A=Object(a.a)(V,2),X=A[0],J=A[1],L=Object(m.a)(B,e,c()(h,"overrides.Counter.IconMinus"),v.IconMinus),U=Object(a.a)(L,2),q=U[0],F=U[1],G=l.useCallback(function(){p(t+o)},[t]),K=l.useCallback(function(){p(t-o)},[t]);return l.createElement(w,Object(n.a)({},T,{__source:{fileName:j,lineNumber:114}}),l.createElement(k,Object(n.a)({isDisabled:C,onPress:K},z,{__source:{fileName:j,lineNumber:115}}),l.createElement(q,Object(n.a)({isDisabled:C},F,{__source:{fileName:j,lineNumber:120}}))),l.createElement(H,Object(n.a)({value:t},M,{__source:{fileName:j,lineNumber:122}})),l.createElement(k,Object(n.a)({isDisabled:N,onPress:G},z,{__source:{fileName:j,lineNumber:123}}),l.createElement(X,Object(n.a)({isDisabled:N},J,{__source:{fileName:j,lineNumber:128}}))))};"undefined"!==typeof v&&v&&v===Object(v)&&Object.isExtensible(v)&&Object.defineProperty(v,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Counter",filename:"src/components/Counter/Counter.tsx"}});var P=function(e){var r=e.children,t=e.style,s=Object(o.a)(e,["children","style"]);return l.createElement(b.a,Object(n.a)({style:[{display:"flex",flexDirection:"row",alignItems:"center"},t]},s,{__source:{fileName:j,lineNumber:144}}),r)},x=function(e){var r=e.value,t=void 0===r?_:r,s=e.style,a=Object(o.a)(e,["value","style"]);return l.createElement(f.a,Object(n.a)({align:"center",style:[{paddingHorizontal:16,minWidth:56},s]},a,{__source:{fileName:j,lineNumber:168}}),t)},g=function(e){var r=e.children,t=e.style,a=e.isDisabled,i=void 0!==a&&a,c=e.onPress,b=Object(o.a)(e,["children","style","isDisabled","onPress"]),m=Object(d.b)();return l.createElement(u.a,Object(n.a)({style:[Object(s.a)({alignItems:"center",borderColor:m.colors.border.primary,borderRadius:999,borderWidth:1,display:"flex",height:40,justifyContent:"center",width:40},i&&{borderColor:m.colors.border.default}),t],disabled:i,onPress:i?void 0:c},b,{__source:{fileName:j,lineNumber:193}}),r)},h=function(e){var r=e.isDisabled,t=void 0!==r&&r,s=e.name,a=Object(o.a)(e,["isDisabled","name"]),i=Object(d.b)();return l.createElement(p.a,Object(n.a)({name:s,size:"xsmall",color:t?i.colors.text.muted:i.colors.text.primary},a,{__source:{fileName:j,lineNumber:226}}))},y=function(e){return l.createElement(h,Object(n.a)({name:"plus"},e,{__source:{fileName:j,lineNumber:240}}))},B=function(e){return l.createElement(h,Object(n.a)({name:"minus"},e,{__source:{fileName:j,lineNumber:243}}))}},"./src/components/Helpers/State.tsx":function(e,r,t){"use strict";t.d(r,"a",function(){return a});var s=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),o=t("./node_modules/react/index.js"),n=t.n(o);"undefined"!==typeof StateRenderProps&&StateRenderProps&&StateRenderProps===Object(StateRenderProps)&&Object.isExtensible(StateRenderProps)&&Object.defineProperty(StateRenderProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"StateRenderProps",filename:"src/components/Helpers/State.tsx"}}),"undefined"!==typeof StateProps&&StateProps&&StateProps===Object(StateProps)&&Object.isExtensible(StateProps)&&Object.defineProperty(StateProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"StateProps",filename:"src/components/Helpers/State.tsx"}});var a=function(e){var r=e.children,t=e.initial,o=void 0!==t&&t,a=n.a.useState(o),i=Object(s.a)(a,2),c=i[0],l=i[1];return r({state:c,setState:n.a.useCallback(function(e){l(e)},[])})};"undefined"!==typeof a&&a&&a===Object(a)&&Object.isExtensible(a)&&Object.defineProperty(a,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"State",filename:"src/components/Helpers/State.tsx"}})},"./src/components/ProgressBar/ProgressBar.mdx":function(e,r,t){"use strict";t.r(r),t.d(r,"default",function(){return p});var s=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),o=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/extends.js"),n=(t("./node_modules/react/index.js"),t("./node_modules/@mdx-js/react/dist/index.es.js")),a=t("./node_modules/docz/dist/index.esm.js"),i=t("./src/components/Box/Box.tsx"),c=t("./src/components/Counter/Counter.tsx"),l=t("./src/components/Helpers/State.tsx"),u=t("./src/components/ProgressBar/ProgressBar.tsx"),b="/home/travis/build/WeTrustPlatform/paramount/src/components/ProgressBar/ProgressBar.mdx",d={},m="wrapper";function p(e){var r=e.components,t=Object(s.a)(e,["components"]);return Object(n.b)(m,Object(o.a)({},d,t,{components:r,mdxType:"MDXLayout",__source:{fileName:b,lineNumber:21}}),Object(n.b)("h1",Object(o.a)({id:"progressbar"},{__source:{fileName:b,lineNumber:24}}),"ProgressBar"),Object(n.b)("h2",Object(o.a)({id:"usage"},{__source:{fileName:b,lineNumber:27}}),"Usage"),Object(n.b)(a.c,{__position:0,__code:'<State initial={{ value: 0 }}>\n  {({ state, setState }) => (\n    <Box>\n      <ProgressBar percent={state.value} size="large" />\n      <Counter\n        value={state.value}\n        onValueChange={value => setState({ value })}\n        min={0}\n        max={100}\n        step={10}\n      />\n    </Box>\n  )}\n</State>',__scope:{props:this?this.props:t,Playground:a.c,Props:a.d,Box:i.a,Counter:c.a,State:l.a,ProgressBar:u.a},mdxType:"Playground",__source:{fileName:b,lineNumber:30}},Object(n.b)(l.a,{initial:{value:0},mdxType:"State",__source:{fileName:b,lineNumber:39}},function(e){var r=e.state,t=e.setState;return Object(n.b)(i.a,{mdxType:"Box",__source:{fileName:b,lineNumber:45}},Object(n.b)(u.a,{percent:r.value,size:"large",mdxType:"ProgressBar",__source:{fileName:b,lineNumber:46}}),Object(n.b)(c.a,{value:r.value,onValueChange:function(e){return t({value:e})},min:0,max:100,step:10,mdxType:"Counter",__source:{fileName:b,lineNumber:47}}))})),Object(n.b)("h2",Object(o.a)({id:"props"},{__source:{fileName:b,lineNumber:53}}),"Props"),Object(n.b)(a.d,{of:u.a,mdxType:"Props",__source:{fileName:b,lineNumber:56}}))}p&&p===Object(p)&&Object.isExtensible(p)&&Object.defineProperty(p,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src/components/ProgressBar/ProgressBar.mdx"}}),p.isMDXComponent=!0},"./src/components/ProgressBar/ProgressBar.tsx":function(e,r,t){"use strict";t.d(r,"a",function(){return P});var s=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),o=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/extends.js"),n=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),a=t("./node_modules/dlv/dist/dlv.umd.js"),i=t.n(a),c=t("./node_modules/react/index.js"),l=t("./node_modules/react-native-web/dist/exports/Platform/index.js"),u=t("./node_modules/react-native-web/dist/exports/View/index.js"),b=t("./node_modules/react-spring/native.cjs.js"),d=t("./src/constants/Animation.ts"),m=t("./src/theme/Theme.tsx"),p=t("./src/utils/isControlSize.ts"),f=t("./src/utils/overrides.ts"),j="/home/travis/build/WeTrustPlatform/paramount/src/components/ProgressBar/ProgressBar.tsx",_=Object(b.animated)(u.a);"undefined"!==typeof ProgressBarOverrides&&ProgressBarOverrides&&ProgressBarOverrides===Object(ProgressBarOverrides)&&Object.isExtensible(ProgressBarOverrides)&&Object.defineProperty(ProgressBarOverrides,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ProgressBarOverrides",filename:"src/components/ProgressBar/ProgressBar.tsx"}}),"undefined"!==typeof ProgressBarProps&&ProgressBarProps&&ProgressBarProps===Object(ProgressBarProps)&&Object.isExtensible(ProgressBarProps)&&Object.defineProperty(ProgressBarProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ProgressBarProps",filename:"src/components/ProgressBar/ProgressBar.tsx"}});var O=0,v="medium",P=function(e){var r=e.percent,t=void 0===r?O:r,s=e.size,a=void 0===s?v:s,l=e.overrides,u=void 0===l?{}:l,b=Object(m.b)(),d=Object(f.a)(x,e,i()(b,"overrides.ProgressBar.Root"),u.Root),p=Object(n.a)(d,2),_=p[0],P=p[1],h=Object(f.a)(g,e,i()(b,"overrides.ProgressBar.Progress"),u.Progress),y=Object(n.a)(h,2),B=y[0],C=y[1];return c.createElement(_,Object(o.a)({size:a},P,{__source:{fileName:j,lineNumber:62}}),c.createElement(B,Object(o.a)({percent:t},C,{__source:{fileName:j,lineNumber:63}})))};"undefined"!==typeof P&&P&&P===Object(P)&&Object.isExtensible(P)&&Object.defineProperty(P,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ProgressBar",filename:"src/components/ProgressBar/ProgressBar.tsx"}});var x=function(e){var r=e.children,t=e.style,n=e.size,a=void 0===n?v:n,i=Object(s.a)(e,["children","style","size"]),l=Object(m.b)(),b=Object(p.a)(a)?l.controlHeights[a]-16:a;return c.createElement(u.a,Object(o.a)({style:[{backgroundColor:l.colors.background.greyDefault,borderRadius:999,height:b,overflow:"hidden"},t]},i,{__source:{fileName:j,lineNumber:80}}),r)},g=function(e){var r=e.percent,t=void 0===r?O:r,n=(e.children,e.style),a=Object(s.a)(e,["percent","children","style"]),i=Object(m.b)(),u=Math.max(Math.min(t,100),0),p=Object(b.useSpring)({config:d.a,from:{width:u},width:u}).width;return c.createElement(_,Object(o.a)({accessibilityRole:"web"===l.a.OS?"progress":"none",style:[{backgroundColor:i.colors.background.primaryDefault,borderRadius:999,height:"100%",width:p.interpolate(function(e){return"".concat(e,"%")})},n]},a,{__source:{fileName:j,lineNumber:120}}))}},"./src/utils/isControlSize.ts":function(e,r,t){"use strict";t.d(r,"a",function(){return s});var s=function(e){return"number"!==typeof e};"undefined"!==typeof s&&s&&s===Object(s)&&Object.isExtensible(s)&&Object.defineProperty(s,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"isControlSize",filename:"src/utils/isControlSize.ts"}})}}]);
//# sourceMappingURL=10.48818ae313f1216d8e7f.js.map