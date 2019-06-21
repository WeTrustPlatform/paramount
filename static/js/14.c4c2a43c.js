(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"./src/components/Alert/Alert.tsx":function(e,t,n){"use strict";var o=n("./node_modules/react/index.js"),s=n("./node_modules/react-native-web/dist/exports/View/index.js"),r=n("./src/theme/Theme.tsx"),a=n("./src/utils/mergeStyles.ts"),i=n("./src/components/Box/Box.tsx"),c=n("./src/components/Icon/Icon.web.tsx"),l=n("./src/components/Typography/Text.tsx"),u=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread.js");"undefined"!==typeof AlertStyles&&AlertStyles&&AlertStyles===Object(AlertStyles)&&Object.isExtensible(AlertStyles)&&Object.defineProperty(AlertStyles,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"AlertStyles",filename:"src/components/Alert/Alert.styles.ts"}}),"undefined"!==typeof GetAlertStyles&&GetAlertStyles&&GetAlertStyles===Object(GetAlertStyles)&&Object.isExtensible(GetAlertStyles)&&Object.defineProperty(GetAlertStyles,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"GetAlertStyles",filename:"src/components/Alert/Alert.styles.ts"}});var m=function(e,t){var n=e.intent,o=void 0===n?"info":n;return{bodyStyle:{flex:1},containerStyle:Object(u.a)({backgroundColor:t.colors.background.content,borderLeftColor:t.colors.border[o],borderLeftWidth:5,borderRadius:t.controlBorderRadius.medium,display:"flex",flexDirection:"row",padding:16},t.elevations[2]),descriptionStyle:{},titleStyle:{}}};m&&m===Object(m)&&Object.isExtensible(m)&&Object.defineProperty(m,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"getAlertStyles",filename:"src/components/Alert/Alert.styles.ts"}}),n.d(t,"a",function(){return d});var b="/home/travis/build/WeTrustPlatform/paramount/src/components/Alert/Alert.tsx";"undefined"!==typeof AlertProps&&AlertProps&&AlertProps===Object(AlertProps)&&Object.isExtensible(AlertProps)&&Object.defineProperty(AlertProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"AlertProps",filename:"src/components/Alert/Alert.tsx"}});var d=function(e){var t=e.title,n=e.description,u=e.icon,d=e.intent,f=void 0===d?"info":d,p=e.getStyles,T=e.testID,_=Object(r.a)(),y=Object(a.a)(m,p,_.components.getAlertStyles)({intent:f},_),j=y.containerStyle,x=y.bodyStyle,O=y.descriptionStyle,v=y.titleStyle;return o.createElement(s.a,{style:j,testID:T,__source:{fileName:b,lineNumber:78}},null===u?null:u||o.createElement(i.a,{paddingRight:16,justifyContent:"center",__source:{fileName:b,lineNumber:82}},function(e){switch(e){case"success":return o.createElement(c.a,{name:"check-circle",size:24,color:"success",__source:{fileName:b,lineNumber:42}});case"warning":return o.createElement(c.a,{name:"alert-triangle",size:24,color:"warning",__source:{fileName:b,lineNumber:44}});case"danger":return o.createElement(c.a,{name:"alert-circle",size:24,color:"danger",__source:{fileName:b,lineNumber:46}});default:return o.createElement(c.a,{name:"info",size:24,color:"info",__source:{fileName:b,lineNumber:48}})}}(f)),o.createElement(s.a,{style:x,__source:{fileName:b,lineNumber:86}},o.createElement(l.a,{getStyles:function(){return{textStyle:v}},weight:"bold",__source:{fileName:b,lineNumber:87}},t),o.createElement(l.a,{getStyles:function(){return{textStyle:O}},__source:{fileName:b,lineNumber:90}},n)))};"undefined"!==typeof d&&d&&d===Object(d)&&Object.isExtensible(d)&&Object.defineProperty(d,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Alert",filename:"src/components/Alert/Alert.tsx"}})},"./src/components/Box/Box.tsx":function(e,t,n){"use strict";n.d(t,"a",function(){return c});var o=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),s=n("./node_modules/react/index.js"),r=n("./node_modules/react-native-web/dist/exports/View/index.js"),a=n("./src/theme/Theme.tsx");"undefined"!==typeof BoxProps&&BoxProps&&BoxProps===Object(BoxProps)&&Object.isExtensible(BoxProps)&&Object.defineProperty(BoxProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"BoxProps",filename:"src/components/Box/Box.tsx"}});var i={backgroundColor:function(e,t){return t.colors.background[e]?{backgroundColor:t.colors.background[e]}:{backgroundColor:e}},elevation:function(e,t){return t.elevations[e]},shape:function(e,t){return t.containerShapes[e]}},c=function(e){var t=e.children,n=e.testID,c=Object(o.a)(e,["children","testID"]),l=Object(a.a)(),u=[],m={};for(var b in c)if(b){var d=i[b];if(d){var f=d(c[b],l);u.push(f)}else m[b]=c[b]}return s.createElement(r.a,{testID:n,style:[m,u],__source:{fileName:"/home/travis/build/WeTrustPlatform/paramount/src/components/Box/Box.tsx",lineNumber:53}},t)};"undefined"!==typeof c&&c&&c===Object(c)&&Object.isExtensible(c)&&Object.defineProperty(c,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Box",filename:"src/components/Box/Box.tsx"}})},"./src/components/Icon/Icon.web.tsx":function(e,t,n){"use strict";n.d(t,"a",function(){return i});var o=n("./node_modules/react/index.js"),s=n("./node_modules/react-icons/fi/index.esm.js"),r=n("./src/theme/Theme.tsx"),a=n("./src/components/Typography/Text.styles.ts");var i=function(e){var t=e.name,n=e.color,i=e.size,c=Object(r.a)(),l=s["Fi".concat(function(e){var t=e.replace(/(\-\w)/g,function(e){return e[1].toUpperCase()});return t.charAt(0).toUpperCase()+t.slice(1)}(t))];return o.createElement(l,{color:n?Object(a.b)(c.colors.text)(n):n,size:i,__source:{fileName:"/home/travis/build/WeTrustPlatform/paramount/src/components/Icon/Icon.web.tsx",lineNumber:23}})};"undefined"!==typeof i&&i&&i===Object(i)&&Object.isExtensible(i)&&Object.defineProperty(i,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Icon",filename:"src/components/Icon/Icon.web.tsx"}})},"./src/components/Toast/Toast.mdx":function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return p});var o=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),s=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/extends.js"),r=(n("./node_modules/react/index.js"),n("./node_modules/@mdx-js/react/dist/index.es.js")),a=n("./node_modules/docz/dist/index.esm.js"),i=n("./src/components/Box/Box.tsx"),c=n("./src/components/Button/Button.tsx"),l=n("./src/components/Toast/ToastContext.ts"),u=n("./src/components/Toast/ToastProvider.tsx"),m=n("./src/components/Toast/Toast.tsx"),b="/home/travis/build/WeTrustPlatform/paramount/src/components/Toast/Toast.mdx",d={},f="wrapper";function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(r.b)(f,Object(s.a)({},d,n,{components:t,mdxType:"MDXLayout",__source:{fileName:b,lineNumber:21}}),Object(r.b)("h1",Object(s.a)({id:"toast"},{__source:{fileName:b,lineNumber:24}}),"Toast"),Object(r.b)("h2",Object(s.a)({id:"setup"},{__source:{fileName:b,lineNumber:27}}),"Setup"),Object(r.b)("p",{__source:{fileName:b,lineNumber:30}},"Put ",Object(r.b)("inlineCode",{parentName:"p",__source:{fileName:b,lineNumber:30}},"ToastProvider")," at the top level component to wrap components that make use of ",Object(r.b)("inlineCode",{parentName:"p",__source:{fileName:b,lineNumber:30}},"ToastContext"),"."),Object(r.b)("pre",{__source:{fileName:b,lineNumber:31}},Object(r.b)("code",Object(s.a)({parentName:"pre"},{className:"language-tsx"},{__source:{fileName:b,lineNumber:31}}),"<ToastProvider>{children}</ToastProvider>\n")),Object(r.b)("h2",Object(s.a)({id:"usage"},{__source:{fileName:b,lineNumber:35}}),"Usage"),Object(r.b)("p",{__source:{fileName:b,lineNumber:38}},"Paramount exposes a convenience hook ",Object(r.b)("inlineCode",{parentName:"p",__source:{fileName:b,lineNumber:38}},"useToast")," you can use to create toasts from anywhere in the application."),Object(r.b)(a.c,{__position:0,__code:"<ToastProvider>\n  {/*\n    We use `ToastContext.Consumer` here due to limitations in docs\n    Use `const { notify } = useToast()` inside your function component\n   */}\n  <ToastContext.Consumer>\n    {({ notify }) => (\n      <Button\n        onPress={() =>\n          notify({\n            title: 'Title',\n            description: 'Description',\n          })\n        }\n        title=\"Open toast\"\n      />\n    )}\n  </ToastContext.Consumer>\n</ToastProvider>",__scope:{props:this?this.props:n,Playground:a.c,Props:a.d,Box:i.a,Button:c.a,ToastContext:l.a,ToastProvider:u.a,Toast:m.a},mdxType:"Playground",__source:{fileName:b,lineNumber:39}},Object(r.b)(u.a,{mdxType:"ToastProvider",__source:{fileName:b,lineNumber:49}},Object(r.b)(l.a.Consumer,{__source:{fileName:b,lineNumber:56}},function(e){var t=e.notify;return Object(r.b)(c.a,{onPress:function(){return t({title:"Title",description:"Description"})},title:"Open toast",mdxType:"Button",__source:{fileName:b,lineNumber:59}})}))),Object(r.b)("h2",Object(s.a)({id:"options"},{__source:{fileName:b,lineNumber:66}}),"Options"),Object(r.b)(a.d,{of:m.a,mdxType:"Props",__source:{fileName:b,lineNumber:69}}))}p&&p===Object(p)&&Object.isExtensible(p)&&Object.defineProperty(p,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src/components/Toast/Toast.mdx"}}),p.isMDXComponent=!0},"./src/components/Toast/Toast.tsx":function(e,t,n){"use strict";n.d(t,"a",function(){return i});var o=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/extends.js"),s=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),r=n("./node_modules/react/index.js"),a=n("./src/components/Alert/Alert.tsx");"undefined"!==typeof ToastId&&ToastId&&ToastId===Object(ToastId)&&Object.isExtensible(ToastId)&&Object.defineProperty(ToastId,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ToastId",filename:"src/components/Toast/Toast.tsx"}}),"undefined"!==typeof ToastSettings&&ToastSettings&&ToastSettings===Object(ToastSettings)&&Object.isExtensible(ToastSettings)&&Object.defineProperty(ToastSettings,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ToastSettings",filename:"src/components/Toast/Toast.tsx"}}),"undefined"!==typeof ToastInstance&&ToastInstance&&ToastInstance===Object(ToastInstance)&&Object.isExtensible(ToastInstance)&&Object.defineProperty(ToastInstance,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ToastInstance",filename:"src/components/Toast/Toast.tsx"}}),"undefined"!==typeof ToastProps&&ToastProps&&ToastProps===Object(ToastProps)&&Object.isExtensible(ToastProps)&&Object.defineProperty(ToastProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ToastProps",filename:"src/components/Toast/Toast.tsx"}});var i=function(e){var t=e.component,n=(e.id,e.onRemove),i=e.duration,c=void 0===i?3e3:i,l=Object(s.a)(e,["component","id","onRemove","duration"]);return r.useEffect(function(){var e=setTimeout(function(){return n()},c);return function(){return clearTimeout(e)}},[]),r.createElement(r.Fragment,null,t||r.createElement(a.a,Object(o.a)({},l,{__source:{fileName:"/home/travis/build/WeTrustPlatform/paramount/src/components/Toast/Toast.tsx",lineNumber:48}})))};"undefined"!==typeof i&&i&&i===Object(i)&&Object.isExtensible(i)&&Object.defineProperty(i,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Toast",filename:"src/components/Toast/Toast.tsx"}})},"./src/components/Toast/ToastContext.ts":function(e,t,n){"use strict";n.d(t,"a",function(){return a});var o=n("./node_modules/react/index.js");"undefined"!==typeof a&&a&&a===Object(a)&&Object.isExtensible(a)&&Object.defineProperty(a,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ToastContext",filename:"src/components/Toast/ToastContext.ts"}});var s={id:"1",onRemove:function(){return null}},r={danger:function(){return s},notify:function(){return s},removeToast:function(e){},success:function(){return s},warning:function(){return s}},a=o.createContext(r);"undefined"!==typeof a&&a&&a===Object(a)&&Object.isExtensible(a)&&Object.defineProperty(a,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ToastContext",filename:"src/components/Toast/ToastContext.ts"}});var i=function(){return o.useContext(a)};i&&i===Object(i)&&Object.isExtensible(i)&&Object.defineProperty(i,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"useToast",filename:"src/components/Toast/ToastContext.ts"}})},"./src/components/Toast/ToastProvider.tsx":function(e,t,n){"use strict";var o=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/extends.js"),s=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread.js"),r=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),a=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js"),i=n("./node_modules/react/index.js"),c=n("./node_modules/react-native-web/dist/exports/View/index.js"),l=n("./node_modules/react-spring/native.cjs.js"),u=n("./src/constants/Animation.ts"),m=n("./src/theme/Theme.tsx"),b=n("./src/utils/mergeStyles.ts"),d=n("./src/components/Toast/Toast.tsx"),f=n("./node_modules/react-native-web/dist/exports/Platform/index.js");"undefined"!==typeof ToastStyles&&ToastStyles&&ToastStyles===Object(ToastStyles)&&Object.isExtensible(ToastStyles)&&Object.defineProperty(ToastStyles,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ToastStyles",filename:"src/components/Toast/Toast.styles.ts"}}),"undefined"!==typeof GetToastStyles&&GetToastStyles&&GetToastStyles===Object(GetToastStyles)&&Object.isExtensible(GetToastStyles)&&Object.defineProperty(GetToastStyles,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"GetToastStyles",filename:"src/components/Toast/Toast.styles.ts"}});var p=function(e,t){return{containerStyle:{left:32,marginBottom:0,marginLeft:"auto",marginRight:"auto",marginTop:0,maxWidth:560,position:"web"===f.a.OS?"fixed":"absolute",right:32,top:10,zIndex:100},wrapperStyle:{position:"absolute",width:"100%"}}};p&&p===Object(p)&&Object.isExtensible(p)&&Object.defineProperty(p,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"getToastStyles",filename:"src/components/Toast/Toast.styles.ts"}});var T=n("./src/components/Toast/ToastContext.ts");n.d(t,"a",function(){return P});var _="/home/travis/build/WeTrustPlatform/paramount/src/components/Toast/ToastProvider.tsx",y=Object(l.animated)(c.a);"undefined"!==typeof ToastProviderProps&&ToastProviderProps&&ToastProviderProps===Object(ToastProviderProps)&&Object.isExtensible(ToastProviderProps)&&Object.defineProperty(ToastProviderProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ToastProviderProps",filename:"src/components/Toast/ToastProvider.tsx"}});var j,x=function(e){return!!e.id},O={toasts:[]};!function(e){e.ADD_TOAST="ADD_TOAST",e.REMOVE_TOAST="REMOVE_TOAST"}(j||(j={}));var v=function(e,t){switch(t.type){case j.ADD_TOAST:return{toasts:[].concat(Object(a.a)(e.toasts),[t.payload.toast])};case j.REMOVE_TOAST:return{toasts:e.toasts.filter(function(e){return e.id!==t.payload.id})};default:throw new Error}},P=function(e){var t=e.children,n=e.getStyles,a=i.useRef(0),f=i.useReducer(v,O),P=Object(r.a)(f,2),g=P[0],S=P[1],N=Object(m.a)(),h=Object(b.a)(p,n,N.components.getToastStyles)({},N),A=h.containerStyle,E=h.wrapperStyle,w=i.useCallback(function(e){var t=function(e){var t=++a.current,n=x(e)?"".concat(e.id,"-").concat(t):"".concat(t);return Object(s.a)({id:n,onRemove:function(){return S({type:j.REMOVE_TOAST,payload:{id:n}})}},e)}(e);if(x(e)){var n=!0,o=!1,r=void 0;try{for(var i,c=g.toasts[Symbol.iterator]();!(n=(i=c.next()).done);n=!0){var l=i.value;String(l.id).startsWith(String(e.id))&&S({payload:{id:l.id},type:j.REMOVE_TOAST})}}catch(u){o=!0,r=u}finally{try{n||null==c.return||c.return()}finally{if(o)throw r}}}return S({type:j.ADD_TOAST,payload:{toast:t}}),t},[]),C=Object(l.useTransition)(g.toasts,function(e){return e.id},{config:u.a,enter:{translateY:10},from:{translateY:-500},leave:{translateY:-500}});return i.createElement(T.a.Provider,{value:{danger:function(e){return w(Object(s.a)({},e,{intent:"danger"}))},notify:function(e){return w(Object(s.a)({},e))},success:function(e){return w(Object(s.a)({},e,{intent:"success"}))},warning:function(e){return w(Object(s.a)({},e,{intent:"warning"}))},removeToast:function(e){return S({type:j.REMOVE_TOAST,payload:{id:e}})}},__source:{fileName:_,lineNumber:110}},t,i.createElement(c.a,{style:A,__source:{fileName:_,lineNumber:125}},C.map(function(e){var t=e.item,n=e.props,r=e.key;return i.createElement(y,{key:r,style:Object(s.a)({},E,{transform:[{translateY:n.translateY}]}),__source:{fileName:_,lineNumber:127}},i.createElement(d.a,Object(o.a)({},t,{__source:{fileName:_,lineNumber:135}})))})))};"undefined"!==typeof P&&P&&P===Object(P)&&Object.isExtensible(P)&&Object.defineProperty(P,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ToastProvider",filename:"src/components/Toast/ToastProvider.tsx"}})},"./src/constants/Animation.ts":function(e,t,n){"use strict";n.d(t,"a",function(){return o});var o={friction:40,tension:450};"undefined"!==typeof o&&o&&o===Object(o)&&Object.isExtensible(o)&&Object.defineProperty(o,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"springDefaultConfig",filename:"src/constants/Animation.ts"}})}}]);
//# sourceMappingURL=14.d72e10165698b4e44a0d.js.map