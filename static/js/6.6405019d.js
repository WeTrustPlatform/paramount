(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"./src/components/Avatar/Avatar.tsx":function(e,t,r){"use strict";r.d(t,"a",function(){return v});var a=r("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),i=r("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/extends.js"),n=r("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),s=r("./node_modules/dlv/dist/dlv.umd.js"),o=r.n(s),c=r("./node_modules/react/index.js"),l=r("./node_modules/react-native-web/dist/exports/Image/index.js"),u=r("./node_modules/react-native-web/dist/exports/View/index.js"),b=r("./src/theme/Theme.tsx"),m=r("./src/utils/ControlSize.ts"),d=r("./src/utils/Overrides.ts"),p=r("./src/components/Typography/Text.tsx"),f="/home/travis/build/WeTrustPlatform/paramount/src/components/Avatar/Avatar.tsx";"undefined"!==typeof AvatarOverrides&&AvatarOverrides&&AvatarOverrides===Object(AvatarOverrides)&&Object.isExtensible(AvatarOverrides)&&Object.defineProperty(AvatarOverrides,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"AvatarOverrides",filename:"src/components/Avatar/Avatar.tsx"}}),"undefined"!==typeof AvatarProps&&AvatarProps&&AvatarProps===Object(AvatarProps)&&Object.isExtensible(AvatarProps)&&Object.defineProperty(AvatarProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"AvatarProps",filename:"src/components/Avatar/Avatar.tsx"}});var v=function(e){var t=e.source,r=e.name,a=e.size,s=void 0===a?"medium":a,l=e.isSolid,u=void 0!==l&&l,m=e.color,p=void 0===m?"auto":m,v=e.testID,j=e.overrides,O=void 0===j?{}:j,g=Object(b.b)(),h=c.useState(!1),k=Object(n.a)(h,2),y=k[0],N=k[1],L=!t||y,C=Object(d.a)(_,e,{name:r,size:s,isSolid:u,color:p,testID:v},o()(g,"overrides.Avatar.Root"),O.Root),S=Object(n.a)(C,2),I=S[0],E=S[1],A=Object(d.a)(P,e,{name:r,size:s,isSolid:u,color:p},o()(g,"overrides.Avatar.Initial"),O.Initials),T=Object(n.a)(A,2),D=T[0],w=T[1];if(!L&&t){var z=Object(d.a)(x,e,{onError:function(){return N(!0)},source:t},o()(g,"overrides.Avatar.Image"),O.Image),B=Object(n.a)(z,2),R=B[0],H=B[1];return c.createElement(I,Object(i.a)({},E,{__source:{fileName:f,lineNumber:102}}),c.createElement(R,Object(i.a)({},H,{__source:{fileName:f,lineNumber:103}})))}return c.createElement(I,Object(i.a)({},E,{__source:{fileName:f,lineNumber:109}}),c.createElement(D,Object(i.a)({},w,{__source:{fileName:f,lineNumber:110}})))};"undefined"!==typeof v&&v&&v===Object(v)&&Object.isExtensible(v)&&Object.defineProperty(v,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Avatar",filename:"src/components/Avatar/Avatar.tsx"}});var j=function(e){var t=String(e),r=0;if(0===t.trim().length)return r;for(var a=0;a<t.length;a++)r=(r<<5)-r+t.charCodeAt(a),r&=r;return Math.abs(r)};j&&j===Object(j)&&Object.isExtensible(j)&&Object.defineProperty(j,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"hashCode",filename:"src/components/Avatar/Avatar.tsx"}}),"undefined"!==typeof AvatarColor&&AvatarColor&&AvatarColor===Object(AvatarColor)&&Object.isExtensible(AvatarColor)&&Object.defineProperty(AvatarColor,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"AvatarColor",filename:"src/components/Avatar/Avatar.tsx"}});var O={large:2,medium:1.5,small:1},_=function(e){var t=e.testID,r=e.children,a=e.name,i=e.size,n=e.isSolid,s=e.color,o=e.style,l=Object(b.b)(),d=l.fills[n?"solid":"subtle"],p=Object.keys(d),v=Object(m.a)(i)?l.controlHeights[i]*O[i]:i;return c.createElement(u.a,{style:[{alignItems:"center",backgroundColor:d["auto"===s?p[j(a)%p.length]:s].backgroundColor,borderRadius:9999,display:"flex",height:v,justifyContent:"center",overflow:"hidden",position:"relative",width:v},o],testID:t,__source:{fileName:f,lineNumber:161}},r)},P=function(e){var t=e.name,r=e.size,n=e.isSolid,s=e.color,o=e.style,l=Object(a.a)(e,["name","size","isSolid","color","style"]),u=Object(b.b)(),v=u.fills[n?"solid":"subtle"],_=Object.keys(v),P=Object(m.a)(r)?u.controlHeights[r]*O[r]:r,x=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"?";return e?e.replace(/\s+/," ").split(" ").slice(0,2).map(function(e){return e&&e[0].toUpperCase()}).join(""):t}(t);return c.createElement(p.a,Object(i.a)({},l,{style:[{color:v["auto"===s?_[j(t)%_.length]:s].color,fontSize:P/2,lineHeight:P},Object(d.b)(e,o)],__source:{fileName:f,lineNumber:220}}),x)},x=function(e){var t=e.style,r=Object(a.a)(e,["style"]);return c.createElement(l.a,Object(i.a)({style:[{height:"100%",width:"100%"},t]},r,{__source:{fileName:f,lineNumber:245}}))}},"./src/components/Box/Box.tsx":function(e,t,r){"use strict";var a=r("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),i=r("./node_modules/react/index.js"),n=r("./node_modules/react-native-web/dist/exports/View/index.js"),s=r("./src/theme/Theme.tsx"),o=r("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/extends.js"),c=r("./node_modules/dlv/dist/dlv.umd.js"),l=r.n(c),u=r("./src/utils/Overrides.ts");"undefined"!==typeof SpacingProps&&SpacingProps&&SpacingProps===Object(SpacingProps)&&Object.isExtensible(SpacingProps)&&Object.defineProperty(SpacingProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"SpacingProps",filename:"src/components/Spacing/Spacing.tsx"}}),"undefined"!==typeof SpacingOverride&&SpacingOverride&&SpacingOverride===Object(SpacingOverride)&&Object.isExtensible(SpacingOverride)&&Object.defineProperty(SpacingOverride,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"SpacingOverride",filename:"src/components/Spacing/Spacing.tsx"}});var b=function(e,t){return"number"===typeof e?e:t.spacing[e]};b&&b===Object(b)&&Object.isExtensible(b)&&Object.defineProperty(b,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"getSpacing",filename:"src/components/Spacing/Spacing.tsx"}});var m=function(e){var t=e.size,r=void 0===t?"medium":t,c=e.orientation,m=void 0===c?"vertical":c,d=e.style,p=Object(a.a)(e,["size","orientation","style"]),f=Object(s.b)();return i.createElement(n.a,Object(o.a)({style:["vertical"===m?{height:b(r,f)}:{width:b(r,f)},Object(u.b)(e,d),Object(u.b)(e,l()(f,"overrides.Spacing.style"))]},p,{__source:{fileName:"/home/travis/build/WeTrustPlatform/paramount/src/components/Spacing/Spacing.tsx",lineNumber:44}}))};m&&m===Object(m)&&Object.isExtensible(m)&&Object.defineProperty(m,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Spacing",filename:"src/components/Spacing/Spacing.tsx"}}),r.d(t,"a",function(){return p});"undefined"!==typeof BoxProps&&BoxProps&&BoxProps===Object(BoxProps)&&Object.isExtensible(BoxProps)&&Object.defineProperty(BoxProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"BoxProps",filename:"src/components/Box/Box.tsx"}});var d={backgroundColor:function(e,t){return t.colors.background[e]?{backgroundColor:t.colors.background[e]}:{backgroundColor:e}},elevation:function(e,t){return t.elevations[e]},shape:function(e,t){return t.containerShapes[e]},space:function(e,t){return{padding:b(e,t)}},spaceBottom:function(e,t){return{paddingBottom:b(e,t)}},spaceEnd:function(e,t){return{paddingEnd:b(e,t)}},spaceHorizontal:function(e,t){return{paddingHorizontal:b(e,t)}},spaceLeft:function(e,t){return{paddingLeft:b(e,t)}},spaceRight:function(e,t){return{paddingRight:b(e,t)}},spaceStart:function(e,t){return{paddingStart:b(e,t)}},spaceTop:function(e,t){return{paddingTop:b(e,t)}},spaceVertical:function(e,t){return{paddingVertical:b(e,t)}}},p=function(e){var t=e.children,r=e.testID,o=Object(a.a)(e,["children","testID"]),c=Object(s.b)(),l=[],u={};for(var b in o)if(b){var m=d[b];if(m){var p=m(o[b],c);l.push(p)}else u[b]=o[b]}return i.createElement(n.a,{testID:r,style:[u,l],__source:{fileName:"/home/travis/build/WeTrustPlatform/paramount/src/components/Box/Box.tsx",lineNumber:106}},t)};"undefined"!==typeof p&&p&&p===Object(p)&&Object.isExtensible(p)&&Object.defineProperty(p,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Box",filename:"src/components/Box/Box.tsx"}})},"./src/components/Checkbox/Checkbox.tsx":function(e,t,r){"use strict";r.d(t,"a",function(){return j});var a=r("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread.js"),i=r("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),n=r("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/extends.js"),s=r("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),o=r("./node_modules/dlv/dist/dlv.umd.js"),c=r.n(o),l=r("./node_modules/react/index.js"),u=r("./node_modules/react-native-web/dist/exports/TouchableOpacity/index.js"),b=r("./node_modules/react-native-web/dist/exports/View/index.js"),m=r("./src/theme/Theme.tsx"),d=r("./src/utils/ControlSize.ts"),p=r("./src/utils/Overrides.ts"),f=r("./src/components/Icon/Icon.web.tsx"),v="/home/travis/build/WeTrustPlatform/paramount/src/components/Checkbox/Checkbox.tsx";"undefined"!==typeof CheckboxOverrides&&CheckboxOverrides&&CheckboxOverrides===Object(CheckboxOverrides)&&Object.isExtensible(CheckboxOverrides)&&Object.defineProperty(CheckboxOverrides,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"CheckboxOverrides",filename:"src/components/Checkbox/Checkbox.tsx"}}),"undefined"!==typeof CheckboxProps&&CheckboxProps&&CheckboxProps===Object(CheckboxProps)&&Object.isExtensible(CheckboxProps)&&Object.defineProperty(CheckboxProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"CheckboxProps",filename:"src/components/Checkbox/Checkbox.tsx"}});var j=function(e){var t=e.size,r=void 0===t?"medium":t,a=e.shape,i=void 0===a?"rounded":a,o=e.value,u=void 0!==o&&o,b=e.isDisabled,d=void 0!==b&&b,f=e.onValueChange,j=void 0===f?function(){}:f,P=e.testID,x=e.overrides,g=void 0===x?{}:x,h=Object(m.b)(),k=Object(p.a)(O,e,{size:r,shape:i,isDisabled:d,testID:P,onPress:function(){return j(!u)}},c()(h,"overrides.Checkbox.Touchable"),g.Touchable),y=Object(s.a)(k,2),N=y[0],L=y[1],C=Object(p.a)(_,e,{value:u,size:r,shape:i,isDisabled:d},c()(h,"overrides.Checkbox.Check"),g.Check),S=Object(s.a)(C,2),I=S[0],E=S[1];return l.createElement(N,Object(n.a)({},L,{__source:{fileName:v,lineNumber:93}}),l.createElement(I,Object(n.a)({value:u,size:r,shape:i,isDisabled:d},E,{__source:{fileName:v,lineNumber:94}})))};"undefined"!==typeof j&&j&&j===Object(j)&&Object.isExtensible(j)&&Object.defineProperty(j,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Checkbox",filename:"src/components/Checkbox/Checkbox.tsx"}});var O=function(e){e.size;var t=e.shape,r=e.isDisabled,a=e.children,s=e.style,o=Object(i.a)(e,["size","shape","isDisabled","children","style"]),c=Object(m.b)();return l.createElement(u.a,Object(n.a)({style:[c.containerShapes[t],s],disabled:r},o,{__source:{fileName:v,lineNumber:117}}),a)},_=function(e){var t=e.size,r=e.shape,s=e.value,o=e.isDisabled,c=e.style,u=Object(i.a)(e,["size","shape","value","isDisabled","style"]),p=Object(m.b)(),j=Object(d.a)(t)?p.controlHeights[t]-16:t;return l.createElement(b.a,Object(n.a)({style:[Object(a.a)({alignItems:"center",backgroundColor:p.colors.background.content,borderColor:p.colors.border.default,borderWidth:1,height:j,justifyContent:"center",width:j},s?{backgroundColor:p.colors.background.primaryDefault,borderColor:"transparent"}:{},o?{backgroundColor:p.colors.background.greyDark,borderColor:p.colors.border.default}:{},p.containerShapes[r]),c]},u,{__source:{fileName:v,lineNumber:143}}),s?l.createElement(f.a,{name:"check",size:"xsmall",color:p.colors.text.white,__source:{fileName:v,lineNumber:172}}):null)}},"./src/components/Helpers/State.tsx":function(e,t,r){"use strict";r.d(t,"a",function(){return s});var a=r("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),i=r("./node_modules/react/index.js"),n=r.n(i);"undefined"!==typeof StateRenderProps&&StateRenderProps&&StateRenderProps===Object(StateRenderProps)&&Object.isExtensible(StateRenderProps)&&Object.defineProperty(StateRenderProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"StateRenderProps",filename:"src/components/Helpers/State.tsx"}}),"undefined"!==typeof StateProps&&StateProps&&StateProps===Object(StateProps)&&Object.isExtensible(StateProps)&&Object.defineProperty(StateProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"StateProps",filename:"src/components/Helpers/State.tsx"}});var s=function(e){var t=e.children,r=e.initial,i=void 0!==r&&r,s=n.a.useState(i),o=Object(a.a)(s,2),c=o[0],l=o[1];return t({state:c,setState:n.a.useCallback(function(e){l(e)},[])})};"undefined"!==typeof s&&s&&s===Object(s)&&Object.isExtensible(s)&&Object.defineProperty(s,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"State",filename:"src/components/Helpers/State.tsx"}})},"./src/components/ListItem/ListItem.tsx":function(e,t,r){"use strict";r.d(t,"a",function(){return v});var a=r("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),i=r("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/extends.js"),n=r("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),s=r("./node_modules/dlv/dist/dlv.umd.js"),o=r.n(s),c=r("./node_modules/react/index.js"),l=r("./node_modules/react-native-web/dist/exports/TouchableOpacity/index.js"),u=r("./node_modules/react-native-web/dist/exports/View/index.js"),b=r("./src/theme/Theme.tsx"),m=r("./src/utils/Overrides.ts"),d=r("./src/components/Avatar/Avatar.tsx"),p=r("./src/components/Typography/Text.tsx"),f="/home/travis/build/WeTrustPlatform/paramount/src/components/ListItem/ListItem.tsx";"undefined"!==typeof ListItemOverrides&&ListItemOverrides&&ListItemOverrides===Object(ListItemOverrides)&&Object.isExtensible(ListItemOverrides)&&Object.defineProperty(ListItemOverrides,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ListItemOverrides",filename:"src/components/ListItem/ListItem.tsx"}}),"undefined"!==typeof ListItemProps&&ListItemProps&&ListItemProps===Object(ListItemProps)&&Object.isExtensible(ListItemProps)&&Object.defineProperty(ListItemProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ListItemProps",filename:"src/components/ListItem/ListItem.tsx"}});var v=function(e){var t=e.isDisabled,r=void 0!==t&&t,a=e.title,s=e.description,l=e.onPress,u=e.testID,d=e.source,p=e.overrides,v=void 0===p?{}:p,k=Object(b.b)(),y=Object(m.a)(j,e,{isDisabled:r},o()(k,"overrides.ListItem.Root"),v.Root),N=Object(n.a)(y,2),L=N[0],C=N[1],S=Object(m.a)(O,e,{onPress:l,testID:u,isDisabled:r},o()(k,"overrides.ListItem.Touchable"),v.Touchable),I=Object(n.a)(S,2),E=I[0],A=I[1],T=Object(m.a)(P,e,{hasAvatar:!!d||!!v.Avatar||!!o()(k,"overrides.ListItem.Avatar")},o()(k,"overrides.ListItem.TextWrapper"),v.TextWrapper),D=Object(n.a)(T,2),w=D[0],z=D[1],B=Object(m.a)(_,e,{title:a},o()(k,"overrides.ListItem.Title"),v.Title),R=Object(n.a)(B,2),H=R[0],W=R[1],V=Object(m.a)(x,e,{description:s},o()(k,"overrides.ListItem.Description"),v.Description),M=Object(n.a)(V,2),U=M[0],J=M[1],F=Object(m.a)(g,e,{isDisabled:r},o()(k,"overrides.ListItem.Action"),v.Action),X=Object(n.a)(F,2),G=X[0],q=X[1],K=Object(m.a)(h,e,{source:d,size:"small"},o()(k,"overrides.ListItem.Avatar"),v.Avatar),Q=Object(n.a)(K,2),Y=Q[0],Z=Q[1];return c.createElement(L,Object(i.a)({},C,{__source:{fileName:f,lineNumber:130}}),c.createElement(E,Object(i.a)({},A,{__source:{fileName:f,lineNumber:131}}),c.createElement(Y,Object(i.a)({},Z,{__source:{fileName:f,lineNumber:132}})),c.createElement(w,Object(i.a)({},z,{__source:{fileName:f,lineNumber:133}}),c.createElement(H,Object(i.a)({},W,{__source:{fileName:f,lineNumber:134}})),c.createElement(U,Object(i.a)({},J,{__source:{fileName:f,lineNumber:135}})))),c.createElement(G,Object(i.a)({},q,{__source:{fileName:f,lineNumber:138}})))};"undefined"!==typeof v&&v&&v===Object(v)&&Object.isExtensible(v)&&Object.defineProperty(v,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ListItem",filename:"src/components/ListItem/ListItem.tsx"}});var j=function(e){var t=e.children,r=e.style,n=e.isDisabled,s=Object(a.a)(e,["children","style","isDisabled"]),o=Object(b.b)();return c.createElement(u.a,Object(i.a)({style:[{flexDirection:"row",minHeight:72,backgroundColor:n?o.colors.background.greyLight:o.colors.background.content},r]},s,{__source:{fileName:f,lineNumber:153}}),t)},O=function(e){var t=e.style,r=e.children,n=(e.isDisabled,Object(a.a)(e,["style","children","isDisabled"]));return c.createElement(l.a,Object(i.a)({style:[{flex:1,flexDirection:"row",alignItems:"center"},t]},n,{__source:{fileName:f,lineNumber:180}}),r)},_=function(e){var t=e.title,r=e.style,n=Object(a.a)(e,["title","style"]);return t?c.createElement(p.a,Object(i.a)({size:"large",style:[{},Object(m.b)(e,r)]},n,{__source:{fileName:f,lineNumber:206}}),t):null},P=function(e){var t=e.children,r=e.style,n=e.hasAvatar,s=void 0!==n&&n,o=Object(a.a)(e,["children","style","hasAvatar"]);return c.createElement(u.a,Object(i.a)({style:[{flex:1,justifyContent:"center",paddingLeft:s?8:0},r]},o,{__source:{fileName:f,lineNumber:221}}),t)},x=function(e){var t=e.style,r=e.description,n=Object(a.a)(e,["style","description"]);return r?c.createElement(p.a,Object(i.a)({size:"small",color:"muted",style:[{},Object(m.b)(e,t)]},n,{__source:{fileName:f,lineNumber:243}}),r):null},g=function(e){return c.createElement(c.Fragment,null)},h=function(e){var t=e.source,r=e.name;return t||r?c.createElement(d.a,Object(i.a)({},e,{__source:{fileName:f,lineNumber:267}})):null}},"./src/components/Pickers/ListPicker.mdx":function(e,t,r){"use strict";r.r(t),r.d(t,"default",function(){return d});var a=r("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),i=r("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/extends.js"),n=(r("./node_modules/react/index.js"),r("./node_modules/@mdx-js/react/dist/index.es.js")),s=r("./node_modules/docz/dist/index.esm.js"),o=r("./src/components/Box/Box.tsx"),c=r("./src/components/Pickers/ListPicker.tsx"),l=r("./src/components/Helpers/State.tsx"),u="/home/travis/build/WeTrustPlatform/paramount/src/components/Pickers/ListPicker.mdx",b={},m="wrapper";function d(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(n.b)(m,Object(i.a)({},b,r,{components:t,mdxType:"MDXLayout",__source:{fileName:u,lineNumber:21}}),Object(n.b)("h1",Object(i.a)({id:"listpicker"},{__source:{fileName:u,lineNumber:24}}),"ListPicker"),Object(n.b)("p",{__source:{fileName:u,lineNumber:27}},"ListPicker that supports single value or multiple values selected at the same item."),Object(n.b)("p",{__source:{fileName:u,lineNumber:28}},Object(n.b)("inlineCode",{parentName:"p",__source:{fileName:u,lineNumber:28}},"ListPicker")," composes ",Object(n.b)("inlineCode",{parentName:"p",__source:{fileName:u,lineNumber:28}},"FlatList"),". To use ",Object(n.b)("inlineCode",{parentName:"p",__source:{fileName:u,lineNumber:28}},"ref"),", import ",Object(n.b)("inlineCode",{parentName:"p",__source:{fileName:u,lineNumber:28}},"ListPickerWithRef")," instead"),Object(n.b)("h2",Object(i.a)({id:"usage"},{__source:{fileName:u,lineNumber:29}}),"Usage"),Object(n.b)(s.c,{__position:0,__code:"<State initial={{ value: ['c', 'js', 'go'] }}>\n  {({ state, setState }) => (\n    <Box height={300}>\n      <ListPicker\n        isMulti\n        value={state.value}\n        onValueChange={(newValue, itemIndex) => setState({ value: newValue })}\n        data={[\n          {\n            label: 'C',\n            value: 'c',\n            description:\n              'C is a general-purpose, procedural computer programming language. C is a general-purpose, procedural computer programming language.',\n          },\n          {\n            label: 'C#',\n            value: 'c#',\n            description:\n              'C# is a general-purpose, multi-paradigm programming language.',\n          },\n          { label: 'C++', value: 'c++' },\n          { label: 'CSS', value: 'css' },\n          { label: 'Elixir', value: 'elixir' },\n          { label: 'Elm', value: 'elm' },\n          { label: 'Erlang', value: 'erlang' },\n          { label: 'Go', value: 'go' },\n          { label: 'Haskell', value: 'haskell' },\n          { label: 'HTML', value: 'html' },\n          { label: 'Java', value: 'java' },\n          { label: 'JavaScript', value: 'js' },\n          { label: 'Lua', value: 'lua' },\n          { label: 'Python', value: 'python' },\n          { label: 'R', value: 'r' },\n          { label: 'Ruby', value: 'ruby' },\n          { label: 'Rust', value: 'rust' },\n          { label: 'Switft', value: 'swift' },\n          { label: 'Typescript', value: 'typescript' },\n        ]}\n      />\n    </Box>\n  )}\n</State>",__scope:{props:this?this.props:r,Playground:s.c,Props:s.d,Box:o.a,ListPicker:c.a,State:l.a},mdxType:"Playground",__source:{fileName:u,lineNumber:32}},Object(n.b)(l.a,{initial:{value:["c","js","go"]},mdxType:"State",__source:{fileName:u,lineNumber:40}},function(e){var t=e.state,r=e.setState;return Object(n.b)(o.a,{height:300,mdxType:"Box",__source:{fileName:u,lineNumber:46}},Object(n.b)(c.a,{isMulti:!0,value:t.value,onValueChange:function(e,t){return r({value:e})},data:[{label:"C",value:"c",description:"C is a general-purpose, procedural computer programming language. C is a general-purpose, procedural computer programming language."},{label:"C#",value:"c#",description:"C# is a general-purpose, multi-paradigm programming language."},{label:"C++",value:"c++"},{label:"CSS",value:"css"},{label:"Elixir",value:"elixir"},{label:"Elm",value:"elm"},{label:"Erlang",value:"erlang"},{label:"Go",value:"go"},{label:"Haskell",value:"haskell"},{label:"HTML",value:"html"},{label:"Java",value:"java"},{label:"JavaScript",value:"js"},{label:"Lua",value:"lua"},{label:"Python",value:"python"},{label:"R",value:"r"},{label:"Ruby",value:"ruby"},{label:"Rust",value:"rust"},{label:"Switft",value:"swift"},{label:"Typescript",value:"typescript"}],mdxType:"ListPicker",__source:{fileName:u,lineNumber:47}}))})),Object(n.b)("h2",Object(i.a)({id:"listpicker-props"},{__source:{fileName:u,lineNumber:112}}),"ListPicker Props"),Object(n.b)(s.d,{of:c.a,mdxType:"Props",__source:{fileName:u,lineNumber:115}}))}d&&d===Object(d)&&Object.isExtensible(d)&&Object.defineProperty(d,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src/components/Pickers/ListPicker.mdx"}}),d.isMDXComponent=!0},"./src/components/Pickers/ListPicker.tsx":function(e,t,r){"use strict";r.d(t,"a",function(){return j});var a=r("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/extends.js"),i=r("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread.js"),n=r("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),s=r("./node_modules/dlv/dist/dlv.umd.js"),o=r.n(s),c=r("./node_modules/react/index.js"),l=r("./node_modules/react-native-web/dist/exports/FlatList/index.js"),u=r("./src/theme/Theme.tsx"),b=r("./src/utils/Overrides.ts"),m=r("./src/components/Box/Box.tsx"),d=r("./src/components/Checkbox/Checkbox.tsx"),p=r("./src/components/ListItem/ListItem.tsx"),f=r("./src/components/Pickers/usePicker.tsx"),v="/home/travis/build/WeTrustPlatform/paramount/src/components/Pickers/ListPicker.tsx";"undefined"!==typeof ListPickerItem&&ListPickerItem&&ListPickerItem===Object(ListPickerItem)&&Object.isExtensible(ListPickerItem)&&Object.defineProperty(ListPickerItem,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ListPickerItem",filename:"src/components/Pickers/ListPicker.tsx"}}),"undefined"!==typeof ListPickerOverrides&&ListPickerOverrides&&ListPickerOverrides===Object(ListPickerOverrides)&&Object.isExtensible(ListPickerOverrides)&&Object.defineProperty(ListPickerOverrides,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ListPickerOverrides",filename:"src/components/Pickers/ListPicker.tsx"}}),"undefined"!==typeof ListPickerProps&&ListPickerProps&&ListPickerProps===Object(ListPickerProps)&&Object.isExtensible(ListPickerProps)&&Object.defineProperty(ListPickerProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ListPickerProps",filename:"src/components/Pickers/ListPicker.tsx"}});var j=function(e){var t=e.data,r=void 0===t?[]:t,s=e.value,l=e.onValueChange,m=void 0===l?function(){}:l,d=e.keyExtractor,p=e.isMulti,j=e.overrides,P=void 0===j?{}:j,x=Object(u.b)(),g=Object(f.a)({value:s,onValueChange:m,data:r,isMulti:p,keyExtractor:d}),h=g.items,k=g.handleSelect,y=Object(b.a)(O,e,{getItemLayout:function(e,t){return{index:t,length:x.controlHeights.medium,offset:x.controlHeights.medium*t}},data:h,renderItem:function(t){var r=t.item,s=Object(b.a)(_,e,Object(i.a)({},r,{onPress:function(){return k(r.value,r.index,r.isSelected)}}),o()(x,"overrides.ListPicker.ListPickerItem"),P.ListPickerItem),l=Object(n.a)(s,2),u=l[0],m=l[1];return c.createElement(u,Object(a.a)({},m,{__source:{fileName:v,lineNumber:88}}))}},o()(x,"overrides.ListPicker.List"),P.List),N=Object(n.a)(y,2),L=N[0],C=N[1];return c.createElement(L,Object(a.a)({},C,{__source:{fileName:v,lineNumber:95}}))};"undefined"!==typeof j&&j&&j===Object(j)&&Object.isExtensible(j)&&Object.defineProperty(j,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ListPicker",filename:"src/components/Pickers/ListPicker.tsx"}});var O=function(e){return c.createElement(l.a,Object(a.a)({},e,{__source:{fileName:v,lineNumber:102}}))},_=function(e){var t=e.index,r=void 0===t?0:t,i=e.isSelected,s=void 0!==i&&i,o=e.label,l=e.onPress,u=void 0===l?function(){}:l,f=e.value,j=e.description,O=e.override,_=Object(b.a)(p.a,e,{onPress:function(){return u(f,r,s)},title:o,description:s&&j,overrides:{Touchable:{style:{paddingRight:8}},Action:{component:function(){return c.createElement(m.a,{justifyContent:"center",alignItems:"center",__source:{fileName:v,lineNumber:145}},c.createElement(d.a,{onValueChange:function(){return u(f,r,s)},shape:"circle",value:s,__source:{fileName:v,lineNumber:146}}))}}}},O),P=Object(n.a)(_,2),x=P[0],g=P[1];return c.createElement(x,Object(a.a)({},g,{__source:{fileName:v,lineNumber:159}}))}},"./src/components/Pickers/usePicker.tsx":function(e,t,r){"use strict";r.d(t,"a",function(){return s});var a=r("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread.js"),i=r("./node_modules/react/index.js");"undefined"!==typeof PickerItem&&PickerItem&&PickerItem===Object(PickerItem)&&Object.isExtensible(PickerItem)&&Object.defineProperty(PickerItem,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"PickerItem",filename:"src/components/Pickers/usePicker.tsx"}}),"undefined"!==typeof PickerItemProps&&PickerItemProps&&PickerItemProps===Object(PickerItemProps)&&Object.isExtensible(PickerItemProps)&&Object.defineProperty(PickerItemProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"PickerItemProps",filename:"src/components/Pickers/usePicker.tsx"}}),"undefined"!==typeof UsePickerProps&&UsePickerProps&&UsePickerProps===Object(UsePickerProps)&&Object.isExtensible(UsePickerProps)&&Object.defineProperty(UsePickerProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"UsePickerProps",filename:"src/components/Pickers/usePicker.tsx"}});var n=function(e){return Array.isArray(e)},s=function(e){var t=e.value,r=e.onValueChange,s=void 0===r?function(){}:r,o=e.data,c=void 0===o?[]:o,l=e.keyExtractor;return{handleSelect:i.useCallback(function(e,r,a){n(t)?s(a?t.filter(function(t){return t!==e}):t.concat(e),r):s(e,r)},[t,s]),items:c.map(function(e,r){var i=n(t)?t.some(function(t){return t===e.value}):t===e.value;return Object(a.a)({},e,{key:l?l(e):e.key||"".concat(r),index:r,isSelected:i})})}};"undefined"!==typeof s&&s&&s===Object(s)&&Object.isExtensible(s)&&Object.defineProperty(s,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"usePicker",filename:"src/components/Pickers/usePicker.tsx"}})},"./src/utils/ControlSize.ts":function(e,t,r){"use strict";r.d(t,"a",function(){return a});var a=function(e){return"number"!==typeof e};"undefined"!==typeof a&&a&&a===Object(a)&&Object.isExtensible(a)&&Object.defineProperty(a,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"isControlSize",filename:"src/utils/ControlSize.ts"}})}}]);
//# sourceMappingURL=6.e8e6d58e83774cf9e62e.js.map