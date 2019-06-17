(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{"./src/components/Alert/Alert.tsx":function(e,t,n){"use strict";var o=n("./node_modules/react/index.js"),s=n("./node_modules/react-native-web/dist/exports/TouchableOpacity/index.js"),r=n("./node_modules/react-native-web/dist/exports/View/index.js"),a=n("./src/theme/Theme.tsx"),i=n("./src/utils/mergeStyles.ts"),l=n("./src/components/Box/Box.tsx"),c=n("./src/components/Icon/Icon.web.tsx"),u=n("./src/components/Typography/Text.tsx"),m=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread.js");"undefined"!==typeof AlertStyles&&AlertStyles&&AlertStyles===Object(AlertStyles)&&Object.isExtensible(AlertStyles)&&Object.defineProperty(AlertStyles,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"AlertStyles",filename:"src/components/Alert/Alert.styles.ts"}}),"undefined"!==typeof AlertStyleProps&&AlertStyleProps&&AlertStyleProps===Object(AlertStyleProps)&&Object.isExtensible(AlertStyleProps)&&Object.defineProperty(AlertStyleProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"AlertStyleProps",filename:"src/components/Alert/Alert.styles.ts"}}),"undefined"!==typeof GetAlertStyles&&GetAlertStyles&&GetAlertStyles===Object(GetAlertStyles)&&Object.isExtensible(GetAlertStyles)&&Object.defineProperty(GetAlertStyles,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"GetAlertStyles",filename:"src/components/Alert/Alert.styles.ts"}});var b=function(e,t){var n=e.intent;return{bodyStyle:{flex:1},containerStyle:Object(m.a)({backgroundColor:t.colors.background.content,borderLeftColor:t.colors.border[n],borderLeftWidth:5,borderRadius:t.controlBorderRadius.medium,display:"flex",flexDirection:"row",padding:16},t.elevations[2]),textStyle:{},titleStyle:{}}};b&&b===Object(b)&&Object.isExtensible(b)&&Object.defineProperty(b,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"getAlertStyles",filename:"src/components/Alert/Alert.styles.ts"}}),n.d(t,"a",function(){return p});var d="/home/travis/build/WeTrustPlatform/paramount/src/components/Alert/Alert.tsx";"undefined"!==typeof AlertProps&&AlertProps&&AlertProps===Object(AlertProps)&&Object.isExtensible(AlertProps)&&Object.defineProperty(AlertProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"AlertProps",filename:"src/components/Alert/Alert.tsx"}});var p=function(e){var t=e.title,n=e.description,m=e.component,p=e.onClose,f=e.isCloseable,T=void 0!==f&&f,_=e.icon,y=e.intent,j=void 0===y?"info":y,x=e.getStyles,O=e.testID,v=Object(a.a)(),P=Object(i.a)(b,x,v.components.getAlertStyles)({intent:j},v),g=P.containerStyle,S=P.bodyStyle;return o.createElement(r.a,{style:g,testID:O,__source:{fileName:d,lineNumber:62}},_||o.createElement(l.a,{paddingRight:16,justifyContent:"center",__source:{fileName:d,lineNumber:64}},function(e){switch(e){case"success":return o.createElement(c.a,{name:"check-circle",size:24,color:"success",__source:{fileName:d,lineNumber:30}});case"warning":return o.createElement(c.a,{name:"alert-triangle",size:24,color:"warning",__source:{fileName:d,lineNumber:32}});case"danger":return o.createElement(c.a,{name:"alert-circle",size:24,color:"danger",__source:{fileName:d,lineNumber:34}});default:return o.createElement(c.a,{name:"info",size:24,color:"info",__source:{fileName:d,lineNumber:36}})}}(j)),m||o.createElement(r.a,{style:S,__source:{fileName:d,lineNumber:69}},o.createElement(u.a,{weight:"bold",__source:{fileName:d,lineNumber:70}},t),o.createElement(u.a,{__source:{fileName:d,lineNumber:71}},n)),T&&o.createElement(s.a,{onPress:p,__source:{fileName:d,lineNumber:75}},o.createElement(l.a,{paddingLeft:16,__source:{fileName:d,lineNumber:76}},o.createElement(c.a,{name:"x",size:24,color:v.colors.text.default,__source:{fileName:d,lineNumber:77}}))))};"undefined"!==typeof p&&p&&p===Object(p)&&Object.isExtensible(p)&&Object.defineProperty(p,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Alert",filename:"src/components/Alert/Alert.tsx"}})},"./src/components/Box/Box.tsx":function(e,t,n){"use strict";n.d(t,"a",function(){return l});var o=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),s=n("./node_modules/react/index.js"),r=n("./node_modules/react-native-web/dist/exports/View/index.js"),a=n("./src/theme/Theme.tsx");"undefined"!==typeof BoxProps&&BoxProps&&BoxProps===Object(BoxProps)&&Object.isExtensible(BoxProps)&&Object.defineProperty(BoxProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"BoxProps",filename:"src/components/Box/Box.tsx"}});var i={backgroundColor:function(e,t){return t.colors.background[e]?{backgroundColor:t.colors.background[e]}:{backgroundColor:e}},elevation:function(e,t){return t.elevations[e]},shape:function(e,t){return t.containerShapes[e]}},l=function(e){var t=e.children,n=e.style,l=e.testID,c=Object(o.a)(e,["children","style","testID"]),u=Object(a.a)(),m=[],b={};for(var d in c)if(d){var p=i[d];if(p){var f=p(c[d],u);m.push(f)}else b[d]=c[d]}return s.createElement(r.a,{testID:l,style:[b,m,n],__source:{fileName:"/home/travis/build/WeTrustPlatform/paramount/src/components/Box/Box.tsx",lineNumber:55}},t)};"undefined"!==typeof l&&l&&l===Object(l)&&Object.isExtensible(l)&&Object.defineProperty(l,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Box",filename:"src/components/Box/Box.tsx"}})},"./src/components/Icon/Icon.web.tsx":function(e,t,n){"use strict";n.d(t,"a",function(){return i});var o=n("./node_modules/react/index.js"),s=n("./node_modules/react-icons/fi/index.esm.js"),r=n("./src/theme/Theme.tsx"),a=n("./src/components/Typography/Text.styles.ts");var i=function(e){var t=e.name,n=e.color,i=e.size,l=Object(r.a)(),c=s["Fi".concat(function(e){var t=e.replace(/(\-\w)/g,function(e){return e[1].toUpperCase()});return t.charAt(0).toUpperCase()+t.slice(1)}(t))];return o.createElement(c,{color:n?Object(a.c)(l.colors.text)(n):n,size:i,__source:{fileName:"/home/travis/build/WeTrustPlatform/paramount/src/components/Icon/Icon.web.tsx",lineNumber:23}})};"undefined"!==typeof i&&i&&i===Object(i)&&Object.isExtensible(i)&&Object.defineProperty(i,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Icon",filename:"src/components/Icon/Icon.web.tsx"}})},"./src/components/Toast/Toast.mdx":function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return _});var o=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),s=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/extends.js"),r=n("./node_modules/react/index.js"),a=n.n(r),i=n("./node_modules/@mdx-js/react/dist/index.es.js"),l=n("./node_modules/docz/dist/index.esm.js"),c=n("./src/components/Box/Box.tsx"),u=n("./src/components/Button/Button.tsx"),m=n("./src/components/Toast/ToastContext.ts"),b=n("./src/components/Toast/ToastProvider.tsx"),d=n("./src/components/Toast/Toast.tsx"),p="/home/travis/build/WeTrustPlatform/paramount/src/components/Toast/Toast.mdx",f={},T="wrapper";function _(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)(T,Object(s.a)({},f,n,{components:t,mdxType:"MDXLayout",__source:{fileName:p,lineNumber:21}}),Object(i.b)("h1",Object(s.a)({id:"toast"},{__source:{fileName:p,lineNumber:24}}),"Toast"),Object(i.b)("p",{__source:{fileName:p,lineNumber:27}},"Composes ",Object(i.b)("inlineCode",{parentName:"p",__source:{fileName:p,lineNumber:27}},"Alert"),"."),Object(i.b)("h3",Object(s.a)({id:"usage"},{__source:{fileName:p,lineNumber:28}}),"Usage"),Object(i.b)(l.c,{__position:0,__code:"<ToastProvider\n  getStyles={(props, theme) => ({\n    containerStyle: {},\n  })}\n>\n  <ToastContext.Consumer>\n    {({ notify }) => (\n      <Button\n        onPress={() => {\n          notify({\n            title: 'Title',\n            description: 'Description',\n            component: null, // A React Component that overrides title and description\n            isCloseable: true,\n            offset: 16,\n            duration: 3000,\n            // ...Alert props e.g. getStyles\n          })\n        }}\n        title=\"Use\"\n      />\n    )}\n  </ToastContext.Consumer>\n</ToastProvider>",__scope:{props:this?this.props:n,Playground:l.c,Props:l.d,Box:c.a,Button:u.a,ToastContext:m.a,ToastProvider:b.a,Toast:d.a},mdxType:"Playground",__source:{fileName:p,lineNumber:31}},Object(i.b)(b.a,{getStyles:function(e,t){return{containerStyle:{}}},mdxType:"ToastProvider",__source:{fileName:p,lineNumber:41}},Object(i.b)(m.a.Consumer,{__source:{fileName:p,lineNumber:44}},function(e){var t=e.notify;return Object(i.b)(u.a,{onPress:function(){t({title:"Title",description:"Description",component:null,isCloseable:!0,offset:16,duration:3e3})},title:"Use",mdxType:"Button",__source:{fileName:p,lineNumber:47}})}))),Object(i.b)("h3",Object(s.a)({id:"variants"},{__source:{fileName:p,lineNumber:62}}),"Variants"),Object(i.b)(l.c,{__position:1,__code:"<ToastProvider>\n  <ToastContext.Consumer>\n    {({ notify }) => (\n      <>\n        <Button\n          onPress={() =>\n            notify({\n              title: 'Title',\n              description: 'Description',\n              isCloseable: true,\n            })\n          }\n          title=\"Open default toast\"\n        />\n        <Button\n          onPress={() =>\n            notify({\n              description: 'Description',\n              intent: 'success',\n              title: 'Title',\n            })\n          }\n          color=\"primary\"\n          title=\"Open success toast\"\n        />\n        <Button\n          onPress={() =>\n            notify({\n              description: 'Description',\n              intent: 'danger',\n              title: 'Title',\n            })\n          }\n          color=\"danger\"\n          title=\"Open danger toast\"\n        />\n        <Button\n          onPress={() =>\n            notify({\n              description: 'Description',\n              intent: 'warning',\n              title: 'Title',\n            })\n          }\n          color=\"secondary\"\n          title=\"Open warning toast\"\n        />\n      </>\n    )}\n  </ToastContext.Consumer>\n</ToastProvider>",__scope:{props:this?this.props:n,Playground:l.c,Props:l.d,Box:c.a,Button:u.a,ToastContext:m.a,ToastProvider:b.a,Toast:d.a},mdxType:"Playground",__source:{fileName:p,lineNumber:65}},Object(i.b)(b.a,{mdxType:"ToastProvider",__source:{fileName:p,lineNumber:75}},Object(i.b)(m.a.Consumer,{__source:{fileName:p,lineNumber:76}},function(e){var t=e.notify;return Object(i.b)(a.a.Fragment,null,Object(i.b)(u.a,{onPress:function(){return t({title:"Title",description:"Description",isCloseable:!0})},title:"Open default toast",mdxType:"Button",__source:{fileName:p,lineNumber:80}}),Object(i.b)(u.a,{onPress:function(){return t({description:"Description",intent:"success",title:"Title"})},color:"primary",title:"Open success toast",mdxType:"Button",__source:{fileName:p,lineNumber:85}}),Object(i.b)(u.a,{onPress:function(){return t({description:"Description",intent:"danger",title:"Title"})},color:"danger",title:"Open danger toast",mdxType:"Button",__source:{fileName:p,lineNumber:90}}),Object(i.b)(u.a,{onPress:function(){return t({description:"Description",intent:"warning",title:"Title"})},color:"secondary",title:"Open warning toast",mdxType:"Button",__source:{fileName:p,lineNumber:95}}))}))),Object(i.b)("h3",Object(s.a)({id:"props"},{__source:{fileName:p,lineNumber:104}}),"Props"),Object(i.b)(l.d,{of:d.a,mdxType:"Props",__source:{fileName:p,lineNumber:107}}))}_&&_===Object(_)&&Object.isExtensible(_)&&Object.defineProperty(_,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src/components/Toast/Toast.mdx"}}),_.isMDXComponent=!0},"./src/components/Toast/Toast.tsx":function(e,t,n){"use strict";n.d(t,"a",function(){return i});var o=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/extends.js"),s=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),r=n("./node_modules/react/index.js"),a=n("./src/components/Alert/Alert.tsx");"undefined"!==typeof ToastId&&ToastId&&ToastId===Object(ToastId)&&Object.isExtensible(ToastId)&&Object.defineProperty(ToastId,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ToastId",filename:"src/components/Toast/Toast.tsx"}}),"undefined"!==typeof ToastSettings&&ToastSettings&&ToastSettings===Object(ToastSettings)&&Object.isExtensible(ToastSettings)&&Object.defineProperty(ToastSettings,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ToastSettings",filename:"src/components/Toast/Toast.tsx"}}),"undefined"!==typeof ToastInstance&&ToastInstance&&ToastInstance===Object(ToastInstance)&&Object.isExtensible(ToastInstance)&&Object.defineProperty(ToastInstance,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ToastInstance",filename:"src/components/Toast/Toast.tsx"}}),"undefined"!==typeof ToastProps&&ToastProps&&ToastProps===Object(ToastProps)&&Object.isExtensible(ToastProps)&&Object.defineProperty(ToastProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ToastProps",filename:"src/components/Toast/Toast.tsx"}});var i=function(e){var t=e.component,n=(e.id,e.onRemove),i=e.duration,l=void 0===i?3e3:i,c=(e.offset,Object(s.a)(e,["component","id","onRemove","duration","offset"]));return r.useEffect(function(){var e=setTimeout(function(){return n()},l);return function(){return clearTimeout(e)}},[]),r.createElement(r.Fragment,null,t||r.createElement(a.a,Object(o.a)({},c,{onClose:n,__source:{fileName:"/home/travis/build/WeTrustPlatform/paramount/src/components/Toast/Toast.tsx",lineNumber:40}})))};"undefined"!==typeof i&&i&&i===Object(i)&&Object.isExtensible(i)&&Object.defineProperty(i,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Toast",filename:"src/components/Toast/Toast.tsx"}})},"./src/components/Toast/ToastContext.ts":function(e,t,n){"use strict";n.d(t,"a",function(){return a});var o=n("./node_modules/react/index.js");"undefined"!==typeof a&&a&&a===Object(a)&&Object.isExtensible(a)&&Object.defineProperty(a,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ToastContext",filename:"src/components/Toast/ToastContext.ts"}});var s={id:"1",onRemove:function(){return null}},r={danger:function(){return s},notify:function(){return s},removeToast:function(e){},success:function(){return s},warning:function(){return s}},a=o.createContext(r);"undefined"!==typeof a&&a&&a===Object(a)&&Object.isExtensible(a)&&Object.defineProperty(a,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ToastContext",filename:"src/components/Toast/ToastContext.ts"}});var i=function(){return o.useContext(a)};i&&i===Object(i)&&Object.isExtensible(i)&&Object.defineProperty(i,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"useToast",filename:"src/components/Toast/ToastContext.ts"}})},"./src/components/Toast/ToastProvider.tsx":function(e,t,n){"use strict";var o=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/extends.js"),s=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread.js"),r=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),a=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js"),i=n("./node_modules/react/index.js"),l=n("./node_modules/react-native-web/dist/exports/View/index.js"),c=n("./node_modules/react-spring/native.cjs.js"),u=n("./src/constants/Animation.ts"),m=n("./src/theme/Theme.tsx"),b=n("./src/utils/mergeStyles.ts"),d=n("./src/components/Toast/Toast.tsx"),p=n("./node_modules/react-native-web/dist/exports/Platform/index.js");"undefined"!==typeof ToastStyles&&ToastStyles&&ToastStyles===Object(ToastStyles)&&Object.isExtensible(ToastStyles)&&Object.defineProperty(ToastStyles,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ToastStyles",filename:"src/components/Toast/Toast.styles.ts"}}),"undefined"!==typeof GetToastStyles&&GetToastStyles&&GetToastStyles===Object(GetToastStyles)&&Object.isExtensible(GetToastStyles)&&Object.defineProperty(GetToastStyles,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"GetToastStyles",filename:"src/components/Toast/Toast.styles.ts"}});var f=function(e,t){return{containerStyle:{left:32,marginBottom:0,marginLeft:"auto",marginRight:"auto",marginTop:0,maxWidth:560,position:"web"===p.a.OS?"fixed":"absolute",right:32,top:10,zIndex:100},wrapperStyle:{position:"absolute",width:"100%"}}};f&&f===Object(f)&&Object.isExtensible(f)&&Object.defineProperty(f,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"getToastStyles",filename:"src/components/Toast/Toast.styles.ts"}});var T=n("./src/components/Toast/ToastContext.ts");n.d(t,"a",function(){return P});var _="/home/travis/build/WeTrustPlatform/paramount/src/components/Toast/ToastProvider.tsx",y=Object(c.animated)(l.a);"undefined"!==typeof ToastProviderProps&&ToastProviderProps&&ToastProviderProps===Object(ToastProviderProps)&&Object.isExtensible(ToastProviderProps)&&Object.defineProperty(ToastProviderProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ToastProviderProps",filename:"src/components/Toast/ToastProvider.tsx"}});var j,x=function(e){return!!e.id},O={toasts:[]};!function(e){e.ADD_TOAST="ADD_TOAST",e.REMOVE_TOAST="REMOVE_TOAST"}(j||(j={}));var v=function(e,t){switch(t.type){case j.ADD_TOAST:return{toasts:[].concat(Object(a.a)(e.toasts),[t.payload.toast])};case j.REMOVE_TOAST:return{toasts:e.toasts.filter(function(e){return e.id!==t.payload.id})};default:throw new Error}},P=function(e){var t=e.children,n=e.getStyles,a=i.useRef(0),p=i.useReducer(v,O),P=Object(r.a)(p,2),g=P[0],S=P[1],N=Object(m.a)(),A=Object(b.a)(f,n,N.components.getToastStyles)({intent:"info"},N),h=A.containerStyle,E=A.wrapperStyle,C=i.useCallback(function(e){var t=function(e){var t=++a.current,n=x(e)?"".concat(e.id,"-").concat(t):"".concat(t);return Object(s.a)({id:n,onRemove:function(){return S({type:j.REMOVE_TOAST,payload:{id:n}})}},e)}(e);if(x(e)){var n=!0,o=!1,r=void 0;try{for(var i,l=g.toasts[Symbol.iterator]();!(n=(i=l.next()).done);n=!0){var c=i.value;String(c.id).startsWith(String(e.id))&&S({payload:{id:c.id},type:j.REMOVE_TOAST})}}catch(u){o=!0,r=u}finally{try{n||null==l.return||l.return()}finally{if(o)throw r}}}return S({type:j.ADD_TOAST,payload:{toast:t}}),t},[]),w=Object(c.useTransition)(g.toasts,function(e){return e.id},{config:u.a,enter:{translateY:10},from:{translateY:-500},leave:{translateY:-500}});return i.createElement(T.a.Provider,{value:{danger:function(e){return C(Object(s.a)({},e,{intent:"danger"}))},notify:function(e){return C(Object(s.a)({},e))},success:function(e){return C(Object(s.a)({},e,{intent:"success"}))},warning:function(e){return C(Object(s.a)({},e,{intent:"warning"}))},removeToast:function(e){return S({type:j.REMOVE_TOAST,payload:{id:e}})}},__source:{fileName:_,lineNumber:110}},t,i.createElement(l.a,{style:h,__source:{fileName:_,lineNumber:125}},w.map(function(e){var t=e.item,n=e.props,r=e.key;return i.createElement(y,{key:r,style:Object(s.a)({},E,{transform:[{translateY:n.translateY}]}),__source:{fileName:_,lineNumber:127}},i.createElement(d.a,Object(o.a)({},t,{__source:{fileName:_,lineNumber:135}})))})))};"undefined"!==typeof P&&P&&P===Object(P)&&Object.isExtensible(P)&&Object.defineProperty(P,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ToastProvider",filename:"src/components/Toast/ToastProvider.tsx"}})},"./src/constants/Animation.ts":function(e,t,n){"use strict";n.d(t,"a",function(){return o});var o={friction:40,tension:450};"undefined"!==typeof o&&o&&o===Object(o)&&Object.isExtensible(o)&&Object.defineProperty(o,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"springDefaultConfig",filename:"src/constants/Animation.ts"}})}}]);
//# sourceMappingURL=17.9060220f93ad6f48cc11.js.map