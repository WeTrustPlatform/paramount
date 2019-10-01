(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"./src/components/Box/Box.tsx":function(e,t,o){"use strict";o.d(t,"a",function(){return l});var r=o("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),n=o("./node_modules/react/index.js"),a=o("./node_modules/react-native-web/dist/exports/View/index.js"),s=o("./src/theme/Theme.tsx");"undefined"!==typeof BoxProps&&BoxProps&&BoxProps===Object(BoxProps)&&Object.isExtensible(BoxProps)&&Object.defineProperty(BoxProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"BoxProps",filename:"src/components/Box/Box.tsx"}});var i={backgroundColor:function(e,t){return t.colors.background[e]?{backgroundColor:t.colors.background[e]}:{backgroundColor:e}},elevation:function(e,t){return t.elevations[e]},shape:function(e,t){return t.containerShapes[e]}},l=function(e){var t=e.children,o=e.testID,l=Object(r.a)(e,["children","testID"]),c=Object(s.b)(),d=[],u={};for(var b in l)if(b){var m=i[b];if(m){var p=m(l[b],c);d.push(p)}else u[b]=l[b]}return n.createElement(a.a,{testID:o,style:[u,d],__source:{fileName:"/home/travis/build/WeTrustPlatform/paramount/src/components/Box/Box.tsx",lineNumber:53}},t)};"undefined"!==typeof l&&l&&l===Object(l)&&Object.isExtensible(l)&&Object.defineProperty(l,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Box",filename:"src/components/Box/Box.tsx"}})},"./src/components/Button/Button.tsx":function(e,t,o){"use strict";var r=o("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread.js"),n=o("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),a=o("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/extends.js"),s=o("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),i=o("./node_modules/dlv/dist/dlv.umd.js"),l=o.n(i),c=o("./node_modules/react/index.js"),d=o.n(c),u=o("./node_modules/react-native-web/dist/exports/TouchableOpacity/index.js"),b=o("./src/theme/Theme.tsx"),m=o("./src/utils/isControlSize.ts"),p=o("./src/utils/overrides.ts"),f=o("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/regenerator/index.js"),g=o.n(f),v=o("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js"),j=o("./node_modules/react-native-web/dist/exports/View/index.js"),y=o("./node_modules/react-spring/native.cjs.js"),O=function(e,t){return!e},_=function(){var e=d.a.useReducer(O,!0),t=Object(s.a)(e,2)[1];return d.a.useCallback(function(){t(null)},[t])};_&&_===Object(_)&&Object.isExtensible(_)&&Object.defineProperty(_,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"useForceUpdate",filename:"src/hooks/useForceUpdate.ts"}});var h="/home/travis/build/WeTrustPlatform/paramount/src/components/LoadingIndicators/Dots.tsx",x=Object(y.animated)(j.a);"undefined"!==typeof DotsProps&&DotsProps&&DotsProps===Object(DotsProps)&&Object.isExtensible(DotsProps)&&Object.defineProperty(DotsProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"DotsProps",filename:"src/components/LoadingIndicators/Dots.tsx"}});var P=function(e){var t=Object(b.b)(),o=e.size,r=void 0===o?10:o,n=e.color,a=void 0===n?t.colors.text.primary:n,s=_(),i=Object(y.useTrail)(3,{config:{duration:800},from:{opacity:0},onRest:s,reset:!0,to:function(){var e=Object(v.a)(g.a.mark(function e(t){return g.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t({opacity:1});case 2:return e.next=4,t({opacity:0});case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()});return c.createElement(j.a,{style:{alignItems:"center",flexDirection:"row",justifyContent:"center"},__source:{fileName:h,lineNumber:34}},i.map(function(e,t){return c.createElement(x,{key:t,style:{backgroundColor:a,borderRadius:999,height:r,marginLeft:3,marginRight:3,opacity:e.opacity,width:r},__source:{fileName:h,lineNumber:42}})}))};P&&P===Object(P)&&Object.isExtensible(P)&&Object.defineProperty(P,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Dots",filename:"src/components/LoadingIndicators/Dots.tsx"}});var E=o("./src/components/Typography/Text.tsx");o.d(t,"a",function(){return k});var B="/home/travis/build/WeTrustPlatform/paramount/src/components/Button/Button.tsx";"undefined"!==typeof ButtonOverrides&&ButtonOverrides&&ButtonOverrides===Object(ButtonOverrides)&&Object.isExtensible(ButtonOverrides)&&Object.defineProperty(ButtonOverrides,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ButtonOverrides",filename:"src/components/Button/Button.tsx"}}),"undefined"!==typeof ButtonProps&&ButtonProps&&ButtonProps===Object(ButtonProps)&&Object.isExtensible(ButtonProps)&&Object.defineProperty(ButtonProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ButtonProps",filename:"src/components/Button/Button.tsx"}});var D="primary",T="default",N=!1,w=!1,C="medium",k=function(e){var t=e.appearance,o=void 0===t?D:t,r=e.color,n=void 0===r?T:r,i=e.isDisabled,d=void 0===i?N:i,u=e.isLoading,m=void 0===u?w:u,f=e.size,g=void 0===f?C:f,v=e.onPress,j=void 0===v?function(){}:v,y=e.title,O=e.testID,_=e.overrides,h=void 0===_?{}:_,x=Object(b.b)(),P=Object(p.a)(H,e,l()(x,"overrides.Button.Touchable"),h.Touchable),E=Object(s.a)(P,2),k=E[0],R=E[1],I=Object(p.a)(L,e,l()(x,"overrides.Button.Title"),h.Title),W=Object(s.a)(I,2),M=W[0],A=W[1],F=Object(p.a)(S,e,l()(x,"overrides.Button.Loading"),h.Loading),q=Object(s.a)(F,2),V=q[0],U=q[1],J=Object(p.a)(z,e,l()(x,"overrides.Button.IconBefore"),h.IconBefore),K=Object(s.a)(J,2),G=K[0],Y=K[1],Q=Object(p.a)(z,e,l()(x,"overrides.Button.IconAfter"),h.IconAfter),X=Object(s.a)(Q,2),Z=X[0],$=X[1];return c.createElement(k,Object(a.a)({appearance:o,color:n,isDisabled:d,isLoading:m,size:g,onPress:j,testID:O},R,{__source:{fileName:B,lineNumber:125}}),c.createElement(G,Object(a.a)({appearance:o,color:n,isDisabled:d,isLoading:m,size:g},Y,{__source:{fileName:B,lineNumber:135}})),m?c.createElement(V,Object(a.a)({appearance:o,color:n},U,{__source:{fileName:B,lineNumber:144}})):c.createElement(M,Object(a.a)({appearance:o,color:n,isDisabled:d,size:g,title:y},A,{__source:{fileName:B,lineNumber:146}})),c.createElement(Z,Object(a.a)({appearance:o,color:n,isDisabled:d,isLoading:m,size:g},$,{__source:{fileName:B,lineNumber:155}})))};"undefined"!==typeof k&&k&&k===Object(k)&&Object.isExtensible(k)&&Object.defineProperty(k,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Button",filename:"src/components/Button/Button.tsx"}});var H=function(e){var t=e.appearance,o=void 0===t?D:t,s=e.color,i=void 0===s?T:s,l=e.isDisabled,d=void 0===l?N:l,p=e.isLoading,f=void 0===p?w:p,g=e.size,v=void 0===g?C:g,j=e.children,y=e.style,O=Object(n.a)(e,["appearance","color","isDisabled","isLoading","size","children","style"]),_=Object(b.b)(),h=function(e,t){return{minimal:{default:{backgroundColor:e.colors.background.content},danger:{backgroundColor:e.colors.background.content},primary:{backgroundColor:e.colors.background.content},secondary:{backgroundColor:e.colors.background.content}},primary:{default:{backgroundColor:t?e.colors.background.overlay:e.colors.button.default},danger:{backgroundColor:t?e.colors.background.dangerLight:e.colors.button.danger},primary:{backgroundColor:t?e.colors.background.primaryLight:e.colors.button.primary},secondary:{backgroundColor:t?e.colors.background.secondaryLight:e.colors.button.secondary}},outline:{default:{backgroundColor:e.colors.background.content,borderColor:e.colors.text.default,borderWidth:3},danger:{backgroundColor:e.colors.background.content,borderColor:e.colors.border.danger,borderWidth:3},primary:{backgroundColor:e.colors.background.content,borderColor:e.colors.border.primary,borderWidth:3},secondary:{backgroundColor:e.colors.background.content,borderColor:e.colors.border.secondary,borderWidth:3}}}}(_,f),x=Object(m.a)(v)?{borderRadius:_.controlBorderRadius[v],height:_.controlHeights[v],paddingLeft:_.controlPaddings[v]+8,paddingRight:_.controlPaddings[v]+8}:{borderRadius:_.controlBorderRadius.medium,height:v,paddingLeft:_.controlPaddings.medium+8,paddingRight:_.controlPaddings.medium+8},P=x.borderRadius,E=x.height,k=x.paddingLeft,H=x.paddingRight;return c.createElement(u.a,Object(a.a)({accessibilityRole:"button",disabled:!(!d&&!f),style:[Object(r.a)({borderRadius:P,height:E,paddingLeft:k,paddingRight:H,flexDirection:"row",alignItems:"center",justifyContent:"center"},h[o][i],d&&{backgroundColor:_.colors.button.disabled}),y]},O,{__source:{fileName:B,lineNumber:285}}),j)},R=function(e){return{minimal:{default:e.colors.text.default,danger:e.colors.text.danger,primary:e.colors.text.primary,secondary:e.colors.text.secondary},primary:{default:e.colors.button.defaultText,danger:e.colors.button.dangerText,primary:e.colors.button.primaryText,secondary:e.colors.button.secondaryText},outline:{default:e.colors.text.default,danger:e.colors.text.danger,primary:e.colors.text.primary,secondary:e.colors.text.secondary}}},L=function(e){var t=e.appearance,o=void 0===t?D:t,s=e.color,i=void 0===s?T:s,l=e.isDisabled,d=void 0===l?N:l,u=e.size,p=void 0===u?C:u,f=e.title,g=e.style,v=Object(n.a)(e,["appearance","color","isDisabled","size","title","style"]),j=Object(b.b)(),y=Object(m.a)(p)?j.textSizes[p]:j.textSizes.medium;return f?c.createElement(E.a,Object(a.a)({weight:"bold",style:[Object(r.a)({alignItems:"center",color:d?j.colors.text.muted:R(j)[o][i],display:"flex",fontWeight:"600",justifyContent:"center",textAlign:"center",paddingHorizontal:8},y),g]},v,{__source:{fileName:B,lineNumber:368}}),f):null},S=function(e){var t=e.appearance,o=void 0===t?D:t,r=e.color,n=void 0===r?T:r,a=Object(b.b)();return c.createElement(P,{color:R(a)[o][n],__source:{fileName:B,lineNumber:404}})},z=function(e){return c.createElement(c.Fragment,null)}},"./src/components/Dialog/Dialog.tsx":function(e,t,o){"use strict";o.d(t,"a",function(){return y});var r=o("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),n=o("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/extends.js"),a=o("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),s=o("./node_modules/dlv/dist/dlv.umd.js"),i=o.n(s),l=o("./node_modules/react/index.js"),c=o("./node_modules/react-native-web/dist/exports/ScrollView/index.js"),d=o("./node_modules/react-native-web/dist/exports/View/index.js"),u=o("./src/theme/Theme.tsx"),b=o("./src/utils/overrides.ts"),m=o("./src/components/Modal/HistoryModal.web.tsx"),p=o("./src/components/Overlay/Overlay.tsx"),f="/home/travis/build/WeTrustPlatform/paramount/src/components/Dialog/Dialog.tsx";"undefined"!==typeof DialogOverrides&&DialogOverrides&&DialogOverrides===Object(DialogOverrides)&&Object.isExtensible(DialogOverrides)&&Object.defineProperty(DialogOverrides,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"DialogOverrides",filename:"src/components/Dialog/Dialog.tsx"}}),"undefined"!==typeof DialogProps&&DialogProps&&DialogProps===Object(DialogProps)&&Object.isExtensible(DialogProps)&&Object.defineProperty(DialogProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"DialogProps",filename:"src/components/Dialog/Dialog.tsx"}});var g=!0,v=!1,j=!1,y=function(e){var t=e.children,o=e.shouldLockBodyScroll,r=void 0===o?g:o,s=e.isVisible,c=void 0===s?v:s,d=e.onRequestClose,y=void 0===d?function(){return null}:d,E=e.useHistory,B=void 0===E?j:E,D=e.overrides,T=void 0===D?{}:D,N=Object(u.b)(),w=Object(b.a)(O,e,i()(N,"overrides.Dialog.Root"),T.Root),C=Object(a.a)(w,2),k=C[0],H=C[1],R=Object(b.a)(_,e,i()(N,"overrides.Dialog.Content"),T.Content),L=Object(a.a)(R,2),S=L[0],z=L[1],I=Object(b.a)(P,e,i()(N,"overrides.Dialog.Body"),T.Body),W=Object(a.a)(I,2),M=W[0],A=W[1],F=Object(b.a)(p.a,e,i()(N,"overrides.Dialog.Overlay"),T.Overlay),q=Object(a.a)(F,2),V=q[0],U=q[1],J=Object(b.a)(x,e,i()(N,"overrides.Dialog.Header"),T.Header),K=Object(a.a)(J,2),G=K[0],Y=K[1],Q=Object(b.a)(h,e,i()(N,"overrides.Dialog.Footer"),T.Footer),X=Object(a.a)(Q,2),Z=X[0],$=X[1];return l.createElement(m.a,{useHistory:B,visible:c,transparent:!0,animationType:"fade",onRequestClose:y,shouldLockBodyScroll:r,__source:{fileName:f,lineNumber:103}},l.createElement(k,Object(n.a)({},H,{__source:{fileName:f,lineNumber:111}}),l.createElement(S,Object(n.a)({},z,{__source:{fileName:f,lineNumber:112}}),l.createElement(G,Object(n.a)({onRequestClose:y},Y,{__source:{fileName:f,lineNumber:113}})),l.createElement(M,Object(n.a)({},A,{__source:{fileName:f,lineNumber:114}}),t),l.createElement(Z,Object(n.a)({onRequestClose:y},$,{__source:{fileName:f,lineNumber:115}}))),l.createElement(V,Object(n.a)({onPress:y},U,{__source:{fileName:f,lineNumber:117}}))))};"undefined"!==typeof y&&y&&y===Object(y)&&Object.isExtensible(y)&&Object.defineProperty(y,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Dialog",filename:"src/components/Dialog/Dialog.tsx"}});var O=function(e){var t=e.children,o=e.style,a=Object(r.a)(e,["children","style"]);return l.createElement(d.a,Object(n.a)({style:[{alignItems:"center",display:"flex",height:"100%",justifyContent:"center",width:"100%"},o]},a,{__source:{fileName:f,lineNumber:133}}),t)},_=function(e){var t=e.children,o=e.style,a=Object(r.a)(e,["children","style"]),s=Object(u.b)();return l.createElement(d.a,Object(n.a)({style:[{backgroundColor:"white",borderRadius:s.controlBorderRadius.medium,elevation:1,maxHeight:"80%",maxWidth:600,minWidth:280,position:"relative",zIndex:1},o]},a,{__source:{fileName:f,lineNumber:158}}),t)},h=function(e){return l.createElement(l.Fragment,null)},x=function(e){return l.createElement(l.Fragment,null)},P=function(e){var t=e.children,o=e.style,a=Object(r.a)(e,["children","style"]);return l.createElement(c.a,Object(n.a)({style:[{maxHeight:400},o]},a,{__source:{fileName:f,lineNumber:206}}),t)}},"./src/components/Helpers/Toggle.tsx":function(e,t,o){"use strict";o.d(t,"a",function(){return s});var r=o("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),n=o("./node_modules/react/index.js"),a=o.n(n);"undefined"!==typeof ToggleRenderProps&&ToggleRenderProps&&ToggleRenderProps===Object(ToggleRenderProps)&&Object.isExtensible(ToggleRenderProps)&&Object.defineProperty(ToggleRenderProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ToggleRenderProps",filename:"src/components/Helpers/Toggle.tsx"}}),"undefined"!==typeof ToggleProps&&ToggleProps&&ToggleProps===Object(ToggleProps)&&Object.isExtensible(ToggleProps)&&Object.defineProperty(ToggleProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ToggleProps",filename:"src/components/Helpers/Toggle.tsx"}});var s=function(e){var t=e.children,o=e.initial,n=void 0!==o&&o,s=a.a.useState(n),i=Object(r.a)(s,2),l=i[0],c=i[1],d=a.a.useCallback(function(){c(!l)},[l]),u=a.a.useCallback(function(e){c(e)},[]);return t({on:l,toggle:d,set:u})};"undefined"!==typeof s&&s&&s===Object(s)&&Object.isExtensible(s)&&Object.defineProperty(s,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Toggle",filename:"src/components/Helpers/Toggle.tsx"}})},"./src/components/Modal/HistoryModal.web.tsx":function(e,t,o){"use strict";var r=o("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),n=o("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/extends.js"),a=o("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/defineProperty.js"),s=o("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread.js"),i=o("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js"),l=o("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js"),c=o("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js"),d=o("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js"),u=o("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js"),b=o("./node_modules/react/index.js"),m=o("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),p=o("./node_modules/focus-trap/index.js"),f=o.n(p),g=o("./node_modules/react-dom/index.js"),v=o("./node_modules/react-spring/web.cjs.js"),j=o("./src/constants/Animation.ts"),y=o("./node_modules/exenv/index.js"),O=function(e){var t=b.useRef(null);b.useEffect(function(){var o,r=function(e){var t=document.createElement("div");return e&&t.setAttribute("id",e),t}(e);return o=r,document.body.lastElementChild&&document.body.insertBefore(o,document.body.lastElementChild.nextElementSibling),t.current&&r.appendChild(t.current),function(){t.current&&t.current.remove(),-1===r.childNodes.length&&r.remove()}},[]);return!t.current&&y.canUseDOM&&(t.current=document.createElement("div")),t.current};O&&O===Object(O)&&Object.isExtensible(O)&&Object.defineProperty(O,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"useElement",filename:"src/hooks/useElement.ts"}});var _=function(e){var t=e.isLocked;b.useEffect(function(){var e=window.getComputedStyle(document.body).overflow,o=function(){document.body.style.overflow=e};return t?document.body.style.overflow="hidden":o(),function(){return o()}},[t])};_&&_===Object(_)&&Object.isExtensible(_)&&Object.defineProperty(_,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"useLockBodyScroll",filename:"src/hooks/useLockBodyScroll.ts"}});var h=function(e){var t=e.children,o=e.transparent,r=e.visible,n=e.shouldLockBodyScroll,a=void 0===n||n,s=e.onRequestClose,i=e.animationType,l=void 0===i?"none":i,c=!1,d=O();if(!d)return null;var u=b.useState(r),p=Object(m.a)(u,2),y=p[0],h=p[1],x=b.useRef(null),P=b.useRef(null);_({isLocked:!(!a||!r)}),b.useEffect(function(){var e=function(){P.current&&(P.current.deactivate(),P.current=null)};return r?(x.current&&!P.current&&(P.current=f()(x.current,{initialFocus:x.current,onDeactivate:function(){s&&r&&!c&&s()}}),P.current.activate()),h(!0)):e(),function(){c=!0,e()}},[r]);var E=Object(v.useSpring)({onRest:function(){return!r&&y&&h(!1)},config:j.a,opacity:"fade"===l?r?1:0:1,y:"slide"===l?r?0:100:0}),B=E.opacity,D=E.y;return g.createPortal(b.createElement(v.animated.div,{tabIndex:-1,ref:x,style:{backgroundColor:o?"transparent":"white",bottom:0,display:y?"flex":"none",flexDirection:"column",left:0,opacity:B,position:a?"fixed":"absolute",right:0,top:0,transform:D.interpolate(function(e){return"translateY(".concat(e,"%)")}),zIndex:1e3},__source:{fileName:"/home/travis/build/WeTrustPlatform/paramount/src/components/Modal/ModalBase.web.tsx",lineNumber:83}},r?t:null),d)};h&&h===Object(h)&&Object.isExtensible(h)&&Object.defineProperty(h,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ModalBase",filename:"src/components/Modal/ModalBase.web.tsx"}}),o.d(t,"a",function(){return B});var x="/home/travis/build/WeTrustPlatform/paramount/src/components/Modal/HistoryModal.web.tsx",P=0,E=function(e){function t(){var e,o;Object(i.a)(this,t);for(var r=arguments.length,n=new Array(r),l=0;l<r;l++)n[l]=arguments[l];return(o=Object(c.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(n)))).modalId=++P,o.componentDidUpdate=function(e){var t=o.props.visible;e.visible!==t&&(t?o.updateBrowserHistory():o.handleManuallyClosed())},o.componentWillUnmount=function(){o.clearBrowserState()},o.updateBrowserHistory=function(){history.state&&history.state.modal&&history.state.modal[o.modalId]||history.pushState(Object(s.a)({},history.state,{modal:Object(s.a)({},history.state&&history.state.modal,Object(a.a)({},o.modalId,!0))}),""),window.addEventListener("popstate",o.handlePopstate,!1)},o.handlePopstate=function(e){var t=o.props,r=t.visible,n=t.onRequestClose;e.state&&e.state.modal&&e.state.modal[o.modalId]||!n||(o.clearBrowserState(),n()),!r&&e.state&&e.state.modal&&e.state.modal[o.modalId]&&history.go(-1)},o.handleEscapeKey=function(){var e=o.props.onRequestClose;(history.state||history.state.modal||history.state.modal[o.modalId])&&e&&(o.clearBrowserState(),e(),history.go(-1))},o.handleManuallyClosed=function(){history.state&&history.state.modal&&history.state.modal[o.modalId]&&(o.clearBrowserState(),history.go(-1))},o.clearBrowserState=function(){history.replaceState(Object(s.a)({},history.state,{modal:Object(s.a)({},history.state&&history.state.modal,Object(a.a)({},o.modalId,!1))}),""),window.removeEventListener("popstate",o.handlePopstate,!1)},o}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=Object(n.a)({},this.props);return b.createElement(h,Object(n.a)({},e,{onRequestClose:this.handleEscapeKey,__source:{fileName:x,lineNumber:132}}))}}]),t}(b.Component),B=function(e){var t=e.useHistory,o=void 0!==t&&t,a=Object(r.a)(e,["useHistory"]);return o?b.createElement(E,Object(n.a)({},a,{__source:{fileName:x,lineNumber:140}})):b.createElement(h,Object(n.a)({},a,{__source:{fileName:x,lineNumber:142}}))};"undefined"!==typeof B&&B&&B===Object(B)&&Object.isExtensible(B)&&Object.defineProperty(B,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"HistoryModal",filename:"src/components/Modal/HistoryModal.web.tsx"}})},"./src/components/Overlay/Overlay.tsx":function(e,t,o){"use strict";o.d(t,"a",function(){return p});var r=o("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),n=o("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/extends.js"),a=o("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),s=o("./node_modules/dlv/dist/dlv.umd.js"),i=o.n(s),l=o("./node_modules/react/index.js"),c=o("./node_modules/react-native-web/dist/exports/TouchableWithoutFeedback/index.js"),d=o("./node_modules/react-native-web/dist/exports/View/index.js"),u=o("./src/theme/Theme.tsx"),b=o("./src/utils/overrides.ts"),m="/home/travis/build/WeTrustPlatform/paramount/src/components/Overlay/Overlay.tsx";"undefined"!==typeof OverlayProps&&OverlayProps&&OverlayProps===Object(OverlayProps)&&Object.isExtensible(OverlayProps)&&Object.defineProperty(OverlayProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"OverlayProps",filename:"src/components/Overlay/Overlay.tsx"}}),"undefined"!==typeof OverlayOverride&&OverlayOverride&&OverlayOverride===Object(OverlayOverride)&&Object.isExtensible(OverlayOverride)&&Object.defineProperty(OverlayOverride,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"OverlayOverride",filename:"src/components/Overlay/Overlay.tsx"}});var p=function(e){var t=e.onPress,o=void 0===t?function(){}:t,r=e.override,s=Object(u.b)(),c=Object(b.a)(f,e,i()(s,"overrides.Overlay"),r),d=Object(a.a)(c,2),p=d[0],g=d[1];return l.createElement(p,Object(n.a)({onPress:o},g,{__source:{fileName:m,lineNumber:31}}))};"undefined"!==typeof p&&p&&p===Object(p)&&Object.isExtensible(p)&&Object.defineProperty(p,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Overlay",filename:"src/components/Overlay/Overlay.tsx"}});var f=function(e){var t=e.style,o=e.onPress,a=Object(r.a)(e,["style","onPress"]),s=Object(u.b)();return l.createElement(c.a,{onPress:function(e){e.preventDefault(),o()},__source:{fileName:m,lineNumber:43}},l.createElement(d.a,Object(n.a)({style:[{backgroundColor:s.colors.background.overlay,bottom:0,height:"100%",left:0,position:"absolute",right:0,top:0,width:"100%"},t]},a,{__source:{fileName:m,lineNumber:49}})))}},"./src/components/Typography/Heading.tsx":function(e,t,o){"use strict";o.d(t,"a",function(){return g});var r=o("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread.js"),n=o("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/extends.js"),a=o("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),s=o("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),i=o("./node_modules/dlv/dist/dlv.umd.js"),l=o.n(i),c=o("./node_modules/react/index.js"),d=o("./node_modules/react-native-web/dist/exports/Platform/index.js"),u=o("./node_modules/react-native-web/dist/exports/Text/index.js"),b=o("./src/theme/Theme.tsx"),m=o("./src/utils/overrides.ts"),p=o("./src/components/Typography/Text.tsx"),f="/home/travis/build/WeTrustPlatform/paramount/src/components/Typography/Heading.tsx";"undefined"!==typeof HeadingProps&&HeadingProps&&HeadingProps===Object(HeadingProps)&&Object.isExtensible(HeadingProps)&&Object.defineProperty(HeadingProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"HeadingProps",filename:"src/components/Typography/Heading.tsx"}}),"undefined"!==typeof HeadingOverride&&HeadingOverride&&HeadingOverride===Object(HeadingOverride)&&Object.isExtensible(HeadingOverride)&&Object.defineProperty(HeadingOverride,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"HeadingOverride",filename:"src/components/Typography/Heading.tsx"}});var g=function(e){var t=e.accessibilityLevel,o=e.size,r=e.align,i=e.color,u=e.weight,p=e.override,g=Object(s.a)(e,["accessibilityLevel","size","align","color","weight","override"]),v=Object(b.b)(),y=Object(m.a)(j,e,l()(v,"overrides.Heading"),p),O=Object(a.a)(y,2),_=O[0],h=O[1];return c.createElement(_,Object(n.a)({accessibilityRole:"web"===d.a.OS?"heading":"none","aria-level":t,accessibilityLevel:t,size:o,align:r,color:i,weight:u},g,h,{__source:{fileName:f,lineNumber:82}}))};"undefined"!==typeof g&&g&&g===Object(g)&&Object.isExtensible(g)&&Object.defineProperty(g,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Heading",filename:"src/components/Typography/Heading.tsx"}});var v=function(e){return function(t){return e[t]||{fontSize:t}}};v&&v===Object(v)&&Object.isExtensible(v)&&Object.defineProperty(v,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"getHeadingSize",filename:"src/components/Typography/Heading.tsx"}});var j=function(e){var t=e.children,o=(e.accessibilityLevel,e.size),a=void 0===o?"medium":o,i=e.align,l=void 0===i?"left":i,d=e.color,m=void 0===d?"default":d,g=e.weight,j=e.style,y=Object(s.a)(e,["children","accessibilityLevel","size","align","color","weight","style"]),O=Object(b.b)(),_=v(O.headingSizes)(a);return c.createElement(u.a,Object(n.a)({style:[Object(r.a)({},_,{color:Object(p.c)(O.colors.text)(m),fontFamily:O.fontFamilies.heading,fontWeight:Object(p.b)(O.fontWeights)(g)||_.fontWeight,textAlign:l}),j]},y,{__source:{fileName:f,lineNumber:130}}),t)}},"./src/utils/isControlSize.ts":function(e,t,o){"use strict";o.d(t,"a",function(){return r});var r=function(e){return"number"!==typeof e};"undefined"!==typeof r&&r&&r===Object(r)&&Object.isExtensible(r)&&Object.defineProperty(r,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"isControlSize",filename:"src/utils/isControlSize.ts"}})}}]);
//# sourceMappingURL=2.b00e7a1f0342f715624d.js.map