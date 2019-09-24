(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{"./src/components/Counter/Counter.mdx":function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return b});var r=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),o=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/extends.js"),s=(n("./node_modules/react/index.js"),n("./node_modules/@mdx-js/react/dist/index.es.js")),a=n("./node_modules/docz/dist/index.esm.js"),l=n("./src/components/Counter/Counter.tsx"),c=n("./src/components/Helpers/CounterState.tsx"),u="/home/travis/build/WeTrustPlatform/paramount/src/components/Counter/Counter.mdx",i={},m="wrapper";function b(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(s.b)(m,Object(o.a)({},i,n,{components:t,mdxType:"MDXLayout",__source:{fileName:u,lineNumber:21}}),Object(s.b)("h1",Object(o.a)({id:"counter"},{__source:{fileName:u,lineNumber:23}}),"Counter"),Object(s.b)("h2",Object(o.a)({id:"usage"},{__source:{fileName:u,lineNumber:26}}),"Usage"),Object(s.b)(a.c,{__position:0,__code:"<CounterState initial={0}>\n  {({ count, increment, decrement }) => (\n    <Counter count={count} onDecrement={decrement} onIncrement={increment} />\n  )}\n</CounterState>",__scope:{props:this?this.props:n,Playground:a.c,Props:a.d,Counter:l.a,CounterState:c.a},mdxType:"Playground",__source:{fileName:u,lineNumber:29}},Object(s.b)(c.a,{initial:0,mdxType:"CounterState",__source:{fileName:u,lineNumber:36}},function(e){var t=e.count,n=e.increment,r=e.decrement;return Object(s.b)(l.a,{count:t,onDecrement:r,onIncrement:n,mdxType:"Counter",__source:{fileName:u,lineNumber:41}})})),Object(s.b)("h2",Object(o.a)({id:"props"},{__source:{fileName:u,lineNumber:44}}),"Props"),Object(s.b)(a.d,{of:l.a,mdxType:"Props",__source:{fileName:u,lineNumber:47}}),Object(s.b)("h2",Object(o.a)({id:"customization"},{__source:{fileName:u,lineNumber:48}}),"Customization"),Object(s.b)("p",{__source:{fileName:u,lineNumber:51}},"Using ",Object(s.b)("inlineCode",{parentName:"p",__source:{fileName:u,lineNumber:51}},"getStyles")," prop"),Object(s.b)("pre",{__source:{fileName:u,lineNumber:52}},Object(s.b)("code",Object(o.a)({parentName:"pre"},{},{__source:{fileName:u,lineNumber:52}}),"CounterStyles {\n  containerStyle: ViewStyle;\n  counterStyle: ViewStyle;\n  countStyle: ViewStyle;\n  decrementWrapperStyle: ViewStyle;\n  disabledStyle: ViewStyle;\n  incrementWrapperStyle: ViewStyle;\n  textStyle: TextStyle;\n}\n\ngetStyles={(CounterProps, Theme) => CounterStyles}\n")),Object(s.b)("p",{__source:{fileName:u,lineNumber:64}},"Markup"),Object(s.b)("pre",{__source:{fileName:u,lineNumber:65}},Object(s.b)("code",Object(o.a)({parentName:"pre"},{className:"language-tsx"},{__source:{fileName:u,lineNumber:65}}),"<View containerStyle>\n  <View decrementWrapperStyle>\n    <TouchableOpacity counterStyle>{icon}</TouchableOpacity>\n  </View>\n  <View countStyle>\n    <Text textStyle>{count}</Text>\n  </View>\n  <View incrementWrapperStyle>\n    <TouchableOpacity counterStyle>{icon}</TouchableOpacity>\n  </View>\n</View>\n")))}b&&b===Object(b)&&Object.isExtensible(b)&&Object.defineProperty(b,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src/components/Counter/Counter.mdx"}}),b.isMDXComponent=!0},"./src/components/Counter/Counter.tsx":function(e,t,n){"use strict";var r=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread.js"),o=n("./node_modules/react/index.js"),s=n("./node_modules/react-native-web/dist/exports/TouchableOpacity/index.js"),a=n("./node_modules/react-native-web/dist/exports/View/index.js"),l=n("./src/theme/Theme.tsx"),c=n("./src/utils/mergeStyles.ts"),u=n("./src/components/Icon/Icon.web.tsx"),i=n("./src/components/Typography/Text.tsx");"undefined"!==typeof CounterStyles&&CounterStyles&&CounterStyles===Object(CounterStyles)&&Object.isExtensible(CounterStyles)&&Object.defineProperty(CounterStyles,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"CounterStyles",filename:"src/components/Counter/Counter.styles.ts"}}),"undefined"!==typeof GetCounterStyles&&GetCounterStyles&&GetCounterStyles===Object(GetCounterStyles)&&Object.isExtensible(GetCounterStyles)&&Object.defineProperty(GetCounterStyles,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"GetCounterStyles",filename:"src/components/Counter/Counter.styles.ts"}});var m=function(e,t){return{containerStyle:{display:"flex",flexDirection:"row"},countStyle:{justifyContent:"center",minWidth:24},counterStyle:{alignItems:"center",borderColor:t.colors.border.primary,borderRadius:999,borderWidth:1,display:"flex",height:40,justifyContent:"center",width:40},decrementWrapperStyle:{paddingRight:16},disabledStyle:{borderColor:t.colors.border.default},incrementWrapperStyle:{paddingLeft:16},textStyle:{}}};m&&m===Object(m)&&Object.isExtensible(m)&&Object.defineProperty(m,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"getCounterStyles",filename:"src/components/Counter/Counter.styles.ts"}}),n.d(t,"a",function(){return p});var b="/home/travis/build/WeTrustPlatform/paramount/src/components/Counter/Counter.tsx";"undefined"!==typeof CounterProps&&CounterProps&&CounterProps===Object(CounterProps)&&Object.isExtensible(CounterProps)&&Object.defineProperty(CounterProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"CounterProps",filename:"src/components/Counter/Counter.tsx"}});var p=function(e){var t=e.count,n=void 0===t?0:t,p=e.component,d=e.max,y=e.min,f=e.onIncrement,C=e.onDecrement,_=e.getStyles,S=Object(l.b)(),j=Object(c.a)(m,_,S.components.getCounterStyles)(e,S),x=j.containerStyle,O=j.counterStyle,N=j.countStyle,P=j.decrementWrapperStyle,g=j.disabledStyle,h=j.incrementWrapperStyle,v=j.textStyle,w=y===n,T=d===n;return o.createElement(a.a,{style:x,__source:{fileName:b,lineNumber:78}},o.createElement(a.a,{style:P,__source:{fileName:b,lineNumber:79}},o.createElement(s.a,{style:Object(r.a)({},O,w&&g),disabled:w,onPress:w?void 0:C,__source:{fileName:b,lineNumber:80}},o.createElement(u.a,{name:"minus",size:"xsmall",color:w?S.colors.text.muted:S.colors.text.primary,__source:{fileName:b,lineNumber:88}}))),p||o.createElement(a.a,{style:N,__source:{fileName:b,lineNumber:100}},o.createElement(i.a,{align:"center",getStyles:function(){return{textStyle:v}},__source:{fileName:b,lineNumber:101}},"".concat(n))),o.createElement(a.a,{style:h,__source:{fileName:b,lineNumber:107}},o.createElement(s.a,{style:Object(r.a)({},O,T&&g),disabled:T,onPress:T?void 0:f,__source:{fileName:b,lineNumber:108}},o.createElement(u.a,{name:"plus",size:"xsmall",color:T?S.colors.text.muted:S.colors.text.primary,__source:{fileName:b,lineNumber:116}}))))};"undefined"!==typeof p&&p&&p===Object(p)&&Object.isExtensible(p)&&Object.defineProperty(p,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Counter",filename:"src/components/Counter/Counter.tsx"}})},"./src/components/Helpers/CounterState.tsx":function(e,t,n){"use strict";n.d(t,"a",function(){return a});var r=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),o=n("./node_modules/react/index.js"),s=n.n(o);"undefined"!==typeof CounterStateRenderProps&&CounterStateRenderProps&&CounterStateRenderProps===Object(CounterStateRenderProps)&&Object.isExtensible(CounterStateRenderProps)&&Object.defineProperty(CounterStateRenderProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"CounterStateRenderProps",filename:"src/components/Helpers/CounterState.tsx"}}),"undefined"!==typeof CounterStateProps&&CounterStateProps&&CounterStateProps===Object(CounterStateProps)&&Object.isExtensible(CounterStateProps)&&Object.defineProperty(CounterStateProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"CounterStateProps",filename:"src/components/Helpers/CounterState.tsx"}});var a=function(e){var t=e.children,n=e.initial,o=void 0===n?0:n,a=s.a.useState(o),l=Object(r.a)(a,2),c=l[0],u=l[1],i=s.a.useCallback(function(e){u(c+e)},[c]),m=s.a.useCallback(function(e){u(c-e)},[c]),b=s.a.useCallback(function(){u(c+1)},[c]),p=s.a.useCallback(function(){u(c-1)},[c]),d=s.a.useCallback(function(e){u(e)},[c]);return t({count:c,decrement:p,decrementBy:m,increment:b,incrementBy:i,set:d})};"undefined"!==typeof a&&a&&a===Object(a)&&Object.isExtensible(a)&&Object.defineProperty(a,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"CounterState",filename:"src/components/Helpers/CounterState.tsx"}})}}]);
//# sourceMappingURL=27.a52789c07fb13fb9a33f.js.map