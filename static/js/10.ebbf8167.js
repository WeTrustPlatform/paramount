(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"./src/components/Collapsible/Collapsible.mdx":function(e,n,t){var o=t("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(n,"__esModule",{value:!0}),n.default=m;var s=o(t("./node_modules/@babel/runtime/helpers/extends.js")),l=o(t("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js")),r=(o(t("./node_modules/react/index.js")),t("./node_modules/@mdx-js/react/dist/index.es.js")),i=t("./node_modules/react-powerplug/dist/react-powerplug.esm.js"),a=t("./node_modules/docz/dist/index.esm.js"),u=t("./src/components/Collapsible/index.ts"),c=t("./src/components/Box/index.ts"),d=t("./src/components/Typography/index.ts"),p={},b="wrapper";function m(e){var n=e.components,t=(0,l.default)(e,["components"]);return(0,r.mdx)(b,(0,s.default)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.mdx)("h1",{id:"collapsible"},"Collapsible"),(0,r.mdx)("h3",{id:"usage"},"Usage"),(0,r.mdx)(a.Playground,{__position:0,__code:'<Toggle initial={false}>\n  {({ on, toggle }) => (\n    <Collapsible\n      isAnimated={true}\n      // The header will move to the end of the content when revealing content\n      shouldMoveWithEndOfContent={false}\n      initialIsOpen={false}\n      isOpen={on}\n      onOpen={toggle}\n      onClose={toggle}\n      getStyles={() => ({\n        touchableStyle: {},\n        outerWrapperStyle: {},\n        contentWrapperStyle: {},\n        textStyle: {},\n        iconWrapperStyle: {},\n      })}\n      title="Stays at top of content"\n      header={null}\n    >\n      <Box\n        marginVertical={16}\n        justifyContent="center"\n        alignItems="center"\n        height={300}\n        backgroundColor="#67c6bb"\n      >\n        <Text color="white">Content of the Collapsible</Text>\n      </Box>\n    </Collapsible>\n  )}\n</Toggle>\n<Box paddingTop={24}>\n  <Toggle initial={false}>\n    {({ on, toggle }) => (\n      <Collapsible\n        isAnimated={true}\n        shouldMoveWithEndOfContent\n        isOpen={on}\n        onOpen={toggle}\n        onClose={toggle}\n        title="Moves with end of content"\n      >\n        <Box\n          marginVertical={16}\n          justifyContent="center"\n          alignItems="center"\n          height={300}\n          backgroundColor="#67c6bb"\n        >\n          <Text color="white">Content of the Collapsible</Text>\n        </Box>\n      </Collapsible>\n    )}\n  </Toggle>\n</Box>',__scope:{props:this?this.props:t,Toggle:i.Toggle,Playground:a.Playground,Props:a.Props,Collapsible:u.Collapsible,Box:c.Box,Text:d.Text},mdxType:"Playground"},(0,r.mdx)(i.Toggle,{initial:!1,mdxType:"Toggle"},function(e){var n=e.on,t=e.toggle;return(0,r.mdx)(u.Collapsible,{isAnimated:!0,shouldMoveWithEndOfContent:!1,initialIsOpen:!1,isOpen:n,onOpen:t,onClose:t,getStyles:function(){return{touchableStyle:{},outerWrapperStyle:{},contentWrapperStyle:{},textStyle:{},iconWrapperStyle:{}}},title:"Stays at top of content",header:null,mdxType:"Collapsible"},(0,r.mdx)(c.Box,{marginVertical:16,justifyContent:"center",alignItems:"center",height:300,backgroundColor:"#67c6bb",mdxType:"Box"},(0,r.mdx)(d.Text,{color:"white",mdxType:"Text"},"Content of the Collapsible")))}),(0,r.mdx)(c.Box,{paddingTop:24,mdxType:"Box"},(0,r.mdx)(i.Toggle,{initial:!1,mdxType:"Toggle"},function(e){var n=e.on,t=e.toggle;return(0,r.mdx)(u.Collapsible,{isAnimated:!0,shouldMoveWithEndOfContent:!0,isOpen:n,onOpen:t,onClose:t,title:"Moves with end of content",mdxType:"Collapsible"},(0,r.mdx)(c.Box,{marginVertical:16,justifyContent:"center",alignItems:"center",height:300,backgroundColor:"#67c6bb",mdxType:"Box"},(0,r.mdx)(d.Text,{color:"white",mdxType:"Text"},"Content of the Collapsible")))}))),(0,r.mdx)("h3",{id:"props"},"Props"),(0,r.mdx)(a.Props,{of:u.Collapsible,mdxType:"Props"}))}m&&m===Object(m)&&Object.isExtensible(m)&&Object.defineProperty(m,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src/components/Collapsible/Collapsible.mdx"}}),m.isMDXComponent=!0},"./src/components/Collapsible/Collapsible.styles.ts":function(e,n){Object.defineProperty(n,"__esModule",{value:!0}),n.getCollapsibleStyles=void 0,"undefined"!==typeof CollapsibleStyles&&CollapsibleStyles&&CollapsibleStyles===Object(CollapsibleStyles)&&Object.isExtensible(CollapsibleStyles)&&Object.defineProperty(CollapsibleStyles,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"CollapsibleStyles",filename:"src/components/Collapsible/Collapsible.styles.ts"}}),"undefined"!==typeof GetCollapsibleStyles&&GetCollapsibleStyles&&GetCollapsibleStyles===Object(GetCollapsibleStyles)&&Object.isExtensible(GetCollapsibleStyles)&&Object.defineProperty(GetCollapsibleStyles,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"GetCollapsibleStyles",filename:"src/components/Collapsible/Collapsible.styles.ts"}});var t=function(e,n){return{contentWrapperStyle:{overflow:"hidden"},iconWrapperStyle:{paddingLeft:4},outerWrapperStyle:{alignItems:"center",display:"flex",flexDirection:"row"},textStyle:{},touchableStyle:{}}};n.getCollapsibleStyles=t,t&&t===Object(t)&&Object.isExtensible(t)&&Object.defineProperty(t,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"getCollapsibleStyles",filename:"src/components/Collapsible/Collapsible.styles.ts"}})},"./src/components/Collapsible/Collapsible.tsx":function(e,n,t){var o=t("./node_modules/@babel/runtime/helpers/interopRequireWildcard.js"),s=t("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(n,"__esModule",{value:!0}),n.Collapsible=void 0;var l=s(t("./node_modules/@babel/runtime/helpers/objectSpread.js")),r=s(t("./node_modules/@babel/runtime/helpers/extends.js")),i=s(t("./node_modules/@babel/runtime/helpers/slicedToArray.js")),a=s(t("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js")),u=o(t("./node_modules/react/index.js")),c=t("./node_modules/react-native-web/dist/index.js"),d=t("./node_modules/react-spring/native.cjs.js"),p=t("./src/constants/Animation.ts"),b=t("./src/hooks/index.ts"),m=t("./src/theme/index.ts"),f=t("./src/utils/mergeStyles.ts"),y=t("./src/components/Helpers/index.ts"),v=t("./src/components/Icon/index.ts"),h=t("./src/components/Typography/index.ts"),j=t("./src/components/Collapsible/Collapsible.styles.ts"),x=(0,d.animated)(c.View);"undefined"!==typeof CollapsibleProps&&CollapsibleProps&&CollapsibleProps===Object(CollapsibleProps)&&Object.isExtensible(CollapsibleProps)&&Object.defineProperty(CollapsibleProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"CollapsibleProps",filename:"src/components/Collapsible/Collapsible.tsx"}});var g=function(e){var n=e.isAnimated,t=void 0===n||n,o=e.shouldMoveWithEndOfContent,s=void 0!==o&&o,g=e.title,_=e.children,O=e.header,P=e.initialIsOpen,C=void 0!==P&&P,M=e.isOpen,w=e.getStyles,E=e.testID,R=e.onOpen,S=void 0===R?function(){}:R,T=e.onClose,W=void 0===T?function(){}:T,k=(0,a.default)(e,["isAnimated","shouldMoveWithEndOfContent","title","children","header","initialIsOpen","isOpen","getStyles","testID","onOpen","onClose"]),V=(0,m.useTheme)(),B=u.useState(C),I=(0,i.default)(B,2),D=I[0],A=I[1],H=u.useState(b.initialMeasurements),L=(0,i.default)(H,2),U=L[0],q=L[1],G="boolean"===typeof M,z=G?M:D,X=(0,f.mergeStyles)(j.getCollapsibleStyles,w)({},V),F=X.touchableStyle,J=X.outerWrapperStyle,N=X.contentWrapperStyle,Y=X.textStyle,K=X.iconWrapperStyle,Q=u.useCallback(function(){G?M?W():S():D?(A(!1),W()):(A(!0),S())},[D,M,G]),Z=(0,d.useSpring)({config:p.springDefaultConfig,height:z?U.height:0}).height,$=u.createElement(c.TouchableOpacity,(0,r.default)({testID:E,onPress:Q,style:F},k),u.createElement(c.View,{style:J},O||u.createElement(u.Fragment,null,u.createElement(h.Text,{size:"large",getStyles:function(){return{textStyle:Y}}},g),u.createElement(c.View,{style:K},u.createElement(v.Icon,{size:28,name:z?"chevron-up":"chevron-down",color:V.colors.text.default}))))),ee=t?u.createElement(x,{style:(0,l.default)({},N,{height:Z})},u.createElement(y.ViewMeasure,{onMeasure:q},_)):u.createElement(c.View,{style:N},z&&_);return s?u.createElement(u.Fragment,null,ee,$):u.createElement(u.Fragment,null,$,ee)};n.Collapsible=g,g&&g===Object(g)&&Object.isExtensible(g)&&Object.defineProperty(g,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Collapsible",filename:"src/components/Collapsible/Collapsible.tsx"}})},"./src/components/Collapsible/index.ts":function(e,n,t){Object.defineProperty(n,"__esModule",{value:!0});var o=t("./src/components/Collapsible/Collapsible.tsx");Object.keys(o).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(n,e,{enumerable:!0,get:function(){return o[e]}})})},"./src/components/Helpers/Responsive.tsx":function(e,n,t){Object.defineProperty(n,"__esModule",{value:!0}),n.Responsive=n.isWindowBelowMaxWidth=n.isWindowAboveMinWidth=void 0;var o=t("./node_modules/react-native-web/dist/index.js");"undefined"!==typeof ResponsiveRenderPropType&&ResponsiveRenderPropType&&ResponsiveRenderPropType===Object(ResponsiveRenderPropType)&&Object.isExtensible(ResponsiveRenderPropType)&&Object.defineProperty(ResponsiveRenderPropType,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ResponsiveRenderPropType",filename:"src/components/Helpers/Responsive.tsx"}}),"undefined"!==typeof ResponsiveChildrenProps&&ResponsiveChildrenProps&&ResponsiveChildrenProps===Object(ResponsiveChildrenProps)&&Object.isExtensible(ResponsiveChildrenProps)&&Object.defineProperty(ResponsiveChildrenProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ResponsiveChildrenProps",filename:"src/components/Helpers/Responsive.tsx"}}),"undefined"!==typeof ResponsiveProps&&ResponsiveProps&&ResponsiveProps===Object(ResponsiveProps)&&Object.isExtensible(ResponsiveProps)&&Object.defineProperty(ResponsiveProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ResponsiveProps",filename:"src/components/Helpers/Responsive.tsx"}});var s=function(e){return o.Dimensions.get("window").width>e};n.isWindowAboveMinWidth=s,s&&s===Object(s)&&Object.isExtensible(s)&&Object.defineProperty(s,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"isWindowAboveMinWidth",filename:"src/components/Helpers/Responsive.tsx"}});var l=function(e){return o.Dimensions.get("window").width<e};n.isWindowBelowMaxWidth=l,l&&l===Object(l)&&Object.isExtensible(l)&&Object.defineProperty(l,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"isWindowBelowMaxWidth",filename:"src/components/Helpers/Responsive.tsx"}});var r=function(e){var n=e.children,t=e.minWidth,o=e.maxWidth,r=!0,i=!0;t&&(r=s(t)),o&&(i=l(o));var a=r&&i;return"function"===typeof n?n({matches:a}):a?n:null};n.Responsive=r,r&&r===Object(r)&&Object.isExtensible(r)&&Object.defineProperty(r,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Responsive",filename:"src/components/Helpers/Responsive.tsx"}})},"./src/components/Helpers/ViewMeasure.tsx":function(e,n,t){var o=t("./node_modules/@babel/runtime/helpers/interopRequireWildcard.js"),s=t("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(n,"__esModule",{value:!0}),n.ViewMeasure=void 0;var l=s(t("./node_modules/@babel/runtime/helpers/extends.js")),r=s(t("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js")),i=o(t("./node_modules/react/index.js")),a=t("./node_modules/react-native-web/dist/index.js"),u=t("./src/hooks/useMeasure.ts");"undefined"!==typeof ViewMeasureRenderPropType&&ViewMeasureRenderPropType&&ViewMeasureRenderPropType===Object(ViewMeasureRenderPropType)&&Object.isExtensible(ViewMeasureRenderPropType)&&Object.defineProperty(ViewMeasureRenderPropType,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ViewMeasureRenderPropType",filename:"src/components/Helpers/ViewMeasure.tsx"}}),"undefined"!==typeof ViewMeasureProps&&ViewMeasureProps&&ViewMeasureProps===Object(ViewMeasureProps)&&Object.isExtensible(ViewMeasureProps)&&Object.defineProperty(ViewMeasureProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ViewMeasureProps",filename:"src/components/Helpers/ViewMeasure.tsx"}});var c=function(e){var n=e.onMeasure,t=e.children,o=(0,r.default)(e,["onMeasure","children"]),s="function"===typeof t,c=(0,u.useMeasure)({onMeasure:n}),d=c.forwardRef,p=c.measurements,b=c.onLayout;return i.createElement(a.View,(0,l.default)({ref:d,onLayout:b,children:s?t(p):t},o))};n.ViewMeasure=c,c&&c===Object(c)&&Object.isExtensible(c)&&Object.defineProperty(c,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ViewMeasure",filename:"src/components/Helpers/ViewMeasure.tsx"}})},"./src/components/Helpers/index.ts":function(e,n,t){Object.defineProperty(n,"__esModule",{value:!0});var o=t("./src/components/Helpers/ViewMeasure.tsx");Object.keys(o).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(n,e,{enumerable:!0,get:function(){return o[e]}})});var s=t("./src/components/Helpers/Responsive.tsx");Object.keys(s).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(n,e,{enumerable:!0,get:function(){return s[e]}})})},"./src/components/Icon/Icon.web.tsx":function(e,n,t){var o=t("./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");Object.defineProperty(n,"__esModule",{value:!0}),n.Icon=void 0;var s=o(t("./node_modules/react/index.js")),l=o(t("./node_modules/react-icons/fi/index.esm.js")),r=t("./src/theme/index.ts"),i=t("./src/components/Typography/Text.styles.ts");var a=function(e){var n=e.name,t=e.color,o=e.size,a=(0,r.useTheme)(),u=l["Fi".concat(function(e){var n=e.replace(/(\-\w)/g,function(e){return e[1].toUpperCase()});return n.charAt(0).toUpperCase()+n.slice(1)}(n))];return s.createElement(u,{color:t?(0,i.getTextColor)(a.colors.text)(t):t,size:o})};n.Icon=a,a&&a===Object(a)&&Object.isExtensible(a)&&Object.defineProperty(a,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Icon",filename:"src/components/Icon/Icon.web.tsx"}})},"./src/components/Icon/index.ts":function(e,n,t){Object.defineProperty(n,"__esModule",{value:!0});var o=t("./src/components/Icon/Icon.web.tsx");Object.keys(o).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(n,e,{enumerable:!0,get:function(){return o[e]}})})},"./src/constants/Animation.ts":function(e,n){Object.defineProperty(n,"__esModule",{value:!0}),n.springDefaultConfig=void 0;var t={friction:40,tension:450};n.springDefaultConfig=t,"undefined"!==typeof t&&t&&t===Object(t)&&Object.isExtensible(t)&&Object.defineProperty(t,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"springDefaultConfig",filename:"src/constants/Animation.ts"}})},"./src/hooks/index.ts":function(e,n,t){Object.defineProperty(n,"__esModule",{value:!0});var o=t("./src/hooks/usePrevious.ts");Object.keys(o).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(n,e,{enumerable:!0,get:function(){return o[e]}})});var s=t("./src/hooks/useMeasure.ts");Object.keys(s).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(n,e,{enumerable:!0,get:function(){return s[e]}})});var l=t("./src/hooks/useElement.ts");Object.keys(l).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(n,e,{enumerable:!0,get:function(){return l[e]}})});var r=t("./src/hooks/useLockBodyScroll.ts");Object.keys(r).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(n,e,{enumerable:!0,get:function(){return r[e]}})})},"./src/hooks/useElement.ts":function(e,n,t){var o=t("./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");Object.defineProperty(n,"__esModule",{value:!0}),n.useElement=void 0;var s=t("./node_modules/exenv/index.js"),l=o(t("./node_modules/react/index.js")),r=function(e){var n=l.useRef(null);l.useEffect(function(){var t,o=function(e){var n=document.createElement("div");return e&&n.setAttribute("id",e),n}(e);return t=o,document.body.lastElementChild&&document.body.insertBefore(t,document.body.lastElementChild.nextElementSibling),n.current&&o.appendChild(n.current),function(){n.current&&n.current.remove(),-1===o.childNodes.length&&o.remove()}},[]);return!n.current&&s.canUseDOM&&(n.current=document.createElement("div")),n.current};n.useElement=r,r&&r===Object(r)&&Object.isExtensible(r)&&Object.defineProperty(r,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"useElement",filename:"src/hooks/useElement.ts"}})},"./src/hooks/useLockBodyScroll.ts":function(e,n,t){var o=t("./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");Object.defineProperty(n,"__esModule",{value:!0}),n.useLockBodyScroll=void 0;var s=o(t("./node_modules/react/index.js")),l=function(e){var n=e.isLocked;s.useEffect(function(){var e=window.getComputedStyle(document.body).overflow,t=function(){document.body.style.overflow=e};return n?document.body.style.overflow="hidden":t(),function(){return t()}},[n])};n.useLockBodyScroll=l,l&&l===Object(l)&&Object.isExtensible(l)&&Object.defineProperty(l,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"useLockBodyScroll",filename:"src/hooks/useLockBodyScroll.ts"}})},"./src/hooks/useMeasure.ts":function(e,n,t){var o=t("./node_modules/@babel/runtime/helpers/interopRequireWildcard.js"),s=t("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(n,"__esModule",{value:!0}),n.useMeasure=n.initialMeasurements=void 0;var l=s(t("./node_modules/@babel/runtime/helpers/objectSpread.js")),r=s(t("./node_modules/@babel/runtime/helpers/slicedToArray.js")),i=o(t("./node_modules/react/index.js")),a=t("./node_modules/react-native-web/dist/index.js");"undefined"!==typeof Measurements&&Measurements&&Measurements===Object(Measurements)&&Object.isExtensible(Measurements)&&Object.defineProperty(Measurements,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Measurements",filename:"src/hooks/useMeasure.ts"}}),"undefined"!==typeof UseMeasureProps&&UseMeasureProps&&UseMeasureProps===Object(UseMeasureProps)&&Object.isExtensible(UseMeasureProps)&&Object.defineProperty(UseMeasureProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"UseMeasureProps",filename:"src/hooks/useMeasure.ts"}});var u={height:0,pageX:0,pageY:0,width:0,x:0,y:0};n.initialMeasurements=u,"undefined"!==typeof u&&u&&u===Object(u)&&Object.isExtensible(u)&&Object.defineProperty(u,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"initialMeasurements",filename:"src/hooks/useMeasure.ts"}});var c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=i.createRef(),t=e.onMeasure,o=i.useState(u),s=(0,r.default)(o,2),c=s[0],d=s[1],p=function(e){a.UIManager.measure((0,a.findNodeHandle)(n.current),function(n,o,s,r,i,a){var u=(0,l.default)({},c,e,{pageX:i,pageY:a});d(u),t&&t(u)})};return{forwardRef:n,measurements:c,onLayout:function(e){var n=e.nativeEvent.layout;p(n)},onMeasure:p}};n.useMeasure=c,c&&c===Object(c)&&Object.isExtensible(c)&&Object.defineProperty(c,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"useMeasure",filename:"src/hooks/useMeasure.ts"}})},"./src/hooks/usePrevious.ts":function(e,n,t){var o=t("./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");Object.defineProperty(n,"__esModule",{value:!0}),n.usePrevious=void 0;var s=o(t("./node_modules/react/index.js")),l=function(e){var n=s.useRef(e);return s.useEffect(function(){n.current=e},[e]),n.current};n.usePrevious=l,l&&l===Object(l)&&Object.isExtensible(l)&&Object.defineProperty(l,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"usePrevious",filename:"src/hooks/usePrevious.ts"}})}}]);
//# sourceMappingURL=10.e29ba8862b1e78c0afd3.js.map