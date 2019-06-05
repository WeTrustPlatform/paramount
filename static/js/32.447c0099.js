(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{"./src/components/Box/Box.mdx":function(e,o,n){var r=n("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(o,"__esModule",{value:!0}),o.default=p;var t=r(n("./node_modules/@babel/runtime/helpers/extends.js")),s=r(n("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js")),i=(r(n("./node_modules/react/index.js")),n("./node_modules/@mdx-js/react/dist/index.es.js")),a=n("./node_modules/docz/dist/index.esm.js"),d=n("./src/components/Box/Box.tsx"),l={},u="wrapper";function p(e){var o=e.components,n=(0,s.default)(e,["components"]);return(0,i.mdx)(u,(0,t.default)({},l,n,{components:o,mdxType:"MDXLayout"}),(0,i.mdx)("h1",{id:"box"},"Box"),(0,i.mdx)("p",null,"Box is a primitive component for convenient layout of components. All style properties are passed as props and has some convenient props such as ",(0,i.mdx)("inlineCode",{parentName:"p"},"paddingHorizontal"),", ",(0,i.mdx)("inlineCode",{parentName:"p"},"marginVertical"),", ",(0,i.mdx)("inlineCode",{parentName:"p"},"shape")," for styling"),(0,i.mdx)("h3",{id:"usage"},"Usage"),(0,i.mdx)(a.Playground,{__position:0,__code:'<Box\n  // ...ViewStyle\n  height={200}\n  width={200}\n  shape="rounded" // pill, circle or square (default)\n  elevation={5}\n  backgroundColor="primaryDefault" // background colors or any custom color "#67c6bb"\n/>',__scope:{props:this?this.props:n,Playground:a.Playground,Props:a.Props,Box:d.Box},mdxType:"Playground"},(0,i.mdx)(d.Box,{height:200,width:200,shape:"rounded",elevation:5,backgroundColor:"primaryDefault",mdxType:"Box"})))}p&&p===Object(p)&&Object.isExtensible(p)&&Object.defineProperty(p,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src/components/Box/Box.mdx"}}),p.isMDXComponent=!0},"./src/components/Box/Box.tsx":function(e,o,n){var r=n("./node_modules/@babel/runtime/helpers/interopRequireWildcard.js"),t=n("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(o,"__esModule",{value:!0}),o.Box=o.shapeMapping=o.BASE_BORDER_RADII=void 0;var s=t(n("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js")),i=r(n("./node_modules/react/index.js")),a=n("./node_modules/react-native-web/dist/index.js"),d=n("./src/theme/index.ts");o.BASE_BORDER_RADII=4,4===Object(4)&&Object.isExtensible(4)&&Object.defineProperty(4,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"BASE_BORDER_RADII",filename:"src/components/Box/Box.tsx"}}),"undefined"!==typeof Shape&&Shape&&Shape===Object(Shape)&&Object.isExtensible(Shape)&&Object.defineProperty(Shape,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Shape",filename:"src/components/Box/Box.tsx"}}),"undefined"!==typeof BoxProps&&BoxProps&&BoxProps===Object(BoxProps)&&Object.isExtensible(BoxProps)&&Object.defineProperty(BoxProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"BoxProps",filename:"src/components/Box/Box.tsx"}});var l={circle:{borderRadius:999},pill:{borderRadius:999},rounded:{borderRadius:4},roundedBottom:{borderBottomLeftRadius:4,borderBottomRightRadius:4},roundedLeft:{borderBottomLeftRadius:4,borderTopLeftRadius:4},roundedRight:{borderBottomRightRadius:4,borderTopRightRadius:4},roundedTop:{borderTopLeftRadius:4,borderTopRightRadius:4},square:{borderRadius:0}};o.shapeMapping=l,"undefined"!==typeof l&&l&&l===Object(l)&&Object.isExtensible(l)&&Object.defineProperty(l,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"shapeMapping",filename:"src/components/Box/Box.tsx"}});var u={backgroundColor:function(e,o){return o.colors.background[e]?{backgroundColor:o.colors.background[e]}:{backgroundColor:e}},elevation:function(e,o){return o.elevations[e]},shape:function(e){function o(o){return e.apply(this,arguments)}return o.toString=function(){return e.toString()},o}(function(e){return l[e]})},p=function(e){var o=e.children,n=e.style,r=e.testID,t=(0,s.default)(e,["children","style","testID"]),l=(0,d.useTheme)(),p=[],c={};for(var m in t)if(m){var b=u[m];if(b){var x=b(t[m],l);p.push(x)}else c[m]=t[m]}return i.createElement(a.View,{testID:r,style:[c,p,n]},o)};o.Box=p,p&&p===Object(p)&&Object.isExtensible(p)&&Object.defineProperty(p,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Box",filename:"src/components/Box/Box.tsx"}})}}]);
//# sourceMappingURL=32.f91fe9e5e005a95c4af7.js.map