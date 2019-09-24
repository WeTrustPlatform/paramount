(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{"./src/components/Alert/Alert.mdx":function(e,t,o){"use strict";o.r(t),o.d(t,"default",function(){return m});var n=o("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),r=o("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/extends.js"),a=(o("./node_modules/react/index.js"),o("./node_modules/@mdx-js/react/dist/index.es.js")),s=o("./node_modules/docz/dist/index.esm.js"),i=o("./src/components/Alert/Alert.tsx"),l=o("./src/components/Box/Box.tsx"),c=o("./src/components/Button/Button.tsx"),u="/home/travis/build/WeTrustPlatform/paramount/src/components/Alert/Alert.mdx",d={},b="wrapper";function m(e){var t=e.components,o=Object(n.a)(e,["components"]);return Object(a.b)(b,Object(r.a)({},d,o,{components:t,mdxType:"MDXLayout",__source:{fileName:u,lineNumber:21}}),Object(a.b)("h1",Object(r.a)({id:"alert"},{__source:{fileName:u,lineNumber:23}}),"Alert"),Object(a.b)("p",{__source:{fileName:u,lineNumber:26}},"Give feedback to the user about an action or state"),Object(a.b)("h2",Object(r.a)({id:"usage"},{__source:{fileName:u,lineNumber:27}}),"Usage"),Object(a.b)(s.c,{__position:0,__code:'<Box paddingVertical={8}>\n  <Alert title="Info" description="Message" />\n</Box>\n<Box paddingVertical={8}>\n  <Alert intent="success" title="Success" description="Message" />\n</Box>\n<Box paddingVertical={8}>\n  <Alert intent="warning" title="Warning" description="Message" />\n</Box>\n<Box paddingVertical={8}>\n  <Alert\n    intent="danger"\n    title="Danger"\n    description="Message"\n    actionNode={\n      <Button title="Action" appearance="minimal" color="primary" />\n    }\n  />\n</Box>',__scope:{props:this?this.props:o,Playground:s.c,Props:s.d,Alert:i.a,Box:l.a,Button:c.a},mdxType:"Playground",__source:{fileName:u,lineNumber:30}},Object(a.b)(l.a,{paddingVertical:8,mdxType:"Box",__source:{fileName:u,lineNumber:38}},Object(a.b)(i.a,{title:"Info",description:"Message",mdxType:"Alert",__source:{fileName:u,lineNumber:39}})),Object(a.b)(l.a,{paddingVertical:8,mdxType:"Box",__source:{fileName:u,lineNumber:41}},Object(a.b)(i.a,{intent:"success",title:"Success",description:"Message",mdxType:"Alert",__source:{fileName:u,lineNumber:42}})),Object(a.b)(l.a,{paddingVertical:8,mdxType:"Box",__source:{fileName:u,lineNumber:44}},Object(a.b)(i.a,{intent:"warning",title:"Warning",description:"Message",mdxType:"Alert",__source:{fileName:u,lineNumber:45}})),Object(a.b)(l.a,{paddingVertical:8,mdxType:"Box",__source:{fileName:u,lineNumber:47}},Object(a.b)(i.a,{intent:"danger",title:"Danger",description:"Message",actionNode:Object(a.b)(c.a,{title:"Action",appearance:"minimal",color:"primary",mdxType:"Button",__source:{fileName:u,lineNumber:48}}),mdxType:"Alert",__source:{fileName:u,lineNumber:48}}))),Object(a.b)("h2",Object(r.a)({id:"props"},{__source:{fileName:u,lineNumber:51}}),"Props"),Object(a.b)(s.d,{of:i.a,mdxType:"Props",__source:{fileName:u,lineNumber:54}}),Object(a.b)("h2",Object(r.a)({id:"customization"},{__source:{fileName:u,lineNumber:55}}),"Customization"),Object(a.b)("p",{__source:{fileName:u,lineNumber:58}},"Use ",Object(a.b)("inlineCode",{parentName:"p",__source:{fileName:u,lineNumber:58}},"getStyles")," prop"),Object(a.b)("pre",{__source:{fileName:u,lineNumber:59}},Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-tsx"},{__source:{fileName:u,lineNumber:59}}),"AlertStyles {\n  containerStyle: ViewStyle;\n  bodyStyle: ViewStyle;\n  leftWrapperStyle: ViewStyle;\n  titleStyle: TextStyle;\n  descriptionStyle: TextStyle;\n}\n\ngetStyles={(AlertProps, Theme) => AlertStyles}\n")),Object(a.b)("p",{__source:{fileName:u,lineNumber:71}},"Markup"),Object(a.b)("pre",{__source:{fileName:u,lineNumber:72}},Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-tsx"},{__source:{fileName:u,lineNumber:72}}),"<View containerStyle>\n  <View leftWrapperStyle>\n    {icon}\n    <View bodyStyle>\n      <Text titleStyle>{title}</Text>\n      <Text descriptionStyle>{description}</Text>\n    </View>\n  </View>\n  {action}\n</View>\n")))}m&&m===Object(m)&&Object.isExtensible(m)&&Object.defineProperty(m,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src/components/Alert/Alert.mdx"}}),m.isMDXComponent=!0},"./src/components/Button/Button.tsx":function(e,t,o){"use strict";var n=o("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/extends.js"),r=o("./node_modules/react/index.js"),a=o.n(r),s=o("./node_modules/react-native-web/dist/exports/TouchableOpacity/index.js"),i=o("./node_modules/react-native-web/dist/exports/View/index.js"),l=o("./src/theme/Theme.tsx"),c=o("./src/utils/mergeStyles.ts"),u=o("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/regenerator/index.js"),d=o.n(u),b=o("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js"),m=o("./node_modules/react-spring/native.cjs.js"),p=o("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),f=function(e,t){return!e},g=function(){var e=a.a.useReducer(f,!0),t=Object(p.a)(e,2)[1];return a.a.useCallback(function(){t(null)},[t])};g&&g===Object(g)&&Object.isExtensible(g)&&Object.defineProperty(g,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"useForceUpdate",filename:"src/hooks/useForceUpdate.ts"}});var y="/home/travis/build/WeTrustPlatform/paramount/src/components/LoadingIndicators/Dots.tsx",_=Object(m.animated)(i.a);"undefined"!==typeof DotsProps&&DotsProps&&DotsProps===Object(DotsProps)&&Object.isExtensible(DotsProps)&&Object.defineProperty(DotsProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"DotsProps",filename:"src/components/LoadingIndicators/Dots.tsx"}});var j=function(e){var t=Object(l.b)(),o=e.size,n=void 0===o?10:o,a=e.color,s=void 0===a?t.colors.text.primary:a,c=g(),u=Object(m.useTrail)(3,{config:{duration:800},from:{opacity:0},onRest:c,reset:!0,to:function(){var e=Object(b.a)(d.a.mark(function e(t){return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t({opacity:1});case 2:return e.next=4,t({opacity:0});case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()});return r.createElement(i.a,{style:{alignItems:"center",flexDirection:"row",justifyContent:"center"},__source:{fileName:y,lineNumber:34}},u.map(function(e,t){return r.createElement(_,{key:t,style:{backgroundColor:s,borderRadius:999,height:n,marginLeft:3,marginRight:3,opacity:e.opacity,width:n},__source:{fileName:y,lineNumber:42}})}))};j&&j===Object(j)&&Object.isExtensible(j)&&Object.defineProperty(j,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Dots",filename:"src/components/LoadingIndicators/Dots.tsx"}});var x=o("./src/components/Typography/Text.tsx"),B=o("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread.js"),O=o("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),N=o("./src/utils/isControlSize.ts");"undefined"!==typeof ButtonColorProps&&ButtonColorProps&&ButtonColorProps===Object(ButtonColorProps)&&Object.isExtensible(ButtonColorProps)&&Object.defineProperty(ButtonColorProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ButtonColorProps",filename:"src/components/Button/Button.styles.ts"}}),"undefined"!==typeof ButtonAppearances&&ButtonAppearances&&ButtonAppearances===Object(ButtonAppearances)&&Object.isExtensible(ButtonAppearances)&&Object.defineProperty(ButtonAppearances,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ButtonAppearances",filename:"src/components/Button/Button.styles.ts"}}),"undefined"!==typeof ButtonAppearance&&ButtonAppearance&&ButtonAppearance===Object(ButtonAppearance)&&Object.isExtensible(ButtonAppearance)&&Object.defineProperty(ButtonAppearance,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ButtonAppearance",filename:"src/components/Button/Button.styles.ts"}});var P=function(e){return{minimal:{default:{backgroundColor:e.colors.background.content,color:e.colors.text.default},danger:{backgroundColor:e.colors.background.content,color:e.colors.text.danger},primary:{backgroundColor:e.colors.background.content,color:e.colors.text.primary},secondary:{backgroundColor:e.colors.background.content,color:e.colors.text.secondary}},primary:{default:{backgroundColor:e.colors.button.default,color:e.colors.button.defaultText,loadingBackgroundColor:e.colors.background.overlay},danger:{backgroundColor:e.colors.button.danger,color:e.colors.button.dangerText,loadingBackgroundColor:e.colors.background.dangerLight},primary:{backgroundColor:e.colors.button.primary,color:e.colors.button.primaryText,loadingBackgroundColor:e.colors.background.primaryLight},secondary:{backgroundColor:e.colors.button.secondary,color:e.colors.button.secondaryText,loadingBackgroundColor:e.colors.background.secondaryLight}},outline:{default:{backgroundColor:e.colors.background.content,borderColor:e.colors.text.default,borderWidth:3,color:e.colors.text.default},danger:{backgroundColor:e.colors.background.content,borderColor:e.colors.border.danger,borderWidth:3,color:e.colors.text.danger},primary:{backgroundColor:e.colors.background.content,borderColor:e.colors.border.primary,borderWidth:3,color:e.colors.text.primary},secondary:{backgroundColor:e.colors.background.content,borderColor:e.colors.border.secondary,borderWidth:3,color:e.colors.text.secondary}}}};P&&P===Object(P)&&Object.isExtensible(P)&&Object.defineProperty(P,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"getButtonAppearances",filename:"src/components/Button/Button.styles.ts"}}),"undefined"!==typeof ButtonStyles&&ButtonStyles&&ButtonStyles===Object(ButtonStyles)&&Object.isExtensible(ButtonStyles)&&Object.defineProperty(ButtonStyles,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ButtonStyles",filename:"src/components/Button/Button.styles.ts"}}),"undefined"!==typeof GetButtonStyles&&GetButtonStyles&&GetButtonStyles===Object(GetButtonStyles)&&Object.isExtensible(GetButtonStyles)&&Object.defineProperty(GetButtonStyles,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"GetButtonStyles",filename:"src/components/Button/Button.styles.ts"}});var h=function(e,t){var o=e.appearance,n=void 0===o?"primary":o,r=e.color,a=void 0===r?"default":r,s=e.iconAfter,i=e.iconBefore,l=e.isDisabled,c=e.isLoading,u=e.size,d=void 0===u?"medium":u,b=!!s,m=!!i,p=P(t)[n][a],f=p.color,g=p.loadingBackgroundColor,y=Object(O.a)(p,["color","loadingBackgroundColor"]),_=Object(N.a)(d)?{borderRadius:t.controlBorderRadius[d],height:t.controlHeights[d],paddingLeft:2*t.controlPaddings[d],paddingRight:2*t.controlPaddings[d]}:{borderRadius:t.controlBorderRadius.medium,height:d,paddingLeft:2*t.controlPaddings.medium,paddingRight:2*t.controlPaddings.medium},j=_.borderRadius,x=_.height,h=_.paddingLeft,S=_.paddingRight,C=Object(N.a)(d)?t.textSizes[d]:t.textSizes.medium;return{buttonContentWrapperStyle:{paddingLeft:m?8:0,paddingRight:b?8:0},innerButtonWrapperStyle:{alignItems:"center",flexDirection:"row",height:"100%",justifyContent:"center"},textStyle:Object(B.a)({alignItems:"center",color:l?t.colors.text.muted:f,display:"flex",fontWeight:"600",justifyContent:"center",textAlign:"center"},C),touchableStyle:Object(B.a)({borderRadius:j,height:x,paddingLeft:h,paddingRight:S},y,l?{backgroundColor:t.colors.button.disabled}:Object(B.a)({},c?{backgroundColor:g}:{}))}};h&&h===Object(h)&&Object.isExtensible(h)&&Object.defineProperty(h,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"getButtonStyles",filename:"src/components/Button/Button.styles.ts"}}),o.d(t,"a",function(){return C});var S="/home/travis/build/WeTrustPlatform/paramount/src/components/Button/Button.tsx";"undefined"!==typeof ButtonProps&&ButtonProps&&ButtonProps===Object(ButtonProps)&&Object.isExtensible(ButtonProps)&&Object.defineProperty(ButtonProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ButtonProps",filename:"src/components/Button/Button.tsx"}});var C=function(e){var t=e.getStyles,o=e.iconAfter,a=e.iconBefore,u=e.isDisabled,d=void 0!==u&&u,b=e.isLoading,m=void 0!==b&&b,p=e.onPress,f=void 0===p?function(){}:p,g=e.testID,y=e.accessibilityHint,_=e.accessibilityLabel,j=e.accessible,x=void 0===j||j,B=Object(l.b)(),O=Object(c.a)(h,t,B.components.getButtonStyles)(e,B),N=O.touchableStyle,P=O.textStyle,C=O.innerButtonWrapperStyle,A=O.buttonContentWrapperStyle;return r.createElement(s.a,{accessibilityRole:"button",disabled:!(!d&&!m),onPress:f,style:N,testID:g,accessibilityHint:y,accessibilityLabel:_,accessible:x,__source:{fileName:S,lineNumber:123}},r.createElement(i.a,{style:C,__source:{fileName:S,lineNumber:133}},a,r.createElement(i.a,{style:A,__source:{fileName:S,lineNumber:135}},r.createElement(v,Object(n.a)({},e,{textStyle:P,__source:{fileName:S,lineNumber:136}}))),o))};"undefined"!==typeof C&&C&&C===Object(C)&&Object.isExtensible(C)&&Object.defineProperty(C,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Button",filename:"src/components/Button/Button.tsx"}}),"undefined"!==typeof ButtonContentProps&&ButtonContentProps&&ButtonContentProps===Object(ButtonContentProps)&&Object.isExtensible(ButtonContentProps)&&Object.defineProperty(ButtonContentProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ButtonContentProps",filename:"src/components/Button/Button.tsx"}});var v=function(e){var t=e.isLoading,o=e.iconLoading,n=e.icon,a=e.title,s=e.textStyle,i=Object(l.b)();return t?r.createElement(r.Fragment,null,o||r.createElement(j,{color:s?s.color:i.colors.text.white,__source:{fileName:S,lineNumber:156}})):n?r.createElement(r.Fragment,null,n):a?r.createElement(x.a,{getStyles:function(){return{textStyle:s}},__source:{fileName:S,lineNumber:163}},a):r.createElement(r.Fragment,null)}},"./src/utils/isControlSize.ts":function(e,t,o){"use strict";o.d(t,"a",function(){return n});var n=function(e){return"number"!==typeof e};"undefined"!==typeof n&&n&&n===Object(n)&&Object.isExtensible(n)&&Object.defineProperty(n,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"isControlSize",filename:"src/utils/isControlSize.ts"}})}}]);
//# sourceMappingURL=23.a52789c07fb13fb9a33f.js.map