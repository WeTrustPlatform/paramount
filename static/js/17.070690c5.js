(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{"./src/components/Box/Box.tsx":function(e,t,n){"use strict";n.d(t,"a",function(){return s});var o=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),r=n("./node_modules/react/index.js"),a=n("./node_modules/react-native-web/dist/exports/View/index.js"),l=n("./src/theme/Theme.tsx");"undefined"!==typeof BoxProps&&BoxProps&&BoxProps===Object(BoxProps)&&Object.isExtensible(BoxProps)&&Object.defineProperty(BoxProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"BoxProps",filename:"src/components/Box/Box.tsx"}});var i={backgroundColor:function(e,t){return t.colors.background[e]?{backgroundColor:t.colors.background[e]}:{backgroundColor:e}},elevation:function(e,t){return t.elevations[e]},shape:function(e,t){return t.containerShapes[e]}},s=function(e){var t=e.children,n=e.testID,s=Object(o.a)(e,["children","testID"]),c=Object(l.a)(),u=[],m={};for(var d in s)if(d){var b=i[d];if(b){var f=b(s[d],c);u.push(f)}else m[d]=s[d]}return r.createElement(a.a,{testID:n,style:[m,u],__source:{fileName:"/home/travis/build/WeTrustPlatform/paramount/src/components/Box/Box.tsx",lineNumber:53}},t)};"undefined"!==typeof s&&s&&s===Object(s)&&Object.isExtensible(s)&&Object.defineProperty(s,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Box",filename:"src/components/Box/Box.tsx"}})},"./src/components/Helpers/State.tsx":function(e,t,n){"use strict";n.d(t,"a",function(){return l});var o=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),r=n("./node_modules/react/index.js"),a=n.n(r);"undefined"!==typeof StateRenderProps&&StateRenderProps&&StateRenderProps===Object(StateRenderProps)&&Object.isExtensible(StateRenderProps)&&Object.defineProperty(StateRenderProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"StateRenderProps",filename:"src/components/Helpers/State.tsx"}}),"undefined"!==typeof StateProps&&StateProps&&StateProps===Object(StateProps)&&Object.isExtensible(StateProps)&&Object.defineProperty(StateProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"StateProps",filename:"src/components/Helpers/State.tsx"}});var l=function(e){var t=e.children,n=e.initial,r=void 0!==n&&n,l=a.a.useState(r),i=Object(o.a)(l,2),s=i[0],c=i[1];return t({state:s,setState:a.a.useCallback(function(e){c(e)},[])})};"undefined"!==typeof l&&l&&l===Object(l)&&Object.isExtensible(l)&&Object.defineProperty(l,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"State",filename:"src/components/Helpers/State.tsx"}})},"./src/components/Icon/Icon.web.tsx":function(e,t,n){"use strict";n.d(t,"a",function(){return i});var o=n("./node_modules/react/index.js"),r=n("./node_modules/react-icons/fi/index.esm.js"),a=n("./src/theme/Theme.tsx"),l=n("./src/components/Typography/Text.styles.ts");var i=function(e){var t=e.name,n=e.color,i=e.size,s=Object(a.a)(),c=r["Fi".concat(function(e){var t=e.replace(/(\-\w)/g,function(e){return e[1].toUpperCase()});return t.charAt(0).toUpperCase()+t.slice(1)}(t))];return o.createElement(c,{color:n?Object(l.b)(s.colors.text)(n):n,size:i,__source:{fileName:"/home/travis/build/WeTrustPlatform/paramount/src/components/Icon/Icon.web.tsx",lineNumber:23}})};"undefined"!==typeof i&&i&&i===Object(i)&&Object.isExtensible(i)&&Object.defineProperty(i,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Icon",filename:"src/components/Icon/Icon.web.tsx"}})},"./src/components/Inputs/TextInput.mdx":function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return f});var o=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),r=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/extends.js"),a=(n("./node_modules/react/index.js"),n("./node_modules/@mdx-js/react/dist/index.es.js")),l=n("./node_modules/docz/dist/index.esm.js"),i=n("./src/components/Box/Box.tsx"),s=n("./src/components/Helpers/State.tsx"),c=n("./src/components/Icon/Icon.web.tsx"),u=n("./src/components/Inputs/TextInput.tsx"),m="/home/travis/build/WeTrustPlatform/paramount/src/components/Inputs/TextInput.mdx",d={},b="wrapper";function f(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)(b,Object(r.a)({},d,n,{components:t,mdxType:"MDXLayout",__source:{fileName:m,lineNumber:21}}),Object(a.b)("h1",Object(r.a)({id:"textinput"},{__source:{fileName:m,lineNumber:24}}),"TextInput"),Object(a.b)("p",{__source:{fileName:m,lineNumber:27}},"Composes React Native's ",Object(a.b)("inlineCode",{parentName:"p",__source:{fileName:m,lineNumber:27}},"TextInput")),Object(a.b)("h2",Object(r.a)({id:"usage"},{__source:{fileName:m,lineNumber:28}}),"Usage"),Object(a.b)(l.c,{__position:0,__code:'<State initial={{ value: \'\' }}>\n  {({ state, setState }) => (\n    <TextInput\n      value={state.value}\n      placeholder="TextInput"\n      size="large"\n      onChangeText={text => setState({ value: text })}\n      leftIcon={<Icon name="menu" size={24} />}\n      isInvalid={false}\n      isClearable // Mutually exclusive with rightIcon\n      onClear={() => console.log(\'Cleared!\')} // Only triggered with `isClearable`\n    />\n  )}\n</State>',__scope:{props:this?this.props:n,Playground:l.c,Props:l.d,Box:i.a,State:s.a,Icon:c.a,TextInput:u.a},mdxType:"Playground",__source:{fileName:m,lineNumber:31}},Object(a.b)(s.a,{initial:{value:""},mdxType:"State",__source:{fileName:m,lineNumber:40}},function(e){var t=e.state,n=e.setState;return Object(a.b)(u.a,{value:t.value,placeholder:"TextInput",size:"large",onChangeText:function(e){return n({value:e})},leftIcon:Object(a.b)(c.a,{name:"menu",size:24,mdxType:"Icon",__source:{fileName:m,lineNumber:48}}),isInvalid:!1,isClearable:!0,onClear:function(){return console.log("Cleared!")},mdxType:"TextInput",__source:{fileName:m,lineNumber:46}})})),Object(a.b)("h2",Object(r.a)({id:"props"},{__source:{fileName:m,lineNumber:53}}),"Props"),Object(a.b)(l.d,{of:u.a,mdxType:"Props",__source:{fileName:m,lineNumber:56}}),Object(a.b)("h2",Object(r.a)({id:"customization"},{__source:{fileName:m,lineNumber:57}}),"Customization"),Object(a.b)("p",{__source:{fileName:m,lineNumber:60}},"Using ",Object(a.b)("inlineCode",{parentName:"p",__source:{fileName:m,lineNumber:60}},"getStyles")," prop"),Object(a.b)("pre",{__source:{fileName:m,lineNumber:61}},Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-tsx"},{__source:{fileName:m,lineNumber:61}}),"TextInputStyles {\n  inputStyle: TextStyle;\n  placeholderTextColor: string;\n  containerStyle: ViewStyle;\n  leftContainerStyle: ViewStyle;\n  rightContainerStyle: ViewStyle;\n}\n\ngetStyles={(TextInputProps, Theme) => TextInputStyles}\n")),Object(a.b)("p",{__source:{fileName:m,lineNumber:73}},"Markup"),Object(a.b)("pre",{__source:{fileName:m,lineNumber:74}},Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-tsx"},{__source:{fileName:m,lineNumber:74}}),"<View containerStyle>\n  <View leftContainerStyle>{leftIcon}</View>\n  <RNTextInput inputStyle placeholderTextColor />\n  <View rightContainerStyle>{rightIcon}</View>\n</View>\n")))}f&&f===Object(f)&&Object.isExtensible(f)&&Object.defineProperty(f,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src/components/Inputs/TextInput.mdx"}}),f.isMDXComponent=!0},"./src/components/Inputs/TextInput.tsx":function(e,t,n){"use strict";var o=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/extends.js"),r=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),a=n("./node_modules/react/index.js"),l=n("./node_modules/react-native-web/dist/exports/TextInput/index.js"),i=n("./node_modules/react-native-web/dist/exports/TouchableOpacity/index.js"),s=n("./node_modules/react-native-web/dist/exports/View/index.js"),c=n("./src/theme/Theme.tsx"),u=n("./src/utils/mergeStyles.ts"),m=n("./src/components/Icon/Icon.web.tsx"),d=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread.js");"undefined"!==typeof TextInputStyles&&TextInputStyles&&TextInputStyles===Object(TextInputStyles)&&Object.isExtensible(TextInputStyles)&&Object.defineProperty(TextInputStyles,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"TextInputStyles",filename:"src/components/Inputs/TextInput.styles.ts"}}),"undefined"!==typeof GetTextInputStyles&&GetTextInputStyles&&GetTextInputStyles===Object(GetTextInputStyles)&&Object.isExtensible(GetTextInputStyles)&&Object.defineProperty(GetTextInputStyles,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"GetTextInputStyles",filename:"src/components/Inputs/TextInput.styles.ts"}});var b=function(e,t){var n=e.size,o=void 0===n?"medium":n,r=e.isClearable,a=void 0!==r&&r,l=e.isDisabled,i=void 0!==l&&l,s=e.isInvalid,c=void 0!==s&&s,u=e.numberOfLines,m=!!e.leftIcon,b=!(!e.rightIcon&&!a),f=t.controlHeights[o];return{containerStyle:{position:"relative"},inputStyle:Object(d.a)({backgroundColor:t.colors.background.content,borderColor:t.colors.border.default,borderRadius:t.controlBorderRadius[o],borderWidth:1,color:t.colors.text.default,height:t.controlHeights[o],paddingLeft:t.controlPaddings[o],paddingRight:t.controlPaddings[o],width:"100%"},t.textSizes[o],i?{backgroundColor:t.colors.background.greyDark}:{},c?{borderColor:t.colors.border.danger}:{},u?{height:u*f,paddingVertical:16}:{},m&&{paddingLeft:40},b&&{paddingRight:40}),leftContainerStyle:{alignItems:"center",display:"flex",height:"100%",justifyContent:"center",left:0,paddingHorizontal:8,position:"absolute",zIndex:1},placeholderTextColor:t.colors.text.muted,rightContainerStyle:{alignItems:"center",display:"flex",height:"100%",justifyContent:"center",paddingHorizontal:8,position:"absolute",right:0,zIndex:1}}};b&&b===Object(b)&&Object.isExtensible(b)&&Object.defineProperty(b,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"getTextInputStyles",filename:"src/components/Inputs/TextInput.styles.ts"}}),n.d(t,"a",function(){return h});var f="/home/travis/build/WeTrustPlatform/paramount/src/components/Inputs/TextInput.tsx";"undefined"!==typeof TextInputProps&&TextInputProps&&TextInputProps===Object(TextInputProps)&&Object.isExtensible(TextInputProps)&&Object.defineProperty(TextInputProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"TextInputProps",filename:"src/components/Inputs/TextInput.tsx"}});var p=function(e){var t=e.getStyles,n=e.innerRef,d=e.isClearable,p=void 0!==d&&d,h=e.isDisabled,g=void 0!==h&&h,x=(e.isInvalid,e.leftIcon),y=e.onClear,j=void 0===y?function(){}:y,O=e.rightIcon,_=(e.size,e.value),T=e.textContentType,S=e.onChangeText,C=void 0===S?function(){}:S,v=e.placeholderTextColor,P=Object(r.a)(e,["getStyles","innerRef","isClearable","isDisabled","isInvalid","leftIcon","onClear","rightIcon","size","value","textContentType","onChangeText","placeholderTextColor"]),k=Object(c.a)(),I=Object(u.a)(b,t)(e,k),E=I.inputStyle,w=I.placeholderTextColor,z=I.containerStyle,F=I.leftContainerStyle,B=I.rightContainerStyle;return a.createElement(s.a,{style:z,__source:{fileName:f,lineNumber:100}},x&&a.createElement(s.a,{style:F,__source:{fileName:f,lineNumber:101}},x),a.createElement(l.a,Object(o.a)({ref:n,style:E,editable:!g,placeholderTextColor:v||w,name:T,value:_,onChangeText:C,textContentType:T},P,{__source:{fileName:f,lineNumber:104}})),(_&&p||O)&&a.createElement(s.a,{style:B,__source:{fileName:f,lineNumber:116}},_&&p?a.createElement(i.a,{onPress:function(){C(""),j()},__source:{fileName:f,lineNumber:118}},a.createElement(m.a,{name:"x",size:24,color:k.colors.text.default,__source:{fileName:f,lineNumber:124}})):O))},h=a.forwardRef(function(e,t){return a.createElement(p,Object(o.a)({},e,{innerRef:t,__source:{fileName:f,lineNumber:137}}))});"undefined"!==typeof h&&h&&h===Object(h)&&Object.isExtensible(h)&&Object.defineProperty(h,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"TextInput",filename:"src/components/Inputs/TextInput.tsx"}})},"./src/components/Typography/Text.styles.ts":function(e,t,n){"use strict";n.d(t,"a",function(){return r}),n.d(t,"b",function(){return a}),n.d(t,"c",function(){return i});var o=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread.js");"undefined"!==typeof TextStyles&&TextStyles&&TextStyles===Object(TextStyles)&&Object.isExtensible(TextStyles)&&Object.defineProperty(TextStyles,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"TextStyles",filename:"src/components/Typography/Text.styles.ts"}}),"undefined"!==typeof GetTextStyles&&GetTextStyles&&GetTextStyles===Object(GetTextStyles)&&Object.isExtensible(GetTextStyles)&&Object.defineProperty(GetTextStyles,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"GetTextStyles",filename:"src/components/Typography/Text.styles.ts"}});var r=function(e){return function(t){if(t)return e[t]||t}};"undefined"!==typeof r&&r&&r===Object(r)&&Object.isExtensible(r)&&Object.defineProperty(r,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"getFontWeight",filename:"src/components/Typography/Text.styles.ts"}});var a=function(e){return function(t){return e[t]||t}};"undefined"!==typeof a&&a&&a===Object(a)&&Object.isExtensible(a)&&Object.defineProperty(a,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"getTextColor",filename:"src/components/Typography/Text.styles.ts"}});var l=function(e){return function(t){return e[t]||{fontSize:t}}};l&&l===Object(l)&&Object.isExtensible(l)&&Object.defineProperty(l,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"getTextSize",filename:"src/components/Typography/Text.styles.ts"}});var i=function(e,t){var n=e.color,i=void 0===n?"default":n,s=e.size,c=void 0===s?"medium":s,u=e.align,m=void 0===u?"left":u,d=e.weight,b=e.isItalic,f=void 0!==b&&b,p=e.transform,h=l(t.textSizes)(c);return{textStyle:Object(o.a)({},h,{color:a(t.colors.text)(i),fontFamily:t.fontFamilies.text,fontWeight:r(t.fontWeights)(d)||h.fontWeight,textAlign:m},f&&{fontStyle:"italic"},p&&{textTransform:p})}};"undefined"!==typeof i&&i&&i===Object(i)&&Object.isExtensible(i)&&Object.defineProperty(i,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"getTextStyles",filename:"src/components/Typography/Text.styles.ts"}})},"./src/theme/Theme.tsx":function(e,t,n){"use strict";var o=n("./node_modules/deepmerge/dist/umd.js"),r=n.n(o),a=n("./node_modules/react/index.js"),l=n.n(a),i=n("./node_modules/react-native-web/dist/exports/Platform/index.js");"undefined"!==typeof ColorPalette&&ColorPalette&&ColorPalette===Object(ColorPalette)&&Object.isExtensible(ColorPalette)&&Object.defineProperty(ColorPalette,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ColorPalette",filename:"src/theme/palette.ts"}}),"undefined"!==typeof Palette&&Palette&&Palette===Object(Palette)&&Object.isExtensible(Palette)&&Object.defineProperty(Palette,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Palette",filename:"src/theme/palette.ts"}});var s={lightest:"#fafafa",light:"#eeeeee",base:"#cccccc",dark:"#a7a7a7",darkest:"#7e7e7e"},c={lightest:"#e5f5ff",light:"#ceecff",base:"#1ca5F7",dark:"#59a9de",darkest:"#33495f"},u={lightest:"#f9e1de",light:"#f9aa9f",base:"#d26557",dark:"#bb584e",darkest:"#b74033"},m={lightest:"#fce8cf",light:"#f2c58a",base:"#f3b058",dark:"#ec8e30",darkest:"#b26500"},d={lightest:"#fef8e7",light:"#fbe6a2",base:"#f7d154",dark:"#d1b047",darkest:"#7e6514"},b={lightest:"#eafff3",light:"#c2edd5",base:"#54bf84",dark:"#42a46e",darkest:"#16a054"},f={lightest:"#d6fcf7",light:"#c0f9f2",base:"#67c6bb",dark:"#3fa296",darkest:"#1b877a"},p={lightest:"#f8f7fc",light:"#eae7f8",base:"#735dd0",dark:"#37248f",darkest:"#37248f"};"undefined"!==typeof purple&&purple&&purple===Object(purple)&&Object.isExtensible(purple)&&Object.defineProperty(purple,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"purple",filename:"src/theme/palette.ts"}}),"undefined"!==typeof teal&&teal&&teal===Object(teal)&&Object.isExtensible(teal)&&Object.defineProperty(teal,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"teal",filename:"src/theme/palette.ts"}}),"undefined"!==typeof green&&green&&green===Object(green)&&Object.isExtensible(green)&&Object.defineProperty(green,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"green",filename:"src/theme/palette.ts"}}),"undefined"!==typeof yellow&&yellow&&yellow===Object(yellow)&&Object.isExtensible(yellow)&&Object.defineProperty(yellow,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"yellow",filename:"src/theme/palette.ts"}}),"undefined"!==typeof orange&&orange&&orange===Object(orange)&&Object.isExtensible(orange)&&Object.defineProperty(orange,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"orange",filename:"src/theme/palette.ts"}}),"undefined"!==typeof red&&red&&red===Object(red)&&Object.isExtensible(red)&&Object.defineProperty(red,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"red",filename:"src/theme/palette.ts"}}),"undefined"!==typeof blue&&blue&&blue===Object(blue)&&Object.isExtensible(blue)&&Object.defineProperty(blue,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"blue",filename:"src/theme/palette.ts"}}),"undefined"!==typeof neutral&&neutral&&neutral===Object(neutral)&&Object.isExtensible(neutral)&&Object.defineProperty(neutral,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"neutral",filename:"src/theme/palette.ts"}});var h={small:4,medium:4,large:4},g={background:{base:"white",content:"white",overlay:"rgba(0,0,0,0.3)",greyLight:s.lightest,greyDefault:"#F5F6F7",greyDark:s.light,primaryLight:f.lightest,primaryDefault:f.base,primaryDark:f.dark,secondaryLight:m.lightest,secondaryDefault:m.base,secondaryDark:m.dark,dangerLight:u.lightest,dangerDefault:u.base,dangerDark:u.dark,infoLight:c.lightest,infoDefault:c.base,infoDark:c.dark,successLight:b.lightest,successDefault:b.base,successDark:b.dark,warningLight:m.lightest,warningDefault:m.base,warningDark:m.dark},border:{default:s.light,primary:f.darkest,secondary:m.darkest,danger:u.darkest,info:c.darkest,success:b.darkest,warning:m.darkest},button:{disabled:s.light,disabledText:s.darkest,default:s.lightest,defaultText:s.darkest,primary:f.base,primaryText:"white",secondary:m.base,secondaryText:"white",danger:u.base,dangerText:"white"},text:{link:s.darkest,default:s.darkest,muted:s.dark,white:"white",selected:"white",primary:f.darkest,secondary:m.darkest,danger:u.darkest,info:c.darkest,success:b.darkest,warning:m.darkest}},x=[{elevation:0,shadowColor:s.dark,shadowOffset:{width:0,height:0},shadowOpacity:0,shadowRadius:0},{elevation:1,shadowColor:s.dark,shadowOffset:{width:1,height:1},shadowOpacity:.15,shadowRadius:8},{elevation:2,shadowColor:s.dark,shadowOffset:{width:2,height:2},shadowOpacity:.2,shadowRadius:10},{elevation:3,shadowColor:s.dark,shadowOffset:{width:3,height:3},shadowOpacity:.25,shadowRadius:12},{elevation:4,shadowColor:s.dark,shadowOffset:{width:4,height:4},shadowOpacity:.3,shadowRadius:8},{elevation:5,shadowColor:s.dark,shadowOffset:{width:5,height:5},shadowOpacity:.35,shadowRadius:8}],y={colors:g,fills:{solid:{neutral:{backgroundColor:s.base,color:"white"},blue:{backgroundColor:c.base,color:"white"},red:{backgroundColor:u.base,color:"white"},orange:{backgroundColor:m.base,color:"white"},yellow:{backgroundColor:d.base,color:d.darkest},green:{backgroundColor:b.base,color:"white"},teal:{backgroundColor:f.base,color:"white"},purple:{backgroundColor:p.base,color:"white"}},subtle:{neutral:{backgroundColor:s.light,color:s.darkest},blue:{backgroundColor:c.light,color:c.darkest},red:{backgroundColor:u.light,color:u.darkest},orange:{backgroundColor:m.light,color:m.darkest},yellow:{backgroundColor:d.light,color:d.darkest},green:{backgroundColor:b.light,color:b.darkest},teal:{backgroundColor:f.light,color:f.darkest},purple:{backgroundColor:p.light,color:p.darkest}}},fontFamilies:"web"===i.a.OS?{heading:'"SF UI Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',mono:'"SF Mono", "Monaco", "Inconsolata", "Fira Mono", "Droid Sans Mono", "Source Code Pro", monospace',text:'"SF UI Text", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"'}:{heading:"System",mono:"System",text:"System"},fontWeights:{bold:"bold",light:"300",normal:"normal"},headingSizes:{xxxlarge:{fontSize:35,letterSpacing:-.2,lineHeight:40},xxlarge:{fontSize:29,letterSpacing:-.2,lineHeight:32},xlarge:{fontSize:24,letterSpacing:-.07,lineHeight:28},large:{fontSize:20,letterSpacing:-.07,lineHeight:24},medium:{fontSize:16,letterSpacing:-.05,lineHeight:20},small:{fontSize:14,letterSpacing:-.05,lineHeight:20}},paragraphSizes:{small:{fontSize:14,lineHeight:24},medium:{fontSize:16,lineHeight:21},large:{fontSize:18,lineHeight:18}},textSizes:{large:{fontSize:20},medium:{fontSize:16},small:{fontSize:14},xsmall:{fontSize:12}},elevations:x,controlBorderRadius:h,controlHeights:{small:40,medium:48,large:56},controlPaddings:{small:8,medium:16,large:24},containerShapes:{circle:{borderRadius:999},pill:{borderRadius:999},rounded:{borderRadius:h.medium},roundedBottom:{borderBottomLeftRadius:h.medium,borderBottomRightRadius:h.medium},roundedLeft:{borderBottomLeftRadius:h.medium,borderTopLeftRadius:h.medium},roundedRight:{borderBottomRightRadius:h.medium,borderTopRightRadius:h.medium},roundedTop:{borderTopLeftRadius:h.medium,borderTopRightRadius:h.medium},square:{borderRadius:0}},components:{}};"undefined"!==typeof y&&y&&y===Object(y)&&Object.isExtensible(y)&&Object.defineProperty(y,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"defaultTheme",filename:"src/theme/defaultTheme.ts"}}),n.d(t,"a",function(){return T});"undefined"!==typeof TextSizes&&TextSizes&&TextSizes===Object(TextSizes)&&Object.isExtensible(TextSizes)&&Object.defineProperty(TextSizes,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"TextSizes",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof TextSize&&TextSize&&TextSize===Object(TextSize)&&Object.isExtensible(TextSize)&&Object.defineProperty(TextSize,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"TextSize",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof HeadingSizes&&HeadingSizes&&HeadingSizes===Object(HeadingSizes)&&Object.isExtensible(HeadingSizes)&&Object.defineProperty(HeadingSizes,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"HeadingSizes",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof HeadingSize&&HeadingSize&&HeadingSize===Object(HeadingSize)&&Object.isExtensible(HeadingSize)&&Object.defineProperty(HeadingSize,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"HeadingSize",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof ParagraphSizes&&ParagraphSizes&&ParagraphSizes===Object(ParagraphSizes)&&Object.isExtensible(ParagraphSizes)&&Object.defineProperty(ParagraphSizes,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ParagraphSizes",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof ParagraphSize&&ParagraphSize&&ParagraphSize===Object(ParagraphSize)&&Object.isExtensible(ParagraphSize)&&Object.defineProperty(ParagraphSize,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ParagraphSize",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof FontFamilies&&FontFamilies&&FontFamilies===Object(FontFamilies)&&Object.isExtensible(FontFamilies)&&Object.defineProperty(FontFamilies,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"FontFamilies",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof FontFamily&&FontFamily&&FontFamily===Object(FontFamily)&&Object.isExtensible(FontFamily)&&Object.defineProperty(FontFamily,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"FontFamily",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof RNFontWeight&&RNFontWeight&&RNFontWeight===Object(RNFontWeight)&&Object.isExtensible(RNFontWeight)&&Object.defineProperty(RNFontWeight,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"RNFontWeight",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof FontWeights&&FontWeights&&FontWeights===Object(FontWeights)&&Object.isExtensible(FontWeights)&&Object.defineProperty(FontWeights,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"FontWeights",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof FontWeight&&FontWeight&&FontWeight===Object(FontWeight)&&Object.isExtensible(FontWeight)&&Object.defineProperty(FontWeight,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"FontWeight",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof TextColors&&TextColors&&TextColors===Object(TextColors)&&Object.isExtensible(TextColors)&&Object.defineProperty(TextColors,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"TextColors",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof TextColor&&TextColor&&TextColor===Object(TextColor)&&Object.isExtensible(TextColor)&&Object.defineProperty(TextColor,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"TextColor",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof ButtonColors&&ButtonColors&&ButtonColors===Object(ButtonColors)&&Object.isExtensible(ButtonColors)&&Object.defineProperty(ButtonColors,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ButtonColors",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof ButtonColorsWithText&&ButtonColorsWithText&&ButtonColorsWithText===Object(ButtonColorsWithText)&&Object.isExtensible(ButtonColorsWithText)&&Object.defineProperty(ButtonColorsWithText,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ButtonColorsWithText",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof ButtonColor&&ButtonColor&&ButtonColor===Object(ButtonColor)&&Object.isExtensible(ButtonColor)&&Object.defineProperty(ButtonColor,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ButtonColor",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof BorderColors&&BorderColors&&BorderColors===Object(BorderColors)&&Object.isExtensible(BorderColors)&&Object.defineProperty(BorderColors,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"BorderColors",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof BorderColor&&BorderColor&&BorderColor===Object(BorderColor)&&Object.isExtensible(BorderColor)&&Object.defineProperty(BorderColor,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"BorderColor",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof BackgroundColors&&BackgroundColors&&BackgroundColors===Object(BackgroundColors)&&Object.isExtensible(BackgroundColors)&&Object.defineProperty(BackgroundColors,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"BackgroundColors",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof BackgroundColor&&BackgroundColor&&BackgroundColor===Object(BackgroundColor)&&Object.isExtensible(BackgroundColor)&&Object.defineProperty(BackgroundColor,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"BackgroundColor",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof Colors&&Colors&&Colors===Object(Colors)&&Object.isExtensible(Colors)&&Object.defineProperty(Colors,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Colors",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof Elevations&&Elevations&&Elevations===Object(Elevations)&&Object.isExtensible(Elevations)&&Object.defineProperty(Elevations,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Elevations",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof Elevation&&Elevation&&Elevation===Object(Elevation)&&Object.isExtensible(Elevation)&&Object.defineProperty(Elevation,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Elevation",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof ControlSizes&&ControlSizes&&ControlSizes===Object(ControlSizes)&&Object.isExtensible(ControlSizes)&&Object.defineProperty(ControlSizes,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ControlSizes",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof ControlSize&&ControlSize&&ControlSize===Object(ControlSize)&&Object.isExtensible(ControlSize)&&Object.defineProperty(ControlSize,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ControlSize",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof FillColorProps&&FillColorProps&&FillColorProps===Object(FillColorProps)&&Object.isExtensible(FillColorProps)&&Object.defineProperty(FillColorProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"FillColorProps",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof FillColors&&FillColors&&FillColors===Object(FillColors)&&Object.isExtensible(FillColors)&&Object.defineProperty(FillColors,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"FillColors",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof FillColor&&FillColor&&FillColor===Object(FillColor)&&Object.isExtensible(FillColor)&&Object.defineProperty(FillColor,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"FillColor",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof Fills&&Fills&&Fills===Object(Fills)&&Object.isExtensible(Fills)&&Object.defineProperty(Fills,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Fills",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof ContainerShapes&&ContainerShapes&&ContainerShapes===Object(ContainerShapes)&&Object.isExtensible(ContainerShapes)&&Object.defineProperty(ContainerShapes,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ContainerShapes",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof ContainerShape&&ContainerShape&&ContainerShape===Object(ContainerShape)&&Object.isExtensible(ContainerShape)&&Object.defineProperty(ContainerShape,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ContainerShape",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof Theme&&Theme&&Theme===Object(Theme)&&Object.isExtensible(Theme)&&Object.defineProperty(Theme,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Theme",filename:"src/theme/Theme.tsx"}});var j=l.a.createContext(y);"undefined"!==typeof j&&j&&j===Object(j)&&Object.isExtensible(j)&&Object.defineProperty(j,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ThemeContext",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof ThemeProviderProps&&ThemeProviderProps&&ThemeProviderProps===Object(ThemeProviderProps)&&Object.isExtensible(ThemeProviderProps)&&Object.defineProperty(ThemeProviderProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ThemeProviderProps",filename:"src/theme/Theme.tsx"}});var O=function(e){return e?r()(y,e):y};O&&O===Object(O)&&Object.isExtensible(O)&&Object.defineProperty(O,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"createTheme",filename:"src/theme/Theme.tsx"}});var _=function(e){var t=e.children,n=e.value,o=O(void 0===n?y:n);return l.a.createElement(j.Provider,{value:o,__source:{fileName:"/home/travis/build/WeTrustPlatform/paramount/src/theme/Theme.tsx",lineNumber:315}},t)};_&&_===Object(_)&&Object.isExtensible(_)&&Object.defineProperty(_,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ThemeProvider",filename:"src/theme/Theme.tsx"}});var T=function(){return l.a.useContext(j)};"undefined"!==typeof T&&T&&T===Object(T)&&Object.isExtensible(T)&&Object.defineProperty(T,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"useTheme",filename:"src/theme/Theme.tsx"}})},"./src/utils/mergeStyles.ts":function(e,t,n){"use strict";n.d(t,"a",function(){return a});var o=n("./node_modules/deepmerge/dist/umd.js"),r=n.n(o);"undefined"!==typeof GetStyles&&GetStyles&&GetStyles===Object(GetStyles)&&Object.isExtensible(GetStyles)&&Object.defineProperty(GetStyles,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"GetStyles",filename:"src/utils/mergeStyles.ts"}}),"undefined"!==typeof ArgumentTypes&&ArgumentTypes&&ArgumentTypes===Object(ArgumentTypes)&&Object.isExtensible(ArgumentTypes)&&Object.defineProperty(ArgumentTypes,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ArgumentTypes",filename:"src/utils/mergeStyles.ts"}}),"undefined"!==typeof ReplaceReturnType&&ReplaceReturnType&&ReplaceReturnType===Object(ReplaceReturnType)&&Object.isExtensible(ReplaceReturnType)&&Object.defineProperty(ReplaceReturnType,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ReplaceReturnType",filename:"src/utils/mergeStyles.ts"}});var a=function(e,t,n){return function(o,a){var l=[e(o,a)];return n&&l.push(n(o,a)),t&&l.push(t(o,a)),r.a.all(l)}};"undefined"!==typeof a&&a&&a===Object(a)&&Object.isExtensible(a)&&Object.defineProperty(a,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"mergeStyles",filename:"src/utils/mergeStyles.ts"}})}}]);
//# sourceMappingURL=17.d72e10165698b4e44a0d.js.map