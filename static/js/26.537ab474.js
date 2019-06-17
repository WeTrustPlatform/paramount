(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{"./src/components/Box/Box.tsx":function(e,t,o){"use strict";o.d(t,"b",function(){return a}),o.d(t,"a",function(){return u});var n=o("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),r=o("./node_modules/react/index.js"),s=o("./node_modules/react-native-web/dist/exports/View/index.js"),i=o("./src/theme/Theme.tsx");4===Object(4)&&Object.isExtensible(4)&&Object.defineProperty(4,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"BASE_BORDER_RADII",filename:"src/components/Box/Box.tsx"}}),"undefined"!==typeof Shape&&Shape&&Shape===Object(Shape)&&Object.isExtensible(Shape)&&Object.defineProperty(Shape,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Shape",filename:"src/components/Box/Box.tsx"}}),"undefined"!==typeof BoxProps&&BoxProps&&BoxProps===Object(BoxProps)&&Object.isExtensible(BoxProps)&&Object.defineProperty(BoxProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"BoxProps",filename:"src/components/Box/Box.tsx"}});var a={circle:{borderRadius:999},pill:{borderRadius:999},rounded:{borderRadius:4},roundedBottom:{borderBottomLeftRadius:4,borderBottomRightRadius:4},roundedLeft:{borderBottomLeftRadius:4,borderTopLeftRadius:4},roundedRight:{borderBottomRightRadius:4,borderTopRightRadius:4},roundedTop:{borderTopLeftRadius:4,borderTopRightRadius:4},square:{borderRadius:0}};"undefined"!==typeof a&&a&&a===Object(a)&&Object.isExtensible(a)&&Object.defineProperty(a,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"shapeMapping",filename:"src/components/Box/Box.tsx"}});var l={backgroundColor:function(e,t){return t.colors.background[e]?{backgroundColor:t.colors.background[e]}:{backgroundColor:e}},elevation:function(e,t){return t.elevations[e]},shape:function(e){function t(t){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}(function(e){return a[e]})},u=function(e){var t=e.children,o=e.style,a=e.testID,u=Object(n.a)(e,["children","style","testID"]),c=Object(i.a)(),p=[],b={};for(var m in u)if(m){var d=l[m];if(d){var f=d(u[m],c);p.push(f)}else b[m]=u[m]}return r.createElement(s.a,{testID:a,style:[b,p,o],__source:{fileName:"/home/travis/build/WeTrustPlatform/paramount/src/components/Box/Box.tsx",lineNumber:101}},t)};"undefined"!==typeof u&&u&&u===Object(u)&&Object.isExtensible(u)&&Object.defineProperty(u,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Box",filename:"src/components/Box/Box.tsx"}})},"./src/components/Helpers/Toggle.tsx":function(e,t,o){"use strict";o.d(t,"a",function(){return i});var n=o("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),r=o("./node_modules/react/index.js"),s=o.n(r);"undefined"!==typeof ToggleRenderProps&&ToggleRenderProps&&ToggleRenderProps===Object(ToggleRenderProps)&&Object.isExtensible(ToggleRenderProps)&&Object.defineProperty(ToggleRenderProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ToggleRenderProps",filename:"src/components/Helpers/Toggle.tsx"}}),"undefined"!==typeof ToggleProps&&ToggleProps&&ToggleProps===Object(ToggleProps)&&Object.isExtensible(ToggleProps)&&Object.defineProperty(ToggleProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ToggleProps",filename:"src/components/Helpers/Toggle.tsx"}});var i=function(e){var t=e.children,o=e.initial,r=void 0!==o&&o,i=s.a.useState(r),a=Object(n.a)(i,2),l=a[0],u=a[1],c=s.a.useCallback(function(){u(!l)},[l]),p=s.a.useCallback(function(e){u(e)},[]);return t({on:l,toggle:c,set:p})};"undefined"!==typeof i&&i&&i===Object(i)&&Object.isExtensible(i)&&Object.defineProperty(i,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Toggle",filename:"src/components/Helpers/Toggle.tsx"}})},"./src/components/Helpers/ViewMeasure.tsx":function(e,t,o){"use strict";o.d(t,"a",function(){return l});var n=o("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/extends.js"),r=o("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),s=o("./node_modules/react/index.js"),i=o("./node_modules/react-native-web/dist/exports/View/index.js"),a=o("./src/hooks/useMeasure.ts");"undefined"!==typeof ViewMeasureRenderProp&&ViewMeasureRenderProp&&ViewMeasureRenderProp===Object(ViewMeasureRenderProp)&&Object.isExtensible(ViewMeasureRenderProp)&&Object.defineProperty(ViewMeasureRenderProp,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ViewMeasureRenderProp",filename:"src/components/Helpers/ViewMeasure.tsx"}}),"undefined"!==typeof ViewMeasureProps&&ViewMeasureProps&&ViewMeasureProps===Object(ViewMeasureProps)&&Object.isExtensible(ViewMeasureProps)&&Object.defineProperty(ViewMeasureProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ViewMeasureProps",filename:"src/components/Helpers/ViewMeasure.tsx"}});var l=function(e){var t=e.onMeasure,o=e.children,l=Object(r.a)(e,["onMeasure","children"]),u="function"===typeof o,c=s.useRef(null),p=Object(a.b)({onMeasure:t,ref:c}),b=p.measurements,m=p.onLayout;return s.createElement(i.a,Object(n.a)({ref:c,onLayout:m,children:u?o(b):o},l,{__source:{fileName:"/home/travis/build/WeTrustPlatform/paramount/src/components/Helpers/ViewMeasure.tsx",lineNumber:24}}))};"undefined"!==typeof l&&l&&l===Object(l)&&Object.isExtensible(l)&&Object.defineProperty(l,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ViewMeasure",filename:"src/components/Helpers/ViewMeasure.tsx"}})},"./src/components/Popover/Popover.mdx":function(e,t,o){"use strict";o.r(t),o.d(t,"default",function(){return f});var n=o("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),r=o("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/extends.js"),s=(o("./node_modules/react/index.js"),o("./node_modules/@mdx-js/react/dist/index.es.js")),i=o("./node_modules/docz/dist/index.esm.js"),a=o("./src/components/Box/Box.tsx"),l=o("./src/components/Button/Button.tsx"),u=o("./src/components/Popover/Popover.tsx"),c=o("./src/components/Helpers/Toggle.tsx"),p=o("./src/components/Typography/Text.tsx"),b="/home/travis/build/WeTrustPlatform/paramount/src/components/Popover/Popover.mdx",m={},d="wrapper";function f(e){var t=e.components,o=Object(n.a)(e,["components"]);return Object(s.b)(d,Object(r.a)({},m,o,{components:t,mdxType:"MDXLayout",__source:{fileName:b,lineNumber:21}}),Object(s.b)("h1",Object(r.a)({id:"popover"},{__source:{fileName:b,lineNumber:24}}),"Popover"),Object(s.b)("p",{__source:{fileName:b,lineNumber:27}},"Composes ",Object(s.b)("inlineCode",{parentName:"p",__source:{fileName:b,lineNumber:27}},"Positioner")),Object(s.b)("h3",Object(r.a)({id:"usage"},{__source:{fileName:b,lineNumber:28}}),"Usage"),Object(s.b)(i.c,{__position:0,__code:'<Box height={250}>\n  <Toggle>\n    {({ on, toggle }) => (\n      <Popover\n        isVisible={on}\n        position="right"\n        getStyles={(props, theme) => ({\n          positionerStyle: {},\n          modalContainerStyle: {},\n          popoverStyle: {},\n        })}\n        content={\n          <Box width={200} height={200}>\n            <Text>\n              Due to variety and complexity involved in detecting touch\n              outside of the component on the web and in native, you have to\n              manage its open and closed state\n            </Text>\n            <Button\n              appearance="outline"\n              color="danger"\n              onPress={toggle}\n              title="Close popover"\n            />\n          </Box>\n        }\n      >\n        <Button onPress={toggle} title="Open popover" />\n      </Popover>\n    )}\n  </Toggle>\n</Box>',__scope:{props:this?this.props:o,Playground:i.c,Props:i.d,Box:a.a,Button:l.a,Popover:u.a,Toggle:c.a,Text:p.a},mdxType:"Playground",__source:{fileName:b,lineNumber:31}},Object(s.b)(a.a,{height:250,mdxType:"Box",__source:{fileName:b,lineNumber:41}},Object(s.b)(c.a,{mdxType:"Toggle",__source:{fileName:b,lineNumber:42}},function(e){var t=e.on,o=e.toggle;return Object(s.b)(u.a,{isVisible:t,position:"right",getStyles:function(e,t){return{positionerStyle:{},modalContainerStyle:{},popoverStyle:{}}},content:Object(s.b)(a.a,{width:200,height:200,mdxType:"Box",__source:{fileName:b,lineNumber:50}},Object(s.b)(p.a,{mdxType:"Text",__source:{fileName:b,lineNumber:51}},"Due to variety and complexity involved in detecting touch outside of the component on the web and in native, you have to manage its open and closed state"),Object(s.b)(l.a,{appearance:"outline",color:"danger",onPress:o,title:"Close popover",mdxType:"Button",__source:{fileName:b,lineNumber:56}})),mdxType:"Popover",__source:{fileName:b,lineNumber:46}},Object(s.b)(l.a,{onPress:o,title:"Open popover",mdxType:"Button",__source:{fileName:b,lineNumber:58}}))}))),Object(s.b)("h3",Object(r.a)({id:"props"},{__source:{fileName:b,lineNumber:63}}),"Props"),Object(s.b)(i.d,{of:u.a,mdxType:"Props",__source:{fileName:b,lineNumber:66}}))}f&&f===Object(f)&&Object.isExtensible(f)&&Object.defineProperty(f,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src/components/Popover/Popover.mdx"}}),f.isMDXComponent=!0},"./src/components/Popover/Popover.tsx":function(e,t,o){"use strict";var n=o("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/extends.js"),r=o("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),s=o("./node_modules/react/index.js"),i=o("./node_modules/react-native-web/dist/exports/View/index.js"),a=o("./src/theme/Theme.tsx"),l=o("./src/utils/mergeStyles.ts"),u=o("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread.js"),c=o("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");"undefined"!==typeof PositionInterface&&PositionInterface&&PositionInterface===Object(PositionInterface)&&Object.isExtensible(PositionInterface)&&Object.defineProperty(PositionInterface,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"PositionInterface",filename:"src/constants/Position.ts"}});var p={TOP:"top",TOP_LEFT:"top-left",TOP_RIGHT:"top-right",BOTTOM:"bottom",BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",LEFT:"left",RIGHT:"right"};"undefined"!==typeof p&&p&&p===Object(p)&&Object.isExtensible(p)&&Object.defineProperty(p,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"POSITION",filename:"src/constants/Position.ts"}}),"undefined"!==typeof Position&&Position&&Position===Object(Position)&&Object.isExtensible(Position)&&Object.defineProperty(Position,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Position",filename:"src/constants/Position.ts"}});var b=o("./src/components/Helpers/ViewMeasure.tsx");"undefined"!==typeof PositionerStyles&&PositionerStyles&&PositionerStyles===Object(PositionerStyles)&&Object.isExtensible(PositionerStyles)&&Object.defineProperty(PositionerStyles,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"PositionerStyles",filename:"src/components/Positioner/Positioner.styles.ts"}}),"undefined"!==typeof PositionerStyleProps&&PositionerStyleProps&&PositionerStyleProps===Object(PositionerStyleProps)&&Object.isExtensible(PositionerStyleProps)&&Object.defineProperty(PositionerStyleProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"PositionerStyleProps",filename:"src/components/Positioner/Positioner.styles.ts"}}),"undefined"!==typeof GetPositionerStyles&&GetPositionerStyles&&GetPositionerStyles===Object(GetPositionerStyles)&&Object.isExtensible(GetPositionerStyles)&&Object.defineProperty(GetPositionerStyles,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"GetPositionerStyles",filename:"src/components/Positioner/Positioner.styles.ts"}});var m=function(e,t){return{containerStyle:{},positionerStyle:{opacity:e.isPositionerMeasurementsMeasured?1:0,position:"absolute",zIndex:1}}};m&&m===Object(m)&&Object.isExtensible(m)&&Object.defineProperty(m,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"getPositionerStyles",filename:"src/components/Positioner/Positioner.styles.ts"}});var d="/home/travis/build/WeTrustPlatform/paramount/src/components/Positioner/Positioner.tsx";"undefined"!==typeof PositionerProps&&PositionerProps&&PositionerProps===Object(PositionerProps)&&Object.isExtensible(PositionerProps)&&Object.defineProperty(PositionerProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"PositionerProps",filename:"src/components/Positioner/Positioner.tsx"}});var f={height:0,pageX:0,pageY:0,width:0,x:0,y:0},P=function(e){var t=e.getStyles,o=e.children,n=e.content,r=e.isVisible,i=e.position,P=void 0===i?p.BOTTOM:i,j=s.useState(f),g=Object(c.a)(j,2),y=g[0],v=g[1],_=s.useState(f),O=Object(c.a)(_,2),x=O[0],h=O[1],T=Object(a.a)(),S=!(!x.width&&!x.height),M=Object(l.a)(m,t,T.components.getPositionerStyles)({isPositionerMeasurementsMeasured:S},T),w=M.positionerStyle,B=M.containerStyle,E=function(e){var t=e.position,o=e.targetMeasurements,n=e.positionerMeasurements;switch(t){case p.TOP_LEFT:return{left:0,top:-n.height-14};case p.TOP:return{left:o.width/2,top:-n.height-14,transform:[{translateX:-n.width/2}]};case p.TOP_RIGHT:return{right:0,top:-n.height-14};case p.LEFT:return{left:0-n.width-14,top:-n.height/2+o.height/2};case p.RIGHT:return{right:0-n.width-14,top:-n.height/2+o.height/2};case p.BOTTOM_RIGHT:return{right:0,top:o.height+14};case p.BOTTOM:return{left:o.width/2,top:o.height+14,transform:[{translateX:-n.width/2}]};case p.BOTTOM_LEFT:return{left:0,top:o.height+14};default:return{}}}({position:P,positionerMeasurements:x,targetMeasurements:y});return s.createElement(s.Fragment,null,s.createElement(b.a,{style:B,onMeasure:v,__source:{fileName:d,lineNumber:136}},o,r&&s.createElement(b.a,{style:Object(u.a)({},E,w),onMeasure:h,__source:{fileName:d,lineNumber:139}},n)))};P&&P===Object(P)&&Object.isExtensible(P)&&Object.defineProperty(P,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Positioner",filename:"src/components/Positioner/Positioner.tsx"}}),"undefined"!==typeof PopoverStyles&&PopoverStyles&&PopoverStyles===Object(PopoverStyles)&&Object.isExtensible(PopoverStyles)&&Object.defineProperty(PopoverStyles,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"PopoverStyles",filename:"src/components/Popover/Popover.styles.ts"}}),"undefined"!==typeof GetPopoverStyles&&GetPopoverStyles&&GetPopoverStyles===Object(GetPopoverStyles)&&Object.isExtensible(GetPopoverStyles)&&Object.defineProperty(GetPopoverStyles,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"GetPopoverStyles",filename:"src/components/Popover/Popover.styles.ts"}});var j=function(e,t){return Object(u.a)({popoverStyle:Object(u.a)({backgroundColor:t.colors.background.content,padding:16},t.elevations[2])},m(e))};j&&j===Object(j)&&Object.isExtensible(j)&&Object.defineProperty(j,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"getPopoverStyles",filename:"src/components/Popover/Popover.styles.ts"}}),o.d(t,"a",function(){return y});var g="/home/travis/build/WeTrustPlatform/paramount/src/components/Popover/Popover.tsx";"undefined"!==typeof PopoverProps&&PopoverProps&&PopoverProps===Object(PopoverProps)&&Object.isExtensible(PopoverProps)&&Object.defineProperty(PopoverProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"PopoverProps",filename:"src/components/Popover/Popover.tsx"}});var y=function(e){var t=e.content,o=e.getStyles,u=Object(r.a)(e,["content","getStyles"]),c=Object(a.a)(),p=Object(l.a)(j,o,c.components.getPopoverStyles)({isPositionerMeasurementsMeasured:!1},c).popoverStyle;return s.createElement(P,Object(n.a)({},u,{getStyles:o,content:s.createElement(i.a,{style:p,__source:{fileName:g,lineNumber:31}},t),__source:{fileName:g,lineNumber:28}}))};"undefined"!==typeof y&&y&&y===Object(y)&&Object.isExtensible(y)&&Object.defineProperty(y,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Popover",filename:"src/components/Popover/Popover.tsx"}})},"./src/hooks/useMeasure.ts":function(e,t,o){"use strict";o.d(t,"a",function(){return c}),o.d(t,"b",function(){return b});var n=o("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread.js"),r=o("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),s=o("./node_modules/react/index.js"),i=o("./node_modules/react-native-web/dist/exports/Dimensions/index.js"),a=o("./node_modules/react-native-web/dist/exports/findNodeHandle/index.js"),l=o("./node_modules/react-native-web/dist/exports/Platform/index.js"),u=o("./node_modules/react-native-web/dist/exports/UIManager/index.js");"undefined"!==typeof Measurements&&Measurements&&Measurements===Object(Measurements)&&Object.isExtensible(Measurements)&&Object.defineProperty(Measurements,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Measurements",filename:"src/hooks/useMeasure.ts"}}),"undefined"!==typeof UseMeasureProps&&UseMeasureProps&&UseMeasureProps===Object(UseMeasureProps)&&Object.isExtensible(UseMeasureProps)&&Object.defineProperty(UseMeasureProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"UseMeasureProps",filename:"src/hooks/useMeasure.ts"}});var c={height:0,pageX:0,pageY:0,width:0,x:0,y:0};"undefined"!==typeof c&&c&&c===Object(c)&&Object.isExtensible(c)&&Object.defineProperty(c,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"initialMeasurements",filename:"src/hooks/useMeasure.ts"}});var p=function(e){return"web"===l.a.OS?e+window.scrollY:e},b=function(e){var t=e.onMeasure,o=e.ref,l=s.useState(c),b=Object(r.a)(l,2),m=b[0],d=b[1],f=s.useCallback(function(e){var r=Object(a.a)(o.current),s=m;r&&u.a.measure(r,function(o,r,i,a,l,u){var c=Object(n.a)({},s,e,{pageX:l,pageY:p(u)});d(c),t&&t(c)})},[m]),P=s.useCallback(function(e){var t=e.nativeEvent.layout;f(t)},[f,m]),j=s.useCallback(function(){f()},[f,m]);return s.useEffect(function(){return i.a.addEventListener("change",j),function(){return i.a.removeEventListener("change",j)}},[m]),{measurements:m,onLayout:P,onMeasure:f}};"undefined"!==typeof b&&b&&b===Object(b)&&Object.isExtensible(b)&&Object.defineProperty(b,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"useMeasure",filename:"src/hooks/useMeasure.ts"}})}}]);
//# sourceMappingURL=26.f973c8c9975a8fc54b18.js.map