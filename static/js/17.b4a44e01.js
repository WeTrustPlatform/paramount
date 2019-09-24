(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{"./src/components/Helpers/State.tsx":function(e,t,r){"use strict";r.d(t,"a",function(){return l});var a=r("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),i=r("./node_modules/react/index.js"),n=r.n(i);"undefined"!==typeof StateRenderProps&&StateRenderProps&&StateRenderProps===Object(StateRenderProps)&&Object.isExtensible(StateRenderProps)&&Object.defineProperty(StateRenderProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"StateRenderProps",filename:"src/components/Helpers/State.tsx"}}),"undefined"!==typeof StateProps&&StateProps&&StateProps===Object(StateProps)&&Object.isExtensible(StateProps)&&Object.defineProperty(StateProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"StateProps",filename:"src/components/Helpers/State.tsx"}});var l=function(e){var t=e.children,r=e.initial,i=void 0!==r&&r,l=n.a.useState(i),s=Object(a.a)(l,2),o=s[0],c=s[1];return t({state:o,setState:n.a.useCallback(function(e){c(e)},[])})};"undefined"!==typeof l&&l&&l===Object(l)&&Object.isExtensible(l)&&Object.defineProperty(l,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"State",filename:"src/components/Helpers/State.tsx"}})},"./src/components/Pickers/NativePicker.mdx":function(e,t,r){"use strict";r.r(t),r.d(t,"default",function(){return m});var a=r("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),i=r("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/extends.js"),n=(r("./node_modules/react/index.js"),r("./node_modules/@mdx-js/react/dist/index.es.js")),l=r("./node_modules/docz/dist/index.esm.js"),s=r("./src/components/Pickers/NativePicker.tsx"),o=r("./src/components/Helpers/State.tsx"),c="/home/travis/build/WeTrustPlatform/paramount/src/components/Pickers/NativePicker.mdx",u={},b="wrapper";function m(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(n.b)(b,Object(i.a)({},u,r,{components:t,mdxType:"MDXLayout",__source:{fileName:c,lineNumber:21}}),Object(n.b)("h1",Object(i.a)({id:"nativepicker"},{__source:{fileName:c,lineNumber:24}}),"NativePicker"),Object(n.b)("h2",Object(i.a)({id:"usage"},{__source:{fileName:c,lineNumber:27}}),"Usage"),Object(n.b)("p",{__source:{fileName:c,lineNumber:30}},"Composes React Native's ",Object(n.b)("inlineCode",{parentName:"p",__source:{fileName:c,lineNumber:30}},"Picker")),Object(n.b)(l.c,{__position:0,__code:"<State initial={{ value: 'js' }}>\n  {({ state, setState }) => (\n    <NativePicker\n      selectedValue={state.value}\n      onValueChange={(itemValue, itemIndex) => setState({ value: itemValue })}\n      size=\"large\"\n      options={[\n        { label: 'C', value: 'c' },\n        { label: 'C#', value: 'c#' },\n        { label: 'C++', value: 'c++' },\n        { label: 'CSS', value: 'css' },\n        { label: 'Elixir', value: 'elixir' },\n        { label: 'Elm', value: 'elm' },\n        { label: 'Erlang', value: 'erlang' },\n        { label: 'Go', value: 'go' },\n        { label: 'Haskell', value: 'haskell' },\n        { label: 'HTML', value: 'html' },\n        { label: 'Java', value: 'java' },\n        { label: 'JavaScript', value: 'js' },\n        { label: 'Lua', value: 'lua' },\n        { label: 'Python', value: 'python' },\n        { label: 'R', value: 'r' },\n        { label: 'Ruby', value: 'ruby' },\n        { label: 'Rust', value: 'rust' },\n        { label: 'Switft', value: 'swift' },\n        { label: 'Typescript', value: 'typescript' },\n      ]}\n    />\n  )}\n</State>",__scope:{props:this?this.props:r,Playground:l.c,Props:l.d,NativePicker:s.a,State:o.a},mdxType:"Playground",__source:{fileName:c,lineNumber:31}},Object(n.b)(o.a,{initial:{value:"js"},mdxType:"State",__source:{fileName:c,lineNumber:38}},function(e){var t=e.state,r=e.setState;return Object(n.b)(s.a,{selectedValue:t.value,onValueChange:function(e,t){return r({value:e})},size:"large",options:[{label:"C",value:"c"},{label:"C#",value:"c#"},{label:"C++",value:"c++"},{label:"CSS",value:"css"},{label:"Elixir",value:"elixir"},{label:"Elm",value:"elm"},{label:"Erlang",value:"erlang"},{label:"Go",value:"go"},{label:"Haskell",value:"haskell"},{label:"HTML",value:"html"},{label:"Java",value:"java"},{label:"JavaScript",value:"js"},{label:"Lua",value:"lua"},{label:"Python",value:"python"},{label:"R",value:"r"},{label:"Ruby",value:"ruby"},{label:"Rust",value:"rust"},{label:"Switft",value:"swift"},{label:"Typescript",value:"typescript"}],mdxType:"NativePicker",__source:{fileName:c,lineNumber:44}})})),Object(n.b)("h2",Object(i.a)({id:"nativepicker-props"},{__source:{fileName:c,lineNumber:106}}),"NativePicker Props"),Object(n.b)("p",{__source:{fileName:c,lineNumber:109}},"Extends native ",Object(n.b)("inlineCode",{parentName:"p",__source:{fileName:c,lineNumber:109}},"Picker")),Object(n.b)(l.d,{of:s.a,mdxType:"Props",__source:{fileName:c,lineNumber:110}}),Object(n.b)("h2",Object(i.a)({id:"customization"},{__source:{fileName:c,lineNumber:111}}),"Customization"),Object(n.b)("p",{__source:{fileName:c,lineNumber:114}},"Using ",Object(n.b)("inlineCode",{parentName:"p",__source:{fileName:c,lineNumber:114}},"getStyles")," prop"),Object(n.b)("pre",{__source:{fileName:c,lineNumber:115}},Object(n.b)("code",Object(i.a)({parentName:"pre"},{},{__source:{fileName:c,lineNumber:115}}),"NativePickerStyles {\n  containerStyle: ViewStyle;\n  rightContainerStyle: ViewStyle;\n  pickerStyle: ViewStyle;\n  itemStyle: ViewStyle;\n}\n\ngetStyles={(NativePickerProps, Theme) => NativePickerStyles}\n")),Object(n.b)("p",{__source:{fileName:c,lineNumber:124}},"Markup"),Object(n.b)("pre",{__source:{fileName:c,lineNumber:125}},Object(n.b)("code",Object(i.a)({parentName:"pre"},{className:"language-tsx"},{__source:{fileName:c,lineNumber:125}}),"<View style={containerStyle}>\n  <Picker itemStyle pickerStyle />\n  <View style={rightContainerStyle}>{icon}</View>\n</View>\n")))}m&&m===Object(m)&&Object.isExtensible(m)&&Object.defineProperty(m,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src/components/Pickers/NativePicker.mdx"}}),m.isMDXComponent=!0},"./src/components/Pickers/NativePicker.tsx":function(e,t,r){"use strict";var a=r("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/extends.js"),i=r("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),n=r("./node_modules/react/index.js"),l=r("./node_modules/react-native-web/dist/exports/Picker/index.js"),s=r("./src/theme/Theme.tsx"),o=r("./src/utils/mergeStyles.ts"),c=r("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread.js"),u=r("./src/utils/isControlSize.ts");"undefined"!==typeof PickerButtonStyles&&PickerButtonStyles&&PickerButtonStyles===Object(PickerButtonStyles)&&Object.isExtensible(PickerButtonStyles)&&Object.defineProperty(PickerButtonStyles,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"PickerButtonStyles",filename:"src/components/Pickers/PickerButton.styles.ts"}}),"undefined"!==typeof GetPickerButtonStyles&&GetPickerButtonStyles&&GetPickerButtonStyles===Object(GetPickerButtonStyles)&&Object.isExtensible(GetPickerButtonStyles)&&Object.defineProperty(GetPickerButtonStyles,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"GetPickerButtonStyles",filename:"src/components/Pickers/PickerButton.styles.ts"}});var b=function(e,t){var r=e.size,a=void 0===r?"medium":r,i=Object(u.a)(a)?{small:{borderRadius:t.controlBorderRadius.small,height:t.controlHeights.small,paddingLeft:t.controlPaddings.small,paddingRight:40},medium:{borderRadius:t.controlBorderRadius.medium,height:t.controlHeights.medium,paddingLeft:t.controlPaddings.medium,paddingRight:40},large:{borderRadius:t.controlBorderRadius.large,height:t.controlHeights.large,paddingLeft:t.controlPaddings.large,paddingRight:40}}[a]:{borderRadius:t.controlBorderRadius.medium,height:a,paddingLeft:t.controlPaddings.medium,paddingRight:40},n=Object(u.a)(a)?t.textSizes[a]:t.textSizes.medium;return{containerStyle:{backgroundColor:t.colors.background.content,position:"relative"},itemStyle:Object(c.a)({},n),pickerStyle:Object(c.a)({appearance:"none",backgroundColor:"transparent",borderColor:t.colors.border.default,borderWidth:1,color:t.colors.text.default,width:"100%"},n,i),rightContainerStyle:{alignItems:"center",display:"flex",height:"100%",justifyContent:"center",paddingHorizontal:8,position:"absolute",right:0,zIndex:-1}}};b&&b===Object(b)&&Object.isExtensible(b)&&Object.defineProperty(b,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"getPickerButtonStyles",filename:"src/components/Pickers/PickerButton.styles.ts"}});var m=r("./node_modules/react-native-web/dist/exports/View/index.js"),p=r("./src/components/Icon/Icon.web.tsx"),d="/home/travis/build/WeTrustPlatform/paramount/src/components/Pickers/PickerButtonWrapper.tsx";"undefined"!==typeof PickerButtonWrapperProps&&PickerButtonWrapperProps&&PickerButtonWrapperProps===Object(PickerButtonWrapperProps)&&Object.isExtensible(PickerButtonWrapperProps)&&Object.defineProperty(PickerButtonWrapperProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"PickerButtonWrapperProps",filename:"src/components/Pickers/PickerButtonWrapper.tsx"}});var f=function(e){var t=e.getStyles,r=e.children,a=Object(s.b)(),i=Object(o.a)(b,t,a.components.getPickerButtonStyles)(e,a),l=i.containerStyle,c=i.rightContainerStyle;return n.createElement(m.a,{style:l,__source:{fileName:d,lineNumber:41}},r,n.createElement(m.a,{style:c,__source:{fileName:d,lineNumber:43}},n.createElement(p.a,{name:"chevron-down",size:"large",color:a.colors.text.default,__source:{fileName:d,lineNumber:44}})))};f&&f===Object(f)&&Object.isExtensible(f)&&Object.defineProperty(f,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"PickerButtonWrapper",filename:"src/components/Pickers/PickerButtonWrapper.tsx"}}),r.d(t,"a",function(){return _});var P="/home/travis/build/WeTrustPlatform/paramount/src/components/Pickers/NativePicker.tsx";"undefined"!==typeof NativePickerOption&&NativePickerOption&&NativePickerOption===Object(NativePickerOption)&&Object.isExtensible(NativePickerOption)&&Object.defineProperty(NativePickerOption,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"NativePickerOption",filename:"src/components/Pickers/NativePicker.tsx"}}),"undefined"!==typeof NativePickerProps&&NativePickerProps&&NativePickerProps===Object(NativePickerProps)&&Object.isExtensible(NativePickerProps)&&Object.defineProperty(NativePickerProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"NativePickerProps",filename:"src/components/Pickers/NativePicker.tsx"}});var v=function(e){e.size;var t=e.getStyles,r=e.innerRef,c=e.options,u=Object(i.a)(e,["size","getStyles","innerRef","options"]),m=Object(s.b)(),p=Object(o.a)(b,t)(e,m),d=p.pickerStyle,v=p.itemStyle;return n.createElement(f,{getStyles:t,__source:{fileName:P,lineNumber:52}},n.createElement(l.a,Object(a.a)({ref:r,itemStyle:v,style:d},u,{__source:{fileName:P,lineNumber:53}}),c.map(function(e){return n.createElement(l.a.Item,{key:e.value,value:e.value,label:e.label,__source:{fileName:P,lineNumber:60}})})))},_=n.forwardRef(function(e,t){return n.createElement(v,Object(a.a)({},e,{innerRef:t,__source:{fileName:P,lineNumber:73}}))});"undefined"!==typeof _&&_&&_===Object(_)&&Object.isExtensible(_)&&Object.defineProperty(_,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"NativePicker",filename:"src/components/Pickers/NativePicker.tsx"}})},"./src/utils/isControlSize.ts":function(e,t,r){"use strict";r.d(t,"a",function(){return a});var a=function(e){return"number"!==typeof e};"undefined"!==typeof a&&a&&a===Object(a)&&Object.isExtensible(a)&&Object.defineProperty(a,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"isControlSize",filename:"src/utils/isControlSize.ts"}})}}]);
//# sourceMappingURL=17.a52789c07fb13fb9a33f.js.map