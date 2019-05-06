(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{"./src/components/Button/Button.mdx":function(e,t,o){var n=o("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.default=p;var r=n(o("./node_modules/@babel/runtime/helpers/extends.js")),a=n(o("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js")),i=(n(o("./node_modules/react/index.js")),o("./node_modules/@mdx-js/react/dist/index.es.js")),l=o("./node_modules/docz/dist/index.esm.js"),s=o("./src/components/Button/Button.tsx"),u=o("./src/components/Layout/index.ts"),c={},d="wrapper";function p(e){var t=e.components,o=(0,a.default)(e,["components"]);return(0,i.mdx)(d,(0,r.default)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,i.mdx)("h1",{id:"button"},"Button"),(0,i.mdx)("h3",{id:"usage"},"Usage"),(0,i.mdx)(l.Playground,{__position:0,__code:'<Button\n  color="primary"\n  appearance="primary"\n  size="large"\n  isLoading={false}\n  isActive={false}\n  isDisabled={false}\n  isInline={false}\n  iconBefore={null}\n  iconAfter={null}\n  iconLoading={null}\n  title="Usage"\n  onPress={() => console.log(\'Pressed!\')}\n  getStyles={(props, theme) => ({\n    buttonStyle: {},\n    textStyle: {},\n    focusColor: \'\',\n  })}\n/>',__scope:{props:this?this.props:o,Playground:l.Playground,Props:l.Props,Button:s.Button,Box:u.Box},mdxType:"Playground"},(0,i.mdx)(s.Button,{color:"primary",appearance:"primary",size:"large",isLoading:!1,isActive:!1,isDisabled:!1,isInline:!1,iconBefore:null,iconAfter:null,iconLoading:null,title:"Usage",onPress:function(){return console.log("Pressed!")},getStyles:function(e,t){return{buttonStyle:{},textStyle:{},focusColor:""}},mdxType:"Button"})),(0,i.mdx)("h3",{id:"variants"},"Variants"),(0,i.mdx)(l.Playground,{__position:1,__code:'<Box flexDirection="row">\n  <Box paddingRight={16} height={240} justifyContent="space-between">\n    <Button color="default" title="Default" />\n    <Button color="default" appearance="outline" title="Default" />\n    <Button color="default" appearance="minimal" title="Default" />\n    <Button color="default" appearance="primary" title="Default" isLoading />\n  </Box>\n  <Box paddingRight={16} height={240} justifyContent="space-between">\n    <Button color="primary" title="Primary" />\n    <Button color="primary" appearance="outline" title="Primary" />\n    <Button color="primary" appearance="minimal" title="Primary" />\n    <Button color="primary" appearance="primary" title="Primary" isLoading />\n  </Box>\n  <Box paddingRight={16} height={240} justifyContent="space-between">\n    <Button color="secondary" title="Secondary" />\n    <Button color="secondary" appearance="outline" title="Secondary" />\n    <Button color="secondary" appearance="minimal" title="Secondary" />\n    <Button\n      color="secondary"\n      appearance="primary"\n      title="Secondary"\n      isLoading\n    />\n  </Box>\n  <Box paddingRight={16} height={240} justifyContent="space-between">\n    <Button color="danger" title="Danger" />\n    <Button color="danger" appearance="outline" title="Danger" />\n    <Button color="danger" appearance="minimal" title="Danger" />\n    <Button color="danger" appearance="primary" title="Danger" isLoading />\n  </Box>\n</Box>',__scope:{props:this?this.props:o,Playground:l.Playground,Props:l.Props,Button:s.Button,Box:u.Box},mdxType:"Playground"},(0,i.mdx)(u.Box,{flexDirection:"row",mdxType:"Box"},(0,i.mdx)(u.Box,{paddingRight:16,height:240,justifyContent:"space-between",mdxType:"Box"},(0,i.mdx)(s.Button,{color:"default",title:"Default",mdxType:"Button"}),(0,i.mdx)(s.Button,{color:"default",appearance:"outline",title:"Default",mdxType:"Button"}),(0,i.mdx)(s.Button,{color:"default",appearance:"minimal",title:"Default",mdxType:"Button"}),(0,i.mdx)(s.Button,{color:"default",appearance:"primary",title:"Default",isLoading:!0,mdxType:"Button"})),(0,i.mdx)(u.Box,{paddingRight:16,height:240,justifyContent:"space-between",mdxType:"Box"},(0,i.mdx)(s.Button,{color:"primary",title:"Primary",mdxType:"Button"}),(0,i.mdx)(s.Button,{color:"primary",appearance:"outline",title:"Primary",mdxType:"Button"}),(0,i.mdx)(s.Button,{color:"primary",appearance:"minimal",title:"Primary",mdxType:"Button"}),(0,i.mdx)(s.Button,{color:"primary",appearance:"primary",title:"Primary",isLoading:!0,mdxType:"Button"})),(0,i.mdx)(u.Box,{paddingRight:16,height:240,justifyContent:"space-between",mdxType:"Box"},(0,i.mdx)(s.Button,{color:"secondary",title:"Secondary",mdxType:"Button"}),(0,i.mdx)(s.Button,{color:"secondary",appearance:"outline",title:"Secondary",mdxType:"Button"}),(0,i.mdx)(s.Button,{color:"secondary",appearance:"minimal",title:"Secondary",mdxType:"Button"}),(0,i.mdx)(s.Button,{color:"secondary",appearance:"primary",title:"Secondary",isLoading:!0,mdxType:"Button"})),(0,i.mdx)(u.Box,{paddingRight:16,height:240,justifyContent:"space-between",mdxType:"Box"},(0,i.mdx)(s.Button,{color:"danger",title:"Danger",mdxType:"Button"}),(0,i.mdx)(s.Button,{color:"danger",appearance:"outline",title:"Danger",mdxType:"Button"}),(0,i.mdx)(s.Button,{color:"danger",appearance:"minimal",title:"Danger",mdxType:"Button"}),(0,i.mdx)(s.Button,{color:"danger",appearance:"primary",title:"Danger",isLoading:!0,mdxType:"Button"})))),(0,i.mdx)("h3",{id:"positioning-inline-button-with-different-sizes"},"Positioning inline button with different sizes"),(0,i.mdx)(l.Playground,{__position:2,__code:'<Box flexDirection="row" justifyContent="flex-start">\n  <Button isInline color="primary" title="Left small" size="small" />\n</Box>\n<Box flexDirection="row" justifyContent="center">\n  <Button isInline color="primary" title="Center medium" size="medium" />\n</Box>\n<Box flexDirection="row" justifyContent="flex-end">\n  <Button isInline color="primary" title="Right large" size="large" />\n</Box>',__scope:{props:this?this.props:o,Playground:l.Playground,Props:l.Props,Button:s.Button,Box:u.Box},mdxType:"Playground"},(0,i.mdx)(u.Box,{flexDirection:"row",justifyContent:"flex-start",mdxType:"Box"},(0,i.mdx)(s.Button,{isInline:!0,color:"primary",title:"Left small",size:"small",mdxType:"Button"})),(0,i.mdx)(u.Box,{flexDirection:"row",justifyContent:"center",mdxType:"Box"},(0,i.mdx)(s.Button,{isInline:!0,color:"primary",title:"Center medium",size:"medium",mdxType:"Button"})),(0,i.mdx)(u.Box,{flexDirection:"row",justifyContent:"flex-end",mdxType:"Box"},(0,i.mdx)(s.Button,{isInline:!0,color:"primary",title:"Right large",size:"large",mdxType:"Button"}))),(0,i.mdx)("p",null,"If ",(0,i.mdx)("inlineCode",{parentName:"p"},"isInline")," does not inline the button, try wrapping it with ",(0,i.mdx)("inlineCode",{parentName:"p"},"Box")),(0,i.mdx)("h3",{id:"props"},"Props"),(0,i.mdx)(l.Props,{of:s.Button,mdxType:"Props"}))}p&&p===Object(p)&&Object.isExtensible(p)&&Object.defineProperty(p,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src/components/Button/Button.mdx"}}),p.isMDXComponent=!0},"./src/components/Button/Button.styles.ts":function(e,t,o){var n=o("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.getButtonStyles=t.getButtonVariables=void 0;var r=n(o("./node_modules/@babel/runtime/helpers/objectSpread.js")),a=n(o("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js"));"undefined"!==typeof ButtonColorProps&&ButtonColorProps&&ButtonColorProps===Object(ButtonColorProps)&&Object.isExtensible(ButtonColorProps)&&Object.defineProperty(ButtonColorProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ButtonColorProps",filename:"src/components/Button/Button.styles.ts"}}),"undefined"!==typeof ButtonColors&&ButtonColors&&ButtonColors===Object(ButtonColors)&&Object.isExtensible(ButtonColors)&&Object.defineProperty(ButtonColors,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ButtonColors",filename:"src/components/Button/Button.styles.ts"}}),"undefined"!==typeof ButtonColor&&ButtonColor&&ButtonColor===Object(ButtonColor)&&Object.isExtensible(ButtonColor)&&Object.defineProperty(ButtonColor,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ButtonColor",filename:"src/components/Button/Button.styles.ts"}}),"undefined"!==typeof ButtonAppearances&&ButtonAppearances&&ButtonAppearances===Object(ButtonAppearances)&&Object.isExtensible(ButtonAppearances)&&Object.defineProperty(ButtonAppearances,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ButtonAppearances",filename:"src/components/Button/Button.styles.ts"}}),"undefined"!==typeof ButtonAppearance&&ButtonAppearance&&ButtonAppearance===Object(ButtonAppearance)&&Object.isExtensible(ButtonAppearance)&&Object.defineProperty(ButtonAppearance,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ButtonAppearance",filename:"src/components/Button/Button.styles.ts"}}),"undefined"!==typeof SizeStyles&&SizeStyles&&SizeStyles===Object(SizeStyles)&&Object.isExtensible(SizeStyles)&&Object.defineProperty(SizeStyles,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"SizeStyles",filename:"src/components/Button/Button.styles.ts"}}),"undefined"!==typeof ButtonSizes&&ButtonSizes&&ButtonSizes===Object(ButtonSizes)&&Object.isExtensible(ButtonSizes)&&Object.defineProperty(ButtonSizes,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ButtonSizes",filename:"src/components/Button/Button.styles.ts"}}),"undefined"!==typeof ButtonSize&&ButtonSize&&ButtonSize===Object(ButtonSize)&&Object.isExtensible(ButtonSize)&&Object.defineProperty(ButtonSize,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ButtonSize",filename:"src/components/Button/Button.styles.ts"}}),"undefined"!==typeof ButtonVariables&&ButtonVariables&&ButtonVariables===Object(ButtonVariables)&&Object.isExtensible(ButtonVariables)&&Object.defineProperty(ButtonVariables,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ButtonVariables",filename:"src/components/Button/Button.styles.ts"}});var i=function(e){return{appearances:{minimal:{default:{backgroundColor:e.colors.background.content,color:e.colors.text.default,focusColor:e.colors.background.greyDefault},danger:{backgroundColor:e.colors.background.content,color:e.colors.text.danger,focusColor:e.colors.background.greyDefault},primary:{backgroundColor:e.colors.background.content,color:e.colors.text.primary,focusColor:e.colors.background.greyDefault},secondary:{backgroundColor:e.colors.background.content,color:e.colors.text.secondary?e.colors.text.secondary:e.colors.text.default,focusColor:e.colors.background.greyDefault}},primary:{default:{backgroundColor:e.colors.background.greyLight,borderColor:e.colors.border.default,color:e.colors.text.default,focusColor:e.colors.background.greyDefault,loadingBackgroundColor:e.colors.background.overlay},danger:{backgroundColor:e.colors.background.dangerDefault,borderColor:e.colors.border.danger,color:e.colors.text.white,focusColor:e.colors.background.dangerDark,loadingBackgroundColor:e.colors.background.dangerLight},primary:{backgroundColor:e.colors.background.primaryDefault,borderColor:e.colors.border.primary,color:e.colors.text.white,focusColor:e.colors.background.primaryDark,loadingBackgroundColor:e.colors.background.primaryLight},secondary:{backgroundColor:e.colors.background.secondaryDefault,borderColor:e.colors.border.secondary,color:e.colors.text.white,focusColor:e.colors.background.secondaryDark,loadingBackgroundColor:e.colors.background.secondaryLight}},outline:{default:{backgroundColor:e.colors.background.content,borderColor:e.colors.text.default,borderWidth:3,color:e.colors.text.default,focusColor:e.colors.background.greyDefault},danger:{backgroundColor:e.colors.background.content,borderColor:e.colors.border.danger,borderWidth:3,color:e.colors.text.danger,focusColor:e.colors.background.dangerLight},primary:{backgroundColor:e.colors.background.content,borderColor:e.colors.border.primary,borderWidth:3,color:e.colors.text.primary,focusColor:e.colors.background.primaryLight},secondary:{backgroundColor:e.colors.background.content,borderColor:e.colors.border.secondary,borderWidth:3,color:e.colors.text.secondary,focusColor:e.colors.background.secondaryLight}}},disabled:{backgroundColor:e.colors.background.greyDark,color:e.colors.text.muted},sizes:{small:{borderRadius:e.controlBorderRadius.small,fontSize:e.textSizes.small.fontSize||14,height:e.controlHeights.small,paddingLeft:2*e.controlPaddings.small,paddingRight:2*e.controlPaddings.small},medium:{borderRadius:e.controlBorderRadius.medium,fontSize:e.textSizes.medium.fontSize||16,height:e.controlHeights.medium,paddingLeft:2*e.controlPaddings.medium,paddingRight:2*e.controlPaddings.medium},large:{borderRadius:e.controlBorderRadius.large,fontSize:e.textSizes.large.fontSize||20,height:e.controlHeights.large,paddingLeft:2*e.controlPaddings.large,paddingRight:2*e.controlPaddings.large}}}};t.getButtonVariables=i,i&&i===Object(i)&&Object.isExtensible(i)&&Object.defineProperty(i,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"getButtonVariables",filename:"src/components/Button/Button.styles.ts"}}),"undefined"!==typeof ButtonStyles&&ButtonStyles&&ButtonStyles===Object(ButtonStyles)&&Object.isExtensible(ButtonStyles)&&Object.defineProperty(ButtonStyles,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ButtonStyles",filename:"src/components/Button/Button.styles.ts"}}),"undefined"!==typeof ButtonStylesProps&&ButtonStylesProps&&ButtonStylesProps===Object(ButtonStylesProps)&&Object.isExtensible(ButtonStylesProps)&&Object.defineProperty(ButtonStylesProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ButtonStylesProps",filename:"src/components/Button/Button.styles.ts"}}),"undefined"!==typeof GetButtonStyles&&GetButtonStyles&&GetButtonStyles===Object(GetButtonStyles)&&Object.isExtensible(GetButtonStyles)&&Object.defineProperty(GetButtonStyles,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"GetButtonStyles",filename:"src/components/Button/Button.styles.ts"}});var l=function(e,t){var o=e.appearance,n=e.color,l=e.size,s=e.isDisabled,u=e.isLoading,c=e.isInline,d=i(t),p=d.appearances,m=d.sizes,f=d.disabled,g=(0,a.default)(d,["appearances","sizes","disabled"]),y=p[o][n],b=y.color,B=y.focusColor,x=y.loadingBackgroundColor,j=(0,a.default)(y,["color","focusColor","loadingBackgroundColor"]),P=m[l],h=P.fontSize,C=(0,a.default)(P,["fontSize"]),S=f.color,_=(0,a.default)(f,["color"]);return{buttonStyle:(0,r.default)({},s?(0,r.default)({},_,C):(0,r.default)({},C,g,j,u?{backgroundColor:x}:{}),c?{alignSelf:"flex-start",flexDirection:"row",flexWrap:"wrap"}:{}),focusColor:B,textStyle:{alignItems:"center",color:s?S:b,display:"flex",fontSize:h,fontWeight:"600",justifyContent:"center",textAlign:"center"}}};t.getButtonStyles=l,l&&l===Object(l)&&Object.isExtensible(l)&&Object.defineProperty(l,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"getButtonStyles",filename:"src/components/Button/Button.styles.ts"}})},"./src/components/Button/Button.tsx":function(e,t,o){var n=o("./node_modules/@babel/runtime/helpers/interopRequireWildcard.js"),r=o("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.Button=void 0;var a=r(o("./node_modules/@babel/runtime/helpers/extends.js")),i=r(o("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js")),l=n(o("./node_modules/react/index.js")),s=o("./node_modules/react-native-web/dist/index.js"),u=o("./src/theme/index.ts"),c=o("./src/utils/mergeStyles.ts"),d=o("./src/components/Layout/index.ts"),p=o("./src/components/Loading/index.ts"),m=o("./src/components/Typography/index.ts"),f=o("./src/components/Button/Button.styles.ts");"undefined"!==typeof ButtonProps&&ButtonProps&&ButtonProps===Object(ButtonProps)&&Object.isExtensible(ButtonProps)&&Object.defineProperty(ButtonProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ButtonProps",filename:"src/components/Button/Button.tsx"}});var g=function(e){var t=e.appearance,o=void 0===t?"primary":t,n=(e.title,e.color),r=void 0===n?"default":n,p=e.getStyles,m=(e.icon,e.iconAfter),g=e.iconBefore,b=(e.iconLoading,e.isActive,e.isDisabled),B=void 0!==b&&b,x=e.isInline,j=void 0!==x&&x,P=e.isLoading,h=void 0!==P&&P,C=e.onPress,S=void 0===C?function(){}:C,_=e.size,D=void 0===_?"medium":_,v=e.testID,O=(0,i.default)(e,["appearance","title","color","getStyles","icon","iconAfter","iconBefore","iconLoading","isActive","isDisabled","isInline","isLoading","onPress","size","testID"]),k=(0,u.useTheme)(),L=(0,c.mergeStyles)(f.getButtonStyles,p)({appearance:o,color:r,isDisabled:B,isInline:j,isLoading:h,size:D},k),z=L.buttonStyle,w=L.textStyle,T=L.focusColor;return l.createElement(s.TouchableHighlight,(0,a.default)({accessible:!0,accessibilityRole:"button",underlayColor:T,disabled:!(!B&&!h),onPress:S,style:z,testID:v},O),l.createElement(s.View,{style:{alignItems:"center",flexDirection:"row",height:"100%",justifyContent:"center"}},g,l.createElement(d.Box,{paddingLeft:g?8:0,paddingRight:m?8:0},l.createElement(y,(0,a.default)({},e,{textStyle:w}))),m))};t.Button=g,g&&g===Object(g)&&Object.isExtensible(g)&&Object.defineProperty(g,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Button",filename:"src/components/Button/Button.tsx"}}),"undefined"!==typeof ButtonContentProps&&ButtonContentProps&&ButtonContentProps===Object(ButtonContentProps)&&Object.isExtensible(ButtonContentProps)&&Object.defineProperty(ButtonContentProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ButtonContentProps",filename:"src/components/Button/Button.tsx"}});var y=function(e){var t=e.isLoading,o=e.iconLoading,n=e.icon,r=e.title,a=e.textStyle;return t?o||l.createElement(p.LoadingDots,{color:a.color}):n||(r?l.createElement(m.Text,{getStyles:function(){return{textStyle:a}}},r):null)}},"./src/components/Loading/LoadingDots.tsx":function(e,t,o){var n=o("./node_modules/@babel/runtime/helpers/interopRequireWildcard.js"),r=o("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.LoadingDots=void 0;var a=r(o("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/regenerator/index.js")),i=r(o("./node_modules/@babel/runtime/helpers/asyncToGenerator.js")),l=n(o("./node_modules/react/index.js")),s=o("./node_modules/react-native-web/dist/index.js"),u=o("./node_modules/react-spring/native.cjs.js"),c=(0,u.animated)(s.View);"undefined"!==typeof LoadingDotsProps&&LoadingDotsProps&&LoadingDotsProps===Object(LoadingDotsProps)&&Object.isExtensible(LoadingDotsProps)&&Object.defineProperty(LoadingDotsProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"LoadingDotsProps",filename:"src/components/Loading/LoadingDots.tsx"}});var d=["1","2","3"],p=function(e){var t=e.size,o=void 0===t?10:t,n=e.color,r=void 0===n?"#aaa":n,p=(0,u.useTrail)(d.length,{config:{duration:800},from:{opacity:0},reset:!0,to:function(){var e=(0,i.default)(a.default.mark(function e(t){return a.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,t({opacity:1});case 3:return e.next=5,t({opacity:0});case 5:e.next=0;break;case 7:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()});return l.createElement(s.View,{style:{alignItems:"center",flexDirection:"row",justifyContent:"center"}},p.map(function(e,t){return l.createElement(c,{key:d[t],style:{backgroundColor:r,borderRadius:"50%",height:o,marginLeft:3,marginRight:3,opacity:e.opacity,width:o}})}))};t.LoadingDots=p,p&&p===Object(p)&&Object.isExtensible(p)&&Object.defineProperty(p,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"LoadingDots",filename:"src/components/Loading/LoadingDots.tsx"}})},"./src/components/Loading/index.ts":function(e,t,o){Object.defineProperty(t,"__esModule",{value:!0});var n=o("./src/components/Loading/LoadingDots.tsx");Object.keys(n).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return n[e]}})})}}]);
//# sourceMappingURL=21.cb9f407aad8883acd187.js.map