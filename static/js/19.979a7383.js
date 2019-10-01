(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{"./src/components/Avatar/Avatar.tsx":function(e,t,r){"use strict";r.d(t,"a",function(){return _});var s=r("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),i=r("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/extends.js"),o=r("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),a=r("./node_modules/dlv/dist/dlv.umd.js"),n=r.n(a),l=r("./node_modules/react/index.js"),c=r("./node_modules/react-native-web/dist/exports/Image/index.js"),m=r("./node_modules/react-native-web/dist/exports/View/index.js"),u=r("./src/theme/Theme.tsx"),b=r("./src/utils/isControlSize.ts"),d=r("./src/utils/overrides.ts"),p=r("./src/components/Typography/Text.tsx"),v="/home/travis/build/WeTrustPlatform/paramount/src/components/Avatar/Avatar.tsx";"undefined"!==typeof AvatarOverrides&&AvatarOverrides&&AvatarOverrides===Object(AvatarOverrides)&&Object.isExtensible(AvatarOverrides)&&Object.defineProperty(AvatarOverrides,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"AvatarOverrides",filename:"src/components/Avatar/Avatar.tsx"}}),"undefined"!==typeof AvatarProps&&AvatarProps&&AvatarProps===Object(AvatarProps)&&Object.isExtensible(AvatarProps)&&Object.defineProperty(AvatarProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"AvatarProps",filename:"src/components/Avatar/Avatar.tsx"}});var f="",j="medium",O=!1,_=function(e){var t=e.source,r=e.name,s=void 0===r?f:r,a=e.size,c=void 0===a?j:a,m=e.isSolid,b=void 0===m?O:m,p=e.color,_=e.testID,x=e.overrides,y=void 0===x?{}:x,A=Object(u.b)(),g=l.useState(!1),L=Object(o.a)(g,2),P=L[0],E=L[1],C=!t||P,T=Object(d.a)(h,e,n()(A,"overrides.Avatar.Root"),y.Root),D=Object(o.a)(T,2),w=D[0],S=D[1],z=Object(d.a)(I,e,n()(A,"overrides.Avatar.Initial"),y.Initials),k=Object(o.a)(z,2),W=k[0],R=k[1],M=Object(d.a)(N,e,n()(A,"overrides.Avatar.Image"),y.Image),H=Object(o.a)(M,2),X=H[0],F=H[1];return l.createElement(w,Object(i.a)({name:s,size:c,isSolid:b,color:p,testID:_},S,{__source:{fileName:v,lineNumber:99}}),C&&l.createElement(W,Object(i.a)({name:s,size:c,isSolid:b,color:p},R,{__source:{fileName:v,lineNumber:108}})),!C&&!!t&&l.createElement(X,Object(i.a)({onError:function(){return E(!0)},source:t},F,{__source:{fileName:v,lineNumber:117}})))};"undefined"!==typeof _&&_&&_===Object(_)&&Object.isExtensible(_)&&Object.defineProperty(_,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Avatar",filename:"src/components/Avatar/Avatar.tsx"}});var x=function(e){var t=String(e),r=0;if(0===t.trim().length)return r;for(var s=0;s<t.length;s++)r=(r<<5)-r+t.charCodeAt(s),r&=r;return Math.abs(r)};x&&x===Object(x)&&Object.isExtensible(x)&&Object.defineProperty(x,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"hashCode",filename:"src/components/Avatar/Avatar.tsx"}}),"undefined"!==typeof AvatarColor&&AvatarColor&&AvatarColor===Object(AvatarColor)&&Object.isExtensible(AvatarColor)&&Object.defineProperty(AvatarColor,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"AvatarColor",filename:"src/components/Avatar/Avatar.tsx"}});var y={large:2,medium:1.5,small:1},h=function(e){var t=e.testID,r=e.children,s=e.name,i=void 0===s?f:s,o=e.size,a=void 0===o?j:o,n=e.isSolid,c=void 0===n?O:n,d=e.color,p=e.style,_=Object(u.b)(),h=_.fills[c?"solid":"subtle"],I=Object.keys(h),N=Object(b.a)(a)?_.controlHeights[a]*y[a]:a;return l.createElement(m.a,{style:[{alignItems:"center",backgroundColor:h[d||I[x(i)%I.length]].backgroundColor,borderRadius:9999,display:"flex",height:N,justifyContent:"center",overflow:"hidden",position:"relative",width:N},p],testID:t,__source:{fileName:v,lineNumber:181}},r)},I=function(e){var t=e.name,r=void 0===t?f:t,o=e.size,a=void 0===o?j:o,n=e.isSolid,c=void 0===n?O:n,m=e.color,d=e.style,_=Object(s.a)(e,["name","size","isSolid","color","style"]),h=Object(u.b)(),I=h.fills[c?"solid":"subtle"],N=Object.keys(I),A=Object(b.a)(a)?h.controlHeights[a]*y[a]:a,g=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"?";return e?e.replace(/\s+/," ").split(" ").slice(0,2).map(function(e){return e&&e[0].toUpperCase()}).join(""):t}(r);return l.createElement(p.a,Object(i.a)({},_,{override:{style:[{color:I[m||N[x(r)%N.length]].color,fontSize:A/2,lineHeight:A},d]},__source:{fileName:v,lineNumber:245}}),g)},N=function(e){var t=e.style,r=Object(s.a)(e,["style"]);return l.createElement(c.a,Object(i.a)({style:[{height:"100%",width:"100%"},t]},r,{__source:{fileName:v,lineNumber:271}}))}},"./src/components/ListItem/ListItem.mdx":function(e,t,r){"use strict";r.r(t),r.d(t,"default",function(){return d});var s=r("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),i=r("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/extends.js"),o=(r("./node_modules/react/index.js"),r("./node_modules/@mdx-js/react/dist/index.es.js")),a=r("./node_modules/docz/dist/index.esm.js"),n=r("./src/components/Avatar/Avatar.tsx"),l=r("./src/components/Icon/Icon.web.tsx"),c=r("./src/components/ListItem/ListItem.tsx"),m="/home/travis/build/WeTrustPlatform/paramount/src/components/ListItem/ListItem.mdx",u={},b="wrapper";function d(e){var t=e.components,r=Object(s.a)(e,["components"]);return Object(o.b)(b,Object(i.a)({},u,r,{components:t,mdxType:"MDXLayout",__source:{fileName:m,lineNumber:21}}),Object(o.b)("h1",Object(i.a)({id:"listitem"},{__source:{fileName:m,lineNumber:24}}),"ListItem"),Object(o.b)("p",{__source:{fileName:m,lineNumber:27}},"For image, it composes ",Object(o.b)("inlineCode",{parentName:"p",__source:{fileName:m,lineNumber:27}},"Avatar"),", you can pass ",Object(o.b)("inlineCode",{parentName:"p",__source:{fileName:m,lineNumber:27}},"avatarProps")," provide more specific customizations"),Object(o.b)("h2",Object(i.a)({id:"usage"},{__source:{fileName:m,lineNumber:28}}),"Usage"),Object(o.b)(a.c,{__position:0,__code:"<ListItem\n  onPress={() => console.log('Press')}\n  source={{ uri: 'https://picsum.photos/200/200' }}\n  title=\"Some label\"\n  description=\"Some description\"\n/>",__scope:{props:this?this.props:r,Playground:a.c,Props:a.d,Avatar:n.a,Icon:l.a,ListItem:c.a},mdxType:"Playground",__source:{fileName:m,lineNumber:31}},Object(o.b)(c.a,{onPress:function(){return console.log("Press")},source:{uri:"https://picsum.photos/200/200"},title:"Some label",description:"Some description",mdxType:"ListItem",__source:{fileName:m,lineNumber:39}})),Object(o.b)("h2",Object(i.a)({id:"props"},{__source:{fileName:m,lineNumber:43}}),"Props"),Object(o.b)(a.d,{of:c.a,mdxType:"Props",__source:{fileName:m,lineNumber:46}}))}d&&d===Object(d)&&Object.isExtensible(d)&&Object.defineProperty(d,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src/components/ListItem/ListItem.mdx"}}),d.isMDXComponent=!0},"./src/components/ListItem/ListItem.tsx":function(e,t,r){"use strict";r.d(t,"a",function(){return j});var s=r("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),i=r("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/extends.js"),o=r("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),a=r("./node_modules/dlv/dist/dlv.umd.js"),n=r.n(a),l=r("./node_modules/react/index.js"),c=r("./node_modules/react-native-web/dist/exports/TouchableOpacity/index.js"),m=r("./node_modules/react-native-web/dist/exports/View/index.js"),u=r("./src/theme/Theme.tsx"),b=r("./src/utils/overrides.ts"),d=r("./src/components/Avatar/Avatar.tsx"),p=r("./src/components/Typography/Text.tsx"),v="/home/travis/build/WeTrustPlatform/paramount/src/components/ListItem/ListItem.tsx";"undefined"!==typeof ListItemOverrides&&ListItemOverrides&&ListItemOverrides===Object(ListItemOverrides)&&Object.isExtensible(ListItemOverrides)&&Object.defineProperty(ListItemOverrides,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ListItemOverrides",filename:"src/components/ListItem/ListItem.tsx"}}),"undefined"!==typeof ListItemProps&&ListItemProps&&ListItemProps===Object(ListItemProps)&&Object.isExtensible(ListItemProps)&&Object.defineProperty(ListItemProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ListItemProps",filename:"src/components/ListItem/ListItem.tsx"}});var f=!1,j=function(e){var t=e.isDisabled,r=void 0===t?f:t,s=e.title,a=e.description,c=e.onPress,m=e.testID,p=e.source,j=e.overrides,N=void 0===j?{}:j,A=Object(u.b)(),g=Object(b.a)(_,e,n()(A,"overrides.ListItem.Touchable"),N.Touchable),L=Object(o.a)(g,2),P=L[0],E=L[1],C=Object(b.a)(y,e,n()(A,"overrides.ListItem.TextWrapper"),N.TextWrapper),T=Object(o.a)(C,2),D=T[0],w=T[1],S=Object(b.a)(x,e,n()(A,"overrides.ListItem.Title"),N.Title),z=Object(o.a)(S,2),k=z[0],W=z[1],R=Object(b.a)(h,e,n()(A,"overrides.ListItem.Description"),N.Description),M=Object(o.a)(R,2),H=M[0],X=M[1],F=Object(b.a)(I,e,n()(A,"overrides.ListItem.Action"),N.Action),J=Object(o.a)(F,2),U=J[0],V=J[1],q=Object(b.a)(d.a,e,n()(A,"overrides.ListItem.Avatar"),N.Avatar),B=Object(o.a)(q,2),G=B[0],K=B[1],Q=Object(b.a)(O,e,n()(A,"overrides.ListItem.Root"),N.Root),Y=Object(o.a)(Q,2),Z=Y[0],$=Y[1];return l.createElement(Z,Object(i.a)({isDisabled:r},$,{__source:{fileName:v,lineNumber:120}}),l.createElement(P,Object(i.a)({onPress:c,testID:m,isDisabled:r},E,{__source:{fileName:v,lineNumber:121}}),p&&l.createElement(G,Object(i.a)({size:"small",source:p},K,{__source:{fileName:v,lineNumber:127}})),l.createElement(D,Object(i.a)({source:p},w,{__source:{fileName:v,lineNumber:128}}),l.createElement(k,Object(i.a)({title:s},W,{__source:{fileName:v,lineNumber:129}})),l.createElement(H,Object(i.a)({description:a},X,{__source:{fileName:v,lineNumber:130}})))),l.createElement(U,Object(i.a)({isDisabled:r},V,{__source:{fileName:v,lineNumber:133}})))};"undefined"!==typeof j&&j&&j===Object(j)&&Object.isExtensible(j)&&Object.defineProperty(j,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ListItem",filename:"src/components/ListItem/ListItem.tsx"}});var O=function(e){var t=e.children,r=e.style,o=e.isDisabled,a=Object(s.a)(e,["children","style","isDisabled"]),n=Object(u.b)();return l.createElement(m.a,Object(i.a)({style:[{flexDirection:"row",height:72,backgroundColor:o?n.colors.background.greyLight:n.colors.background.content},r]},a,{__source:{fileName:v,lineNumber:148}}),t)},_=function(e){var t=e.style,r=e.children,o=(e.isDisabled,Object(s.a)(e,["style","children","isDisabled"]));return l.createElement(c.a,Object(i.a)({style:[{flex:1,flexDirection:"row",alignItems:"center"},t]},o,{__source:{fileName:v,lineNumber:180}}),r)},x=function(e){var t=e.title,r=e.style,o=Object(s.a)(e,["title","style"]);return t?l.createElement(p.a,Object(i.a)({size:"large",style:[{},r]},o,{__source:{fileName:v,lineNumber:206}}),t):null},y=function(e){var t=e.children,r=e.style,o=e.source,a=Object(s.a)(e,["children","style","source"]);return l.createElement(m.a,Object(i.a)({style:[{flex:1,justifyContent:"center",paddingLeft:o?8:0},r]},a,{__source:{fileName:v,lineNumber:221}}),t)},h=function(e){var t=e.style,r=e.description,o=Object(s.a)(e,["style","description"]);return r?l.createElement(p.a,Object(i.a)({size:"small",color:"muted",style:[{},t]},o,{__source:{fileName:v,lineNumber:243}}),r):null},I=function(e){return l.createElement(l.Fragment,null)}},"./src/utils/isControlSize.ts":function(e,t,r){"use strict";r.d(t,"a",function(){return s});var s=function(e){return"number"!==typeof e};"undefined"!==typeof s&&s&&s===Object(s)&&Object.isExtensible(s)&&Object.defineProperty(s,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"isControlSize",filename:"src/utils/isControlSize.ts"}})}}]);
//# sourceMappingURL=19.48818ae313f1216d8e7f.js.map