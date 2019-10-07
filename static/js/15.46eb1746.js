(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{"./src/components/Box/Box.tsx":function(e,o,n){"use strict";var r=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),t=n("./node_modules/react/index.js"),i=n("./node_modules/react-native-web/dist/exports/View/index.js"),a=n("./src/theme/Theme.tsx"),l=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/extends.js"),m=n("./node_modules/dlv/dist/dlv.umd.js"),u=n.n(m),b=n("./src/utils/overrides.ts");"undefined"!==typeof SpacingProps&&SpacingProps&&SpacingProps===Object(SpacingProps)&&Object.isExtensible(SpacingProps)&&Object.defineProperty(SpacingProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"SpacingProps",filename:"src/components/Spacing/Spacing.tsx"}}),"undefined"!==typeof SpacingOverride&&SpacingOverride&&SpacingOverride===Object(SpacingOverride)&&Object.isExtensible(SpacingOverride)&&Object.defineProperty(SpacingOverride,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"SpacingOverride",filename:"src/components/Spacing/Spacing.tsx"}});var c=function(e,o){return"number"===typeof e?e:o.spacing[e]};c&&c===Object(c)&&Object.isExtensible(c)&&Object.defineProperty(c,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"getSpacing",filename:"src/components/Spacing/Spacing.tsx"}});var s=function(e){var o=e.size,n=void 0===o?"medium":o,m=e.orientation,s=void 0===m?"vertical":m,d=e.style,p=Object(r.a)(e,["size","orientation","style"]),f=Object(a.b)();return t.createElement(i.a,Object(l.a)({style:["vertical"===s?{height:c(n,f)}:{width:c(n,f)},Object(b.b)(e,d),Object(b.b)(e,u()(f,"overrides.Spacing.style"))]},p,{__source:{fileName:"/home/travis/build/WeTrustPlatform/paramount/src/components/Spacing/Spacing.tsx",lineNumber:44}}))};s&&s===Object(s)&&Object.isExtensible(s)&&Object.defineProperty(s,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Spacing",filename:"src/components/Spacing/Spacing.tsx"}}),n.d(o,"a",function(){return p});"undefined"!==typeof BoxProps&&BoxProps&&BoxProps===Object(BoxProps)&&Object.isExtensible(BoxProps)&&Object.defineProperty(BoxProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"BoxProps",filename:"src/components/Box/Box.tsx"}});var d={backgroundColor:function(e,o){return o.colors.background[e]?{backgroundColor:o.colors.background[e]}:{backgroundColor:e}},elevation:function(e,o){return o.elevations[e]},shape:function(e,o){return o.containerShapes[e]},space:function(e,o){return{padding:c(e,o)}},spaceBottom:function(e,o){return{paddingBottom:c(e,o)}},spaceEnd:function(e,o){return{paddingEnd:c(e,o)}},spaceHorizontal:function(e,o){return{paddingHorizontal:c(e,o)}},spaceLeft:function(e,o){return{paddingLeft:c(e,o)}},spaceRight:function(e,o){return{paddingRight:c(e,o)}},spaceStart:function(e,o){return{paddingStart:c(e,o)}},spaceTop:function(e,o){return{paddingTop:c(e,o)}},spaceVertical:function(e,o){return{paddingVertical:c(e,o)}}},p=function(e){var o=e.children,n=e.testID,l=Object(r.a)(e,["children","testID"]),m=Object(a.b)(),u=[],b={};for(var c in l)if(c){var s=d[c];if(s){var p=s(l[c],m);u.push(p)}else b[c]=l[c]}return t.createElement(i.a,{testID:n,style:[b,u],__source:{fileName:"/home/travis/build/WeTrustPlatform/paramount/src/components/Box/Box.tsx",lineNumber:106}},o)};"undefined"!==typeof p&&p&&p===Object(p)&&Object.isExtensible(p)&&Object.defineProperty(p,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Box",filename:"src/components/Box/Box.tsx"}})},"./src/components/Layout/Column.tsx":function(e,o,n){"use strict";n.d(o,"a",function(){return d});var r=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/extends.js"),t=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),i=n("./node_modules/dlv/dist/dlv.umd.js"),a=n.n(i),l=n("./node_modules/react/index.js"),m=n("./node_modules/react-native-web/dist/exports/View/index.js"),u=n("./src/theme/Theme.tsx"),b=n("./src/utils/overrides.ts"),c=n("./src/components/Layout/LayoutContext.tsx"),s=n("./src/components/Layout/Row.tsx");"undefined"!==typeof ColumnConfigBase&&ColumnConfigBase&&ColumnConfigBase===Object(ColumnConfigBase)&&Object.isExtensible(ColumnConfigBase)&&Object.defineProperty(ColumnConfigBase,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ColumnConfigBase",filename:"src/components/Layout/Column.tsx"}}),"undefined"!==typeof ColumnConfig&&ColumnConfig&&ColumnConfig===Object(ColumnConfig)&&Object.isExtensible(ColumnConfig)&&Object.defineProperty(ColumnConfig,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ColumnConfig",filename:"src/components/Layout/Column.tsx"}}),"undefined"!==typeof ColumnProps&&ColumnProps&&ColumnProps===Object(ColumnProps)&&Object.isExtensible(ColumnProps)&&Object.defineProperty(ColumnProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ColumnProps",filename:"src/components/Layout/Column.tsx"}}),"undefined"!==typeof ColumnOverride&&ColumnOverride&&ColumnOverride===Object(ColumnOverride)&&Object.isExtensible(ColumnOverride)&&Object.defineProperty(ColumnOverride,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ColumnOverride",filename:"src/components/Layout/Column.tsx"}});var d=function(e){var o=e.children,n=e.style,i=e.xsmall,d=e.small,x=e.medium,C=e.large,g=e.xlarge,N=e.offsetXsmall,h=e.offsetSmall,j=e.offsetMedium,O=e.offsetLarge,y=e.offsetXlarge,v=Object(t.a)(e,["children","style","xsmall","small","medium","large","xlarge","offsetXsmall","offsetSmall","offsetMedium","offsetLarge","offsetXlarge"]),T=Object(u.b)(),B=Object(c.e)(),P=B.currentScreenSize,w=B.gridColumnCount,W=l.useContext(s.a),R=_({xsmall:i,small:d,medium:x,large:C,xlarge:g,offsetXsmall:N,offsetSmall:h,offsetMedium:j,offsetLarge:O,offsetXlarge:y}),k=R.columns,L=R.offsetColumns,S=p(k,P),E=f(S||12,w),V=p(L,P),z=f(V||0,w);return l.createElement(m.a,Object(r.a)({style:[{flex:1,flexBasis:E,marginLeft:z,maxWidth:E,paddingLeft:W/2,paddingRight:W/2},Object(b.b)(e,n),Object(b.b)(e,a()(T,"overrides.Column.style"))]},v,{__source:{fileName:"/home/travis/build/WeTrustPlatform/paramount/src/components/Layout/Column.tsx",lineNumber:122}}),o)};"undefined"!==typeof d&&d&&d===Object(d)&&Object.isExtensible(d)&&Object.defineProperty(d,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Column",filename:"src/components/Layout/Column.tsx"}});var p=function(e,o){var n=e[o];if(n)return n;var r=function(e,o){var n=c.b.indexOf(o),r=c.b.find(function(o,r){return!(n>r)&&!!e[o]});return r?e[r]:null}(e,o);return r||null},f=function(e,o){return"".concat(e*(100/o),"%")};"undefined"!==typeof f&&f&&f===Object(f)&&Object.isExtensible(f)&&Object.defineProperty(f,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"getProportion",filename:"src/components/Layout/Column.tsx"}});var _=function(e){var o=e.xsmall,n=e.small,r=e.medium,t=e.large,i=e.xlarge,a=e.offsetXsmall,l=e.offsetSmall,m=e.offsetMedium;return{columns:{xsmall:o,small:n,medium:r,large:t,xlarge:i},offsetColumns:{large:e.offsetLarge,medium:m,small:l,xlarge:e.offsetXlarge,xsmall:a}}};"undefined"!==typeof _&&_&&_===Object(_)&&Object.isExtensible(_)&&Object.defineProperty(_,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"splitColumnConfig",filename:"src/components/Layout/Column.tsx"}})},"./src/components/Layout/Container.tsx":function(e,o,n){"use strict";n.d(o,"a",function(){return s});var r=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/extends.js"),t=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),i=n("./node_modules/dlv/dist/dlv.umd.js"),a=n.n(i),l=n("./node_modules/react/index.js"),m=n("./node_modules/react-native-web/dist/exports/View/index.js"),u=n("./src/theme/Theme.tsx"),b=n("./src/utils/overrides.ts"),c=n("./src/components/Layout/LayoutContext.tsx");"undefined"!==typeof ContainerProps&&ContainerProps&&ContainerProps===Object(ContainerProps)&&Object.isExtensible(ContainerProps)&&Object.defineProperty(ContainerProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ContainerProps",filename:"src/components/Layout/Container.tsx"}}),"undefined"!==typeof ContainerOverride&&ContainerOverride&&ContainerOverride===Object(ContainerOverride)&&Object.isExtensible(ContainerOverride)&&Object.defineProperty(ContainerOverride,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ContainerOverride",filename:"src/components/Layout/Container.tsx"}});var s=function(e){var o=e.children,n=e.size,i=e.fluid,s=void 0!==i&&i,p=e.style,f=Object(t.a)(e,["children","size","fluid","style"]),_=Object(u.b)(),x=Object(c.e)(),C=x.gutterWidth,g=x.containerSizes,N=x.currentScreenSize;return l.createElement(m.a,Object(r.a)({style:[{marginLeft:"auto",marginRight:"auto",maxWidth:s?"100%":n?g[n]:d(g,N),paddingLeft:C/2,paddingRight:C/2,width:"100%"},Object(b.b)(e,p),Object(b.b)(e,a()(_,"overrides.Container.style"))]},f,{__source:{fileName:"/home/travis/build/WeTrustPlatform/paramount/src/components/Layout/Container.tsx",lineNumber:48}}),o)};"undefined"!==typeof s&&s&&s===Object(s)&&Object.isExtensible(s)&&Object.defineProperty(s,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Container",filename:"src/components/Layout/Container.tsx"}});var d=function(e,o){var n=c.b.indexOf(o),r=c.b.find(function(o,r){return"xsmall"!==o&&(!(n>r)&&!!e[o])});if("xsmall"!==r)return r?e[r]:void 0}},"./src/components/Layout/Row.tsx":function(e,o,n){"use strict";n.d(o,"a",function(){return d}),n.d(o,"b",function(){return p});var r=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/extends.js"),t=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),i=n("./node_modules/dlv/dist/dlv.umd.js"),a=n.n(i),l=n("./node_modules/react/index.js"),m=n("./node_modules/react-native-web/dist/exports/View/index.js"),u=n("./src/theme/Theme.tsx"),b=n("./src/utils/overrides.ts"),c=n("./src/components/Layout/LayoutContext.tsx"),s="/home/travis/build/WeTrustPlatform/paramount/src/components/Layout/Row.tsx";"undefined"!==typeof RowProps&&RowProps&&RowProps===Object(RowProps)&&Object.isExtensible(RowProps)&&Object.defineProperty(RowProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"RowProps",filename:"src/components/Layout/Row.tsx"}}),"undefined"!==typeof RowOverride&&RowOverride&&RowOverride===Object(RowOverride)&&Object.isExtensible(RowOverride)&&Object.defineProperty(RowOverride,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"RowOverride",filename:"src/components/Layout/Row.tsx"}});var d=l.createContext(c.d.gutterWidth);"undefined"!==typeof d&&d&&d===Object(d)&&Object.isExtensible(d)&&Object.defineProperty(d,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"GutterWidthContext",filename:"src/components/Layout/Row.tsx"}});var p=function(e){var o=e.children,n=e.hasGutter,i=void 0===n||n,p=e.style,f=Object(t.a)(e,["children","hasGutter","style"]),_=Object(c.e)().gutterWidth,x=Object(u.b)();return l.createElement(m.a,Object(r.a)({style:[{flexDirection:"row",flexWrap:"wrap",marginLeft:i?-_/2:0,marginRight:i?-_/2:0},Object(b.b)(e,p),Object(b.b)(e,a()(x,"overrides.Row.style"))]},f,{__source:{fileName:s,lineNumber:42}}),l.createElement(d.Provider,{value:i?_:0,__source:{fileName:s,lineNumber:55}},o))};"undefined"!==typeof p&&p&&p===Object(p)&&Object.isExtensible(p)&&Object.defineProperty(p,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Row",filename:"src/components/Layout/Row.tsx"}})},"./src/components/Layout/RowAndColumn.mdx":function(e,o,n){"use strict";n.r(o),n.d(o,"default",function(){return _});var r=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),t=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/extends.js"),i=(n("./node_modules/react/index.js"),n("./node_modules/@mdx-js/react/dist/index.es.js")),a=n("./node_modules/docz/dist/index.esm.js"),l=n("./src/components/Box/Box.tsx"),m=n("./src/components/Layout/Container.tsx"),u=n("./src/components/Layout/Column.tsx"),b=n("./src/components/Layout/Row.tsx"),c=n("./src/components/Layout/LayoutProvider.tsx"),s=n("./src/components/Typography/Text.tsx"),d="/home/travis/build/WeTrustPlatform/paramount/src/components/Layout/RowAndColumn.mdx",p={},f="wrapper";function _(e){var o=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)(f,Object(t.a)({},p,n,{components:o,mdxType:"MDXLayout",__source:{fileName:d,lineNumber:21}}),Object(i.b)("h1",Object(t.a)({id:"row-and-column"},{__source:{fileName:d,lineNumber:24}}),"Row and Column"),Object(i.b)("p",{__source:{fileName:d,lineNumber:27}},Object(i.b)("inlineCode",{parentName:"p",__source:{fileName:d,lineNumber:27}},"Column")," renders at the width of defined columns count. It will match nearest defined size that is smaller than or equal to current screen size.\n",Object(i.b)("inlineCode",{parentName:"p",__source:{fileName:d,lineNumber:28}},"Row")," wraps ",Object(i.b)("inlineCode",{parentName:"p",__source:{fileName:d,lineNumber:28}},"Column"),"s to keep them horizontal"),Object(i.b)("p",{__source:{fileName:d,lineNumber:29}},"Refer to ",Object(i.b)("inlineCode",{parentName:"p",__source:{fileName:d,lineNumber:29}},"Layout")," docs for setup"),Object(i.b)("h2",Object(t.a)({id:"usage"},{__source:{fileName:d,lineNumber:30}}),"Usage"),Object(i.b)(a.c,{__position:0,__code:'<LayoutProvider>\n  <Box paddingVertical={16}>\n    <Container>\n      <Row>\n        <Column medium={1}>\n          <Box backgroundColor="#67c6bb" height={48} borderWidth={1} />\n        </Column>\n        <Column medium={1}>\n          <Box backgroundColor="#67c6bb" height={48} borderWidth={1} />\n        </Column>\n        <Column medium={1}>\n          <Box backgroundColor="#67c6bb" height={48} borderWidth={1} />\n        </Column>\n        <Column medium={1}>\n          <Box backgroundColor="#67c6bb" height={48} borderWidth={1} />\n        </Column>\n        <Column medium={1}>\n          <Box backgroundColor="#67c6bb" height={48} borderWidth={1} />\n        </Column>\n        <Column medium={1}>\n          <Box backgroundColor="#67c6bb" height={48} borderWidth={1} />\n        </Column>\n        <Column medium={1}>\n          <Box backgroundColor="#67c6bb" height={48} borderWidth={1} />\n        </Column>\n        <Column medium={1}>\n          <Box backgroundColor="#67c6bb" height={48} borderWidth={1} />\n        </Column>\n        <Column medium={1}>\n          <Box backgroundColor="#67c6bb" height={48} borderWidth={1} />\n        </Column>\n        <Column medium={1}>\n          <Box backgroundColor="#67c6bb" height={48} borderWidth={1} />\n        </Column>\n        <Column medium={1}>\n          <Box backgroundColor="#67c6bb" height={48} borderWidth={1} />\n        </Column>\n        <Column medium={1}>\n          <Box backgroundColor="#67c6bb" height={48} borderWidth={1} />\n        </Column>\n      </Row>\n    </Container>\n  </Box>\n  <Box paddingVertical={16}>\n    <Container>\n      <Row>\n        <Column medium={8}>\n          <Box backgroundColor="#67c6bb" height={48} borderWidth={1} />\n        </Column>\n        <Column medium={4}>\n          <Box backgroundColor="#67c6bb" height={48} borderWidth={1} />\n        </Column>\n      </Row>\n    </Container>\n  </Box>\n  <Box paddingVertical={16}>\n    <Container>\n      <Row>\n        <Column medium={4}>\n          <Box backgroundColor="#67c6bb" height={48} borderWidth={1} />\n        </Column>\n        <Column medium={4}>\n          <Box backgroundColor="#67c6bb" height={48} borderWidth={1} />\n        </Column>\n        <Column medium={4}>\n          <Box backgroundColor="#67c6bb" height={48} borderWidth={1} />\n        </Column>\n      </Row>\n    </Container>\n  </Box>\n  <Box paddingVertical={16}>\n    <Container>\n      <Row>\n        <Column medium={6}>\n          <Box backgroundColor="#67c6bb" height={48} borderWidth={1} />\n        </Column>\n        <Column medium={6}>\n          <Box backgroundColor="#67c6bb" height={48} borderWidth={1} />\n        </Column>\n      </Row>\n    </Container>\n  </Box>\n</LayoutProvider>',__scope:{props:this?this.props:n,Playground:a.c,Props:a.d,Box:l.a,Container:m.a,Column:u.a,Row:b.b,LayoutProvider:c.a,Text:s.a},mdxType:"Playground",__source:{fileName:d,lineNumber:33}},Object(i.b)(c.a,{mdxType:"LayoutProvider",__source:{fileName:d,lineNumber:44}},Object(i.b)(l.a,{paddingVertical:16,mdxType:"Box",__source:{fileName:d,lineNumber:45}},Object(i.b)(m.a,{mdxType:"Container",__source:{fileName:d,lineNumber:46}},Object(i.b)(b.b,{mdxType:"Row",__source:{fileName:d,lineNumber:47}},Object(i.b)(u.a,{medium:1,mdxType:"Column",__source:{fileName:d,lineNumber:48}},Object(i.b)(l.a,{backgroundColor:"#67c6bb",height:48,borderWidth:1,mdxType:"Box",__source:{fileName:d,lineNumber:49}})),Object(i.b)(u.a,{medium:1,mdxType:"Column",__source:{fileName:d,lineNumber:51}},Object(i.b)(l.a,{backgroundColor:"#67c6bb",height:48,borderWidth:1,mdxType:"Box",__source:{fileName:d,lineNumber:52}})),Object(i.b)(u.a,{medium:1,mdxType:"Column",__source:{fileName:d,lineNumber:54}},Object(i.b)(l.a,{backgroundColor:"#67c6bb",height:48,borderWidth:1,mdxType:"Box",__source:{fileName:d,lineNumber:55}})),Object(i.b)(u.a,{medium:1,mdxType:"Column",__source:{fileName:d,lineNumber:57}},Object(i.b)(l.a,{backgroundColor:"#67c6bb",height:48,borderWidth:1,mdxType:"Box",__source:{fileName:d,lineNumber:58}})),Object(i.b)(u.a,{medium:1,mdxType:"Column",__source:{fileName:d,lineNumber:60}},Object(i.b)(l.a,{backgroundColor:"#67c6bb",height:48,borderWidth:1,mdxType:"Box",__source:{fileName:d,lineNumber:61}})),Object(i.b)(u.a,{medium:1,mdxType:"Column",__source:{fileName:d,lineNumber:63}},Object(i.b)(l.a,{backgroundColor:"#67c6bb",height:48,borderWidth:1,mdxType:"Box",__source:{fileName:d,lineNumber:64}})),Object(i.b)(u.a,{medium:1,mdxType:"Column",__source:{fileName:d,lineNumber:66}},Object(i.b)(l.a,{backgroundColor:"#67c6bb",height:48,borderWidth:1,mdxType:"Box",__source:{fileName:d,lineNumber:67}})),Object(i.b)(u.a,{medium:1,mdxType:"Column",__source:{fileName:d,lineNumber:69}},Object(i.b)(l.a,{backgroundColor:"#67c6bb",height:48,borderWidth:1,mdxType:"Box",__source:{fileName:d,lineNumber:70}})),Object(i.b)(u.a,{medium:1,mdxType:"Column",__source:{fileName:d,lineNumber:72}},Object(i.b)(l.a,{backgroundColor:"#67c6bb",height:48,borderWidth:1,mdxType:"Box",__source:{fileName:d,lineNumber:73}})),Object(i.b)(u.a,{medium:1,mdxType:"Column",__source:{fileName:d,lineNumber:75}},Object(i.b)(l.a,{backgroundColor:"#67c6bb",height:48,borderWidth:1,mdxType:"Box",__source:{fileName:d,lineNumber:76}})),Object(i.b)(u.a,{medium:1,mdxType:"Column",__source:{fileName:d,lineNumber:78}},Object(i.b)(l.a,{backgroundColor:"#67c6bb",height:48,borderWidth:1,mdxType:"Box",__source:{fileName:d,lineNumber:79}})),Object(i.b)(u.a,{medium:1,mdxType:"Column",__source:{fileName:d,lineNumber:81}},Object(i.b)(l.a,{backgroundColor:"#67c6bb",height:48,borderWidth:1,mdxType:"Box",__source:{fileName:d,lineNumber:82}}))))),Object(i.b)(l.a,{paddingVertical:16,mdxType:"Box",__source:{fileName:d,lineNumber:87}},Object(i.b)(m.a,{mdxType:"Container",__source:{fileName:d,lineNumber:88}},Object(i.b)(b.b,{mdxType:"Row",__source:{fileName:d,lineNumber:89}},Object(i.b)(u.a,{medium:8,mdxType:"Column",__source:{fileName:d,lineNumber:90}},Object(i.b)(l.a,{backgroundColor:"#67c6bb",height:48,borderWidth:1,mdxType:"Box",__source:{fileName:d,lineNumber:91}})),Object(i.b)(u.a,{medium:4,mdxType:"Column",__source:{fileName:d,lineNumber:93}},Object(i.b)(l.a,{backgroundColor:"#67c6bb",height:48,borderWidth:1,mdxType:"Box",__source:{fileName:d,lineNumber:94}}))))),Object(i.b)(l.a,{paddingVertical:16,mdxType:"Box",__source:{fileName:d,lineNumber:99}},Object(i.b)(m.a,{mdxType:"Container",__source:{fileName:d,lineNumber:100}},Object(i.b)(b.b,{mdxType:"Row",__source:{fileName:d,lineNumber:101}},Object(i.b)(u.a,{medium:4,mdxType:"Column",__source:{fileName:d,lineNumber:102}},Object(i.b)(l.a,{backgroundColor:"#67c6bb",height:48,borderWidth:1,mdxType:"Box",__source:{fileName:d,lineNumber:103}})),Object(i.b)(u.a,{medium:4,mdxType:"Column",__source:{fileName:d,lineNumber:105}},Object(i.b)(l.a,{backgroundColor:"#67c6bb",height:48,borderWidth:1,mdxType:"Box",__source:{fileName:d,lineNumber:106}})),Object(i.b)(u.a,{medium:4,mdxType:"Column",__source:{fileName:d,lineNumber:108}},Object(i.b)(l.a,{backgroundColor:"#67c6bb",height:48,borderWidth:1,mdxType:"Box",__source:{fileName:d,lineNumber:109}}))))),Object(i.b)(l.a,{paddingVertical:16,mdxType:"Box",__source:{fileName:d,lineNumber:114}},Object(i.b)(m.a,{mdxType:"Container",__source:{fileName:d,lineNumber:115}},Object(i.b)(b.b,{mdxType:"Row",__source:{fileName:d,lineNumber:116}},Object(i.b)(u.a,{medium:6,mdxType:"Column",__source:{fileName:d,lineNumber:117}},Object(i.b)(l.a,{backgroundColor:"#67c6bb",height:48,borderWidth:1,mdxType:"Box",__source:{fileName:d,lineNumber:118}})),Object(i.b)(u.a,{medium:6,mdxType:"Column",__source:{fileName:d,lineNumber:120}},Object(i.b)(l.a,{backgroundColor:"#67c6bb",height:48,borderWidth:1,mdxType:"Box",__source:{fileName:d,lineNumber:121}}))))))),Object(i.b)("h3",Object(t.a)({id:"column-wrapping"},{__source:{fileName:d,lineNumber:128}}),"Column wrapping"),Object(i.b)(a.c,{__position:1,__code:'<LayoutProvider>\n  <Box paddingVertical={16}>\n    <Container>\n      <Row>\n        <Column xsmall={9}>\n          <Box backgroundColor="#67c6bb" height={48} borderWidth={1} />\n        </Column>\n        <Column xsmall={4}>\n          <Box backgroundColor="#67c6bb" height={48} borderWidth={1} />\n        </Column>\n        <Column xsmall={6}>\n          <Box backgroundColor="#67c6bb" height={48} borderWidth={1} />\n        </Column>\n      </Row>\n    </Container>\n  </Box>\n</LayoutProvider>',__scope:{props:this?this.props:n,Playground:a.c,Props:a.d,Box:l.a,Container:m.a,Column:u.a,Row:b.b,LayoutProvider:c.a,Text:s.a},mdxType:"Playground",__source:{fileName:d,lineNumber:131}},Object(i.b)(c.a,{mdxType:"LayoutProvider",__source:{fileName:d,lineNumber:142}},Object(i.b)(l.a,{paddingVertical:16,mdxType:"Box",__source:{fileName:d,lineNumber:143}},Object(i.b)(m.a,{mdxType:"Container",__source:{fileName:d,lineNumber:144}},Object(i.b)(b.b,{mdxType:"Row",__source:{fileName:d,lineNumber:145}},Object(i.b)(u.a,{xsmall:9,mdxType:"Column",__source:{fileName:d,lineNumber:146}},Object(i.b)(l.a,{backgroundColor:"#67c6bb",height:48,borderWidth:1,mdxType:"Box",__source:{fileName:d,lineNumber:147}})),Object(i.b)(u.a,{xsmall:4,mdxType:"Column",__source:{fileName:d,lineNumber:149}},Object(i.b)(l.a,{backgroundColor:"#67c6bb",height:48,borderWidth:1,mdxType:"Box",__source:{fileName:d,lineNumber:150}})),Object(i.b)(u.a,{xsmall:6,mdxType:"Column",__source:{fileName:d,lineNumber:152}},Object(i.b)(l.a,{backgroundColor:"#67c6bb",height:48,borderWidth:1,mdxType:"Box",__source:{fileName:d,lineNumber:153}}))))))),Object(i.b)("h3",Object(t.a)({id:"offsets"},{__source:{fileName:d,lineNumber:160}}),"Offsets"),Object(i.b)(a.c,{__position:2,__code:'<LayoutProvider>\n  <Box paddingVertical={16}>\n    <Container>\n      <Row>\n        <Column offsetXsmall={2} xsmall={6}>\n          <Box backgroundColor="#67c6bb" height={48} borderWidth={1} />\n        </Column>\n      </Row>\n      <Row>\n        <Column offsetXsmall={4} xsmall={6}>\n          <Box backgroundColor="#67c6bb" height={48} borderWidth={1} />\n        </Column>\n      </Row>\n      <Row>\n        <Column offsetXsmall={6} xsmall={6}>\n          <Box backgroundColor="#67c6bb" height={48} borderWidth={1} />\n        </Column>\n      </Row>\n    </Container>\n  </Box>\n</LayoutProvider>',__scope:{props:this?this.props:n,Playground:a.c,Props:a.d,Box:l.a,Container:m.a,Column:u.a,Row:b.b,LayoutProvider:c.a,Text:s.a},mdxType:"Playground",__source:{fileName:d,lineNumber:163}},Object(i.b)(c.a,{mdxType:"LayoutProvider",__source:{fileName:d,lineNumber:174}},Object(i.b)(l.a,{paddingVertical:16,mdxType:"Box",__source:{fileName:d,lineNumber:175}},Object(i.b)(m.a,{mdxType:"Container",__source:{fileName:d,lineNumber:176}},Object(i.b)(b.b,{mdxType:"Row",__source:{fileName:d,lineNumber:177}},Object(i.b)(u.a,{offsetXsmall:2,xsmall:6,mdxType:"Column",__source:{fileName:d,lineNumber:178}},Object(i.b)(l.a,{backgroundColor:"#67c6bb",height:48,borderWidth:1,mdxType:"Box",__source:{fileName:d,lineNumber:179}}))),Object(i.b)(b.b,{mdxType:"Row",__source:{fileName:d,lineNumber:182}},Object(i.b)(u.a,{offsetXsmall:4,xsmall:6,mdxType:"Column",__source:{fileName:d,lineNumber:183}},Object(i.b)(l.a,{backgroundColor:"#67c6bb",height:48,borderWidth:1,mdxType:"Box",__source:{fileName:d,lineNumber:184}}))),Object(i.b)(b.b,{mdxType:"Row",__source:{fileName:d,lineNumber:187}},Object(i.b)(u.a,{offsetXsmall:6,xsmall:6,mdxType:"Column",__source:{fileName:d,lineNumber:188}},Object(i.b)(l.a,{backgroundColor:"#67c6bb",height:48,borderWidth:1,mdxType:"Box",__source:{fileName:d,lineNumber:189}}))))))),Object(i.b)("h3",Object(t.a)({id:"without-gutter"},{__source:{fileName:d,lineNumber:196}}),"Without gutter"),Object(i.b)(a.c,{__position:3,__code:'<LayoutProvider>\n  <Box paddingVertical={16}>\n    <Container>\n      <Row hasGutter={false}>\n        <Column xsmall={6}>\n          <Box backgroundColor="#67c6bb" height={48} borderWidth={1} />\n        </Column>\n        <Column xsmall={6}>\n          <Box backgroundColor="#67c6bb" height={48} borderWidth={1} />\n        </Column>\n      </Row>\n    </Container>\n  </Box>\n</LayoutProvider>',__scope:{props:this?this.props:n,Playground:a.c,Props:a.d,Box:l.a,Container:m.a,Column:u.a,Row:b.b,LayoutProvider:c.a,Text:s.a},mdxType:"Playground",__source:{fileName:d,lineNumber:199}},Object(i.b)(c.a,{mdxType:"LayoutProvider",__source:{fileName:d,lineNumber:210}},Object(i.b)(l.a,{paddingVertical:16,mdxType:"Box",__source:{fileName:d,lineNumber:211}},Object(i.b)(m.a,{mdxType:"Container",__source:{fileName:d,lineNumber:212}},Object(i.b)(b.b,{hasGutter:!1,mdxType:"Row",__source:{fileName:d,lineNumber:213}},Object(i.b)(u.a,{xsmall:6,mdxType:"Column",__source:{fileName:d,lineNumber:214}},Object(i.b)(l.a,{backgroundColor:"#67c6bb",height:48,borderWidth:1,mdxType:"Box",__source:{fileName:d,lineNumber:215}})),Object(i.b)(u.a,{xsmall:6,mdxType:"Column",__source:{fileName:d,lineNumber:217}},Object(i.b)(l.a,{backgroundColor:"#67c6bb",height:48,borderWidth:1,mdxType:"Box",__source:{fileName:d,lineNumber:218}}))))))),Object(i.b)("h2",Object(t.a)({id:"row-props"},{__source:{fileName:d,lineNumber:225}}),"Row Props"),Object(i.b)(a.d,{of:b.b,mdxType:"Props",__source:{fileName:d,lineNumber:228}}),Object(i.b)("h2",Object(t.a)({id:"row-customization"},{__source:{fileName:d,lineNumber:229}}),"Row Customization"),Object(i.b)("p",{__source:{fileName:d,lineNumber:232}},"Using ",Object(i.b)("inlineCode",{parentName:"p",__source:{fileName:d,lineNumber:232}},"getStyles")," prop"),Object(i.b)("pre",{__source:{fileName:d,lineNumber:233}},Object(i.b)("code",Object(t.a)({parentName:"pre"},{},{__source:{fileName:d,lineNumber:233}}),"RowStyles {\n  rowStyle: ViewStyle;\n}\n\ngetStyles={(RowProps, Theme) => RowStyles}\n")),Object(i.b)("p",{__source:{fileName:d,lineNumber:239}},"Markup"),Object(i.b)("pre",{__source:{fileName:d,lineNumber:240}},Object(i.b)("code",Object(t.a)({parentName:"pre"},{className:"language-tsx"},{__source:{fileName:d,lineNumber:240}}),"<View rowStyle />\n")),Object(i.b)("h2",Object(t.a)({id:"column-props"},{__source:{fileName:d,lineNumber:244}}),"Column Props"),Object(i.b)(a.d,{of:u.a,mdxType:"Props",__source:{fileName:d,lineNumber:247}}),Object(i.b)("h2",Object(t.a)({id:"column-customization"},{__source:{fileName:d,lineNumber:248}}),"Column Customization"),Object(i.b)("p",{__source:{fileName:d,lineNumber:251}},"Using ",Object(i.b)("inlineCode",{parentName:"p",__source:{fileName:d,lineNumber:251}},"getStyles")," prop"),Object(i.b)("pre",{__source:{fileName:d,lineNumber:252}},Object(i.b)("code",Object(t.a)({parentName:"pre"},{},{__source:{fileName:d,lineNumber:252}}),"ColumnStyles {\n  columnStyle: ViewStyle;\n}\n\ngetStyles={(ColumnProps, Theme) => ColumnStyles}\n")),Object(i.b)("p",{__source:{fileName:d,lineNumber:258}},"Markup"),Object(i.b)("pre",{__source:{fileName:d,lineNumber:259}},Object(i.b)("code",Object(t.a)({parentName:"pre"},{className:"language-tsx"},{__source:{fileName:d,lineNumber:259}}),"<View columnStyle />\n")))}_&&_===Object(_)&&Object.isExtensible(_)&&Object.defineProperty(_,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src/components/Layout/RowAndColumn.mdx"}}),_.isMDXComponent=!0}}]);
//# sourceMappingURL=15.7ddf16d1898155d46e1e.js.map