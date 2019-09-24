(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"./src/components/Checkbox/Checkbox.mdx":function(e,t,o){"use strict";o.r(t),o.d(t,"default",function(){return d});var l=o("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),r=o("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/extends.js"),n=(o("./node_modules/react/index.js"),o("./node_modules/@mdx-js/react/dist/index.es.js")),s=o("./node_modules/docz/dist/index.esm.js"),i=o("./src/components/Checkbox/Checkbox.tsx"),a=o("./src/components/Form/FormField.tsx"),c=o("./src/components/Helpers/Toggle.tsx"),b="/home/travis/build/WeTrustPlatform/paramount/src/components/Checkbox/Checkbox.mdx",m={},u="wrapper";function d(e){var t=e.components,o=Object(l.a)(e,["components"]);return Object(n.b)(u,Object(r.a)({},m,o,{components:t,mdxType:"MDXLayout",__source:{fileName:b,lineNumber:21}}),Object(n.b)("h1",Object(r.a)({id:"checkbox"},{__source:{fileName:b,lineNumber:23}}),"Checkbox"),Object(n.b)("p",{__source:{fileName:b,lineNumber:26}},"Checkbox for boolean values"),Object(n.b)("h2",Object(r.a)({id:"usage"},{__source:{fileName:b,lineNumber:27}}),"Usage"),Object(n.b)(s.c,{__position:0,__code:'<Toggle initial={false}>\n  {({ on, toggle }) => (\n    <FormField label="Checkbox" labelPosition="right">\n      <Checkbox shape="circle" value={on} onPress={toggle} size="medium" />\n    </FormField>\n  )}\n</Toggle>',__scope:{props:this?this.props:o,Playground:s.c,Props:s.d,Checkbox:i.a,FormField:a.a,Toggle:c.a},mdxType:"Playground",__source:{fileName:b,lineNumber:30}},Object(n.b)(c.a,{initial:!1,mdxType:"Toggle",__source:{fileName:b,lineNumber:38}},function(e){var t=e.on,o=e.toggle;return Object(n.b)(a.a,{label:"Checkbox",labelPosition:"right",mdxType:"FormField",__source:{fileName:b,lineNumber:42}},Object(n.b)(i.a,{shape:"circle",value:t,onPress:o,size:"medium",mdxType:"Checkbox",__source:{fileName:b,lineNumber:43}}))})),Object(n.b)("h2",Object(r.a)({id:"props"},{__source:{fileName:b,lineNumber:47}}),"Props"),Object(n.b)(s.d,{of:i.a,mdxType:"Props",__source:{fileName:b,lineNumber:50}}),Object(n.b)("h2",Object(r.a)({id:"customization"},{__source:{fileName:b,lineNumber:51}}),"Customization"),Object(n.b)("p",{__source:{fileName:b,lineNumber:54}},"Using ",Object(n.b)("inlineCode",{parentName:"p",__source:{fileName:b,lineNumber:54}},"getStyles")," prop"),Object(n.b)("pre",{__source:{fileName:b,lineNumber:55}},Object(n.b)("code",Object(r.a)({parentName:"pre"},{},{__source:{fileName:b,lineNumber:55}}),"CheckboxStyles {\n  touchableStyle: ViewStyle;\n  checkboxStyle: ViewStyle;\n  checkColor: string;\n}\n\ngetStyles={(CheckboxProps, Theme) => CheckboxStyles}\n")),Object(n.b)("p",{__source:{fileName:b,lineNumber:63}},"Markup"),Object(n.b)("pre",{__source:{fileName:b,lineNumber:64}},Object(n.b)("code",Object(r.a)({parentName:"pre"},{className:"language-tsx"},{__source:{fileName:b,lineNumber:64}}),"<TouchableOpacity touchableStyle>\n  <View checkboxStyle>{icon}</View>\n</TouchableOpacity>\n")))}d&&d===Object(d)&&Object.isExtensible(d)&&Object.defineProperty(d,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src/components/Checkbox/Checkbox.mdx"}}),d.isMDXComponent=!0},"./src/components/Checkbox/Checkbox.tsx":function(e,t,o){"use strict";var l=o("./node_modules/react/index.js"),r=o("./node_modules/react-native-web/dist/exports/TouchableOpacity/index.js"),n=o("./node_modules/react-native-web/dist/exports/View/index.js"),s=o("./src/theme/Theme.tsx"),i=o("./src/utils/mergeStyles.ts"),a=o("./src/components/Icon/Icon.web.tsx"),c=o("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread.js"),b=o("./src/utils/isControlSize.ts");"undefined"!==typeof CheckboxStyles&&CheckboxStyles&&CheckboxStyles===Object(CheckboxStyles)&&Object.isExtensible(CheckboxStyles)&&Object.defineProperty(CheckboxStyles,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"CheckboxStyles",filename:"src/components/Checkbox/Checkbox.styles.ts"}}),"undefined"!==typeof GetCheckboxStyles&&GetCheckboxStyles&&GetCheckboxStyles===Object(GetCheckboxStyles)&&Object.isExtensible(GetCheckboxStyles)&&Object.defineProperty(GetCheckboxStyles,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"GetCheckboxStyles",filename:"src/components/Checkbox/Checkbox.styles.ts"}});var m=function(e,t){var o=e.value,l=e.isDisabled,r=e.shape,n=void 0===r?"rounded":r,s=e.size,i=void 0===s?"medium":s,a=Object(b.a)(i)?t.controlHeights[i]-16:i;return{checkColor:t.colors.text.white,checkboxStyle:Object(c.a)({alignItems:"center",backgroundColor:t.colors.background.content,borderColor:t.colors.border.default,borderWidth:1,height:a,justifyContent:"center",width:a},o?{backgroundColor:t.colors.background.primaryDefault,borderColor:"transparent"}:{},l?{backgroundColor:t.colors.background.greyDark,borderColor:t.colors.border.default}:{},t.containerShapes[n]),touchableStyle:t.containerShapes[n]}};m&&m===Object(m)&&Object.isExtensible(m)&&Object.defineProperty(m,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"getCheckboxStyles",filename:"src/components/Checkbox/Checkbox.styles.ts"}}),o.d(t,"a",function(){return d});var u="/home/travis/build/WeTrustPlatform/paramount/src/components/Checkbox/Checkbox.tsx";"undefined"!==typeof CheckboxProps&&CheckboxProps&&CheckboxProps===Object(CheckboxProps)&&Object.isExtensible(CheckboxProps)&&Object.defineProperty(CheckboxProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"CheckboxProps",filename:"src/components/Checkbox/Checkbox.tsx"}});var d=function(e){var t=e.value,o=void 0!==t&&t,c=e.isDisabled,b=void 0!==c&&c,d=e.isInteractive,p=void 0===d||d,f=e.onPress,y=e.getStyles,x=e.testID,g=e.accessibilityLabel,h=Object(s.b)(),_=Object(i.a)(m,y,h.components.getCheckboxStyles)(e,h),j=_.touchableStyle,O=_.checkboxStyle,S=_.checkColor;return l.createElement(r.a,{accessible:p,style:j,disabled:b||!p,testID:x,onPress:f,accessibilityLabel:g,__source:{fileName:u,lineNumber:75}},l.createElement(n.a,{style:O,__source:{fileName:u,lineNumber:83}},o?l.createElement(a.a,{name:"check",size:"xsmall",color:S,__source:{fileName:u,lineNumber:84}}):null))};"undefined"!==typeof d&&d&&d===Object(d)&&Object.isExtensible(d)&&Object.defineProperty(d,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Checkbox",filename:"src/components/Checkbox/Checkbox.tsx"}})},"./src/components/Form/FormField.tsx":function(e,t,o){"use strict";var l=o("./node_modules/react/index.js"),r=o("./node_modules/react-native-web/dist/exports/View/index.js"),n=o("./src/theme/Theme.tsx"),s=o("./src/utils/mergeStyles.ts"),i=o("./src/components/Typography/Label.tsx"),a=o("./src/components/Typography/Text.tsx");"undefined"!==typeof FormFieldStyles&&FormFieldStyles&&FormFieldStyles===Object(FormFieldStyles)&&Object.isExtensible(FormFieldStyles)&&Object.defineProperty(FormFieldStyles,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"FormFieldStyles",filename:"src/components/Form/FormField.styles.tsx"}}),"undefined"!==typeof GetFormFieldStyles&&GetFormFieldStyles&&GetFormFieldStyles===Object(GetFormFieldStyles)&&Object.isExtensible(GetFormFieldStyles)&&Object.defineProperty(GetFormFieldStyles,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"GetFormFieldStyles",filename:"src/components/Form/FormField.styles.tsx"}});var c=function(e,t){var o={},l={};switch(e.labelPosition){case"left":o={paddingRight:8},l={flexDirection:"row",alignItems:"center"};break;case"right":o={paddingLeft:8},l={flexDirection:"row",alignItems:"center"};break;default:o={paddingBottom:4},l={paddingBottom:4}}return{containerStyles:{},descriptionTextStyle:{paddingBottom:4},errorTextStyle:{},errorWrapperStyle:{},labelTextStyle:{},labelWrapperStyle:o,wrapperStyle:l}};c&&c===Object(c)&&Object.isExtensible(c)&&Object.defineProperty(c,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"getFormFieldStyles",filename:"src/components/Form/FormField.styles.tsx"}}),o.d(t,"a",function(){return m});var b="/home/travis/build/WeTrustPlatform/paramount/src/components/Form/FormField.tsx";"undefined"!==typeof FormFieldLabelPosition&&FormFieldLabelPosition&&FormFieldLabelPosition===Object(FormFieldLabelPosition)&&Object.isExtensible(FormFieldLabelPosition)&&Object.defineProperty(FormFieldLabelPosition,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"FormFieldLabelPosition",filename:"src/components/Form/FormField.tsx"}}),"undefined"!==typeof FormFieldProps&&FormFieldProps&&FormFieldProps===Object(FormFieldProps)&&Object.isExtensible(FormFieldProps)&&Object.defineProperty(FormFieldProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"FormFieldProps",filename:"src/components/Form/FormField.tsx"}});var m=function(e){var t=e.label,o=e.error,m=e.children,u=e.description,d=e.labelPosition,p=void 0===d?"top":d,f=e.getStyles,y=Object(n.b)(),x=Object(s.a)(c,f,y.components.getFormFieldStyles)(e,y),g=x.containerStyles,h=x.descriptionTextStyle,_=x.errorTextStyle,j=x.errorWrapperStyle,O=x.labelTextStyle,S=x.labelWrapperStyle,F=x.wrapperStyle,P=l.createElement(r.a,{style:S,__source:{fileName:b,lineNumber:66}},l.createElement(i.a,{getStyles:function(){return{labelStyle:O}},__source:{fileName:b,lineNumber:67}},t));return l.createElement(r.a,{style:g,__source:{fileName:b,lineNumber:72}},t&&"top"===p&&P,l.createElement(r.a,{style:F,__source:{fileName:b,lineNumber:74}},t&&"left"===p&&P,m,t&&"right"===p&&P),u&&l.createElement(a.a,{color:"muted",getStyles:function(){return{textStyle:h}},__source:{fileName:b,lineNumber:80}},u),o&&l.createElement(r.a,{style:j,__source:{fileName:b,lineNumber:88}},l.createElement(a.a,{color:"danger",getStyles:function(){return{textStyle:_}},__source:{fileName:b,lineNumber:89}},o)))};"undefined"!==typeof m&&m&&m===Object(m)&&Object.isExtensible(m)&&Object.defineProperty(m,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"FormField",filename:"src/components/Form/FormField.tsx"}})},"./src/components/Helpers/Toggle.tsx":function(e,t,o){"use strict";o.d(t,"a",function(){return s});var l=o("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),r=o("./node_modules/react/index.js"),n=o.n(r);"undefined"!==typeof ToggleRenderProps&&ToggleRenderProps&&ToggleRenderProps===Object(ToggleRenderProps)&&Object.isExtensible(ToggleRenderProps)&&Object.defineProperty(ToggleRenderProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ToggleRenderProps",filename:"src/components/Helpers/Toggle.tsx"}}),"undefined"!==typeof ToggleProps&&ToggleProps&&ToggleProps===Object(ToggleProps)&&Object.isExtensible(ToggleProps)&&Object.defineProperty(ToggleProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ToggleProps",filename:"src/components/Helpers/Toggle.tsx"}});var s=function(e){var t=e.children,o=e.initial,r=void 0!==o&&o,s=n.a.useState(r),i=Object(l.a)(s,2),a=i[0],c=i[1],b=n.a.useCallback(function(){c(!a)},[a]),m=n.a.useCallback(function(e){c(e)},[]);return t({on:a,toggle:b,set:m})};"undefined"!==typeof s&&s&&s===Object(s)&&Object.isExtensible(s)&&Object.defineProperty(s,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Toggle",filename:"src/components/Helpers/Toggle.tsx"}})},"./src/components/Typography/Label.tsx":function(e,t,o){"use strict";var l=o("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/extends.js"),r=o("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),n=o("./node_modules/react/index.js"),s=o("./node_modules/react-native-web/dist/exports/Platform/index.js"),i=o("./src/theme/Theme.tsx"),a=o("./src/utils/mergeStyles.ts"),c=o("./src/components/Typography/Text.styles.ts");"undefined"!==typeof LabelStyles&&LabelStyles&&LabelStyles===Object(LabelStyles)&&Object.isExtensible(LabelStyles)&&Object.defineProperty(LabelStyles,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"LabelStyles",filename:"src/components/Typography/Label.styles.ts"}}),"undefined"!==typeof GetLabelStyles&&GetLabelStyles&&GetLabelStyles===Object(GetLabelStyles)&&Object.isExtensible(GetLabelStyles)&&Object.defineProperty(GetLabelStyles,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"GetLabelStyles",filename:"src/components/Typography/Label.styles.ts"}});var b=function(e,t){e.getStyles;var o=Object(r.a)(e,["getStyles"]);return{labelStyle:Object(c.d)(o,t).textStyle}};b&&b===Object(b)&&Object.isExtensible(b)&&Object.defineProperty(b,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"getLabelStyles",filename:"src/components/Typography/Label.styles.ts"}});var m=o("./src/components/Typography/Text.tsx");o.d(t,"a",function(){return u});"undefined"!==typeof LabelProps&&LabelProps&&LabelProps===Object(LabelProps)&&Object.isExtensible(LabelProps)&&Object.defineProperty(LabelProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"LabelProps",filename:"src/components/Typography/Label.tsx"}});var u=function(e){var t=e.children,o=e.getStyles,c=Object(r.a)(e,["children","getStyles"]),u=Object(i.b)(),d=Object(a.a)(b,o,u.components.getLabelStyles)(e,u).labelStyle;return n.createElement(m.a,Object(l.a)({accessibilityRole:"web"===s.a.OS?"label":"none",getStyles:function(){return{textStyle:d}}},c,{__source:{fileName:"/home/travis/build/WeTrustPlatform/paramount/src/components/Typography/Label.tsx",lineNumber:27}}),t)};"undefined"!==typeof u&&u&&u===Object(u)&&Object.isExtensible(u)&&Object.defineProperty(u,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Label",filename:"src/components/Typography/Label.tsx"}})},"./src/utils/isControlSize.ts":function(e,t,o){"use strict";o.d(t,"a",function(){return l});var l=function(e){return"number"!==typeof e};"undefined"!==typeof l&&l&&l===Object(l)&&Object.isExtensible(l)&&Object.defineProperty(l,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"isControlSize",filename:"src/utils/isControlSize.ts"}})}}]);
//# sourceMappingURL=9.a52789c07fb13fb9a33f.js.map