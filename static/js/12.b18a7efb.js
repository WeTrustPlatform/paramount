(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"./src/components/Box/Box.tsx":function(e,t,n){"use strict";var r=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),a=n("./node_modules/react/index.js"),o=n("./node_modules/react-native-web/dist/exports/View/index.js"),i=n("./src/theme/Theme.tsx"),s=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/extends.js"),c=n("./node_modules/dlv/dist/dlv.umd.js"),l=n.n(c),u=n("./src/utils/Overrides.ts");"undefined"!==typeof SpacingProps&&SpacingProps&&SpacingProps===Object(SpacingProps)&&Object.isExtensible(SpacingProps)&&Object.defineProperty(SpacingProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"SpacingProps",filename:"src/components/Spacing/Spacing.tsx"}}),"undefined"!==typeof SpacingOverride&&SpacingOverride&&SpacingOverride===Object(SpacingOverride)&&Object.isExtensible(SpacingOverride)&&Object.defineProperty(SpacingOverride,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"SpacingOverride",filename:"src/components/Spacing/Spacing.tsx"}});var d=function(e,t){return"number"===typeof e?e:t.spacing[e]};d&&d===Object(d)&&Object.isExtensible(d)&&Object.defineProperty(d,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"getSpacing",filename:"src/components/Spacing/Spacing.tsx"}});var p=function(e){var t=e.size,n=void 0===t?"medium":t,c=e.orientation,p=void 0===c?"vertical":c,b=e.style,m=Object(r.a)(e,["size","orientation","style"]),f=Object(i.b)();return a.createElement(o.a,Object(s.a)({style:["vertical"===p?{height:d(n,f)}:{width:d(n,f)},Object(u.b)(e,b),Object(u.b)(e,l()(f,"overrides.Spacing.style"))]},m,{__source:{fileName:"/home/travis/build/WeTrustPlatform/paramount/src/components/Spacing/Spacing.tsx",lineNumber:44}}))};p&&p===Object(p)&&Object.isExtensible(p)&&Object.defineProperty(p,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Spacing",filename:"src/components/Spacing/Spacing.tsx"}}),n.d(t,"a",function(){return m});"undefined"!==typeof BoxProps&&BoxProps&&BoxProps===Object(BoxProps)&&Object.isExtensible(BoxProps)&&Object.defineProperty(BoxProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"BoxProps",filename:"src/components/Box/Box.tsx"}});var b={backgroundColor:function(e,t){return t.colors.background[e]?{backgroundColor:t.colors.background[e]}:{backgroundColor:e}},elevation:function(e,t){return t.elevations[e]},shape:function(e,t){return t.containerShapes[e]},space:function(e,t){return{padding:d(e,t)}},spaceBottom:function(e,t){return{paddingBottom:d(e,t)}},spaceEnd:function(e,t){return{paddingEnd:d(e,t)}},spaceHorizontal:function(e,t){return{paddingHorizontal:d(e,t)}},spaceLeft:function(e,t){return{paddingLeft:d(e,t)}},spaceRight:function(e,t){return{paddingRight:d(e,t)}},spaceStart:function(e,t){return{paddingStart:d(e,t)}},spaceTop:function(e,t){return{paddingTop:d(e,t)}},spaceVertical:function(e,t){return{paddingVertical:d(e,t)}}},m=function(e){var t=e.children,n=e.testID,s=Object(r.a)(e,["children","testID"]),c=Object(i.b)(),l=[],u={};for(var d in s)if(d){var p=b[d];if(p){var m=p(s[d],c);l.push(m)}else u[d]=s[d]}return a.createElement(o.a,{testID:n,style:[u,l],__source:{fileName:"/home/travis/build/WeTrustPlatform/paramount/src/components/Box/Box.tsx",lineNumber:106}},t)};"undefined"!==typeof m&&m&&m===Object(m)&&Object.isExtensible(m)&&Object.defineProperty(m,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Box",filename:"src/components/Box/Box.tsx"}})},"./src/components/Helpers/State.tsx":function(e,t,n){"use strict";n.d(t,"a",function(){return i});var r=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),a=n("./node_modules/react/index.js"),o=n.n(a);"undefined"!==typeof StateRenderProps&&StateRenderProps&&StateRenderProps===Object(StateRenderProps)&&Object.isExtensible(StateRenderProps)&&Object.defineProperty(StateRenderProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"StateRenderProps",filename:"src/components/Helpers/State.tsx"}}),"undefined"!==typeof StateProps&&StateProps&&StateProps===Object(StateProps)&&Object.isExtensible(StateProps)&&Object.defineProperty(StateProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"StateProps",filename:"src/components/Helpers/State.tsx"}});var i=function(e){var t=e.children,n=e.initial,a=void 0!==n&&n,i=o.a.useState(a),s=Object(r.a)(i,2),c=s[0],l=s[1];return t({state:c,setState:o.a.useCallback(function(e){l(e)},[])})};"undefined"!==typeof i&&i&&i===Object(i)&&Object.isExtensible(i)&&Object.defineProperty(i,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"State",filename:"src/components/Helpers/State.tsx"}})},"./src/components/Inputs/TextInput.mdx":function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return m});var r=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),a=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/extends.js"),o=(n("./node_modules/react/index.js"),n("./node_modules/@mdx-js/react/dist/index.es.js")),i=n("./node_modules/docz/dist/index.esm.js"),s=n("./src/components/Box/Box.tsx"),c=n("./src/components/Helpers/State.tsx"),l=n("./src/components/Icon/Icon.web.tsx"),u=n("./src/components/Inputs/TextInput.tsx"),d="/home/travis/build/WeTrustPlatform/paramount/src/components/Inputs/TextInput.mdx",p={},b="wrapper";function m(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)(b,Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout",__source:{fileName:d,lineNumber:21}}),Object(o.b)("h1",Object(a.a)({id:"textinput"},{__source:{fileName:d,lineNumber:24}}),"TextInput"),Object(o.b)("p",{__source:{fileName:d,lineNumber:27}},"Composes React Native's ",Object(o.b)("inlineCode",{parentName:"p",__source:{fileName:d,lineNumber:27}},"TextInput")),Object(o.b)("h2",Object(a.a)({id:"usage"},{__source:{fileName:d,lineNumber:28}}),"Usage"),Object(o.b)(i.c,{__position:0,__code:"<State initial={{ value: '' }}>\n  {({ state, setState }) => (\n    <TextInput\n      value={state.value}\n      placeholder=\"Placeholder\"\n      size=\"large\"\n      onValueChange={value => setState({ value })}\n      isInvalid={false}\n      isClearable\n      onClear={() => console.log('Cleared!')} // Only triggered with `isClearable`\n    />\n  )}\n</State>",__scope:{props:this?this.props:n,Playground:i.c,Props:i.d,Box:s.a,State:c.a,Icon:l.a,TextInput:u.a},mdxType:"Playground",__source:{fileName:d,lineNumber:31}},Object(o.b)(c.a,{initial:{value:""},mdxType:"State",__source:{fileName:d,lineNumber:40}},function(e){var t=e.state,n=e.setState;return Object(o.b)(u.a,{value:t.value,placeholder:"Placeholder",size:"large",onValueChange:function(e){return n({value:e})},isInvalid:!1,isClearable:!0,onClear:function(){return console.log("Cleared!")},mdxType:"TextInput",__source:{fileName:d,lineNumber:46}})})),Object(o.b)("h2",Object(a.a)({id:"props"},{__source:{fileName:d,lineNumber:52}}),"Props"),Object(o.b)(i.d,{of:u.a,mdxType:"Props",__source:{fileName:d,lineNumber:55}}))}m&&m===Object(m)&&Object.isExtensible(m)&&Object.defineProperty(m,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src/components/Inputs/TextInput.mdx"}}),m.isMDXComponent=!0},"./src/components/Inputs/TextInput.tsx":function(e,t,n){"use strict";n.d(t,"a",function(){return j});var r=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/extends.js"),a=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread.js"),o=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),i=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),s=n("./node_modules/dlv/dist/dlv.umd.js"),c=n.n(s),l=n("./node_modules/react/index.js"),u=n("./node_modules/react-native-web/dist/exports/TextInput/index.js"),d=n("./node_modules/react-native-web/dist/exports/TouchableOpacity/index.js"),p=n("./node_modules/react-native-web/dist/exports/View/index.js"),b=n("./src/theme/Theme.tsx"),m=n("./src/utils/ControlSize.ts"),f=n("./src/utils/Overrides.ts"),x=n("./src/components/Icon/Icon.web.tsx"),g="/home/travis/build/WeTrustPlatform/paramount/src/components/Inputs/TextInput.tsx";"undefined"!==typeof TextInputOverrides&&TextInputOverrides&&TextInputOverrides===Object(TextInputOverrides)&&Object.isExtensible(TextInputOverrides)&&Object.defineProperty(TextInputOverrides,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"TextInputOverrides",filename:"src/components/Inputs/TextInput.tsx"}}),"undefined"!==typeof TextInputProps&&TextInputProps&&TextInputProps===Object(TextInputProps)&&Object.isExtensible(TextInputProps)&&Object.defineProperty(TextInputProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"TextInputProps",filename:"src/components/Inputs/TextInput.tsx"}});var j=function(e){var t=e.size,n=void 0===t?"medium":t,s=e.isClearable,u=void 0!==s&&s,d=e.isDisabled,p=void 0!==d&&d,m=e.isInvalid,x=void 0!==m&&m,j=e.onClear,P=void 0===j?function(){}:j,T=e.onValueChange,y=void 0===T?function(){}:T,C=e.onChangeText,N=void 0===C?function(){}:C,E=e.value,R=e.overrides,z=void 0===R?{}:R,B=Object(i.a)(e,["size","isClearable","isDisabled","isInvalid","onClear","onValueChange","onChangeText","value","overrides"]),L=Object(b.b)(),w=Object(f.a)(O,e,{},c()(L,"overrides.TextInput.Root"),z.Root),H=Object(o.a)(w,2),V=H[0],W=H[1],k=Object(f.a)(v,e,Object(a.a)({hasLeftIcon:!!z.LeftIcon,hasRightIcon:!(!u&&!z.RightIcon),size:n,isDisabled:p,isInvalid:x,onValueChange:y,value:E,onChangeText:N},B),c()(L,"overrides.TextInput.Input"),z.Input),D=Object(o.a)(k,2),M=D[0],X=D[1],A=Object(f.a)(_,e,{},c()(L,"overrides.TextInput.LeftIconWrapper"),z.LeftIconWrapper),J=Object(o.a)(A,2),F=J[0],U=J[1],q=Object(f.a)(I,e,{isClearable:u,onClear:P,onValueChange:y,value:E,onChangeText:N},c()(L,"overrides.TextInput.LeftIcon"),z.LeftIcon),G=Object(o.a)(q,2),K=G[0],Q=G[1],Y=Object(f.a)(h,e,{},c()(L,"overrides.TextInput.RightIconWrapper"),z.RightIconWrapper),Z=Object(o.a)(Y,2),$=Z[0],ee=Z[1],te=Object(f.a)(S,e,{isClearable:u,onClear:P,onValueChange:y,value:E,onChangeText:N},c()(L,"overrides.TextInput.RightIcon"),z.RightIcon),ne=Object(o.a)(te,2),re=ne[0],ae=ne[1];return l.createElement(V,Object(r.a)({},W,{__source:{fileName:g,lineNumber:148}}),l.createElement(F,Object(r.a)({},U,{__source:{fileName:g,lineNumber:149}}),l.createElement(K,Object(r.a)({},Q,{__source:{fileName:g,lineNumber:150}}))),l.createElement(M,Object(r.a)({},X,{__source:{fileName:g,lineNumber:152}})),l.createElement($,Object(r.a)({},ee,{__source:{fileName:g,lineNumber:153}}),l.createElement(re,Object(r.a)({},ae,{__source:{fileName:g,lineNumber:154}}))))};"undefined"!==typeof j&&j&&j===Object(j)&&Object.isExtensible(j)&&Object.defineProperty(j,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"TextInput",filename:"src/components/Inputs/TextInput.tsx"}});var O=function(e){var t=e.children,n=e.style,a=Object(i.a)(e,["children","style"]);return l.createElement(p.a,Object(r.a)({style:[n]},a,{__source:{fileName:g,lineNumber:170}}),t)},v=function(e){var t=e.isDisabled,n=e.isInvalid,o=e.onValueChange,s=e.onChangeText,c=e.size,d=e.style,p=e.numberOfLines,f=e.textContentType,x=e.hasLeftIcon,j=e.hasRightIcon,O=e.placeholderTextColor,v=Object(i.a)(e,["isDisabled","isInvalid","onValueChange","onChangeText","size","style","numberOfLines","textContentType","hasLeftIcon","hasRightIcon","placeholderTextColor"]),_=Object(b.b)(),h=Object(m.a)(c)?{borderRadius:_.controlBorderRadius[c],minHeight:_.controlHeights[c],paddingLeft:_.controlPaddings[c],paddingRight:_.controlPaddings[c],textSize:_.textSizes[c]}:{borderRadius:_.controlBorderRadius.medium,minHeight:c,paddingLeft:_.controlPaddings.medium,paddingRight:_.controlPaddings.medium,textSize:_.textSizes.medium},I=h.borderRadius,S=h.minHeight,P=h.paddingLeft,T=h.paddingRight,y=h.textSize;return l.createElement(u.a,Object(r.a)({style:[Object(a.a)({backgroundColor:t?_.colors.background.greyLight:_.colors.background.content,borderColor:_.colors.border.default,borderRadius:I,borderWidth:1,color:t?_.colors.text.muted:_.colors.text.default,minHeight:S,paddingLeft:P,paddingRight:T,width:"100%"},y,n?{borderColor:_.colors.border.danger}:{},p?{minHeight:p*S,paddingVertical:16}:{},x&&{paddingLeft:40},j&&{paddingRight:40}),d],editable:!t,placeholderTextColor:O||_.colors.text.muted,name:f,numberOfLines:p,textContentType:f,onChangeText:function(e){o(e),s(e)}},v,{__source:{fileName:g,lineNumber:227}}))},_=function(e){var t=e.children,n=e.style,a=Object(i.a)(e,["children","style"]);return l.createElement(p.a,Object(r.a)({style:[{alignItems:"center",display:"flex",height:"100%",justifyContent:"center",left:0,paddingHorizontal:8,position:"absolute",zIndex:1},n]},a,{__source:{fileName:g,lineNumber:276}}),t)},h=function(e){var t=e.children,n=e.style,a=Object(i.a)(e,["children","style"]);return l.createElement(p.a,Object(r.a)({style:[{alignItems:"center",display:"flex",height:"100%",justifyContent:"center",paddingHorizontal:8,position:"absolute",right:0,zIndex:1},n]},a,{__source:{fileName:g,lineNumber:303}}),t)},I=function(e){return l.createElement(l.Fragment,null)},S=function(e){var t=e.isClearable,n=e.onClear,r=e.onValueChange,a=e.onChangeText,o=e.value,i=Object(b.b)();return o&&t?l.createElement(d.a,{onPress:function(){a(""),r(""),n()},__source:{fileName:g,lineNumber:343}},l.createElement(x.a,{name:"x",color:i.colors.text.default,__source:{fileName:g,lineNumber:350}})):null}},"./src/utils/ControlSize.ts":function(e,t,n){"use strict";n.d(t,"a",function(){return r});var r=function(e){return"number"!==typeof e};"undefined"!==typeof r&&r&&r===Object(r)&&Object.isExtensible(r)&&Object.defineProperty(r,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"isControlSize",filename:"src/utils/ControlSize.ts"}})}}]);
//# sourceMappingURL=12.e8e6d58e83774cf9e62e.js.map