(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{"./src/components/Helpers/State.tsx":function(e,t,a){"use strict";a.d(t,"a",function(){return n});var r=a("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),l=a("./node_modules/react/index.js"),i=a.n(l);"undefined"!==typeof StateRenderProps&&StateRenderProps&&StateRenderProps===Object(StateRenderProps)&&Object.isExtensible(StateRenderProps)&&Object.defineProperty(StateRenderProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"StateRenderProps",filename:"src/components/Helpers/State.tsx"}}),"undefined"!==typeof StateProps&&StateProps&&StateProps===Object(StateProps)&&Object.isExtensible(StateProps)&&Object.defineProperty(StateProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"StateProps",filename:"src/components/Helpers/State.tsx"}});var n=function(e){var t=e.children,a=e.initial,l=void 0!==a&&a,n=i.a.useState(l),s=Object(r.a)(n,2),o=s[0],c=s[1];return t({state:o,setState:i.a.useCallback(function(e){c(e)},[])})};"undefined"!==typeof n&&n&&n===Object(n)&&Object.isExtensible(n)&&Object.defineProperty(n,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"State",filename:"src/components/Helpers/State.tsx"}})},"./src/components/Pickers/NativePicker.mdx":function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return m});var r=a("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),l=a("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/extends.js"),i=(a("./node_modules/react/index.js"),a("./node_modules/@mdx-js/react/dist/index.es.js")),n=a("./node_modules/docz/dist/index.esm.js"),s=a("./src/components/Pickers/NativePicker.tsx"),o=a("./src/components/Helpers/State.tsx"),c="/home/travis/build/WeTrustPlatform/paramount/src/components/Pickers/NativePicker.mdx",u={},b="wrapper";function m(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)(b,Object(l.a)({},u,a,{components:t,mdxType:"MDXLayout",__source:{fileName:c,lineNumber:21}}),Object(i.b)("h1",Object(l.a)({id:"nativepicker"},{__source:{fileName:c,lineNumber:24}}),"NativePicker"),Object(i.b)("h2",Object(l.a)({id:"usage"},{__source:{fileName:c,lineNumber:27}}),"Usage"),Object(i.b)("p",{__source:{fileName:c,lineNumber:30}},"Composes React Native's ",Object(i.b)("inlineCode",{parentName:"p",__source:{fileName:c,lineNumber:30}},"Picker")),Object(i.b)(n.c,{__position:0,__code:"<State initial={{ value: 'js' }}>\n  {({ state, setState }) => (\n    <NativePicker\n      value={state.value}\n      onValueChange={(itemValue, itemIndex) => setState({ value: itemValue })}\n      size=\"large\"\n      options={[\n        { label: 'C', value: 'c' },\n        { label: 'C#', value: 'c#' },\n        { label: 'C++', value: 'c++' },\n        { label: 'CSS', value: 'css' },\n        { label: 'Elixir', value: 'elixir' },\n        { label: 'Elm', value: 'elm' },\n        { label: 'Erlang', value: 'erlang' },\n        { label: 'Go', value: 'go' },\n        { label: 'Haskell', value: 'haskell' },\n        { label: 'HTML', value: 'html' },\n        { label: 'Java', value: 'java' },\n        { label: 'JavaScript', value: 'js' },\n        { label: 'Lua', value: 'lua' },\n        { label: 'Python', value: 'python' },\n        { label: 'R', value: 'r' },\n        { label: 'Ruby', value: 'ruby' },\n        { label: 'Rust', value: 'rust' },\n        { label: 'Switft', value: 'swift' },\n        { label: 'Typescript', value: 'typescript' },\n      ]}\n    />\n  )}\n</State>",__scope:{props:this?this.props:a,Playground:n.c,Props:n.d,NativePicker:s.a,State:o.a},mdxType:"Playground",__source:{fileName:c,lineNumber:31}},Object(i.b)(o.a,{initial:{value:"js"},mdxType:"State",__source:{fileName:c,lineNumber:38}},function(e){var t=e.state,a=e.setState;return Object(i.b)(s.a,{value:t.value,onValueChange:function(e,t){return a({value:e})},size:"large",options:[{label:"C",value:"c"},{label:"C#",value:"c#"},{label:"C++",value:"c++"},{label:"CSS",value:"css"},{label:"Elixir",value:"elixir"},{label:"Elm",value:"elm"},{label:"Erlang",value:"erlang"},{label:"Go",value:"go"},{label:"Haskell",value:"haskell"},{label:"HTML",value:"html"},{label:"Java",value:"java"},{label:"JavaScript",value:"js"},{label:"Lua",value:"lua"},{label:"Python",value:"python"},{label:"R",value:"r"},{label:"Ruby",value:"ruby"},{label:"Rust",value:"rust"},{label:"Switft",value:"swift"},{label:"Typescript",value:"typescript"}],mdxType:"NativePicker",__source:{fileName:c,lineNumber:44}})})),Object(i.b)("h2",Object(l.a)({id:"nativepicker-props"},{__source:{fileName:c,lineNumber:106}}),"NativePicker Props"),Object(i.b)("p",{__source:{fileName:c,lineNumber:109}},"Extends native ",Object(i.b)("inlineCode",{parentName:"p",__source:{fileName:c,lineNumber:109}},"Picker")),Object(i.b)(n.d,{of:s.a,mdxType:"Props",__source:{fileName:c,lineNumber:110}}))}m&&m===Object(m)&&Object.isExtensible(m)&&Object.defineProperty(m,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src/components/Pickers/NativePicker.mdx"}}),m.isMDXComponent=!0},"./src/components/Pickers/NativePicker.tsx":function(e,t,a){"use strict";a.d(t,"a",function(){return v});var r=a("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread.js"),l=a("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),i=a("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/extends.js"),n=a("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),s=a("./node_modules/dlv/dist/dlv.umd.js"),o=a.n(s),c=a("./node_modules/react/index.js"),u=a("./node_modules/react-native-web/dist/exports/Picker/index.js"),b=a("./src/theme/Theme.tsx"),m=a("./src/utils/isControlSize.ts"),d=a("./src/utils/overrides.ts"),p="/home/travis/build/WeTrustPlatform/paramount/src/components/Pickers/NativePicker.tsx";"undefined"!==typeof NativePickerOption&&NativePickerOption&&NativePickerOption===Object(NativePickerOption)&&Object.isExtensible(NativePickerOption)&&Object.defineProperty(NativePickerOption,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"NativePickerOption",filename:"src/components/Pickers/NativePicker.tsx"}}),"undefined"!==typeof NativePickerOverrides&&NativePickerOverrides&&NativePickerOverrides===Object(NativePickerOverrides)&&Object.isExtensible(NativePickerOverrides)&&Object.defineProperty(NativePickerOverrides,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"NativePickerOverrides",filename:"src/components/Pickers/NativePicker.tsx"}}),"undefined"!==typeof NativePickerProps&&NativePickerProps&&NativePickerProps===Object(NativePickerProps)&&Object.isExtensible(NativePickerProps)&&Object.defineProperty(NativePickerProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"NativePickerProps",filename:"src/components/Pickers/NativePicker.tsx"}});var v=function(e){var t=e.size,a=void 0===t?"medium":t,r=e.options,l=void 0===r?[]:r,s=e.value,m=e.testID,v=e.onValueChange,P=e.overrides,j=void 0===P?{}:P,_=Object(b.b)(),N=Object(d.a)(f,e,o()(_,"overrides.NativePicker.Picker"),j.Picker),O=Object(n.a)(N,2),k=O[0],x=O[1];return c.createElement(k,Object(i.a)({selectedValue:s,testID:m,size:a,onValueChange:v},x,{__source:{fileName:p,lineNumber:70}}),l.map(function(e){return c.createElement(u.a.Item,{key:"".concat(e.value),value:e.value,label:e.label,__source:{fileName:p,lineNumber:78}})}))};"undefined"!==typeof v&&v&&v===Object(v)&&Object.isExtensible(v)&&Object.defineProperty(v,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"NativePicker",filename:"src/components/Pickers/NativePicker.tsx"}});var f=function(e){var t=e.size,a=e.children,n=e.itemStyle,s=e.style,o=Object(l.a)(e,["size","children","itemStyle","style"]),d=Object(b.b)(),v=Object(m.a)(t)?{small:{borderRadius:d.controlBorderRadius.small,height:d.controlHeights.small},medium:{borderRadius:d.controlBorderRadius.medium,height:d.controlHeights.medium},large:{borderRadius:d.controlBorderRadius.large,height:d.controlHeights.large}}[t]:{borderRadius:d.controlBorderRadius.medium,height:t},f=Object(m.a)(t)?d.textSizes[t]:d.textSizes.medium;return c.createElement(u.a,Object(i.a)({itemStyle:[Object(r.a)({},f,v),n],style:[Object(r.a)({backgroundColor:"transparent",borderColor:d.colors.border.default,borderWidth:1,width:"100%",color:d.colors.text.default},v),s]},o,{__source:{fileName:p,lineNumber:124}}),a)}},"./src/utils/isControlSize.ts":function(e,t,a){"use strict";a.d(t,"a",function(){return r});var r=function(e){return"number"!==typeof e};"undefined"!==typeof r&&r&&r===Object(r)&&Object.isExtensible(r)&&Object.defineProperty(r,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"isControlSize",filename:"src/utils/isControlSize.ts"}})}}]);
//# sourceMappingURL=27.b00e7a1f0342f715624d.js.map