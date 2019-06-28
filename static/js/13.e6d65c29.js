(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{"./src/components/Form/FormField.mdx":function(e,t,r){"use strict";r.r(t),r.d(t,"default",function(){return d});var n=r("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),l=r("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/extends.js"),o=(r("./node_modules/react/index.js"),r("./node_modules/@mdx-js/react/dist/index.es.js")),i=r("./node_modules/docz/dist/index.esm.js"),a=r("./src/components/Form/FormField.tsx"),s=r("./src/components/Inputs/TextInput.tsx"),c="/home/travis/build/WeTrustPlatform/paramount/src/components/Form/FormField.mdx",m={},b="wrapper";function d(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(o.b)(b,Object(l.a)({},m,r,{components:t,mdxType:"MDXLayout",__source:{fileName:c,lineNumber:21}}),Object(o.b)("h1",Object(l.a)({id:"formfield"},{__source:{fileName:c,lineNumber:24}}),"FormField"),Object(o.b)("p",{__source:{fileName:c,lineNumber:27}},"Enriches a field in a form to contain label, description or error messages."),Object(o.b)("h2",Object(l.a)({id:"usage"},{__source:{fileName:c,lineNumber:28}}),"Usage"),Object(o.b)(i.c,{__position:0,__code:'<FormField\n  label="Label"\n  description="Description for the field"\n  error="Error message"\n>\n  <TextInput />\n</FormField>',__scope:{props:this?this.props:r,Playground:i.c,Props:i.d,FormField:a.a,TextInput:s.a},mdxType:"Playground",__source:{fileName:c,lineNumber:31}},Object(o.b)(a.a,{label:"Label",description:"Description for the field",error:"Error message",mdxType:"FormField",__source:{fileName:c,lineNumber:38}},Object(o.b)(s.a,{mdxType:"TextInput",__source:{fileName:c,lineNumber:39}}))),Object(o.b)("h2",Object(l.a)({id:"props"},{__source:{fileName:c,lineNumber:42}}),"Props"),Object(o.b)(i.d,{of:a.a,mdxType:"Props",__source:{fileName:c,lineNumber:45}}),Object(o.b)("h2",Object(l.a)({id:"customization"},{__source:{fileName:c,lineNumber:46}}),"Customization"),Object(o.b)("p",{__source:{fileName:c,lineNumber:49}},"Using ",Object(o.b)("inlineCode",{parentName:"p",__source:{fileName:c,lineNumber:49}},"getStyles")," prop"),Object(o.b)("pre",{__source:{fileName:c,lineNumber:50}},Object(o.b)("code",Object(l.a)({parentName:"pre"},{className:"language-tsx"},{__source:{fileName:c,lineNumber:50}}),"FormFieldStyles {\n  containerStyles: ViewStyle;\n  descriptionTextStyle: TextStyle;\n  errorTextStyle: TextStyle;\n  errorWrapperStyle: ViewStyle;\n  labelTextStyle: TextStyle;\n  labelWrapperStyle: ViewStyle;\n  wrapperStyle: ViewStyle;\n}\n\ngetStyles={(FormFieldProps, Theme) => FormFieldStyles}\n")),Object(o.b)("p",{__source:{fileName:c,lineNumber:64}},"Markup"),Object(o.b)("pre",{__source:{fileName:c,lineNumber:65}},Object(o.b)("code",Object(l.a)({parentName:"pre"},{className:"language-tsx"},{__source:{fileName:c,lineNumber:65}}),"label = (\n  <View labelWrapperStyle>\n    <Label labelTextStyle>{label}</Label>\n  </View>\n)\n\n<View containerStyles>\n  {labelPosition === 'top' && label}\n  <View wrapperStyle>\n    {labelPosition === 'left' && label}\n    {children}\n    {labelPosition === 'right' && label}\n  </View>\n  <Text descriptionTextStyle>\n    {description}\n  </Text>\n  <View errorWrapperStyle>\n    <Text errorTextStyle>\n      {error}\n    </Text>\n  </View>\n</View>\n")))}d&&d===Object(d)&&Object.isExtensible(d)&&Object.defineProperty(d,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src/components/Form/FormField.mdx"}}),d.isMDXComponent=!0},"./src/components/Form/FormField.tsx":function(e,t,r){"use strict";var n=r("./node_modules/react/index.js"),l=r("./node_modules/react-native-web/dist/exports/View/index.js"),o=r("./src/theme/Theme.tsx"),i=r("./src/utils/mergeStyles.ts"),a=r("./src/components/Typography/Label.tsx"),s=r("./src/components/Typography/Text.tsx");"undefined"!==typeof FormFieldStyles&&FormFieldStyles&&FormFieldStyles===Object(FormFieldStyles)&&Object.isExtensible(FormFieldStyles)&&Object.defineProperty(FormFieldStyles,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"FormFieldStyles",filename:"src/components/Form/FormField.styles.tsx"}}),"undefined"!==typeof GetFormFieldStyles&&GetFormFieldStyles&&GetFormFieldStyles===Object(GetFormFieldStyles)&&Object.isExtensible(GetFormFieldStyles)&&Object.defineProperty(GetFormFieldStyles,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"GetFormFieldStyles",filename:"src/components/Form/FormField.styles.tsx"}});var c=function(e,t){var r={},n={};switch(e.labelPosition){case"left":r={paddingRight:8},n={flexDirection:"row",alignItems:"center"};break;case"right":r={paddingLeft:8},n={flexDirection:"row",alignItems:"center"};break;default:r={paddingBottom:4},n={paddingBottom:4}}return{containerStyles:{},descriptionTextStyle:{paddingBottom:4},errorTextStyle:{},errorWrapperStyle:{},labelTextStyle:{},labelWrapperStyle:r,wrapperStyle:n}};c&&c===Object(c)&&Object.isExtensible(c)&&Object.defineProperty(c,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"getFormFieldStyles",filename:"src/components/Form/FormField.styles.tsx"}}),r.d(t,"a",function(){return b});var m="/home/travis/build/WeTrustPlatform/paramount/src/components/Form/FormField.tsx";"undefined"!==typeof FormFieldLabelPosition&&FormFieldLabelPosition&&FormFieldLabelPosition===Object(FormFieldLabelPosition)&&Object.isExtensible(FormFieldLabelPosition)&&Object.defineProperty(FormFieldLabelPosition,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"FormFieldLabelPosition",filename:"src/components/Form/FormField.tsx"}}),"undefined"!==typeof FormFieldProps&&FormFieldProps&&FormFieldProps===Object(FormFieldProps)&&Object.isExtensible(FormFieldProps)&&Object.defineProperty(FormFieldProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"FormFieldProps",filename:"src/components/Form/FormField.tsx"}});var b=function(e){var t=e.label,r=e.error,b=e.children,d=e.description,u=e.labelPosition,f=void 0===u?"top":u,p=e.getStyles,y=Object(o.a)(),g=Object(i.a)(c,p,y.components.getFormFieldStyles)(e,y),h=g.containerStyles,x=g.descriptionTextStyle,j=g.errorTextStyle,O=g.errorWrapperStyle,T=g.labelTextStyle,_=g.labelWrapperStyle,S=g.wrapperStyle,F=n.createElement(l.a,{style:_,__source:{fileName:m,lineNumber:74}},n.createElement(a.a,{getStyles:function(){return{labelStyle:T}},__source:{fileName:m,lineNumber:75}},t));return n.createElement(l.a,{style:h,__source:{fileName:m,lineNumber:80}},t&&"top"===f&&F,n.createElement(l.a,{style:S,__source:{fileName:m,lineNumber:82}},t&&"left"===f&&F,b,t&&"right"===f&&F),d&&n.createElement(s.a,{color:"muted",getStyles:function(){return{textStyle:x}},__source:{fileName:m,lineNumber:88}},d),r&&n.createElement(l.a,{style:O,__source:{fileName:m,lineNumber:96}},n.createElement(s.a,{color:"danger",getStyles:function(){return{textStyle:j}},__source:{fileName:m,lineNumber:97}},r)))};"undefined"!==typeof b&&b&&b===Object(b)&&Object.isExtensible(b)&&Object.defineProperty(b,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"FormField",filename:"src/components/Form/FormField.tsx"}})},"./src/components/Icon/Icon.web.tsx":function(e,t,r){"use strict";r.d(t,"a",function(){return a});var n=r("./node_modules/react/index.js"),l=r("./node_modules/react-icons/fi/index.esm.js"),o=r("./src/theme/Theme.tsx"),i=r("./src/components/Typography/Text.styles.ts");var a=function(e){var t=e.name,r=e.color,a=e.size,s=void 0===a?24:a,c=Object(o.a)(),m=l["Fi".concat(function(e){var t=e.replace(/(\-\w)/g,function(e){return e[1].toUpperCase()});return t.charAt(0).toUpperCase()+t.slice(1)}(t))];return n.createElement(m,{color:r?Object(i.b)(c.colors.text)(r):r,size:s,__source:{fileName:"/home/travis/build/WeTrustPlatform/paramount/src/components/Icon/Icon.web.tsx",lineNumber:23}})};"undefined"!==typeof a&&a&&a===Object(a)&&Object.isExtensible(a)&&Object.defineProperty(a,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Icon",filename:"src/components/Icon/Icon.web.tsx"}})},"./src/components/Inputs/TextInput.tsx":function(e,t,r){"use strict";var n=r("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/extends.js"),l=r("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),o=r("./node_modules/react/index.js"),i=r("./node_modules/react-native-web/dist/exports/TextInput/index.js"),a=r("./node_modules/react-native-web/dist/exports/TouchableOpacity/index.js"),s=r("./node_modules/react-native-web/dist/exports/View/index.js"),c=r("./src/theme/Theme.tsx"),m=r("./src/utils/mergeStyles.ts"),b=r("./src/components/Icon/Icon.web.tsx"),d=r("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread.js");"undefined"!==typeof TextInputStyles&&TextInputStyles&&TextInputStyles===Object(TextInputStyles)&&Object.isExtensible(TextInputStyles)&&Object.defineProperty(TextInputStyles,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"TextInputStyles",filename:"src/components/Inputs/TextInput.styles.ts"}}),"undefined"!==typeof GetTextInputStyles&&GetTextInputStyles&&GetTextInputStyles===Object(GetTextInputStyles)&&Object.isExtensible(GetTextInputStyles)&&Object.defineProperty(GetTextInputStyles,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"GetTextInputStyles",filename:"src/components/Inputs/TextInput.styles.ts"}});var u=function(e,t){var r=e.size,n=void 0===r?"medium":r,l=e.isClearable,o=void 0!==l&&l,i=e.isDisabled,a=void 0!==i&&i,s=e.isInvalid,c=void 0!==s&&s,m=e.numberOfLines,b=!!e.leftIcon,u=!(!e.rightIcon&&!o),f=t.controlHeights[n];return{containerStyle:{position:"relative"},inputStyle:Object(d.a)({backgroundColor:t.colors.background.content,borderColor:t.colors.border.default,borderRadius:t.controlBorderRadius[n],borderWidth:1,color:t.colors.text.default,height:t.controlHeights[n],paddingLeft:t.controlPaddings[n],paddingRight:t.controlPaddings[n],width:"100%"},t.textSizes[n],a?{backgroundColor:t.colors.background.greyDark}:{},c?{borderColor:t.colors.border.danger}:{},m?{height:m*f,paddingVertical:16}:{},b&&{paddingLeft:40},u&&{paddingRight:40}),leftContainerStyle:{alignItems:"center",display:"flex",height:"100%",justifyContent:"center",left:0,paddingHorizontal:8,position:"absolute",zIndex:1},placeholderTextColor:t.colors.text.muted,rightContainerStyle:{alignItems:"center",display:"flex",height:"100%",justifyContent:"center",paddingHorizontal:8,position:"absolute",right:0,zIndex:1}}};u&&u===Object(u)&&Object.isExtensible(u)&&Object.defineProperty(u,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"getTextInputStyles",filename:"src/components/Inputs/TextInput.styles.ts"}}),r.d(t,"a",function(){return y});var f="/home/travis/build/WeTrustPlatform/paramount/src/components/Inputs/TextInput.tsx";"undefined"!==typeof TextInputProps&&TextInputProps&&TextInputProps===Object(TextInputProps)&&Object.isExtensible(TextInputProps)&&Object.defineProperty(TextInputProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"TextInputProps",filename:"src/components/Inputs/TextInput.tsx"}});var p=function(e){var t=e.getStyles,r=e.innerRef,d=e.isClearable,p=void 0!==d&&d,y=e.isDisabled,g=void 0!==y&&y,h=(e.isInvalid,e.leftIcon),x=e.onClear,j=void 0===x?function(){}:x,O=e.rightIcon,T=(e.size,e.value),_=e.textContentType,S=e.onChangeText,F=void 0===S?function(){}:S,v=e.placeholderTextColor,P=Object(l.a)(e,["getStyles","innerRef","isClearable","isDisabled","isInvalid","leftIcon","onClear","rightIcon","size","value","textContentType","onChangeText","placeholderTextColor"]),C=Object(c.a)(),E=Object(m.a)(u,t)(e,C),w=E.inputStyle,k=E.placeholderTextColor,z=E.containerStyle,N=E.leftContainerStyle,I=E.rightContainerStyle;return o.createElement(s.a,{style:z,__source:{fileName:f,lineNumber:100}},h&&o.createElement(s.a,{style:N,__source:{fileName:f,lineNumber:101}},h),o.createElement(i.a,Object(n.a)({ref:r,style:w,editable:!g,placeholderTextColor:v||k,name:_,value:T,onChangeText:F,textContentType:_},P,{__source:{fileName:f,lineNumber:104}})),(T&&p||O)&&o.createElement(s.a,{style:I,__source:{fileName:f,lineNumber:116}},T&&p?o.createElement(a.a,{onPress:function(){F(""),j()},__source:{fileName:f,lineNumber:118}},o.createElement(b.a,{name:"x",size:24,color:C.colors.text.default,__source:{fileName:f,lineNumber:124}})):O))},y=o.forwardRef(function(e,t){return o.createElement(p,Object(n.a)({},e,{innerRef:t,__source:{fileName:f,lineNumber:137}}))});"undefined"!==typeof y&&y&&y===Object(y)&&Object.isExtensible(y)&&Object.defineProperty(y,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"TextInput",filename:"src/components/Inputs/TextInput.tsx"}})},"./src/components/Typography/Label.tsx":function(e,t,r){"use strict";var n=r("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/extends.js"),l=r("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),o=r("./node_modules/react/index.js"),i=r("./node_modules/react-native-web/dist/exports/Platform/index.js"),a=r("./src/theme/Theme.tsx"),s=r("./src/utils/mergeStyles.ts"),c=r("./src/components/Typography/Text.styles.ts");"undefined"!==typeof LabelStyles&&LabelStyles&&LabelStyles===Object(LabelStyles)&&Object.isExtensible(LabelStyles)&&Object.defineProperty(LabelStyles,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"LabelStyles",filename:"src/components/Typography/Label.styles.ts"}}),"undefined"!==typeof GetLabelStyles&&GetLabelStyles&&GetLabelStyles===Object(GetLabelStyles)&&Object.isExtensible(GetLabelStyles)&&Object.defineProperty(GetLabelStyles,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"GetLabelStyles",filename:"src/components/Typography/Label.styles.ts"}});var m=function(e,t){e.getStyles;var r=Object(l.a)(e,["getStyles"]);return{labelStyle:Object(c.c)(r,t).textStyle}};m&&m===Object(m)&&Object.isExtensible(m)&&Object.defineProperty(m,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"getLabelStyles",filename:"src/components/Typography/Label.styles.ts"}});var b=r("./src/components/Typography/Text.tsx");r.d(t,"a",function(){return d});"undefined"!==typeof LabelProps&&LabelProps&&LabelProps===Object(LabelProps)&&Object.isExtensible(LabelProps)&&Object.defineProperty(LabelProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"LabelProps",filename:"src/components/Typography/Label.tsx"}});var d=function(e){var t=e.children,r=e.getStyles,c=Object(l.a)(e,["children","getStyles"]),d=Object(a.a)(),u=Object(s.a)(m,r,d.components.getLabelStyles)(e,d).labelStyle;return o.createElement(b.a,Object(n.a)({accessibilityRole:"web"===i.a.OS?"label":"none",getStyles:function(){return{textStyle:u}}},c,{__source:{fileName:"/home/travis/build/WeTrustPlatform/paramount/src/components/Typography/Label.tsx",lineNumber:28}}),t)};"undefined"!==typeof d&&d&&d===Object(d)&&Object.isExtensible(d)&&Object.defineProperty(d,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Label",filename:"src/components/Typography/Label.tsx"}})},"./src/components/Typography/Text.styles.ts":function(e,t,r){"use strict";r.d(t,"a",function(){return l}),r.d(t,"b",function(){return o}),r.d(t,"c",function(){return a});var n=r("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread.js");"undefined"!==typeof TextStyles&&TextStyles&&TextStyles===Object(TextStyles)&&Object.isExtensible(TextStyles)&&Object.defineProperty(TextStyles,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"TextStyles",filename:"src/components/Typography/Text.styles.ts"}}),"undefined"!==typeof GetTextStyles&&GetTextStyles&&GetTextStyles===Object(GetTextStyles)&&Object.isExtensible(GetTextStyles)&&Object.defineProperty(GetTextStyles,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"GetTextStyles",filename:"src/components/Typography/Text.styles.ts"}});var l=function(e){return function(t){if(t)return e[t]||t}};"undefined"!==typeof l&&l&&l===Object(l)&&Object.isExtensible(l)&&Object.defineProperty(l,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"getFontWeight",filename:"src/components/Typography/Text.styles.ts"}});var o=function(e){return function(t){return e[t]||t}};"undefined"!==typeof o&&o&&o===Object(o)&&Object.isExtensible(o)&&Object.defineProperty(o,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"getTextColor",filename:"src/components/Typography/Text.styles.ts"}});var i=function(e){return function(t){return e[t]||{fontSize:t}}};i&&i===Object(i)&&Object.isExtensible(i)&&Object.defineProperty(i,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"getTextSize",filename:"src/components/Typography/Text.styles.ts"}});var a=function(e,t){var r=e.color,a=void 0===r?"default":r,s=e.size,c=void 0===s?"medium":s,m=e.align,b=void 0===m?"left":m,d=e.weight,u=e.isItalic,f=void 0!==u&&u,p=e.transform,y=i(t.textSizes)(c);return{textStyle:Object(n.a)({},y,{color:o(t.colors.text)(a),fontFamily:t.fontFamilies.text,fontWeight:l(t.fontWeights)(d)||y.fontWeight,textAlign:b},f&&{fontStyle:"italic"},p&&{textTransform:p})}};"undefined"!==typeof a&&a&&a===Object(a)&&Object.isExtensible(a)&&Object.defineProperty(a,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"getTextStyles",filename:"src/components/Typography/Text.styles.ts"}})},"./src/components/Typography/Text.tsx":function(e,t,r){"use strict";r.d(t,"a",function(){return m});var n=r("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/extends.js"),l=r("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),o=r("./node_modules/react/index.js"),i=r("./node_modules/react-native-web/dist/exports/Text/index.js"),a=r("./src/theme/Theme.tsx"),s=r("./src/utils/mergeStyles.ts"),c=r("./src/components/Typography/Text.styles.ts");"undefined"!==typeof TextProps&&TextProps&&TextProps===Object(TextProps)&&Object.isExtensible(TextProps)&&Object.defineProperty(TextProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"TextProps",filename:"src/components/Typography/Text.tsx"}});var m=function(e){var t=e.children,r=(e.color,e.size,e.align,e.weight,e.getStyles),m=(e.isItalic,e.transform,Object(l.a)(e,["children","color","size","align","weight","getStyles","isItalic","transform"])),b=Object(a.a)(),d=Object(s.a)(c.c,r,b.components.getTextStyles)(e,b).textStyle;return o.createElement(i.a,Object(n.a)({style:d},m,{__source:{fileName:"/home/travis/build/WeTrustPlatform/paramount/src/components/Typography/Text.tsx",lineNumber:75}}),t)};"undefined"!==typeof m&&m&&m===Object(m)&&Object.isExtensible(m)&&Object.defineProperty(m,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Text",filename:"src/components/Typography/Text.tsx"}})},"./src/theme/Theme.tsx":function(e,t,r){"use strict";var n=r("./node_modules/deepmerge/dist/umd.js"),l=r.n(n),o=r("./node_modules/react/index.js"),i=r.n(o),a=r("./node_modules/react-native-web/dist/exports/Platform/index.js");"undefined"!==typeof ColorPalette&&ColorPalette&&ColorPalette===Object(ColorPalette)&&Object.isExtensible(ColorPalette)&&Object.defineProperty(ColorPalette,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ColorPalette",filename:"src/theme/palette.ts"}}),"undefined"!==typeof Palette&&Palette&&Palette===Object(Palette)&&Object.isExtensible(Palette)&&Object.defineProperty(Palette,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Palette",filename:"src/theme/palette.ts"}});var s={lightest:"#fafafa",light:"#eeeeee",base:"#cccccc",dark:"#a7a7a7",darkest:"#7e7e7e"},c={lightest:"#e5f5ff",light:"#ceecff",base:"#1ca5F7",dark:"#59a9de",darkest:"#33495f"},m={lightest:"#f9e1de",light:"#f9aa9f",base:"#d26557",dark:"#bb584e",darkest:"#b74033"},b={lightest:"#fce8cf",light:"#f2c58a",base:"#f3b058",dark:"#ec8e30",darkest:"#b26500"},d={lightest:"#fef8e7",light:"#fbe6a2",base:"#f7d154",dark:"#d1b047",darkest:"#7e6514"},u={lightest:"#eafff3",light:"#c2edd5",base:"#54bf84",dark:"#42a46e",darkest:"#16a054"},f={lightest:"#d6fcf7",light:"#c0f9f2",base:"#67c6bb",dark:"#3fa296",darkest:"#1b877a"},p={lightest:"#f8f7fc",light:"#eae7f8",base:"#735dd0",dark:"#37248f",darkest:"#37248f"};"undefined"!==typeof purple&&purple&&purple===Object(purple)&&Object.isExtensible(purple)&&Object.defineProperty(purple,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"purple",filename:"src/theme/palette.ts"}}),"undefined"!==typeof teal&&teal&&teal===Object(teal)&&Object.isExtensible(teal)&&Object.defineProperty(teal,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"teal",filename:"src/theme/palette.ts"}}),"undefined"!==typeof green&&green&&green===Object(green)&&Object.isExtensible(green)&&Object.defineProperty(green,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"green",filename:"src/theme/palette.ts"}}),"undefined"!==typeof yellow&&yellow&&yellow===Object(yellow)&&Object.isExtensible(yellow)&&Object.defineProperty(yellow,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"yellow",filename:"src/theme/palette.ts"}}),"undefined"!==typeof orange&&orange&&orange===Object(orange)&&Object.isExtensible(orange)&&Object.defineProperty(orange,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"orange",filename:"src/theme/palette.ts"}}),"undefined"!==typeof red&&red&&red===Object(red)&&Object.isExtensible(red)&&Object.defineProperty(red,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"red",filename:"src/theme/palette.ts"}}),"undefined"!==typeof blue&&blue&&blue===Object(blue)&&Object.isExtensible(blue)&&Object.defineProperty(blue,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"blue",filename:"src/theme/palette.ts"}}),"undefined"!==typeof neutral&&neutral&&neutral===Object(neutral)&&Object.isExtensible(neutral)&&Object.defineProperty(neutral,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"neutral",filename:"src/theme/palette.ts"}});var y={small:4,medium:4,large:4},g={background:{base:"white",content:"white",overlay:"rgba(0,0,0,0.3)",greyLight:s.lightest,greyDefault:"#F5F6F7",greyDark:s.light,primaryLight:f.lightest,primaryDefault:f.base,primaryDark:f.dark,secondaryLight:b.lightest,secondaryDefault:b.base,secondaryDark:b.dark,dangerLight:m.lightest,dangerDefault:m.base,dangerDark:m.dark,infoLight:c.lightest,infoDefault:c.base,infoDark:c.dark,successLight:u.lightest,successDefault:u.base,successDark:u.dark,warningLight:b.lightest,warningDefault:b.base,warningDark:b.dark},border:{default:s.light,primary:f.darkest,secondary:b.darkest,danger:m.darkest,info:c.darkest,success:u.darkest,warning:b.darkest},button:{disabled:s.light,disabledText:s.darkest,default:s.lightest,defaultText:s.darkest,primary:f.base,primaryText:"white",secondary:b.base,secondaryText:"white",danger:m.base,dangerText:"white"},text:{link:s.darkest,default:s.darkest,muted:s.dark,white:"white",selected:"white",primary:f.darkest,secondary:b.darkest,danger:m.darkest,info:c.darkest,success:u.darkest,warning:b.darkest}},h=[{elevation:0,shadowColor:s.dark,shadowOffset:{width:0,height:0},shadowOpacity:0,shadowRadius:0},{elevation:1,shadowColor:s.dark,shadowOffset:{width:1,height:1},shadowOpacity:.15,shadowRadius:8},{elevation:2,shadowColor:s.dark,shadowOffset:{width:2,height:2},shadowOpacity:.2,shadowRadius:10},{elevation:3,shadowColor:s.dark,shadowOffset:{width:3,height:3},shadowOpacity:.25,shadowRadius:12},{elevation:4,shadowColor:s.dark,shadowOffset:{width:4,height:4},shadowOpacity:.3,shadowRadius:8},{elevation:5,shadowColor:s.dark,shadowOffset:{width:5,height:5},shadowOpacity:.35,shadowRadius:8}],x={colors:g,fills:{solid:{neutral:{backgroundColor:s.base,color:"white"},blue:{backgroundColor:c.base,color:"white"},red:{backgroundColor:m.base,color:"white"},orange:{backgroundColor:b.base,color:"white"},yellow:{backgroundColor:d.base,color:d.darkest},green:{backgroundColor:u.base,color:"white"},teal:{backgroundColor:f.base,color:"white"},purple:{backgroundColor:p.base,color:"white"}},subtle:{neutral:{backgroundColor:s.light,color:s.darkest},blue:{backgroundColor:c.light,color:c.darkest},red:{backgroundColor:m.light,color:m.darkest},orange:{backgroundColor:b.light,color:b.darkest},yellow:{backgroundColor:d.light,color:d.darkest},green:{backgroundColor:u.light,color:u.darkest},teal:{backgroundColor:f.light,color:f.darkest},purple:{backgroundColor:p.light,color:p.darkest}}},fontFamilies:"web"===a.a.OS?{heading:'"SF UI Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',mono:'"SF Mono", "Monaco", "Inconsolata", "Fira Mono", "Droid Sans Mono", "Source Code Pro", monospace',text:'"SF UI Text", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"'}:{heading:"System",mono:"System",text:"System"},fontWeights:{bold:"bold",light:"300",normal:"normal"},headingSizes:{xxxlarge:{fontSize:35,letterSpacing:-.2,lineHeight:40},xxlarge:{fontSize:29,letterSpacing:-.2,lineHeight:32},xlarge:{fontSize:24,letterSpacing:-.07,lineHeight:28},large:{fontSize:20,letterSpacing:-.07,lineHeight:24},medium:{fontSize:16,letterSpacing:-.05,lineHeight:20},small:{fontSize:14,letterSpacing:-.05,lineHeight:20}},paragraphSizes:{small:{fontSize:14,lineHeight:24},medium:{fontSize:16,lineHeight:21},large:{fontSize:18,lineHeight:18}},textSizes:{large:{fontSize:20},medium:{fontSize:16},small:{fontSize:14},xsmall:{fontSize:12}},elevations:h,controlBorderRadius:y,controlHeights:{small:40,medium:48,large:56},controlPaddings:{small:8,medium:16,large:24},containerShapes:{circle:{borderRadius:999},pill:{borderRadius:999},rounded:{borderRadius:y.medium},roundedBottom:{borderBottomLeftRadius:y.medium,borderBottomRightRadius:y.medium},roundedLeft:{borderBottomLeftRadius:y.medium,borderTopLeftRadius:y.medium},roundedRight:{borderBottomRightRadius:y.medium,borderTopRightRadius:y.medium},roundedTop:{borderTopLeftRadius:y.medium,borderTopRightRadius:y.medium},square:{borderRadius:0}},components:{}};"undefined"!==typeof x&&x&&x===Object(x)&&Object.isExtensible(x)&&Object.defineProperty(x,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"defaultTheme",filename:"src/theme/defaultTheme.ts"}}),r.d(t,"a",function(){return _});"undefined"!==typeof TextSizes&&TextSizes&&TextSizes===Object(TextSizes)&&Object.isExtensible(TextSizes)&&Object.defineProperty(TextSizes,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"TextSizes",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof TextSize&&TextSize&&TextSize===Object(TextSize)&&Object.isExtensible(TextSize)&&Object.defineProperty(TextSize,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"TextSize",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof HeadingSizes&&HeadingSizes&&HeadingSizes===Object(HeadingSizes)&&Object.isExtensible(HeadingSizes)&&Object.defineProperty(HeadingSizes,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"HeadingSizes",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof HeadingSize&&HeadingSize&&HeadingSize===Object(HeadingSize)&&Object.isExtensible(HeadingSize)&&Object.defineProperty(HeadingSize,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"HeadingSize",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof ParagraphSizes&&ParagraphSizes&&ParagraphSizes===Object(ParagraphSizes)&&Object.isExtensible(ParagraphSizes)&&Object.defineProperty(ParagraphSizes,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ParagraphSizes",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof ParagraphSize&&ParagraphSize&&ParagraphSize===Object(ParagraphSize)&&Object.isExtensible(ParagraphSize)&&Object.defineProperty(ParagraphSize,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ParagraphSize",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof FontFamilies&&FontFamilies&&FontFamilies===Object(FontFamilies)&&Object.isExtensible(FontFamilies)&&Object.defineProperty(FontFamilies,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"FontFamilies",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof FontFamily&&FontFamily&&FontFamily===Object(FontFamily)&&Object.isExtensible(FontFamily)&&Object.defineProperty(FontFamily,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"FontFamily",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof RNFontWeight&&RNFontWeight&&RNFontWeight===Object(RNFontWeight)&&Object.isExtensible(RNFontWeight)&&Object.defineProperty(RNFontWeight,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"RNFontWeight",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof FontWeights&&FontWeights&&FontWeights===Object(FontWeights)&&Object.isExtensible(FontWeights)&&Object.defineProperty(FontWeights,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"FontWeights",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof FontWeight&&FontWeight&&FontWeight===Object(FontWeight)&&Object.isExtensible(FontWeight)&&Object.defineProperty(FontWeight,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"FontWeight",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof TextColors&&TextColors&&TextColors===Object(TextColors)&&Object.isExtensible(TextColors)&&Object.defineProperty(TextColors,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"TextColors",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof TextColor&&TextColor&&TextColor===Object(TextColor)&&Object.isExtensible(TextColor)&&Object.defineProperty(TextColor,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"TextColor",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof ButtonColors&&ButtonColors&&ButtonColors===Object(ButtonColors)&&Object.isExtensible(ButtonColors)&&Object.defineProperty(ButtonColors,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ButtonColors",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof ButtonColorsWithText&&ButtonColorsWithText&&ButtonColorsWithText===Object(ButtonColorsWithText)&&Object.isExtensible(ButtonColorsWithText)&&Object.defineProperty(ButtonColorsWithText,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ButtonColorsWithText",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof ButtonColor&&ButtonColor&&ButtonColor===Object(ButtonColor)&&Object.isExtensible(ButtonColor)&&Object.defineProperty(ButtonColor,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ButtonColor",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof BorderColors&&BorderColors&&BorderColors===Object(BorderColors)&&Object.isExtensible(BorderColors)&&Object.defineProperty(BorderColors,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"BorderColors",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof BorderColor&&BorderColor&&BorderColor===Object(BorderColor)&&Object.isExtensible(BorderColor)&&Object.defineProperty(BorderColor,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"BorderColor",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof BackgroundColors&&BackgroundColors&&BackgroundColors===Object(BackgroundColors)&&Object.isExtensible(BackgroundColors)&&Object.defineProperty(BackgroundColors,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"BackgroundColors",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof BackgroundColor&&BackgroundColor&&BackgroundColor===Object(BackgroundColor)&&Object.isExtensible(BackgroundColor)&&Object.defineProperty(BackgroundColor,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"BackgroundColor",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof Colors&&Colors&&Colors===Object(Colors)&&Object.isExtensible(Colors)&&Object.defineProperty(Colors,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Colors",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof Elevations&&Elevations&&Elevations===Object(Elevations)&&Object.isExtensible(Elevations)&&Object.defineProperty(Elevations,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Elevations",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof Elevation&&Elevation&&Elevation===Object(Elevation)&&Object.isExtensible(Elevation)&&Object.defineProperty(Elevation,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Elevation",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof ControlSizes&&ControlSizes&&ControlSizes===Object(ControlSizes)&&Object.isExtensible(ControlSizes)&&Object.defineProperty(ControlSizes,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ControlSizes",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof ControlSize&&ControlSize&&ControlSize===Object(ControlSize)&&Object.isExtensible(ControlSize)&&Object.defineProperty(ControlSize,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ControlSize",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof FillColorProps&&FillColorProps&&FillColorProps===Object(FillColorProps)&&Object.isExtensible(FillColorProps)&&Object.defineProperty(FillColorProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"FillColorProps",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof FillColors&&FillColors&&FillColors===Object(FillColors)&&Object.isExtensible(FillColors)&&Object.defineProperty(FillColors,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"FillColors",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof FillColor&&FillColor&&FillColor===Object(FillColor)&&Object.isExtensible(FillColor)&&Object.defineProperty(FillColor,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"FillColor",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof Fills&&Fills&&Fills===Object(Fills)&&Object.isExtensible(Fills)&&Object.defineProperty(Fills,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Fills",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof ContainerShapes&&ContainerShapes&&ContainerShapes===Object(ContainerShapes)&&Object.isExtensible(ContainerShapes)&&Object.defineProperty(ContainerShapes,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ContainerShapes",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof ContainerShape&&ContainerShape&&ContainerShape===Object(ContainerShape)&&Object.isExtensible(ContainerShape)&&Object.defineProperty(ContainerShape,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ContainerShape",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof Theme&&Theme&&Theme===Object(Theme)&&Object.isExtensible(Theme)&&Object.defineProperty(Theme,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Theme",filename:"src/theme/Theme.tsx"}});var j=i.a.createContext(x);"undefined"!==typeof j&&j&&j===Object(j)&&Object.isExtensible(j)&&Object.defineProperty(j,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ThemeContext",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof ThemeProviderProps&&ThemeProviderProps&&ThemeProviderProps===Object(ThemeProviderProps)&&Object.isExtensible(ThemeProviderProps)&&Object.defineProperty(ThemeProviderProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ThemeProviderProps",filename:"src/theme/Theme.tsx"}});var O=function(e){return e?l()(x,e):x};O&&O===Object(O)&&Object.isExtensible(O)&&Object.defineProperty(O,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"createTheme",filename:"src/theme/Theme.tsx"}});var T=function(e){var t=e.children,r=e.value,n=O(void 0===r?x:r);return i.a.createElement(j.Provider,{value:n,__source:{fileName:"/home/travis/build/WeTrustPlatform/paramount/src/theme/Theme.tsx",lineNumber:315}},t)};T&&T===Object(T)&&Object.isExtensible(T)&&Object.defineProperty(T,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ThemeProvider",filename:"src/theme/Theme.tsx"}});var _=function(){return i.a.useContext(j)};"undefined"!==typeof _&&_&&_===Object(_)&&Object.isExtensible(_)&&Object.defineProperty(_,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"useTheme",filename:"src/theme/Theme.tsx"}})},"./src/utils/mergeStyles.ts":function(e,t,r){"use strict";r.d(t,"a",function(){return o});var n=r("./node_modules/deepmerge/dist/umd.js"),l=r.n(n);"undefined"!==typeof GetStyles&&GetStyles&&GetStyles===Object(GetStyles)&&Object.isExtensible(GetStyles)&&Object.defineProperty(GetStyles,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"GetStyles",filename:"src/utils/mergeStyles.ts"}}),"undefined"!==typeof ArgumentTypes&&ArgumentTypes&&ArgumentTypes===Object(ArgumentTypes)&&Object.isExtensible(ArgumentTypes)&&Object.defineProperty(ArgumentTypes,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ArgumentTypes",filename:"src/utils/mergeStyles.ts"}}),"undefined"!==typeof ReplaceReturnType&&ReplaceReturnType&&ReplaceReturnType===Object(ReplaceReturnType)&&Object.isExtensible(ReplaceReturnType)&&Object.defineProperty(ReplaceReturnType,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ReplaceReturnType",filename:"src/utils/mergeStyles.ts"}});var o=function(e,t,r){return function(n,o){var i=[e(n,o)];return r&&i.push(r(n,o)),t&&i.push(t(n,o)),l.a.all(i)}};"undefined"!==typeof o&&o&&o===Object(o)&&Object.isExtensible(o)&&Object.defineProperty(o,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"mergeStyles",filename:"src/utils/mergeStyles.ts"}})}}]);
//# sourceMappingURL=13.461367314053f64495f6.js.map