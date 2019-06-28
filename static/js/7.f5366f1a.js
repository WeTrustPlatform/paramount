(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"./src/components/Checkbox/Checkbox.mdx":function(e,t,o){"use strict";o.r(t),o.d(t,"default",function(){return d});var r=o("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),l=o("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/extends.js"),n=(o("./node_modules/react/index.js"),o("./node_modules/@mdx-js/react/dist/index.es.js")),a=o("./node_modules/docz/dist/index.esm.js"),i=o("./src/components/Checkbox/Checkbox.tsx"),s=o("./src/components/Form/FormField.tsx"),c=o("./src/components/Helpers/Toggle.tsx"),b="/home/travis/build/WeTrustPlatform/paramount/src/components/Checkbox/Checkbox.mdx",m={},u="wrapper";function d(e){var t=e.components,o=Object(r.a)(e,["components"]);return Object(n.b)(u,Object(l.a)({},m,o,{components:t,mdxType:"MDXLayout",__source:{fileName:b,lineNumber:21}}),Object(n.b)("h1",Object(l.a)({id:"checkbox"},{__source:{fileName:b,lineNumber:23}}),"Checkbox"),Object(n.b)("p",{__source:{fileName:b,lineNumber:26}},"Checkbox for boolean values"),Object(n.b)("h2",Object(l.a)({id:"usage"},{__source:{fileName:b,lineNumber:27}}),"Usage"),Object(n.b)(a.c,{__position:0,__code:'<Toggle initial={false}>\n  {({ on, toggle }) => (\n    <FormField label="Checkbox" labelPosition="right">\n      <Checkbox shape="circle" value={on} onPress={toggle} size="medium" />\n    </FormField>\n  )}\n</Toggle>',__scope:{props:this?this.props:o,Playground:a.c,Props:a.d,Checkbox:i.a,FormField:s.a,Toggle:c.a},mdxType:"Playground",__source:{fileName:b,lineNumber:30}},Object(n.b)(c.a,{initial:!1,mdxType:"Toggle",__source:{fileName:b,lineNumber:38}},function(e){var t=e.on,o=e.toggle;return Object(n.b)(s.a,{label:"Checkbox",labelPosition:"right",mdxType:"FormField",__source:{fileName:b,lineNumber:42}},Object(n.b)(i.a,{shape:"circle",value:t,onPress:o,size:"medium",mdxType:"Checkbox",__source:{fileName:b,lineNumber:43}}))})),Object(n.b)("h2",Object(l.a)({id:"props"},{__source:{fileName:b,lineNumber:47}}),"Props"),Object(n.b)(a.d,{of:i.a,mdxType:"Props",__source:{fileName:b,lineNumber:50}}),Object(n.b)("h2",Object(l.a)({id:"customization"},{__source:{fileName:b,lineNumber:51}}),"Customization"),Object(n.b)("p",{__source:{fileName:b,lineNumber:54}},"Using ",Object(n.b)("inlineCode",{parentName:"p",__source:{fileName:b,lineNumber:54}},"getStyles")," prop"),Object(n.b)("pre",{__source:{fileName:b,lineNumber:55}},Object(n.b)("code",Object(l.a)({parentName:"pre"},{},{__source:{fileName:b,lineNumber:55}}),"CheckboxStyles {\n  touchableStyle: ViewStyle;\n  checkboxStyle: ViewStyle;\n  checkColor: string;\n}\n\ngetStyles={(CheckboxProps, Theme) => CheckboxStyles}\n")),Object(n.b)("p",{__source:{fileName:b,lineNumber:63}},"Markup"),Object(n.b)("pre",{__source:{fileName:b,lineNumber:64}},Object(n.b)("code",Object(l.a)({parentName:"pre"},{className:"language-tsx"},{__source:{fileName:b,lineNumber:64}}),"<TouchableOpacity touchableStyle>\n  <View checkboxStyle>{icon}</View>\n</TouchableOpacity>\n")))}d&&d===Object(d)&&Object.isExtensible(d)&&Object.defineProperty(d,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src/components/Checkbox/Checkbox.mdx"}}),d.isMDXComponent=!0},"./src/components/Checkbox/Checkbox.tsx":function(e,t,o){"use strict";var r=o("./node_modules/react/index.js"),l=o("./node_modules/react-native-web/dist/exports/TouchableOpacity/index.js"),n=o("./node_modules/react-native-web/dist/exports/View/index.js"),a=o("./src/theme/Theme.tsx"),i=o("./src/utils/mergeStyles.ts"),s=o("./src/components/Icon/Icon.web.tsx"),c=o("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread.js");"undefined"!==typeof CheckboxStyles&&CheckboxStyles&&CheckboxStyles===Object(CheckboxStyles)&&Object.isExtensible(CheckboxStyles)&&Object.defineProperty(CheckboxStyles,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"CheckboxStyles",filename:"src/components/Checkbox/Checkbox.styles.ts"}}),"undefined"!==typeof GetCheckboxStyles&&GetCheckboxStyles&&GetCheckboxStyles===Object(GetCheckboxStyles)&&Object.isExtensible(GetCheckboxStyles)&&Object.defineProperty(GetCheckboxStyles,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"GetCheckboxStyles",filename:"src/components/Checkbox/Checkbox.styles.ts"}});var b=function(e,t){var o=e.value,r=e.isDisabled,l=e.shape,n=void 0===l?"rounded":l,a=e.size,i=void 0===a?"medium":a,s=t.controlHeights[i]-16;return{checkColor:t.colors.text.white,checkboxStyle:Object(c.a)({alignItems:"center",backgroundColor:t.colors.background.content,borderColor:t.colors.border.default,borderWidth:1,height:s,justifyContent:"center",width:s},o?{backgroundColor:t.colors.background.primaryDefault,borderColor:"transparent"}:{},r?{backgroundColor:t.colors.background.greyDark,borderColor:t.colors.border.default}:{},t.containerShapes[n]),touchableStyle:t.containerShapes[n]}};b&&b===Object(b)&&Object.isExtensible(b)&&Object.defineProperty(b,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"getCheckboxStyles",filename:"src/components/Checkbox/Checkbox.styles.ts"}}),o.d(t,"a",function(){return u});var m="/home/travis/build/WeTrustPlatform/paramount/src/components/Checkbox/Checkbox.tsx";"undefined"!==typeof CheckboxProps&&CheckboxProps&&CheckboxProps===Object(CheckboxProps)&&Object.isExtensible(CheckboxProps)&&Object.defineProperty(CheckboxProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"CheckboxProps",filename:"src/components/Checkbox/Checkbox.tsx"}});var u=function(e){var t=e.value,o=void 0!==t&&t,c=e.isDisabled,u=void 0!==c&&c,d=e.isInteractive,f=void 0===d||d,p=e.onPress,g=e.getStyles,h=e.testID,y=e.accessibilityLabel,x=Object(a.a)(),j=Object(i.a)(b,g,x.components.getCheckboxStyles)(e,x),O=j.touchableStyle,_=j.checkboxStyle,S=j.checkColor;return r.createElement(l.a,{accessible:f,style:O,disabled:u||!f,testID:h,onPress:p,accessibilityLabel:y,__source:{fileName:m,lineNumber:80}},r.createElement(n.a,{style:_,__source:{fileName:m,lineNumber:88}},o?r.createElement(s.a,{name:"check",size:20,color:S,__source:{fileName:m,lineNumber:89}}):null))};"undefined"!==typeof u&&u&&u===Object(u)&&Object.isExtensible(u)&&Object.defineProperty(u,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Checkbox",filename:"src/components/Checkbox/Checkbox.tsx"}})},"./src/components/Form/FormField.tsx":function(e,t,o){"use strict";var r=o("./node_modules/react/index.js"),l=o("./node_modules/react-native-web/dist/exports/View/index.js"),n=o("./src/theme/Theme.tsx"),a=o("./src/utils/mergeStyles.ts"),i=o("./src/components/Typography/Label.tsx"),s=o("./src/components/Typography/Text.tsx");"undefined"!==typeof FormFieldStyles&&FormFieldStyles&&FormFieldStyles===Object(FormFieldStyles)&&Object.isExtensible(FormFieldStyles)&&Object.defineProperty(FormFieldStyles,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"FormFieldStyles",filename:"src/components/Form/FormField.styles.tsx"}}),"undefined"!==typeof GetFormFieldStyles&&GetFormFieldStyles&&GetFormFieldStyles===Object(GetFormFieldStyles)&&Object.isExtensible(GetFormFieldStyles)&&Object.defineProperty(GetFormFieldStyles,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"GetFormFieldStyles",filename:"src/components/Form/FormField.styles.tsx"}});var c=function(e,t){var o={},r={};switch(e.labelPosition){case"left":o={paddingRight:8},r={flexDirection:"row",alignItems:"center"};break;case"right":o={paddingLeft:8},r={flexDirection:"row",alignItems:"center"};break;default:o={paddingBottom:4},r={paddingBottom:4}}return{containerStyles:{},descriptionTextStyle:{paddingBottom:4},errorTextStyle:{},errorWrapperStyle:{},labelTextStyle:{},labelWrapperStyle:o,wrapperStyle:r}};c&&c===Object(c)&&Object.isExtensible(c)&&Object.defineProperty(c,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"getFormFieldStyles",filename:"src/components/Form/FormField.styles.tsx"}}),o.d(t,"a",function(){return m});var b="/home/travis/build/WeTrustPlatform/paramount/src/components/Form/FormField.tsx";"undefined"!==typeof FormFieldLabelPosition&&FormFieldLabelPosition&&FormFieldLabelPosition===Object(FormFieldLabelPosition)&&Object.isExtensible(FormFieldLabelPosition)&&Object.defineProperty(FormFieldLabelPosition,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"FormFieldLabelPosition",filename:"src/components/Form/FormField.tsx"}}),"undefined"!==typeof FormFieldProps&&FormFieldProps&&FormFieldProps===Object(FormFieldProps)&&Object.isExtensible(FormFieldProps)&&Object.defineProperty(FormFieldProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"FormFieldProps",filename:"src/components/Form/FormField.tsx"}});var m=function(e){var t=e.label,o=e.error,m=e.children,u=e.description,d=e.labelPosition,f=void 0===d?"top":d,p=e.getStyles,g=Object(n.a)(),h=Object(a.a)(c,p,g.components.getFormFieldStyles)(e,g),y=h.containerStyles,x=h.descriptionTextStyle,j=h.errorTextStyle,O=h.errorWrapperStyle,_=h.labelTextStyle,S=h.labelWrapperStyle,T=h.wrapperStyle,C=r.createElement(l.a,{style:S,__source:{fileName:b,lineNumber:74}},r.createElement(i.a,{getStyles:function(){return{labelStyle:_}},__source:{fileName:b,lineNumber:75}},t));return r.createElement(l.a,{style:y,__source:{fileName:b,lineNumber:80}},t&&"top"===f&&C,r.createElement(l.a,{style:T,__source:{fileName:b,lineNumber:82}},t&&"left"===f&&C,m,t&&"right"===f&&C),u&&r.createElement(s.a,{color:"muted",getStyles:function(){return{textStyle:x}},__source:{fileName:b,lineNumber:88}},u),o&&r.createElement(l.a,{style:O,__source:{fileName:b,lineNumber:96}},r.createElement(s.a,{color:"danger",getStyles:function(){return{textStyle:j}},__source:{fileName:b,lineNumber:97}},o)))};"undefined"!==typeof m&&m&&m===Object(m)&&Object.isExtensible(m)&&Object.defineProperty(m,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"FormField",filename:"src/components/Form/FormField.tsx"}})},"./src/components/Helpers/Toggle.tsx":function(e,t,o){"use strict";o.d(t,"a",function(){return a});var r=o("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),l=o("./node_modules/react/index.js"),n=o.n(l);"undefined"!==typeof ToggleRenderProps&&ToggleRenderProps&&ToggleRenderProps===Object(ToggleRenderProps)&&Object.isExtensible(ToggleRenderProps)&&Object.defineProperty(ToggleRenderProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ToggleRenderProps",filename:"src/components/Helpers/Toggle.tsx"}}),"undefined"!==typeof ToggleProps&&ToggleProps&&ToggleProps===Object(ToggleProps)&&Object.isExtensible(ToggleProps)&&Object.defineProperty(ToggleProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ToggleProps",filename:"src/components/Helpers/Toggle.tsx"}});var a=function(e){var t=e.children,o=e.initial,l=void 0!==o&&o,a=n.a.useState(l),i=Object(r.a)(a,2),s=i[0],c=i[1],b=n.a.useCallback(function(){c(!s)},[s]),m=n.a.useCallback(function(e){c(e)},[]);return t({on:s,toggle:b,set:m})};"undefined"!==typeof a&&a&&a===Object(a)&&Object.isExtensible(a)&&Object.defineProperty(a,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Toggle",filename:"src/components/Helpers/Toggle.tsx"}})},"./src/components/Icon/Icon.web.tsx":function(e,t,o){"use strict";o.d(t,"a",function(){return i});var r=o("./node_modules/react/index.js"),l=o("./node_modules/react-icons/fi/index.esm.js"),n=o("./src/theme/Theme.tsx"),a=o("./src/components/Typography/Text.styles.ts");var i=function(e){var t=e.name,o=e.color,i=e.size,s=void 0===i?24:i,c=Object(n.a)(),b=l["Fi".concat(function(e){var t=e.replace(/(\-\w)/g,function(e){return e[1].toUpperCase()});return t.charAt(0).toUpperCase()+t.slice(1)}(t))];return r.createElement(b,{color:o?Object(a.b)(c.colors.text)(o):o,size:s,__source:{fileName:"/home/travis/build/WeTrustPlatform/paramount/src/components/Icon/Icon.web.tsx",lineNumber:23}})};"undefined"!==typeof i&&i&&i===Object(i)&&Object.isExtensible(i)&&Object.defineProperty(i,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Icon",filename:"src/components/Icon/Icon.web.tsx"}})},"./src/components/Typography/Label.tsx":function(e,t,o){"use strict";var r=o("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/extends.js"),l=o("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),n=o("./node_modules/react/index.js"),a=o("./node_modules/react-native-web/dist/exports/Platform/index.js"),i=o("./src/theme/Theme.tsx"),s=o("./src/utils/mergeStyles.ts"),c=o("./src/components/Typography/Text.styles.ts");"undefined"!==typeof LabelStyles&&LabelStyles&&LabelStyles===Object(LabelStyles)&&Object.isExtensible(LabelStyles)&&Object.defineProperty(LabelStyles,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"LabelStyles",filename:"src/components/Typography/Label.styles.ts"}}),"undefined"!==typeof GetLabelStyles&&GetLabelStyles&&GetLabelStyles===Object(GetLabelStyles)&&Object.isExtensible(GetLabelStyles)&&Object.defineProperty(GetLabelStyles,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"GetLabelStyles",filename:"src/components/Typography/Label.styles.ts"}});var b=function(e,t){e.getStyles;var o=Object(l.a)(e,["getStyles"]);return{labelStyle:Object(c.c)(o,t).textStyle}};b&&b===Object(b)&&Object.isExtensible(b)&&Object.defineProperty(b,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"getLabelStyles",filename:"src/components/Typography/Label.styles.ts"}});var m=o("./src/components/Typography/Text.tsx");o.d(t,"a",function(){return u});"undefined"!==typeof LabelProps&&LabelProps&&LabelProps===Object(LabelProps)&&Object.isExtensible(LabelProps)&&Object.defineProperty(LabelProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"LabelProps",filename:"src/components/Typography/Label.tsx"}});var u=function(e){var t=e.children,o=e.getStyles,c=Object(l.a)(e,["children","getStyles"]),u=Object(i.a)(),d=Object(s.a)(b,o,u.components.getLabelStyles)(e,u).labelStyle;return n.createElement(m.a,Object(r.a)({accessibilityRole:"web"===a.a.OS?"label":"none",getStyles:function(){return{textStyle:d}}},c,{__source:{fileName:"/home/travis/build/WeTrustPlatform/paramount/src/components/Typography/Label.tsx",lineNumber:28}}),t)};"undefined"!==typeof u&&u&&u===Object(u)&&Object.isExtensible(u)&&Object.defineProperty(u,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Label",filename:"src/components/Typography/Label.tsx"}})},"./src/components/Typography/Text.styles.ts":function(e,t,o){"use strict";o.d(t,"a",function(){return l}),o.d(t,"b",function(){return n}),o.d(t,"c",function(){return i});var r=o("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread.js");"undefined"!==typeof TextStyles&&TextStyles&&TextStyles===Object(TextStyles)&&Object.isExtensible(TextStyles)&&Object.defineProperty(TextStyles,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"TextStyles",filename:"src/components/Typography/Text.styles.ts"}}),"undefined"!==typeof GetTextStyles&&GetTextStyles&&GetTextStyles===Object(GetTextStyles)&&Object.isExtensible(GetTextStyles)&&Object.defineProperty(GetTextStyles,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"GetTextStyles",filename:"src/components/Typography/Text.styles.ts"}});var l=function(e){return function(t){if(t)return e[t]||t}};"undefined"!==typeof l&&l&&l===Object(l)&&Object.isExtensible(l)&&Object.defineProperty(l,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"getFontWeight",filename:"src/components/Typography/Text.styles.ts"}});var n=function(e){return function(t){return e[t]||t}};"undefined"!==typeof n&&n&&n===Object(n)&&Object.isExtensible(n)&&Object.defineProperty(n,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"getTextColor",filename:"src/components/Typography/Text.styles.ts"}});var a=function(e){return function(t){return e[t]||{fontSize:t}}};a&&a===Object(a)&&Object.isExtensible(a)&&Object.defineProperty(a,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"getTextSize",filename:"src/components/Typography/Text.styles.ts"}});var i=function(e,t){var o=e.color,i=void 0===o?"default":o,s=e.size,c=void 0===s?"medium":s,b=e.align,m=void 0===b?"left":b,u=e.weight,d=e.isItalic,f=void 0!==d&&d,p=e.transform,g=a(t.textSizes)(c);return{textStyle:Object(r.a)({},g,{color:n(t.colors.text)(i),fontFamily:t.fontFamilies.text,fontWeight:l(t.fontWeights)(u)||g.fontWeight,textAlign:m},f&&{fontStyle:"italic"},p&&{textTransform:p})}};"undefined"!==typeof i&&i&&i===Object(i)&&Object.isExtensible(i)&&Object.defineProperty(i,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"getTextStyles",filename:"src/components/Typography/Text.styles.ts"}})},"./src/components/Typography/Text.tsx":function(e,t,o){"use strict";o.d(t,"a",function(){return b});var r=o("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/extends.js"),l=o("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),n=o("./node_modules/react/index.js"),a=o("./node_modules/react-native-web/dist/exports/Text/index.js"),i=o("./src/theme/Theme.tsx"),s=o("./src/utils/mergeStyles.ts"),c=o("./src/components/Typography/Text.styles.ts");"undefined"!==typeof TextProps&&TextProps&&TextProps===Object(TextProps)&&Object.isExtensible(TextProps)&&Object.defineProperty(TextProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"TextProps",filename:"src/components/Typography/Text.tsx"}});var b=function(e){var t=e.children,o=(e.color,e.size,e.align,e.weight,e.getStyles),b=(e.isItalic,e.transform,Object(l.a)(e,["children","color","size","align","weight","getStyles","isItalic","transform"])),m=Object(i.a)(),u=Object(s.a)(c.c,o,m.components.getTextStyles)(e,m).textStyle;return n.createElement(a.a,Object(r.a)({style:u},b,{__source:{fileName:"/home/travis/build/WeTrustPlatform/paramount/src/components/Typography/Text.tsx",lineNumber:75}}),t)};"undefined"!==typeof b&&b&&b===Object(b)&&Object.isExtensible(b)&&Object.defineProperty(b,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Text",filename:"src/components/Typography/Text.tsx"}})},"./src/theme/Theme.tsx":function(e,t,o){"use strict";var r=o("./node_modules/deepmerge/dist/umd.js"),l=o.n(r),n=o("./node_modules/react/index.js"),a=o.n(n),i=o("./node_modules/react-native-web/dist/exports/Platform/index.js");"undefined"!==typeof ColorPalette&&ColorPalette&&ColorPalette===Object(ColorPalette)&&Object.isExtensible(ColorPalette)&&Object.defineProperty(ColorPalette,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ColorPalette",filename:"src/theme/palette.ts"}}),"undefined"!==typeof Palette&&Palette&&Palette===Object(Palette)&&Object.isExtensible(Palette)&&Object.defineProperty(Palette,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Palette",filename:"src/theme/palette.ts"}});var s={lightest:"#fafafa",light:"#eeeeee",base:"#cccccc",dark:"#a7a7a7",darkest:"#7e7e7e"},c={lightest:"#e5f5ff",light:"#ceecff",base:"#1ca5F7",dark:"#59a9de",darkest:"#33495f"},b={lightest:"#f9e1de",light:"#f9aa9f",base:"#d26557",dark:"#bb584e",darkest:"#b74033"},m={lightest:"#fce8cf",light:"#f2c58a",base:"#f3b058",dark:"#ec8e30",darkest:"#b26500"},u={lightest:"#fef8e7",light:"#fbe6a2",base:"#f7d154",dark:"#d1b047",darkest:"#7e6514"},d={lightest:"#eafff3",light:"#c2edd5",base:"#54bf84",dark:"#42a46e",darkest:"#16a054"},f={lightest:"#d6fcf7",light:"#c0f9f2",base:"#67c6bb",dark:"#3fa296",darkest:"#1b877a"},p={lightest:"#f8f7fc",light:"#eae7f8",base:"#735dd0",dark:"#37248f",darkest:"#37248f"};"undefined"!==typeof purple&&purple&&purple===Object(purple)&&Object.isExtensible(purple)&&Object.defineProperty(purple,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"purple",filename:"src/theme/palette.ts"}}),"undefined"!==typeof teal&&teal&&teal===Object(teal)&&Object.isExtensible(teal)&&Object.defineProperty(teal,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"teal",filename:"src/theme/palette.ts"}}),"undefined"!==typeof green&&green&&green===Object(green)&&Object.isExtensible(green)&&Object.defineProperty(green,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"green",filename:"src/theme/palette.ts"}}),"undefined"!==typeof yellow&&yellow&&yellow===Object(yellow)&&Object.isExtensible(yellow)&&Object.defineProperty(yellow,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"yellow",filename:"src/theme/palette.ts"}}),"undefined"!==typeof orange&&orange&&orange===Object(orange)&&Object.isExtensible(orange)&&Object.defineProperty(orange,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"orange",filename:"src/theme/palette.ts"}}),"undefined"!==typeof red&&red&&red===Object(red)&&Object.isExtensible(red)&&Object.defineProperty(red,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"red",filename:"src/theme/palette.ts"}}),"undefined"!==typeof blue&&blue&&blue===Object(blue)&&Object.isExtensible(blue)&&Object.defineProperty(blue,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"blue",filename:"src/theme/palette.ts"}}),"undefined"!==typeof neutral&&neutral&&neutral===Object(neutral)&&Object.isExtensible(neutral)&&Object.defineProperty(neutral,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"neutral",filename:"src/theme/palette.ts"}});var g={small:4,medium:4,large:4},h={background:{base:"white",content:"white",overlay:"rgba(0,0,0,0.3)",greyLight:s.lightest,greyDefault:"#F5F6F7",greyDark:s.light,primaryLight:f.lightest,primaryDefault:f.base,primaryDark:f.dark,secondaryLight:m.lightest,secondaryDefault:m.base,secondaryDark:m.dark,dangerLight:b.lightest,dangerDefault:b.base,dangerDark:b.dark,infoLight:c.lightest,infoDefault:c.base,infoDark:c.dark,successLight:d.lightest,successDefault:d.base,successDark:d.dark,warningLight:m.lightest,warningDefault:m.base,warningDark:m.dark},border:{default:s.light,primary:f.darkest,secondary:m.darkest,danger:b.darkest,info:c.darkest,success:d.darkest,warning:m.darkest},button:{disabled:s.light,disabledText:s.darkest,default:s.lightest,defaultText:s.darkest,primary:f.base,primaryText:"white",secondary:m.base,secondaryText:"white",danger:b.base,dangerText:"white"},text:{link:s.darkest,default:s.darkest,muted:s.dark,white:"white",selected:"white",primary:f.darkest,secondary:m.darkest,danger:b.darkest,info:c.darkest,success:d.darkest,warning:m.darkest}},y=[{elevation:0,shadowColor:s.dark,shadowOffset:{width:0,height:0},shadowOpacity:0,shadowRadius:0},{elevation:1,shadowColor:s.dark,shadowOffset:{width:1,height:1},shadowOpacity:.15,shadowRadius:8},{elevation:2,shadowColor:s.dark,shadowOffset:{width:2,height:2},shadowOpacity:.2,shadowRadius:10},{elevation:3,shadowColor:s.dark,shadowOffset:{width:3,height:3},shadowOpacity:.25,shadowRadius:12},{elevation:4,shadowColor:s.dark,shadowOffset:{width:4,height:4},shadowOpacity:.3,shadowRadius:8},{elevation:5,shadowColor:s.dark,shadowOffset:{width:5,height:5},shadowOpacity:.35,shadowRadius:8}],x={colors:h,fills:{solid:{neutral:{backgroundColor:s.base,color:"white"},blue:{backgroundColor:c.base,color:"white"},red:{backgroundColor:b.base,color:"white"},orange:{backgroundColor:m.base,color:"white"},yellow:{backgroundColor:u.base,color:u.darkest},green:{backgroundColor:d.base,color:"white"},teal:{backgroundColor:f.base,color:"white"},purple:{backgroundColor:p.base,color:"white"}},subtle:{neutral:{backgroundColor:s.light,color:s.darkest},blue:{backgroundColor:c.light,color:c.darkest},red:{backgroundColor:b.light,color:b.darkest},orange:{backgroundColor:m.light,color:m.darkest},yellow:{backgroundColor:u.light,color:u.darkest},green:{backgroundColor:d.light,color:d.darkest},teal:{backgroundColor:f.light,color:f.darkest},purple:{backgroundColor:p.light,color:p.darkest}}},fontFamilies:"web"===i.a.OS?{heading:'"SF UI Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',mono:'"SF Mono", "Monaco", "Inconsolata", "Fira Mono", "Droid Sans Mono", "Source Code Pro", monospace',text:'"SF UI Text", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"'}:{heading:"System",mono:"System",text:"System"},fontWeights:{bold:"bold",light:"300",normal:"normal"},headingSizes:{xxxlarge:{fontSize:35,letterSpacing:-.2,lineHeight:40},xxlarge:{fontSize:29,letterSpacing:-.2,lineHeight:32},xlarge:{fontSize:24,letterSpacing:-.07,lineHeight:28},large:{fontSize:20,letterSpacing:-.07,lineHeight:24},medium:{fontSize:16,letterSpacing:-.05,lineHeight:20},small:{fontSize:14,letterSpacing:-.05,lineHeight:20}},paragraphSizes:{small:{fontSize:14,lineHeight:24},medium:{fontSize:16,lineHeight:21},large:{fontSize:18,lineHeight:18}},textSizes:{large:{fontSize:20},medium:{fontSize:16},small:{fontSize:14},xsmall:{fontSize:12}},elevations:y,controlBorderRadius:g,controlHeights:{small:40,medium:48,large:56},controlPaddings:{small:8,medium:16,large:24},containerShapes:{circle:{borderRadius:999},pill:{borderRadius:999},rounded:{borderRadius:g.medium},roundedBottom:{borderBottomLeftRadius:g.medium,borderBottomRightRadius:g.medium},roundedLeft:{borderBottomLeftRadius:g.medium,borderTopLeftRadius:g.medium},roundedRight:{borderBottomRightRadius:g.medium,borderTopRightRadius:g.medium},roundedTop:{borderTopLeftRadius:g.medium,borderTopRightRadius:g.medium},square:{borderRadius:0}},components:{}};"undefined"!==typeof x&&x&&x===Object(x)&&Object.isExtensible(x)&&Object.defineProperty(x,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"defaultTheme",filename:"src/theme/defaultTheme.ts"}}),o.d(t,"a",function(){return S});"undefined"!==typeof TextSizes&&TextSizes&&TextSizes===Object(TextSizes)&&Object.isExtensible(TextSizes)&&Object.defineProperty(TextSizes,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"TextSizes",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof TextSize&&TextSize&&TextSize===Object(TextSize)&&Object.isExtensible(TextSize)&&Object.defineProperty(TextSize,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"TextSize",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof HeadingSizes&&HeadingSizes&&HeadingSizes===Object(HeadingSizes)&&Object.isExtensible(HeadingSizes)&&Object.defineProperty(HeadingSizes,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"HeadingSizes",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof HeadingSize&&HeadingSize&&HeadingSize===Object(HeadingSize)&&Object.isExtensible(HeadingSize)&&Object.defineProperty(HeadingSize,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"HeadingSize",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof ParagraphSizes&&ParagraphSizes&&ParagraphSizes===Object(ParagraphSizes)&&Object.isExtensible(ParagraphSizes)&&Object.defineProperty(ParagraphSizes,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ParagraphSizes",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof ParagraphSize&&ParagraphSize&&ParagraphSize===Object(ParagraphSize)&&Object.isExtensible(ParagraphSize)&&Object.defineProperty(ParagraphSize,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ParagraphSize",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof FontFamilies&&FontFamilies&&FontFamilies===Object(FontFamilies)&&Object.isExtensible(FontFamilies)&&Object.defineProperty(FontFamilies,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"FontFamilies",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof FontFamily&&FontFamily&&FontFamily===Object(FontFamily)&&Object.isExtensible(FontFamily)&&Object.defineProperty(FontFamily,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"FontFamily",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof RNFontWeight&&RNFontWeight&&RNFontWeight===Object(RNFontWeight)&&Object.isExtensible(RNFontWeight)&&Object.defineProperty(RNFontWeight,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"RNFontWeight",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof FontWeights&&FontWeights&&FontWeights===Object(FontWeights)&&Object.isExtensible(FontWeights)&&Object.defineProperty(FontWeights,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"FontWeights",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof FontWeight&&FontWeight&&FontWeight===Object(FontWeight)&&Object.isExtensible(FontWeight)&&Object.defineProperty(FontWeight,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"FontWeight",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof TextColors&&TextColors&&TextColors===Object(TextColors)&&Object.isExtensible(TextColors)&&Object.defineProperty(TextColors,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"TextColors",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof TextColor&&TextColor&&TextColor===Object(TextColor)&&Object.isExtensible(TextColor)&&Object.defineProperty(TextColor,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"TextColor",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof ButtonColors&&ButtonColors&&ButtonColors===Object(ButtonColors)&&Object.isExtensible(ButtonColors)&&Object.defineProperty(ButtonColors,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ButtonColors",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof ButtonColorsWithText&&ButtonColorsWithText&&ButtonColorsWithText===Object(ButtonColorsWithText)&&Object.isExtensible(ButtonColorsWithText)&&Object.defineProperty(ButtonColorsWithText,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ButtonColorsWithText",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof ButtonColor&&ButtonColor&&ButtonColor===Object(ButtonColor)&&Object.isExtensible(ButtonColor)&&Object.defineProperty(ButtonColor,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ButtonColor",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof BorderColors&&BorderColors&&BorderColors===Object(BorderColors)&&Object.isExtensible(BorderColors)&&Object.defineProperty(BorderColors,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"BorderColors",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof BorderColor&&BorderColor&&BorderColor===Object(BorderColor)&&Object.isExtensible(BorderColor)&&Object.defineProperty(BorderColor,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"BorderColor",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof BackgroundColors&&BackgroundColors&&BackgroundColors===Object(BackgroundColors)&&Object.isExtensible(BackgroundColors)&&Object.defineProperty(BackgroundColors,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"BackgroundColors",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof BackgroundColor&&BackgroundColor&&BackgroundColor===Object(BackgroundColor)&&Object.isExtensible(BackgroundColor)&&Object.defineProperty(BackgroundColor,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"BackgroundColor",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof Colors&&Colors&&Colors===Object(Colors)&&Object.isExtensible(Colors)&&Object.defineProperty(Colors,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Colors",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof Elevations&&Elevations&&Elevations===Object(Elevations)&&Object.isExtensible(Elevations)&&Object.defineProperty(Elevations,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Elevations",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof Elevation&&Elevation&&Elevation===Object(Elevation)&&Object.isExtensible(Elevation)&&Object.defineProperty(Elevation,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Elevation",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof ControlSizes&&ControlSizes&&ControlSizes===Object(ControlSizes)&&Object.isExtensible(ControlSizes)&&Object.defineProperty(ControlSizes,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ControlSizes",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof ControlSize&&ControlSize&&ControlSize===Object(ControlSize)&&Object.isExtensible(ControlSize)&&Object.defineProperty(ControlSize,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ControlSize",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof FillColorProps&&FillColorProps&&FillColorProps===Object(FillColorProps)&&Object.isExtensible(FillColorProps)&&Object.defineProperty(FillColorProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"FillColorProps",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof FillColors&&FillColors&&FillColors===Object(FillColors)&&Object.isExtensible(FillColors)&&Object.defineProperty(FillColors,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"FillColors",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof FillColor&&FillColor&&FillColor===Object(FillColor)&&Object.isExtensible(FillColor)&&Object.defineProperty(FillColor,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"FillColor",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof Fills&&Fills&&Fills===Object(Fills)&&Object.isExtensible(Fills)&&Object.defineProperty(Fills,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Fills",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof ContainerShapes&&ContainerShapes&&ContainerShapes===Object(ContainerShapes)&&Object.isExtensible(ContainerShapes)&&Object.defineProperty(ContainerShapes,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ContainerShapes",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof ContainerShape&&ContainerShape&&ContainerShape===Object(ContainerShape)&&Object.isExtensible(ContainerShape)&&Object.defineProperty(ContainerShape,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ContainerShape",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof Theme&&Theme&&Theme===Object(Theme)&&Object.isExtensible(Theme)&&Object.defineProperty(Theme,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Theme",filename:"src/theme/Theme.tsx"}});var j=a.a.createContext(x);"undefined"!==typeof j&&j&&j===Object(j)&&Object.isExtensible(j)&&Object.defineProperty(j,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ThemeContext",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof ThemeProviderProps&&ThemeProviderProps&&ThemeProviderProps===Object(ThemeProviderProps)&&Object.isExtensible(ThemeProviderProps)&&Object.defineProperty(ThemeProviderProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ThemeProviderProps",filename:"src/theme/Theme.tsx"}});var O=function(e){return e?l()(x,e):x};O&&O===Object(O)&&Object.isExtensible(O)&&Object.defineProperty(O,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"createTheme",filename:"src/theme/Theme.tsx"}});var _=function(e){var t=e.children,o=e.value,r=O(void 0===o?x:o);return a.a.createElement(j.Provider,{value:r,__source:{fileName:"/home/travis/build/WeTrustPlatform/paramount/src/theme/Theme.tsx",lineNumber:315}},t)};_&&_===Object(_)&&Object.isExtensible(_)&&Object.defineProperty(_,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ThemeProvider",filename:"src/theme/Theme.tsx"}});var S=function(){return a.a.useContext(j)};"undefined"!==typeof S&&S&&S===Object(S)&&Object.isExtensible(S)&&Object.defineProperty(S,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"useTheme",filename:"src/theme/Theme.tsx"}})},"./src/utils/mergeStyles.ts":function(e,t,o){"use strict";o.d(t,"a",function(){return n});var r=o("./node_modules/deepmerge/dist/umd.js"),l=o.n(r);"undefined"!==typeof GetStyles&&GetStyles&&GetStyles===Object(GetStyles)&&Object.isExtensible(GetStyles)&&Object.defineProperty(GetStyles,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"GetStyles",filename:"src/utils/mergeStyles.ts"}}),"undefined"!==typeof ArgumentTypes&&ArgumentTypes&&ArgumentTypes===Object(ArgumentTypes)&&Object.isExtensible(ArgumentTypes)&&Object.defineProperty(ArgumentTypes,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ArgumentTypes",filename:"src/utils/mergeStyles.ts"}}),"undefined"!==typeof ReplaceReturnType&&ReplaceReturnType&&ReplaceReturnType===Object(ReplaceReturnType)&&Object.isExtensible(ReplaceReturnType)&&Object.defineProperty(ReplaceReturnType,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ReplaceReturnType",filename:"src/utils/mergeStyles.ts"}});var n=function(e,t,o){return function(r,n){var a=[e(r,n)];return o&&a.push(o(r,n)),t&&a.push(t(r,n)),l.a.all(a)}};"undefined"!==typeof n&&n&&n===Object(n)&&Object.isExtensible(n)&&Object.defineProperty(n,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"mergeStyles",filename:"src/utils/mergeStyles.ts"}})}}]);
//# sourceMappingURL=7.461367314053f64495f6.js.map