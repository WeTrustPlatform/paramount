(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"./src/components/Box/Box.tsx":function(e,t,n){"use strict";n.d(t,"a",function(){return s});var o=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),r=n("./node_modules/react/index.js"),l=n("./node_modules/react-native-web/dist/exports/View/index.js"),a=n("./src/theme/Theme.tsx");"undefined"!==typeof BoxProps&&BoxProps&&BoxProps===Object(BoxProps)&&Object.isExtensible(BoxProps)&&Object.defineProperty(BoxProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"BoxProps",filename:"src/components/Box/Box.tsx"}});var i={backgroundColor:function(e,t){return t.colors.background[e]?{backgroundColor:t.colors.background[e]}:{backgroundColor:e}},elevation:function(e,t){return t.elevations[e]},shape:function(e,t){return t.containerShapes[e]}},s=function(e){var t=e.children,n=e.style,s=e.testID,c=Object(o.a)(e,["children","style","testID"]),u=Object(a.a)(),m=[],b={};for(var d in c)if(d){var f=i[d];if(f){var p=f(c[d],u);m.push(p)}else b[d]=c[d]}return r.createElement(l.a,{testID:s,style:[b,m,n],__source:{fileName:"/home/travis/build/WeTrustPlatform/paramount/src/components/Box/Box.tsx",lineNumber:55}},t)};"undefined"!==typeof s&&s&&s===Object(s)&&Object.isExtensible(s)&&Object.defineProperty(s,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Box",filename:"src/components/Box/Box.tsx"}})},"./src/components/Collapsible/Collapsible.mdx":function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return f});var o=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),r=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/extends.js"),l=(n("./node_modules/react/index.js"),n("./node_modules/@mdx-js/react/dist/index.es.js")),a=n("./node_modules/docz/dist/index.esm.js"),i=n("./src/components/Box/Box.tsx"),s=n("./src/components/Collapsible/Collapsible.tsx"),c=n("./src/components/Typography/Text.tsx"),u=n("./src/components/Helpers/Toggle.tsx"),m="/home/travis/build/WeTrustPlatform/paramount/src/components/Collapsible/Collapsible.mdx",b={},d="wrapper";function f(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(l.b)(d,Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout",__source:{fileName:m,lineNumber:21}}),Object(l.b)("h1",Object(r.a)({id:"collapsible"},{__source:{fileName:m,lineNumber:23}}),"Collapsible"),Object(l.b)("h3",Object(r.a)({id:"usage"},{__source:{fileName:m,lineNumber:26}}),"Usage"),Object(l.b)(a.c,{__position:0,__code:'<Toggle initial={false}>\n  {({ on, toggle }) => (\n    <Collapsible\n      title="Stays at top of content"\n      header={undefined}\n      initialIsOpen={false}\n      isOpen={on}\n      onOpen={toggle}\n      onClose={toggle}\n      getStyles={() => ({\n        touchableStyle: {},\n        outerWrapperStyle: {},\n        contentWrapperStyle: {},\n        textStyle: {},\n        iconWrapperStyle: {},\n      })}\n    >\n      <Box\n        marginVertical={16}\n        justifyContent="center"\n        alignItems="center"\n        height={300}\n        backgroundColor="#67c6bb"\n      >\n        <Text color="white">Content of the Collapsible</Text>\n      </Box>\n    </Collapsible>\n  )}\n</Toggle>',__scope:{props:this?this.props:n,Playground:a.c,Props:a.d,Box:i.a,Collapsible:s.a,Text:c.a,Toggle:u.a},mdxType:"Playground",__source:{fileName:m,lineNumber:29}},Object(l.b)(u.a,{initial:!1,mdxType:"Toggle",__source:{fileName:m,lineNumber:38}},function(e){var t=e.on,n=e.toggle;return Object(l.b)(s.a,{title:"Stays at top of content",header:void 0,initialIsOpen:!1,isOpen:t,onOpen:n,onClose:n,getStyles:function(){return{touchableStyle:{},outerWrapperStyle:{},contentWrapperStyle:{},textStyle:{},iconWrapperStyle:{}}},mdxType:"Collapsible",__source:{fileName:m,lineNumber:42}},Object(l.b)(i.a,{marginVertical:16,justifyContent:"center",alignItems:"center",height:300,backgroundColor:"#67c6bb",mdxType:"Box",__source:{fileName:m,lineNumber:49}},Object(l.b)(c.a,{color:"white",mdxType:"Text",__source:{fileName:m,lineNumber:50}},"Content of the Collapsible")))})),Object(l.b)("h3",Object(r.a)({id:"props"},{__source:{fileName:m,lineNumber:55}}),"Props"),Object(l.b)(a.d,{of:s.a,mdxType:"Props",__source:{fileName:m,lineNumber:58}}))}f&&f===Object(f)&&Object.isExtensible(f)&&Object.defineProperty(f,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src/components/Collapsible/Collapsible.mdx"}}),f.isMDXComponent=!0},"./src/components/Collapsible/Collapsible.tsx":function(e,t,n){"use strict";var o=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread.js"),r=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/extends.js"),l=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),a=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),i=n("./node_modules/react/index.js"),s=n("./node_modules/react-native-web/dist/exports/TouchableOpacity/index.js"),c=n("./node_modules/react-native-web/dist/exports/View/index.js"),u=n("./node_modules/react-spring/native.cjs.js"),m=n("./src/constants/Animation.ts"),b=n("./src/hooks/useMeasure.ts"),d=n("./src/theme/Theme.tsx"),f=n("./src/utils/mergeStyles.ts"),p=n("./src/components/Helpers/ViewMeasure.tsx"),g=n("./src/components/Icon/Icon.web.tsx"),h=n("./src/components/Typography/Text.tsx");"undefined"!==typeof CollapsibleStyles&&CollapsibleStyles&&CollapsibleStyles===Object(CollapsibleStyles)&&Object.isExtensible(CollapsibleStyles)&&Object.defineProperty(CollapsibleStyles,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"CollapsibleStyles",filename:"src/components/Collapsible/Collapsible.styles.ts"}}),"undefined"!==typeof GetCollapsibleStyles&&GetCollapsibleStyles&&GetCollapsibleStyles===Object(GetCollapsibleStyles)&&Object.isExtensible(GetCollapsibleStyles)&&Object.defineProperty(GetCollapsibleStyles,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"GetCollapsibleStyles",filename:"src/components/Collapsible/Collapsible.styles.ts"}});var y=function(e,t){return{contentWrapperStyle:{overflow:"hidden"},iconWrapperStyle:{paddingLeft:4},outerWrapperStyle:{alignItems:"center",display:"flex",flexDirection:"row"},textStyle:{},touchableStyle:{}}};y&&y===Object(y)&&Object.isExtensible(y)&&Object.defineProperty(y,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"getCollapsibleStyles",filename:"src/components/Collapsible/Collapsible.styles.ts"}}),n.d(t,"a",function(){return O});var x="/home/travis/build/WeTrustPlatform/paramount/src/components/Collapsible/Collapsible.tsx",j=Object(u.animated)(c.a);"undefined"!==typeof CollapsibleProps&&CollapsibleProps&&CollapsibleProps===Object(CollapsibleProps)&&Object.isExtensible(CollapsibleProps)&&Object.defineProperty(CollapsibleProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"CollapsibleProps",filename:"src/components/Collapsible/Collapsible.tsx"}});var O=function(e){var t=e.isAnimated,n=void 0!==t&&t,O=e.shouldMoveWithEndOfContent,_=void 0!==O&&O,T=e.title,C=e.children,P=e.header,S=e.initialIsOpen,v=void 0!==S&&S,E=e.isOpen,w=e.getStyles,k=e.testID,F=e.onOpen,z=void 0===F?function(){}:F,B=e.onClose,M=void 0===B?function(){}:B,R=Object(a.a)(e,["isAnimated","shouldMoveWithEndOfContent","title","children","header","initialIsOpen","isOpen","getStyles","testID","onOpen","onClose"]),W=Object(d.a)(),N=i.useState(v),I=Object(l.a)(N,2),H=I[0],D=I[1],V=i.useState(b.a),A=Object(l.a)(V,2),G=A[0],L=A[1],U="boolean"===typeof E,X=U?E:H,Y=Object(f.a)(y,w,W.components.getCollapsibleStyles)({},W),J=Y.touchableStyle,q=Y.outerWrapperStyle,K=Y.contentWrapperStyle,Q=Y.textStyle,Z=Y.iconWrapperStyle,$=i.useCallback(function(){U?E?M():z():H?(D(!1),M()):(D(!0),z())},[H,E,U]),ee=Object(u.useSpring)({config:m.a,height:X?G.height:0}).height,te=i.createElement(s.a,Object(r.a)({testID:k,onPress:$,style:J},R,{__source:{fileName:x,lineNumber:104}}),i.createElement(c.a,{style:q,__source:{fileName:x,lineNumber:110}},P||i.createElement(i.Fragment,null,i.createElement(h.a,{size:"large",getStyles:function(){return{textStyle:Q}},__source:{fileName:x,lineNumber:113}},T),i.createElement(c.a,{style:Z,__source:{fileName:x,lineNumber:116}},i.createElement(g.a,{size:28,name:X?"chevron-up":"chevron-down",color:W.colors.text.default,__source:{fileName:x,lineNumber:117}}))))),ne=n?i.createElement(j,{style:Object(o.a)({},K,{height:ee}),__source:{fileName:x,lineNumber:131}},i.createElement(p.a,{onMeasure:L,__source:{fileName:x,lineNumber:132}},C)):i.createElement(c.a,{style:K,__source:{fileName:x,lineNumber:135}},X&&C);return _?i.createElement(i.Fragment,null,ne,te):i.createElement(i.Fragment,null,te,ne)};"undefined"!==typeof O&&O&&O===Object(O)&&Object.isExtensible(O)&&Object.defineProperty(O,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Collapsible",filename:"src/components/Collapsible/Collapsible.tsx"}})},"./src/components/Helpers/Toggle.tsx":function(e,t,n){"use strict";n.d(t,"a",function(){return a});var o=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),r=n("./node_modules/react/index.js"),l=n.n(r);"undefined"!==typeof ToggleRenderProps&&ToggleRenderProps&&ToggleRenderProps===Object(ToggleRenderProps)&&Object.isExtensible(ToggleRenderProps)&&Object.defineProperty(ToggleRenderProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ToggleRenderProps",filename:"src/components/Helpers/Toggle.tsx"}}),"undefined"!==typeof ToggleProps&&ToggleProps&&ToggleProps===Object(ToggleProps)&&Object.isExtensible(ToggleProps)&&Object.defineProperty(ToggleProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ToggleProps",filename:"src/components/Helpers/Toggle.tsx"}});var a=function(e){var t=e.children,n=e.initial,r=void 0!==n&&n,a=l.a.useState(r),i=Object(o.a)(a,2),s=i[0],c=i[1],u=l.a.useCallback(function(){c(!s)},[s]),m=l.a.useCallback(function(e){c(e)},[]);return t({on:s,toggle:u,set:m})};"undefined"!==typeof a&&a&&a===Object(a)&&Object.isExtensible(a)&&Object.defineProperty(a,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Toggle",filename:"src/components/Helpers/Toggle.tsx"}})},"./src/components/Helpers/ViewMeasure.tsx":function(e,t,n){"use strict";n.d(t,"a",function(){return s});var o=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/extends.js"),r=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),l=n("./node_modules/react/index.js"),a=n("./node_modules/react-native-web/dist/exports/View/index.js"),i=n("./src/hooks/useMeasure.ts");"undefined"!==typeof ViewMeasureRenderProp&&ViewMeasureRenderProp&&ViewMeasureRenderProp===Object(ViewMeasureRenderProp)&&Object.isExtensible(ViewMeasureRenderProp)&&Object.defineProperty(ViewMeasureRenderProp,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ViewMeasureRenderProp",filename:"src/components/Helpers/ViewMeasure.tsx"}}),"undefined"!==typeof ViewMeasureProps&&ViewMeasureProps&&ViewMeasureProps===Object(ViewMeasureProps)&&Object.isExtensible(ViewMeasureProps)&&Object.defineProperty(ViewMeasureProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ViewMeasureProps",filename:"src/components/Helpers/ViewMeasure.tsx"}});var s=function(e){var t=e.onMeasure,n=e.children,s=Object(r.a)(e,["onMeasure","children"]),c="function"===typeof n,u=l.useRef(null),m=Object(i.b)({onMeasure:t,ref:u}),b=m.measurements,d=m.onLayout;return l.createElement(a.a,Object(o.a)({ref:u,onLayout:d,children:c?n(b):n},s,{__source:{fileName:"/home/travis/build/WeTrustPlatform/paramount/src/components/Helpers/ViewMeasure.tsx",lineNumber:24}}))};"undefined"!==typeof s&&s&&s===Object(s)&&Object.isExtensible(s)&&Object.defineProperty(s,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ViewMeasure",filename:"src/components/Helpers/ViewMeasure.tsx"}})},"./src/components/Icon/Icon.web.tsx":function(e,t,n){"use strict";n.d(t,"a",function(){return i});var o=n("./node_modules/react/index.js"),r=n("./node_modules/react-icons/fi/index.esm.js"),l=n("./src/theme/Theme.tsx"),a=n("./src/components/Typography/Text.styles.ts");var i=function(e){var t=e.name,n=e.color,i=e.size,s=Object(l.a)(),c=r["Fi".concat(function(e){var t=e.replace(/(\-\w)/g,function(e){return e[1].toUpperCase()});return t.charAt(0).toUpperCase()+t.slice(1)}(t))];return o.createElement(c,{color:n?Object(a.c)(s.colors.text)(n):n,size:i,__source:{fileName:"/home/travis/build/WeTrustPlatform/paramount/src/components/Icon/Icon.web.tsx",lineNumber:23}})};"undefined"!==typeof i&&i&&i===Object(i)&&Object.isExtensible(i)&&Object.defineProperty(i,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Icon",filename:"src/components/Icon/Icon.web.tsx"}})},"./src/components/Typography/Text.styles.ts":function(e,t,n){"use strict";n.d(t,"a",function(){return r}),n.d(t,"b",function(){return l}),n.d(t,"c",function(){return a}),n.d(t,"d",function(){return s});var o=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread.js");"undefined"!==typeof TextStylesProps&&TextStylesProps&&TextStylesProps===Object(TextStylesProps)&&Object.isExtensible(TextStylesProps)&&Object.defineProperty(TextStylesProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"TextStylesProps",filename:"src/components/Typography/Text.styles.ts"}}),"undefined"!==typeof TextStyles&&TextStyles&&TextStyles===Object(TextStyles)&&Object.isExtensible(TextStyles)&&Object.defineProperty(TextStyles,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"TextStyles",filename:"src/components/Typography/Text.styles.ts"}}),"undefined"!==typeof GetTextStyles&&GetTextStyles&&GetTextStyles===Object(GetTextStyles)&&Object.isExtensible(GetTextStyles)&&Object.defineProperty(GetTextStyles,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"GetTextStyles",filename:"src/components/Typography/Text.styles.ts"}});var r=function(e){return function(t){return e[t]}};"undefined"!==typeof r&&r&&r===Object(r)&&Object.isExtensible(r)&&Object.defineProperty(r,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"getFontFamily",filename:"src/components/Typography/Text.styles.ts"}});var l=function(e){return function(t){if(t)return e[t]||t}};"undefined"!==typeof l&&l&&l===Object(l)&&Object.isExtensible(l)&&Object.defineProperty(l,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"getFontWeight",filename:"src/components/Typography/Text.styles.ts"}});var a=function(e){return function(t){return e[t]||t}};"undefined"!==typeof a&&a&&a===Object(a)&&Object.isExtensible(a)&&Object.defineProperty(a,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"getTextColor",filename:"src/components/Typography/Text.styles.ts"}});var i=function(e){return function(t){return e[t]||{fontSize:t}}};i&&i===Object(i)&&Object.isExtensible(i)&&Object.defineProperty(i,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"getTextSize",filename:"src/components/Typography/Text.styles.ts"}});var s=function(e,t){var n=e.size,s=e.color,c=e.fontFamily,u=e.isInline,m=e.isItalic,b=e.align,d=e.transform,f=e.weight,p=i(t.textSizes)(n);return{textStyle:Object(o.a)({},p,{color:a(t.colors.text)(s),fontFamily:r(t.fontFamilies)(c),fontWeight:l(t.fontWeights)(f)||p.fontWeight,textAlign:b},u?{alignSelf:"flex-start",flexDirection:"row"}:{},m&&{fontStyle:"italic"},d&&{textTransform:d})}};"undefined"!==typeof s&&s&&s===Object(s)&&Object.isExtensible(s)&&Object.defineProperty(s,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"getTextStyles",filename:"src/components/Typography/Text.styles.ts"}})},"./src/components/Typography/Text.tsx":function(e,t,n){"use strict";n.d(t,"a",function(){return u});var o=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/extends.js"),r=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),l=n("./node_modules/react/index.js"),a=n("./node_modules/react-native-web/dist/exports/Text/index.js"),i=n("./src/theme/Theme.tsx"),s=n("./src/utils/mergeStyles.ts"),c=n("./src/components/Typography/Text.styles.ts");"undefined"!==typeof TextStyleProps&&TextStyleProps&&TextStyleProps===Object(TextStyleProps)&&Object.isExtensible(TextStyleProps)&&Object.defineProperty(TextStyleProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"TextStyleProps",filename:"src/components/Typography/Text.tsx"}}),"undefined"!==typeof TextProps&&TextProps&&TextProps===Object(TextProps)&&Object.isExtensible(TextProps)&&Object.defineProperty(TextProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"TextProps",filename:"src/components/Typography/Text.tsx"}});var u=function(e){var t=e.children,n=e.color,u=void 0===n?"default":n,m=e.fontFamily,b=void 0===m?"text":m,d=e.size,f=void 0===d?"medium":d,p=e.align,g=void 0===p?"left":p,h=e.weight,y=e.isInline,x=void 0!==y&&y,j=e.getStyles,O=e.isItalic,_=void 0!==O&&O,T=e.transform,C=Object(r.a)(e,["children","color","fontFamily","size","align","weight","isInline","getStyles","isItalic","transform"]),P=Object(i.a)(),S=Object(s.a)(c.d,j,P.components.getTextStyles)({align:g,color:u,fontFamily:b,isInline:x,isItalic:_,size:f,transform:T,weight:h},P).textStyle;return l.createElement(a.a,Object(o.a)({style:S},C,{__source:{fileName:"/home/travis/build/WeTrustPlatform/paramount/src/components/Typography/Text.tsx",lineNumber:64}}),t)};"undefined"!==typeof u&&u&&u===Object(u)&&Object.isExtensible(u)&&Object.defineProperty(u,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Text",filename:"src/components/Typography/Text.tsx"}})},"./src/constants/Animation.ts":function(e,t,n){"use strict";n.d(t,"a",function(){return o});var o={friction:40,tension:450};"undefined"!==typeof o&&o&&o===Object(o)&&Object.isExtensible(o)&&Object.defineProperty(o,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"springDefaultConfig",filename:"src/constants/Animation.ts"}})},"./src/hooks/useMeasure.ts":function(e,t,n){"use strict";n.d(t,"a",function(){return u}),n.d(t,"b",function(){return b});var o=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread.js"),r=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),l=n("./node_modules/react/index.js"),a=n("./node_modules/react-native-web/dist/exports/Dimensions/index.js"),i=n("./node_modules/react-native-web/dist/exports/findNodeHandle/index.js"),s=n("./node_modules/react-native-web/dist/exports/Platform/index.js"),c=n("./node_modules/react-native-web/dist/exports/UIManager/index.js");"undefined"!==typeof Measurements&&Measurements&&Measurements===Object(Measurements)&&Object.isExtensible(Measurements)&&Object.defineProperty(Measurements,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Measurements",filename:"src/hooks/useMeasure.ts"}}),"undefined"!==typeof UseMeasureProps&&UseMeasureProps&&UseMeasureProps===Object(UseMeasureProps)&&Object.isExtensible(UseMeasureProps)&&Object.defineProperty(UseMeasureProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"UseMeasureProps",filename:"src/hooks/useMeasure.ts"}});var u={height:0,pageX:0,pageY:0,width:0,x:0,y:0};"undefined"!==typeof u&&u&&u===Object(u)&&Object.isExtensible(u)&&Object.defineProperty(u,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"initialMeasurements",filename:"src/hooks/useMeasure.ts"}});var m=function(e){return"web"===s.a.OS?e+window.scrollY:e},b=function(e){var t=e.onMeasure,n=e.ref,s=l.useState(u),b=Object(r.a)(s,2),d=b[0],f=b[1],p=l.useCallback(function(e){var r=Object(i.a)(n.current),l=d;r&&c.a.measure(r,function(n,r,a,i,s,c){var u=Object(o.a)({},l,e,{pageX:s,pageY:m(c)});f(u),t&&t(u)})},[d]),g=l.useCallback(function(e){var t=e.nativeEvent.layout;p(t)},[p,d]),h=l.useCallback(function(){p()},[p,d]);return l.useEffect(function(){return a.a.addEventListener("change",h),function(){return a.a.removeEventListener("change",h)}},[d]),{measurements:d,onLayout:g,onMeasure:p}};"undefined"!==typeof b&&b&&b===Object(b)&&Object.isExtensible(b)&&Object.defineProperty(b,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"useMeasure",filename:"src/hooks/useMeasure.ts"}})},"./src/theme/Theme.tsx":function(e,t,n){"use strict";var o=n("./node_modules/deepmerge/dist/umd.js"),r=n.n(o),l=n("./node_modules/react/index.js"),a=n.n(l),i=n("./node_modules/react-native-web/dist/exports/Platform/index.js");"undefined"!==typeof ColorPalette&&ColorPalette&&ColorPalette===Object(ColorPalette)&&Object.isExtensible(ColorPalette)&&Object.defineProperty(ColorPalette,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ColorPalette",filename:"src/theme/palette.ts"}}),"undefined"!==typeof Palette&&Palette&&Palette===Object(Palette)&&Object.isExtensible(Palette)&&Object.defineProperty(Palette,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Palette",filename:"src/theme/palette.ts"}});var s={lightest:"#fafafa",light:"#eeeeee",base:"#cccccc",dark:"#a7a7a7",darkest:"#7e7e7e"},c={lightest:"#e5f5ff",light:"#ceecff",base:"#1ca5F7",dark:"#59a9de",darkest:"#33495f"},u={lightest:"#f9e1de",light:"#f9aa9f",base:"#d26557",dark:"#bb584e",darkest:"#b74033"},m={lightest:"#fce8cf",light:"#f2c58a",base:"#f3b058",dark:"#ec8e30",darkest:"#b26500"},b={lightest:"#fef8e7",light:"#fbe6a2",base:"#f7d154",dark:"#d1b047",darkest:"#7e6514"},d={lightest:"#eafff3",light:"#c2edd5",base:"#54bf84",dark:"#42a46e",darkest:"#16a054"},f={lightest:"#d6fcf7",light:"#c0f9f2",base:"#67c6bb",dark:"#3fa296",darkest:"#1b877a"},p={lightest:"#f8f7fc",light:"#eae7f8",base:"#735dd0",dark:"#37248f",darkest:"#37248f"};"undefined"!==typeof purple&&purple&&purple===Object(purple)&&Object.isExtensible(purple)&&Object.defineProperty(purple,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"purple",filename:"src/theme/palette.ts"}}),"undefined"!==typeof teal&&teal&&teal===Object(teal)&&Object.isExtensible(teal)&&Object.defineProperty(teal,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"teal",filename:"src/theme/palette.ts"}}),"undefined"!==typeof green&&green&&green===Object(green)&&Object.isExtensible(green)&&Object.defineProperty(green,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"green",filename:"src/theme/palette.ts"}}),"undefined"!==typeof yellow&&yellow&&yellow===Object(yellow)&&Object.isExtensible(yellow)&&Object.defineProperty(yellow,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"yellow",filename:"src/theme/palette.ts"}}),"undefined"!==typeof orange&&orange&&orange===Object(orange)&&Object.isExtensible(orange)&&Object.defineProperty(orange,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"orange",filename:"src/theme/palette.ts"}}),"undefined"!==typeof red&&red&&red===Object(red)&&Object.isExtensible(red)&&Object.defineProperty(red,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"red",filename:"src/theme/palette.ts"}}),"undefined"!==typeof blue&&blue&&blue===Object(blue)&&Object.isExtensible(blue)&&Object.defineProperty(blue,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"blue",filename:"src/theme/palette.ts"}}),"undefined"!==typeof neutral&&neutral&&neutral===Object(neutral)&&Object.isExtensible(neutral)&&Object.defineProperty(neutral,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"neutral",filename:"src/theme/palette.ts"}});var g={small:4,medium:4,large:4},h={background:{base:"white",content:"white",overlay:"rgba(0,0,0,0.3)",greyLight:s.lightest,greyDefault:"#F5F6F7",greyDark:s.light,primaryLight:f.lightest,primaryDefault:f.base,primaryDark:f.dark,secondaryLight:m.lightest,secondaryDefault:m.base,secondaryDark:m.dark,dangerLight:u.lightest,dangerDefault:u.base,dangerDark:u.dark,infoLight:c.lightest,infoDefault:c.base,infoDark:c.dark,successLight:d.lightest,successDefault:d.base,successDark:d.dark,warningLight:m.lightest,warningDefault:m.base,warningDark:m.dark},border:{default:s.light,primary:f.darkest,secondary:m.darkest,danger:u.darkest,info:c.darkest,success:d.darkest,warning:m.darkest},button:{disabled:s.light,disabledText:s.darkest,default:s.lightest,defaultText:s.darkest,primary:f.base,primaryText:"white",secondary:m.base,secondaryText:"white",danger:u.base,dangerText:"white"},text:{link:s.darkest,default:s.darkest,muted:s.dark,white:"white",selected:"white",primary:f.darkest,secondary:m.darkest,danger:u.darkest,info:c.darkest,success:d.darkest,warning:m.darkest}},y=[{elevation:0,shadowColor:s.dark,shadowOffset:{width:0,height:0},shadowOpacity:0,shadowRadius:0},{elevation:1,shadowColor:s.dark,shadowOffset:{width:1,height:1},shadowOpacity:.15,shadowRadius:8},{elevation:2,shadowColor:s.dark,shadowOffset:{width:2,height:2},shadowOpacity:.2,shadowRadius:10},{elevation:3,shadowColor:s.dark,shadowOffset:{width:3,height:3},shadowOpacity:.25,shadowRadius:12},{elevation:4,shadowColor:s.dark,shadowOffset:{width:4,height:4},shadowOpacity:.3,shadowRadius:8},{elevation:5,shadowColor:s.dark,shadowOffset:{width:5,height:5},shadowOpacity:.35,shadowRadius:8}],x={colors:h,fills:{solid:{neutral:{backgroundColor:s.base,color:"white"},blue:{backgroundColor:c.base,color:"white"},red:{backgroundColor:u.base,color:"white"},orange:{backgroundColor:m.base,color:"white"},yellow:{backgroundColor:b.base,color:b.darkest},green:{backgroundColor:d.base,color:"white"},teal:{backgroundColor:f.base,color:"white"},purple:{backgroundColor:p.base,color:"white"}},subtle:{neutral:{backgroundColor:s.light,color:s.darkest},blue:{backgroundColor:c.light,color:c.darkest},red:{backgroundColor:u.light,color:u.darkest},orange:{backgroundColor:m.light,color:m.darkest},yellow:{backgroundColor:b.light,color:b.darkest},green:{backgroundColor:d.light,color:d.darkest},teal:{backgroundColor:f.light,color:f.darkest},purple:{backgroundColor:p.light,color:p.darkest}}},fontFamilies:"web"===i.a.OS?{heading:'"SF UI Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',mono:'"SF Mono", "Monaco", "Inconsolata", "Fira Mono", "Droid Sans Mono", "Source Code Pro", monospace',text:'"SF UI Text", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"'}:{heading:"System",mono:"System",text:"System"},fontWeights:{bold:"bold",light:"300",normal:"normal"},headingSizes:{xxxlarge:{fontSize:35,letterSpacing:-.2,lineHeight:40},xxlarge:{fontSize:29,letterSpacing:-.2,lineHeight:32},xlarge:{fontSize:24,letterSpacing:-.07,lineHeight:28},large:{fontSize:20,letterSpacing:-.07,lineHeight:24},medium:{fontSize:16,letterSpacing:-.05,lineHeight:20},small:{fontSize:14,letterSpacing:-.05,lineHeight:20}},paragraphSizes:{small:{fontSize:14,lineHeight:24},medium:{fontSize:16,lineHeight:21},large:{fontSize:18,lineHeight:18}},textSizes:{large:{fontSize:20},medium:{fontSize:16},small:{fontSize:14},xsmall:{fontSize:12}},elevations:y,controlBorderRadius:g,controlHeights:{small:40,medium:48,large:56},controlPaddings:{small:8,medium:16,large:24},containerShapes:{circle:{borderRadius:999},pill:{borderRadius:999},rounded:{borderRadius:g.medium},roundedBottom:{borderBottomLeftRadius:g.medium,borderBottomRightRadius:g.medium},roundedLeft:{borderBottomLeftRadius:g.medium,borderTopLeftRadius:g.medium},roundedRight:{borderBottomRightRadius:g.medium,borderTopRightRadius:g.medium},roundedTop:{borderTopLeftRadius:g.medium,borderTopRightRadius:g.medium},square:{borderRadius:0}},components:{}};"undefined"!==typeof x&&x&&x===Object(x)&&Object.isExtensible(x)&&Object.defineProperty(x,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"defaultTheme",filename:"src/theme/defaultTheme.ts"}}),n.d(t,"a",function(){return T});"undefined"!==typeof TextSizes&&TextSizes&&TextSizes===Object(TextSizes)&&Object.isExtensible(TextSizes)&&Object.defineProperty(TextSizes,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"TextSizes",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof TextSize&&TextSize&&TextSize===Object(TextSize)&&Object.isExtensible(TextSize)&&Object.defineProperty(TextSize,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"TextSize",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof HeadingSizes&&HeadingSizes&&HeadingSizes===Object(HeadingSizes)&&Object.isExtensible(HeadingSizes)&&Object.defineProperty(HeadingSizes,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"HeadingSizes",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof HeadingSize&&HeadingSize&&HeadingSize===Object(HeadingSize)&&Object.isExtensible(HeadingSize)&&Object.defineProperty(HeadingSize,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"HeadingSize",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof ParagraphSizes&&ParagraphSizes&&ParagraphSizes===Object(ParagraphSizes)&&Object.isExtensible(ParagraphSizes)&&Object.defineProperty(ParagraphSizes,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ParagraphSizes",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof ParagraphSize&&ParagraphSize&&ParagraphSize===Object(ParagraphSize)&&Object.isExtensible(ParagraphSize)&&Object.defineProperty(ParagraphSize,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ParagraphSize",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof FontFamilies&&FontFamilies&&FontFamilies===Object(FontFamilies)&&Object.isExtensible(FontFamilies)&&Object.defineProperty(FontFamilies,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"FontFamilies",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof FontFamily&&FontFamily&&FontFamily===Object(FontFamily)&&Object.isExtensible(FontFamily)&&Object.defineProperty(FontFamily,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"FontFamily",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof RNFontWeight&&RNFontWeight&&RNFontWeight===Object(RNFontWeight)&&Object.isExtensible(RNFontWeight)&&Object.defineProperty(RNFontWeight,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"RNFontWeight",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof FontWeights&&FontWeights&&FontWeights===Object(FontWeights)&&Object.isExtensible(FontWeights)&&Object.defineProperty(FontWeights,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"FontWeights",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof FontWeight&&FontWeight&&FontWeight===Object(FontWeight)&&Object.isExtensible(FontWeight)&&Object.defineProperty(FontWeight,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"FontWeight",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof TextColors&&TextColors&&TextColors===Object(TextColors)&&Object.isExtensible(TextColors)&&Object.defineProperty(TextColors,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"TextColors",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof TextColor&&TextColor&&TextColor===Object(TextColor)&&Object.isExtensible(TextColor)&&Object.defineProperty(TextColor,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"TextColor",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof ButtonColors&&ButtonColors&&ButtonColors===Object(ButtonColors)&&Object.isExtensible(ButtonColors)&&Object.defineProperty(ButtonColors,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ButtonColors",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof ButtonColorsWithText&&ButtonColorsWithText&&ButtonColorsWithText===Object(ButtonColorsWithText)&&Object.isExtensible(ButtonColorsWithText)&&Object.defineProperty(ButtonColorsWithText,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ButtonColorsWithText",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof ButtonColor&&ButtonColor&&ButtonColor===Object(ButtonColor)&&Object.isExtensible(ButtonColor)&&Object.defineProperty(ButtonColor,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ButtonColor",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof BorderColors&&BorderColors&&BorderColors===Object(BorderColors)&&Object.isExtensible(BorderColors)&&Object.defineProperty(BorderColors,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"BorderColors",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof BorderColor&&BorderColor&&BorderColor===Object(BorderColor)&&Object.isExtensible(BorderColor)&&Object.defineProperty(BorderColor,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"BorderColor",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof BackgroundColors&&BackgroundColors&&BackgroundColors===Object(BackgroundColors)&&Object.isExtensible(BackgroundColors)&&Object.defineProperty(BackgroundColors,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"BackgroundColors",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof BackgroundColor&&BackgroundColor&&BackgroundColor===Object(BackgroundColor)&&Object.isExtensible(BackgroundColor)&&Object.defineProperty(BackgroundColor,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"BackgroundColor",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof Colors&&Colors&&Colors===Object(Colors)&&Object.isExtensible(Colors)&&Object.defineProperty(Colors,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Colors",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof Elevations&&Elevations&&Elevations===Object(Elevations)&&Object.isExtensible(Elevations)&&Object.defineProperty(Elevations,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Elevations",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof Elevation&&Elevation&&Elevation===Object(Elevation)&&Object.isExtensible(Elevation)&&Object.defineProperty(Elevation,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Elevation",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof ControlSizes&&ControlSizes&&ControlSizes===Object(ControlSizes)&&Object.isExtensible(ControlSizes)&&Object.defineProperty(ControlSizes,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ControlSizes",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof ControlSize&&ControlSize&&ControlSize===Object(ControlSize)&&Object.isExtensible(ControlSize)&&Object.defineProperty(ControlSize,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ControlSize",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof FillColorProps&&FillColorProps&&FillColorProps===Object(FillColorProps)&&Object.isExtensible(FillColorProps)&&Object.defineProperty(FillColorProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"FillColorProps",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof FillColors&&FillColors&&FillColors===Object(FillColors)&&Object.isExtensible(FillColors)&&Object.defineProperty(FillColors,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"FillColors",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof FillColor&&FillColor&&FillColor===Object(FillColor)&&Object.isExtensible(FillColor)&&Object.defineProperty(FillColor,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"FillColor",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof Fills&&Fills&&Fills===Object(Fills)&&Object.isExtensible(Fills)&&Object.defineProperty(Fills,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Fills",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof ContainerShapes&&ContainerShapes&&ContainerShapes===Object(ContainerShapes)&&Object.isExtensible(ContainerShapes)&&Object.defineProperty(ContainerShapes,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ContainerShapes",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof ContainerShape&&ContainerShape&&ContainerShape===Object(ContainerShape)&&Object.isExtensible(ContainerShape)&&Object.defineProperty(ContainerShape,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ContainerShape",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof Theme&&Theme&&Theme===Object(Theme)&&Object.isExtensible(Theme)&&Object.defineProperty(Theme,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Theme",filename:"src/theme/Theme.tsx"}});var j=a.a.createContext(x);"undefined"!==typeof j&&j&&j===Object(j)&&Object.isExtensible(j)&&Object.defineProperty(j,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ThemeContext",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof ThemeProviderProps&&ThemeProviderProps&&ThemeProviderProps===Object(ThemeProviderProps)&&Object.isExtensible(ThemeProviderProps)&&Object.defineProperty(ThemeProviderProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ThemeProviderProps",filename:"src/theme/Theme.tsx"}});var O=function(e){return e?r()(x,e):x};O&&O===Object(O)&&Object.isExtensible(O)&&Object.defineProperty(O,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"createTheme",filename:"src/theme/Theme.tsx"}});var _=function(e){var t=e.children,n=e.value,o=O(void 0===n?x:n);return a.a.createElement(j.Provider,{value:o,__source:{fileName:"/home/travis/build/WeTrustPlatform/paramount/src/theme/Theme.tsx",lineNumber:313}},t)};_&&_===Object(_)&&Object.isExtensible(_)&&Object.defineProperty(_,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ThemeProvider",filename:"src/theme/Theme.tsx"}});var T=function(){return a.a.useContext(j)};"undefined"!==typeof T&&T&&T===Object(T)&&Object.isExtensible(T)&&Object.defineProperty(T,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"useTheme",filename:"src/theme/Theme.tsx"}})},"./src/utils/mergeStyles.ts":function(e,t,n){"use strict";n.d(t,"a",function(){return l});var o=n("./node_modules/deepmerge/dist/umd.js"),r=n.n(o);"undefined"!==typeof GetStyles&&GetStyles&&GetStyles===Object(GetStyles)&&Object.isExtensible(GetStyles)&&Object.defineProperty(GetStyles,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"GetStyles",filename:"src/utils/mergeStyles.ts"}}),"undefined"!==typeof ArgumentTypes&&ArgumentTypes&&ArgumentTypes===Object(ArgumentTypes)&&Object.isExtensible(ArgumentTypes)&&Object.defineProperty(ArgumentTypes,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ArgumentTypes",filename:"src/utils/mergeStyles.ts"}}),"undefined"!==typeof ReplaceReturnType&&ReplaceReturnType&&ReplaceReturnType===Object(ReplaceReturnType)&&Object.isExtensible(ReplaceReturnType)&&Object.defineProperty(ReplaceReturnType,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ReplaceReturnType",filename:"src/utils/mergeStyles.ts"}});var l=function(e,t,n){return function(o,l){var a=[e(o,l)];return n&&a.push(n(o,l)),t&&a.push(t(o,l)),r.a.all(a)}};"undefined"!==typeof l&&l&&l===Object(l)&&Object.isExtensible(l)&&Object.defineProperty(l,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"mergeStyles",filename:"src/utils/mergeStyles.ts"}})}}]);
//# sourceMappingURL=5.9060220f93ad6f48cc11.js.map